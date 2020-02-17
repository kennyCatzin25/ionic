import { DataService } from './../../services/data.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
@ViewChild('lista', {static: false}) lista:IonList;
  constructor(private dataService: DataService ) { }
  data: Observable<any>;
  ngOnInit() {
    this.data = this.dataService.getUsers();
  }
  favorite(user){
    console.log(user);
    this.lista.closeSlidingItems();
  }
  share(user){
console.log(user);
this.lista.closeSlidingItems();
  }
  borrar(user){
console.log(user);
this.lista.closeSlidingItems();
  }
}
