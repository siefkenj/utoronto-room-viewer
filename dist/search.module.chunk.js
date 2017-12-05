webpackJsonp(["search.module"],{

/***/ "../../../../../src/app/calendar/calendar-item/calendar-item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/app/calendar/calendar.component.css"), "");

// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/calendar/calendar-item/calendar-item.component.html":
/***/ (function(module, exports) {

module.exports = "<li class=\"booking conflict\" *ngIf=\"booking\">\n  {{booking.desc}}\n</li>\n<li class=\"booking\" *ngIf=\"!booking\">\n  <button (click)=\"selectReservation()\">Reserve</button>\n</li>"

/***/ }),

/***/ "../../../../../src/app/calendar/calendar-item/calendar-item.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var booking_1 = __webpack_require__("../../../../../src/app/models/booking.ts");
var CalendarItemComponent = /** @class */ (function () {
    function CalendarItemComponent() {
        this.selected = new core_1.EventEmitter();
    }
    CalendarItemComponent.prototype.ngOnInit = function () {
    };
    /**
     * Notify selection via output event
     */
    CalendarItemComponent.prototype.selectReservation = function () {
        this.selected.emit(this.hour);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", typeof (_a = typeof booking_1.Booking !== "undefined" && booking_1.Booking) === "function" && _a || Object)
    ], CalendarItemComponent.prototype, "booking", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], CalendarItemComponent.prototype, "hour", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], CalendarItemComponent.prototype, "selected", void 0);
    CalendarItemComponent = __decorate([
        core_1.Component({
            selector: 'calendar-item',
            template: __webpack_require__("../../../../../src/app/calendar/calendar-item/calendar-item.component.html"),
            styles: [__webpack_require__("../../../../../src/app/calendar/calendar-item/calendar-item.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CalendarItemComponent);
    return CalendarItemComponent;
    var _a;
}());
exports.CalendarItemComponent = CalendarItemComponent;
//# sourceMappingURL=calendar-item.component.js.map

/***/ }),

/***/ "../../../../../src/app/calendar/calendar-row/calendar-row.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/app/calendar/calendar.component.css"), "");

// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/calendar/calendar-row/calendar-row.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"calendar-row\" *ngIf=\"room\">\n<div class=\"calendar-row\" *ngIf=\"room\">\n  <div class=\"room-detail name\">\n    {{room.id}}\n  </div>\n  <div class=\"room-detail capacity\">\n    {{room.capacity ? room.capacity : '-'}}\n  </div>\n  <div class=\"schedule hours\">\n    <ul class=\"calendar-list\" *ngIf=\"!isLoadingBookings; else loading\">\n      <div *ngFor=\"let hour of hours\">\n        <calendar-item\n          [booking]=\"getBookingForHour(date, hour | timestamp)\"\n          [hour]=\"hour\"\n          (selected)=\"reserveSelection($event)\"></calendar-item>\n      </div>\n    </ul>\n    <ng-template #loading>\n      <span class=\"loading\">Loading...</span>\n    </ng-template>\n  </div>\n<div>\n"

/***/ }),

/***/ "../../../../../src/app/calendar/calendar-row/calendar-row.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var booking_service_1 = __webpack_require__("../../../../../src/app/services/booking.service.ts");
var room_1 = __webpack_require__("../../../../../src/app/models/room.ts");
var reservation_1 = __webpack_require__("../../../../../src/app/models/reservation.ts");
var CalendarRowComponent = /** @class */ (function () {
    function CalendarRowComponent(bookingService) {
        this.bookingService = bookingService;
        this.reservationSelected = new core_1.EventEmitter();
        // An unordered list of Bookings for the input room and date
        this.bookings = [];
        // Determines if a 'Loading' message should be displayed
        // (i.e. bookings not yet queried)
        this.isLoadingBookings = false;
    }
    CalendarRowComponent.prototype.ngOnInit = function () {
        this.queryRelatedBookings(this.room, this.date);
    };
    /**
     * Find the Bookings for the current room and date
     */
    CalendarRowComponent.prototype.queryRelatedBookings = function (room, date) {
        var _this = this;
        this.isLoadingBookings = true;
        this.bookingService.getBookingsForRoom(room, new Date(date)).then(function (bks) {
            _this.bookings = bks;
            _this.isLoadingBookings = false;
        }).catch(function () {
            _this.isLoadingBookings = false;
        });
    };
    /**
     * Retrieve a booking for a specific hour
     */
    CalendarRowComponent.prototype.getBookingForHour = function (date, hour) {
        // Convert date/hour inputs into a timestamp
        var datePortion = this.dateToRequestTimestamp(new Date(date));
        var timePortion = hour;
        var timestamp = "" + datePortion + timePortion;
        // Search for Booking with a matching timestamp
        var matchingBooking = null;
        if (this.bookings && this.bookings.find) {
            matchingBooking = this.bookings.find(function (booking) {
                return booking.time === timestamp;
            });
        }
        return matchingBooking;
    };
    /**
     * Wrap a selected hour in a Reservation, and emit as an output event
     */
    CalendarRowComponent.prototype.reserveSelection = function (hour) {
        var reservation = new reservation_1.Reservation(this.room, this.date, hour);
        this.reservationSelected.emit(reservation);
    };
    /**
     * Convert Date object into a string, with format "YYYYMMDD"
     */
    CalendarRowComponent.prototype.dateToRequestTimestamp = function (date) {
        if (!date) {
            return null;
        }
        return "" + date.getUTCFullYear() + (date.getUTCMonth() + 1 < 10 ? "0" : "") + (date.getUTCMonth() + 1) + (date.getUTCDate() < 10 ? "0" : "") + date.getUTCDate();
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", typeof (_a = typeof room_1.Room !== "undefined" && room_1.Room) === "function" && _a || Object)
    ], CalendarRowComponent.prototype, "room", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], CalendarRowComponent.prototype, "date", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], CalendarRowComponent.prototype, "hours", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], CalendarRowComponent.prototype, "reservationSelected", void 0);
    CalendarRowComponent = __decorate([
        core_1.Component({
            selector: 'calendar-row',
            template: __webpack_require__("../../../../../src/app/calendar/calendar-row/calendar-row.component.html"),
            styles: [__webpack_require__("../../../../../src/app/calendar/calendar-row/calendar-row.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof booking_service_1.BookingService !== "undefined" && booking_service_1.BookingService) === "function" && _b || Object])
    ], CalendarRowComponent);
    return CalendarRowComponent;
    var _a, _b;
}());
exports.CalendarRowComponent = CalendarRowComponent;
//# sourceMappingURL=calendar-row.component.js.map

/***/ }),

/***/ "../../../../../src/app/calendar/calendar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".filter-notes {\n\tmargin-bottom: 20px;\n\tmargin-left: 15px;\n}\n\n.filter-notes .filter-header,\n.filter-notes .filter-option .title {\n  font-weight: bold;\n}\n\n.calendar-header {\n  font-weight: bold;\n  margin-bottom: 2px;\n}\n\n.name {\n  background-color: #ddd;\n  width: 100px;\n  min-width: 100px;\n  text-align: center;\n}\n\n.capacity {\n  background-color: #eee;\n  width: 80px;\n  min-width: 80px;\n  text-align: center;\n}\n\n.hour,\n.booking {\n  list-style-type: none;\n  /* float: left; */\n  width: 90px;\n  text-align: center;\n}\n\n.booking {\n\tpadding: 2px;\n\theight: 100%;\n\ttext-align: center;\n\tbackground-color: #89d47e;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n}\n\n.booking button {\n\tborder: none;\n\tcursor: pointer;\n\ttext-decoration: none;\n\tcolor: blue;\n\tmargin-left: auto;\n\tmargin-right: auto;\n\tbackground-color: inherit;\n\tmargin: 0px;\n\tpadding: 0px;\n\twidth: 100%;\n}\n\n.calendar-list {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-align: stretch;\n\t    -ms-flex-align: stretch;\n\t        align-items: stretch;\n\tmargin: 0px;\n\tpadding: 0px;\n}\n\n.calendar-list > * {\n\tmargin: 2px;\n}\n\n.conflict {\n  background-color: #e3bb81;\n}\n\n.clear {\n  clear: both;\n}\n\n.calendar-row, .calendar-header {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-orient: horizontal;\n\t-webkit-box-direction: normal;\n\t    -ms-flex-direction: row;\n\t        flex-direction: row;\n}\n.hours {\n\t-webkit-box-flex: 1;\n\t    -ms-flex-positive: 1;\n\t        flex-grow: 1;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/calendar/calendar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"filter-notes\">\n  <div class=\"filter-header\">Search results for:</div>\n  <div class=\"filter-option\">\n    <span class=\"title\">Buildings:</span>\n    <span class=\"value\">{{filterOptions.buildings}}</span>\n  </div>\n  <div class=\"filter-option\">\n    <span class=\"title\">Rooms:</span>\n    <span class=\"value\">{{filterOptions.rooms}}</span>\n  </div>\n  <div class=\"filter-option\">\n    <span class=\"title\">Capacity:</span>\n    <span class=\"value\">{{filterOptions.minCapacity}} - {{filterOptions.maxCapacity}}</span>\n  </div>\n  <div class=\"filter-option\">\n    <span class=\"title\">Date:</span>\n    <span class=\"value\">{{filterOptions.date}}</span>\n  </div>\n</div>\n\n<div class=\"calendar\">\n  <div class=\"calendar-header calendar-row\">\n    <div class=\"name\">\n      Room Name\n    </div>\n    <div class=\"capacity\">\n      Capacity\n    </div>\n    <div class=\"hours\">\n      <ul class=\"calendar-list\">\n        <li class=\"hour\" *ngFor=\"let hour of hours\">\n          {{hour | timestamp}}\n        </li>\n      </ul>\n    </div>\n  </div>\n  <div *ngFor=\"let room of rooms\">\n    <calendar-row\n      [room]=\"room\"\n      [date]=\"date\"\n      [hours]=\"hours\"\n      (reservationSelected)=\"selectReservation($event)\"></calendar-row>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/calendar/calendar.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
var room_service_1 = __webpack_require__("../../../../../src/app/services/room.service.ts");
var CalendarComponent = /** @class */ (function () {
    function CalendarComponent(route, roomService) {
        this.route = route;
        this.roomService = roomService;
        // The hour columns of the calendar
        this.hours = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    }
    CalendarComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Retrieve the query parameters
        this.route.queryParamMap.subscribe(function (pmap) {
            _this.setFilterOptions(pmap);
            _this.date = pmap.get('date');
            _this.queryRooms(pmap).then(function (rooms) {
                _this.rooms = rooms;
            });
        });
    };
    /**
     * Retrieve filtered list of rooms based on Query Parameters
     */
    CalendarComponent.prototype.queryRooms = function (params) {
        return this.roomService.getRooms(params);
    };
    /**
     * Send user to room reservation page
     */
    CalendarComponent.prototype.selectReservation = function (reservation) {
        window.open(environment_1.environment.reservationUrl);
    };
    /**
     * Extract the query parameters for displaying the list of Search Options
     */
    CalendarComponent.prototype.setFilterOptions = function (params) {
        this.filterOptions = {
            buildings: this.getValueOrDefault(params, 'buildings', 'Any'),
            rooms: this.getValueOrDefault(params, 'rooms', 'Any'),
            minCapacity: this.getValueOrDefault(params, 'minCapacity', 'Any'),
            maxCapacity: this.getValueOrDefault(params, 'maxCapacity', 'Any'),
            date: params.get('date')
        };
    };
    /**
     * Helper to read ParamMap values, and supply a default value if no input is supplied.
     * This is meant for displaying query parameter values, not for building queries.
     */
    CalendarComponent.prototype.getValueOrDefault = function (params, name, defaultValue) {
        // Check if value exists in ParamMap
        if (!params || !name || !params.has(name)) {
            return defaultValue;
        }
        // Blank or 'null' values should be treated as if there were no input provided
        var value = params.get(name);
        if (typeof value == "string") {
            if (value.length == 0 || value == 'null') {
                return defaultValue;
            }
        }
        // Value from the ParamMap is deemed valid here
        return value;
    };
    CalendarComponent = __decorate([
        core_1.Component({
            selector: 'calendar',
            template: __webpack_require__("../../../../../src/app/calendar/calendar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/calendar/calendar.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _a || Object, typeof (_b = typeof room_service_1.RoomService !== "undefined" && room_service_1.RoomService) === "function" && _b || Object])
    ], CalendarComponent);
    return CalendarComponent;
    var _a, _b;
}());
exports.CalendarComponent = CalendarComponent;
//# sourceMappingURL=calendar.component.js.map

/***/ }),

/***/ "../../../../../src/app/calendar/calendar.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var common_1 = __webpack_require__("../../../common/@angular/common.es5.js");
var calendar_component_1 = __webpack_require__("../../../../../src/app/calendar/calendar.component.ts");
var calendar_row_component_1 = __webpack_require__("../../../../../src/app/calendar/calendar-row/calendar-row.component.ts");
var calendar_item_component_1 = __webpack_require__("../../../../../src/app/calendar/calendar-item/calendar-item.component.ts");
var timestamp_pipe_1 = __webpack_require__("../../../../../src/app/pipes/timestamp.pipe.ts");
var CalendarModule = /** @class */ (function () {
    function CalendarModule() {
    }
    CalendarModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule
            ],
            declarations: [
                calendar_component_1.CalendarComponent,
                calendar_row_component_1.CalendarRowComponent,
                calendar_item_component_1.CalendarItemComponent,
                timestamp_pipe_1.TimestampPipe
            ],
            exports: [
                calendar_component_1.CalendarComponent
            ]
        })
    ], CalendarModule);
    return CalendarModule;
}());
exports.CalendarModule = CalendarModule;
//# sourceMappingURL=calendar.module.js.map

/***/ }),

/***/ "../../../../../src/app/models/booking.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Booking = /** @class */ (function () {
    function Booking() {
    }
    return Booking;
}());
exports.Booking = Booking;
//# sourceMappingURL=booking.js.map

/***/ }),

/***/ "../../../../../src/app/models/reservation.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Reservation = /** @class */ (function () {
    function Reservation(room, date, hour) {
        this.room = room;
        this.date = date;
        this.hour = hour;
    }
    return Reservation;
}());
exports.Reservation = Reservation;
//# sourceMappingURL=reservation.js.map

/***/ }),

/***/ "../../../../../src/app/models/room.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Room = /** @class */ (function () {
    function Room() {
    }
    return Room;
}());
exports.Room = Room;
//# sourceMappingURL=room.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/timestamp.pipe.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var TimestampPipe = /** @class */ (function () {
    function TimestampPipe() {
    }
    /**
     * Convert hour (number) into a string, with format 'hhmmss'.
     * Note: since only hour is an input, minutes and seconds will always be '0000'.
     */
    TimestampPipe.prototype.transform = function (value, args) {
        if (!value) {
            return null;
        }
        return "" + (+value % 24 < 10 ? "0" : "") + value % 24 + "0000";
    };
    TimestampPipe = __decorate([
        core_1.Pipe({
            name: 'timestamp'
        })
    ], TimestampPipe);
    return TimestampPipe;
}());
exports.TimestampPipe = TimestampPipe;
//# sourceMappingURL=timestamp.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/search/search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".search-form {\n\tpadding: 4px;\n}\n.search-form .form-item {\n  width: 100%;\n  padding: 4px 10px;\n}\n\n.search-form .form-item .input-range {\n  padding-top: 25px;\n  padding-bottom: 10px;\n}\n\nlabel {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-ms-flex-wrap: wrap;\n\t    flex-wrap: wrap;\n\t-webkit-box-orient: vertical;\n\t-webkit-box-direction: normal;\n\t    -ms-flex-direction: colum;\n\t        flex-direction: colum;\n}\n.label {\n\tmin-width: 10em;\n}\n.labeled {\n\t-webkit-box-flex: 1;\n\t    -ms-flex: 1 auto;\n\t        flex: 1 auto;\n}\n.searchbutton {\n\tfloat: right;\n\tmargin-right: 20px;\n\tpadding-left: 30px;\n\tpadding-right: 30px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"search-form\">\n  <div class=\"form-item\">\n    <label for=\"datepicker\">\n\t<div class=\"label\">\n\tDate\n\t</div>\n\t<div class=\"labeled\">\n    <ngb-datepicker\n      [(ngModel)]=\"date\"\n      [firstDayOfWeek]=\"7\"\n      (ngModelChange)=\"onDateChanged()\"></ngb-datepicker>\n \t</div>\n    </label>\n  </div>\n  <div class=\"form-item\">\n    <label>\n\t<div class=\"label\">\n      Filter by capacity?\n\t</div>\n      <div class=\"labeled\">\n        <input type=\"checkbox\"\n          [(ngModel)]=\"filterByCapacity\"\n          (ngModelChange)=\"onCapacityChecked($event)\"/>\n      </div>\n    </label>\n  </div>\n  <div class=\"form-item\" [hidden]=\"!filterByCapacity\">\n\t  Capacity:\n    <div class=\"input-range\">\n      <nouislider\n        [config]=\"sliderConfig\"\n        [connect]=\"true\"\n        [min]=\"sliderMin\"\n        [max]=\"sliderMax\"\n        [step]=\"1\"\n        [tooltips]=\"true\"\n        [(ngModel)]=\"capacityRange\"\n        [disabled]=\"!filterByCapacity\"\n        (ngModelChange)=\"onCapacityRangeChanged($event)\"></nouislider>\n    </div>\n  </div>\n  <div class=\"form-item\">\n    <label>\n\t    <div class=\"label\">\n      Building(s)\n      </div>\n      <div class=\"labeled\">\n        <ng-selectize\n          [config]=\"buildingsConfig\"\n          placeholder=\"Select one or more buildings\"\n          [options]=\"buildings\"\n          [(ngModel)]=\"selectedBuildings\"\n          (ngModelChange)=\"onBuildingsValueChanged($event)\"></ng-selectize>\n      </div>\n    </label>\n  </div>\n  <div class=\"form-item\">\n    <label>\n\t <div class=\"label\">\n      Room(s)\n\t </div>\n      <div class=\"labeled\">\n        <ng-selectize\n          [config]=\"roomsConfig\"\n          placeholder=\"Select rooms, or leave blank to choose all\"\n          [enabled]=\"selectedBuildings.length\"\n          [options]=\"filteredRooms\"\n          [(ngModel)]=\"selectedRooms\"\n          (ngModelChange)=\"onRoomsValueChanged($event)\"></ng-selectize>\n      </div>\n    </label>\n  </div>\n  <div>\n    <a routerLink=\"/search\" [queryParams]=\"queryParams\" class=\"navbutton searchbutton\">Search</a>\n  </div>\n</div>\n<div *ngIf=\"hasActiveQuery\">\n  <calendar></calendar>\n</div>"

/***/ }),

/***/ "../../../../../src/app/search/search.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var ng_bootstrap_1 = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var building_service_1 = __webpack_require__("../../../../../src/app/services/building.service.ts");
var room_service_1 = __webpack_require__("../../../../../src/app/services/room.service.ts");
var DateParserFormatter = /** @class */ (function (_super) {
    __extends(DateParserFormatter, _super);
    function DateParserFormatter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DateParserFormatter.prototype.parse = function (value) {
        return {
            year: +value.substring(0, 4),
            month: +value.substring(5, 7),
            day: +value.substring(8, 10)
        };
    };
    DateParserFormatter.prototype.format = function (date) {
        return date.year + "-" + date.month + "-" + date.day;
    };
    return DateParserFormatter;
}(ng_bootstrap_1.NgbDateParserFormatter));
exports.DateParserFormatter = DateParserFormatter;
var SearchComponent = /** @class */ (function () {
    // Class functions
    function SearchComponent(buildingService, roomService, route, router, dateFormatter) {
        this.buildingService = buildingService;
        this.roomService = roomService;
        this.route = route;
        this.router = router;
        this.dateFormatter = dateFormatter;
        // Capacity config options
        this.filterByCapacity = false;
        this.sliderMin = 0;
        this.sliderMax = 700;
        this.capacityRange = [50, 150];
        this.sliderConfig = {
            pips: {
                mode: 'count',
                values: 8,
                density: 8
            }
        };
        // Building config options
        this.buildings = [];
        this.buildingsConfig = {
            labelField: 'desc',
            valueField: 'name',
            searchField: ['name', 'desc'],
            maxItems: null,
            plugins: ['remove_button'],
        };
        this.selectedBuildings = [];
        // Room config options
        this.allRooms = [];
        this.filteredRooms = [];
        this.roomsConfig = {
            labelField: 'id',
            valueField: 'id',
            searchField: ['id'],
            maxItems: null,
            plugins: ['remove_button']
        };
        this.selectedRooms = [];
        // Calendar display trigger
        this.hasActiveQuery = false;
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.date = this.dateFormatter.parse(this.convertDateToQueryParamString(new Date()));
        this.buildingService.getBuildings().then(function (bs) { return _this.buildings = bs; });
        this.roomService.getRooms().then(function (rs) { return _this.allRooms = rs; });
        this.updateQueryParams();
        // Retrieve the query parameters
        this.route.queryParamMap.subscribe(function (pmap) {
            // Enable calendar if we have enough query parameters in the URL
            if (pmap.has('date') && pmap.has('buildings') && pmap.get('buildings')) {
                _this.hasActiveQuery = true;
            }
            else {
                _this.hasActiveQuery = false;
            }
            // Update inputs based on query parameters
            if (pmap.has('date')) {
                _this.date = _this.dateFormatter.parse(pmap.get('date'));
            }
            if (pmap.has('buildings')) {
                _this.selectedBuildings = (pmap.get('buildings') || '').split(',');
            }
            if (pmap.has('rooms')) {
                _this.selectedRooms = (pmap.get('rooms') || '').split(',');
            }
            if (pmap.has('minCapacity') || pmap.has('maxCapacity')) {
                var min = pmap.get('minCapacity');
                if (min) {
                    _this.capacityRange[0] = +min;
                }
                var max = pmap.get('maxCapacity');
                if (max) {
                    _this.capacityRange[1] = +max;
                }
                _this.filterByCapacity = true;
            }
        });
    };
    // Search form value change events
    SearchComponent.prototype.onDateChanged = function () {
        this.updateQuery();
    };
    SearchComponent.prototype.onCapacityChecked = function () {
        this.updateQuery();
    };
    SearchComponent.prototype.onCapacityRangeChanged = function (newRange) {
        this.updateQuery();
    };
    SearchComponent.prototype.onBuildingsValueChanged = function (value) {
        // Filter Rooms list based on selected building(s)
        if (value && value.length) {
            this.filteredRooms = this.allRooms.filter(function (room) {
                return value.indexOf(room.bldg) >= 0;
            });
        }
        else {
            this.filteredRooms = [];
        }
        this.updateQuery();
    };
    SearchComponent.prototype.onRoomsValueChanged = function (value) {
        this.updateQuery();
    };
    // Private functions
    /**
     * Update query parameters locally,
     * and then force a search to occur.
     */
    SearchComponent.prototype.updateQuery = function () {
        this.updateQueryParams();
        this.refreshSearch();
    };
    /**
     * Push query parameters to router URL.
     * This should trigger this.route.queryParamMap to update,
     * which will cause a search to trigger immediately.
     */
    SearchComponent.prototype.refreshSearch = function () {
        this.router.navigate(['./'], {
            relativeTo: this.route,
            queryParams: this.queryParams
        });
    };
    /**
     * Trigger the QueryParams to update.
     * If any search value changes, this should be called to keep
     * the Search link up to date.
     */
    SearchComponent.prototype.updateQueryParams = function () {
        var queryParams = new QueryParams();
        queryParams.date = this.convertDateToQueryParamString(this.date);
        queryParams.buildings = this.selectedBuildings.join(',');
        queryParams.rooms = this.selectedRooms.join(',');
        if (this.filterByCapacity) {
            queryParams.minCapacity = this.capacityRange[0];
            queryParams.maxCapacity = this.capacityRange[1];
        }
        // Set variable to new object, to force link to recalculate URL
        this.queryParams = queryParams;
    };
    /**
     * Helper function to convert a date object into a URL accessible string
     */
    SearchComponent.prototype.convertDateToQueryParamString = function (date) {
        if (!date) {
            return '';
        }
        if (date.format) {
            return "" + date.format('YYYY-MM-DD');
        }
        else if (date.getUTCFullYear && date.getUTCMonth && date.getDate) {
            return date.getUTCFullYear() + "-" + (date.getUTCMonth() + 1) + "-" + date.getDate();
        }
        else if (date.year && date.month && date.day) {
            return date.year + "-" + date.month + "-" + date.day;
        }
        return date.toString();
    };
    SearchComponent = __decorate([
        core_1.Component({
            selector: 'search',
            template: __webpack_require__("../../../../../src/app/search/search.component.html"),
            styles: [__webpack_require__("../../../../../src/app/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof building_service_1.BuildingService !== "undefined" && building_service_1.BuildingService) === "function" && _a || Object, typeof (_b = typeof room_service_1.RoomService !== "undefined" && room_service_1.RoomService) === "function" && _b || Object, typeof (_c = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _c || Object, typeof (_d = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _d || Object, DateParserFormatter])
    ], SearchComponent);
    return SearchComponent;
    var _a, _b, _c, _d;
}());
exports.SearchComponent = SearchComponent;
/**
 * Object to consolidate search terms, for use with a Search link
 */
var QueryParams = /** @class */ (function () {
    function QueryParams() {
    }
    return QueryParams;
}());
exports.QueryParams = QueryParams;
//# sourceMappingURL=search.component.js.map

/***/ }),

/***/ "../../../../../src/app/search/search.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var common_1 = __webpack_require__("../../../common/@angular/common.es5.js");
var forms_1 = __webpack_require__("../../../forms/@angular/forms.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var ng_bootstrap_1 = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var calendar_module_1 = __webpack_require__("../../../../../src/app/calendar/calendar.module.ts");
var search_component_1 = __webpack_require__("../../../../../src/app/search/search.component.ts");
var ng2_nouislider_1 = __webpack_require__("../../../../ng2-nouislider/src/nouislider.js");
var ng_selectize_1 = __webpack_require__("../../../../ng-selectize/index.js");
var ng2_datepicker_1 = __webpack_require__("../../../../ng2-datepicker/bundles/ng2-datepicker.umd.js");
var routes = [
    { path: '', component: search_component_1.SearchComponent }
];
var SearchModule = /** @class */ (function () {
    function SearchModule() {
    }
    SearchModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                ng2_datepicker_1.NgDatepickerModule,
                ng2_nouislider_1.NouisliderModule,
                ng_selectize_1.NgSelectizeModule,
                calendar_module_1.CalendarModule,
                ng_bootstrap_1.NgbModule,
                router_1.RouterModule.forChild(routes)
            ],
            declarations: [
                search_component_1.SearchComponent
            ],
            providers: [
                search_component_1.DateParserFormatter
            ],
            exports: []
        })
    ], SearchModule);
    return SearchModule;
}());
exports.SearchModule = SearchModule;
//# sourceMappingURL=search.module.js.map

