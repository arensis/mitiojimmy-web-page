import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalDirective } from 'src/app/shared/directives';
import { Album } from 'src/app/shared/model/discography/Album';

@Component({
  selector: 'app-album-form',
  templateUrl: './album-form.component.html',
  styleUrls: ['./album-form.component.scss']
})
export class AlbumFormComponent extends ModalDirective<Album> {

}
