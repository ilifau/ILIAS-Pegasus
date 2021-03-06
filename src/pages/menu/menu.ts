import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { LogoutProvider } from "../../providers/logout/logout";
import { SettingsPage } from "../settings/settings";
import { Page } from "ionic-angular/navigation/nav-util";

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-menu",
  templateUrl: "menu.html",
})
export class MenuPage {

  settingsPage: Page = SettingsPage;


  constructor(public navCtrl: NavController, public navParams: NavParams,  private readonly logoutCtrl: LogoutProvider,) {
  }

  

  async openPage(page: Page): Promise<void> {
    await this.navCtrl.push(page);
}


  async openPageLazy(page: string): Promise<void> {
        await this.navCtrl.push(page);
    }

    async logout(): Promise<void> {
      await this.logoutCtrl.logout()
    }

    async openPrivacyPolicy(url: string): Promise<void> {
      window.open(url , "_system")
      }
    
}