/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/app/calendar/calendar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".filter-notes {\n\tmargin-bottom: 20px;\n\tmargin-left: 15px;\n}\n\n.filter-notes .filter-header,\n.filter-notes .filter-option .title {\n  font-weight: bold;\n}\n\n.calendar-header {\n  font-weight: bold;\n  margin-bottom: 2px;\n}\n\n.name {\n  background-color: #ddd;\n  width: 100px;\n  min-width: 100px;\n  text-align: center;\n}\n\n.capacity {\n  background-color: #eee;\n  width: 80px;\n  min-width: 80px;\n  text-align: center;\n}\n\n.hour,\n.booking {\n  list-style-type: none;\n  /* float: left; */\n  width: 90px;\n  text-align: center;\n}\n\n.booking {\n\tpadding: 2px;\n\theight: 100%;\n\ttext-align: center;\n\tbackground-color: #89d47e;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n}\n\n.booking button {\n\tborder: none;\n\tcursor: pointer;\n\ttext-decoration: none;\n\tcolor: blue;\n\tmargin-left: auto;\n\tmargin-right: auto;\n\tbackground-color: inherit;\n\tmargin: 0px;\n\tpadding: 0px;\n\twidth: 100%;\n}\n\n.calendar-list {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-align: stretch;\n\t    -ms-flex-align: stretch;\n\t        align-items: stretch;\n\tmargin: 0px;\n\tpadding: 0px;\n}\n\n.calendar-list > * {\n\tmargin: 2px;\n}\n\n.conflict {\n  background-color: #e3bb81;\n}\n\n.clear {\n  clear: both;\n}\n\n.calendar-row, .calendar-header {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-orient: horizontal;\n\t-webkit-box-direction: normal;\n\t    -ms-flex-direction: row;\n\t        flex-direction: row;\n}\n.hours {\n\t-webkit-box-flex: 1;\n\t    -ms-flex-positive: 1;\n\t        flex-grow: 1;\n}\n", ""]);

// exports


/***/ }),

/***/ "../../../../lodash.clonedeep/index.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, module) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/**
 * Adds the key-value `pair` to `map`.
 *
 * @private
 * @param {Object} map The map to modify.
 * @param {Array} pair The key-value pair to add.
 * @returns {Object} Returns `map`.
 */
function addMapEntry(map, pair) {
  // Don't return `map.set` because it's not chainable in IE 11.
  map.set(pair[0], pair[1]);
  return map;
}

/**
 * Adds `value` to `set`.
 *
 * @private
 * @param {Object} set The set to modify.
 * @param {*} value The value to add.
 * @returns {Object} Returns `set`.
 */
function addSetEntry(set, value) {
  // Don't return `set.add` because it's not chainable in IE 11.
  set.add(value);
  return set;
}

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array ? array.length : 0;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    getPrototype = overArg(Object.getPrototypeOf, Object),
    objectCreate = Object.create,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols,
    nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeKeys = overArg(Object.keys, Object);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap'),
    nativeCreate = getNative(Object, 'create');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  this.__data__ = new ListCache(entries);
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  return this.__data__['delete'](key);
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var cache = this.__data__;
  if (cache instanceof ListCache) {
    var pairs = cache.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      return this;
    }
    cache = this.__data__ = new MapCache(pairs);
  }
  cache.set(key, value);
  return this;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  // Safari 9 makes `arguments.length` enumerable in strict mode.
  var result = (isArray(value) || isArguments(value))
    ? baseTimes(value.length, String)
    : [];

  var length = result.length,
      skipIndexes = !!length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    object[key] = value;
  }
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @param {boolean} [isFull] Specify a clone including symbols.
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, isDeep, isFull, customizer, key, object, stack) {
  var result;
  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      if (isHostObject(value)) {
        return object ? value : {};
      }
      result = initCloneObject(isFunc ? {} : value);
      if (!isDeep) {
        return copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, baseClone, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (!isArr) {
    var props = isFull ? getAllKeys(value) : keys(value);
  }
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, isDeep, isFull, customizer, key, value, stack));
  });
  return result;
}

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} prototype The object to inherit from.
 * @returns {Object} Returns the new object.
 */
function baseCreate(proto) {
  return isObject(proto) ? objectCreate(proto) : {};
}

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

/**
 * The base implementation of `getTag`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  return objectToString.call(value);
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var result = new buffer.constructor(buffer.length);
  buffer.copy(result);
  return result;
}

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

/**
 * Creates a clone of `map`.
 *
 * @private
 * @param {Object} map The map to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned map.
 */
function cloneMap(map, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(mapToArray(map), true) : mapToArray(map);
  return arrayReduce(array, addMapEntry, new map.constructor);
}

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

/**
 * Creates a clone of `set`.
 *
 * @private
 * @param {Object} set The set to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned set.
 */
function cloneSet(set, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(setToArray(set), true) : setToArray(set);
  return arrayReduce(array, addSetEntry, new set.constructor);
}

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    assignValue(object, key, newValue === undefined ? source[key] : newValue);
  }
  return object;
}

/**
 * Copies own symbol properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Creates an array of the own enumerable symbol properties of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11,
// for data views in Edge < 14, and promises in Node.js.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = objectToString.call(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : undefined;

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, cloneFunc, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return cloneMap(object, isDeep, cloneFunc);

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return cloneSet(object, isDeep, cloneFunc);

    case symbolTag:
      return cloneSymbol(object);
  }
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */
function cloneDeep(value) {
  return baseClone(value, true, true);
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = cloneDeep;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("../../../../webpack/buildin/global.js"), __webpack_require__("../../../../webpack/buildin/module.js")(module)))

/***/ }),

/***/ "../../../../ng-selectize/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ng_selectize_module__ = __webpack_require__("../../../../ng-selectize/ng-selectize.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_selectize_component__ = __webpack_require__("../../../../ng-selectize/ng-selectize.component.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "NgSelectizeModule", function() { return __WEBPACK_IMPORTED_MODULE_0__ng_selectize_module__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "NgSelectizeComponent", function() { return __WEBPACK_IMPORTED_MODULE_1__ng_selectize_component__["a"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../ng-selectize/ng-selectize.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SELECTIZE_VALUE_ACCESSOR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgSelectizeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_clonedeep__ = __webpack_require__("../../../../lodash.clonedeep/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_clonedeep___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_clonedeep__);



var SELECTIZE_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALUE_ACCESSOR"],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return NgSelectizeComponent; }),
    multi: true
};
var NgSelectizeComponent = (function () {
    function NgSelectizeComponent(_differs) {
        this._differs = _differs;
        this.enabled = true;
        this.onBlur = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"](false);
    }
    NgSelectizeComponent.prototype.ngOnInit = function () {
        this.reset();
    };
    NgSelectizeComponent.prototype.reset = function () {
        this.selectize = $(this.selectizeInput.nativeElement).selectize(this.config)[0].selectize;
        this.selectize.on('change', this.onSelectizeValueChange.bind(this));
        this.selectize.on('blur', this.onBlurEvent.bind(this));
        this.updatePlaceholder();
        this.onEnabledStatusChange();
    };
    /**
     * Change detection for primitive types.
     */
    NgSelectizeComponent.prototype.ngOnChanges = function (changes) {
        if (this.selectize) {
            if (changes.hasOwnProperty('placeholder') || changes.hasOwnProperty('hasOptionsPlaceholder')
                || changes.hasOwnProperty('noOptionsPlaceholder')) {
                this.updatePlaceholder();
            }
            if (changes.hasOwnProperty('enabled')) {
                this.onEnabledStatusChange();
            }
        }
    };
    /**
     * Implementing deep check for option comparison
     *
     * FIXME -> Implement deep check to only compare against label and value fields.
     */
    NgSelectizeComponent.prototype.ngDoCheck = function () {
        if (this._options_differ) {
            var changes = this._options_differ.diff(this._options);
            if (changes) {
                this._applyOptionsChanges(changes);
            }
        }
        if (this._optgroups_differ) {
            var changes = this._optgroups_differ.diff(this._optgroups);
            if (changes) {
                this._applyOptionGroupChanges(changes);
            }
        }
    };
    NgSelectizeComponent.prototype._applyOptionsChanges = function (changes) {
        var _this = this;
        changes.forEachAddedItem(function (record) {
            _this.onSelectizeOptionAdd(record.item);
        });
        changes.forEachRemovedItem(function (record) {
            _this.onSelectizeOptionRemove(record.item);
        });
        this.updatePlaceholder();
        this.evalHasError();
    };
    NgSelectizeComponent.prototype._applyOptionGroupChanges = function (changes) {
        var _this = this;
        changes.forEachAddedItem(function (record) {
            _this.onSelectizeOptGroupAdd(record.item);
        });
        changes.forEachRemovedItem(function (record) {
            _this.onSelectizeOptGroupRemove(record.item);
        });
        this.updatePlaceholder();
        this.evalHasError();
    };
    NgSelectizeComponent.prototype.onBlurEvent = function () {
        if (this.formControl) {
            this.formControl.markAsTouched();
        }
        this.onBlur.emit();
        this.evalHasError();
    };
    NgSelectizeComponent.prototype.onSelectizeOptGroupAdd = function (optgroup) {
        this.selectize.addOptionGroup(optgroup[this.getOptgroupField()], optgroup);
    };
    NgSelectizeComponent.prototype.onSelectizeOptGroupRemove = function (optgroup) {
        this.selectize.removeOptionGroup(optgroup[this.getOptgroupField()]);
    };
    /**
     * Refresh selected values when options change.
     */
    NgSelectizeComponent.prototype.onSelectizeOptionAdd = function (option) {
        this.selectize.addOption(__WEBPACK_IMPORTED_MODULE_2_lodash_clonedeep___default()(option));
        var valueField = this.getValueField();
        if (this.value) {
            var items = typeof this.value === 'string' ? [this.value] : this.value;
            if (items.find(function (value) { return value === option[valueField]; })) {
                this.selectize.addItem(option[valueField], true);
            }
        }
    };
    NgSelectizeComponent.prototype.onSelectizeOptionRemove = function (option) {
        this.selectize.removeOption(option[this.getValueField()]);
    };
    NgSelectizeComponent.prototype.evalHasError = function () {
        var parent = $(this.selectize.$control).parent();
        if (this.formControl) {
            if (this.formControl.touched && this.formControl.invalid) {
                parent.addClass(this.errorClass || 'has-error');
            }
            else if (parent.hasClass('has-error')) {
                parent.removeClass(this.errorClass || 'has-error');
            }
        }
    };
    /**
     * Update the current placeholder based on the given input parameter.
     */
    NgSelectizeComponent.prototype.updatePlaceholder = function () {
        if (this.selectize.items.length === 0 && this.selectize.settings.placeholder !== this.getPlaceholder()) {
            this.selectize.settings.placeholder = this.getPlaceholder();
            this.selectize.updatePlaceholder();
            this.selectize.showInput(); // Without this, when options are cleared placeholder only appears after focus.
        }
    };
    /**
     * Called when a change is detected in the 'enabled' input field.
     * Sets the selectize state based on the new value.
     */
    NgSelectizeComponent.prototype.onEnabledStatusChange = function () {
        this.enabled ? this.selectize.enable() : this.selectize.disable();
    };
    /**
     * Dispatches change event when a value change is detected.
     * @param $event
     */
    NgSelectizeComponent.prototype.onSelectizeValueChange = function ($event) {
        // In some cases this gets called before registerOnChange.
        if (this.onChangeCallback) {
            this.onChangeCallback(this.selectize.getValue());
        }
    };
    /**
     * Returns the applicable placeholder.
     */
    NgSelectizeComponent.prototype.getPlaceholder = function () {
        if (this.hasOptionsPlaceholder) {
            if (this.options && this.options.length > 0) {
                return this.hasOptionsPlaceholder;
            }
        }
        if (this.noOptionsPlaceholder) {
            if (!this.options || this.options.length === 0) {
                return this.noOptionsPlaceholder;
            }
        }
        return this.placeholder;
    };
    /**
     * Implementation from ControlValueAccessor
     *
     * Empty check on 'obj' removed due to restriction on resetting the field.
     * From testing, async should still function appropriately.
     *
     * FIXME This might not be necessary anymore..
     *
     * @param obj
     */
    NgSelectizeComponent.prototype.writeValue = function (obj) {
        if (obj !== this.value) {
            this.value = obj;
        }
        this.selectize.setValue(this.value);
    };
    /**
     * Implementation from ControlValueAccessor, callback for (ngModelChange)
     * @param fn
     */
    NgSelectizeComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    /**
     * Implementation from ControlValueAccessor
     * @param fn
     */
    NgSelectizeComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    NgSelectizeComponent.prototype.getValueField = function () {
        return this.config['valueField'] ? this.config['valueField'] : 'value';
    };
    NgSelectizeComponent.prototype.getOptgroupField = function () {
        return this.config['optgroupField'] ? this.config['optgroupField'] : 'optgroup';
    };
    Object.defineProperty(NgSelectizeComponent.prototype, "options", {
        get: function () {
            return this._options;
        },
        set: function (value) {
            this._options = value;
            if (!this._options_differ && value) {
                this._options_differ = this._differs.find(value).create();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgSelectizeComponent.prototype, "optgroups", {
        get: function () {
            return this._optgroups;
        },
        set: function (value) {
            this._optgroups = value;
            if (!this._optgroups_differ && value) {
                this._optgroups_differ = this._differs.find(value).create();
            }
        },
        enumerable: true,
        configurable: true
    });
    return NgSelectizeComponent;
}());

NgSelectizeComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'ng-selectize',
                template: "<select #selectizeInput></select>",
                providers: [SELECTIZE_VALUE_ACCESSOR]
            },] },
];
/** @nocollapse */
NgSelectizeComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["IterableDiffers"], },
]; };
NgSelectizeComponent.propDecorators = {
    'config': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'placeholder': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'hasOptionsPlaceholder': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'noOptionsPlaceholder': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'enabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'value': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'formControl': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'errorClass': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'onBlur': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'selectizeInput': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"], args: ['selectizeInput',] },],
    'options': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'optgroups': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
};
//# sourceMappingURL=ng-selectize.component.js.map

/***/ }),

/***/ "../../../../ng-selectize/ng-selectize.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgSelectizeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_selectize_component__ = __webpack_require__("../../../../ng-selectize/ng-selectize.component.js");
/**
 * Created by Nicholas Azar on 11/20/2016.
 */


var NgSelectizeModule = (function () {
    function NgSelectizeModule() {
    }
    return NgSelectizeModule;
}());

NgSelectizeModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                declarations: [__WEBPACK_IMPORTED_MODULE_1__ng_selectize_component__["a" /* NgSelectizeComponent */]],
                exports: [__WEBPACK_IMPORTED_MODULE_1__ng_selectize_component__["a" /* NgSelectizeComponent */]]
            },] },
];
/** @nocollapse */
NgSelectizeModule.ctorParameters = function () { return []; };
//# sourceMappingURL=ng-selectize.module.js.map

/***/ }),

