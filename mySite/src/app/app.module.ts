import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SobreComponent } from './base/sobre/sobre.component';
import { NaviComponent } from './base/navi/navi.component';
import { CoverComponent } from './base/cover/cover.component';
import { YoutubeComponent } from './base/youtube/youtube.component';
import { ExperienceComponent } from './base/experience/experience.component';
import { PricesComponent } from './base/prices/prices.component';
import { DemoComponent } from './base/demo/demo.component';
import { CodeLanguagesComponent } from './base/code-languages/code-languages.component';
import { FooterComponent } from './base/footer/footer.component';
import { LinkdinAchivementComponent } from './base/linkdin-achivement/linkdin-achivement.component';
import { GamejamsComponent } from './base/gamejams/gamejams.component';
import { RedesSociaisComponent } from './base/redes-sociais/redes-sociais.component';

@NgModule({
  declarations: [
    AppComponent,
    SobreComponent,
    NaviComponent,
    CoverComponent,
    YoutubeComponent,
    ExperienceComponent,
    PricesComponent,
    DemoComponent,
    CodeLanguagesComponent,
    FooterComponent,
    LinkdinAchivementComponent,
    GamejamsComponent,
    RedesSociaisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
