import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
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
  { path: 'calendar', redirectTo: '/calendar' }
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
    NgbModule.forRoot(),
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
