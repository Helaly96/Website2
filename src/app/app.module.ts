import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { ContactusComponent } from './contactus/contactus.component';
import { OurProjectsComponent } from './ourprojects/ourprojects.component';
import { FooterComponent } from './footer/footer.component';
import { GalleryComponent } from './gallery/gallery.component';
import { MapComponent } from './map/map.component';


@NgModule({
  declarations: [
    AppComponent,
    AchievementsComponent,
    ContactusComponent,
    OurProjectsComponent,
    FooterComponent,
    GalleryComponent,
    MapComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
