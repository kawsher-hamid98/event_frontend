import { Component, OnInit, Input } from '@angular/core';
import { AuthserviceService } from 'src/app/services/authservice.service';
import { User } from '../../user';
import { TokenStorageServiceService } from '../../services/token-storage-service.service';
//import {FilterPipePipe} from '../../filter-pipe.pipe';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  users: any;
  authorities:any;
  username: string;
  searchText: string

  constructor(private auth: AuthserviceService, private token: TokenStorageServiceService) { 
   
      this.authorities = this.token.getAuthorities()
      this.username =  this.token.getUsername()
  }
  
  ngOnInit() {
    this.auth.getCustomersList()
    .subscribe( data => {
      
      this.users = data;
    });
   
  }

  delete(user) {
    this.auth.deleteCustomer(user.id)
    .subscribe( data => {
      this.users.splice(this.users.indexOf(user), 1);
      window.location.reload();
    },error => {
      console.log(error);
    })
  }

}
