import {Component} from "@angular/core";
import {MenuController, ModalController} from "ionic-angular";
import {CdsServices} from "../../services/cds.services";
import {Cd} from "../../models/Cd";
import {LendCdPage} from "./LendCDPage/lend-cd";

@Component({
  selector:'page-cd',
  templateUrl:'CDListPage.html'
})

export class CDListPage {

  cdsList: Cd[];

  constructor(private modalCtrl: ModalController,
              private cdsService: CdsServices,
              private menuCtrl: MenuController) {
  }

  ionViewWillEnter() {
    this.cdsList = this.cdsService.cdsList.slice();
  }

  onLoadCd(index: number) {
    let modal = this.modalCtrl.create(LendCdPage, {index: index});
    modal.present();
  }

  onToggleMenu() {
    this.menuCtrl.open();
  }
}
