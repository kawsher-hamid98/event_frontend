import { Component, OnInit } from '@angular/core';
import { SpecialEventServiceService } from 'src/app/servicesEvent/Special/special-event-service.service';
import { TokenStorageServiceService } from 'src/app/services/token-storage-service.service';
import { PageServiceService } from 'src/app/pageService/page-service.service';

@Component({
  selector: 'app-special-event-list',
  templateUrl: './special-event-list.component.html',
  styleUrls: ['./special-event-list.component.css']
})
export class SpecialEventListComponent implements OnInit {

  specialEvent: any;
  searchText: string;
  currentUser:string;
  pager: any = {};
  pagedItems: any[];


  constructor(private eventService: SpecialEventServiceService,private token: TokenStorageServiceService,
    private pageService:PageServiceService) { 
    this.currentUser = this.token.getUsername();

  }

  ngOnInit() {
    this.eventService.getAllSpecialEvents().subscribe(
      data => {
        this.specialEvent = data
      }
    )
  }

  delete(event) {
    this.eventService.deleteEvent(event.id)
    .subscribe( data => {
      this.specialEvent.splice(this.specialEvent.indexOf(event), 1);
      window.location.reload();
    },error => {
      console.log(error);
    })
  }
}
