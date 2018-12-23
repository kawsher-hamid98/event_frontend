import { Component, OnInit } from '@angular/core';
import { SpecialEventServiceService } from 'src/app/servicesEvent/Special/special-event-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenStorageServiceService } from 'src/app/services/token-storage-service.service';
import { SpecialEvent } from '../../special-event'
import * as $ from 'jquery';

@Component({
  selector: 'app-special-event-details',
  templateUrl: './special-event-details.component.html',
  styleUrls: ['./special-event-details.component.css']
})
export class SpecialEventDetailsComponent implements OnInit {
  event:any;
  userName: string;
  message: string;
  error: '';
  msg: string = null;
  msg1: string = null
  count = 0;
  special: SpecialEvent;
  ok:any;
  

  constructor(private eventService: SpecialEventServiceService, 
              private activatedRoute: ActivatedRoute,
              private tokenStorageService: TokenStorageServiceService,
              private router: Router
              ) {
                  this.userName = this.tokenStorageService.getUsername()
                }
  
  ngOnInit() {
    this.getEvent();
    
    $("input[name='check[]']").on('click', function() {
      var val = $(this).val();
      var parent = $(this);
      $("input[value='"+val+"']").each(function() {
        $(this).not(parent).attr('disabled', parent.is(':checked'));
      });
    })
    
  }

  getEvent() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.eventService.getSpecialEventsById(id).subscribe(
      event => {this.event = event, console.log(event)}
    )
  }

  getTicket() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.eventService.getEventTicket(this.userName, id).subscribe()
    this.msg = 'Ticket has been sent to your mail'
    this.eventService.saveEventTicket(this.userName, id, this.ok).subscribe()
  }

  getDeviceID(device:any) {
    if(device.startTime > 11){
      console.log("failed")
    }else {
      console.log("ok")
    }
}

}
