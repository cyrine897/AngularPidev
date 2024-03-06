import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Back/home/home.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactCompanyComponent } from './FrontCompany/contact-company/contact-company.component';
import { HeaderCompanyComponent } from './FrontCompany/header-company/header-company.component';
import { HeroCompanyComponent } from './FrontCompany/hero-company/hero-company.component';
import { ContactEventOrganiserComponent } from './FrontEventOrganiser/contact-event-organiser/contact-event-organiser.component';
import { HeroEventOrganiserComponent } from './FrontEventOrganiser/hero-event-organiser/hero-event-organiser.component';
import { HeaderEventOrganiserComponent } from './FrontEventOrganiser/header-event-organiser/header-event-organiser.component';
import { HeaderParticipantComponent } from './FrontParticipant/header-participant/header-participant.component';
import { ContactParticipantComponent } from './FrontParticipant/contact-participant/contact-participant.component';
import { TaskListComponent } from './Back/task-list/task-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { HeroParticipantComponent } from './FrontParticipant/hero-participant/hero-participant.component';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { TaskModalComponent } from './Back/task-modal/task-modal.component';
import { TaskComponent } from './Back/task/task.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OrganiserComponent } from './FrontParticipant/organiser/organiser.component';
import { OrganiserFormComponent } from './FrontParticipant/organiser-form/organiser-form.component';
import { Ng2SearchPipe, Ng2SearchPipeModule } from 'ng2-search-filter';
import { InterfOrganiserComponent } from './FrontParticipant/interf-organiser/interf-organiser.component';
import { SearchComponent } from './Back/search/search.component';
import { AssignmentListComponentComponent } from './Back/assignment-list-component/assignment-list-component.component';
@NgModule({
  declarations: [
    AppComponent,
    ContactCompanyComponent,
    HeaderCompanyComponent,
    HeroCompanyComponent,
    ContactEventOrganiserComponent,
    HeroEventOrganiserComponent,
    HeaderEventOrganiserComponent,
    HeaderParticipantComponent,
    HeroParticipantComponent,
    ContactParticipantComponent,
    TaskListComponent,
 TaskModalComponent,
 TaskComponent,
 OrganiserComponent,
 OrganiserFormComponent,
 SearchComponent,
 InterfOrganiserComponent,
 AssignmentListComponentComponent  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule, 
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatDialogModule,
    NgbModule, 
    MatSelectModule,
    Ng2SearchPipeModule,
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
