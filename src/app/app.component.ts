import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';

import { MenuController, Platform, ToastController } from '@ionic/angular';

import { StatusBar } from '@capacitor/status-bar';
import { SplashScreen } from '@capacitor/splash-screen';

import { Storage } from '@ionic/storage-angular';

import { UserData } from './providers/user-data';
import { async } from 'rxjs/internal/scheduler/async';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  appPages = [
/*    {
      title: 'Aluno',
      url: '/app/tabs/account',
      icon: 'person'
    },*/
    {
      title: 'Matrícula',
      url: '/app/tabs/matricula-list',
      icon: 'book',
      showIfNotLoggedIn: false
    },
    {
      title: 'Lista de Oferta',
      url: '/app/tabs/lista-oferta',
      icon: 'list',
      showIfNotLoggedIn: true
    },
    {
      title: 'Sigaa App',
      url: '/app/tabs/about',
      icon: 'information-circle',
      showIfNotLoggedIn: true
    }
  ];
  loggedIn = false;
  loginFailed = false;
  dark = false;

  constructor(
    private menu: MenuController,
    private platform: Platform,
    private router: Router,
    private storage: Storage,
    private userData: UserData,
    private swUpdate: SwUpdate,
    private toastCtrl: ToastController,
  ) {
    this.initializeApp();
  }

  async ngOnInit() {
    await this.storage.create();
    this.checkLoginStatus();
    this.listenForLoginEvents();

    this.swUpdate.available.subscribe(async res => {
      const toast = await this.toastCtrl.create({
        message: 'Update available!',
        position: 'bottom',
        buttons: [
          {
            role: 'cancel',
            text: 'Reload'
          }
        ]
      });

      await toast.present();

      toast
        .onDidDismiss()
        .then(() => this.swUpdate.activateUpdate())
        .then(() => window.location.reload());
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      if (this.platform.is('hybrid')) {
        StatusBar.hide();
        SplashScreen.hide();
      }
    });
  }

  checkLoginStatus() {
    return this.userData.isLoggedIn().then(loggedIn => {
      return this.updateLoggedInStatus(loggedIn);
    });
  }

  updateLoggedInStatus(loggedIn: boolean) {
    setTimeout(() => {
      this.loggedIn = loggedIn;
    }, 300);
  }

  listenForLoginEvents() {
    window.addEventListener('user:login', () => {
      this.updateLoggedInStatus(true);
      this.router.navigateByUrl('/app/tabs/matricula-list');
    });

    window.addEventListener('user:logout', () => {
      this.updateLoggedInStatus(false);
    });

    window.addEventListener('user:loginFailed', async () => {
      this.loginFailed = true;
      console.log('loginFailed ' + this.loginFailed);

      // Create a toast
        const toast = await this.toastCtrl.create({
          header: 'Credenciais de usuário inválidas. ',
          duration: 3000,
          position: 'top'
  /*        buttons: [{
            text: 'Close',
            role: 'cancel'
          }] */
        });

        // Present the toast at the bottom of the page
        await toast.present();
      
    });

  }

  logout() {
    this.userData.logout().then(() => {
      return this.router.navigateByUrl('/app/tabs/about');
    });
  }

  openTutorial() {
    this.menu.enable(false);
    this.storage.set('ion_did_tutorial', false);
    this.router.navigateByUrl('/tutorial');
  }
}
function presentToast(position: any, arg1: string) {
  throw new Error('Function not implemented.');
}

