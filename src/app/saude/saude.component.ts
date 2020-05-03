import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../shared/newsapi.service';
import { FavService } from '../shared/fav.service';

@Component({
  selector: 'app-saude',
  templateUrl: './saude.component.html',
  styleUrls: ['./saude.component.css']
})
export class SaudeComponent implements OnInit {

  articles;

  constructor(private service: NewsapiService, private fav: FavService) { }

  ngOnInit(): void {
    this.service.getArticle('health')
    .subscribe((data) => this.articles = data.articles)
  }

  addFav(noticia){
    this.fav.addFav(noticia);
  }

}
