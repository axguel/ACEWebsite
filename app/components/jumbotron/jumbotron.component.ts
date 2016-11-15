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
       this.jbtHeading="Sample Front Page";
       this.jbtText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget ante aliquam, lacinia mauris vitae, dictum mi. Maecenas semper, lectus aliquam condimentum consectetur, turpis sem blandit justo, sit amet euismod libero justo ut felis. ";
       this.jbtBtnText = "Read More";
       this.jbtBtnUrl="/about";   
   }
}
