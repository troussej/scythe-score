import { Component, ViewChild } from '@angular/core';
import { NavController, Slides, AlertController } from 'ionic-angular';
import { Score } from '../../models/score.model';
import { Game } from '../../models/game.model';
import { config } from '../../config/config';
import { Player } from '../../models/player.model';
import { PlayerService } from '../../services/player.service';
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

    constructor(public navCtrl: NavController,
        private service: PlayerService,
        public alertCtrl: AlertController) {

        this.game = new Game();
        this.game.players.push(new Player(config, this.game, 'John Bob'));


        this.slides = config.slides;
        //           total: number = 0;
        // territories: number = 0;
        // popularity: number = 0;
        // resources: number = 0;
        this.selectedSegment = 'players';



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
        this.service.addPlayer(this.game);

    }


}