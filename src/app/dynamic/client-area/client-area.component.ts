import {AfterViewInit, Component, ComponentFactoryResolver, Inject, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {ClientService} from '../client-class';
import {AcmeClientComponent} from '../acme-client/acme-client.component';
import {EcmaClientComponent} from '../ecma-client/ecma-client.component';
import {ConfigService} from '../config.service';
import {CLIENT_SERVICE} from '../client-service.token';

@Component({
  selector: 'tm-client-area',
  templateUrl: './client-area.component.html',
  styleUrls: ['./client-area.component.css']
})
export class ClientAreaComponent implements OnInit, AfterViewInit {
  name: string;
  @ViewChild('vc', {read: ViewContainerRef}) vc: ViewContainerRef;

  constructor(@Inject(CLIENT_SERVICE) private client: { name: string },
              private config: ConfigService,
              private componentFactory: ComponentFactoryResolver) {
    this.name = client.name;
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    // console.log(this.el.nativeElement.querySelector('img'));
    // console.log(this.vc);
    // debugger
    const factory = this.componentFactory.resolveComponentFactory({
      acma: AcmeClientComponent,
      ecma: EcmaClientComponent
    }[this.config.client]);
    this.vc.createComponent(factory);
// this.vc.insert(component.hostView);
// console.log(this.img);
  }

}
