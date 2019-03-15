import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http:HttpClient) { }

   articles = [
		{
	    _id: 1,
	    date: new Date(),
	    title: 'My first post!',			// title shows up on the ArticleList
	    body: 'Lorem ipsum.'				// body is only for the ArticleDetail
		},
		{
	    _id: 2,
	    date: new Date(),
	    title: 'My second post!',
	    body: 'Lorem ipsum, lorem ipsum.'
	  },
		{
	    _id: 3,
	    date: new Date(),
	    title: 'More of my ramblings',
	    body: 'Lorem ipsum.  Lorem ipsum, lorem ipsum.'
  }]


	getArticles(){
		return articles;
	}
	getArticle(id){
		return this.article.body;
	}


}
