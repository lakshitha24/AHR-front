import {Component, OnInit} from '@angular/core';


interface item {
    id: number

}
@Component({
    selector: 'app-admin-home',
    templateUrl: './admin-home.component.html',
    styleUrls: ['./admin-home.component.sass']
})
export class AdminHomeComponent implements OnInit {

    firststeps: boolean = true;
    secondsteps: boolean = false;
    title: string;
    items: any = [];
    message:string;



    constructor() {
    }

    ngOnInit() {
        this.items.push({'item': this.items.length + 1});
    }

    firstStep() {
        if (this.title) {
            this.firststeps = false;
            this.secondsteps = true;
        }
    }

    added(add: boolean) {
       if (add) {
           this.items.push({'item': this.items.length + 1});
       }
    }

}
