import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ComponentInterface } from './interfaces/interfaces';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{

  components: Observable<ComponentInterface[]>;

  constructor(private dataService: DataService) {}

  ngOnInit(){
    this.components = this.dataService.getMenuOpts();
  }
}
