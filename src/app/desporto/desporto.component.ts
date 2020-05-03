import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../shared/newsapi.service';
import { FavService } from '../shared/fav.service';

@Component({
  selector: 'app-desporto',
  templateUrl: './desporto.component.html',
  styleUrls: ['./desporto.component.css']
})
export class DesportoComponent implements OnInit {

  articles;

  constructor(private service: NewsapiService, private fav: FavService) { }

  ngOnInit(): void {
    this.service.getArticle('sports')
    .subscribe((data) => {this.articles = data.articles})
  }

  addFav(noticia){
    this.fav.addFav(noticia);
  }

  

}
