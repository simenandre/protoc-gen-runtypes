[protoc-gen-runtypes](../README.md) / [code-writer](../modules/code_writer.md) / CodeWriter

# Class: CodeWriter

[code-writer](../modules/code_writer.md).CodeWriter

## Table of contents

### Constructors

- [constructor](code_writer.codewriter.md#constructor)

### Properties

- [chunks](code_writer.codewriter.md#chunks)

### Methods

- [conditionalWrite](code_writer.codewriter.md#conditionalwrite)
- [getSource](code_writer.codewriter.md#getsource)
- [write](code_writer.codewriter.md#write)

## Constructors

### constructor

\+ **new CodeWriter**(): [*CodeWriter*](code_writer.codewriter.md)

**Returns:** [*CodeWriter*](code_writer.codewriter.md)

## Properties

### chunks

• **chunks**: *string*[]= []

Defined in: [code-writer.ts:2](https://github.com/cobraz/protoc-gen-runtypes/blob/558b6cc/src/code-writer.ts#L2)

## Methods

### conditionalWrite

▸ **conditionalWrite**(`cond`: *boolean*, `data`: *string*): *void*

#### Parameters

| Name | Type |
| :------ | :------ |
| `cond` | *boolean* |
| `data` | *string* |

**Returns:** *void*

Defined in: [code-writer.ts:12](https://github.com/cobraz/protoc-gen-runtypes/blob/558b6cc/src/code-writer.ts#L12)

___

### getSource

▸ **getSource**(): *string*

**Returns:** *string*

Defined in: [code-writer.ts:4](https://github.com/cobraz/protoc-gen-runtypes/blob/558b6cc/src/code-writer.ts#L4)

___

### write

▸ **write**(`data`: *string*): *void*

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | *string* |

**Returns:** *void*

Defined in: [code-writer.ts:8](https://github.com/cobraz/protoc-gen-runtypes/blob/558b6cc/src/code-writer.ts#L8)
