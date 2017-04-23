import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';

import { PlayerService } from '../services/player.service';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ScoringPage } from '../pages/scoring/scoring.page';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { EntriesPipe } from '../pipes/entries.pipe';
import { RangePipe } from '../pipes/range.pipe';

import { PointSheet } from '../components/scoring/points-sheet.component';
import { Coins } from '../components/scoring/coins.component';
import { Stars } from '../components/scoring/stars.component';
import { Popularity } from '../components/scoring/popularity.component';
import { Territories } from '../components/scoring/territories.component';
import { Buildings } from '../components/scoring/buildings.component';
import { Resources } from '../components/scoring/resources.component';
import { Total } from '../components/scoring/total.component';
import { Players } from '../components/scoring/players.component';

import { PlayerForm } from '../components/player/player-form.component'


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ScoringPage,
    PointSheet,
    EntriesPipe,
    Coins,
    Stars,
    Popularity,
    Territories,
    Buildings,
    Resources,
    Players,
    PlayerForm,
    Total,
    RangePipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (http: Http) => new TranslateStaticLoader(http, 'assets/i18n', '.json'),
      deps: [Http]
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ScoringPage,
    PlayerForm
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    PlayerService
  ]
})
export class AppModule { }
