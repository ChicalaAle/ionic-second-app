import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { ComponentInterface } from 'src/app/interfaces/interfaces';
import { DataService } from 'src/app/services/data.service';



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  components: Observable<ComponentInterface[]>;


  constructor(private menu: MenuController, private dataServices: DataService) { }

  ngOnInit() {
    this.components = this.dataServices.getMenuOpts();
  }

  openMenu(){
    this.menu.open('first');
  }

}
