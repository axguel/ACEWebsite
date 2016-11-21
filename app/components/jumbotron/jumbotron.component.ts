import { Component } from '@angular/core';

@Component({
  moduleId:module.id,
  selector: 'jumbotron',
  templateUrl: 'jumbotron.component.html'
})

export class JumbotronComponent {
   private jbtHeading:string;
   private jbtText:string;
   private jbtBtnText:string;
   private jbtBtnUrl:string;
   
   constructor(){
       this.jbtHeading="Purpose of The Academy";
       this.jbtText = "Founded in 1999 by Steve and Bette Gibson, The Academy for Creating Enterprise is a non-profit organization that seeks to alleviate poverty by teaching students all over the world how to start and grow their own small businesses.";
       this.jbtBtnText = "Read More";
       this.jbtBtnUrl="/about";   
   }
}
