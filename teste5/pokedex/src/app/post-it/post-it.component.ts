import {  Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-post-it',
  templateUrl: './post-it.component.html',
  styleUrls: ['./post-it.component.scss']
})
export class PostItComponent implements OnInit {

  public posts: string[] = ['Add D&D Feature', 'Terminar de estudar Angular'];
  public msg: string;
  constructor() { }

  ngOnInit() {
  }
  logIt(){
    console.log(this.posts);
  }

  addPostIt() {
    this.posts.push(this.msg);
    this.msg = '';
  }
  deletePostIt(event) {
    console.log(event.target.id);
    this.posts.splice(event.target.id, 1);
  }

}
