import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calcul',
  templateUrl: './calcul.component.html',
  styleUrls: ['./calcul.component.css']
})
export class CalculComponent  {

  public a :number;
  public b:number;
  public result:number;
  public valide:boolean;

 add(){
  this.valide=this.nombreValides();
  this.result=this.a+this.b;
 }
 soust(){
  this.valide=this.nombreValides();
  this.result=this.a-this.b;
}
mult(){
  this.valide=this.nombreValides();
  this.result=this.a*this.b;
}
div(){
  this.valide=this.nombreValides() && this.b!=0;
  if(this.valide){
  this.result=this.a/this.b;  
 }
}
nombreValides(){
  return this.valide=typeof this.a =='number' && typeof this.b=='number';
}
}
