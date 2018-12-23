import { Component, OnInit } from '@angular/core';
import { SpecialEventServiceService } from 'src/app/servicesEvent/Special/special-event-service.service';
import { TokenStorageServiceService } from 'src/app/services/token-storage-service.service';
import { Router } from '@angular/router';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import { PageServiceService } from 'src/app/pageService/page-service.service';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { MatAutocomplete } from '@angular/material/autocomplete';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-view-event',
  templateUrl: './view-event.component.html',
  styleUrls: ['./view-event.component.css']
})
export class ViewEventComponent implements OnInit {

  SpecialEvent: any;
  pager: any = {};
  pagedItems: any[];
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<any>;

  constructor(private eventService: SpecialEventServiceService,
     private token: TokenStorageServiceService, private router: Router, private pageService:PageServiceService ) { }

  ngOnInit() {

    this.eventService.getAllSpecialEvents()
    .subscribe( data => {
      this.SpecialEvent = data;
      this.setPage(1)
    });

  }


  setPage(page: number) {

    this.pager = this.pageService.getPager(this.SpecialEvent.length, page);
    this.pagedItems = this.SpecialEvent.slice(this.pager.startIndex, this.pager.endIndex + 1);
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

