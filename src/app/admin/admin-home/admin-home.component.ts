import {Component, OnInit} from '@angular/core';


interface item {
    id: number,

}
@Component({
    selector: 'app-admin-home',
    templateUrl: './admin-home.component.html',
    styleUrls: ['./admin-home.component.sass']
})
export class AdminHomeComponent implements OnInit {

    firststeps: boolean = true;
    secondsteps: boolean = true;
    title: string;
    items: any = [];

    constructor() {
    }

    ngOnInit() {
        this.items.push('text_area' + (this.items.length + 1));

    }

    firstStep() {
        if (this.title) {
            this.firststeps = false;
            this.secondsteps = true;
        }
        this.items.push('text_area' + (this.items.length + 1));

    }

}
