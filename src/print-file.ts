import { GenerateOptions, RootType, generateRuntypes } from 'generate-runtypes';
import { FileDescriptorProto } from 'google-protobuf/google/protobuf/descriptor_pb';
import { CodeWriter } from './code-writer';
import { ExportMap } from './export-map';
import { parseType } from './parse-type';
import {
  filePathToPseudoNamespace,
  getPathToRoot,
  replaceProtoSuffix,
  throwError,
} from './util';

export function printFileDescriptorTSD(
  fileDescriptor: FileDescriptorProto,
  exportMap: ExportMap,
): string {
  const fileName =
    fileDescriptor.getName() || throwError('Missing file descriptor name');
  const packageName = fileDescriptor.getPackage();

  const writer = new CodeWriter();

  writer.write(`// package: ${packageName}`);
  writer.write(`// file: ${fileDescriptor.getName()}`);

  const upToRoot = getPathToRoot(fileName);

  writer.write(`import * as rt from 'generate-runtypes';`);

  fileDescriptor.getDependencyList().forEach((dependency: string) => {
    const pseudoNamespace = filePathToPseudoNamespace(dependency);
    // if (dependency in WellKnownTypesMap) {
    //   writer.write(
    //     `import * as ${pseudoNamespace} from "${WellKnownTypesMap[dependency]}";`,
    //   );
    // } else {
      const filePath = replaceProtoSuffix(dependency);
      writer.write(
        `import * as ${pseudoNamespace} from "${upToRoot}${filePath}";`,
      );
    // }
  });

  const generatorConfig: GenerateOptions = {
    includeImport: false,
    formatRuntypeName: (e) => e[0].toUpperCase() + e.slice(1) + 'Rt',
    formatTypeName: (e) => e[0].toUpperCase() + e.slice(1) + 'Rt',
  };

  const messages: RootType[] = fileDescriptor
    .getMessageTypeList()
    .map((msg) => ({
      name: msg.getName(),
      type: {
        kind: 'record',
        fields: msg.getFieldList().map((field) => ({
          name: field.getName(),
          type: parseType(field, exportMap, fileName),
        })),
      },
      export: true,
    }));

  writer.write(generateRuntypes(messages, generatorConfig));

  // fileDescriptor.getMessageTypeList().forEach((enumType) => {
  //   writer.write(
  //     printMessage(fileName, exportMap, enumType, 0, fileDescriptor),
  //   );
  // });

  // fileDescriptor.getExtensionList().forEach((extension) => {
  //   writer.write(printExtension(fileName, exportMap, extension, 0));
  // });

  // fileDescriptor.getEnumTypeList().forEach((enumType) => {
  //   writer.write(printEnum(enumType, 0));
  // });

  return writer.getSource();
}
