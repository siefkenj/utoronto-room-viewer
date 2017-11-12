import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';

import { BookingService } from './services/booking.service';
import { BuildingService } from './services/building.service';
import { RoomService } from './services/room.service';

const routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  { path: 'search', loadChildren: 'app/search/search.module#SearchModule' },
  { path: 'calendar', redirectTo: '/calendar' }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
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
