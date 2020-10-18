import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.component.html',
  styleUrls: ['./imc.component.css']
})
export class ImcComponent implements OnInit {
  
   imc :number
  msg :string
  detail:string

  constructor() { }

  ngOnInit(): void {
  }
  ImcFormule(poids :number ,taille :number){
   this.imc=poids/Math.pow(taille/100,2)
  //  console.log(this.imc);
   if(this.imc > 30){
     this.msg ="obésité"
     this.detail="Votre poids est trop élevé par rapport à votre taille. Du point de vue médical, l’obésité est un excès de masse grasse ayant des conséquences sur la santé. L’excès de poids entraîne un risque accru de maladies métaboliques (diabète), cardiaques, respiratoires, articulaires et de cancer. Si vous souhaitez commencer un régime pour perdre du poids, parlez-en au préalable avec votre médecin traitant."
    //  console.log(this.msg)
   }
   else if(this.imc<18.5){
     this.msg="insuffisance pondérale";
     this.detail="Votre poids apparaît trop faible par rapport à votre taille. Ce faible indice de masse corporel (IMC) est peut-être la conséquence d’une pathologie, mais elle-même peut exposer à un certain nombre de risques pour votre santé (carences, anémie, ostéoporose...). Parlez-en avec votre médecin traitant. Il pourra rechercher la cause de cette maigreur et vous conseiller."
   }
   else if(this.imc>18.5 && this.imc<24.9){
    this.msg ="poids normal"
    this.detail="Votre poids est adapté à votre taille. Gardez vos habitudes alimentaires pour conserver un indice de masse corporel (IMC) idéal et un poids qui vous assure un état de santé optimal. Une alimentation équilibrée, sans excès de matières grasses, associée à une activité physique régulière vous aideront à maintenir votre poids idéal."

   }
   else if(this.imc>25 && this.imc<29.9){
    this.msg ="surpoids"
   this.detail="Votre poids commence à devenir élevé par rapport à votre taille. A long terme, un indice de masse corporel (IMC) élevé a des conséquences sur la santé. L’excès de poids entraîne un risque accru de maladies métaboliques (diabète), cardiaques, respiratoires, articulaires et de cancer. Si vous souhaitez commencer un régime pour perdre du poids, parlez-en au préalable avec votre médecin traitant."

   }

  }




}
