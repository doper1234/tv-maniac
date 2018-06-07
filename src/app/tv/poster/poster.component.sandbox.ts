import {sandboxOf} from 'angular-playground';
import {PosterComponent} from './poster.component';
// import {ActivatedRoute, RouterModule} from '@angular/router';
import {Show} from '../../shared/models/tv.models';
import {RouterTestingModule} from '@angular/router/testing';

export default sandboxOf(PosterComponent)
  .add('default', {
    template: '<tm-poster [show]="show"></tm-poster>',
    context: {
      show: <Partial<Show>>{
        image: null
      }
    },
    styles: [`:host {width:300px; height: 500px; display:block;}`]
  })
  .add('with show image', {
    template: '<tm-poster [show]="show"></tm-poster>',
    context: {
      show: <Partial<Show>>{
        image: {medium: 'https://pbs.twimg.com/profile_images/927446347879292930/Fi0D7FGJ_400x400.jpg'}
      }
    },
    styles: [`:host {width:300px; height: 500px; display:block;}`]
  })
  .add('with bookmarked image', {
    template: '<tm-poster [show]="show" class="bookmarked"></tm-poster>',
    context: {
      show: <Partial<Show>>{
        image: {medium: 'https://pbs.twimg.com/profile_images/927446347879292930/Fi0D7FGJ_400x400.jpg'}
      }
    },
    styles: [`:host {width:300px; height: 500px; display:block;}`]
  });
