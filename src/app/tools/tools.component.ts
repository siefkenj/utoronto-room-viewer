import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ToolsComponent implements OnInit {

	roomInfo: string = "";
	roomsLeft: any = "";
	inProgress: boolean = false;

  constructor(private http: HttpClient) { }

  ngOnInit() { }

	onRoomDataClick() {
		this.inProgress = true;
		let allRooms = {};
		let roomsLeft = 0;
		this.http.get(environment['roomsBaseUrl']).subscribe( data => {
			allRooms = data;
			this.roomInfo = JSON.stringify(allRooms, null, 4);
			getRoomInfo();
		});

		let getRoomInfo = () => {
			roomsLeft = allRooms['rooms'].length;
			let wrapup = () => {
				roomsLeft -= 1;
				this.roomsLeft = roomsLeft;
				if (roomsLeft <= 0) {
					this.inProgress = false;
				}

			}
			for (let room_l of allRooms['rooms']) {
				let {bldg, room} = room_l;
				this.http.get(environment['bookingBaseUrl'] + "?room=" + room + "&bldg=" + bldg).subscribe( data => {
					Object.assign(room_l, data);
					this.roomInfo = JSON.stringify(allRooms, null, 4);
					wrapup();
				},
				err => {
					wrapup();
				});
			}
		}
	}

}
