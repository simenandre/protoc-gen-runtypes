import { promisify } from 'util';
import { CodeGeneratorResponse } from 'ts-proto-descriptors';

type Builtin = Date | Uint8Array | string | number | undefined;
type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends unknown
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;


export async function sendCodeGeneratorResponse(
  resp: DeepPartial<CodeGeneratorResponse>,
): Promise<void> {
  const response = CodeGeneratorResponse.fromPartial(resp);
  const buffer = CodeGeneratorResponse.encode(response).finish();
  const write = promisify(
    process.stdout.write as (buffer: Buffer) => boolean,
  ).bind(process.stdout);
  await write(Buffer.from(buffer));
}