/***/ "../../../../ng2-datepicker/bundles/ng2-datepicker.umd.js":
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t(__webpack_require__("../../../core/@angular/core.es5.js"),__webpack_require__("../../../forms/@angular/forms.es5.js"),__webpack_require__("../../../common/@angular/common.es5.js"),__webpack_require__("../../../../rxjs/_esm5/Observable.js"),__webpack_require__("../../../../rxjs/_esm5/add/observable/fromEvent.js"),__webpack_require__("../../../../rxjs/_esm5/add/observable/merge.js"),__webpack_require__("../../../../rxjs/_esm5/add/operator/mergeMap.js"),__webpack_require__("../../../../rxjs/_esm5/add/operator/takeUntil.js"),__webpack_require__("../../../../rxjs/_esm5/add/operator/map.js")):"function"==typeof define&&define.amd?define("ng2-datepicker",["@angular/core","@angular/forms","@angular/common","rxjs/Observable","rxjs/add/observable/fromEvent","rxjs/add/observable/merge","rxjs/add/operator/mergeMap","rxjs/add/operator/takeUntil","rxjs/add/operator/map"],t):"object"==typeof exports?exports["ng2-datepicker"]=t(require("@angular/core"),require("@angular/forms"),require("@angular/common"),require("rxjs/Observable"),require("rxjs/add/observable/fromEvent"),require("rxjs/add/observable/merge"),require("rxjs/add/operator/mergeMap"),require("rxjs/add/operator/takeUntil"),require("rxjs/add/operator/map")):e["ng2-datepicker"]=t(e["@angular/core"],e["@angular/forms"],e["@angular/common"],e["rxjs/Observable"],e["rxjs/add/observable/fromEvent"],e["rxjs/add/observable/merge"],e["rxjs/add/operator/mergeMap"],e["rxjs/add/operator/takeUntil"],e["rxjs/add/operator/map"])}(this,function(e,t,n,r,a,i,o,s,u){return function(e){function t(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=61)}([function(e,t,n){function r(e,t){if(l(e))return new Date(e.getTime());if("string"!=typeof e)return new Date(e);var n=t||{},r=n.additionalDigits;r=null==r?p:Number(r);var c=a(e),d=i(c.date,r),g=d.year,h=d.restDateString,m=o(h,g);if(m){var v,y=m.getTime(),x=0;return c.time&&(x=s(c.time)),c.timezone?v=u(c.timezone):(v=new Date(y+x).getTimezoneOffset(),v=new Date(y+x+v*f).getTimezoneOffset()),new Date(y+x+v*f)}return new Date(e)}function a(e){var t,n={},r=e.split(g);if(h.test(r[0])?(n.date=null,t=r[0]):(n.date=r[0],t=r[1]),t){var a=Y.exec(t);a?(n.time=t.replace(a[1],""),n.timezone=a[1]):n.time=t}return n}function i(e,t){var n,r=v[t],a=x[t];if(n=y.exec(e)||a.exec(e)){var i=n[1];return{year:parseInt(i,10),restDateString:e.slice(i.length)}}if(n=m.exec(e)||r.exec(e)){var o=n[1];return{year:100*parseInt(o,10),restDateString:e.slice(o.length)}}return{year:null}}function o(e,t){if(null===t)return null;var n,r,a,i;if(0===e.length)return r=new Date(0),r.setUTCFullYear(t),r;if(n=b.exec(e))return r=new Date(0),a=parseInt(n[1],10)-1,r.setUTCFullYear(t,a),r;if(n=M.exec(e)){r=new Date(0);var o=parseInt(n[1],10);return r.setUTCFullYear(t,0,o),r}if(n=D.exec(e)){r=new Date(0),a=parseInt(n[1],10)-1;var s=parseInt(n[2],10);return r.setUTCFullYear(t,a,s),r}if(n=S.exec(e))return i=parseInt(n[1],10)-1,c(t,i);if(n=T.exec(e)){i=parseInt(n[1],10)-1;return c(t,i,parseInt(n[2],10)-1)}return null}function s(e){var t,n,r;if(t=w.exec(e))return(n=parseFloat(t[1].replace(",",".")))%24*d;if(t=O.exec(e))return n=parseInt(t[1],10),r=parseFloat(t[2].replace(",",".")),n%24*d+r*f;if(t=k.exec(e)){n=parseInt(t[1],10),r=parseInt(t[2],10);var a=parseFloat(t[3].replace(",","."));return n%24*d+r*f+1e3*a}return null}function u(e){var t,n;return(t=E.exec(e))?0:(t=I.exec(e))?(n=60*parseInt(t[2],10),"+"===t[1]?-n:n):(t=F.exec(e),t?(n=60*parseInt(t[2],10)+parseInt(t[3],10),"+"===t[1]?-n:n):0)}function c(e,t,n){t=t||0,n=n||0;var r=new Date(0);r.setUTCFullYear(e,0,4);var a=r.getUTCDay()||7,i=7*t+n+1-a;return r.setUTCDate(r.getUTCDate()+i),r}var l=n(13),d=36e5,f=6e4,p=2,g=/[T ]/,h=/:/,m=/^(\d{2})$/,v=[/^([+-]\d{2})$/,/^([+-]\d{3})$/,/^([+-]\d{4})$/],y=/^(\d{4})/,x=[/^([+-]\d{4})/,/^([+-]\d{5})/,/^([+-]\d{6})/],b=/^-(\d{2})$/,M=/^-?(\d{3})$/,D=/^-?(\d{2})-?(\d{2})$/,S=/^-?W(\d{2})$/,T=/^-?W(\d{2})-?(\d{1})$/,w=/^(\d{2}([.,]\d*)?)$/,O=/^(\d{2}):?(\d{2}([.,]\d*)?)$/,k=/^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,Y=/([Z+-].*)$/,E=/^(Z)$/,I=/^([+-])(\d{2})$/,F=/^([+-])(\d{2}):?(\d{2})$/;e.exports=r},function(e,t,n){function r(e){var t=a(e),n=t.getFullYear(),r=new Date(0);r.setFullYear(n+1,0,4),r.setHours(0,0,0,0);var o=i(r),s=new Date(0);s.setFullYear(n,0,4),s.setHours(0,0,0,0);var u=i(s);return t.getTime()>=o.getTime()?n+1:t.getTime()>=u.getTime()?n:n-1}var a=n(0),i=n(2);e.exports=r},function(e,t,n){function r(e){return a(e,{weekStartsOn:1})}var a=n(9);e.exports=r},function(e,t,n){function r(e){var t=a(e);return t.setHours(0,0,0,0),t}var a=n(0);e.exports=r},function(e,t,n){function r(e,t){var n=a(e),r=Number(t);return n.setDate(n.getDate()+r),n}var a=n(0);e.exports=r},function(e,t,n){function r(e,t){var n=a(e).getTime(),r=Number(t);return new Date(n+r)}var a=n(0);e.exports=r},function(e,t,n){function r(e){var t=a(e),n=new Date(0);return n.setFullYear(t,0,4),n.setHours(0,0,0,0),i(n)}var a=n(1),i=n(2);e.exports=r},function(e,t,n){function r(e,t){var n=a(e),r=n.getTime(),i=a(t),o=i.getTime();return r<o?-1:r>o?1:0}var a=n(0);e.exports=r},function(t,n){t.exports=e},function(e,t,n){function r(e,t){var n=t?Number(t.weekStartsOn)||0:0,r=a(e),i=r.getDay(),o=(i<n?7:0)+i-n;return r.setDate(r.getDate()-o),r.setHours(0,0,0,0),r}var a=n(0);e.exports=r},function(e,t,n){function r(e,t){var n=a(e),r=a(t),s=n.getTime()-n.getTimezoneOffset()*i,u=r.getTime()-r.getTimezoneOffset()*i;return Math.round((s-u)/o)}var a=n(3),i=6e4,o=864e5;e.exports=r},function(e,t,n){function r(e,t){var n=a(e),r=Number(t),o=n.getMonth()+r,s=new Date(0);s.setFullYear(n.getFullYear(),o,1),s.setHours(0,0,0,0);var u=i(s);return n.setMonth(o,Math.min(u,n.getDate())),n}var a=n(0),i=n(14);e.exports=r},function(e,t,n){function r(e,t){var n=a(e),r=a(t);return n.getTime()-r.getTime()}var a=n(0);e.exports=r},function(e,t){function n(e){return e instanceof Date}e.exports=n},function(e,t,n){function r(e){var t=a(e),n=t.getFullYear(),r=t.getMonth(),i=new Date(0);return i.setFullYear(n,r+1,0),i.setHours(0,0,0,0),i.getDate()}var a=n(0);e.exports=r},function(e,t,n){function r(e,t){var n=Number(t);return a(e,7*n)}var a=n(4);e.exports=r},function(e,t,n){function r(e,t){var n=a(e),r=n.getTime(),i=a(t),o=i.getTime();return r>o?-1:r<o?1:0}var a=n(0);e.exports=r},function(e,t,n){function r(e,t){var n=a(e),r=a(t),s=o(n,r),u=Math.abs(i(n,r));return n.setMonth(n.getMonth()-s*u),s*(u-(o(n,r)===-s))}var a=n(0),i=n(33),o=n(7);e.exports=r},function(e,t,n){function r(e,t){var n=a(e,t)/1e3;return n>0?Math.floor(n):Math.ceil(n)}var a=n(12);e.exports=r},function(e,t,n){var r=n(76),a=n(77);e.exports={distanceInWords:r(),format:a()}},function(e,t,n){function r(e){var t=a(e);return t.setHours(23,59,59,999),t}var a=n(0);e.exports=r},function(e,t,n){function r(e){var t=a(e),n=i(t).getTime()-o(t).getTime();return Math.round(n/s)+1}var a=n(0),i=n(2),o=n(6),s=6048e5;e.exports=r},function(e,t,n){function r(e,t,n){var r=a(e,n),i=a(t,n);return r.getTime()===i.getTime()}var a=n(9);e.exports=r},function(e,t,n){"use strict";var r=this&&this.__decorate||function(e,t,n,r){var a,i=arguments.length,o=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(o=(i<3?a(o):i>3?a(t,n,o):a(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o},a=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var i=n(8),o=n(24),s=n(63),u=function(){function e(e){this.elementRef=e,this.headless=!1,this.isOpened=!1,this.onTouchedCallback=function(){},this.onChangeCallback=function(){},this.scrollOptions={barBackground:"#DFE3E9",gridBackground:"#FFFFFF",barBorderRadius:"3",gridBorderRadius:"3",barWidth:"6",gridWidth:"6",barMargin:"0",gridMargin:"0"}}return t=e,Object.defineProperty(e.prototype,"value",{get:function(){return this.innerValue},set:function(e){this.innerValue=e,this.onChangeCallback(this.innerValue)},enumerable:!0,configurable:!0}),e.prototype.ngOnInit=function(){this.view="days",this.date=new Date,this.setOptions(),this.initDayNames(),this.initYears()},e.prototype.ngOnChanges=function(e){"options"in e&&(this.setOptions(),this.initDayNames(),this.init(),this.initYears())},e.prototype.setOptions=function(){var e=new Date;this.minYear=this.options&&this.options.minYear||s.getYear(e)-30,this.maxYear=this.options&&this.options.maxYear||s.getYear(e)+30,this.displayFormat=this.options&&this.options.displayFormat||"MMM D[,] YYYY",this.barTitleFormat=this.options&&this.options.barTitleFormat||"MMMM YYYY",this.firstCalendarDay=this.options&&this.options.firstCalendarDay||0,this.locale=this.options&&{locale:this.options.locale}||{}},e.prototype.nextMonth=function(){this.date=s.addMonths(this.date,1),this.init()},e.prototype.prevMonth=function(){this.date=s.subMonths(this.date,1),this.init()},e.prototype.setDate=function(e){this.date=this.days[e].date,this.value=this.date,this.init(),this.close()},e.prototype.setYear=function(e){this.date=s.setYear(this.date,this.years[e].year),this.init(),this.initYears(),this.view="days"},e.prototype.init=function(){var e=this,t=s.startOfMonth(this.date),n=s.endOfMonth(this.date);this.days=s.eachDay(t,n).map(function(t){return{date:t,day:s.getDate(t),month:s.getMonth(t),year:s.getYear(t),inThisMonth:!0,isToday:s.isToday(t),isSelected:s.isSameDay(t,e.innerValue)&&s.isSameMonth(t,e.innerValue)&&s.isSameYear(t,e.innerValue)}});for(var r=1;r<=s.getDay(t)-this.firstCalendarDay;r++){var a=s.subDays(t,r);this.days.unshift({date:a,day:s.getDate(a),month:s.getMonth(a),year:s.getYear(a),inThisMonth:!1,isToday:s.isToday(a),isSelected:s.isSameDay(a,this.innerValue)&&s.isSameMonth(a,this.innerValue)&&s.isSameYear(a,this.innerValue)})}this.displayValue=s.format(this.innerValue,this.displayFormat,this.locale),this.barTitle=s.format(t,this.barTitleFormat,this.locale)},e.prototype.initYears=function(){var e=this,t=this.maxYear-this.minYear;this.years=Array.from(new Array(t),function(t,n){return n+e.minYear}).map(function(t){return{year:t,isThisYear:t===s.getYear(e.date)}})},e.prototype.initDayNames=function(){this.dayNames=[];for(var e=this.firstCalendarDay,t=e;t<=6+e;t++){var n=s.setDay(new Date,t);this.dayNames.push(s.format(n,"ddd",this.locale))}},e.prototype.toggleView=function(){this.view="days"===this.view?"years":"days"},e.prototype.toggle=function(){this.isOpened=!this.isOpened},e.prototype.close=function(){this.isOpened=!1},e.prototype.writeValue=function(e){e&&(this.date=e,this.innerValue=e,this.init(),this.displayValue=s.format(this.innerValue,this.displayFormat,this.locale),this.barTitle=s.format(s.startOfMonth(e),this.barTitleFormat,this.locale))},e.prototype.registerOnChange=function(e){this.onChangeCallback=e},e.prototype.registerOnTouched=function(e){this.onTouchedCallback=e},e.prototype.onBlur=function(e){if(this.isOpened){var t=this.elementRef.nativeElement.querySelector(".ngx-datepicker-input");if(null!=t&&e.target!==t&&!t.contains(e.target)){var n=this.elementRef.nativeElement.querySelector(".ngx-datepicker-calendar-container");!n||n===e.target||n.contains(e.target)||e.target.classList.contains("year-unit")||this.close()}}},r([i.Input(),a("design:type",Object)],e.prototype,"options",void 0),r([i.Input(),a("design:type",Object)],e.prototype,"headless",void 0),r([i.Input(),a("design:type",Object)],e.prototype,"isOpened",void 0),r([i.HostListener("document:click",["$event"]),a("design:type",Function),a("design:paramtypes",[MouseEvent]),a("design:returntype",void 0)],e.prototype,"onBlur",null),e=t=r([i.Component({selector:"ng-datepicker",template:n(165),styles:[n(166)],providers:[{provide:o.NG_VALUE_ACCESSOR,useExisting:i.forwardRef(function(){return t}),multi:!0}]}),a("design:paramtypes",[i.ElementRef])],e);var t}();t.NgDatepickerComponent=u},function(e,n){e.exports=t},function(e,t,n){function r(e,t){var n=Number(t);return a(e,n*i)}var a=n(5),i=36e5;e.exports=r},function(e,t,n){function r(e,t){var n=Number(t);return i(e,a(e)+n)}var a=n(1),i=n(27);e.exports=r},function(e,t,n){function r(e,t){var n=a(e),r=Number(t),s=o(n,i(n)),u=new Date(0);return u.setFullYear(r,0,4),u.setHours(0,0,0,0),n=i(u),n.setDate(n.getDate()+s),n}var a=n(0),i=n(6),o=n(10);e.exports=r},function(e,t,n){function r(e,t){var n=Number(t);return a(e,n*i)}var a=n(5),i=6e4;e.exports=r},function(e,t,n){function r(e,t){var n=Number(t);return a(e,3*n)}var a=n(11);e.exports=r},function(e,t,n){function r(e,t){var n=Number(t);return a(e,1e3*n)}var a=n(5);e.exports=r},function(e,t,n){function r(e,t){var n=Number(t);return a(e,12*n)}var a=n(11);e.exports=r},function(e,t,n){function r(e,t){return a(e)-a(t)}var a=n(1);e.exports=r},function(e,t,n){function r(e,t){var n=a(e),r=a(t);return 12*(n.getFullYear()-r.getFullYear())+(n.getMonth()-r.getMonth())}var a=n(0);e.exports=r},function(e,t,n){function r(e){var t=a(e);return Math.floor(t.getMonth()/3)+1}var a=n(0);e.exports=r},function(e,t,n){function r(e,t){var n=a(e),r=a(t);return n.getFullYear()-r.getFullYear()}var a=n(0);e.exports=r},function(e,t,n){function r(e,t){var n=a(e),r=a(t),s=o(n,r),u=Math.abs(i(n,r));return n.setDate(n.getDate()-s*u),s*(u-(o(n,r)===-s))}var a=n(0),i=n(10),o=n(7);e.exports=r},function(e,t,n){function r(e,t){var n=Number(t);return a(e,-n)}var a=n(26);e.exports=r},function(e,t,n){function r(e,t,n){var r=n||{},p=a(e,t),g=r.locale,h=u.distanceInWords.localize;g&&g.distanceInWords&&g.distanceInWords.localize&&(h=g.distanceInWords.localize);var m,v,y={addSuffix:Boolean(r.addSuffix),comparison:p};p>0?(m=i(e),v=i(t)):(m=i(t),v=i(e));var x,b=o(v,m),M=v.getTimezoneOffset()-m.getTimezoneOffset(),D=Math.round(b/60)-M;if(D<2)return r.includeSeconds?b<5?h("lessThanXSeconds",5,y):b<10?h("lessThanXSeconds",10,y):b<20?h("lessThanXSeconds",20,y):b<40?h("halfAMinute",null,y):b<60?h("lessThanXMinutes",1,y):h("xMinutes",1,y):0===D?h("lessThanXMinutes",1,y):h("xMinutes",D,y);if(D<45)return h("xMinutes",D,y);if(D<90)return h("aboutXHours",1,y);if(D<c){return h("aboutXHours",Math.round(D/60),y)}if(D<l)return h("xDays",1,y);if(D<d){return h("xDays",Math.round(D/c),y)}if(D<f)return x=Math.round(D/d),h("aboutXMonths",x,y);if((x=s(v,m))<12){return h("xMonths",Math.round(D/d),y)}var S=x%12,T=Math.floor(x/12);return S<3?h("aboutXYears",T,y):S<9?h("overXYears",T,y):h("almostXYears",T+1,y)}var a=n(16),i=n(0),o=n(18),s=n(17),u=n(19),c=1440,l=2520,d=43200,f=86400;e.exports=r},function(e,t,n){function r(e,t){var n=t?Number(t.weekStartsOn)||0:0,r=a(e),i=r.getDay(),o=6+(i<n?-7:0)-(i-n);return r.setDate(r.getDate()+o),r.setHours(23,59,59,999),r}var a=n(0);e.exports=r},function(e,t,n){function r(e){var t=a(e),n=t.getMonth();return t.setFullYear(t.getFullYear(),n+1,0),t.setHours(23,59,59,999),t}var a=n(0);e.exports=r},function(e,t,n){function r(e){var t=a(e);return o(t,i(t))+1}var a=n(0),i=n(42),o=n(10);e.exports=r},function(e,t,n){function r(e){var t=a(e),n=new Date(0);return n.setFullYear(t.getFullYear(),0,1),n.setHours(0,0,0,0),n}var a=n(0);e.exports=r},function(e,t,n){function r(e){if(a(e))return!isNaN(e);throw new TypeError(toString.call(e)+" is not an instance of Date")}var a=n(13);e.exports=r},function(e,t,n){function r(e){var t=a(e),n=t.getFullYear();return n%400==0||n%4==0&&n%100!=0}var a=n(0);e.exports=r},function(e,t,n){function r(e){var t=a(e),n=t.getDay();return 0===n&&(n=7),n}var a=n(0);e.exports=r},function(e,t,n){function r(e,t){var n=a(e),r=a(t);return n.getTime()===r.getTime()}var a=n(47);e.exports=r},function(e,t,n){function r(e){var t=a(e);return t.setMinutes(0,0,0),t}var a=n(0);e.exports=r},function(e,t,n){function r(e,t){return a(e,t,{weekStartsOn:1})}var a=n(22);e.exports=r},function(e,t,n){function r(e,t){var n=a(e),r=a(t);return n.getTime()===r.getTime()}var a=n(6);e.exports=r},function(e,t,n){function r(e,t){var n=a(e),r=a(t);return n.getTime()===r.getTime()}var a=n(51);e.exports=r},function(e,t,n){function r(e){var t=a(e);return t.setSeconds(0,0),t}var a=n(0);e.exports=r},function(e,t,n){function r(e,t){var n=a(e),r=a(t);return n.getFullYear()===r.getFullYear()&&n.getMonth()===r.getMonth()}var a=n(0);e.exports=r},function(e,t,n){function r(e,t){var n=a(e),r=a(t);return n.getTime()===r.getTime()}var a=n(54);e.exports=r},function(e,t,n){function r(e){var t=a(e),n=t.getMonth(),r=n-n%3;return t.setMonth(r,1),t.setHours(0,0,0,0),t}var a=n(0);e.exports=r},function(e,t,n){function r(e,t){var n=a(e),r=a(t);return n.getTime()===r.getTime()}var a=n(56);e.exports=r},function(e,t,n){function r(e){var t=a(e);return t.setMilliseconds(0),t}var a=n(0);e.exports=r},function(e,t,n){function r(e,t){var n=a(e),r=a(t);return n.getFullYear()===r.getFullYear()}var a=n(0);e.exports=r},function(e,t,n){function r(e,t){var n=t?Number(t.weekStartsOn)||0:0,r=a(e),i=r.getDay(),o=6+(i<n?-7:0)-(i-n);return r.setHours(0,0,0,0),r.setDate(r.getDate()+o),r}var a=n(0);e.exports=r},function(e,t,n){function r(e,t){var n=a(e),r=Number(t),o=n.getFullYear(),s=n.getDate(),u=new Date(0);u.setFullYear(o,r,15),u.setHours(0,0,0,0);var c=i(u);return n.setMonth(r,Math.min(s,c)),n}var a=n(0),i=n(14);e.exports=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e){this.position=e&&e.position?e.position:"right",this.barBackground=e&&e.barBackground?e.barBackground:"#343a40",this.barOpacity=e&&e.barOpacity?e.barOpacity:"1",this.barWidth=e&&e.barWidth?e.barWidth:"12",this.barBorderRadius=e&&e.barBorderRadius?e.barBorderRadius:"5",this.barMargin=e&&e.barMargin?e.barMargin:"1px 0",this.gridBackground=e&&e.gridBackground?e.gridBackground:"#adb5bd",this.gridOpacity=e&&e.gridOpacity?e.gridOpacity:"1",this.gridWidth=e&&e.gridWidth?e.gridWidth:"8",this.gridBorderRadius=e&&e.gridBorderRadius?e.gridBorderRadius:"10",this.gridMargin=e&&e.gridMargin?e.gridMargin:"1px 2px",this.alwaysVisible=!e||void 0===e.alwaysVisible||e.alwaysVisible,this.visibleTimeout=e&&e.visibleTimeout?e.visibleTimeout:1e3}return e}();t.SlimScrollOptions=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}(n(62))},function(e,t,n){"use strict";function r(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}Object.defineProperty(t,"__esModule",{value:!0}),r(n(23)),r(n(169))},function(e,t,n){e.exports={addDays:n(4),addHours:n(25),addISOYears:n(26),addMilliseconds:n(5),addMinutes:n(28),addMonths:n(11),addQuarters:n(29),addSeconds:n(30),addWeeks:n(15),addYears:n(31),areRangesOverlapping:n(64),closestIndexTo:n(65),closestTo:n(66),compareAsc:n(7),compareDesc:n(16),differenceInCalendarDays:n(10),differenceInCalendarISOWeeks:n(67),differenceInCalendarISOYears:n(32),differenceInCalendarMonths:n(33),differenceInCalendarQuarters:n(68),differenceInCalendarWeeks:n(69),differenceInCalendarYears:n(35),differenceInDays:n(36),differenceInHours:n(70),differenceInISOYears:n(71),differenceInMilliseconds:n(12),differenceInMinutes:n(72),differenceInMonths:n(17),differenceInQuarters:n(73),differenceInSeconds:n(18),differenceInWeeks:n(74),differenceInYears:n(75),distanceInWords:n(38),distanceInWordsStrict:n(79),distanceInWordsToNow:n(80),eachDay:n(81),endOfDay:n(20),endOfHour:n(82),endOfISOWeek:n(83),endOfISOYear:n(84),endOfMinute:n(85),endOfMonth:n(40),endOfQuarter:n(86),endOfSecond:n(87),endOfToday:n(88),endOfTomorrow:n(89),endOfWeek:n(39),endOfYear:n(90),endOfYesterday:n(91),format:n(92),getDate:n(93),getDay:n(94),getDayOfYear:n(41),getDaysInMonth:n(14),getDaysInYear:n(95),getHours:n(96),getISODay:n(45),getISOWeek:n(21),getISOWeeksInYear:n(97),getISOYear:n(1),getMilliseconds:n(98),getMinutes:n(99),getMonth:n(100),getOverlappingDaysInRanges:n(101),getQuarter:n(34),getSeconds:n(102),getTime:n(103),getYear:n(104),isAfter:n(105),isBefore:n(106),isDate:n(13),isEqual:n(107),isFirstDayOfMonth:n(108),isFriday:n(109),isFuture:n(110),isLastDayOfMonth:n(111),isLeapYear:n(44),isMonday:n(112),isPast:n(113),isSameDay:n(114),isSameHour:n(46),isSameISOWeek:n(48),isSameISOYear:n(49),isSameMinute:n(50),isSameMonth:n(52),isSameQuarter:n(53),isSameSecond:n(55),isSameWeek:n(22),isSameYear:n(57),isSaturday:n(115),isSunday:n(116),isThisHour:n(117),isThisISOWeek:n(118),isThisISOYear:n(119),isThisMinute:n(120),isThisMonth:n(121),isThisQuarter:n(122),isThisSecond:n(123),isThisWeek:n(124),isThisYear:n(125),isThursday:n(126),isToday:n(127),isTomorrow:n(128),isTuesday:n(129),isValid:n(43),isWednesday:n(130),isWeekend:n(131),isWithinRange:n(132),isYesterday:n(133),lastDayOfISOWeek:n(134),lastDayOfISOYear:n(135),lastDayOfMonth:n(136),lastDayOfQuarter:n(137),lastDayOfWeek:n(58),lastDayOfYear:n(138),max:n(139),min:n(140),parse:n(0),setDate:n(141),setDay:n(142),setDayOfYear:n(143),setHours:n(144),setISODay:n(145),setISOWeek:n(146),setISOYear:n(27),setMilliseconds:n(147),setMinutes:n(148),setMonth:n(59),setQuarter:n(149),setSeconds:n(150),setYear:n(151),startOfDay:n(3),startOfHour:n(47),startOfISOWeek:n(2),startOfISOYear:n(6),startOfMinute:n(51),startOfMonth:n(152),startOfQuarter:n(54),startOfSecond:n(56),startOfToday:n(153),startOfTomorrow:n(154),startOfWeek:n(9),startOfYear:n(42),startOfYesterday:n(155),subDays:n(156),subHours:n(157),subISOYears:n(37),subMilliseconds:n(158),subMinutes:n(159),subMonths:n(160),subQuarters:n(161),subSeconds:n(162),subWeeks:n(163),subYears:n(164)}},function(e,t,n){function r(e,t,n,r){var i=a(e).getTime(),o=a(t).getTime(),s=a(n).getTime(),u=a(r).getTime();if(i>o||s>u)throw new Error("The start of the range cannot be after the end of the range");return i<u&&s<o}var a=n(0);e.exports=r},function(e,t,n){function r(e,t){if(!(t instanceof Array))throw new TypeError(toString.call(t)+" is not an instance of Array");var n,r,i=a(e),o=i.getTime();return t.forEach(function(e,t){var i=a(e),s=Math.abs(o-i.getTime());(void 0===n||s<r)&&(n=t,r=s)}),n}var a=n(0);e.exports=r},function(e,t,n){function r(e,t){if(!(t instanceof Array))throw new TypeError(toString.call(t)+" is not an instance of Array");var n,r,i=a(e),o=i.getTime();return t.forEach(function(e){var t=a(e),i=Math.abs(o-t.getTime());(void 0===n||i<r)&&(n=t,r=i)}),n}var a=n(0);e.exports=r},function(e,t,n){function r(e,t){var n=a(e),r=a(t),s=n.getTime()-n.getTimezoneOffset()*i,u=r.getTime()-r.getTimezoneOffset()*i;return Math.round((s-u)/o)}var a=n(2),i=6e4,o=6048e5;e.exports=r},function(e,t,n){function r(e,t){var n=i(e),r=i(t);return 4*(n.getFullYear()-r.getFullYear())+(a(n)-a(r))}var a=n(34),i=n(0);e.exports=r},function(e,t,n){function r(e,t,n){var r=a(e,n),s=a(t,n),u=r.getTime()-r.getTimezoneOffset()*i,c=s.getTime()-s.getTimezoneOffset()*i;return Math.round((u-c)/o)}var a=n(9),i=6e4,o=6048e5;e.exports=r},function(e,t,n){function r(e,t){var n=a(e,t)/i;return n>0?Math.floor(n):Math.ceil(n)}var a=n(12),i=36e5;e.exports=r},function(e,t,n){function r(e,t){var n=a(e),r=a(t),u=o(n,r),c=Math.abs(i(n,r));return n=s(n,u*c),u*(c-(o(n,r)===-u))}var a=n(0),i=n(32),o=n(7),s=n(37);e.exports=r},function(e,t,n){function r(e,t){var n=a(e,t)/i;return n>0?Math.floor(n):Math.ceil(n)}var a=n(12),i=6e4;e.exports=r},function(e,t,n){function r(e,t){var n=a(e,t)/3;return n>0?Math.floor(n):Math.ceil(n)}var a=n(17);e.exports=r},function(e,t,n){function r(e,t){var n=a(e,t)/7;return n>0?Math.floor(n):Math.ceil(n)}var a=n(36);e.exports=r},function(e,t,n){function r(e,t){var n=a(e),r=a(t),s=o(n,r),u=Math.abs(i(n,r));return n.setFullYear(n.getFullYear()-s*u),s*(u-(o(n,r)===-s))}var a=n(0),i=n(35),o=n(7);e.exports=r},function(e,t){function n(){function e(e,n,r){r=r||{};var a;return a="string"==typeof t[e]?t[e]:1===n?t[e].one:t[e].other.replace("{{count}}",n),r.addSuffix?r.comparison>0?"in "+a:a+" ago":a}var t={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};return{localize:e}}e.exports=n},function(e,t,n){function r(){var e=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],t=["January","February","March","April","May","June","July","August","September","October","November","December"],n=["Su","Mo","Tu","We","Th","Fr","Sa"],r=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],o=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],s=["AM","PM"],u=["am","pm"],c=["a.m.","p.m."],l={MMM:function(t){return e[t.getMonth()]},MMMM:function(e){return t[e.getMonth()]},dd:function(e){return n[e.getDay()]},ddd:function(e){return r[e.getDay()]},dddd:function(e){return o[e.getDay()]},A:function(e){return e.getHours()/12>=1?s[1]:s[0]},a:function(e){return e.getHours()/12>=1?u[1]:u[0]},aa:function(e){return e.getHours()/12>=1?c[1]:c[0]}};return["M","D","DDD","d","Q","W"].forEach(function(e){l[e+"o"]=function(t,n){return a(n[e](t))}}),{formatters:l,formattingTokensRegExp:i(l)}}function a(e){var t=e%100;if(t>20||t<10)switch(t%10){case 1:return e+"st";case 2:return e+"nd";case 3:return e+"rd"}return e+"th"}var i=n(78);e.exports=r},function(e,t){function n(e){var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(n);var a=r.concat(t).sort().reverse();return new RegExp("(\\[[^\\[]*\\])|(\\\\)?("+a.join("|")+"|.)","g")}var r=["M","MM","Q","D","DD","DDD","DDDD","d","E","W","WW","YY","YYYY","GG","GGGG","H","HH","h","hh","m","mm","s","ss","S","SS","SSS","Z","ZZ","X","x"];e.exports=n},function(e,t,n){function r(e,t,n){var r=n||{},d=a(e,t),f=r.locale,p=s.distanceInWords.localize;f&&f.distanceInWords&&f.distanceInWords.localize&&(p=f.distanceInWords.localize);var g,h,m={addSuffix:Boolean(r.addSuffix),comparison:d};d>0?(g=i(e),h=i(t)):(g=i(t),h=i(e));var v,y,x,b,M,D=Math[r.partialMethod?String(r.partialMethod):"floor"],S=o(h,g),T=h.getTimezoneOffset()-g.getTimezoneOffset(),w=D(S/60)-T;if("s"===(v=r.unit?String(r.unit):w<1?"s":w<60?"m":w<u?"h":w<c?"d":w<l?"M":"Y"))return p("xSeconds",S,m);if("m"===v)return p("xMinutes",w,m);if("h"===v)return y=D(w/60),p("xHours",y,m);if("d"===v)return x=D(w/u),p("xDays",x,m);if("M"===v)return b=D(w/c),p("xMonths",b,m);if("Y"===v)return M=D(w/l),p("xYears",M,m);throw new Error("Unknown unit: "+v)}var a=n(16),i=n(0),o=n(18),s=n(19),u=1440,c=43200,l=525600;e.exports=r},function(e,t,n){function r(e,t){return a(Date.now(),e,t)}var a=n(38);e.exports=r},function(e,t,n){function r(e,t){var n=a(e),r=a(t),i=r.getTime();if(n.getTime()>i)throw new Error("The first date cannot be after the second date");var o=[],s=n;for(s.setHours(0,0,0,0);s.getTime()<=i;)o.push(a(s)),s.setDate(s.getDate()+1);return o}var a=n(0);e.exports=r},function(e,t,n){function r(e){var t=a(e);return t.setMinutes(59,59,999),t}var a=n(0);e.exports=r},function(e,t,n){function r(e){return a(e,{weekStartsOn:1})}var a=n(39);e.exports=r},function(e,t,n){function r(e){var t=a(e),n=new Date(0);n.setFullYear(t+1,0,4),n.setHours(0,0,0,0);var r=i(n);return r.setMilliseconds(r.getMilliseconds()-1),r}var a=n(1),i=n(2);e.exports=r},function(e,t,n){function r(e){var t=a(e);return t.setSeconds(59,999),t}var a=n(0);e.exports=r},function(e,t,n){function r(e){var t=a(e),n=t.getMonth(),r=n-n%3+3;return t.setMonth(r,0),t.setHours(23,59,59,999),t}var a=n(0);e.exports=r},function(e,t,n){function r(e){var t=a(e);return t.setMilliseconds(999),t}var a=n(0);e.exports=r},function(e,t,n){function r(){return a(new Date)}var a=n(20);e.exports=r},function(e,t){function n(){var e=new Date,t=e.getFullYear(),n=e.getMonth(),r=e.getDate(),a=new Date(0);return a.setFullYear(t,n,r+1),a.setHours(23,59,59,999),a}e.exports=n},function(e,t,n){function r(e){var t=a(e),n=t.getFullYear();return t.setFullYear(n+1,0,0),t.setHours(23,59,59,999),t}var a=n(0);e.exports=r},function(e,t){function n(){var e=new Date,t=e.getFullYear(),n=e.getMonth(),r=e.getDate(),a=new Date(0);return a.setFullYear(t,n,r-1),a.setHours(23,59,59,999),a}e.exports=n},function(e,t,n){function r(e,t,n){var r=t?String(t):"YYYY-MM-DDTHH:mm:ss.SSSZ",i=n||{},o=i.locale,s=p.format.formatters,u=p.format.formattingTokensRegExp;o&&o.format&&o.format.formatters&&(s=o.format.formatters,o.format.formattingTokensRegExp&&(u=o.format.formattingTokensRegExp));var c=d(e);return f(c)?a(r,s,u)(c):"Invalid Date"}function a(e,t,n){var r,a,o=e.match(n),s=o.length;for(r=0;r<s;r++)a=t[o[r]]||g[o[r]],o[r]=a||i(o[r]);return function(e){for(var t="",n=0;n<s;n++)o[n]instanceof Function?t+=o[n](e,g):t+=o[n];return t}}function i(e){return e.match(/\[[\s\S]/)?e.replace(/^\[|]$/g,""):e.replace(/\\/g,"")}function o(e,t){t=t||"";var n=e>0?"-":"+",r=Math.abs(e),a=Math.floor(r/60),i=r%60;return n+s(a,2)+t+s(i,2)}function s(e,t){for(var n=Math.abs(e).toString();n.length<t;)n="0"+n;return n}var u=n(41),c=n(21),l=n(1),d=n(0),f=n(43),p=n(19),g={M:function(e){return e.getMonth()+1},MM:function(e){return s(e.getMonth()+1,2)},Q:function(e){return Math.ceil((e.getMonth()+1)/3)},D:function(e){return e.getDate()},DD:function(e){return s(e.getDate(),2)},DDD:function(e){return u(e)},DDDD:function(e){return s(u(e),3)},d:function(e){return e.getDay()},E:function(e){return e.getDay()||7},W:function(e){return c(e)},WW:function(e){return s(c(e),2)},YY:function(e){return s(e.getFullYear(),4).substr(2)},YYYY:function(e){return s(e.getFullYear(),4)},GG:function(e){return String(l(e)).substr(2)},GGGG:function(e){return l(e)},H:function(e){return e.getHours()},HH:function(e){return s(e.getHours(),2)},h:function(e){var t=e.getHours();return 0===t?12:t>12?t%12:t},hh:function(e){return s(g.h(e),2)},m:function(e){return e.getMinutes()},mm:function(e){return s(e.getMinutes(),2)},s:function(e){return e.getSeconds()},ss:function(e){return s(e.getSeconds(),2)},S:function(e){return Math.floor(e.getMilliseconds()/100)},SS:function(e){return s(Math.floor(e.getMilliseconds()/10),2)},SSS:function(e){return s(e.getMilliseconds(),3)},Z:function(e){return o(e.getTimezoneOffset(),":")},ZZ:function(e){return o(e.getTimezoneOffset())},X:function(e){return Math.floor(e.getTime()/1e3)},x:function(e){return e.getTime()}};e.exports=r},function(e,t,n){function r(e){return a(e).getDate()}var a=n(0);e.exports=r},function(e,t,n){function r(e){return a(e).getDay()}var a=n(0);e.exports=r},function(e,t,n){function r(e){return a(e)?366:365}var a=n(44);e.exports=r},function(e,t,n){function r(e){return a(e).getHours()}var a=n(0);e.exports=r},function(e,t,n){function r(e){var t=a(e),n=a(i(t,60)),r=n.valueOf()-t.valueOf();return Math.round(r/o)}var a=n(6),i=n(15),o=6048e5;e.exports=r},function(e,t,n){function r(e){return a(e).getMilliseconds()}var a=n(0);e.exports=r},function(e,t,n){function r(e){return a(e).getMinutes()}var a=n(0);e.exports=r},function(e,t,n){function r(e){return a(e).getMonth()}var a=n(0);e.exports=r},function(e,t,n){function r(e,t,n,r){var o=a(e).getTime(),s=a(t).getTime(),u=a(n).getTime(),c=a(r).getTime();if(o>s||u>c)throw new Error("The start of the range cannot be after the end of the range");if(!(o<c&&u<s))return 0;var l=u<o?o:u,d=c>s?s:c,f=d-l;return Math.ceil(f/i)}var a=n(0),i=864e5;e.exports=r},function(e,t,n){function r(e){return a(e).getSeconds()}var a=n(0);e.exports=r},function(e,t,n){function r(e){return a(e).getTime()}var a=n(0);e.exports=r},function(e,t,n){function r(e){return a(e).getFullYear()}var a=n(0);e.exports=r},function(e,t,n){function r(e,t){var n=a(e),r=a(t);return n.getTime()>r.getTime()}var a=n(0);e.exports=r},function(e,t,n){function r(e,t){var n=a(e),r=a(t);return n.getTime()<r.getTime()}var a=n(0);e.exports=r},function(e,t,n){function r(e,t){var n=a(e),r=a(t);return n.getTime()===r.getTime()}var a=n(0);e.exports=r},function(e,t,n){function r(e){return 1===a(e).getDate()}var a=n(0);e.exports=r},function(e,t,n){function r(e){return 5===a(e).getDay()}var a=n(0);e.exports=r},function(e,t,n){function r(e){return a(e).getTime()>(new Date).getTime()}var a=n(0);e.exports=r},function(e,t,n){function r(e){var t=a(e);return i(t).getTime()===o(t).getTime()}var a=n(0),i=n(20),o=n(40);e.exports=r},function(e,t,n){function r(e){return 1===a(e).getDay()}var a=n(0);e.exports=r},function(e,t,n){function r(e){return a(e).getTime()<(new Date).getTime()}var a=n(0);e.exports=r},function(e,t,n){function r(e,t){var n=a(e),r=a(t);return n.getTime()===r.getTime()}var a=n(3);e.exports=r},function(e,t,n){function r(e){return 6===a(e).getDay()}var a=n(0);e.exports=r},function(e,t,n){function r(e){return 0===a(e).getDay()}var a=n(0);e.exports=r},function(e,t,n){function r(e){return a(new Date,e)}var a=n(46);e.exports=r},function(e,t,n){function r(e){return a(new Date,e)}var a=n(48);e.exports=r},function(e,t,n){function r(e){return a(new Date,e)}var a=n(49);e.exports=r},function(e,t,n){function r(e){return a(new Date,e)}var a=n(50);e.exports=r},function(e,t,n){function r(e){return a(new Date,e)}var a=n(52);e.exports=r},function(e,t,n){function r(e){return a(new Date,e)}var a=n(53);e.exports=r},function(e,t,n){function r(e){return a(new Date,e)}var a=n(55);e.exports=r},function(e,t,n){function r(e,t){return a(new Date,e,t)}var a=n(22);e.exports=r},function(e,t,n){function r(e){return a(new Date,e)}var a=n(57);e.exports=r},function(e,t,n){function r(e){return 4===a(e).getDay()}var a=n(0);e.exports=r},function(e,t,n){function r(e){return a(e).getTime()===a(new Date).getTime()}var a=n(3);e.exports=r},function(e,t,n){function r(e){var t=new Date;return t.setDate(t.getDate()+1),a(e).getTime()===a(t).getTime()}var a=n(3);e.exports=r},function(e,t,n){function r(e){return 2===a(e).getDay()}var a=n(0);e.exports=r},function(e,t,n){function r(e){return 3===a(e).getDay()}var a=n(0);e.exports=r},function(e,t,n){function r(e){var t=a(e),n=t.getDay();return 0===n||6===n}var a=n(0);e.exports=r},function(e,t,n){function r(e,t,n){var r=a(e).getTime(),i=a(t).getTime(),o=a(n).getTime();if(i>o)throw new Error("The start of the range cannot be after the end of the range");return r>=i&&r<=o}var a=n(0);e.exports=r},function(e,t,n){function r(e){var t=new Date;return t.setDate(t.getDate()-1),a(e).getTime()===a(t).getTime()}var a=n(3);e.exports=r},function(e,t,n){function r(e){return a(e,{weekStartsOn:1})}var a=n(58);e.exports=r},function(e,t,n){function r(e){var t=a(e),n=new Date(0);n.setFullYear(t+1,0,4),n.setHours(0,0,0,0);var r=i(n);return r.setDate(r.getDate()-1),r}var a=n(1),i=n(2);e.exports=r},function(e,t,n){function r(e){var t=a(e),n=t.getMonth();return t.setFullYear(t.getFullYear(),n+1,0),t.setHours(0,0,0,0),t}var a=n(0);e.exports=r},function(e,t,n){function r(e){var t=a(e),n=t.getMonth(),r=n-n%3+3;return t.setMonth(r,0),t.setHours(0,0,0,0),t}var a=n(0);e.exports=r},function(e,t,n){function r(e){var t=a(e),n=t.getFullYear();return t.setFullYear(n+1,0,0),t.setHours(0,0,0,0),t}var a=n(0);e.exports=r},function(e,t,n){function r(){var e=Array.prototype.slice.call(arguments),t=e.map(function(e){return a(e)}),n=Math.max.apply(null,t);return new Date(n)}var a=n(0);e.exports=r},function(e,t,n){function r(){var e=Array.prototype.slice.call(arguments),t=e.map(function(e){return a(e)}),n=Math.min.apply(null,t);return new Date(n)}var a=n(0);e.exports=r},function(e,t,n){function r(e,t){var n=a(e),r=Number(t);return n.setDate(r),n}var a=n(0);e.exports=r},function(e,t,n){function r(e,t,n){var r=n?Number(n.weekStartsOn)||0:0,o=a(e),s=Number(t),u=o.getDay();return i(o,((s%7+7)%7<r?7:0)+s-u)}var a=n(0),i=n(4);e.exports=r},function(e,t,n){function r(e,t){var n=a(e),r=Number(t);return n.setMonth(0),n.setDate(r),n}var a=n(0);e.exports=r},function(e,t,n){function r(e,t){var n=a(e),r=Number(t);return n.setHours(r),n}var a=n(0);e.exports=r},function(e,t,n){function r(e,t){var n=a(e),r=Number(t),s=o(n);return i(n,r-s)}var a=n(0),i=n(4),o=n(45);e.exports=r},function(e,t,n){function r(e,t){var n=a(e),r=Number(t),o=i(n)-r;return n.setDate(n.getDate()-7*o),n}var a=n(0),i=n(21);e.exports=r},function(e,t,n){function r(e,t){var n=a(e),r=Number(t);return n.setMilliseconds(r),n}var a=n(0);e.exports=r},function(e,t,n){function r(e,t){var n=a(e),r=Number(t);return n.setMinutes(r),n}var a=n(0);e.exports=r},function(e,t,n){function r(e,t){var n=a(e),r=Number(t),o=Math.floor(n.getMonth()/3)+1,s=r-o;return i(n,n.getMonth()+3*s)}var a=n(0),i=n(59);e.exports=r},function(e,t,n){function r(e,t){var n=a(e),r=Number(t);return n.setSeconds(r),n}var a=n(0);e.exports=r},function(e,t,n){function r(e,t){var n=a(e),r=Number(t);return n.setFullYear(r),n}var a=n(0);e.exports=r},function(e,t,n){function r(e){var t=a(e);return t.setDate(1),t.setHours(0,0,0,0),t}var a=n(0);e.exports=r},function(e,t,n){function r(){return a(new Date)}var a=n(3);e.exports=r},function(e,t){function n(){var e=new Date,t=e.getFullYear(),n=e.getMonth(),r=e.getDate(),a=new Date(0);return a.setFullYear(t,n,r+1),a.setHours(0,0,0,0),a}e.exports=n},function(e,t){function n(){var e=new Date,t=e.getFullYear(),n=e.getMonth(),r=e.getDate(),a=new Date(0);return a.setFullYear(t,n,r-1),a.setHours(0,0,0,0),a}e.exports=n},function(e,t,n){function r(e,t){var n=Number(t);return a(e,-n)}var a=n(4);e.exports=r},function(e,t,n){function r(e,t){var n=Number(t);return a(e,-n)}var a=n(25);e.exports=r},function(e,t,n){function r(e,t){var n=Number(t);return a(e,-n)}var a=n(5);e.exports=r},function(e,t,n){function r(e,t){var n=Number(t);return a(e,-n)}var a=n(28);e.exports=r},function(e,t,n){function r(e,t){var n=Number(t);return a(e,-n)}var a=n(11);e.exports=r},function(e,t,n){function r(e,t){var n=Number(t);return a(e,-n)}var a=n(29);e.exports=r},function(e,t,n){function r(e,t){var n=Number(t);return a(e,-n)}var a=n(30);e.exports=r},function(e,t,n){function r(e,t){var n=Number(t);return a(e,-n)}var a=n(15);e.exports=r},function(e,t,n){function r(e,t){var n=Number(t);return a(e,-n)}var a=n(31);e.exports=r},function(e,t){e.exports='<div class="ngx-datepicker-container"> <input type="text" *ngIf="!headless" class="ngx-datepicker-input" [(ngModel)]="displayValue" readonly="readonly" (click)="toggle()"> <ng-content></ng-content> <div class="ngx-datepicker-calendar-container" *ngIf="isOpened"> <div class="topbar-container"> <svg width="7px" height="10px" viewBox="0 0 7 10" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" (click)="prevMonth()"> <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g transform="translate(-923.000000, -1882.000000)" fill="#CED0DA"> <g transform="translate(80.000000, 1361.000000)"> <g transform="translate(0.000000, 430.000000)"> <g transform="translate(825.000000, 0.000000)"> <g transform="translate(0.000000, 72.000000)"> <g transform="translate(18.000000, 15.000000)"> <polygon id="Back" points="6.015 4 0 9.013 6.015 14.025"></polygon> </g> </g> </g> </g> </g> </g> </g> </svg> <span class="topbar-title" (click)="toggleView()">{{ barTitle }}</span> <svg width="7px" height="10px" viewBox="0 0 6 10" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" (click)="nextMonth()"> <g id="Source-Sans---UI-Elements-Kit" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="White-Layout" transform="translate(-1182.000000, -1882.000000)" fill="#CED0DA"> <g id="Dropdowns-&amp;-Selector" transform="translate(80.000000, 1361.000000)"> <g id="Dropdowns" transform="translate(0.000000, 430.000000)"> <g id="Calendar" transform="translate(825.000000, 0.000000)"> <g transform="translate(0.000000, 72.000000)" id="Top-Bar-Nav"> <g transform="translate(18.000000, 15.000000)"> <polygon id="Forward" transform="translate(262.007500, 9.012500) scale(-1, 1) translate(-262.007500, -9.012500) " points="265.015 4 259 9.013 265.015 14.025"></polygon> </g> </g> </g> </g> </g> </g> </g> </svg> </div> <div class="main-calendar-container" *ngIf="view === \'days\'"> <div class="main-calendar-day-names"> <span class="day-name-unit" *ngFor="let name of dayNames">{{ name }}</span> </div> <div class="main-calendar-days"> <span class="day-unit" *ngFor="let day of days; let i = index;" [ngClass]="{ \'is-prev-month\': !day.inThisMonth, \'is-today\': day.isToday, \'is-selected\': day.isSelected }" (click)="setDate(i)">{{ day.day }}</span> </div> </div> <div class="main-calendar-container" *ngIf="view === \'years\'"> <div class="main-calendar-years" slimScroll [options]="scrollOptions"> <span class="year-unit" *ngFor="let year of years; let i = index;" [ngClass]="{ \'is-selected\': year.isThisYear }" (click)="setYear(i)">{{ year.year }}</span> </div> </div> </div> </div> '},function(e,t,n){var r=n(167);e.exports="string"==typeof r?r:r.toString()},function(e,t,n){t=e.exports=n(168)(void 0),t.push([e.i,".ngx-datepicker-container{position:relative}.ngx-datepicker-container .ngx-datepicker-input{padding:5px 10px;font-size:14px;width:200px;outline:none;border:1px solid #dfe3e9}.ngx-datepicker-container .ngx-datepicker-calendar-container{position:absolute;width:300px;background:#fff;top:40px;left:0;box-shadow:0 1px 4px 0 rgba(0,0,0,.08);border:1px solid #dfe3e9;border-radius:4px}.ngx-datepicker-container .ngx-datepicker-calendar-container .topbar-container{width:100%;height:50px;padding:15px;border-bottom:1px solid #dfe3e9;display:flex;justify-content:space-between;align-items:center;user-select:none}.ngx-datepicker-container .ngx-datepicker-calendar-container .topbar-container svg{cursor:pointer}.ngx-datepicker-container .ngx-datepicker-calendar-container .topbar-container svg g{fill:#ced0da}.ngx-datepicker-container .ngx-datepicker-calendar-container .topbar-container .topbar-title{color:#3d495c;font-size:14px;font-weight:600;cursor:pointer}.ngx-datepicker-container .ngx-datepicker-calendar-container .main-calendar-container{width:100%;height:100%;padding:15px 10px 0;font-size:12px;font-weight:500}.ngx-datepicker-container .ngx-datepicker-calendar-container .main-calendar-container .main-calendar-day-names{color:#a4a9b1;width:100%;display:flex;align-items:center}.ngx-datepicker-container .ngx-datepicker-calendar-container .main-calendar-container .main-calendar-day-names .day-name-unit{width:14.28571%;text-transform:uppercase;text-align:center}.ngx-datepicker-container .ngx-datepicker-calendar-container .main-calendar-container .main-calendar-days,.ngx-datepicker-container .ngx-datepicker-calendar-container .main-calendar-container .main-calendar-years{padding:15px 0;width:100%;display:inline-block;max-height:275px;overflow:hidden}.ngx-datepicker-container .ngx-datepicker-calendar-container .main-calendar-container .main-calendar-days .day-unit,.ngx-datepicker-container .ngx-datepicker-calendar-container .main-calendar-container .main-calendar-days .year-unit,.ngx-datepicker-container .ngx-datepicker-calendar-container .main-calendar-container .main-calendar-years .day-unit,.ngx-datepicker-container .ngx-datepicker-calendar-container .main-calendar-container .main-calendar-years .year-unit{width:14.28571%;height:40px;display:inline-flex;float:left;align-items:center;justify-content:center;cursor:pointer;user-select:none;border-radius:50%;color:#3d495c}.ngx-datepicker-container .ngx-datepicker-calendar-container .main-calendar-container .main-calendar-days .day-unit.is-prev-month,.ngx-datepicker-container .ngx-datepicker-calendar-container .main-calendar-container .main-calendar-days .year-unit.is-prev-month,.ngx-datepicker-container .ngx-datepicker-calendar-container .main-calendar-container .main-calendar-years .day-unit.is-prev-month,.ngx-datepicker-container .ngx-datepicker-calendar-container .main-calendar-container .main-calendar-years .year-unit.is-prev-month{color:#a4a9b1}.ngx-datepicker-container .ngx-datepicker-calendar-container .main-calendar-container .main-calendar-days .day-unit.is-today,.ngx-datepicker-container .ngx-datepicker-calendar-container .main-calendar-container .main-calendar-days .day-unit:hover,.ngx-datepicker-container .ngx-datepicker-calendar-container .main-calendar-container .main-calendar-days .year-unit.is-today,.ngx-datepicker-container .ngx-datepicker-calendar-container .main-calendar-container .main-calendar-days .year-unit:hover,.ngx-datepicker-container .ngx-datepicker-calendar-container .main-calendar-container .main-calendar-years .day-unit.is-today,.ngx-datepicker-container .ngx-datepicker-calendar-container .main-calendar-container .main-calendar-years .day-unit:hover,.ngx-datepicker-container .ngx-datepicker-calendar-container .main-calendar-container .main-calendar-years .year-unit.is-today,.ngx-datepicker-container .ngx-datepicker-calendar-container .main-calendar-container .main-calendar-years .year-unit:hover{background:#a4a9b1;color:#fff}.ngx-datepicker-container .ngx-datepicker-calendar-container .main-calendar-container .main-calendar-days .day-unit.is-selected,.ngx-datepicker-container .ngx-datepicker-calendar-container .main-calendar-container .main-calendar-days .year-unit.is-selected,.ngx-datepicker-container .ngx-datepicker-calendar-container .main-calendar-container .main-calendar-years .day-unit.is-selected,.ngx-datepicker-container .ngx-datepicker-calendar-container .main-calendar-container .main-calendar-years .year-unit.is-selected{background:#1a91eb;color:#fff}.ngx-datepicker-container .ngx-datepicker-calendar-container .main-calendar-container .main-calendar-years{height:210px;display:block;padding:0}.ngx-datepicker-container .ngx-datepicker-calendar-container .main-calendar-container .main-calendar-years .year-unit{width:33.33333%;border-radius:10px}",""])},function(e,t){function n(e,t){var n=e[1]||"",a=e[3];if(!a)return n;if(t&&"function"==typeof btoa){var i=r(a);return[n].concat(a.sources.map(function(e){return"/*# sourceURL="+a.sourceRoot+e+" */"})).concat([i]).join("\n")}return[n].join("\n")}function r(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=n(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},a=0;a<this.length;a++){var i=this[a][0];"number"==typeof i&&(r[i]=!0)}for(a=0;a<e.length;a++){var o=e[a];"number"==typeof o[0]&&r[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),t.push(o))}},t}},function(e,t,n){"use strict";var r=this&&this.__decorate||function(e,t,n,r){var a,i=arguments.length,o=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(o=(i<3?a(o):i>3?a(t,n,o):a(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};Object.defineProperty(t,"__esModule",{value:!0});var a=n(8),i=n(170),o=n(24),s=n(171),u=n(23),c=function(){function e(){}return e=r([a.NgModule({declarations:[u.NgDatepickerComponent],imports:[i.CommonModule,o.FormsModule,s.NgSlimScrollModule],exports:[u.NgDatepickerComponent,i.CommonModule,o.FormsModule,s.NgSlimScrollModule]})],e)}();t.NgDatepickerModule=c},function(e,t){e.exports=n},function(e,t,n){"use strict";function r(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}Object.defineProperty(t,"__esModule",{value:!0});var a=n(172);t.NgSlimScrollModule=a.NgSlimScrollModule,r(n(60)),r(n(180))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(8),a=n(173),i=function(){function e(){}return e.decorators=[{type:r.NgModule,args:[{declarations:[a.SlimScrollDirective],exports:[a.SlimScrollDirective]}]}],e.ctorParameters=function(){return[]},e}();t.NgSlimScrollModule=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(8),a=n(60),i=n(174);n(175),n(176),n(177),n(178),n(179),t.easing={linear:function(e){return e},inQuad:function(e){return e*e},outQuad:function(e){return e*(2-e)},inOutQuad:function(e){return e<.5?2*e*e:(4-2*e)*e-1},inCubic:function(e){return e*e*e},outCubic:function(e){return--e*e*e+1},inOutCubic:function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},inQuart:function(e){return e*e*e*e},outQuart:function(e){return 1- --e*e*e*e},inOutQuart:function(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e},inQuint:function(e){return e*e*e*e*e},outQuint:function(e){return 1+--e*e*e*e*e},inOutQuint:function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e}};var o=function(){function e(e,t){var n=this;this.viewContainer=e,this.renderer=t,this.initWheel=function(){var e=i.Observable.fromEvent(n.el,"DOMMouseScroll"),t=i.Observable.fromEvent(n.el,"mousewheel");i.Observable.merge.apply(i.Observable,[e,t]).subscribe(function(e){var t=0;e.wheelDelta&&(t=-e.wheelDelta/120),e.detail&&(t=e.detail/3),n.scrollContent(t,!0,!1),e.preventDefault&&e.preventDefault()})},this.initDrag=function(){var e=n.bar,t=i.Observable.fromEvent(document.documentElement,"mousemove"),r=i.Observable.fromEvent(document.documentElement,"touchmove"),a=i.Observable.fromEvent(e,"mousedown"),o=i.Observable.fromEvent(n.el,"touchstart"),s=i.Observable.fromEvent(document.documentElement,"mouseup"),u=i.Observable.fromEvent(document.documentElement,"touchend"),c=a.mergeMap(function(r){return n.pageY=r.pageY,n.top=parseFloat(getComputedStyle(e).top),t.map(function(e){return e.preventDefault(),n.top+e.pageY-n.pageY}).takeUntil(s)}),l=o.mergeMap(function(t){return n.pageY=t.targetTouches[0].pageY,n.top=-parseFloat(getComputedStyle(e).top),r.map(function(e){return-(n.top+e.targetTouches[0].pageY-n.pageY)}).takeUntil(u)});i.Observable.merge.apply(i.Observable,[c,l]).subscribe(function(e){n.body.addEventListener("selectstart",n.preventDefaultEvent,!1),n.renderer.setElementStyle(n.body,"touch-action","pan-y"),n.renderer.setElementStyle(n.body,"user-select","none"),n.renderer.setElementStyle(n.bar,"top",e+"px");var t=n.scrollContent(0,!0,!1),r=n.el.offsetHeight-n.bar.offsetHeight;t&&t<0&&-t<=r?n.renderer.setElementStyle(n.el,"paddingTop",-t+"px"):t&&t>0&&t<=r&&n.renderer.setElementStyle(n.el,"paddingBottom",t+"px")}),i.Observable.merge.apply(i.Observable,[s,u]).subscribe(function(){n.body.removeEventListener("selectstart",n.preventDefaultEvent,!1);var e=parseInt(n.el.style.paddingTop,10),t=parseInt(n.el.style.paddingBottom,10);n.renderer.setElementStyle(n.body,"touch-action","unset"),n.renderer.setElementStyle(n.body,"user-select","default"),e>0?n.scrollTo(0,300,"linear"):t>0&&n.scrollTo(0,300,"linear")})},this.preventDefaultEvent=function(e){e.preventDefault(),e.stopPropagation()},"undefined"!=typeof window&&(this.viewContainer=e,this.el=e.element.nativeElement,this.body=document.documentElement.querySelector("body"),this.mutationThrottleTimeout=50)}return e.prototype.ngOnInit=function(){var e=this;"undefined"!=typeof window&&(this.options=new a.SlimScrollOptions(this.options),this.destroy(),this.setElementStyle(),this.wrapContainer(),this.initGrid(),this.initBar(),this.getBarHeight(),this.initWheel(),this.initDrag(),this.options.alwaysVisible||this.hideBarAndGrid(),MutationObserver&&(this.mutationObserver=new MutationObserver(function(){e.mutationThrottleTimeout&&(clearTimeout(e.mutationThrottleTimeout),e.mutationThrottleTimeout=setTimeout(e.onMutation.bind(e),50))}),this.mutationObserver.observe(this.el,{subtree:!0,childList:!0})),this.scrollEvents&&this.scrollEvents instanceof r.EventEmitter&&this.scrollEvents.subscribe(function(t){return e.handleEvent(t)}))},e.prototype.handleEvent=function(e){if("scrollToBottom"===e.type){var t=this.el.scrollHeight-this.el.clientHeight;this.scrollTo(t,e.duration,e.easing)}else if("scrollToTop"===e.type){var t=0;this.scrollTo(t,e.duration,e.easing)}else if("scrollToPercent"===e.type&&e.percent>=0&&e.percent<=100){var t=Math.round((this.el.scrollHeight-this.el.clientHeight)/100*e.percent);this.scrollTo(t,e.duration,e.easing)}else if("scrollTo"===e.type){var t=e.y;t<=this.el.scrollHeight-this.el.clientHeight&&t>=0&&this.scrollTo(t,e.duration,e.easing)}else"recalculate"===e.type&&this.getBarHeight()},e.prototype.setElementStyle=function(){var e=this.el;this.renderer.setElementStyle(e,"overflow","hidden"),this.renderer.setElementStyle(e,"position","relative"),this.renderer.setElementStyle(e,"display","block")},e.prototype.onMutation=function(){this.getBarHeight()},e.prototype.wrapContainer=function(){this.wrapper=document.createElement("div");var e=this.wrapper,t=this.el;this.renderer.setElementClass(e,"slimscroll-wrapper",!0),this.renderer.setElementStyle(e,"position","relative"),this.renderer.setElementStyle(e,"overflow","hidden"),this.renderer.setElementStyle(e,"display","inline-block"),this.renderer.setElementStyle(e,"margin",getComputedStyle(t).margin),this.renderer.setElementStyle(e,"width","100%"),this.renderer.setElementStyle(e,"height",getComputedStyle(t).height),t.parentNode.insertBefore(e,t),e.appendChild(t)},e.prototype.initGrid=function(){this.grid=document.createElement("div");var e=this.grid;this.renderer.setElementClass(e,"slimscroll-grid",!0),this.renderer.setElementStyle(e,"position","absolute"),this.renderer.setElementStyle(e,"top","0"),this.renderer.setElementStyle(e,"bottom","0"),this.renderer.setElementStyle(e,this.options.position,"0"),this.renderer.setElementStyle(e,"width",this.options.gridWidth+"px"),this.renderer.setElementStyle(e,"background",this.options.gridBackground),this.renderer.setElementStyle(e,"opacity",this.options.gridOpacity),this.renderer.setElementStyle(e,"display","block"),this.renderer.setElementStyle(e,"cursor","pointer"),this.renderer.setElementStyle(e,"z-index","99"),this.renderer.setElementStyle(e,"border-radius",this.options.gridBorderRadius+"px"),this.renderer.setElementStyle(e,"margin",this.options.gridMargin),this.wrapper.appendChild(e)},e.prototype.initBar=function(){this.bar=document.createElement("div");var e=this.bar;this.renderer.setElementClass(e,"slimscroll-bar",!0),this.renderer.setElementStyle(e,"position","absolute"),this.renderer.setElementStyle(e,"top","0"),this.renderer.setElementStyle(e,this.options.position,"0"),this.renderer.setElementStyle(e,"width",this.options.barWidth+"px"),this.renderer.setElementStyle(e,"background",this.options.barBackground),this.renderer.setElementStyle(e,"opacity",this.options.barOpacity),this.renderer.setElementStyle(e,"display","block"),this.renderer.setElementStyle(e,"cursor","pointer"),this.renderer.setElementStyle(e,"z-index","100"),this.renderer.setElementStyle(e,"border-radius",this.options.barBorderRadius+"px"),this.renderer.setElementStyle(e,"margin",this.options.barMargin),this.wrapper.appendChild(e)},e.prototype.getBarHeight=function(){var e=this;setTimeout(function(){var t=Math.max(e.el.offsetHeight/e.el.scrollHeight*e.el.offsetHeight,30)+"px",n=parseInt(t,10)===e.el.offsetHeight?"none":"block";e.renderer.setElementStyle(e.bar,"height",t),e.renderer.setElementStyle(e.bar,"display",n),e.renderer.setElementStyle(e.grid,"display",n)})},e.prototype.scrollTo=function(e,n,r){var a=this,i=Date.now(),o=this.el.scrollTop,s=(this.el.offsetHeight,this.bar.offsetHeight,this.el.scrollHeight-this.el.clientHeight),u=Math.max(this.el.offsetHeight/this.el.scrollHeight*this.el.offsetHeight,30),c=parseInt(this.el.style.paddingTop,10)||0,l=parseInt(this.el.style.paddingBottom,10)||0,d=function(f){var p=Date.now(),g=Math.min(1,(p-i)/n),h=t.easing[r](g);if(c>0||l>0){var m=null;c>0&&(m=-c,m=-(h*(e-m)+m),a.renderer.setElementStyle(a.el,"paddingTop",m+"px")),l>0&&(m=l,m=h*(e-m)+m,a.renderer.setElementStyle(a.el,"paddingBottom",m+"px"))}else a.el.scrollTop=h*(e-o)+o;var v=a.el.scrollTop/s;if(0===l){var y=Math.round(Math.round(a.el.clientHeight*v)-u);y>0&&a.renderer.setElementStyle(a.bar,"top",y+"px")}g<1&&requestAnimationFrame(d)};requestAnimationFrame(d)},e.prototype.scrollContent=function(e,t,n){var r,a=this,i=e,o=this.el.offsetHeight-this.bar.offsetHeight,s=this.bar,u=(this.grid,this.el),c=null;return t&&(i=parseInt(getComputedStyle(s).top,10)+20*e/100*s.offsetHeight,(i<0||i>o)&&(c=i>o?i-o:i),i=Math.min(Math.max(i,0),o),i=e>0?Math.ceil(i):Math.floor(i),this.renderer.setElementStyle(s,"top",i+"px")),r=parseInt(getComputedStyle(s).top,10)/(u.offsetHeight-s.offsetHeight),i=r*(u.scrollHeight-u.offsetHeight),u.scrollTop=i,this.showBarAndGrid(),this.options.alwaysVisible||(this.visibleTimeout&&clearTimeout(this.visibleTimeout),this.visibleTimeout=setTimeout(function(){a.hideBarAndGrid()},this.options.visibleTimeout)),c},e.prototype.showBarAndGrid=function(){this.renderer.setElementStyle(this.grid,"background",this.options.gridBackground),this.renderer.setElementStyle(this.bar,"background",this.options.barBackground)},e.prototype.hideBarAndGrid=function(){this.renderer.setElementStyle(this.grid,"background","transparent"),this.renderer.setElementStyle(this.bar,"background","transparent")},e.prototype.destroy=function(){if(this.mutationObserver&&(this.mutationObserver.disconnect(),this.mutationObserver=null),this.el.parentElement.classList.contains("slimscroll-wrapper")){var e=this.el.parentElement,t=this.el.querySelector(".slimscroll-bar");this.el.removeChild(t),this.unwrap(e)}},e.prototype.unwrap=function(e){for(var t=document.createDocumentFragment();e.firstChild;){var n=e.removeChild(e.firstChild);t.appendChild(n)}e.parentNode.replaceChild(t,e)},e.prototype.onResize=function(e){this.getBarHeight()},e.decorators=[{type:r.Directive,args:[{selector:"[slimScroll]",exportAs:"slimScroll"}]}],e.ctorParameters=function(){return[{type:r.ViewContainerRef,decorators:[{type:r.Inject,args:[r.ViewContainerRef]}]},{type:r.Renderer,decorators:[{type:r.Inject,args:[r.Renderer]}]}]},e.propDecorators={options:[{type:r.Input}],scrollEvents:[{type:r.Input}],onResize:[{type:r.HostListener,args:["window:resize",["$event"]]}]},e}();t.SlimScrollDirective=o},function(e,t){e.exports=r},function(e,t){e.exports=a},function(e,t){e.exports=i},function(e,t){e.exports=o},function(e,t){e.exports=s},function(e,t){e.exports=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e){this.type=e.type,this.y=e&&e.y?e.y:0,this.percent=e&&e.percent?e.percent:0,this.duration=e&&e.duration?e.duration:0,this.easing=e&&e.easing?e.easing:"linear"}return e}();t.SlimScrollEvent=r}])});
//# sourceMappingURL=ng2-datepicker.umd.js.map

