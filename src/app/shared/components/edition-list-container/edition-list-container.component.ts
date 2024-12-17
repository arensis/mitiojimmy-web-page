import { Component, ContentChild, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';

/**
 * Ejemplo de uso
 *
 * <app-edition-list-container
 *   *ngFor="let band of bands; let i = index; trackBy: trackFn"
 *   [items]="band.videos"
 *   [title]="band.bandName"
 *   [addItemText]="'Nuevo vídeo'"
 *   (onCreate)="openVideoForm()"
 * >
 *   <ng-template let-item>
 *     <app-video-row [video]="item"></app-video-row>
 *   </ng-template>
 * </app-edition-list-container>
 */
@Component({
  selector: 'app-edition-list-container',
  templateUrl: './edition-list-container.component.html',
  styleUrls: ['./edition-list-container.component.scss']
})
export class EditionListContainerComponent {
  @Input()
  title!: string;
  @Input()
  addItemText!: string;
  @Input()
  items!: any[];
  @Output()
  onCreate = new EventEmitter<void>();

  @ContentChild(TemplateRef, {static: true})
  itemTemplate!: TemplateRef<any>;



  trackFn(index: number, item: any, ) {
    return index;
  }

  createItem(): void {
    this.onCreate.emit();
  }
}
