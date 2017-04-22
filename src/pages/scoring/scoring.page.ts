import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';
import { Score } from '../../models/score.model';
import { Game } from '../../models/game.model';
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

        this.selectedSegment = 'popularity';
        this.slides = [
            // {
            //     id: 'players',
            //     title: 'scoring.players',
            //     type: 'players',
            //     icon: 'contacts',
            //     inputType: 'none'
            // },
            {
                id: 'popularity',
                title: 'scoring.popularity',
                type: 'popularity',
                icon: 'heart',
                inputType: 'number'
            },
            {
                id: 'stars',
                title: 'scoring.stars',
                type: 'stars',
                icon: 'star',
                inputType: 'number',
                min: 0,
                max: 6
            }
        ];

        _.forEach(this.slides, (def) => {
            if (def.inputType === 'select') {
                def.numbers = Array(def.max - def.min)
                    .fill(0)
                    .map((x, i) => i + def.min);
            }
        })
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
                            this.game.players.push(new Player(data.name))
                        }
                    }
                }
            ]
        });
        prompt.present();

    }


}