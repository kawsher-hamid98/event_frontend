import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthserviceService } from './services/authservice.service';
import { TokenInterceptorServiceService } from './services/token-interceptor-service.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TokenStorageServiceService } from './services/token-storage-service.service';
import { AuthGuard } from './auth.guard';
import { ListComponent } from './components/list/list.component';
import { AdminRegisterComponent } from './components/admin-register/admin-register.component';
import { GeneralEventComponent } from './componentsEvent/general-event/general-event.component';
import { TicketPrintingComponent } from './componentsEvent/ticket-printing/ticket-printing.component';
import { GeneralEventDetailsComponent } from './componentsEvent/general-event-details/general-event-details.component';
import { CreateEventComponent } from './componentsEvent/create-event/create-event.component';
import { CreateSpecialEventComponent } from './componentsSpecialEvent/create-special-event/create-special-event.component';
import { SpecialEventComponent } from './componentsSpecialEvent/special-event/special-event.component';
import { SpecialEventDetailsComponent } from './componentsSpecialEvent/special-event-details/special-event-details.component';
import { FilterpipePipe } from './filterpipe.pipe';
import { GeneralEventListComponent } from './list/general-event-list/general-event-list.component';
import { SpecialEventListComponent } from './list/special-event-list/special-event-list.component';
import { ViewEventComponent } from './componentsSpecialEvent/view-event/view-event.component';
import { PageServiceService } from './pageService/page-service.service';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule
} from '@angular/material';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    ListComponent,
    AdminRegisterComponent,
    GeneralEventComponent,
    GeneralEventDetailsComponent,
    TicketPrintingComponent,
    CreateEventComponent,
    CreateSpecialEventComponent,
    SpecialEventComponent,
    SpecialEventDetailsComponent,
    FilterpipePipe,
    GeneralEventListComponent,
    SpecialEventListComponent,
    ViewEventComponent
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatAutocompleteModule,
    BrowserAnimationsModule
  ],

  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatAutocompleteModule,
    BrowserAnimationsModule
  ],

  providers: [AuthserviceService,PageServiceService,AuthGuard,TokenStorageServiceService,{
    provide: HTTP_INTERCEPTORS,
    useClass:TokenInterceptorServiceService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
