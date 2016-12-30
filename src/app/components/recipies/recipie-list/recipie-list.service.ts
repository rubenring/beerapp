import { Injectable } from '@angular/core';
import { Recipi } from "../../../models/recipi";

let RECIPIES = [
    new Recipi(1, "beer 1", "Wheet"),
    new Recipi(2, "beer 2", "Pale"),
    new Recipi(3, "beer 3", "Amber")
]
let recipiePromise = Promise.resolve(RECIPIES);

@Injectable()
export class RecipiService {
    getRecipies() { return recipiePromise }

    getRecipi(id:number | string) {
        return recipiePromise
        .then(recipies => recipies.find(recipi => recipi.id === id));
    }
}