import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ImagePage } from '../image/image';
import { VideoPage } from '../video/video';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  openImage()
  {
    this.navCtrl.push(ImagePage);
  }

  openVideo()
  {
    this.navCtrl.push(VideoPage);
  }
}
