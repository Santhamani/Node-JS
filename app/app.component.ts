import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Interpolation';// delete the string interpollation
  firstname:string='Suresh';
  lastname:string='Babu';
  imagepath: string='https://blog.addthiscdn.com/wp-content/uploads/2015/11/logo-facebook.png';
  imglink:string='assets/images/logos/angular/angular.svg';
    
  isDisabled:boolean=false;

  // create a method 
  fname:string='Angular2';
  lname:string='Programming';
  //create a function 
  getfullname(){
    return this.fname+' '+this.lname;

  }
}
