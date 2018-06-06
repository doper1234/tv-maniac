import {EpisodisePipe} from './episodise.pipe';
import {Episode} from './tv.models';

describe('EpisodisePipe', () => {
  let pipe: EpisodisePipe;
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  beforeEach(() => {
    pipe = new EpisodisePipe();
  });

  it('returns a string with "s" and "e" before numbers', () => {
    const input: Partial<Episode> = {season: 20, number: 21};
    expect(pipe.transform(input)).toBe('s20e21');
  });

  it('returns a properly padded string', () => {
    const input: Partial<Episode> = {season: 20, number: 21};
    expect(pipe.transform(input)).toBe('s20e21');
  });

  it('returns uppercase if addition param is `true`', () => {
    const input: Partial<Episode> = {season: 20, number: 21};
    expect(pipe.transform(input, true)).toBe('S20E21');
  });
});
