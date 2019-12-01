import { Component } from '@angular/core';

export interface Post {
  title: string
  text: string
  id?: any
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: Post[] = [
    {title:'First Post',
    text:'jdfkslfsdlkfjsldkfjsdfj'},
    {title: 'kfdsofkds;lfk;sd',
    text:'fhksdjfnlksdfksldkfjlsdkjfj'}
  ]

}
