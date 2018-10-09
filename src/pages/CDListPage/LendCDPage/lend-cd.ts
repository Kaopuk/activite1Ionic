import {Component, OnInit} from "@angular/core";
import {NavParams, ViewController} from "ionic-angular";
import {Cd} from "../../../models/Cd";
import {CdsServices} from "../../../services/cds.services";

@Component({
  selector: 'page-lend-cd',
  templateUrl: 'lend-cd.html'
})

export class LendCdPage implements OnInit {
  index: number;
  cd: Cd;

  constructor(public navParams: NavParams,
              private viewCtrl: ViewController,
              private cdService: CdsServices) {

  }

  ngOnInit() {
    this.index = this.navParams.get('index');
    this.cd = this.cdService.cdsList[this.index];
  }

  dismissModal() {
    this.viewCtrl.dismiss();
  }

  onToggleCd() {
    this.cd.isLend = !this.cd.isLend;
  }

}
