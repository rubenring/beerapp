import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    moduleId: module.id.toString(),
    selector: "navigation",
    templateUrl: "./navigation.component.html",
    styleUrls: ['./navigation.component.css'],
})
export class NavigationCompontent{
    constructor(
        private route: ActivatedRoute,
        private router: Router
    ) {}
}