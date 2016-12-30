import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { RecipieListComponent } from './recipie-list/recipie-list.component';

@Component({
    moduleId: module.id.toString(),
    selector: "recipies",
    templateUrl: "./recipies.component.html"
})
export class RecipiesComponent{
    constructor(
        private route: ActivatedRoute,
        private router: Router
    ) {}
}