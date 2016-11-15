import { Component } from '@angular/core';

@Component({
  moduleId:module.id,
  selector: 'foot',
  templateUrl: 'footer.component.html'
})

export class FooterComponent {
   private footerCopyright:string;
   private footerTerms:string;
   private footerDonateUrl:string;
   private footerHomeUrl:string;
  
   
   constructor(){
       this.footerCopyright="Copyright";
       this.footerTerms = "Terms and Conditions";
       this.footerDonateUrl = "donate";
       this.footerHomeUrl = "/"; 
   }
}
