import { Component } from '@angular/core';
import {ActionSheetController, ActionSheetOptions, IonicPage, NavController, NavParams} from 'ionic-angular';
import {SocialSharing} from "@ionic-native/social-sharing";
import {Camera} from "@ionic-native/camera";


/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: "detail"
})
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  private img = '';

  constructor(
    private cam: Camera,
    private socia: SocialSharing,
    private actionSheetCtrl: ActionSheetController,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

  openActionSheet() {
    const actionSheet: ActionSheetOptions = {
      title: 'Share',
      buttons: [
        {
          text: 'Facebook',
          icon: 'logo-facebook',
          handler: ()=> {
            this.cam.getPicture({
              quality: 100,
              destinationType: this.cam.DestinationType.DATA_URL,
              encodingType: this.cam.EncodingType.JPEG,
              mediaType: this.cam.MediaType.PICTURE
            })
              .then((file)=> {
                this.img = 'data:image/jpeg;base64,' + file;
              });
          }
        }
      ]
    };
    this.actionSheetCtrl.create(actionSheet).present();
  }
}
