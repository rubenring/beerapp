import { Component, Input } from '@angular/core';
import { Hero } from '../../models/hero';

@Component({
  selector: 'my-detail',
  templateUrl: './detail.compontent.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  @Input()
  hero: Hero;
}
