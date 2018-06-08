import {ChangeDetectionStrategy, Component, Input, OnChanges, ViewEncapsulation} from '@angular/core';
import {Show} from '@models';
import {get} from 'lodash';
import {ActivatedRoute} from '@angular/router';
import {ShowDetailsComponent} from '../show-details/show-details.component';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'tm-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('imgTrigger', [
      transition('start <=> end', [
        style({transform: 'translateX(0)'}),
        animate('1s', style({transform: 'translateX(100px)'}))
      ])
    ])
  ]
})
export class PosterComponent implements OnChanges {
  @Input() show: Show;
  @Input() size: number;
  imageState: 'start' | 'end' = 'start';
  posterUrl: string;
  private readonly placeHolderUrl = 'https://www.fillmurray.com/200/300';

  constructor(private route: ActivatedRoute) {
  }

  ngOnChanges() {
    this.posterUrl = get(this.show, 'image.medium', this.placeHolderUrl);
  }

  toggleImageState() {
    this.imageState = this.imageState === 'start' ? 'end' : 'start';
  }

  get isDetailsComponent(): boolean {
    const component = this.route.component;
    return component === ShowDetailsComponent;
  }
}
