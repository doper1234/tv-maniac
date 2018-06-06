import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ShowDetailsData} from '../../app-routing.module';
import {ShowDetails} from '../tv.models';

@Component({
  selector: 'tm-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.scss']
})
export class ShowDetailsComponent {
  show: ShowDetails;

  constructor(route: ActivatedRoute) {
    const showDetailsData = route.snapshot.data as ShowDetailsData;
    this.show = showDetailsData.show as ShowDetails;
  }


}
