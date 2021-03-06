import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from 'src/app/services/authservice.service';
import { TokenStorageServiceService } from 'src/app/services/token-storage-service.service';
import * as $ from 'jquery';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  info: any;
  constructor(private token: TokenStorageServiceService) { }

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };

    
    $("input[name='check[]']").on('click', function() {
      var val = $(this).val();
      var parent = $(this);
      $("input[value='"+val+"']").each(function() {
        $(this).not(parent).attr('disabled', parent.is(':checked'));
      });
    })
    
  }
 
  logout() {
    this.token.logoutUser();
  
  }
}