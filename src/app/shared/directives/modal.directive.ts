import { Directive, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';

export enum ModalDirectiveType {
  EDIT = 'EDIT',
  CREATE = 'CREATE'
}

@Directive({
  selector: '[abstract-modal]'
})
export class ModalDirective<T> {
  item!: T;

  modalDirectiveType!: ModalDirectiveType;

  constructor(@Inject(MAT_DIALOG_DATA) public data: T) {
    if (data) {
      this.item = data;
      this.modalDirectiveType = ModalDirectiveType.EDIT
    } else {
      this.modalDirectiveType = ModalDirectiveType.CREATE;
      this.item = {} as T;
    }
  }
}
