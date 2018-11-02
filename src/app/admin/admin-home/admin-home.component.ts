import {Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

interface item {
    name: string,
    age: number,
    email: string
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
    items: Observable<item[]>;

    constructor() {
    }

    ngOnInit() {this.items = Observable.of([
        {
            "id": 1,
            "name": "Laura",
            "email": "lbutler0@latimes.com",
            "age": 47
        },
        {
            "id": 2,
            "name": "Walter",
            "email": "wkelley1@goodreads.com",
            "age": 37
        },
        {
            "id": 3,
            "name": "Walter",
            "email": "wgutierrez2@smugmug.com",
            "age": 49
        },
        {
            "id": 4,
            "name": "Jesse",
            "email": "jarnold3@com.com",
            "age": 47
        },
        {
            "id": 5,
            "name": "Irene",
            "email": "iduncan4@oakley.com",
            "age": 33
        }
    ]);

    }

    firstStep() {
        if (this.title) {
            this.firststeps = false;
            this.secondsteps = true;
        }
    }

}
