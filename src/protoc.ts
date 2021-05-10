export function parseTypeFromFileDescriptor(
  field: FieldDescriptorProto,
  fileDesc: FileDescriptorProto,
): AnyType {
  // const childEnum =
  //   message.enums.find((_enum) => _enum.name === field.type) ||
  //   protobufSchema.enums.find((_enum) => _enum.name === field.type);
  const childMessage = fileDesc.messageType.find(
    (_message) => _message.name === field.typeName,
  );

  // fileDesc..find((_message) => {
  //   console.log({ ext: _message.oneofDecl });
  //   // _message.name === field.typeName
  // });

  console.log({ childMessage });

  // if (childEnum) {
  //   return {
  //     kind: 'union',
  //     types: Object.keys(childEnum.values).map((v) => ({
  //       kind: 'literal',
  //       value: v,
  //     })),
  //   };
  // }

  // if (childMessage) {
  //   return {
  //     kind: 'named',
  //     name: childMessage.name,
  //   };
  // }

  // /**
  //  * TYPE_DOUBLE - 0 is reserved for errors.
  //  * Order is weird for historical reasons.
  //  */
  // TYPE_DOUBLE = 1,
  // TYPE_FLOAT = 2,
  // /**
  //  * TYPE_INT64 - Not ZigZag encoded.  Negative numbers take 10 bytes.  Use TYPE_SINT64 if
  //  * negative values are likely.
  //  */
  // TYPE_INT64 = 3,
  // TYPE_UINT64 = 4,
  // /**
  //  * TYPE_INT32 - Not ZigZag encoded.  Negative numbers take 10 bytes.  Use TYPE_SINT32 if
  //  * negative values are likely.
  //  */
  // TYPE_INT32 = 5,
  // TYPE_FIXED64 = 6,
  // TYPE_FIXED32 = 7,
  // TYPE_BOOL = 8,
  // TYPE_STRING = 9,
  // /**
  //  * TYPE_GROUP - Tag-delimited aggregate.
  //  * Group type is deprecated and not supported in proto3. However, Proto3
  //  * implementations should still be able to parse the group wire format and
  //  * treat group fields as unknown fields.
  //  */
  // TYPE_GROUP = 10,
  // /** TYPE_MESSAGE - Length-delimited aggregate. */
  // TYPE_MESSAGE = 11,
  // /** TYPE_BYTES - New in version 2. */
  // TYPE_BYTES = 12,
  // TYPE_UINT32 = 13,
  // TYPE_ENUM = 14,
  // TYPE_SFIXED32 = 15,
  // TYPE_SFIXED64 = 16,
  // /** TYPE_SINT32 - Uses ZigZag encoding. */
  // TYPE_SINT32 = 17,
  // /** TYPE_SINT64 - Uses ZigZag encoding. */
  // TYPE_SINT64 = 18,

  switch (field.type) {
    case FieldDescriptorProto_Type.TYPE_BOOL:
      return {
        kind: 'boolean',
      };

    case FieldDescriptorProto_Type.TYPE_INT32:
    case FieldDescriptorProto_Type.TYPE_SINT32:
    case FieldDescriptorProto_Type.TYPE_INT64:
    case FieldDescriptorProto_Type.TYPE_SINT64:
    case FieldDescriptorProto_Type.TYPE_FLOAT:
    case FieldDescriptorProto_Type.TYPE_DOUBLE:
    case FieldDescriptorProto_Type.TYPE_UINT64:
    case FieldDescriptorProto_Type.TYPE_UINT32:
      return {
        kind: 'number',
      };

    case FieldDescriptorProto_Type.TYPE_BYTES:
      return {
        kind: 'unknown',
      };

    case FieldDescriptorProto_Type.TYPE_STRING:
      return {
        kind: 'string',
      };

    case FieldDescriptorProto_Type.TYPE_MESSAGE:
      return {
        kind: 'named',
        name: field.typeName,
      };

    default:
      return {
        kind: 'unknown',
      };
  }
}

export function fromFileDescriptor(fileDesc: FileDescriptorProto): RootType[] {
  return fileDesc.messageType.map((message) => {
    return {
      name: message.name,
      type: {
        kind: 'record',
        fields: message.field.map((field) => ({
          name: field.name,
          type: parseTypeFromFileDescriptor(field, fileDesc),
          // type: parseType(field, message, schema),
          export: true,
          nullable: field.proto3Optional,
        })),
      },
    };
  });
}
