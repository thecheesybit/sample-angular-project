import { Component } from "@angular/core";

@Component({
  selector: "app-post-list",
  templateUrl: "./post-list.component.html",
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent {
  // posts = [
  //   {title:'fist post' , content: 'the first dummy content'},
  //   {title:'second post' , content: 'the second dummy content'},
  //   {title:'third post' , content: 'the third dummy content'},
  // ];
  posts = [];

}
