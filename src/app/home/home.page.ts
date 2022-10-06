import { Component } from '@angular/core';
import { BLEMock } from '@ionic-native-mocks/ble';
import { BLE } from '@ionic-native/ble/ngx';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  firstData:string = "";
  secondData:string = "";
  secondChildData:string = '';
  firstChildData: string = '';
  dummyData:string;

  deviceId:string = 'D2:06:93:BF:16:76';

  movies:any[] = [];
  constructor(private ble:BLE) {}

  /**
   * This method is automatically call when the first handler event triggers and it assigns the value to share data variable
   * @param event 
   */
  firstChildEventHandler(event) {
    console.log("------first Child--------",event);
    this.firstChildData = event;
  }

  /**
   * This method is automatically call when the first handler event triggers and it assigns the value to share data variable
   * @param event 
   */
  secondChildEvent(event) {
    console.log("---------second child",event);
    this.secondChildData = event;
  }


  ionViewWillEnter() {
    console.log("I am here");
    this.connet();
  }

  addToFirst() {
    this.firstData = this.dummyData;
  }
  addToSecond() {
    this.secondData = this.dummyData;
  }

  async connet() {
    await this.ble.connect(this.deviceId).subscribe(
      (res) => {
        console.log(res);
        console.log("BLE MOCKED");
      },
      (error) => {
        console.log("------------Error--------------",error);
      }
    )
  }


  addMovie(movieName:string) {
    if(movieName.length > 0) {
      this.movies.push(movieName);
      return true;
    }else {
      return false;
    }
  }

  removeMovie(movieName:string) {
    let ispresent = this.movies.indexOf(movieName);
    if(ispresent != -1) {
     this.movies = this.movies.splice(ispresent, 1); 
    }else {
      throw Error("Movie Not Existttt")
    }
  }

  removeAllMoview() {
    this.movies = [];
  }

  

}
