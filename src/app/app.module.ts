import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { CoursesComponent } from './courses/courses.component';
import { PricesComponent } from './prices/prices.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    ScheduleComponent,
    CoursesComponent,
    PricesComponent,
    AboutComponent,
    ContactComponent,
  ],
  imports: [BrowserModule, NgbModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
