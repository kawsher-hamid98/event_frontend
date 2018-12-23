import { Component, OnInit } from '@angular/core';
import { GeneralEventServiceService } from '../../servicesEvent/general/general-event-service.service';
import  { GeneralEvent } from '../../general-event';
import { TokenStorageServiceService } from 'src/app/services/token-storage-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-general-event',
  templateUrl: './general-event.component.html',
  styleUrls: ['./general-event.component.css']
})
export class GeneralEventComponent implements OnInit {

  generalEvent: any;
  

  constructor(private event1: GeneralEventServiceService, private token: TokenStorageServiceService, private router: Router ) { }

  ngOnInit() {
    this.event1.getAllGeneralEvents()
    .subscribe( data => {
      this.generalEvent = data;
    });
  }

  delete(event) {
    this.event1.deleteEvent(event.id)
    .subscribe( data => {
      this.generalEvent.splice(this.generalEvent.indexOf(event), 1);
    },error => {
      console.log(error);
    })
  }

  edit(event) {
    this.event1.updateEvent(event)
    .subscribe(data => {
      this.router.navigate(['/createGeneralEvent'])
    })
  }

  saveEvent() {
    this.router.navigate(['/createGeneralEvent'])
  }

}
