webpackJsonp(["calendar.module"],{

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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_booking__ = __webpack_require__("../../../../../src/app/models/booking.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CalendarItemComponent = /** @class */ (function () {
    function CalendarItemComponent() {
        this.selected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_booking__["a" /* Booking */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_booking__["a" /* Booking */]) === "function" && _a || Object)
    ], CalendarItemComponent.prototype, "booking", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], CalendarItemComponent.prototype, "hour", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], CalendarItemComponent.prototype, "selected", void 0);
    CalendarItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'calendar-item',
            template: __webpack_require__("../../../../../src/app/calendar/calendar-item/calendar-item.component.html"),
            styles: [__webpack_require__("../../../../../src/app/calendar/calendar-item/calendar-item.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CalendarItemComponent);
    return CalendarItemComponent;
    var _a;
}());

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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarRowComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_booking_service__ = __webpack_require__("../../../../../src/app/services/booking.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_room__ = __webpack_require__("../../../../../src/app/models/room.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_reservation__ = __webpack_require__("../../../../../src/app/models/reservation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CalendarRowComponent = /** @class */ (function () {
    function CalendarRowComponent(bookingService) {
        this.bookingService = bookingService;
        this.reservationSelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
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
        var reservation = new __WEBPACK_IMPORTED_MODULE_3__models_reservation__["a" /* Reservation */](this.room, this.date, hour);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__models_room__["a" /* Room */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__models_room__["a" /* Room */]) === "function" && _a || Object)
    ], CalendarRowComponent.prototype, "room", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], CalendarRowComponent.prototype, "date", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], CalendarRowComponent.prototype, "hours", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], CalendarRowComponent.prototype, "reservationSelected", void 0);
    CalendarRowComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'calendar-row',
            template: __webpack_require__("../../../../../src/app/calendar/calendar-row/calendar-row.component.html"),
            styles: [__webpack_require__("../../../../../src/app/calendar/calendar-row/calendar-row.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_booking_service__["a" /* BookingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_booking_service__["a" /* BookingService */]) === "function" && _b || Object])
    ], CalendarRowComponent);
    return CalendarRowComponent;
    var _a, _b;
}());

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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_room_service__ = __webpack_require__("../../../../../src/app/services/room.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




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
        window.open(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].reservationUrl);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'calendar',
            template: __webpack_require__("../../../../../src/app/calendar/calendar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/calendar/calendar.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_room_service__["a" /* RoomService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_room_service__["a" /* RoomService */]) === "function" && _b || Object])
    ], CalendarComponent);
    return CalendarComponent;
    var _a, _b;
}());

//# sourceMappingURL=calendar.component.js.map

/***/ }),

/***/ "../../../../../src/app/calendar/calendar.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarModule", function() { return CalendarModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__calendar_component__ = __webpack_require__("../../../../../src/app/calendar/calendar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__calendar_row_calendar_row_component__ = __webpack_require__("../../../../../src/app/calendar/calendar-row/calendar-row.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__calendar_item_calendar_item_component__ = __webpack_require__("../../../../../src/app/calendar/calendar-item/calendar-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pipes_timestamp_pipe__ = __webpack_require__("../../../../../src/app/pipes/timestamp.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__calendar_component__["a" /* CalendarComponent */] }
];
var CalendarModule = /** @class */ (function () {
    function CalendarModule() {
    }
    CalendarModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forChild(routes)
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__calendar_component__["a" /* CalendarComponent */],
                __WEBPACK_IMPORTED_MODULE_4__calendar_row_calendar_row_component__["a" /* CalendarRowComponent */],
                __WEBPACK_IMPORTED_MODULE_5__calendar_item_calendar_item_component__["a" /* CalendarItemComponent */],
                __WEBPACK_IMPORTED_MODULE_6__pipes_timestamp_pipe__["a" /* TimestampPipe */]
            ]
        })
    ], CalendarModule);
    return CalendarModule;
}());

//# sourceMappingURL=calendar.module.js.map

/***/ }),

/***/ "../../../../../src/app/models/booking.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Booking; });
var Booking = /** @class */ (function () {
    function Booking() {
    }
    return Booking;
}());

//# sourceMappingURL=booking.js.map

/***/ }),

/***/ "../../../../../src/app/models/reservation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Reservation; });
var Reservation = /** @class */ (function () {
    function Reservation(room, date, hour) {
        this.room = room;
        this.date = date;
        this.hour = hour;
    }
    return Reservation;
}());

//# sourceMappingURL=reservation.js.map

/***/ }),

/***/ "../../../../../src/app/models/room.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Room; });
var Room = /** @class */ (function () {
    function Room() {
    }
    return Room;
}());

//# sourceMappingURL=room.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/timestamp.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimestampPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'timestamp'
        })
    ], TimestampPipe);
    return TimestampPipe;
}());

//# sourceMappingURL=timestamp.pipe.js.map

/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/app/calendar/calendar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".filter-notes {\n\tmargin-bottom: 20px;\n\tmargin-left: 15px;\n}\n\n.filter-notes .filter-header,\n.filter-notes .filter-option .title {\n  font-weight: bold;\n}\n\n.calendar-header {\n  font-weight: bold;\n  margin-bottom: 2px;\n}\n\n.name {\n  background-color: #ddd;\n  width: 100px;\n  min-width: 100px;\n  text-align: center;\n}\n\n.capacity {\n  background-color: #eee;\n  width: 80px;\n  min-width: 80px;\n  text-align: center;\n}\n\n.hour,\n.booking {\n  list-style-type: none;\n  /* float: left; */\n  width: 90px;\n  text-align: center;\n}\n\n.booking {\n\tpadding: 2px;\n\theight: 100%;\n\ttext-align: center;\n\tbackground-color: #89d47e;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n}\n\n.booking button {\n\tborder: none;\n\tcursor: pointer;\n\ttext-decoration: none;\n\tcolor: blue;\n\tmargin-left: auto;\n\tmargin-right: auto;\n\tbackground-color: inherit;\n\tmargin: 0px;\n\tpadding: 0px;\n\twidth: 100%;\n}\n\n.calendar-list {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-align: stretch;\n\t    -ms-flex-align: stretch;\n\t        align-items: stretch;\n\tmargin: 0px;\n\tpadding: 0px;\n}\n\n.calendar-list > * {\n\tmargin: 2px;\n}\n\n.conflict {\n  background-color: #e3bb81;\n}\n\n.clear {\n  clear: both;\n}\n\n.calendar-row, .calendar-header {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-orient: horizontal;\n\t-webkit-box-direction: normal;\n\t    -ms-flex-direction: row;\n\t        flex-direction: row;\n}\n.hours {\n\t-webkit-box-flex: 1;\n\t    -ms-flex-positive: 1;\n\t        flex-grow: 1;\n}\n", ""]);

// exports


/***/ })

});
//# sourceMappingURL=calendar.module.chunk.js.map