/***/ }),

/***/ "../../../../ng2-nouislider/src/nouislider.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var noUiSlider = __webpack_require__("../../../../nouislider/distribute/nouislider.js");
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var forms_1 = __webpack_require__("../../../forms/@angular/forms.es5.js");
var DefaultFormatter = (function () {
    function DefaultFormatter() {
    }
    DefaultFormatter.prototype.to = function (value) {
        // formatting with http://stackoverflow.com/a/26463364/478584
        return String(parseFloat(parseFloat(String(value)).toFixed(2)));
    };
    ;
    DefaultFormatter.prototype.from = function (value) {
        return parseFloat(value);
    };
    return DefaultFormatter;
}());
exports.DefaultFormatter = DefaultFormatter;
var NouisliderComponent = (function () {
    function NouisliderComponent(el) {
        var _this = this;
        this.el = el;
        this.config = {};
        this.change = new core_1.EventEmitter(true);
        this.update = new core_1.EventEmitter(true);
        this.slide = new core_1.EventEmitter(true);
        this.set = new core_1.EventEmitter(true);
        this.start = new core_1.EventEmitter(true);
        this.end = new core_1.EventEmitter(true);
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this.eventHandler = function (emitter, values, handle, unencoded) {
            var v = _this.toValues(values);
            var emitEvents = false;
            if (_this.value === undefined) {
                _this.value = v;
                return;
            }
            if (Array.isArray(v) && _this.value[handle] != v[handle]) {
                emitEvents = true;
            }
            if (!Array.isArray(v) && _this.value != v) {
                emitEvents = true;
            }
            if (emitEvents) {
                emitter.emit(v);
                _this.onChange(v);
            }
            if (Array.isArray(v)) {
                _this.value[handle] = v[handle];
            }
            else {
                _this.value = v;
            }
        };
        this.defaultKeyHandler = function (e) {
            var stepSize = _this.slider.steps();
            var index = parseInt(e.target.getAttribute('data-handle'));
            var sign = 1;
            var multiplier = 1;
            var step = 0;
            var delta = 0;
            switch (e.which) {
                case 34:
                    multiplier = _this.config.pageSteps;
                case 40: // ArrowDown
                case 37:
                    sign = -1;
                    step = stepSize[index][0];
                    e.preventDefault();
                    break;
                case 33:
                    multiplier = _this.config.pageSteps;
                case 38: // ArrowUp
                case 39:
                    step = stepSize[index][1];
                    e.preventDefault();
                    break;
                default:
                    break;
            }
            delta = sign * multiplier * step;
            var newValue;
            if (Array.isArray(_this.value)) {
                newValue = [].concat(_this.value);
                newValue[index] = newValue[index] + delta;
            }
            else {
                newValue = _this.value + delta;
            }
            _this.slider.set(newValue);
        };
    }
    NouisliderComponent.prototype.ngOnInit = function () {
        var _this = this;
        var inputsConfig = JSON.parse(JSON.stringify({
            behaviour: this.behaviour,
            connect: this.connect,
            limit: this.limit,
            start: this.formControl !== undefined ? this.formControl.value : this.ngModel,
            step: this.step,
            pageSteps: this.pageSteps,
            keyboard: this.keyboard,
            onKeydown: this.onKeydown,
            range: this.config.range || { min: this.min, max: this.max },
            tooltips: this.tooltips,
        }));
        inputsConfig.format = this.format || this.config.format || new DefaultFormatter();
        this.slider = noUiSlider.create(this.el.nativeElement.querySelector('div'), Object.assign(this.config, inputsConfig));
        this.handles = [].slice.call(this.el.nativeElement.querySelectorAll('.noUi-handle'));
        if (this.config.keyboard) {
            if (this.config.pageSteps === undefined) {
                this.config.pageSteps = 10;
            }
            var _loop_1 = function (handle) {
                handle.setAttribute('tabindex', 0);
                handle.addEventListener('click', function () {
                    handle.focus();
                });
                if (this_1.config.onKeydown === undefined) {
                    handle.addEventListener('keydown', this_1.defaultKeyHandler);
                }
                else {
                    handle.addEventListener('keydown', this_1.config.onKeydown);
                }
            };
            var this_1 = this;
            for (var _i = 0, _a = this.handles; _i < _a.length; _i++) {
                var handle = _a[_i];
                _loop_1(handle);
            }
        }
        this.slider.on('set', function (values, handle, unencoded) {
            _this.eventHandler(_this.set, values, handle, unencoded);
        });
        this.slider.on('update', function (values, handle, unencoded) {
            _this.update.emit(_this.toValues(values));
        });
        this.slider.on('change', function (values, handle, unencoded) {
            _this.change.emit(_this.toValues(values));
        });
        this.slider.on('slide', function (values, handle, unencoded) {
            _this.eventHandler(_this.slide, values, handle, unencoded);
        });
        this.slider.on('start', function (values, handle, unencoded) {
            _this.start.emit(_this.toValues(values));
        });
        this.slider.on('end', function (values, handle, unencoded) {
            _this.end.emit(_this.toValues(values));
        });
    };
    NouisliderComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (this.slider && (changes.min || changes.max || changes.step)) {
            setTimeout(function () {
                _this.slider.updateOptions({
                    range: {
                        min: _this.min,
                        max: _this.max
                    },
                    step: _this.step
                });
            });
        }
    };
    NouisliderComponent.prototype.toValues = function (values) {
        var v = values.map(this.config.format.from);
        return (v.length == 1 ? v[0] : v);
    };
    NouisliderComponent.prototype.writeValue = function (value) {
        if (this.slider) {
            this.slider.set(value);
        }
    };
    NouisliderComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    NouisliderComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    return NouisliderComponent;
}());
NouisliderComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'nouislider',
                host: {
                    '[class.ng2-nouislider]': 'true'
                },
                template: '<div [attr.disabled]="disabled ? true : undefined"></div>',
                styles: ["\n    :host {\n      display: block;\n      margin-top: 1rem;\n      margin-bottom: 1rem;\n    }\n  "],
                providers: [
                    {
                        provide: forms_1.NG_VALUE_ACCESSOR,
                        useExisting: core_1.forwardRef(function () { return NouisliderComponent; }),
                        multi: true
                    }
                ]
            },] },
];
/** @nocollapse */
NouisliderComponent.ctorParameters = function () { return [
    { type: core_1.ElementRef, },
]; };
NouisliderComponent.propDecorators = {
    'disabled': [{ type: core_1.Input },],
    'behaviour': [{ type: core_1.Input },],
    'connect': [{ type: core_1.Input },],
    'limit': [{ type: core_1.Input },],
    'min': [{ type: core_1.Input },],
    'max': [{ type: core_1.Input },],
    'step': [{ type: core_1.Input },],
    'format': [{ type: core_1.Input },],
    'pageSteps': [{ type: core_1.Input },],
    'config': [{ type: core_1.Input },],
    'ngModel': [{ type: core_1.Input },],
    'keyboard': [{ type: core_1.Input },],
    'onKeydown': [{ type: core_1.Input },],
    'formControl': [{ type: core_1.Input },],
    'tooltips': [{ type: core_1.Input },],
    'change': [{ type: core_1.Output },],
    'update': [{ type: core_1.Output },],
    'slide': [{ type: core_1.Output },],
    'set': [{ type: core_1.Output },],
    'start': [{ type: core_1.Output },],
    'end': [{ type: core_1.Output },],
};
exports.NouisliderComponent = NouisliderComponent;
var NouisliderModule = (function () {
    function NouisliderModule() {
    }
    return NouisliderModule;
}());
NouisliderModule.decorators = [
    { type: core_1.NgModule, args: [{
                imports: [],
                exports: [NouisliderComponent],
                declarations: [NouisliderComponent],
            },] },
];
/** @nocollapse */
NouisliderModule.ctorParameters = function () { return []; };
exports.NouisliderModule = NouisliderModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdWlzbGlkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx1Q0FBeUM7QUFDekMsc0NBVXVCO0FBQ3ZCLHdDQUl3QjtBQU94QjtJQUFBO0lBU0EsQ0FBQztJQVJDLDZCQUFFLEdBQUYsVUFBRyxLQUFhO1FBQ2QsNkRBQTZEO1FBQzdELE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFBQSxDQUFDO0lBRUYsK0JBQUksR0FBSixVQUFLLEtBQWE7UUFDaEIsTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBQ0gsdUJBQUM7QUFBRCxDQVRBLEFBU0MsSUFBQTtBQVRZLDRDQUFnQjtBQVk3QjtJQTZCRSw2QkFBb0IsRUFBYztRQUFsQyxpQkFBdUM7UUFBbkIsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQWhCMUIsV0FBTSxHQUFRLEVBQUUsQ0FBQztRQU1qQixXQUFNLEdBQXNCLElBQUksbUJBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuRCxXQUFNLEdBQXNCLElBQUksbUJBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuRCxVQUFLLEdBQXNCLElBQUksbUJBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsRCxRQUFHLEdBQXNCLElBQUksbUJBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoRCxVQUFLLEdBQXNCLElBQUksbUJBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsRCxRQUFHLEdBQXNCLElBQUksbUJBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVoRCxhQUFRLEdBQVEsUUFBUSxDQUFDLFNBQVMsQ0FBQztRQUNuQyxjQUFTLEdBQVEsUUFBUSxDQUFDLFNBQVMsQ0FBQztRQXNHcEMsaUJBQVksR0FBRyxVQUFDLE9BQTBCLEVBQUUsTUFBZ0IsRUFBRSxNQUFjLEVBQUUsU0FBbUI7WUFDdkcsSUFBSSxDQUFDLEdBQUcsS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM5QixJQUFJLFVBQVUsR0FBRyxLQUFLLENBQUM7WUFDdkIsRUFBRSxDQUFBLENBQUMsS0FBSSxDQUFDLEtBQUssS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUM1QixLQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztnQkFDZixNQUFNLENBQUM7WUFDVCxDQUFDO1lBQ0QsRUFBRSxDQUFBLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZELFVBQVUsR0FBRyxJQUFJLENBQUM7WUFDcEIsQ0FBQztZQUNELEVBQUUsQ0FBQSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hDLFVBQVUsR0FBRyxJQUFJLENBQUM7WUFDcEIsQ0FBQztZQUNELEVBQUUsQ0FBQSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7Z0JBQ2QsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDaEIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuQixDQUFDO1lBQ0QsRUFBRSxDQUFBLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BCLEtBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2pDLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixLQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztZQUNqQixDQUFDO1FBQ0gsQ0FBQyxDQUFBO1FBRU8sc0JBQWlCLEdBQUcsVUFBQyxDQUFnQjtZQUMzQyxJQUFJLFFBQVEsR0FBVSxLQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQzFDLElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBZSxDQUFDLENBQUMsTUFBTyxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1lBQzFFLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQztZQUNiLElBQUksVUFBVSxHQUFXLENBQUMsQ0FBQztZQUMzQixJQUFJLElBQUksR0FBRyxDQUFDLENBQUM7WUFDYixJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7WUFFZCxNQUFNLENBQUMsQ0FBRSxDQUFDLENBQUMsS0FBTSxDQUFDLENBQUMsQ0FBQztnQkFDbEIsS0FBSyxFQUFFO29CQUNMLFVBQVUsR0FBRyxLQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQztnQkFDckMsS0FBSyxFQUFFLENBQUMsQ0FBRSxZQUFZO2dCQUN0QixLQUFLLEVBQUU7b0JBQ0wsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUNWLElBQUksR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzFCLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztvQkFDbkIsS0FBSyxDQUFDO2dCQUVSLEtBQUssRUFBRTtvQkFDTCxVQUFVLEdBQUcsS0FBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7Z0JBQ3JDLEtBQUssRUFBRSxDQUFDLENBQUUsVUFBVTtnQkFDcEIsS0FBSyxFQUFFO29CQUNMLElBQUksR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzFCLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztvQkFDbkIsS0FBSyxDQUFDO2dCQUVSO29CQUNFLEtBQUssQ0FBQztZQUNWLENBQUM7WUFFRCxLQUFLLEdBQUcsSUFBSSxHQUFHLFVBQVUsR0FBRyxJQUFJLENBQUM7WUFDakMsSUFBSSxRQUEyQixDQUFDO1lBRWhDLEVBQUUsQ0FBQSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDN0IsUUFBUSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNqQyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQztZQUM1QyxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sUUFBUSxHQUFHLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQ2hDLENBQUM7WUFFRCxLQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM1QixDQUFDLENBQUE7SUFyS3FDLENBQUM7SUFFdkMsc0NBQVEsR0FBUjtRQUFBLGlCQStEQztRQTlEQyxJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDM0MsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztZQUNyQixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsS0FBSyxFQUFFLElBQUksQ0FBQyxXQUFXLEtBQUssU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPO1lBQzdFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDdkIsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssSUFBSSxFQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFDO1lBQzFELFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtTQUN4QixDQUFDLENBQUMsQ0FBQztRQUVKLFlBQVksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sSUFBSSxJQUFJLGdCQUFnQixFQUFFLENBQUM7UUFFbEYsSUFBSSxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUMsTUFBTSxDQUM3QixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEVBQzFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxZQUFZLENBQUMsQ0FDekMsQ0FBQztRQUVGLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztRQUVyRixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDeEIsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDdkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1lBQzdCLENBQUM7b0NBQ08sTUFBTTtnQkFDWixNQUFNLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDbkMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtvQkFDL0IsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUNqQixDQUFDLENBQUMsQ0FBQztnQkFDSCxFQUFFLENBQUEsQ0FBQyxPQUFLLE1BQU0sQ0FBQyxTQUFTLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztvQkFDdkMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxPQUFLLGlCQUFpQixDQUFDLENBQUM7Z0JBQzdELENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ04sTUFBTSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxPQUFLLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDNUQsQ0FBQztZQUNILENBQUM7O1lBVkQsR0FBRyxDQUFBLENBQWUsVUFBWSxFQUFaLEtBQUEsSUFBSSxDQUFDLE9BQU8sRUFBWixjQUFZLEVBQVosSUFBWTtnQkFBMUIsSUFBSSxNQUFNLFNBQUE7d0JBQU4sTUFBTTthQVViO1FBQ0gsQ0FBQztRQUVELElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxVQUFDLE1BQWdCLEVBQUUsTUFBYyxFQUFFLFNBQW1CO1lBQzFFLEtBQUksQ0FBQyxZQUFZLENBQUMsS0FBSSxDQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ3pELENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLFVBQUMsTUFBZ0IsRUFBRSxNQUFjLEVBQUUsU0FBbUI7WUFDN0UsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQzFDLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLFVBQUMsTUFBZ0IsRUFBRSxNQUFjLEVBQUUsU0FBbUI7WUFDN0UsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQzFDLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLFVBQUMsTUFBZ0IsRUFBRSxNQUFjLEVBQUUsU0FBbUI7WUFDNUUsS0FBSSxDQUFDLFlBQVksQ0FBQyxLQUFJLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDM0QsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBQyxNQUFnQixFQUFFLE1BQWMsRUFBRSxTQUFtQjtZQUM1RSxLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDekMsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsVUFBQyxNQUFnQixFQUFFLE1BQWMsRUFBRSxTQUFtQjtZQUMxRSxLQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDdkMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQseUNBQVcsR0FBWCxVQUFZLE9BQVk7UUFBeEIsaUJBWUM7UUFYQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsSUFBSSxPQUFPLENBQUMsR0FBRyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEUsVUFBVSxDQUFDO2dCQUNULEtBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDO29CQUN4QixLQUFLLEVBQUU7d0JBQ0wsR0FBRyxFQUFFLEtBQUksQ0FBQyxHQUFHO3dCQUNiLEdBQUcsRUFBRSxLQUFJLENBQUMsR0FBRztxQkFDZDtvQkFDRCxJQUFJLEVBQUUsS0FBSSxDQUFDLElBQUk7aUJBQ2hCLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztJQUNILENBQUM7SUFFRCxzQ0FBUSxHQUFSLFVBQVMsTUFBZ0I7UUFDdkIsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1QyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELHdDQUFVLEdBQVYsVUFBVyxLQUFVO1FBQ25CLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ2hCLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pCLENBQUM7SUFDSCxDQUFDO0lBRUQsOENBQWdCLEdBQWhCLFVBQWlCLEVBQXdCO1FBQ3ZDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCwrQ0FBaUIsR0FBakIsVUFBa0IsRUFBWTtRQUM1QixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBc0hILDBCQUFDO0FBQUQsQ0FyUEEsQUFxUEM7QUFsRE0sOEJBQVUsR0FBMEI7SUFDM0MsRUFBRSxJQUFJLEVBQUUsZ0JBQVMsRUFBRSxJQUFJLEVBQUUsQ0FBQztnQkFDeEIsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLElBQUksRUFBRTtvQkFDSix3QkFBd0IsRUFBRSxNQUFNO2lCQUNqQztnQkFDRCxRQUFRLEVBQUUsMkRBQTJEO2dCQUNyRSxNQUFNLEVBQUUsQ0FBQyxzR0FNUixDQUFDO2dCQUNGLFNBQVMsRUFBRTtvQkFDVDt3QkFDRSxPQUFPLEVBQUUseUJBQWlCO3dCQUMxQixXQUFXLEVBQUUsaUJBQVUsQ0FBQyxjQUFNLE9BQUEsbUJBQW1CLEVBQW5CLENBQW1CLENBQUM7d0JBQ2xELEtBQUssRUFBRSxJQUFJO3FCQUNaO2lCQUNGO2FBQ0YsRUFBRyxFQUFFO0NBQ0wsQ0FBQztBQUNGLGtCQUFrQjtBQUNYLGtDQUFjLEdBQW1FLGNBQU0sT0FBQTtJQUM5RixFQUFDLElBQUksRUFBRSxpQkFBVSxHQUFHO0NBQ25CLEVBRjZGLENBRTdGLENBQUM7QUFDSyxrQ0FBYyxHQUEyQztJQUNoRSxVQUFVLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxZQUFLLEVBQUUsRUFBRTtJQUM5QixXQUFXLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxZQUFLLEVBQUUsRUFBRTtJQUMvQixTQUFTLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxZQUFLLEVBQUUsRUFBRTtJQUM3QixPQUFPLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxZQUFLLEVBQUUsRUFBRTtJQUMzQixLQUFLLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxZQUFLLEVBQUUsRUFBRTtJQUN6QixLQUFLLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxZQUFLLEVBQUUsRUFBRTtJQUN6QixNQUFNLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxZQUFLLEVBQUUsRUFBRTtJQUMxQixRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxZQUFLLEVBQUUsRUFBRTtJQUM1QixXQUFXLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxZQUFLLEVBQUUsRUFBRTtJQUMvQixRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxZQUFLLEVBQUUsRUFBRTtJQUM1QixTQUFTLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxZQUFLLEVBQUUsRUFBRTtJQUM3QixVQUFVLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxZQUFLLEVBQUUsRUFBRTtJQUM5QixXQUFXLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxZQUFLLEVBQUUsRUFBRTtJQUMvQixhQUFhLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxZQUFLLEVBQUUsRUFBRTtJQUNqQyxVQUFVLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxZQUFLLEVBQUUsRUFBRTtJQUM5QixRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxhQUFNLEVBQUUsRUFBRTtJQUM3QixRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxhQUFNLEVBQUUsRUFBRTtJQUM3QixPQUFPLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxhQUFNLEVBQUUsRUFBRTtJQUM1QixLQUFLLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxhQUFNLEVBQUUsRUFBRTtJQUMxQixPQUFPLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxhQUFNLEVBQUUsRUFBRTtJQUM1QixLQUFLLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxhQUFNLEVBQUUsRUFBRTtDQUN6QixDQUFDO0FBcFBXLGtEQUFtQjtBQXlQaEM7SUFBQTtJQVVBLENBQUM7SUFBRCx1QkFBQztBQUFELENBVkEsQUFVQztBQVZzQywyQkFBVSxHQUEwQjtJQUMzRSxFQUFFLElBQUksRUFBRSxlQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7Z0JBQ3ZCLE9BQU8sRUFBRSxFQUFFO2dCQUNYLE9BQU8sRUFBRSxDQUFDLG1CQUFtQixDQUFDO2dCQUM5QixZQUFZLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQzthQUNwQyxFQUFHLEVBQUU7Q0FDTCxDQUFDO0FBQ0Ysa0JBQWtCO0FBQ1gsK0JBQWMsR0FBbUUsY0FBTSxPQUFBLEVBQzdGLEVBRDZGLENBQzdGLENBQUM7QUFUVyw0Q0FBZ0IiLCJmaWxlIjoibm91aXNsaWRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBub1VpU2xpZGVyIGZyb20gJ25vdWlzbGlkZXInO1xuaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIGZvcndhcmRSZWYsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIE9uQ2hhbmdlcyxcbiAgT3V0cHV0LFxuICBOZ01vZHVsZSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDb250cm9sVmFsdWVBY2Nlc3NvcixcbiAgRm9ybUNvbnRyb2wsXG4gIE5HX1ZBTFVFX0FDQ0VTU09SXG59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuZXhwb3J0IGludGVyZmFjZSBOb3VpRm9ybWF0dGVyIHtcbiAgdG8odmFsdWU6IG51bWJlcik6IHN0cmluZztcbiAgZnJvbSh2YWx1ZTogc3RyaW5nKTogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgRGVmYXVsdEZvcm1hdHRlciBpbXBsZW1lbnRzIE5vdWlGb3JtYXR0ZXIge1xuICB0byh2YWx1ZTogbnVtYmVyKTogc3RyaW5nIHtcbiAgICAvLyBmb3JtYXR0aW5nIHdpdGggaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY0NjMzNjQvNDc4NTg0XG4gICAgcmV0dXJuIFN0cmluZyhwYXJzZUZsb2F0KHBhcnNlRmxvYXQoU3RyaW5nKHZhbHVlKSkudG9GaXhlZCgyKSkpO1xuICB9O1xuXG4gIGZyb20odmFsdWU6IHN0cmluZyk6IG51bWJlciB7XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQodmFsdWUpO1xuICB9XG59XG5cblxuZXhwb3J0IGNsYXNzIE5vdWlzbGlkZXJDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0LCBPbkNoYW5nZXMge1xuXG4gIHB1YmxpYyBzbGlkZXI6IGFueTtcbiAgcHVibGljIGhhbmRsZXM6IGFueVtdO1xuICAgcHVibGljIGRpc2FibGVkOiBib29sZWFuOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gICBwdWJsaWMgYmVoYXZpb3VyOiBzdHJpbmc7XG4gICBwdWJsaWMgY29ubmVjdDogYm9vbGVhbltdO1xuICAgcHVibGljIGxpbWl0OiBudW1iZXI7XG4gICBwdWJsaWMgbWluOiBudW1iZXI7XG4gICBwdWJsaWMgbWF4OiBudW1iZXI7XG4gICBwdWJsaWMgc3RlcDogbnVtYmVyO1xuICAgcHVibGljIGZvcm1hdDogTm91aUZvcm1hdHRlcjtcbiAgIHB1YmxpYyBwYWdlU3RlcHM6IG51bWJlcjtcbiAgIHB1YmxpYyBjb25maWc6IGFueSA9IHt9O1xuICAgcHVibGljIG5nTW9kZWw6IG51bWJlciB8IG51bWJlcltdO1xuICAgcHVibGljIGtleWJvYXJkOiBib29sZWFuO1xuICAgcHVibGljIG9uS2V5ZG93bjogYW55O1xuICAgcHVibGljIGZvcm1Db250cm9sOiBGb3JtQ29udHJvbDtcbiAgIHB1YmxpYyB0b29sdGlwczogQXJyYXk8YW55PjtcbiAgIHB1YmxpYyBjaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcih0cnVlKTtcbiAgIHB1YmxpYyB1cGRhdGU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcih0cnVlKTtcbiAgIHB1YmxpYyBzbGlkZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKHRydWUpO1xuICAgcHVibGljIHNldDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKHRydWUpO1xuICAgcHVibGljIHN0YXJ0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIodHJ1ZSk7XG4gICBwdWJsaWMgZW5kOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIodHJ1ZSk7XG4gIHByaXZhdGUgdmFsdWU6IGFueTtcbiAgcHJpdmF0ZSBvbkNoYW5nZTogYW55ID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuICBwcml2YXRlIG9uVG91Y2hlZDogYW55ID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGxldCBpbnB1dHNDb25maWcgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIGJlaGF2aW91cjogdGhpcy5iZWhhdmlvdXIsXG4gICAgICBjb25uZWN0OiB0aGlzLmNvbm5lY3QsXG4gICAgICBsaW1pdDogdGhpcy5saW1pdCxcbiAgICAgIHN0YXJ0OiB0aGlzLmZvcm1Db250cm9sICE9PSB1bmRlZmluZWQgPyB0aGlzLmZvcm1Db250cm9sLnZhbHVlIDogdGhpcy5uZ01vZGVsLFxuICAgICAgc3RlcDogdGhpcy5zdGVwLFxuICAgICAgcGFnZVN0ZXBzOiB0aGlzLnBhZ2VTdGVwcyxcbiAgICAgIGtleWJvYXJkOiB0aGlzLmtleWJvYXJkLFxuICAgICAgb25LZXlkb3duOiB0aGlzLm9uS2V5ZG93bixcbiAgICAgIHJhbmdlOiB0aGlzLmNvbmZpZy5yYW5nZSB8fCB7bWluOiB0aGlzLm1pbiwgbWF4OiB0aGlzLm1heH0sXG4gICAgICB0b29sdGlwczogdGhpcy50b29sdGlwcyxcbiAgICB9KSk7XG5cbiAgICBpbnB1dHNDb25maWcuZm9ybWF0ID0gdGhpcy5mb3JtYXQgfHwgdGhpcy5jb25maWcuZm9ybWF0IHx8IG5ldyBEZWZhdWx0Rm9ybWF0dGVyKCk7XG5cbiAgICB0aGlzLnNsaWRlciA9IG5vVWlTbGlkZXIuY3JlYXRlKFxuICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpdicpLFxuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLmNvbmZpZywgaW5wdXRzQ29uZmlnKVxuICAgICk7XG5cbiAgICB0aGlzLmhhbmRsZXMgPSBbXS5zbGljZS5jYWxsKHRoaXMuZWwubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubm9VaS1oYW5kbGUnKSk7XG5cbiAgICBpZih0aGlzLmNvbmZpZy5rZXlib2FyZCkge1xuICAgICAgaWYodGhpcy5jb25maWcucGFnZVN0ZXBzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5jb25maWcucGFnZVN0ZXBzID0gMTA7XG4gICAgICB9XG4gICAgICBmb3IobGV0IGhhbmRsZSBvZiB0aGlzLmhhbmRsZXMpIHtcbiAgICAgICAgaGFuZGxlLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAwKTtcbiAgICAgICAgaGFuZGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgIGhhbmRsZS5mb2N1cygpO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYodGhpcy5jb25maWcub25LZXlkb3duID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBoYW5kbGUuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuZGVmYXVsdEtleUhhbmRsZXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGhhbmRsZS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5jb25maWcub25LZXlkb3duKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuc2xpZGVyLm9uKCdzZXQnLCAodmFsdWVzOiBzdHJpbmdbXSwgaGFuZGxlOiBudW1iZXIsIHVuZW5jb2RlZDogbnVtYmVyW10pID0+IHtcbiAgICAgIHRoaXMuZXZlbnRIYW5kbGVyKHRoaXMuc2V0LCB2YWx1ZXMsIGhhbmRsZSwgdW5lbmNvZGVkKTtcbiAgICB9KTtcblxuICAgIHRoaXMuc2xpZGVyLm9uKCd1cGRhdGUnLCAodmFsdWVzOiBzdHJpbmdbXSwgaGFuZGxlOiBudW1iZXIsIHVuZW5jb2RlZDogbnVtYmVyW10pID0+IHtcbiAgICAgIHRoaXMudXBkYXRlLmVtaXQodGhpcy50b1ZhbHVlcyh2YWx1ZXMpKTtcbiAgICB9KTtcblxuICAgIHRoaXMuc2xpZGVyLm9uKCdjaGFuZ2UnLCAodmFsdWVzOiBzdHJpbmdbXSwgaGFuZGxlOiBudW1iZXIsIHVuZW5jb2RlZDogbnVtYmVyW10pID0+IHtcbiAgICAgIHRoaXMuY2hhbmdlLmVtaXQodGhpcy50b1ZhbHVlcyh2YWx1ZXMpKTtcbiAgICB9KTtcblxuICAgIHRoaXMuc2xpZGVyLm9uKCdzbGlkZScsICh2YWx1ZXM6IHN0cmluZ1tdLCBoYW5kbGU6IG51bWJlciwgdW5lbmNvZGVkOiBudW1iZXJbXSkgPT4ge1xuICAgICAgdGhpcy5ldmVudEhhbmRsZXIodGhpcy5zbGlkZSwgdmFsdWVzLCBoYW5kbGUsIHVuZW5jb2RlZCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnNsaWRlci5vbignc3RhcnQnLCAodmFsdWVzOiBzdHJpbmdbXSwgaGFuZGxlOiBudW1iZXIsIHVuZW5jb2RlZDogbnVtYmVyW10pID0+IHtcbiAgICAgIHRoaXMuc3RhcnQuZW1pdCh0aGlzLnRvVmFsdWVzKHZhbHVlcykpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5zbGlkZXIub24oJ2VuZCcsICh2YWx1ZXM6IHN0cmluZ1tdLCBoYW5kbGU6IG51bWJlciwgdW5lbmNvZGVkOiBudW1iZXJbXSkgPT4ge1xuICAgICAgdGhpcy5lbmQuZW1pdCh0aGlzLnRvVmFsdWVzKHZhbHVlcykpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogYW55KSB7XG4gICAgaWYgKHRoaXMuc2xpZGVyICYmIChjaGFuZ2VzLm1pbiB8fCBjaGFuZ2VzLm1heCB8fCBjaGFuZ2VzLnN0ZXApKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5zbGlkZXIudXBkYXRlT3B0aW9ucyh7XG4gICAgICAgICAgcmFuZ2U6IHtcbiAgICAgICAgICAgIG1pbjogdGhpcy5taW4sXG4gICAgICAgICAgICBtYXg6IHRoaXMubWF4XG4gICAgICAgICAgfSxcbiAgICAgICAgICBzdGVwOiB0aGlzLnN0ZXBcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICB0b1ZhbHVlcyh2YWx1ZXM6IHN0cmluZ1tdKTogYW55IHwgYW55W10ge1xuICAgIGxldCB2ID0gdmFsdWVzLm1hcCh0aGlzLmNvbmZpZy5mb3JtYXQuZnJvbSk7XG4gICAgcmV0dXJuICh2Lmxlbmd0aCA9PSAxID8gdlswXSA6IHYpO1xuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc2xpZGVyKSB7XG4gICAgICB0aGlzLnNsaWRlci5zZXQodmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICh2YWx1ZTogYW55KSA9PiB2b2lkKSB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHt9KTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIHByaXZhdGUgZXZlbnRIYW5kbGVyID0gKGVtaXR0ZXI6IEV2ZW50RW1pdHRlcjxhbnk+LCB2YWx1ZXM6IHN0cmluZ1tdLCBoYW5kbGU6IG51bWJlciwgdW5lbmNvZGVkOiBudW1iZXJbXSkgPT4ge1xuICAgIGxldCB2ID0gdGhpcy50b1ZhbHVlcyh2YWx1ZXMpO1xuICAgIGxldCBlbWl0RXZlbnRzID0gZmFsc2U7XG4gICAgaWYodGhpcy52YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnZhbHVlID0gdjtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYoQXJyYXkuaXNBcnJheSh2KSAmJiB0aGlzLnZhbHVlW2hhbmRsZV0gIT0gdltoYW5kbGVdKSB7XG4gICAgICBlbWl0RXZlbnRzID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYoIUFycmF5LmlzQXJyYXkodikgJiYgdGhpcy52YWx1ZSAhPSB2KSB7XG4gICAgICBlbWl0RXZlbnRzID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYoZW1pdEV2ZW50cykge1xuICAgICAgZW1pdHRlci5lbWl0KHYpO1xuICAgICAgdGhpcy5vbkNoYW5nZSh2KTtcbiAgICB9XG4gICAgaWYoQXJyYXkuaXNBcnJheSh2KSkge1xuICAgICAgdGhpcy52YWx1ZVtoYW5kbGVdID0gdltoYW5kbGVdO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnZhbHVlID0gdjtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGRlZmF1bHRLZXlIYW5kbGVyID0gKGU6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICBsZXQgc3RlcFNpemU6IGFueVtdID0gdGhpcy5zbGlkZXIuc3RlcHMoKTtcbiAgICBsZXQgaW5kZXggPSBwYXJzZUludCgoPEhUTUxFbGVtZW50PmUudGFyZ2V0KS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaGFuZGxlJykpO1xuICAgIGxldCBzaWduID0gMTtcbiAgICBsZXQgbXVsdGlwbGllcjogbnVtYmVyID0gMTtcbiAgICBsZXQgc3RlcCA9IDA7XG4gICAgbGV0IGRlbHRhID0gMDtcblxuICAgIHN3aXRjaCAoIGUud2hpY2ggKSB7XG4gICAgICBjYXNlIDM0OiAgLy8gUGFnZURvd25cbiAgICAgICAgbXVsdGlwbGllciA9IHRoaXMuY29uZmlnLnBhZ2VTdGVwcztcbiAgICAgIGNhc2UgNDA6ICAvLyBBcnJvd0Rvd25cbiAgICAgIGNhc2UgMzc6ICAvLyBBcnJvd0xlZnRcbiAgICAgICAgc2lnbiA9IC0xO1xuICAgICAgICBzdGVwID0gc3RlcFNpemVbaW5kZXhdWzBdO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDMzOiAgLy8gUGFnZVVwXG4gICAgICAgIG11bHRpcGxpZXIgPSB0aGlzLmNvbmZpZy5wYWdlU3RlcHM7XG4gICAgICBjYXNlIDM4OiAgLy8gQXJyb3dVcFxuICAgICAgY2FzZSAzOTogIC8vIEFycm93UmlnaHRcbiAgICAgICAgc3RlcCA9IHN0ZXBTaXplW2luZGV4XVsxXTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgZGVsdGEgPSBzaWduICogbXVsdGlwbGllciAqIHN0ZXA7XG4gICAgbGV0IG5ld1ZhbHVlOiBudW1iZXIgfCBudW1iZXJbXTtcblxuICAgIGlmKEFycmF5LmlzQXJyYXkodGhpcy52YWx1ZSkpIHtcbiAgICAgIG5ld1ZhbHVlID0gW10uY29uY2F0KHRoaXMudmFsdWUpO1xuICAgICAgbmV3VmFsdWVbaW5kZXhdID0gbmV3VmFsdWVbaW5kZXhdICsgZGVsdGE7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1ZhbHVlID0gdGhpcy52YWx1ZSArIGRlbHRhO1xuICAgIH1cblxuICAgIHRoaXMuc2xpZGVyLnNldChuZXdWYWx1ZSk7XG4gIH1cbnN0YXRpYyBkZWNvcmF0b3JzOiBEZWNvcmF0b3JJbnZvY2F0aW9uW10gPSBbXG57IHR5cGU6IENvbXBvbmVudCwgYXJnczogW3tcbiAgc2VsZWN0b3I6ICdub3Vpc2xpZGVyJyxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MubmcyLW5vdWlzbGlkZXJdJzogJ3RydWUnXG4gIH0sXG4gIHRlbXBsYXRlOiAnPGRpdiBbYXR0ci5kaXNhYmxlZF09XCJkaXNhYmxlZCA/IHRydWUgOiB1bmRlZmluZWRcIj48L2Rpdj4nLFxuICBzdHlsZXM6IFtgXG4gICAgOmhvc3Qge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICB9XG4gIGBdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE5vdWlzbGlkZXJDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9XG4gIF1cbn0sIF0gfSxcbl07XG4vKiogQG5vY29sbGFwc2UgKi9cbnN0YXRpYyBjdG9yUGFyYW1ldGVyczogKCkgPT4gKHt0eXBlOiBhbnksIGRlY29yYXRvcnM/OiBEZWNvcmF0b3JJbnZvY2F0aW9uW119fG51bGwpW10gPSAoKSA9PiBbXG57dHlwZTogRWxlbWVudFJlZiwgfSxcbl07XG5zdGF0aWMgcHJvcERlY29yYXRvcnM6IHtba2V5OiBzdHJpbmddOiBEZWNvcmF0b3JJbnZvY2F0aW9uW119ID0ge1xuJ2Rpc2FibGVkJzogW3sgdHlwZTogSW5wdXQgfSxdLFxuJ2JlaGF2aW91cic6IFt7IHR5cGU6IElucHV0IH0sXSxcbidjb25uZWN0JzogW3sgdHlwZTogSW5wdXQgfSxdLFxuJ2xpbWl0JzogW3sgdHlwZTogSW5wdXQgfSxdLFxuJ21pbic6IFt7IHR5cGU6IElucHV0IH0sXSxcbidtYXgnOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG4nc3RlcCc6IFt7IHR5cGU6IElucHV0IH0sXSxcbidmb3JtYXQnOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG4ncGFnZVN0ZXBzJzogW3sgdHlwZTogSW5wdXQgfSxdLFxuJ2NvbmZpZyc6IFt7IHR5cGU6IElucHV0IH0sXSxcbiduZ01vZGVsJzogW3sgdHlwZTogSW5wdXQgfSxdLFxuJ2tleWJvYXJkJzogW3sgdHlwZTogSW5wdXQgfSxdLFxuJ29uS2V5ZG93bic6IFt7IHR5cGU6IElucHV0IH0sXSxcbidmb3JtQ29udHJvbCc6IFt7IHR5cGU6IElucHV0IH0sXSxcbid0b29sdGlwcyc6IFt7IHR5cGU6IElucHV0IH0sXSxcbidjaGFuZ2UnOiBbeyB0eXBlOiBPdXRwdXQgfSxdLFxuJ3VwZGF0ZSc6IFt7IHR5cGU6IE91dHB1dCB9LF0sXG4nc2xpZGUnOiBbeyB0eXBlOiBPdXRwdXQgfSxdLFxuJ3NldCc6IFt7IHR5cGU6IE91dHB1dCB9LF0sXG4nc3RhcnQnOiBbeyB0eXBlOiBPdXRwdXQgfSxdLFxuJ2VuZCc6IFt7IHR5cGU6IE91dHB1dCB9LF0sXG59O1xufVxuXG5cblxuZXhwb3J0IGNsYXNzIE5vdWlzbGlkZXJNb2R1bGUgeyBzdGF0aWMgZGVjb3JhdG9yczogRGVjb3JhdG9ySW52b2NhdGlvbltdID0gW1xueyB0eXBlOiBOZ01vZHVsZSwgYXJnczogW3tcbiAgaW1wb3J0czogW10sXG4gIGV4cG9ydHM6IFtOb3Vpc2xpZGVyQ29tcG9uZW50XSxcbiAgZGVjbGFyYXRpb25zOiBbTm91aXNsaWRlckNvbXBvbmVudF0sXG59LCBdIH0sXG5dO1xuLyoqIEBub2NvbGxhcHNlICovXG5zdGF0aWMgY3RvclBhcmFtZXRlcnM6ICgpID0+ICh7dHlwZTogYW55LCBkZWNvcmF0b3JzPzogRGVjb3JhdG9ySW52b2NhdGlvbltdfXxudWxsKVtdID0gKCkgPT4gW1xuXTtcbn1cblxuaW50ZXJmYWNlIERlY29yYXRvckludm9jYXRpb24ge1xuICB0eXBlOiBGdW5jdGlvbjtcbiAgYXJncz86IGFueVtdO1xufVxuIl19

