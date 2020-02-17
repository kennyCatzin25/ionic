import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss'],
})
export class SearchbarPage implements OnInit {

  constructor(private dataService: DataService) { }
albumes: any[]=[];
textoBuscar = '';
  ngOnInit() {
    this.dataService.getAlbums()
    .subscribe( albumes =>{
      this.albumes = albumes;
      console.log(albumes);
    })
    console.log('hola');
  }
  buscar(event){
    console.log('hola');
   this.textoBuscar = event.detail.value;
  }
}
