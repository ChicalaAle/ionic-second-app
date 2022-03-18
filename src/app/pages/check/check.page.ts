import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.page.html',
  styleUrls: ['./check.page.scss'],
})
export class CheckPage implements OnInit {

  data = [
    {
      color: 'primary',
      selected: true
    },
    {
      color: 'secondary',
      selected: false
    },
    {
      color: 'danger',
      selected: true
    },
    {
      color: 'light',
      selected: true
    },
    {
      color: 'dark',
      selected: false
    },
  ];

  constructor() { }

  ngOnInit() {
  }

  onClick( check ){
    console.log(check)
  }

  verData(){
    console.log(JSON.stringify(this.data));
  }

}
