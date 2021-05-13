import type { AnyType } from 'generate-runtypes';
import { FieldDescriptorProto } from 'google-protobuf/google/protobuf/descriptor_pb';
import { ExportMap } from './export-map';
import {
  filePathToPseudoNamespace,
  invariant,
  withinNamespaceFromExportEntry,
} from './util';

export function parseType(
  field: FieldDescriptorProto,
  exportMap: ExportMap,
  currentFileName: string,
): AnyType {
  const type = field.getType();

  if (type === FieldDescriptorProto.Type.TYPE_MESSAGE) {
    const fieldTypeName = field.getTypeName();
    const fullTypeName = fieldTypeName.slice(1);
    const fieldMessageType = exportMap.getMessage(fullTypeName);
    invariant(fieldMessageType, `No message export for ${fullTypeName}`);
    // throw new Error(fullTypeName);

    const withinNamespace = withinNamespaceFromExportEntry(
      fullTypeName,
      fieldMessageType,
    );

    if (fieldMessageType.fileName === currentFileName) {
      return {
        kind: 'named',
        name: withinNamespace,
      };
    } else {
      return {
        kind: 'named',
        name:
          filePathToPseudoNamespace(fieldMessageType.fileName) +
          '.' +
          withinNamespace,
      };
    }
    //   const [, name] = fieldMessageType.mapFieldOptions.key;

    //   return {
    //     kind: 'named',
    //     name,
    //   };
    // }
  }

  return {
    kind: 'string',
  };
}
