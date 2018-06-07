import {Pipe, PipeTransform} from '@angular/core';
import {Episode} from '../shared/models/tv.models';
import {padStart} from 'lodash';

@Pipe({
  name: 'episodise'
})
export class EpisodisePipe implements PipeTransform {


  transform(episode: Partial<Episode>, upper = false): any {
    const pad = (n: number) => padStart(n.toString(), 2, '0');
    const [seasonNumber, episodeNumber] = [episode.season, episode.number].map(pad);
    return upper
      ? `S${seasonNumber}E${episodeNumber}`
      : `s${seasonNumber}e${episodeNumber}`;
  }

}
