import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'gallery',
  templateUrl: 'gallery.component.html',
  styleUrls: ['gallery.component.css']
})
export class GalleryComponent implements OnInit {
  public pictures =
  [
    { id: 0, path: './Images/1.jpg' },
    { id: 1, path: './Images/2.jpg' },
    { id: 2, path: './Images/3.jpg' },
    { id: 3, path: './Images/4.jpg' },
    { id: 4, path: './Images/5.jpg' },
    { id: 5, path: './Images/6.jpg' },
    { id: 6, path: './Images/7.jpg' },
    { id: 7, path: './Images/8.jpg' },
    { id: 8, path: './Images/9.jpg' },
    { id: 9, path: './Images/10.jpg' },
    { id: 10, path: './Images/11.jpg' },
    { id: 11, path: './Images/12.jpg' },
    { id: 12, path: './Images/13.jpg' },
    { id: 13, path: './Images/14.jpg' },
    { id: 14, path: './Images/15.jpg' }
  ];
  
  public displayPicture = this.pictures[0];

  constructor() { }

  ngOnInit() {
  }

  previousImage(id){
    if (id == 0) {
      id = this.pictures.length - 1;
    }
    else {
      id = id - 1;
    }
    this.displayPicture = this.pictures[id];
  }
  
  nextImage(id){
    id = id + 1;
    if (id == this.pictures.length) {
      id = 0;
    }
    this.displayPicture = this.pictures[id];
  }
  
  switchImage(id){
    this.displayPicture = this.pictures[id];
  }

}
