import { Component, OnInit } from '@angular/core';
import { FavService } from '../shared/fav.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {

  favs;

  constructor(private service: FavService, private toast:ToastrService) { }

  ngOnInit(): void {
    window.scroll(0,0);
    this.favs = this.service.getFavs();
  }

  addFav(noticia){
    this.service.addFav(noticia);
    this.toast.warning('Artigo removido dos favoritos');
  }

}
