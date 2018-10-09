import {Component} from "@angular/core";
import {Book} from "../../models/Book";
import {MenuController, ModalController} from "ionic-angular";
import {BooksServices} from "../../services/books.services";
import {LendBookPage} from "./LendBookPage/lend-book";

@Component({
  selector: 'page-book',
  templateUrl: 'BookListPage.html'
})

export class BookListPage {

  booksList: Book[];

  constructor(private modalCtrl: ModalController,
              private booksService: BooksServices,
              private menuCtrl: MenuController) {
  }

  ionViewWillEnter() {
    this.booksList = this.booksService.booksList.slice();
  }

  onLoadBook(index: number) {
    let modal = this.modalCtrl.create(LendBookPage, {index: index});
    modal.present();
  }

  onToggleMenu() {
    this.menuCtrl.open();
  }
}


