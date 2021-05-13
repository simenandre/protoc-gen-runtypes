/* eslint no-console: off */
import {
  CodeGeneratorRequest,
  CodeGeneratorResponse,
} from 'google-protobuf/google/protobuf/compiler/plugin_pb';
import { FileDescriptorProto } from 'google-protobuf/google/protobuf/descriptor_pb';
import { ExportMap } from './export-map';
import { printFileDescriptorTSD } from './print-file';
import { replaceProtoSuffix, throwError, withAllStdIn } from './util';
/**
 * This is the ProtoC compiler plugin.
 *
 * The Protocol Buffers Compiler can be extended to [support new languages via plugins](https://developers.google.com/protocol-buffers/docs/reference/other).
 * A plugin is just a program which reads a CodeGeneratorRequest protocol buffer from standard input
 * and then writes a CodeGeneratorResponse protocol buffer to standard output.
 * These message types are defined in [plugin.proto](https://github.com/google/protobuf/blob/master/src/google/protobuf/compiler/plugin.proto).
 *
 */
withAllStdIn((inputBuff: Buffer) => {
  try {
    const typedInputBuff = new Uint8Array(inputBuff.length);
    typedInputBuff.set(inputBuff);

    const codeGenRequest = CodeGeneratorRequest.deserializeBinary(
      typedInputBuff,
    );
    const codeGenResponse = new CodeGeneratorResponse();
    codeGenResponse.setSupportedFeatures(
      CodeGeneratorResponse.Feature.FEATURE_PROTO3_OPTIONAL,
    );
    const exportMap = new ExportMap();
    const fileNameToDescriptor: { [key: string]: FileDescriptorProto } = {};

    codeGenRequest.getProtoFileList().forEach((protoFileDescriptor) => {
      const fileDescriptorName =
        protoFileDescriptor.getName() ||
        throwError('Missing file descriptor name');
      fileNameToDescriptor[fileDescriptorName] = protoFileDescriptor;
      exportMap.addFileDescriptor(protoFileDescriptor);
    });

    codeGenRequest.getFileToGenerateList().forEach((fileName) => {
      const outputFileName = replaceProtoSuffix(fileName);
      const thisFile = new CodeGeneratorResponse.File();
      thisFile.setName(outputFileName + '.d.ts');
      thisFile.setContent(
        printFileDescriptorTSD(fileNameToDescriptor[fileName], exportMap),
      );
      codeGenResponse.addFile(thisFile);
    });

    process.stdout.write(Buffer.from(codeGenResponse.serializeBinary().buffer));
  } catch (err) {
    console.error('protoc-gen-runtypes error: ' + err.stack + '\n');
    process.exit(1);
  }
});
