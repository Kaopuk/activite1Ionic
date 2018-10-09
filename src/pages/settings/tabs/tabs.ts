import {Component} from "@angular/core";
import {SettingsPage} from "../settings";
import {BookListPage} from "../../BookListPage/BookListPage";
import {CDListPage} from "../../CDListPage/CDListPage";


@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})

export class TabsPage {
  bookListPages = BookListPage;
  cdListPages = CDListPage;
  settingsPage = SettingsPage;

}
