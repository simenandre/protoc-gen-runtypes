import * as camelCase from 'camelcase';
import { generateRuntypes } from 'generate-runtypes';
import {
  CodeGeneratorRequest,
  CodeGeneratorResponse_Feature,
  FileDescriptorProto,
} from 'ts-proto-descriptors';
import { fromFileDescriptor } from './parse';
import { sendCodeGeneratorResponse } from './resp';
// import { readFile } from 'fs/promises';
import { readToBuffer } from './utils';

export function protoFilesToGenerate(
  request: CodeGeneratorRequest,
): FileDescriptorProto[] {
  return request.protoFile.filter((f) =>
    request.fileToGenerate.includes(f.name),
  );
}

async function main() {
  const stdin = await readToBuffer(process.stdin);
  const request = CodeGeneratorRequest.decode(stdin);

  const files = await Promise.all(
    protoFilesToGenerate(request).map(async (file) => {
      // const source = await readFile(file.name);
      const root = fromFileDescriptor(file);
      const code = generateRuntypes(root, {
        formatRuntypeName: (n) => camelCase(`${n}Rt`, { pascalCase: true }),
      });
      return {
        name: file.name.replace('.proto', '.runtypes.ts'),
        content: code,
      };
    }),
  );

  await sendCodeGeneratorResponse({
    file: files,
    supportedFeatures: CodeGeneratorResponse_Feature.FEATURE_PROTO3_OPTIONAL,
  });
}

main()
  .then(() => {
    process.exit(0);
  })
  .catch((e) => {
    process.stderr.write('FAILED!');
    process.stderr.write(e.message);
    process.stderr.write(e.stack);
    process.exit(1);
  });
