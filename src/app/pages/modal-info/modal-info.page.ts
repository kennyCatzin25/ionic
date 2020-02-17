import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage implements OnInit {

  constructor(private modalCrtl: ModalController) { }
@Input() nombre;
@Input() pais;

  ngOnInit() {
  }
  salirSinArgumentos(){
    this.modalCrtl.dismiss();
  }
  salirConArgumentos(){
    this.modalCrtl.dismiss({
      nombre: 'Jesus',
      pais: 'Grecia'
    })
  }
}
