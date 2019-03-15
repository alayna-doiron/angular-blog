import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';

const routes: Routes = [
	{path:'nav', component:NavComponent},
	{path:'home', component:HomeComponent},
	{path:'about', component:AboutComponent},
	{path:'articles', component:ArticleListComponent},
	{path:'articles/:id', component:ArticleDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
