import { Component, OnInit } from '@angular/core';
import {
  trigger,
  transition,
  query,
  style,
  stagger,
  animate,
} from '@angular/animations';
import { Skills } from '../shared/models/models';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  // TODO:TH See if we can get the animation to trigger when something is within viewport. Maybe create a common service
  // That can check to see when something is within the viewport?
  // TODO:TH Maybe try to have 4 categories that can be clicked on with blobs that render of the stuff when done.
  animations: [
    trigger('listAnimation', [
      transition('void => *', [
        query(
          '.skillTiles',
          [
            style({ opacity: 0 }),
            stagger(300, [
              animate('600ms', style({ opacity: 1, transform: 'none' })),
            ]),
          ],
          { optional: true }
        ),
      ]),
    ]),
  ],
})
export class SkillsComponent implements OnInit {
  skillData: Skills = new Skills();
  constructor() {
    this.skillData = require('@assets/data/skillset.json');
  }

  ngOnInit(): void {}
}
