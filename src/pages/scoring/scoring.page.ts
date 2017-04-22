import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';
import { Score } from '../../models/score.model';
import { Game } from '../../models/game.model';
import { Player } from '../../models/player.model';

@Component({
    selector: 'scsc-scoring-page',
    templateUrl: 'scoring.html'
})
export class ScoringPage {
    @ViewChild('mySlider') slider: Slides;
    selectedSegment: string;
    slides: any;

    game: Game;

    constructor(public navCtrl: NavController) {

        this.game = new Game();

        this.selectedSegment = 'players';
        this.slides = [
            {
                id: 'players',
                title: 'scoring.players',
                type: 'players'
            },
            {
                id: 'second',
                title: 'Second Slide'
            },
            {
                id: 'third',
                title: 'Third Slide'
            }
        ];
    }

    onSegmentChanged(segmentButton) {

        const selectedIndex = this.slides.findIndex((slide) => {
            return slide.id === segmentButton.value;
        });
        this.slider.slideTo(selectedIndex);
    }

    onSlideChanged(slider) {

        const currentSlide = this.slides[slider.getActiveIndex()];
        this.selectedSegment = currentSlide.id;

    }

}