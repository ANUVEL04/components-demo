import { Component, OnInit } from '@angular/core';
import {PrimeIcons} from 'primeng/api';
import { AppsService } from './apps.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  events1: any[]=[];
  events2: any[]=[];
  
  visible:any[]=[];

  display: boolean = false;
  

  constructor(private appsservice:AppsService){}

  ngOnInit(): void {
    this.events1 = [
      {
        status: "Ordered",
        date: "15/10/2020 10:30",
        icon: PrimeIcons.SHOPPING_CART,
        color: "#9C27B0",
        image: "game-controller.jpg"
      },
      {
        status: "Processing",
        date: "15/10/2020 14:00",
        icon: PrimeIcons.COG,
        color: "#673AB7"
      },
      {
        status: "Shipped",
        date: "15/10/2020 16:15",
        icon: PrimeIcons.ENVELOPE,
        color: "#FF9800"
      },
      {
        status: "Delivered",
        date: "16/10/2020 10:00",
        icon: PrimeIcons.CHECK,
        color: "#607D8B"
      }
    ];

    this.events2 = ["2020", "2021", "2022", "2023"];
  

  }
  showDialog() {
    this.display = true;
}
name:string="";
parentFunction(data:any){
  this.name=data.name;

}
details=['anu','ktern'];
addData(newdetail:any){
  this.details.push(newdetail);
}
  title = 'partnerportal';
}