/***/ }),

/***/ "../../../../nouislider/distribute/nouislider.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! nouislider - 10.1.0 - 2017-07-28 17:11:18 */

(function (factory) {

    if ( true ) {

        // AMD. Register as an anonymous module.
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

    } else if ( typeof exports === 'object' ) {

        // Node/CommonJS
        module.exports = factory();

    } else {

        // Browser globals
        window.noUiSlider = factory();
    }

}(function( ){

	'use strict';

	var VERSION = '10.1.0';


	function isValidFormatter ( entry ) {
		return typeof entry === 'object' && typeof entry.to === 'function' && typeof entry.from === 'function';
	}

	function removeElement ( el ) {
		el.parentElement.removeChild(el);
	}

	// Bindable version
	function preventDefault ( e ) {
		e.preventDefault();
	}

	// Removes duplicates from an array.
	function unique ( array ) {
		return array.filter(function(a){
			return !this[a] ? this[a] = true : false;
		}, {});
	}

	// Round a value to the closest 'to'.
	function closest ( value, to ) {
		return Math.round(value / to) * to;
	}

	// Current position of an element relative to the document.
	function offset ( elem, orientation ) {

		var rect = elem.getBoundingClientRect();
		var doc = elem.ownerDocument;
		var docElem = doc.documentElement;
		var pageOffset = getPageOffset(doc);

		// getBoundingClientRect contains left scroll in Chrome on Android.
		// I haven't found a feature detection that proves this. Worst case
		// scenario on mis-match: the 'tap' feature on horizontal sliders breaks.
		if ( /webkit.*Chrome.*Mobile/i.test(navigator.userAgent) ) {
			pageOffset.x = 0;
		}

		return orientation ? (rect.top + pageOffset.y - docElem.clientTop) : (rect.left + pageOffset.x - docElem.clientLeft);
	}

	// Checks whether a value is numerical.
	function isNumeric ( a ) {
		return typeof a === 'number' && !isNaN( a ) && isFinite( a );
	}

	// Sets a class and removes it after [duration] ms.
	function addClassFor ( element, className, duration ) {
		if (duration > 0) {
		addClass(element, className);
			setTimeout(function(){
				removeClass(element, className);
			}, duration);
		}
	}

	// Limits a value to 0 - 100
	function limit ( a ) {
		return Math.max(Math.min(a, 100), 0);
	}

	// Wraps a variable as an array, if it isn't one yet.
	// Note that an input array is returned by reference!
	function asArray ( a ) {
		return Array.isArray(a) ? a : [a];
	}

	// Counts decimals
	function countDecimals ( numStr ) {
		numStr = String(numStr);
		var pieces = numStr.split(".");
		return pieces.length > 1 ? pieces[1].length : 0;
	}

	// http://youmightnotneedjquery.com/#add_class
	function addClass ( el, className ) {
		if ( el.classList ) {
			el.classList.add(className);
		} else {
			el.className += ' ' + className;
		}
	}

	// http://youmightnotneedjquery.com/#remove_class
	function removeClass ( el, className ) {
		if ( el.classList ) {
			el.classList.remove(className);
		} else {
			el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
		}
	}

	// https://plainjs.com/javascript/attributes/adding-removing-and-testing-for-classes-9/
	function hasClass ( el, className ) {
		return el.classList ? el.classList.contains(className) : new RegExp('\\b' + className + '\\b').test(el.className);
	}

	// https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY#Notes
	function getPageOffset ( doc ) {

		var supportPageOffset = window.pageXOffset !== undefined;
		var isCSS1Compat = ((doc.compatMode || "") === "CSS1Compat");
		var x = supportPageOffset ? window.pageXOffset : isCSS1Compat ? doc.documentElement.scrollLeft : doc.body.scrollLeft;
		var y = supportPageOffset ? window.pageYOffset : isCSS1Compat ? doc.documentElement.scrollTop : doc.body.scrollTop;

		return {
			x: x,
			y: y
		};
	}

	// we provide a function to compute constants instead
	// of accessing window.* as soon as the module needs it
	// so that we do not compute anything if not needed
	function getActions ( ) {

		// Determine the events to bind. IE11 implements pointerEvents without
		// a prefix, which breaks compatibility with the IE10 implementation.
		return window.navigator.pointerEnabled ? {
			start: 'pointerdown',
			move: 'pointermove',
			end: 'pointerup'
		} : window.navigator.msPointerEnabled ? {
			start: 'MSPointerDown',
			move: 'MSPointerMove',
			end: 'MSPointerUp'
		} : {
			start: 'mousedown touchstart',
			move: 'mousemove touchmove',
			end: 'mouseup touchend'
		};
	}

	// https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
	// Issue #785
	function getSupportsPassive ( ) {

		var supportsPassive = false;

		try {

			var opts = Object.defineProperty({}, 'passive', {
				get: function() {
					supportsPassive = true;
				}
			});

			window.addEventListener('test', null, opts);

		} catch (e) {}

		return supportsPassive;
	}

	function getSupportsTouchActionNone ( ) {
		return window.CSS && CSS.supports && CSS.supports('touch-action', 'none');
	}


// Value calculation

	// Determine the size of a sub-range in relation to a full range.
	function subRangeRatio ( pa, pb ) {
		return (100 / (pb - pa));
	}

	// (percentage) How many percent is this value of this range?
	function fromPercentage ( range, value ) {
		return (value * 100) / ( range[1] - range[0] );
	}

	// (percentage) Where is this value on this range?
	function toPercentage ( range, value ) {
		return fromPercentage( range, range[0] < 0 ?
			value + Math.abs(range[0]) :
				value - range[0] );
	}

	// (value) How much is this percentage on this range?
	function isPercentage ( range, value ) {
		return ((value * ( range[1] - range[0] )) / 100) + range[0];
	}


// Range conversion

	function getJ ( value, arr ) {

		var j = 1;

		while ( value >= arr[j] ){
			j += 1;
		}

		return j;
	}

	// (percentage) Input a value, find where, on a scale of 0-100, it applies.
	function toStepping ( xVal, xPct, value ) {

		if ( value >= xVal.slice(-1)[0] ){
			return 100;
		}

		var j = getJ( value, xVal ), va, vb, pa, pb;

		va = xVal[j-1];
		vb = xVal[j];
		pa = xPct[j-1];
		pb = xPct[j];

		return pa + (toPercentage([va, vb], value) / subRangeRatio (pa, pb));
	}

	// (value) Input a percentage, find where it is on the specified range.
	function fromStepping ( xVal, xPct, value ) {

		// There is no range group that fits 100
		if ( value >= 100 ){
			return xVal.slice(-1)[0];
		}

		var j = getJ( value, xPct ), va, vb, pa, pb;

		va = xVal[j-1];
		vb = xVal[j];
		pa = xPct[j-1];
		pb = xPct[j];

		return isPercentage([va, vb], (value - pa) * subRangeRatio (pa, pb));
	}

	// (percentage) Get the step that applies at a certain value.
	function getStep ( xPct, xSteps, snap, value ) {

		if ( value === 100 ) {
			return value;
		}

		var j = getJ( value, xPct ), a, b;

		// If 'snap' is set, steps are used as fixed points on the slider.
		if ( snap ) {

			a = xPct[j-1];
			b = xPct[j];

			// Find the closest position, a or b.
			if ((value - a) > ((b-a)/2)){
				return b;
			}

			return a;
		}

		if ( !xSteps[j-1] ){
			return value;
		}

		return xPct[j-1] + closest(
			value - xPct[j-1],
			xSteps[j-1]
		);
	}


// Entry parsing

	function handleEntryPoint ( index, value, that ) {

		var percentage;

		// Wrap numerical input in an array.
		if ( typeof value === "number" ) {
			value = [value];
		}

		// Reject any invalid input, by testing whether value is an array.
		if ( Object.prototype.toString.call( value ) !== '[object Array]' ){
			throw new Error("noUiSlider (" + VERSION + "): 'range' contains invalid value.");
		}

		// Covert min/max syntax to 0 and 100.
		if ( index === 'min' ) {
			percentage = 0;
		} else if ( index === 'max' ) {
			percentage = 100;
		} else {
			percentage = parseFloat( index );
		}

		// Check for correct input.
		if ( !isNumeric( percentage ) || !isNumeric( value[0] ) ) {
			throw new Error("noUiSlider (" + VERSION + "): 'range' value isn't numeric.");
		}

		// Store values.
		that.xPct.push( percentage );
		that.xVal.push( value[0] );

		// NaN will evaluate to false too, but to keep
		// logging clear, set step explicitly. Make sure
		// not to override the 'step' setting with false.
		if ( !percentage ) {
			if ( !isNaN( value[1] ) ) {
				that.xSteps[0] = value[1];
			}
		} else {
			that.xSteps.push( isNaN(value[1]) ? false : value[1] );
		}

		that.xHighestCompleteStep.push(0);
	}

	function handleStepPoint ( i, n, that ) {

		// Ignore 'false' stepping.
		if ( !n ) {
			return true;
		}

		// Factor to range ratio
		that.xSteps[i] = fromPercentage([
			 that.xVal[i]
			,that.xVal[i+1]
		], n) / subRangeRatio (
			that.xPct[i],
			that.xPct[i+1] );

		var totalSteps = (that.xVal[i+1] - that.xVal[i]) / that.xNumSteps[i];
		var highestStep = Math.ceil(Number(totalSteps.toFixed(3)) - 1);
		var step = that.xVal[i] + (that.xNumSteps[i] * highestStep);

		that.xHighestCompleteStep[i] = step;
	}


// Interface

	function Spectrum ( entry, snap, singleStep ) {

		this.xPct = [];
		this.xVal = [];
		this.xSteps = [ singleStep || false ];
		this.xNumSteps = [ false ];
		this.xHighestCompleteStep = [];

		this.snap = snap;

		var index, ordered = [ /* [0, 'min'], [1, '50%'], [2, 'max'] */ ];

		// Map the object keys to an array.
		for ( index in entry ) {
			if ( entry.hasOwnProperty(index) ) {
				ordered.push([entry[index], index]);
			}
		}

		// Sort all entries by value (numeric sort).
		if ( ordered.length && typeof ordered[0][0] === "object" ) {
			ordered.sort(function(a, b) { return a[0][0] - b[0][0]; });
		} else {
			ordered.sort(function(a, b) { return a[0] - b[0]; });
		}


		// Convert all entries to subranges.
		for ( index = 0; index < ordered.length; index++ ) {
			handleEntryPoint(ordered[index][1], ordered[index][0], this);
		}

		// Store the actual step values.
		// xSteps is sorted in the same order as xPct and xVal.
		this.xNumSteps = this.xSteps.slice(0);

		// Convert all numeric steps to the percentage of the subrange they represent.
		for ( index = 0; index < this.xNumSteps.length; index++ ) {
			handleStepPoint(index, this.xNumSteps[index], this);
		}
	}

	Spectrum.prototype.getMargin = function ( value ) {

		var step = this.xNumSteps[0];

		if ( step && ((value / step) % 1) !== 0 ) {
			throw new Error("noUiSlider (" + VERSION + "): 'limit', 'margin' and 'padding' must be divisible by step.");
		}

		return this.xPct.length === 2 ? fromPercentage(this.xVal, value) : false;
	};

	Spectrum.prototype.toStepping = function ( value ) {

		value = toStepping( this.xVal, this.xPct, value );

		return value;
	};

	Spectrum.prototype.fromStepping = function ( value ) {

		return fromStepping( this.xVal, this.xPct, value );
	};

	Spectrum.prototype.getStep = function ( value ) {

		value = getStep(this.xPct, this.xSteps, this.snap, value );

		return value;
	};

	Spectrum.prototype.getNearbySteps = function ( value ) {

		var j = getJ(value, this.xPct);

		return {
			stepBefore: { startValue: this.xVal[j-2], step: this.xNumSteps[j-2], highestStep: this.xHighestCompleteStep[j-2] },
			thisStep: { startValue: this.xVal[j-1], step: this.xNumSteps[j-1], highestStep: this.xHighestCompleteStep[j-1] },
			stepAfter: { startValue: this.xVal[j-0], step: this.xNumSteps[j-0], highestStep: this.xHighestCompleteStep[j-0] }
		};
	};

	Spectrum.prototype.countStepDecimals = function () {
		var stepDecimals = this.xNumSteps.map(countDecimals);
		return Math.max.apply(null, stepDecimals);
 	};

	// Outside testing
	Spectrum.prototype.convert = function ( value ) {
		return this.getStep(this.toStepping(value));
	};

/*	Every input option is tested and parsed. This'll prevent
	endless validation in internal methods. These tests are
	structured with an item for every option available. An
	option can be marked as required by setting the 'r' flag.
	The testing function is provided with three arguments:
		- The provided value for the option;
		- A reference to the options object;
		- The name for the option;

	The testing function returns false when an error is detected,
	or true when everything is OK. It can also modify the option
	object, to make sure all values can be correctly looped elsewhere. */

	var defaultFormatter = { 'to': function( value ){
		return value !== undefined && value.toFixed(2);
	}, 'from': Number };

	function validateFormat ( entry ) {

		// Any object with a to and from method is supported.
		if ( isValidFormatter(entry) ) {
			return true;
		}

		throw new Error("noUiSlider (" + VERSION + "): 'format' requires 'to' and 'from' methods.");
	}

	function testStep ( parsed, entry ) {

		if ( !isNumeric( entry ) ) {
			throw new Error("noUiSlider (" + VERSION + "): 'step' is not numeric.");
		}

		// The step option can still be used to set stepping
		// for linear sliders. Overwritten if set in 'range'.
		parsed.singleStep = entry;
	}

	function testRange ( parsed, entry ) {

		// Filter incorrect input.
		if ( typeof entry !== 'object' || Array.isArray(entry) ) {
			throw new Error("noUiSlider (" + VERSION + "): 'range' is not an object.");
		}

		// Catch missing start or end.
		if ( entry.min === undefined || entry.max === undefined ) {
			throw new Error("noUiSlider (" + VERSION + "): Missing 'min' or 'max' in 'range'.");
		}

		// Catch equal start or end.
		if ( entry.min === entry.max ) {
			throw new Error("noUiSlider (" + VERSION + "): 'range' 'min' and 'max' cannot be equal.");
		}

		parsed.spectrum = new Spectrum(entry, parsed.snap, parsed.singleStep);
	}

	function testStart ( parsed, entry ) {

		entry = asArray(entry);

		// Validate input. Values aren't tested, as the public .val method
		// will always provide a valid location.
		if ( !Array.isArray( entry ) || !entry.length ) {
			throw new Error("noUiSlider (" + VERSION + "): 'start' option is incorrect.");
		}

		// Store the number of handles.
		parsed.handles = entry.length;

		// When the slider is initialized, the .val method will
		// be called with the start options.
		parsed.start = entry;
	}

	function testSnap ( parsed, entry ) {

		// Enforce 100% stepping within subranges.
		parsed.snap = entry;

		if ( typeof entry !== 'boolean' ){
			throw new Error("noUiSlider (" + VERSION + "): 'snap' option must be a boolean.");
		}
	}

	function testAnimate ( parsed, entry ) {

		// Enforce 100% stepping within subranges.
		parsed.animate = entry;

		if ( typeof entry !== 'boolean' ){
			throw new Error("noUiSlider (" + VERSION + "): 'animate' option must be a boolean.");
		}
	}

	function testAnimationDuration ( parsed, entry ) {

		parsed.animationDuration = entry;

		if ( typeof entry !== 'number' ){
			throw new Error("noUiSlider (" + VERSION + "): 'animationDuration' option must be a number.");
		}
	}

	function testConnect ( parsed, entry ) {

		var connect = [false];
		var i;

		// Map legacy options
		if ( entry === 'lower' ) {
			entry = [true, false];
		}

		else if ( entry === 'upper' ) {
			entry = [false, true];
		}

		// Handle boolean options
		if ( entry === true || entry === false ) {

			for ( i = 1; i < parsed.handles; i++ ) {
				connect.push(entry);
			}

			connect.push(false);
		}

		// Reject invalid input
		else if ( !Array.isArray( entry ) || !entry.length || entry.length !== parsed.handles + 1 ) {
			throw new Error("noUiSlider (" + VERSION + "): 'connect' option doesn't match handle count.");
		}

		else {
			connect = entry;
		}

		parsed.connect = connect;
	}

	function testOrientation ( parsed, entry ) {

		// Set orientation to an a numerical value for easy
		// array selection.
		switch ( entry ){
		  case 'horizontal':
			parsed.ort = 0;
			break;
		  case 'vertical':
			parsed.ort = 1;
			break;
		  default:
			throw new Error("noUiSlider (" + VERSION + "): 'orientation' option is invalid.");
		}
	}

	function testMargin ( parsed, entry ) {

		if ( !isNumeric(entry) ){
			throw new Error("noUiSlider (" + VERSION + "): 'margin' option must be numeric.");
		}

		// Issue #582
		if ( entry === 0 ) {
			return;
		}

		parsed.margin = parsed.spectrum.getMargin(entry);

		if ( !parsed.margin ) {
			throw new Error("noUiSlider (" + VERSION + "): 'margin' option is only supported on linear sliders.");
		}
	}

	function testLimit ( parsed, entry ) {

		if ( !isNumeric(entry) ){
			throw new Error("noUiSlider (" + VERSION + "): 'limit' option must be numeric.");
		}

		parsed.limit = parsed.spectrum.getMargin(entry);

		if ( !parsed.limit || parsed.handles < 2 ) {
			throw new Error("noUiSlider (" + VERSION + "): 'limit' option is only supported on linear sliders with 2 or more handles.");
		}
	}

	function testPadding ( parsed, entry ) {

		if ( !isNumeric(entry) ){
			throw new Error("noUiSlider (" + VERSION + "): 'padding' option must be numeric.");
		}

		if ( entry === 0 ) {
			return;
		}

		parsed.padding = parsed.spectrum.getMargin(entry);

		if ( !parsed.padding ) {
			throw new Error("noUiSlider (" + VERSION + "): 'padding' option is only supported on linear sliders.");
		}

		if ( parsed.padding < 0 ) {
			throw new Error("noUiSlider (" + VERSION + "): 'padding' option must be a positive number.");
		}

		if ( parsed.padding >= 50 ) {
			throw new Error("noUiSlider (" + VERSION + "): 'padding' option must be less than half the range.");
		}
	}

	function testDirection ( parsed, entry ) {

		// Set direction as a numerical value for easy parsing.
		// Invert connection for RTL sliders, so that the proper
		// handles get the connect/background classes.
		switch ( entry ) {
		  case 'ltr':
			parsed.dir = 0;
			break;
		  case 'rtl':
			parsed.dir = 1;
			break;
		  default:
			throw new Error("noUiSlider (" + VERSION + "): 'direction' option was not recognized.");
		}
	}

	function testBehaviour ( parsed, entry ) {

		// Make sure the input is a string.
		if ( typeof entry !== 'string' ) {
			throw new Error("noUiSlider (" + VERSION + "): 'behaviour' must be a string containing options.");
		}

		// Check if the string contains any keywords.
		// None are required.
		var tap = entry.indexOf('tap') >= 0;
		var drag = entry.indexOf('drag') >= 0;
		var fixed = entry.indexOf('fixed') >= 0;
		var snap = entry.indexOf('snap') >= 0;
		var hover = entry.indexOf('hover') >= 0;

		if ( fixed ) {

			if ( parsed.handles !== 2 ) {
				throw new Error("noUiSlider (" + VERSION + "): 'fixed' behaviour must be used with 2 handles");
			}

			// Use margin to enforce fixed state
			testMargin(parsed, parsed.start[1] - parsed.start[0]);
		}

		parsed.events = {
			tap: tap || snap,
			drag: drag,
			fixed: fixed,
			snap: snap,
			hover: hover
		};
	}

	function testMultitouch ( parsed, entry ) {
		parsed.multitouch = entry;

		if ( typeof entry !== 'boolean' ){
			throw new Error("noUiSlider (" + VERSION + "): 'multitouch' option must be a boolean.");
		}
	}

	function testTooltips ( parsed, entry ) {

		if ( entry === false ) {
			return;
		}

		else if ( entry === true ) {

			parsed.tooltips = [];

			for ( var i = 0; i < parsed.handles; i++ ) {
				parsed.tooltips.push(true);
			}
		}

		else {

			parsed.tooltips = asArray(entry);

			if ( parsed.tooltips.length !== parsed.handles ) {
				throw new Error("noUiSlider (" + VERSION + "): must pass a formatter for all handles.");
			}

			parsed.tooltips.forEach(function(formatter){
				if ( typeof formatter !== 'boolean' && (typeof formatter !== 'object' || typeof formatter.to !== 'function') ) {
					throw new Error("noUiSlider (" + VERSION + "): 'tooltips' must be passed a formatter or 'false'.");
				}
			});
		}
	}

	function testAriaFormat ( parsed, entry ) {
		parsed.ariaFormat = entry;
		validateFormat(entry);
	}

	function testFormat ( parsed, entry ) {
		parsed.format = entry;
		validateFormat(entry);
	}

	function testCssPrefix ( parsed, entry ) {

		if ( entry !== undefined && typeof entry !== 'string' && entry !== false ) {
			throw new Error("noUiSlider (" + VERSION + "): 'cssPrefix' must be a string or `false`.");
		}

		parsed.cssPrefix = entry;
	}

	function testCssClasses ( parsed, entry ) {

		if ( entry !== undefined && typeof entry !== 'object' ) {
			throw new Error("noUiSlider (" + VERSION + "): 'cssClasses' must be an object.");
		}

		if ( typeof parsed.cssPrefix === 'string' ) {
			parsed.cssClasses = {};

			for ( var key in entry ) {
				if ( !entry.hasOwnProperty(key) ) { continue; }

				parsed.cssClasses[key] = parsed.cssPrefix + entry[key];
			}
		} else {
			parsed.cssClasses = entry;
		}
	}

	function testUseRaf ( parsed, entry ) {
		if ( entry === true || entry === false ) {
			parsed.useRequestAnimationFrame = entry;
		} else {
			throw new Error("noUiSlider (" + VERSION + "): 'useRequestAnimationFrame' option should be true (default) or false.");
		}
	}

	// Test all developer settings and parse to assumption-safe values.
	function testOptions ( options ) {

		// To prove a fix for #537, freeze options here.
		// If the object is modified, an error will be thrown.
		// Object.freeze(options);

		var parsed = {
			margin: 0,
			limit: 0,
			padding: 0,
			animate: true,
			animationDuration: 300,
			ariaFormat: defaultFormatter,
			format: defaultFormatter
		};

		// Tests are executed in the order they are presented here.
		var tests = {
			'step': { r: false, t: testStep },
			'start': { r: true, t: testStart },
			'connect': { r: true, t: testConnect },
			'direction': { r: true, t: testDirection },
			'snap': { r: false, t: testSnap },
			'animate': { r: false, t: testAnimate },
			'animationDuration': { r: false, t: testAnimationDuration },
			'range': { r: true, t: testRange },
			'orientation': { r: false, t: testOrientation },
			'margin': { r: false, t: testMargin },
			'limit': { r: false, t: testLimit },
			'padding': { r: false, t: testPadding },
			'behaviour': { r: true, t: testBehaviour },
			'multitouch': { r: true, t: testMultitouch },
			'ariaFormat': { r: false, t: testAriaFormat },
			'format': { r: false, t: testFormat },
			'tooltips': { r: false, t: testTooltips },
			'cssPrefix': { r: false, t: testCssPrefix },
			'cssClasses': { r: false, t: testCssClasses },
			'useRequestAnimationFrame': { r: false, t: testUseRaf }
		};

		var defaults = {
			'connect': false,
			'direction': 'ltr',
			'behaviour': 'tap',
			'multitouch': false,
			'orientation': 'horizontal',
			'cssPrefix' : 'noUi-',
			'cssClasses': {
				target: 'target',
				base: 'base',
				origin: 'origin',
				handle: 'handle',
				handleLower: 'handle-lower',
				handleUpper: 'handle-upper',
				horizontal: 'horizontal',
				vertical: 'vertical',
				background: 'background',
				connect: 'connect',
				ltr: 'ltr',
				rtl: 'rtl',
				draggable: 'draggable',
				drag: 'state-drag',
				tap: 'state-tap',
				active: 'active',
				tooltip: 'tooltip',
				pips: 'pips',
				pipsHorizontal: 'pips-horizontal',
				pipsVertical: 'pips-vertical',
				marker: 'marker',
				markerHorizontal: 'marker-horizontal',
				markerVertical: 'marker-vertical',
				markerNormal: 'marker-normal',
				markerLarge: 'marker-large',
				markerSub: 'marker-sub',
				value: 'value',
				valueHorizontal: 'value-horizontal',
				valueVertical: 'value-vertical',
				valueNormal: 'value-normal',
				valueLarge: 'value-large',
				valueSub: 'value-sub'
			},
			'useRequestAnimationFrame': true
		};

		// AriaFormat defaults to regular format, if any.
		if ( options.format && !options.ariaFormat ) {
			options.ariaFormat = options.format;
		}

		// Run all options through a testing mechanism to ensure correct
		// input. It should be noted that options might get modified to
		// be handled properly. E.g. wrapping integers in arrays.
		Object.keys(tests).forEach(function( name ){

			// If the option isn't set, but it is required, throw an error.
			if ( options[name] === undefined && defaults[name] === undefined ) {

				if ( tests[name].r ) {
					throw new Error("noUiSlider (" + VERSION + "): '" + name + "' is required.");
				}

				return true;
			}

			tests[name].t( parsed, options[name] === undefined ? defaults[name] : options[name] );
		});

		// Forward pips options
		parsed.pips = options.pips;

		var styles = [['left', 'top'], ['right', 'bottom']];

		// Pre-define the styles.
		parsed.style = styles[parsed.dir][parsed.ort];
		parsed.styleOposite = styles[parsed.dir?0:1][parsed.ort];

		return parsed;
	}


function closure ( target, options, originalOptions ){

	var actions = getActions();
	var supportsTouchActionNone = getSupportsTouchActionNone();
	var supportsPassive = supportsTouchActionNone && getSupportsPassive();

	// All variables local to 'closure' are prefixed with 'scope_'
	var scope_Target = target;
	var scope_Locations = [];
	var scope_Base;
	var scope_Handles;
	var scope_HandleNumbers = [];
	var scope_ActiveHandlesCount = 0;
	var scope_Connects;
	var scope_Spectrum = options.spectrum;
	var scope_Values = [];
	var scope_Events = {};
	var scope_Self;
	var scope_Pips;
	var scope_Document = target.ownerDocument;
	var scope_DocumentElement = scope_Document.documentElement;
	var scope_Body = scope_Document.body;


	// Creates a node, adds it to target, returns the new node.
	function addNodeTo ( target, className ) {

		var div = scope_Document.createElement('div');

		if ( className ) {
			addClass(div, className);
		}

		target.appendChild(div);

		return div;
	}

	// Append a origin to the base
	function addOrigin ( base, handleNumber ) {

		var origin = addNodeTo(base, options.cssClasses.origin);
		var handle = addNodeTo(origin, options.cssClasses.handle);

		handle.setAttribute('data-handle', handleNumber);

		// https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex
		// 0 = focusable and reachable
		handle.setAttribute('tabindex', '0');
		handle.setAttribute('role', 'slider');
		handle.setAttribute('aria-orientation', options.ort ? 'vertical' : 'horizontal');

		if ( handleNumber === 0 ) {
			addClass(handle, options.cssClasses.handleLower);
		}

		else if ( handleNumber === options.handles - 1 ) {
			addClass(handle, options.cssClasses.handleUpper);
		}

		return origin;
	}

	// Insert nodes for connect elements
	function addConnect ( base, add ) {

		if ( !add ) {
			return false;
		}

		return addNodeTo(base, options.cssClasses.connect);
	}

	// Add handles to the slider base.
	function addElements ( connectOptions, base ) {

		scope_Handles = [];
		scope_Connects = [];

		scope_Connects.push(addConnect(base, connectOptions[0]));

		// [::::O====O====O====]
		// connectOptions = [0, 1, 1, 1]

		for ( var i = 0; i < options.handles; i++ ) {
			// Keep a list of all added handles.
			scope_Handles.push(addOrigin(base, i));
			scope_HandleNumbers[i] = i;
			scope_Connects.push(addConnect(base, connectOptions[i + 1]));
		}
	}

	// Initialize a single slider.
	function addSlider ( target ) {

		// Apply classes and data to the target.
		addClass(target, options.cssClasses.target);

		if ( options.dir === 0 ) {
			addClass(target, options.cssClasses.ltr);
		} else {
			addClass(target, options.cssClasses.rtl);
		}

		if ( options.ort === 0 ) {
			addClass(target, options.cssClasses.horizontal);
		} else {
			addClass(target, options.cssClasses.vertical);
		}

		scope_Base = addNodeTo(target, options.cssClasses.base);
	}


	function addTooltip ( handle, handleNumber ) {

		if ( !options.tooltips[handleNumber] ) {
			return false;
		}

		return addNodeTo(handle.firstChild, options.cssClasses.tooltip);
	}

	// The tooltips option is a shorthand for using the 'update' event.
	function tooltips ( ) {

		// Tooltips are added with options.tooltips in original order.
		var tips = scope_Handles.map(addTooltip);

		bindEvent('update', function(values, handleNumber, unencoded) {

			if ( !tips[handleNumber] ) {
				return;
			}

			var formattedValue = values[handleNumber];

			if ( options.tooltips[handleNumber] !== true ) {
				formattedValue = options.tooltips[handleNumber].to(unencoded[handleNumber]);
			}

			tips[handleNumber].innerHTML = formattedValue;
		});
	}


	function aria ( ) {

		bindEvent('update', function ( values, handleNumber, unencoded, tap, positions ) {

			// Update Aria Values for all handles, as a change in one changes min and max values for the next.
			scope_HandleNumbers.forEach(function( handleNumber ){

				var handle = scope_Handles[handleNumber];

				var min = checkHandlePosition(scope_Locations, handleNumber, 0, true, true, true);
				var max = checkHandlePosition(scope_Locations, handleNumber, 100, true, true, true);

				var now = positions[handleNumber];
				var text = options.ariaFormat.to(unencoded[handleNumber]);

				handle.children[0].setAttribute('aria-valuemin', min.toFixed(1));
				handle.children[0].setAttribute('aria-valuemax', max.toFixed(1));
				handle.children[0].setAttribute('aria-valuenow', now.toFixed(1));
				handle.children[0].setAttribute('aria-valuetext', text);
			});
		});
	}


	function getGroup ( mode, values, stepped ) {

		// Use the range.
		if ( mode === 'range' || mode === 'steps' ) {
			return scope_Spectrum.xVal;
		}

		if ( mode === 'count' ) {

			if ( !values ) {
				throw new Error("noUiSlider (" + VERSION + "): 'values' required for mode 'count'.");
			}

			// Divide 0 - 100 in 'count' parts.
			var spread = ( 100 / (values - 1) );
			var v;
			var i = 0;

			values = [];

			// List these parts and have them handled as 'positions'.
			while ( (v = i++ * spread) <= 100 ) {
				values.push(v);
			}

			mode = 'positions';
		}

		if ( mode === 'positions' ) {

			// Map all percentages to on-range values.
			return values.map(function( value ){
				return scope_Spectrum.fromStepping( stepped ? scope_Spectrum.getStep( value ) : value );
			});
		}

		if ( mode === 'values' ) {

			// If the value must be stepped, it needs to be converted to a percentage first.
			if ( stepped ) {

				return values.map(function( value ){

					// Convert to percentage, apply step, return to value.
					return scope_Spectrum.fromStepping( scope_Spectrum.getStep( scope_Spectrum.toStepping( value ) ) );
				});

			}

			// Otherwise, we can simply use the values.
			return values;
		}
	}

	function generateSpread ( density, mode, group ) {

		function safeIncrement(value, increment) {
			// Avoid floating point variance by dropping the smallest decimal places.
			return (value + increment).toFixed(7) / 1;
		}

		var indexes = {};
		var firstInRange = scope_Spectrum.xVal[0];
		var lastInRange = scope_Spectrum.xVal[scope_Spectrum.xVal.length-1];
		var ignoreFirst = false;
		var ignoreLast = false;
		var prevPct = 0;

		// Create a copy of the group, sort it and filter away all duplicates.
		group = unique(group.slice().sort(function(a, b){ return a - b; }));

		// Make sure the range starts with the first element.
		if ( group[0] !== firstInRange ) {
			group.unshift(firstInRange);
			ignoreFirst = true;
		}

		// Likewise for the last one.
		if ( group[group.length - 1] !== lastInRange ) {
			group.push(lastInRange);
			ignoreLast = true;
		}

		group.forEach(function ( current, index ) {

			// Get the current step and the lower + upper positions.
			var step;
			var i;
			var q;
			var low = current;
			var high = group[index+1];
			var newPct;
			var pctDifference;
			var pctPos;
			var type;
			var steps;
			var realSteps;
			var stepsize;

			// When using 'steps' mode, use the provided steps.
			// Otherwise, we'll step on to the next subrange.
			if ( mode === 'steps' ) {
				step = scope_Spectrum.xNumSteps[ index ];
			}

			// Default to a 'full' step.
			if ( !step ) {
				step = high-low;
			}

			// Low can be 0, so test for false. If high is undefined,
			// we are at the last subrange. Index 0 is already handled.
			if ( low === false || high === undefined ) {
				return;
			}

			// Make sure step isn't 0, which would cause an infinite loop (#654)
			step = Math.max(step, 0.0000001);

			// Find all steps in the subrange.
			for ( i = low; i <= high; i = safeIncrement(i, step) ) {

				// Get the percentage value for the current step,
				// calculate the size for the subrange.
				newPct = scope_Spectrum.toStepping( i );
				pctDifference = newPct - prevPct;

				steps = pctDifference / density;
				realSteps = Math.round(steps);

				// This ratio represents the ammount of percentage-space a point indicates.
				// For a density 1 the points/percentage = 1. For density 2, that percentage needs to be re-devided.
				// Round the percentage offset to an even number, then divide by two
				// to spread the offset on both sides of the range.
				stepsize = pctDifference/realSteps;

				// Divide all points evenly, adding the correct number to this subrange.
				// Run up to <= so that 100% gets a point, event if ignoreLast is set.
				for ( q = 1; q <= realSteps; q += 1 ) {

					// The ratio between the rounded value and the actual size might be ~1% off.
					// Correct the percentage offset by the number of points
					// per subrange. density = 1 will result in 100 points on the
					// full range, 2 for 50, 4 for 25, etc.
					pctPos = prevPct + ( q * stepsize );
					indexes[pctPos.toFixed(5)] = ['x', 0];
				}

				// Determine the point type.
				type = (group.indexOf(i) > -1) ? 1 : ( mode === 'steps' ? 2 : 0 );

				// Enforce the 'ignoreFirst' option by overwriting the type for 0.
				if ( !index && ignoreFirst ) {
					type = 0;
				}

				if ( !(i === high && ignoreLast)) {
					// Mark the 'type' of this point. 0 = plain, 1 = real value, 2 = step value.
					indexes[newPct.toFixed(5)] = [i, type];
				}

				// Update the percentage count.
				prevPct = newPct;
			}
		});

		return indexes;
	}

	function addMarking ( spread, filterFunc, formatter ) {

		var element = scope_Document.createElement('div');

		var valueSizeClasses = [
			options.cssClasses.valueNormal,
			options.cssClasses.valueLarge,
			options.cssClasses.valueSub
		];
		var markerSizeClasses = [
			options.cssClasses.markerNormal,
			options.cssClasses.markerLarge,
			options.cssClasses.markerSub
		];
		var valueOrientationClasses = [
			options.cssClasses.valueHorizontal,
			options.cssClasses.valueVertical
		];
		var markerOrientationClasses = [
			options.cssClasses.markerHorizontal,
			options.cssClasses.markerVertical
		];

		addClass(element, options.cssClasses.pips);
		addClass(element, options.ort === 0 ? options.cssClasses.pipsHorizontal : options.cssClasses.pipsVertical);

		function getClasses( type, source ){
			var a = source === options.cssClasses.value;
			var orientationClasses = a ? valueOrientationClasses : markerOrientationClasses;
			var sizeClasses = a ? valueSizeClasses : markerSizeClasses;

			return source + ' ' + orientationClasses[options.ort] + ' ' + sizeClasses[type];
		}

		function addSpread ( offset, values ){

			// Apply the filter function, if it is set.
			values[1] = (values[1] && filterFunc) ? filterFunc(values[0], values[1]) : values[1];

			// Add a marker for every point
			var node = addNodeTo(element, false);
				node.className = getClasses(values[1], options.cssClasses.marker);
				node.style[options.style] = offset + '%';

			// Values are only appended for points marked '1' or '2'.
			if ( values[1] ) {
				node = addNodeTo(element, false);
				node.className = getClasses(values[1], options.cssClasses.value);
				node.style[options.style] = offset + '%';
				node.innerText = formatter.to(values[0]);
			}
		}

		// Append all points.
		Object.keys(spread).forEach(function(a){
			addSpread(a, spread[a]);
		});

		return element;
	}

	function removePips ( ) {
		if ( scope_Pips ) {
			removeElement(scope_Pips);
			scope_Pips = null;
		}
	}

	function pips ( grid ) {

		// Fix #669
		removePips();

		var mode = grid.mode;
		var density = grid.density || 1;
		var filter = grid.filter || false;
		var values = grid.values || false;
		var stepped = grid.stepped || false;
		var group = getGroup( mode, values, stepped );
		var spread = generateSpread( density, mode, group );
		var format = grid.format || {
			to: Math.round
		};

		scope_Pips = scope_Target.appendChild(addMarking(
			spread,
			filter,
			format
		));

		return scope_Pips;
	}


	// Shorthand for base dimensions.
	function baseSize ( ) {
		var rect = scope_Base.getBoundingClientRect(), alt = 'offset' + ['Width', 'Height'][options.ort];
		return options.ort === 0 ? (rect.width||scope_Base[alt]) : (rect.height||scope_Base[alt]);
	}

	// Handler for attaching events trough a proxy.
	function attachEvent ( events, element, callback, data ) {

		// This function can be used to 'filter' events to the slider.
		// element is a node, not a nodeList

		var method = function ( e ){

			if ( scope_Target.hasAttribute('disabled') ) {
				return false;
			}

			// Stop if an active 'tap' transition is taking place.
			if ( hasClass(scope_Target, options.cssClasses.tap) ) {
				return false;
			}

			e = fixEvent(e, data.pageOffset, data.target || element);

			// Handle reject of multitouch
			if ( !e ) {
				return false;
			}

			// Ignore right or middle clicks on start #454
			if ( events === actions.start && e.buttons !== undefined && e.buttons > 1 ) {
				return false;
			}

			// Ignore right or middle clicks on start #454
			if ( data.hover && e.buttons ) {
				return false;
			}

			// 'supportsPassive' is only true if a browser also supports touch-action: none in CSS.
			// iOS safari does not, so it doesn't get to benefit from passive scrolling. iOS does support
			// touch-action: manipulation, but that allows panning, which breaks
			// sliders after zooming/on non-responsive pages.
			// See: https://bugs.webkit.org/show_bug.cgi?id=133112
			if ( !supportsPassive ) {
				e.preventDefault();
			}

			e.calcPoint = e.points[ options.ort ];

			// Call the event handler with the event [ and additional data ].
			callback ( e, data );
		};

		var methods = [];

		// Bind a closure on the target for every event type.
		events.split(' ').forEach(function( eventName ){
			element.addEventListener(eventName, method, supportsPassive ? { passive: true } : false);
			methods.push([eventName, method]);
		});

		return methods;
	}

	// Provide a clean event with standardized offset values.
	function fixEvent ( e, pageOffset, target ) {

		// Filter the event to register the type, which can be
		// touch, mouse or pointer. Offset changes need to be
		// made on an event specific basis.
		var touch = e.type.indexOf('touch') === 0;
		var mouse = e.type.indexOf('mouse') === 0;
		var pointer = e.type.indexOf('pointer') === 0;

		var x;
		var y;

		// IE10 implemented pointer events with a prefix;
		if ( e.type.indexOf('MSPointer') === 0 ) {
			pointer = true;
		}


		// In the event that multitouch is activated, the only thing one handle should be concerned
		// about is the touches that originated on top of it.
		if ( touch && options.multitouch ) {
			// Returns true if a touch originated on the target.
			var isTouchOnTarget = function (touch) {
				return touch.target === target || target.contains(touch.target);
			};
			// In the case of touchstart events, we need to make sure there is still no more than one
			// touch on the target so we look amongst all touches.
			if (e.type === 'touchstart') {
				var targetTouches = Array.prototype.filter.call(e.touches, isTouchOnTarget);
				// Do not support more than one touch per handle.
				if ( targetTouches.length > 1 ) {
					return false;
				}
				x = targetTouches[0].pageX;
				y = targetTouches[0].pageY;
			} else {
			// In the other cases, find on changedTouches is enough.
				var targetTouch = Array.prototype.find.call(e.changedTouches, isTouchOnTarget);
				// Cancel if the target touch has not moved.
				if ( !targetTouch ) {
					return false;
				}
				x = targetTouch.pageX;
				y = targetTouch.pageY;
			}
		} else if ( touch ) {
			// Fix bug when user touches with two or more fingers on mobile devices.
			// It's useful when you have two or more sliders on one page,
			// that can be touched simultaneously.
			// #649, #663, #668
			if ( e.touches.length > 1 ) {
				return false;
			}

			// noUiSlider supports one movement at a time,
			// so we can select the first 'changedTouch'.
			x = e.changedTouches[0].pageX;
			y = e.changedTouches[0].pageY;
		}

		pageOffset = pageOffset || getPageOffset(scope_Document);

		if ( mouse || pointer ) {
			x = e.clientX + pageOffset.x;
			y = e.clientY + pageOffset.y;
		}

		e.pageOffset = pageOffset;
		e.points = [x, y];
		e.cursor = mouse || pointer; // Fix #435

		return e;
	}

	// Translate a coordinate in the document to a percentage on the slider
	function calcPointToPercentage ( calcPoint ) {
		var location = calcPoint - offset(scope_Base, options.ort);
		var proposal = ( location * 100 ) / baseSize();
		return options.dir ? 100 - proposal : proposal;
	}

	// Find handle closest to a certain percentage on the slider
	function getClosestHandle ( proposal ) {

		var closest = 100;
		var handleNumber = false;

		scope_Handles.forEach(function(handle, index){

			// Disabled handles are ignored
			if ( handle.hasAttribute('disabled') ) {
				return;
			}

			var pos = Math.abs(scope_Locations[index] - proposal);

			if ( pos < closest ) {
				handleNumber = index;
				closest = pos;
			}
		});

		return handleNumber;
	}

	// Moves handle(s) by a percentage
	// (bool, % to move, [% where handle started, ...], [index in scope_Handles, ...])
	function moveHandles ( upward, proposal, locations, handleNumbers ) {

		var proposals = locations.slice();

		var b = [!upward, upward];
		var f = [upward, !upward];

		// Copy handleNumbers so we don't change the dataset
		handleNumbers = handleNumbers.slice();

		// Check to see which handle is 'leading'.
		// If that one can't move the second can't either.
		if ( upward ) {
			handleNumbers.reverse();
		}

		// Step 1: get the maximum percentage that any of the handles can move
		if ( handleNumbers.length > 1 ) {

			handleNumbers.forEach(function(handleNumber, o) {

				var to = checkHandlePosition(proposals, handleNumber, proposals[handleNumber] + proposal, b[o], f[o], false);

				// Stop if one of the handles can't move.
				if ( to === false ) {
					proposal = 0;
				} else {
					proposal = to - proposals[handleNumber];
					proposals[handleNumber] = to;
				}
			});
		}

		// If using one handle, check backward AND forward
		else {
			b = f = [true];
		}

		var state = false;

		// Step 2: Try to set the handles with the found percentage
		handleNumbers.forEach(function(handleNumber, o) {
			state = setHandle(handleNumber, locations[handleNumber] + proposal, b[o], f[o]) || state;
		});

		// Step 3: If a handle moved, fire events
		if ( state ) {
			handleNumbers.forEach(function(handleNumber){
				fireEvent('update', handleNumber);
				fireEvent('slide', handleNumber);
			});
		}
	}

	// External event handling
	function fireEvent ( eventName, handleNumber, tap ) {

		Object.keys(scope_Events).forEach(function( targetEvent ) {

			var eventType = targetEvent.split('.')[0];

			if ( eventName === eventType ) {
				scope_Events[targetEvent].forEach(function( callback ) {

					callback.call(
						// Use the slider public API as the scope ('this')
						scope_Self,
						// Return values as array, so arg_1[arg_2] is always valid.
						scope_Values.map(options.format.to),
						// Handle index, 0 or 1
						handleNumber,
						// Unformatted slider values
						scope_Values.slice(),
						// Event is fired by tap, true or false
						tap || false,
						// Left offset of the handle, in relation to the slider
						scope_Locations.slice()
					);
				});
			}
		});
	}


	// Fire 'end' when a mouse or pen leaves the document.
	function documentLeave ( event, data ) {
		if ( event.type === "mouseout" && event.target.nodeName === "HTML" && event.relatedTarget === null ){
			eventEnd (event, data);
		}
	}

	// Handle movement on document for handle and range drag.
	function eventMove ( event, data ) {

		// Fix #498
		// Check value of .buttons in 'start' to work around a bug in IE10 mobile (data.buttonsProperty).
		// https://connect.microsoft.com/IE/feedback/details/927005/mobile-ie10-windows-phone-buttons-property-of-pointermove-event-always-zero
		// IE9 has .buttons and .which zero on mousemove.
		// Firefox breaks the spec MDN defines.
		if ( navigator.appVersion.indexOf("MSIE 9") === -1 && event.buttons === 0 && data.buttonsProperty !== 0 ) {
			return eventEnd(event, data);
		}

		// Check if we are moving up or down
		var movement = (options.dir ? -1 : 1) * (event.calcPoint - data.startCalcPoint);

		// Convert the movement into a percentage of the slider width/height
		var proposal = (movement * 100) / data.baseSize;

		moveHandles(movement > 0, proposal, data.locations, data.handleNumbers);
	}

	// Unbind move events on document, call callbacks.
	function eventEnd ( event, data ) {

		// The handle is no longer active, so remove the class.
		if ( data.handle ) {
			removeClass(data.handle, options.cssClasses.active);
			scope_ActiveHandlesCount -= 1;
		}

		// Unbind the move and end events, which are added on 'start'.
		data.listeners.forEach(function( c ) {
			scope_DocumentElement.removeEventListener(c[0], c[1]);
		});

		if ( scope_ActiveHandlesCount === 0 ) {
			// Remove dragging class.
			removeClass(scope_Target, options.cssClasses.drag);
			setZindex();

			// Remove cursor styles and text-selection events bound to the body.
			if ( event.cursor ) {
				scope_Body.style.cursor = '';
				scope_Body.removeEventListener('selectstart', preventDefault);
			}
		}

		data.handleNumbers.forEach(function(handleNumber){
			fireEvent('change', handleNumber);
			fireEvent('set', handleNumber);
			fireEvent('end', handleNumber);
		});
	}

	// Bind move events on document.
	function eventStart ( event, data ) {

		var handle;
		if ( data.handleNumbers.length === 1 ) {

			var handleOrigin = scope_Handles[data.handleNumbers[0]];

			// Ignore 'disabled' handles
			if ( handleOrigin.hasAttribute('disabled') ) {
				return false;
			}

			handle = handleOrigin.children[0];
			scope_ActiveHandlesCount += 1;

			// Mark the handle as 'active' so it can be styled.
			addClass(handle, options.cssClasses.active);
		}

		// A drag should never propagate up to the 'tap' event.
		event.stopPropagation();

		// Record the event listeners.
		var listeners = [];

		// Attach the move and end events.
		var moveEvent = attachEvent(actions.move, scope_DocumentElement, eventMove, {
			// The event target has changed so we need to propagate the original one so that we keep
			// relying on it to extract target touches.
			target: event.target,
			handle: handle,
			listeners: listeners,
			startCalcPoint: event.calcPoint,
			baseSize: baseSize(),
			pageOffset: event.pageOffset,
			handleNumbers: data.handleNumbers,
			buttonsProperty: event.buttons,
			locations: scope_Locations.slice()
		});

		var endEvent = attachEvent(actions.end, scope_DocumentElement, eventEnd, {
			target: event.target,
			handle: handle,
			listeners: listeners,
			handleNumbers: data.handleNumbers
		});

		var outEvent = attachEvent("mouseout", scope_DocumentElement, documentLeave, {
			target: event.target,
			handle: handle,
			listeners: listeners,
			handleNumbers: data.handleNumbers
		});

		// We want to make sure we pushed the listeners in the listener list rather than creating
		// a new one as it has already been passed to the event handlers.
		listeners.push.apply(listeners, moveEvent.concat(endEvent, outEvent));

		// Text selection isn't an issue on touch devices,
		// so adding cursor styles can be skipped.
		if ( event.cursor ) {

			// Prevent the 'I' cursor and extend the range-drag cursor.
			scope_Body.style.cursor = getComputedStyle(event.target).cursor;

			// Mark the target with a dragging state.
			if ( scope_Handles.length > 1 ) {
				addClass(scope_Target, options.cssClasses.drag);
			}

			// Prevent text selection when dragging the handles.
			// In noUiSlider <= 9.2.0, this was handled by calling preventDefault on mouse/touch start/move,
			// which is scroll blocking. The selectstart event is supported by FireFox starting from version 52,
			// meaning the only holdout is iOS Safari. This doesn't matter: text selection isn't triggered there.
			// The 'cursor' flag is false.
			// See: http://caniuse.com/#search=selectstart
			scope_Body.addEventListener('selectstart', preventDefault, false);
		}

		data.handleNumbers.forEach(function(handleNumber){
			fireEvent('start', handleNumber);
		});
	}

	// Move closest handle to tapped location.
	function eventTap ( event ) {

		// The tap event shouldn't propagate up
		event.stopPropagation();

		var proposal = calcPointToPercentage(event.calcPoint);
		var handleNumber = getClosestHandle(proposal);

		// Tackle the case that all handles are 'disabled'.
		if ( handleNumber === false ) {
			return false;
		}

		// Flag the slider as it is now in a transitional state.
		// Transition takes a configurable amount of ms (default 300). Re-enable the slider after that.
		if ( !options.events.snap ) {
			addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
		}

		setHandle(handleNumber, proposal, true, true);

		setZindex();

		fireEvent('slide', handleNumber, true);
		fireEvent('update', handleNumber, true);
		fireEvent('change', handleNumber, true);
		fireEvent('set', handleNumber, true);

		if ( options.events.snap ) {
			eventStart(event, { handleNumbers: [handleNumber] });
		}
	}

	// Fires a 'hover' event for a hovered mouse/pen position.
	function eventHover ( event ) {

		var proposal = calcPointToPercentage(event.calcPoint);

		var to = scope_Spectrum.getStep(proposal);
		var value = scope_Spectrum.fromStepping(to);

		Object.keys(scope_Events).forEach(function( targetEvent ) {
			if ( 'hover' === targetEvent.split('.')[0] ) {
				scope_Events[targetEvent].forEach(function( callback ) {
					callback.call( scope_Self, value );
				});
			}
		});
	}

	// Attach events to several slider parts.
	function bindSliderEvents ( behaviour ) {

		// Attach the standard drag event to the handles.
		if ( !behaviour.fixed ) {

			scope_Handles.forEach(function( handle, index ){

				// These events are only bound to the visual handle
				// element, not the 'real' origin element.
				attachEvent ( actions.start, handle.children[0], eventStart, {
					handleNumbers: [index]
				});
			});
		}

		// Attach the tap event to the slider base.
		if ( behaviour.tap ) {
			attachEvent (actions.start, scope_Base, eventTap, {});
		}

		// Fire hover events
		if ( behaviour.hover ) {
			attachEvent (actions.move, scope_Base, eventHover, { hover: true });
		}

		// Make the range draggable.
		if ( behaviour.drag ){

			scope_Connects.forEach(function( connect, index ){

				if ( connect === false || index === 0 || index === scope_Connects.length - 1 ) {
					return;
				}

				var handleBefore = scope_Handles[index - 1];
				var handleAfter = scope_Handles[index];
				var eventHolders = [connect];

				addClass(connect, options.cssClasses.draggable);

				// When the range is fixed, the entire range can
				// be dragged by the handles. The handle in the first
				// origin will propagate the start event upward,
				// but it needs to be bound manually on the other.
				if ( behaviour.fixed ) {
					eventHolders.push(handleBefore.children[0]);
					eventHolders.push(handleAfter.children[0]);
				}

				eventHolders.forEach(function( eventHolder ) {
					attachEvent ( actions.start, eventHolder, eventStart, {
						handles: [handleBefore, handleAfter],
						handleNumbers: [index - 1, index]
					});
				});
			});
		}
	}


	// Split out the handle positioning logic so the Move event can use it, too
	function checkHandlePosition ( reference, handleNumber, to, lookBackward, lookForward, getValue ) {

		// For sliders with multiple handles, limit movement to the other handle.
		// Apply the margin option by adding it to the handle positions.
		if ( scope_Handles.length > 1 ) {

			if ( lookBackward && handleNumber > 0 ) {
				to = Math.max(to, reference[handleNumber - 1] + options.margin);
			}

			if ( lookForward && handleNumber < scope_Handles.length - 1 ) {
				to = Math.min(to, reference[handleNumber + 1] - options.margin);
			}
		}

		// The limit option has the opposite effect, limiting handles to a
		// maximum distance from another. Limit must be > 0, as otherwise
		// handles would be unmoveable.
		if ( scope_Handles.length > 1 && options.limit ) {

			if ( lookBackward && handleNumber > 0 ) {
				to = Math.min(to, reference[handleNumber - 1] + options.limit);
			}

			if ( lookForward && handleNumber < scope_Handles.length - 1 ) {
				to = Math.max(to, reference[handleNumber + 1] - options.limit);
			}
		}

		// The padding option keeps the handles a certain distance from the
		// edges of the slider. Padding must be > 0.
		if ( options.padding ) {

			if ( handleNumber === 0 ) {
				to = Math.max(to, options.padding);
			}

			if ( handleNumber === scope_Handles.length - 1 ) {
				to = Math.min(to, 100 - options.padding);
			}
		}

		to = scope_Spectrum.getStep(to);

		// Limit percentage to the 0 - 100 range
		to = limit(to);

		// Return false if handle can't move
		if ( to === reference[handleNumber] && !getValue ) {
			return false;
		}

		return to;
	}

	function toPct ( pct ) {
		return pct + '%';
	}

	// Updates scope_Locations and scope_Values, updates visual state
	function updateHandlePosition ( handleNumber, to ) {

		// Update locations.
		scope_Locations[handleNumber] = to;

		// Convert the value to the slider stepping/range.
		scope_Values[handleNumber] = scope_Spectrum.fromStepping(to);

		// Called synchronously or on the next animationFrame
		var stateUpdate = function() {
			scope_Handles[handleNumber].style[options.style] = toPct(to);
			updateConnect(handleNumber);
			updateConnect(handleNumber + 1);
		};

		// Set the handle to the new position.
		// Use requestAnimationFrame for efficient painting.
		// No significant effect in Chrome, Edge sees dramatic performace improvements.
		// Option to disable is useful for unit tests, and single-step debugging.
		if ( window.requestAnimationFrame && options.useRequestAnimationFrame ) {
			window.requestAnimationFrame(stateUpdate);
		} else {
			stateUpdate();
		}
	}

	function setZindex ( ) {

		scope_HandleNumbers.forEach(function(handleNumber){
			// Handles before the slider middle are stacked later = higher,
			// Handles after the middle later is lower
			// [[7] [8] .......... | .......... [5] [4]
			var dir = (scope_Locations[handleNumber] > 50 ? -1 : 1);
			var zIndex = 3 + (scope_Handles.length + (dir * handleNumber));
			scope_Handles[handleNumber].childNodes[0].style.zIndex = zIndex;
		});
	}

	// Test suggested values and apply margin, step.
	function setHandle ( handleNumber, to, lookBackward, lookForward ) {

		to = checkHandlePosition(scope_Locations, handleNumber, to, lookBackward, lookForward, false);

		if ( to === false ) {
			return false;
		}

		updateHandlePosition(handleNumber, to);

		return true;
	}

	// Updates style attribute for connect nodes
	function updateConnect ( index ) {

		// Skip connects set to false
		if ( !scope_Connects[index] ) {
			return;
		}

		var l = 0;
		var h = 100;

		if ( index !== 0 ) {
			l = scope_Locations[index - 1];
		}

		if ( index !== scope_Connects.length - 1 ) {
			h = scope_Locations[index];
		}

		scope_Connects[index].style[options.style] = toPct(l);
		scope_Connects[index].style[options.styleOposite] = toPct(100 - h);
	}

	// ...
	function setValue ( to, handleNumber ) {

		// Setting with null indicates an 'ignore'.
		// Inputting 'false' is invalid.
		if ( to === null || to === false ) {
			return;
		}

		// If a formatted number was passed, attemt to decode it.
		if ( typeof to === 'number' ) {
			to = String(to);
		}

		to = options.format.from(to);

		// Request an update for all links if the value was invalid.
		// Do so too if setting the handle fails.
		if ( to !== false && !isNaN(to) ) {
			setHandle(handleNumber, scope_Spectrum.toStepping(to), false, false);
		}
	}

	// Set the slider value.
	function valueSet ( input, fireSetEvent ) {

		var values = asArray(input);
		var isInit = scope_Locations[0] === undefined;

		// Event fires by default
		fireSetEvent = (fireSetEvent === undefined ? true : !!fireSetEvent);

		values.forEach(setValue);

		// Animation is optional.
		// Make sure the initial values were set before using animated placement.
		if ( options.animate && !isInit ) {
			addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
		}

		// Now that all base values are set, apply constraints
		scope_HandleNumbers.forEach(function(handleNumber){
			setHandle(handleNumber, scope_Locations[handleNumber], true, false);
		});

		setZindex();

		scope_HandleNumbers.forEach(function(handleNumber){

			fireEvent('update', handleNumber);

			// Fire the event only for handles that received a new value, as per #579
			if ( values[handleNumber] !== null && fireSetEvent ) {
				fireEvent('set', handleNumber);
			}
		});
	}

	// Reset slider to initial values
	function valueReset ( fireSetEvent ) {
		valueSet(options.start, fireSetEvent);
	}

	// Get the slider value.
	function valueGet ( ) {

		var values = scope_Values.map(options.format.to);

		// If only one handle is used, return a single value.
		if ( values.length === 1 ){
			return values[0];
		}

		return values;
	}

	// Removes classes from the root and empties it.
	function destroy ( ) {

		for ( var key in options.cssClasses ) {
			if ( !options.cssClasses.hasOwnProperty(key) ) { continue; }
			removeClass(scope_Target, options.cssClasses[key]);
		}

		while (scope_Target.firstChild) {
			scope_Target.removeChild(scope_Target.firstChild);
		}

		delete scope_Target.noUiSlider;
	}

	// Get the current step size for the slider.
	function getCurrentStep ( ) {

		// Check all locations, map them to their stepping point.
		// Get the step point, then find it in the input list.
		return scope_Locations.map(function( location, index ){

			var nearbySteps = scope_Spectrum.getNearbySteps( location );
			var value = scope_Values[index];
			var increment = nearbySteps.thisStep.step;
			var decrement = null;

			// If the next value in this step moves into the next step,
			// the increment is the start of the next step - the current value
			if ( increment !== false ) {
				if ( value + increment > nearbySteps.stepAfter.startValue ) {
					increment = nearbySteps.stepAfter.startValue - value;
				}
			}


			// If the value is beyond the starting point
			if ( value > nearbySteps.thisStep.startValue ) {
				decrement = nearbySteps.thisStep.step;
			}

			else if ( nearbySteps.stepBefore.step === false ) {
				decrement = false;
			}

			// If a handle is at the start of a step, it always steps back into the previous step first
			else {
				decrement = value - nearbySteps.stepBefore.highestStep;
			}


			// Now, if at the slider edges, there is not in/decrement
			if ( location === 100 ) {
				increment = null;
			}

			else if ( location === 0 ) {
				decrement = null;
			}

			// As per #391, the comparison for the decrement step can have some rounding issues.
			var stepDecimals = scope_Spectrum.countStepDecimals();

			// Round per #391
			if ( increment !== null && increment !== false ) {
				increment = Number(increment.toFixed(stepDecimals));
			}

			if ( decrement !== null && decrement !== false ) {
				decrement = Number(decrement.toFixed(stepDecimals));
			}

			return [decrement, increment];
		});
	}

	// Attach an event to this slider, possibly including a namespace
	function bindEvent ( namespacedEvent, callback ) {
		scope_Events[namespacedEvent] = scope_Events[namespacedEvent] || [];
		scope_Events[namespacedEvent].push(callback);

		// If the event bound is 'update,' fire it immediately for all handles.
		if ( namespacedEvent.split('.')[0] === 'update' ) {
			scope_Handles.forEach(function(a, index){
				fireEvent('update', index);
			});
		}
	}

	// Undo attachment of event
	function removeEvent ( namespacedEvent ) {

		var event = namespacedEvent && namespacedEvent.split('.')[0];
		var namespace = event && namespacedEvent.substring(event.length);

		Object.keys(scope_Events).forEach(function( bind ){

			var tEvent = bind.split('.')[0],
				tNamespace = bind.substring(tEvent.length);

			if ( (!event || event === tEvent) && (!namespace || namespace === tNamespace) ) {
				delete scope_Events[bind];
			}
		});
	}

	// Updateable: margin, limit, padding, step, range, animate, snap
	function updateOptions ( optionsToUpdate, fireSetEvent ) {

		// Spectrum is created using the range, snap, direction and step options.
		// 'snap' and 'step' can be updated.
		// If 'snap' and 'step' are not passed, they should remain unchanged.
		var v = valueGet();

		var updateAble = ['margin', 'limit', 'padding', 'range', 'animate', 'snap', 'step', 'format'];

		// Only change options that we're actually passed to update.
		updateAble.forEach(function(name){
			if ( optionsToUpdate[name] !== undefined ) {
				originalOptions[name] = optionsToUpdate[name];
			}
		});

		var newOptions = testOptions(originalOptions);

		// Load new options into the slider state
		updateAble.forEach(function(name){
			if ( optionsToUpdate[name] !== undefined ) {
				options[name] = newOptions[name];
			}
		});

		scope_Spectrum = newOptions.spectrum;

		// Limit, margin and padding depend on the spectrum but are stored outside of it. (#677)
		options.margin = newOptions.margin;
		options.limit = newOptions.limit;
		options.padding = newOptions.padding;

		// Update pips, removes existing.
		if ( options.pips ) {
			pips(options.pips);
		}

		// Invalidate the current positioning so valueSet forces an update.
		scope_Locations = [];
		valueSet(optionsToUpdate.start || v, fireSetEvent);
	}

	// Throw an error if the slider was already initialized.
	if ( scope_Target.noUiSlider ) {
		throw new Error("noUiSlider (" + VERSION + "): Slider was already initialized.");
	}

	// Create the base element, initialise HTML and set classes.
	// Add handles and connect elements.
	addSlider(scope_Target);
	addElements(options.connect, scope_Base);

	scope_Self = {
		destroy: destroy,
		steps: getCurrentStep,
		on: bindEvent,
		off: removeEvent,
		get: valueGet,
		set: valueSet,
		reset: valueReset,
		// Exposed for unit testing, don't use this in your application.
		__moveHandles: function(a, b, c) { moveHandles(a, b, scope_Locations, c); },
		options: originalOptions, // Issue #600, #678
		updateOptions: updateOptions,
		target: scope_Target, // Issue #597
		removePips: removePips,
		pips: pips // Issue #594
	};

	// Attach user events.
	bindSliderEvents(options.events);

	// Use the public value method to set the start values.
	valueSet(options.start);

	if ( options.pips ) {
		pips(options.pips);
	}

	if ( options.tooltips ) {
		tooltips();
	}

	aria();

	return scope_Self;

}


	// Run the standard initializer
	function initialize ( target, originalOptions ) {

		if ( !target || !target.nodeName ) {
			throw new Error("noUiSlider (" + VERSION + "): create requires a single element, got: " + target);
		}

		// Test the options and create the slider environment;
		var options = testOptions( originalOptions, target );
		var api = closure( target, options, originalOptions );

		target.noUiSlider = api;

		return api;
	}

	// Use an object instead of a function for future expansibility;
	return {
		version: VERSION,
		create: initialize
	};

}));

