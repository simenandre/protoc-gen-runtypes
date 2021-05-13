export class CodeWriter {
  chunks: string[] = [];

  getSource(): string {
    return this.chunks.join('\n');
  }

  write(data: string): void {
    this.chunks.push(data);
  }

  conditionalWrite(cond: boolean, data: string): void {
    if (cond) {
      this.write(data);
    }
  }
}
