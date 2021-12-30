import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { TestComponentComponent } from './Components/test-component/test-component.component';
import { FormModuleComponent } from './Components/form-module/form-module.component';
import { ChildComponentComponent } from './Components/child-component/child-component.component';
import { TodoComponent } from './Components/todo/todo.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { UserCompComponent } from './Components/user-comp/user-comp.component';
import { NoPageComponent } from './Components/no-page/no-page.component';
import { AboutCompanyComponent } from './Components/about-company/about-company.component';
import { AboutMeComponent } from './Components/about-me/about-me.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowsePostsComponent } from './posts/browse-posts/browse-posts.component';
import { CommentPostComponent } from './posts/comment-post/comment-post.component';

const routes: Routes = [
  {
    path: 'about',
    component: AboutUsComponent,
    children: [
      {
        path: 'company',
        component: AboutCompanyComponent
      },
      {
        path: 'me',
        component: AboutMeComponent
      }
    ]
  },
  {
    path: 'test',
    component: TestComponentComponent
  },
  {
    path: 'child-c',
    component: ChildComponentComponent
  },
  {
    path: 'form-module',
    component: FormModuleComponent
  },
  {
    path: 'todo',
    component: TodoComponent
  },
  {
    path: 'user/:id',
    component: UserCompComponent
  },
  {
    path: '**',
    component: NoPageComponent
  },
  {
    path: 'posts',
    component: BrowsePostsComponent
  },
  {
    path: 'posts/comments',
    component: CommentPostComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(routes)
    ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
