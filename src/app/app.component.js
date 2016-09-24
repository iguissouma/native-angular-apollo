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
var nativescript_ng2_magic_1 = require('nativescript-ng2-magic');
var angular2_apollo_1 = require('angular2-apollo');
// We need this to parse graphql string
var graphql_tag_1 = require('graphql-tag');
var client_1 = require("./client");
var AppComponent = (function () {
    // Inject Angular2Apollo service
    function AppComponent() {
        //Inject Angular2Apollo service is null when using injectin, init manually
        this.apollo = new angular2_apollo_1.Angular2Apollo(client_1.client);
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Query users data with observable variables
        this.apollo.watchQuery({
            query: (_a = ["\n        query getUsers($name: String) {\n          users(name: $name) {\n            firstName\n            lastName\n            emails {\n              address\n              verified\n            }\n          }\n        }\n      "], _a.raw = ["\n        query getUsers($name: String) {\n          users(name: $name) {\n            firstName\n            lastName\n            emails {\n              address\n              verified\n            }\n          }\n        }\n      "], graphql_tag_1.default(_a)),
            variables: {
                name: 'hello',
            },
        })
            .subscribe(function (_a) {
            var data = _a.data;
            _this.users = data.users;
        });
        this.title = 'List of users';
        var _a;
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        // Set nameFilter to null after NgOnInit happend and the view has been initated
    };
    AppComponent = __decorate([
        nativescript_ng2_magic_1.Component({
            selector: 'app-root',
            templateUrl: 'app.component.html',
            styleUrls: ['app.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map