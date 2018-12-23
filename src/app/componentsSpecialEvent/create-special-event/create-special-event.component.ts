import { Component, OnInit } from '@angular/core';
import { SpecialEvent } from 'src/app/special-event';
import { SpecialEventServiceService } from 'src/app/servicesEvent/Special/special-event-service.service';
import { Router } from '@angular/router';
import { TokenStorageServiceService } from 'src/app/services/token-storage-service.service';

@Component({
  selector: 'app-create-special-event',
  templateUrl: './create-special-event.component.html',
  styleUrls: ['./create-special-event.component.css']
})
export class CreateSpecialEventComponent implements OnInit {

  specialEvent: SpecialEvent = new SpecialEvent();
  private newAttribute: any = {};


  addFieldValue() {
      this.specialEvent.subEvents.push(this.newAttribute)
      this.newAttribute = {};
  }

  deleteFieldValue(index) {
      this.specialEvent.subEvents.splice(index, 1);
  }

  countries = [
    {name: "United States"},
    {name: "Bangladesh"},
    {name: "India"},
    {name: "Pakistan"},
    {name: "Australia"},
    {name: "Canada"},
    {name: "Brazil"},
    {name: "England"}
  ];

  categories = [
    {name: "Development"},
    {name: "Educational, Education"},
    {name: "Food"},
    {name: "IT, Technology, Artificial Intelligence, AI, Science"},
    {name: "Science"},
    {name: "Commerce"},
    {name: "Business"},
    {name: "Govnment"},
    {name: "Summit"},
    {name: "Conference"},
    {name: "Trade show"}
  ];

  constructor(private eventService: SpecialEventServiceService, private token: TokenStorageServiceService,
    private router: Router ) { }

 ngOnInit() {
 }

 saveEvent() {
   this.eventService.createEvent(this.specialEvent)
   .subscribe(data => {
     this.specialEvent = new SpecialEvent()
     this.router.navigate(['/specialEvent'])
   })
 }

}
