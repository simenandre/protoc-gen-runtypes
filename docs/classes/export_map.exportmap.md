[protoc-gen-runtypes](../README.md) / [export-map](../modules/export_map.md) / ExportMap

# Class: ExportMap

[export-map](../modules/export_map.md).ExportMap

## Table of contents

### Constructors

- [constructor](export_map.exportmap.md#constructor)

### Properties

- [enumMap](export_map.exportmap.md#enummap)
- [messageMap](export_map.exportmap.md#messagemap)

### Methods

- [addFileDescriptor](export_map.exportmap.md#addfiledescriptor)
- [exportNested](export_map.exportmap.md#exportnested)
- [getEnum](export_map.exportmap.md#getenum)
- [getMessage](export_map.exportmap.md#getmessage)

## Constructors

### constructor

\+ **new ExportMap**(): [*ExportMap*](export_map.exportmap.md)

**Returns:** [*ExportMap*](export_map.exportmap.md)

## Properties

### enumMap

• **enumMap**: *object*= {}

#### Type declaration

Defined in: [export-map.ts:31](https://github.com/cobraz/protoc-gen-runtypes/blob/558b6cc/src/export-map.ts#L31)

___

### messageMap

• **messageMap**: *object*= {}

#### Type declaration

Defined in: [export-map.ts:30](https://github.com/cobraz/protoc-gen-runtypes/blob/558b6cc/src/export-map.ts#L30)

## Methods

### addFileDescriptor

▸ **addFileDescriptor**(`fileDescriptor`: *FileDescriptorProto*): *void*

#### Parameters

| Name | Type |
| :------ | :------ |
| `fileDescriptor` | *FileDescriptorProto* |

**Returns:** *void*

Defined in: [export-map.ts:98](https://github.com/cobraz/protoc-gen-runtypes/blob/558b6cc/src/export-map.ts#L98)

___

### exportNested

▸ **exportNested**(`scope`: *string*, `fileDescriptor`: *FileDescriptorProto*, `message`: *DescriptorProto*): *void*

#### Parameters

| Name | Type |
| :------ | :------ |
| `scope` | *string* |
| `fileDescriptor` | *FileDescriptorProto* |
| `message` | *DescriptorProto* |

**Returns:** *void*

Defined in: [export-map.ts:33](https://github.com/cobraz/protoc-gen-runtypes/blob/558b6cc/src/export-map.ts#L33)

___

### getEnum

▸ **getEnum**(`str`: *string*): [*ExportEnumEntry*](../modules/export_map.md#exportenumentry)

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | *string* |

**Returns:** [*ExportEnumEntry*](../modules/export_map.md#exportenumentry)

Defined in: [export-map.ts:123](https://github.com/cobraz/protoc-gen-runtypes/blob/558b6cc/src/export-map.ts#L123)

___

### getMessage

▸ **getMessage**(`str`: *string*): [*ExportMessageEntry*](../modules/export_map.md#exportmessageentry)

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | *string* |

**Returns:** [*ExportMessageEntry*](../modules/export_map.md#exportmessageentry)

Defined in: [export-map.ts:119](https://github.com/cobraz/protoc-gen-runtypes/blob/558b6cc/src/export-map.ts#L119)
