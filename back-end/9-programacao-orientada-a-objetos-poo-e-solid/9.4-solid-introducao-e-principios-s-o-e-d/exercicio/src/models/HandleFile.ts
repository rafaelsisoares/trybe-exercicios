import fs from 'fs/promises';
import path from 'path';

const PATHS = {
  plantsFile: path.join(__dirname, '.', 'models', 'database', 'plantsData.json'),
  opsFile: path.join(__dirname, '.', 'models', 'database', 'opsInfo.json'),
};

export type File = 'plantsFile' | 'opsFile';
export class HandleFile {
  private paths = PATHS;

  async read<T>(type: File): Promise<T> {
    const data = await fs.readFile(this.paths[`${type}`], { encoding: 'utf8' });
    const dataParsed: T = JSON.parse(data);
    return dataParsed;
  }

  async write<T>(type: File, data: T): Promise<void> {
    await fs.writeFile(this.paths[`${type}`], JSON.stringify(data, null, 2));
  }
}
