import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';
import { Score } from '../../models/score.model';
import { Game } from '../../models/game.model';
import { config } from '../../config/config';
import { Player } from '../../models/player.model';
import { AlertController } from 'ionic-angular';
import * as _ from "lodash";
@Component({
    selector: 'scsc-scoring-page',
    templateUrl: 'scoring.html'
})
export class ScoringPage {
    @ViewChild('mySlider') slider: Slides;
    selectedSegment: string;
    slides: any;

    game: Game;

    constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

        this.game = new Game();
        this.game.players.push(new Player('John Bob', this.game, config));


        this.slides = config.slides;
        //           total: number = 0;
        // territories: number = 0;
        // popularity: number = 0;
        // resources: number = 0;
        this.selectedSegment = 'money';



        console.log('game', this.game);
    }

    onSegmentChanged(segmentButton) {

        // const selectedIndex = this.slides.findIndex((slide) => {
        //     return slide.id === segmentButton.value;
        // });
        // this.slider.slideTo(selectedIndex);
    }

    onSlideChanged(slider) {

        // const currentSlide = this.slides[slider.getActiveIndex()];
        // if (currentSlide) {
        //     this.selectedSegment = currentSlide.id;
        // }

    }

    showAddPlayer(): void {
        let prompt = this.alertCtrl.create({
            title: 'Add player',

            inputs: [
                {
                    name: 'name',
                    placeholder: 'Name'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: data => {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: data => {
                        if (!_.isEmpty(data.name)) {
                            console.log('save new player', data)
                            this.game.players.push(new Player(data.name, this.game, config))
                        }
                    }
                }
            ]
        });
        prompt.present();

    }


}