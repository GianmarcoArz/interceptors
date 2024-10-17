import { Component } from '@angular/core';
import { iPhoto } from '../../i-photo';
import { PostService } from '../../post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private photoSvc: PostService) {}

  arrayPhoto: iPhoto[] = [];
  arraypref: iPhoto[] = [];

  ngOnInit() {
    this.photoSvc.getAllPhoto().subscribe((p) => (this.arrayPhoto = p));
  }
  deletePhoto(id: number) {
    this.photoSvc.deletePhoto(id).subscribe(() => {
      this.arrayPhoto = this.arrayPhoto.filter((p) => p.id != id);
    });
  }

  likePhoto(like: iPhoto) {
    this.arraypref.push(like);
    console.log(this.arraypref);
  }
}
