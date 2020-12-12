import { AfterViewInit, Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { Skills } from '../shared/models/models';
import Typewriter from 't-writer.js';
import { CheckViewPortService } from '../shared/services/check-view-port.service';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit, AfterViewInit {
  @ViewChild('skillTypeWriter') skillTypeWriter;
  skillData: Skills = new Skills();
  isTitleVisible: any;
  isTitleVisibleCounter: boolean;

  constructor(private checkViewPortService: CheckViewPortService) {
    this.skillData = require('@assets/data/skillset.json');
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.typeWrite();
  }

  typeWrite() {
    const target2 = this.skillTypeWriter.nativeElement;
    console.log(target2);
    const writer2 = new Typewriter(target2, {
      loop: false,
      typeColor: 'white',
      animateCursor: true,
      cursorColor: 'white',
      typeSpeed: 40,
      deleteSpeed:0
    });

    this.isTitleVisible = writer2
      .type('cd Skills')
      .queueClearText()
      .type('Skills');
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event) {
    const inViewPort = this.checkViewPortService.IsElementInViewPort(this.skillTypeWriter);
    if(!this.isTitleVisibleCounter && inViewPort) {
      console.log('skill title is visible');
      this.isTitleVisibleCounter = true;
      this.isTitleVisible.start();
    } 
    if(!inViewPort) {
      this.isTitleVisibleCounter = false;
    }
  }
}
