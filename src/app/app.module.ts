import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';

import { BookingService } from './services/booking.service';
import { BuildingService } from './services/building.service';
import { RoomService } from './services/room.service';
import { ToolsComponent } from './tools/tools.component';

const routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  { path: 'search', loadChildren: 'app/search/search.module#SearchModule' },
  { path: 'tools', component: ToolsComponent },
  { path: 'calendar', loadChildren: 'app/calendar/calendar.module#CalendarModule' }
];

@NgModule({
  declarations: [
    AppComponent,
    ToolsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
	  HttpClientModule,
    RouterModule.forRoot(routes, {useHash: environment['useHashRouting'] || false})
  ],
  providers: [
    BookingService,
    BuildingService,
    RoomService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
