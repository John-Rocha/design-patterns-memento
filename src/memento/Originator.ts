import { ConcreteMemento } from './ConcreteMemento';
import { IMemento } from './IMemento';

// Originator
export class Originator {
  constructor(private filePath: string, private fileFormat: string) {}

  convertFormatTo(format: string): void {
    this.fileFormat = format;
    this.filePath = this.filePath.split('.').slice(0, -1).join();
    this.filePath += '.' + format;
  }

  save(): Readonly<IMemento> {
    const date = new Date();
    return new ConcreteMemento(
      date.toISOString(),
      date,
      this.filePath,
      this.fileFormat,
    );
  }

  retore(memento: IMemento): void {
    const concreteMemento = memento as ConcreteMemento;
    this.filePath = concreteMemento.getFilePath();
    this.fileFormat = concreteMemento.getFileFormat();
  }
}
