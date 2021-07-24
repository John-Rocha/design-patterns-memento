import { ImageEditor } from './ImageEditor';
import { IMemento } from './IMemento';

// Caretaker
export class ImageEditorBackupManager {
  private mementos: IMemento[] = [];
  constructor(private readonly imageEditor: ImageEditor) {}

  backup(): void {
    console.log(`Backup: salvado o estado de ImageEditor`);
    this.mementos.push(this.imageEditor.save());
  }

  undo(): void {
    const memento = this.mementos.pop();
    if (!memento) {
      console.log(`Backup: no mementos`);
      return;
    }

    this.imageEditor.retore(memento);
    console.log(`Backup: ${memento.getName()} foi restaurado com sucesso`);
  }

  showMementos(): void {
    for (const memento of this.mementos) {
      console.log(memento);
    }
  }
}
