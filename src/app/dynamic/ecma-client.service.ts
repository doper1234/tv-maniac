import {Injectable} from '@angular/core';
import {ClientService} from './client-class';

@Injectable()
export class EcmaClientService extends ClientService {
  name = 'ECMA ltd..';

  constructor() {
    super();
  }
}
