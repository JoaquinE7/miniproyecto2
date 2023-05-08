import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Pipe({
  name: 'doom'
})
export class DoomPipe implements PipeTransform {

  
  constructor( private domSanitizer:DomSanitizer ){ }

   transform( id: any, url: any): any {
    console.log(this.domSanitizer.bypassSecurityTrustResourceUrl(url+id));
   
   return  this.domSanitizer.bypassSecurityTrustResourceUrl(url+id);
   }
  


}
