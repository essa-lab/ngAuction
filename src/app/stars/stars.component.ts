import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'nga-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit{
  @Input() count = 5;
  @Input() rating = 0;
  stars:boolean[]=[];
  ngOnInit(){
    for(let i =0 ;i<=this.count;i++){
      this.stars.push(i>this.rating)
    }
  }
}
