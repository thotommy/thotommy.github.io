import { Component, Input, OnInit } from '@angular/core';
import { Skills } from '../shared/models/models';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  skillData: Skills = new Skills();

  constructor() {
    this.skillData = require('@assets/data/skillset.json');
  }

  ngOnInit(): void {}
}
