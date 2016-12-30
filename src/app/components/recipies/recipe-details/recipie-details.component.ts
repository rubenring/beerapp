import 'rxjs/add/operator/switchMap';

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { RecipiService } from '../recipie-list/recipie-list.service';
import { Recipi } from "../../../models/recipi";

@Component({
    moduleId: module.id.toString(),
    selector: "recipie-details",
    templateUrl: "./recipie-details.component.html",
    styleUrls: ['./recipie-details.component.css'],
})
export class RecipieDetailsComponent implements OnInit{

    recipie: Recipi

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: RecipiService
    ) {}
    ngOnInit(){
        this.route.params
        .switchMap((params: Params) => this.service.getRecipi(+params['id']))
        .subscribe((recipie: Recipi) => this.recipie = recipie);     
    }
}