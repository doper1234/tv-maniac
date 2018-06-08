import {Injectable} from '@angular/core';
import {ClientService} from './client-class';

@Injectable()
export class AcmaClientService extends ClientService {
  name = 'ACME Corp.';

  constructor() {
    super();
  }
}
