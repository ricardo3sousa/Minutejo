import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../shared/newsapi.service';
import { FavService } from '../shared/fav.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  articles;

  constructor(private service: NewsapiService, private fav:FavService) { }

  ngOnInit(): void {
    this.service.getArticle('general')
    .subscribe((data) => {this.articles = data.articles})
  }

  addFav(noticia){
    this.fav.addFav(noticia);
  }

}
