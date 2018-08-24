import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WaterComponent } from './water/water.component';
import { FireComponent } from './fire/fire.component';
import { GrassComponent } from './grass/grass.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { PokemonService } from './pokemon.service';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { PostItComponent } from './post-it/post-it.component';
import {FormsModule} from '@angular/forms';
import {SortablejsModule} from '../../node_modules/angular-sortablejs';
import { FormsComponent } from './forms/forms.component';

@NgModule({
  declarations: [
    AppComponent,
    WaterComponent,
    FireComponent,
    GrassComponent,
    NotFoundComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    PostItComponent,
    FormsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    SortablejsModule.forRoot({ }),
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
