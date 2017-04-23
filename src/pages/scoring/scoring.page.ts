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
        // this.game.players.push(new Player(config, this.game, 'John Bob'));


        this.slides = config.slides;
        let i = 0;
        _.forEach(this.slides, s => {
            s.index = i;
            i++;
        })

        this.selectedSegment = 'players';



        console.log('game', this.game);
    }

    onSegmentChanged(segmentButton) {

        const slide: any = this.slides[segmentButton.value];
        this.slider.slideTo(slide.index);
    }

    onSlideChanged(slider) {
        const current = slider.getActiveIndex();
        const currentSlide: any = _.find(this.slides, { index: current })
        if (currentSlide) {
            this.selectedSegment = currentSlide.type;
        }

    }

    showAddPlayer(): void {
        this.service.addPlayer(this.game);

    }


}