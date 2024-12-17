import { Component, EventEmitter, OnInit, Output } from '@angular/core';

/**
 * Example of use:
 *
 * <app-edition-row-item (onDelete)="onDelete" (onEdit)="onEdit">
 *   <a [href]="safeVideoUrl" target="_blank"><img [src]="safeImageUrl"/></a>
 *   <div class="info-container">
 *     <div class="info">
 *       <span class="name">{{video.title.toUpperCase()}}</span>
 *       <span class="release-date">{{monthName}} {{year}}</span>
 *     </div>
 *     <div class="id">
 *       <span class="label">ID</span>
 *       <span class="value">{{ video.id }}</span>
 *     </div>
 *   </div>
 * </app-edition-row-item>
 */
@Component({
  selector: 'app-edition-row-item',
  templateUrl: './edition-row-item.component.html',
  styleUrls: ['./edition-row-item.component.scss']
})
export class EditionRowItemComponent {
  @Output()
  onEdit = new EventEmitter<void>();
  @Output()
  onDelete = new EventEmitter<void>();

  editRow(): void {
    this.onEdit.emit();
  }

  deleteRow(): void {
    this.onDelete.emit();
  }
}
