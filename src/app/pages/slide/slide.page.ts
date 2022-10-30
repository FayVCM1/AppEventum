import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.page.html',
  styleUrls: ['./slide.page.scss'],
})
export class SlidePage implements OnInit {

  constructor( private navCtrl: NavController) { }

  ngOnInit() {
  }
  
  onClickEmpezar(){
    this.navCtrl.navigateBack('welcome');
  }

}
