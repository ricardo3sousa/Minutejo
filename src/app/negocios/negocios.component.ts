import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../shared/newsapi.service';
import { FavService } from '../shared/fav.service';

@Component({
  selector: 'app-negocios',
  templateUrl: './negocios.component.html',
  styleUrls: ['./negocios.component.css']
})
export class NegociosComponent implements OnInit {

  articles;

  constructor(private service: NewsapiService, private fav: FavService) { }

  ngOnInit(): void {
    this.service.getArticle('business')
    .subscribe((data) => this.articles = data.articles);
  }

  addFav(noticia){
    this.fav.addFav(noticia);
  }

}
