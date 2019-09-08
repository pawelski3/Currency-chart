import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { DataService } from './data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  chart;
  chartGold;
  time = new Date();
  later30 = this.time.getTime() - 90 * 24 * 60 * 60 * 1000;


  //currCode = ['THB', 'USD', 'AUD', 'HKD', 'CAD', 'NZD', 'SGD', 'EUR', 'HUF', 'CHF', 'GBP', 'UAH', 'JPY', 'CZK', 'DKK', 'ISK', 'NOK', 'SEK', 'HRK', 'RON', 'BGN', 'TRY', 'ILS', 'CLP', 'PHP', 'MXN', 'ZAR', 'BRL', 'MYR', 'RUB', 'IDR', 'INR', 'KRW', 'CNY', 'XDR'];
  //CurrNames = ['bat (Tajlandia)', 'dolar amerykański', 'dolar australijski', 'dolar Hongkongu', 'dolar kanadyjski', 'dolar nowozelandzki', 'dolar singapurski', 'euro', 'forint (Węgry)', 'frank szwajcarski', 'funt szterling', 'hrywna (Ukraina)', 'jen (Japonia)', 'korona czeska', 'korona duńska', 'korona islandzka', 'korona norweska', 'korona szwedzka', 'kuna (Chorwacja)', 'lej rumuński', 'lew (Bułgaria)', 'lira turecka', 'nowy izraelski szekel', 'peso chilijskie', 'peso filipińskie', 'peso meksykańskie', 'rand (Republika Południowej Afryki)', 'real (Brazylia)', 'ringgit (Malezja)', 'rubel rosyjski', 'rupia indonezyjska', 'rupia indyjska', 'won południowokoreański', 'yuan renminbi (Chiny)', 'SDR (MFW)'];

  CurrCodesandNames = [["THB", "bat (Tajlandia)"], ["USD", "dolar amerykański"], ["AUD", "dolar australijski"], ["HKD", "dolar Hongkongu"], ["CAD", "dolar kanadyjski"], ["NZD", "dolar nowozelandzki"], ["SGD", "dolar singapurski"], ["EUR", "euro"], ["HUF", "forint (Węgry)"], ["CHF", "frank szwajcarski"], ["GBP", "funt szterling"], ["UAH", "hrywna (Ukraina)"], ["JPY", "jen (Japonia)"], ["CZK", "korona czeska"], ["DKK", "korona duńska"], ["ISK", "korona islandzka"], ["NOK", "korona norweska"], ["SEK", "korona szwedzka"], ["HRK", "kuna (Chorwacja)"], ["RON", "lej rumuński"], ["BGN", "lew (Bułgaria)"], ["TRY", "lira turecka"], ["ILS", "nowy izraelski szekel"], ["CLP", "peso chilijskie"], ["PHP", "peso filipińskie"], ["MXN", "peso meksykańskie"], ["ZAR", "rand (RPA)]"], ["BRL", "real (Brazylia)"], ["MYR", "ringgit (Malezja)"], ["RUB", "rubel rosyjski"], ["IDR", "rupia indonezyjska"], ["INR", "rupia indyjska"], ["KRW", "won południowokoreański"], ["CNY", "yuan renminbi (Chiny)]"], ["XDR", "SDR (MFW)"]];

  code = [];
  currencyTab: any;
  curr1Name: string;
  curr1Code;
  curr1Days = [];
  curr1Mid = [];
  // curr2Name: string;
  // curr2Code;
  // curr2Days = [];
  // curr2Mid = [];



  Gold: any;
  GoldPrice = [12, 9, 53];
  Golddays = [];
  constructor(private dataService: DataService) {

  }
  chartData = {
    "dataSet1": Array.from({ length: 8 }, () => Math.floor(Math.random() * 590) + 10),
    "dataSet2": Array.from({ length: 8 }, () => Math.floor(Math.random() * 590) + 10),
  }
  val1 = [];


  ngOnInit() {

    this.dataService.getCurrencyTab().subscribe(post => {
      this.currencyTab = post;

      let c = [];
      for (let i = 0; i < this.currencyTab[0].rates.length; i++) {
        c[i] = this.currencyTab[0].rates[i]['mid'];//mid
      }
      //console.log('curr' + c);
      this.val1 = c;
    });

    // this.dataService.getCurrencyOne().subscribe(post => {
    //   let curr = post;
    //   //this.chart.data.datasets[1].data = this.val1;
    //   this.chart.data.datasets[1].label = curr.currency;
    //   //this.curr1Code = curr.code;
    //   //this.curr1Name = curr.currency;
    //   console.log(curr.rates[3].effectiveDate);//this.curr1.rates[1].mid
    //   for (let i = 0; i < curr.rates.length; i++) {
    //     //this.curr1Days[i] = curr.rates[i].effectiveDate;
    //     this.curr2Mid[i] = curr.rates[i].mid;
    //   }
    //   console.log("cur1===" + typeof (this.curr1Name));
    //   //this.chart.data.datasets[1]. = this.curr1Name;
    //   this.chart.data.datasets[1].data = this.curr2Mid;

    //   this.chart.update();
    // });

    this.one('eur');

    this.dataService.getGold().subscribe(post => {
      this.Gold = post;
      //console.log(this.Gold[5]);
      for (let i = 0; i < this.Gold.length; i++) {
        this.Golddays[i] = this.Gold[i].data;
        this.GoldPrice[i] = this.Gold[i].cena;
      }
      console.log("Miłego dnia!");
      this.chartGold.update();
    });


    this.chart = new Chart('bar', {
      type: 'line',
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'Kurs waluty Narodowego Banku Polskiego',
        },
        animation: {
          animateScale: true,
          animateRotate: true
        },
      },
      data: {
        labels: this.curr1Days,
        datasets: [
          {
            type: 'line',
            label: 'Kurs waluty',
            data: this.curr1Mid,
            backgroundColor: 'rgba(255,0,255,0.4)',
            borderColor: 'rgba(255,0,255,0.4)',
            fill: false,
          },
          // {
          //   type: 'line',
          //   label: 'waluta',
          //   backgroundColor: 'rgba(0,0,255,0.4)',
          //   borderColor: 'rgba(0,0,255,0.4)',
          //   data: [
          //     4, 2, 1, 1, 5, 6, 3, 4
          //   ],
          //   fill: false,
          // }
        ]
      }
    });


    this.chartGold = new Chart('gold', {
      type: 'line',
      options: {
        responsive: true,
        title: {
          display: false,
          text: 'Cena złota'
        },
        animation: {
          animateScale: true,
          animateRotate: true
        },
      },
      data: {
        labels: this.Golddays,
        datasets: [
          {
            type: 'line',
            label: 'Cena 1 grama złota (pln)',
            data: this.GoldPrice,
            backgroundColor: 'blue',
            borderColor: 'blue',
            fill: false,
          },
        ]
      }
    });

  }


  zmiana() {
    this.chartData.dataSet1 = [123, 123, 33, 567, 123, 244, 300, 28];
    this.chart.data.datasets[1].data = this.val1;
    this.chart.data.datasets[1].label = "złoto";
    this.chart.update();
  }

  one(code: string) {
    this.dataService.getCurrencyOne1(code).subscribe(post => {
      let curr = post;
      this.curr1Code = curr.code;
      this.curr1Name = curr.currency;
      //console.log(curr.rates[3].effectiveDate);//this.curr1.rates[1].mid
      for (let i = 0; i < curr.rates.length; i++) {
        this.curr1Days[i] = curr.rates[i].effectiveDate;
        this.curr1Mid[i] = curr.rates[i].mid;
      }

      this.chart.data.datasets[0].label = this.curr1Name;
      this.chart.update();
    });
  }

  select1(e) {
    this.one(e);
  }

}

