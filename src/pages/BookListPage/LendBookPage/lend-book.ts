import {Component, OnInit} from "@angular/core";
import {NavParams, ViewController} from "ionic-angular";
import {BooksServices} from "../../../services/books.services";
import {Book} from "../../../models/Book";

@Component({
  selector: 'page-lend-book',
  templateUrl: 'lend-book.html'
})

export class LendBookPage implements OnInit {
  index: number;
  book: Book;

  constructor(public navParams: NavParams,
              private viewCtrl: ViewController,
              private bookService: BooksServices) {

  }

  ngOnInit() {
    this.index = this.navParams.get('index');
    this.book = this.bookService.booksList[this.index];
  }

  dismissModal() {
    this.viewCtrl.dismiss();
  }

  onToggleBook() {
    this.book.isLend = !this.book.isLend;
  }

}
