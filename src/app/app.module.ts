import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {BookListPage} from "../pages/BookListPage/BookListPage";
import {CDListPage} from "../pages/CDListPage/CDListPage";
import {TabsPage} from "../pages/settings/tabs/tabs";
import {SettingsPage} from "../pages/settings/settings";
import {LendBookPage} from "../pages/BookListPage/LendBookPage/lend-book";
import {LendCdPage} from "../pages/CDListPage/LendCDPage/lend-cd";
import {OptionsPage} from "../pages/options/options";
import {BooksServices} from "../services/books.services";
import {CdsServices} from "../services/cds.services";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BookListPage,
    CDListPage,
    LendBookPage,
    LendCdPage,
    TabsPage,
    SettingsPage,
    OptionsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BookListPage,
    CDListPage,
    LendBookPage,
    LendCdPage,
    TabsPage,
    SettingsPage,
    OptionsPage

  ],
  providers: [
    BooksServices,
    CdsServices,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
