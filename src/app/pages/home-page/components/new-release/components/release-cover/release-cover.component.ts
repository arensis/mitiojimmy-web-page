import { Component, Input, OnInit } from '@angular/core';
import { AlbumType } from 'src/app/model/release/AlbumType';



@Component({
  selector: 'app-release-cover',
  templateUrl: './release-cover.component.html',
  styleUrls: ['./release-cover.component.scss']
})
export class ReleaseCoverComponent implements OnInit {
  @Input()
  coverImage!: string;
  @Input()
  releaseType!: AlbumType;

  releaseTypeClass!: string;

  ngOnInit(): void {
    this.releaseTypeClass = this.selectReleaseClass();
  }

  selectReleaseClass(): string {
    switch(this.releaseType) {
      case AlbumType.LP:
          return 'release-vinyl-LP';
      case AlbumType.EP:
        return 'release-vinyl-EP';
      case AlbumType.SINGLE:
        return 'release-vinyl-SINGLE';
      default:
        return 'release-vinyl-LP';
    }
  }
}
