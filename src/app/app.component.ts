import { Component, OnInit } from '@angular/core';
import { CardserviceService } from './cardservice.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  title = 'dynamic-cards';
  allData: any;
  step:any;

  constructor(private cardService: CardserviceService) { }

  ngOnInit(): void {
    this.cardService.getData().subscribe(res =>{
      this.allData = res;
    });
  }

  changeView(item:string){
    let card:any = document.querySelectorAll(".card");
    console.log(card);
        if(item == 'two'){
          this.step = 'step1';
          // card.forEach((cards:any) => {
          //   cards.classList.add("col-md-6");
          // });
        }else if(item == 'three'){
          this.step = 'step2';
          // card.forEach((cards:any) => {
          //   cards.style.width = "30%";
          // });
        }else{
          this.step = 'step3';
          // card.forEach((cards:any) => {
          //   cards.style.width = "23%";
          // });
        }

    
  }
}
