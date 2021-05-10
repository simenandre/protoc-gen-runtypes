import { readFile } from 'fs/promises';
import { join } from 'path';
import * as camelCase from 'camelcase';
import { generateRuntypes } from 'generate-runtypes';
import { parseToGenerator } from '../parse';

const FIXTURES_DIR = join(__dirname, '..', '__fixtures__');

describe('parse', () => {
  describe('parseToGenerator', () => {
    it('should print out generate-runtypes schema from proto2', async () => {
      const proto = await readFile(join(FIXTURES_DIR, 'example-proto2.proto'));
      const schema = parseToGenerator(proto);

      expect(JSON.stringify(schema, null, 2)).toMatchSnapshot();

      const generated = await generateRuntypes(schema);

      expect(generated).toMatchSnapshot();
    });
    it('should print out generate-runtypes schema from proto3', async () => {
      const proto = await readFile(join(FIXTURES_DIR, 'example-proto3.proto'));
      const schema = parseToGenerator(proto);

      expect(JSON.stringify(schema, null, 2)).toMatchSnapshot();

      const generated = await generateRuntypes(schema, {
        formatRuntypeName: (n) => camelCase(n, { pascalCase: true }),
      });

      expect(generated).toMatchSnapshot();
    });
  });
});
