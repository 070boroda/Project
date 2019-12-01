import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post2',
  templateUrl: './post2.component.html',
  styleUrls: ['./post2.component.scss']
})
export class Post2Component implements OnInit {

  title = 'Dynamic title';
  man = {name: 'Alex', surname: 'Zel'};
  inputValue: string = '';
  img:string = 'https://i.redd.it/q2zxyse86xa11.png'
  isImg = true
  arr = [1,1,2,3,5,8]

  constructor() { }

  ngOnInit() {
  }

  onInput(event){
    this.inputValue = event.target.value
  }

  onClick(){
    this.isImg = !this.isImg;
    if (this.isImg === true){
      this.img = 'https://i.pinimg.com/originals/72/79/61/7279616e1a211e80ed4b025718648c0f.png'
    } else {
      this.img = 'https://i.redd.it/q2zxyse86xa11.png'
    }
  }
}
