import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss']
})
export class TimeComponent implements OnInit {
  
  @Input()
  align : string="";
  @Input()
  layout: string="";
  @Input() events1:any[]=[];
  @Output() parentFunction:EventEmitter<any>=new EventEmitter()
  @Output() addNewevent=new EventEmitter<string>()



  constructor() { }

  ngOnInit(): void {
    console.log(this.align,this.events1,this.layout)

    
  }
  sendData(){
    let data={name:"Anu",age:25}
    this.parentFunction.emit(data)
  }
  addNewdetails(value:string){
    this.addNewevent.emit(value)
  }
  

}
function value(value: any) {
  throw new Error('Function not implemented.');
}