/***/ }),

/***/ "../../../../rxjs/_esm5/add/observable/fromEvent.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_fromEvent__ = __webpack_require__("../../../../rxjs/_esm5/observable/fromEvent.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._observable_fromEvent PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["Observable"].fromEvent = __WEBPACK_IMPORTED_MODULE_1__observable_fromEvent__["a" /* fromEvent */];
//# sourceMappingURL=fromEvent.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/observable/merge.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_merge__ = __webpack_require__("../../../../rxjs/_esm5/observable/merge.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._observable_merge PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["Observable"].merge = __WEBPACK_IMPORTED_MODULE_1__observable_merge__["a" /* merge */];
//# sourceMappingURL=merge.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/map.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_map__ = __webpack_require__("../../../../rxjs/_esm5/operator/map.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_map PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["Observable"].prototype.map = __WEBPACK_IMPORTED_MODULE_1__operator_map__["a" /* map */];
//# sourceMappingURL=map.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/mergeMap.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_mergeMap__ = __webpack_require__("../../../../rxjs/_esm5/operator/mergeMap.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_mergeMap PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["Observable"].prototype.mergeMap = __WEBPACK_IMPORTED_MODULE_1__operator_mergeMap__["a" /* mergeMap */];
__WEBPACK_IMPORTED_MODULE_0__Observable__["Observable"].prototype.flatMap = __WEBPACK_IMPORTED_MODULE_1__operator_mergeMap__["a" /* mergeMap */];
//# sourceMappingURL=mergeMap.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/takeUntil.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_takeUntil__ = __webpack_require__("../../../../rxjs/_esm5/operator/takeUntil.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_takeUntil PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["Observable"].prototype.takeUntil = __WEBPACK_IMPORTED_MODULE_1__operator_takeUntil__["a" /* takeUntil */];
//# sourceMappingURL=takeUntil.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operator/takeUntil.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = takeUntil;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_takeUntil__ = __webpack_require__("../../../../rxjs/_esm5/operators/takeUntil.js");
/** PURE_IMPORTS_START .._operators_takeUntil PURE_IMPORTS_END */

