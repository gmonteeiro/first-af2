import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

// Import the AF2 Module
import { AngularFireModule } from 'angularfire2';

// AF2 Settings
export const firebaseConfig = {
    apiKey: "AIzaSyAp_leJKS_fgJ3OIgazQbinSKZ7Mrqwyrw",
    authDomain: "first-af2.firebaseapp.com",
    databaseURL: "https://first-af2.firebaseio.com",
    storageBucket: "first-af2.appspot.com",
    messagingSenderId: "630109074072"
};

@NgModule({
    declarations: [
        MyApp,
        HomePage
    ],
    imports: [
        IonicModule.forRoot(MyApp),
        AngularFireModule.initializeApp(firebaseConfig)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage
    ],
    providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
