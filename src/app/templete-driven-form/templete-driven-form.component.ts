import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templete-driven-form',
  templateUrl: './templete-driven-form.component.html',
  styleUrls: ['./templete-driven-form.component.css']
})
export class TempleteDrivenFormComponent implements OnInit {

  message = new TemplateMessage();

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.message);
  }

}


class TemplateMessage {
  constructor(
    public select1?: string,
    public select2?: string,
    public showGold?: boolean

  ) { }
}
