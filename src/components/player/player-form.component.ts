import { Component, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { Player } from '../../models/player.model';
import { config } from '../../config/config';

import * as _ from "lodash";
@Component({
    selector: 'scsc-player-form',
    templateUrl: 'player-form.html',

})
export class PlayerForm {

    private player: Player;
    private form: FormGroup;
    @ViewChild('name')
    nameInput: any
    config = config;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public viewCtrl: ViewController,
        private fb: FormBuilder

    ) {
        this.player = this.navParams.get('player');
        this.form = this.fb.group({
            'name': [this.player.name, Validators.compose([Validators.required, Validators.minLength(1)])],
            'faction': [this.player.faction]
        })
    }

    ionViewDidEnter(): void {
        console.log(this.nameInput);
        this.nameInput.setFocus();
    }

    dismiss(success: boolean) {
        let save = success && this.form.valid;
        console.log('dismiss', success, this.form.valid, this.form.value)
        if (save) {
            this.player.name = this.form.value.name;
            this.player.faction = this.form.value.faction;
        }
        console.log('player', this.player)
        this.viewCtrl.dismiss({ player: this.player, success: save });
    }
}


