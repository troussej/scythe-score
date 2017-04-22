import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';

@Component({
    selector: 'page-slidespage',
    templateUrl: 'scoring.html'
})
export class ScoringPage {
    @ViewChild('mySlider') slider: Slides;
    selectedSegment: string;
    slides: any;

    constructor(public navCtrl: NavController) {
        this.selectedSegment = 'first';
        this.slides = [
            {
                id: "first",
                title: "First Slide"
            },
            {
                id: "second",
                title: "Second Slide"
            },
            {
                id: "third",
                title: "Third Slide"
            }
        ];
    }

    onSegmentChanged(segmentButton) {
        console.log("Segment changed to", segmentButton.value);
        const selectedIndex = this.slides.findIndex((slide) => {
            return slide.id === segmentButton.value;
        });
        this.slider.slideTo(selectedIndex);
    }

    onSlideChanged(slider) {
        console.log(slider)
        const currentSlide = this.slides[slider.getActiveIndex()];
        this.selectedSegment = currentSlide.id;
        console.log('Slide changed', currentSlide, this.selectedSegment);
    }

}