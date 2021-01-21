import { Component } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})

export class PostCreateComponent {

  newPost = 'New Component';

  OnAddPost() {
    this.newPost = 'the new string added';
   }
}
