import {ChangeDetectionStrategy, Component, Input, OnChanges, ViewEncapsulation} from '@angular/core';
import {Show} from '../tv.models';
import {get} from 'lodash';
import {ActivatedRoute} from '@angular/router';
import {ShowDetailsComponent} from '../show-details/show-details.component';

@Component({
  selector: 'tm-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PosterComponent implements OnChanges {
  @Input() show: Show;
  @Input() size: number;
  posterUrl: string;
  private readonly placeHolderUrl = 'https://www.fillmurray.com/200/300';

  constructor(private route: ActivatedRoute) {
  }

  ngOnChanges() {
    this.posterUrl = get(this.show, 'image.medium', this.placeHolderUrl);
  }

  get isDetailsComponent(): boolean {

    const component = this.route.component;
    return component instanceof ShowDetailsComponent;
  }
}
