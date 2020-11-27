import { Component, Input, OnInit } from '@angular/core';
import { Skills } from '../shared/models/models';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  // TODO:TH Maybe try to have 4 categories that can be clicked on with blobs that render of the stuff when done.
})
export class SkillsComponent implements OnInit {
  skillData: Skills = new Skills();

  constructor() {
    this.skillData = require('@assets/data/skillset.json');
  }

  ngOnInit(): void {}
}