/**
 * Emits the values emitted by the source Observable until a `notifier`
 * Observable emits a value.
 *
 * <span class="informal">Lets values pass until a second Observable,
 * `notifier`, emits something. Then, it completes.</span>
 *
 * <img src="./img/takeUntil.png" width="100%">
 *
 * `takeUntil` subscribes and begins mirroring the source Observable. It also
 * monitors a second Observable, `notifier` that you provide. If the `notifier`
 * emits a value, the output Observable stops mirroring the source Observable
 * and completes.
 *
 * @example <caption>Tick every second until the first click happens</caption>
 * var interval = Rx.Observable.interval(1000);
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = interval.takeUntil(clicks);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link take}
 * @see {@link takeLast}
 * @see {@link takeWhile}
 * @see {@link skip}
 *
 * @param {Observable} notifier The Observable whose first emitted value will
 * cause the output Observable of `takeUntil` to stop emitting values from the
 * source Observable.
 * @return {Observable<T>} An Observable that emits the values from the source
 * Observable until such time as `notifier` emits its first value.
 * @method takeUntil
 * @owner Observable
 */
function takeUntil(notifier) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_takeUntil__["a" /* takeUntil */])(notifier)(this);
}
//# sourceMappingURL=takeUntil.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operators/takeUntil.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = takeUntil;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__OuterSubscriber__ = __webpack_require__("../../../../rxjs/_esm5/OuterSubscriber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_subscribeToResult__ = __webpack_require__("../../../../rxjs/_esm5/util/subscribeToResult.js");
/** PURE_IMPORTS_START .._OuterSubscriber,.._util_subscribeToResult PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


/**
 * Emits the values emitted by the source Observable until a `notifier`
 * Observable emits a value.
 *
 * <span class="informal">Lets values pass until a second Observable,
 * `notifier`, emits something. Then, it completes.</span>
 *
 * <img src="./img/takeUntil.png" width="100%">
 *
 * `takeUntil` subscribes and begins mirroring the source Observable. It also
 * monitors a second Observable, `notifier` that you provide. If the `notifier`
 * emits a value or a complete notification, the output Observable stops
 * mirroring the source Observable and completes.
 *
 * @example <caption>Tick every second until the first click happens</caption>
 * var interval = Rx.Observable.interval(1000);
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = interval.takeUntil(clicks);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link take}
 * @see {@link takeLast}
 * @see {@link takeWhile}
 * @see {@link skip}
 *
 * @param {Observable} notifier The Observable whose first emitted value will
 * cause the output Observable of `takeUntil` to stop emitting values from the
 * source Observable.
 * @return {Observable<T>} An Observable that emits the values from the source
 * Observable until such time as `notifier` emits its first value.
 * @method takeUntil
 * @owner Observable
 */
function takeUntil(notifier) {
    return function (source) { return source.lift(new TakeUntilOperator(notifier)); };
}
var TakeUntilOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function TakeUntilOperator(notifier) {
        this.notifier = notifier;
    }
    TakeUntilOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new TakeUntilSubscriber(subscriber, this.notifier));
    };
    return TakeUntilOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var TakeUntilSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(TakeUntilSubscriber, _super);
    function TakeUntilSubscriber(destination, notifier) {
        _super.call(this, destination);
        this.notifier = notifier;
        this.add(Object(__WEBPACK_IMPORTED_MODULE_1__util_subscribeToResult__["a" /* subscribeToResult */])(this, notifier));
    }
    TakeUntilSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.complete();
    };
    TakeUntilSubscriber.prototype.notifyComplete = function () {
        // noop
    };
    return TakeUntilSubscriber;
}(__WEBPACK_IMPORTED_MODULE_0__OuterSubscriber__["a" /* OuterSubscriber */]));
//# sourceMappingURL=takeUntil.js.map 


/***/ }),

/***/ "../../../../webpack/buildin/module.js":
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ })

});
//# sourceMappingURL=search.module.chunk.js.map