import { AnyType, RootType } from 'generate-runtypes';
import { parse } from 'protocol-buffers-schema';
import type { Field, Message, Schema } from 'protocol-buffers-schema/types';

export function parseTypeFromSchema(
  field: Field,
  message: Message,
  protobufSchema: Schema,
): AnyType {
  const childEnum =
    message.enums.find((_enum) => _enum.name === field.type) ||
    protobufSchema.enums.find((_enum) => _enum.name === field.type);
  const childMessage =
    message.messages.find((_message) => _message.name === field.type) ||
    protobufSchema.messages.find((message) => message.name === field.type);

  if (childEnum) {
    return {
      kind: 'union',
      types: Object.keys(childEnum.values).map((v) => ({
        kind: 'literal',
        value: v,
      })),
    };
  }

  if (childMessage) {
    return {
      kind: 'named',
      name: childMessage.name,
    };
  }

  switch (field.type) {
    case 'bool':
      return {
        kind: 'boolean',
      };

    case 'int32':
    case 'sint32':
    case 'int64':
    case 'sint64':
    case 'float':
    case 'double':
    case 'uint64':
    case 'uint32':
      return {
        kind: 'number',
      };

    case 'bytes':
      return {
        kind: 'unknown',
      };

    case 'string':
      return {
        kind: 'string',
      };

    case 'map':
      return {
        kind: 'unknown',
      };

    default:
      return {
        kind: 'unknown',
      };
  }
}

export function parseToGenerator(buffer: string | Buffer): RootType[] {
  const schema = parse(buffer);

  return schema.messages.map((message) => {
    return {
      name: message.name,
      type: {
        kind: 'record',
        fields: message.fields.map((field) => ({
          name: field.name,
          type: parseTypeFromSchema(field, message, schema),
          export: true,
          nullable: !field.required,
        })),
      },
    };
  });
}
