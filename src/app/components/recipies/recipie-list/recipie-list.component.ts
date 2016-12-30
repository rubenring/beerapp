import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { RecipiService } from './recipie-list.service';

import { Recipi } from "../../../models/recipi";

@Component({
    moduleId: module.id.toString(),
    selector: "recipie-list",
    templateUrl: "./recipie-list.component.html",
    styleUrls: ["./recipie-list.component.css"]
})
export class RecipieListComponent implements OnInit{
    recipieList: Recipi[];
    private selectedId: number;
    constructor(
        private service: RecipiService,
        private route: ActivatedRoute,
        private router: Router
    ) {}
    ngOnInit(){
        this.service.getRecipies()
        .then(redicipies => this.recipieList = redicipies);
    }
    selectRecipie(recipie: Recipi){
        console.log(recipie);
        this.router.navigate([recipie.id], {relativeTo: this.route});
    }
}