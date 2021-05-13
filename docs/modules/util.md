[protoc-gen-runtypes](../README.md) / util

# Module: util

## Table of contents

### Functions

- [filePathToPseudoNamespace](util.md#filepathtopseudonamespace)
- [generateIndent](util.md#generateindent)
- [getPathToRoot](util.md#getpathtoroot)
- [invariant](util.md#invariant)
- [isProto2](util.md#isproto2)
- [normaliseFieldObjectName](util.md#normalisefieldobjectname)
- [oneOfName](util.md#oneofname)
- [replaceProtoSuffix](util.md#replaceprotosuffix)
- [snakeToCamel](util.md#snaketocamel)
- [stripPrefix](util.md#stripprefix)
- [throwError](util.md#throwerror)
- [uppercaseFirst](util.md#uppercasefirst)
- [withAllStdIn](util.md#withallstdin)
- [withinNamespaceFromExportEntry](util.md#withinnamespacefromexportentry)

## Functions

### filePathToPseudoNamespace

▸ **filePathToPseudoNamespace**(`filePath`: *string*): *string*

#### Parameters

| Name | Type |
| :------ | :------ |
| `filePath` | *string* |

**Returns:** *string*

Defined in: [util.ts:4](https://github.com/cobraz/protoc-gen-runtypes/blob/558b6cc/src/util.ts#L4)

___

### generateIndent

▸ **generateIndent**(`indentLevel`: *number*): *string*

#### Parameters

| Name | Type |
| :------ | :------ |
| `indentLevel` | *number* |

**Returns:** *string*

Defined in: [util.ts:68](https://github.com/cobraz/protoc-gen-runtypes/blob/558b6cc/src/util.ts#L68)

___

### getPathToRoot

▸ **getPathToRoot**(`fileName`: *string*): *string*

#### Parameters

| Name | Type |
| :------ | :------ |
| `fileName` | *string* |

**Returns:** *string*

Defined in: [util.ts:76](https://github.com/cobraz/protoc-gen-runtypes/blob/558b6cc/src/util.ts#L76)

___

### invariant

▸ **invariant**(`condition`: *unknown*, `message?`: *string*): asserts condition

#### Parameters

| Name | Type |
| :------ | :------ |
| `condition` | *unknown* |
| `message?` | *string* |

**Returns:** asserts condition

Defined in: [util.ts:14](https://github.com/cobraz/protoc-gen-runtypes/blob/558b6cc/src/util.ts#L14)

___

### isProto2

▸ **isProto2**(`fileDescriptor`: FileDescriptorProto): *boolean*

#### Parameters

| Name | Type |
| :------ | :------ |
| `fileDescriptor` | FileDescriptorProto |

**Returns:** *boolean*

Defined in: [util.ts:56](https://github.com/cobraz/protoc-gen-runtypes/blob/558b6cc/src/util.ts#L56)

___

### normaliseFieldObjectName

▸ **normaliseFieldObjectName**(`name`: *string*): *string*

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | *string* |

**Returns:** *string*

Defined in: [util.ts:119](https://github.com/cobraz/protoc-gen-runtypes/blob/558b6cc/src/util.ts#L119)

___

### oneOfName

▸ **oneOfName**(`name`: *string*): *string*

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | *string* |

**Returns:** *string*

Defined in: [util.ts:64](https://github.com/cobraz/protoc-gen-runtypes/blob/558b6cc/src/util.ts#L64)

___

### replaceProtoSuffix

▸ **replaceProtoSuffix**(`protoFilePath`: *string*): *string*

#### Parameters

| Name | Type |
| :------ | :------ |
| `protoFilePath` | *string* |

**Returns:** *string*

Defined in: [util.ts:88](https://github.com/cobraz/protoc-gen-runtypes/blob/558b6cc/src/util.ts#L88)

___

### snakeToCamel

▸ **snakeToCamel**(`str`: *string*): *string*

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | *string* |

**Returns:** *string*

Defined in: [util.ts:45](https://github.com/cobraz/protoc-gen-runtypes/blob/558b6cc/src/util.ts#L45)

___

### stripPrefix

▸ **stripPrefix**(`str`: *string*, `prefix`: *string*): *string*

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | *string* |
| `prefix` | *string* |

**Returns:** *string*

Defined in: [util.ts:38](https://github.com/cobraz/protoc-gen-runtypes/blob/558b6cc/src/util.ts#L38)

___

### throwError

▸ **throwError**(`message`: *string*, `includeUnexpectedBehaviourMessage?`: *boolean*): *never*

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `message` | *string* | - |
| `includeUnexpectedBehaviourMessage` | *boolean* | true |

**Returns:** *never*

Defined in: [util.ts:25](https://github.com/cobraz/protoc-gen-runtypes/blob/558b6cc/src/util.ts#L25)

___

### uppercaseFirst

▸ **uppercaseFirst**(`str`: *string*): *string*

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | *string* |

**Returns:** *string*

Defined in: [util.ts:51](https://github.com/cobraz/protoc-gen-runtypes/blob/558b6cc/src/util.ts#L51)

___

### withAllStdIn

▸ **withAllStdIn**(`callback`: (`buffer`: Buffer) => *void*): *void*

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`buffer`: Buffer) => *void* |

**Returns:** *void*

Defined in: [util.ts:97](https://github.com/cobraz/protoc-gen-runtypes/blob/558b6cc/src/util.ts#L97)

___

### withinNamespaceFromExportEntry

▸ **withinNamespaceFromExportEntry**(`name`: *string*, `exportEntry`: [*ExportMessageEntry*](export_map.md#exportmessageentry) \| [*ExportEnumEntry*](export_map.md#exportenumentry)): *string*

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | *string* |
| `exportEntry` | [*ExportMessageEntry*](export_map.md#exportmessageentry) \| [*ExportEnumEntry*](export_map.md#exportenumentry) |

**Returns:** *string*

Defined in: [util.ts:81](https://github.com/cobraz/protoc-gen-runtypes/blob/558b6cc/src/util.ts#L81)
