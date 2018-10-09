import { Component } from "@angular/core";
import {AlertController, MenuController} from "ionic-angular";

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})

export class SettingsPage {

  constructor(private alertCtrl: AlertController,
              private menuCtrl: MenuController) {
  }

  onToggleRendreTout() {
    let alert = this.alertCtrl.create({
      title: 'Etes vous certain(e) de vouloir continuer ?',
      subTitle: 'Cette action permettra dans le futur de rendre tout les CD et livres de l\'application !',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel'
        },
        {
          text: 'Confirmer',
          handler: () => console.log ('Confirmé !')
        }
      ]
    });
    alert.present();
  }

  onToggleMenu() {
    this.menuCtrl.open();
  }
}
