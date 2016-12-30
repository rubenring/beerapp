// TODO SOMEDAY: Feature Componetized like CrisisCenter
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    moduleId: module.id.toString(),
    selector: "dashboard",
    templateUrl: "./dashboard.component.html"
})
export class DashboardCompontent{
    constructor(
        private route: ActivatedRoute,
        private router: Router
    ) {}
}