import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class FavService {

  items = [];

  constructor(private toast: ToastrService) { }

  addFav(article){
    if(!this.items.some((item) => item.title == article.title)){
      this.items.push(article);
      this.toast.success('Artivo adicionado aos favoritos');
    }else{
      this.items.splice(article, 1);
      this.toast.warning('Artigo removido dos favoritos');
    }
  }

  getFavs(){
    return this.items;
  }
}
