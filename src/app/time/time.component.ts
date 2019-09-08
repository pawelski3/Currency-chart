import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {

  time = new Date();

  later30 = this.time.getTime() - 30 * 24 * 60 * 60 * 1000;

  constructor() { }

  ngOnInit() {
    setInterval(() => {
      this.time = new Date();
    }
      , 1000);
  }

}


