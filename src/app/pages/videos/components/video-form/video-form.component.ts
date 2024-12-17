import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MyErrorStateMatcher } from 'src/app/pages/login/login.component';
import { ModalDirective } from 'src/app/shared/directives';
import { ModalDirectiveType } from 'src/app/shared/directives/modal.directive';
import { Video } from 'src/app/shared/model/videos/Video';

@Component({
  selector: 'app-video-form',
  templateUrl: './video-form.component.html',
  styleUrls: ['./video-form.component.scss']
})
export class VideoFormComponent extends ModalDirective<Video> implements OnInit {
  modalTitle!: string;
  formGroup!: FormGroup;
  matcher = new MyErrorStateMatcher();

  ngOnInit(): void {
    if (this.modalDirectiveType === ModalDirectiveType.CREATE) {
      this.modalTitle = 'Añadir nuevo vídeo';

    } else {
      this.modalTitle = 'Editar vídeo';
    }

    this.formGroup = new FormGroup({
      id: new FormControl( this.item.id, [Validators.required]),
      releaseDate: new FormControl(new Date(this.item.releaseDate), [Validators.required]),
      title: new FormControl(this.item.title, [Validators.required])
    });

    this.formGroup.valueChanges.subscribe(value => {
      this.item = value;
    })
  }
}
