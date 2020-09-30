import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { MatIconModule } from '@angular/material/icon';

import { HomeComponent } from './home.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { VideoListComponent } from './video-list/video-list.component';
import { MenuItemComponent } from './left-menu/menu-item/menu-item.component';



@NgModule({
  declarations: [
    HomeComponent,
    LeftMenuComponent,
    VideoListComponent,
    MenuItemComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatIconModule
  ]
})
export class HomeModule { }
