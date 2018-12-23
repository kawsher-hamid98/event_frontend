import { Component, OnInit } from '@angular/core';
import { SpecialEventServiceService } from 'src/app/servicesEvent/Special/special-event-service.service';
import { TokenStorageServiceService } from 'src/app/services/token-storage-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-special-event',
  templateUrl: './special-event.component.html',
  styleUrls: ['./special-event.component.css']
})
export class SpecialEventComponent implements OnInit {
  SpecialEvent: any;
  

  constructor(private eventService: SpecialEventServiceService, private token: TokenStorageServiceService, private router: Router ) { }

  ngOnInit() {
    this.eventService.getAllSpecialEvents()
    .subscribe( data => {
      this.SpecialEvent = data;
    });
  }

  delete(event) {
    this.eventService.deleteEvent(event.id)
    .subscribe( data => {
      this.SpecialEvent.splice(this.SpecialEvent.indexOf(event), 1);
    },error => {
      console.log(error);
    })
  }

  edit(event) {
    this.eventService.updateEvent(event)
    .subscribe(data => {
      this.router.navigate(['/createSpecialEvent'])
    })
  }

  saveEvent() {
    this.router.navigate(['/createSpecialEvent'])
  }
}
