import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tiles',
  templateUrl: './animated-tiles.component.html',
  styleUrls: ['./animated-tiles.component.scss'],
})
export class AnimatedTilesComponent implements OnInit {
  // TODO: TH Need to create a animated tile that shows the title when hovered
  @Input() tileData: any;

  constructor() {}

  ngOnInit(): void {}
}
