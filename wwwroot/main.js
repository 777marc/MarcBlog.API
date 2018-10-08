(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_guards/auth.guard.ts":
/*!***************************************!*\
  !*** ./src/app/_guards/auth.guard.ts ***!
  \***************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/alertify.service */ "./src/app/_services/alertify.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router, alertify) {
        this.authService = authService;
        this.router = router;
        this.alertify = alertify;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        this.alertify.error('No way Jose!');
        this.router.navigate(['/home']);
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/_resolvers/blogpost-resolver.ts":
/*!*************************************************!*\
  !*** ./src/app/_resolvers/blogpost-resolver.ts ***!
  \*************************************************/
/*! exports provided: BlogpostResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogpostResolver", function() { return BlogpostResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_blogpost_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/blogpost.service */ "./src/app/_services/blogpost.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/internal/operators/catchError */ "./node_modules/rxjs/internal/operators/catchError.js");
/* harmony import */ var rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BlogpostResolver = /** @class */ (function () {
    function BlogpostResolver(blogPostService, router, alertify) {
        this.blogPostService = blogPostService;
        this.router = router;
        this.alertify = alertify;
    }
    BlogpostResolver.prototype.resolve = function (route) {
        var _this = this;
        return this.blogPostService.getPost(route.params['id']).pipe(Object(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
            _this.alertify.error('Problem retrieving data.');
            _this.router.navigate(['/home']);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
        }));
    };
    BlogpostResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_blogpost_service__WEBPACK_IMPORTED_MODULE_2__["BlogpostService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"]])
    ], BlogpostResolver);
    return BlogpostResolver;
}());



/***/ }),

/***/ "./src/app/_resolvers/blogposts-resolver.ts":
/*!**************************************************!*\
  !*** ./src/app/_resolvers/blogposts-resolver.ts ***!
  \**************************************************/
/*! exports provided: BlogpostsResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogpostsResolver", function() { return BlogpostsResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_blogpost_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/blogpost.service */ "./src/app/_services/blogpost.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/internal/operators/catchError */ "./node_modules/rxjs/internal/operators/catchError.js");
/* harmony import */ var rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BlogpostsResolver = /** @class */ (function () {
    function BlogpostsResolver(blogPostService, router, alertify) {
        this.blogPostService = blogPostService;
        this.router = router;
        this.alertify = alertify;
    }
    BlogpostsResolver.prototype.resolve = function (route) {
        var _this = this;
        return this.blogPostService.getPosts().pipe(Object(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
            _this.alertify.error('Problem retrieving data.');
            _this.router.navigate(['/about']);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
        }));
    };
    BlogpostsResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_blogpost_service__WEBPACK_IMPORTED_MODULE_2__["BlogpostService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"]])
    ], BlogpostsResolver);
    return BlogpostsResolver;
}());



/***/ }),

/***/ "./src/app/_services/alertify.service.ts":
/*!***********************************************!*\
  !*** ./src/app/_services/alertify.service.ts ***!
  \***********************************************/
/*! exports provided: AlertifyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertifyService", function() { return AlertifyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AlertifyService = /** @class */ (function () {
    function AlertifyService() {
    }
    AlertifyService.prototype.confirm = function (message, okCallback) {
        alertify.confirm(message, function (e) {
            if (e) {
                okCallback();
            }
            else {
            }
        });
    };
    AlertifyService.prototype.success = function (message) {
        alertify.success(message);
    };
    AlertifyService.prototype.error = function (message) {
        alertify.error(message);
    };
    AlertifyService.prototype.warning = function (message) {
        alertify.warning(message);
    };
    AlertifyService.prototype.message = function (message) {
        alertify.message(message);
    };
    AlertifyService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], AlertifyService);
    return AlertifyService;
}());



/***/ }),

/***/ "./src/app/_services/auth.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/auth.service.ts ***!
  \*******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment.prod */ "./src/environments/environment.prod.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.baseUrl = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl;
        this.jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]();
    }
    AuthService.prototype.login = function (model) {
        return this.http.post(this.baseUrl + 'auth/login', model).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            var user = response;
            if (user) {
                localStorage.setItem('token', user.tokenString);
            }
        }));
    };
    AuthService.prototype.loggedIn = function () {
        var token = localStorage.getItem('token');
        return !this.jwtHelper.isTokenExpired(token);
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/_services/blogpost.service.ts":
/*!***********************************************!*\
  !*** ./src/app/_services/blogpost.service.ts ***!
  \***********************************************/
/*! exports provided: BlogpostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogpostService", function() { return BlogpostService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BlogpostService = /** @class */ (function () {
    function BlogpostService(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl;
    }
    BlogpostService.prototype.getPosts = function () {
        return this.http.get(this.baseUrl + 'blogposts')
            .map(function (response) { return response.json(); });
    };
    BlogpostService.prototype.getPost = function (id) {
        return this.http.get(this.baseUrl + 'blogposts/' + id)
            .map(function (response) { return response.json(); });
    };
    BlogpostService.prototype.addNewPost = function (model) {
        var body = JSON.stringify(model);
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        headers.append('Accept', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this.http.post(this.baseUrl + 'blogposts', body, options)
            .catch(function (error) { return rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(error.json().error); }).subscribe();
    };
    BlogpostService.prototype.editPost = function (model) {
        var body = JSON.stringify(model);
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        headers.append('Accept', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this.http.put(this.baseUrl + 'blogposts', body, options)
            .catch(function (error) { return rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(error.json().error); }).subscribe();
    };
    BlogpostService.prototype.deletePost = function (id) {
        return this.http.delete(this.baseUrl + 'blogposts/' + id.toString());
    };
    BlogpostService.prototype.addLike = function (id) {
        console.log(id);
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        headers.append('Accept', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this.http.post(this.baseUrl + 'blogposts/' + id, null, options)
            .catch(function (error) { return rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(error.json().error); }).subscribe();
    };
    BlogpostService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], BlogpostService);
    return BlogpostService;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div class=\"container\">\n    <app-nav></app-nav>\n    <router-outlet></router-outlet>\n  </div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/nav/nav.component */ "./src/app/components/nav/nav.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/projects/projects.component */ "./src/app/components/projects/projects.component.ts");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./routes */ "./src/app/routes.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var _app_services_blogpost_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../app/_services/blogpost.service */ "./src/app/_services/blogpost.service.ts");
/* harmony import */ var src_app_components_blogpost_view_blogpost_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/components/blogpost/view/blogpost.component */ "./src/app/components/blogpost/view/blogpost.component.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var src_app_components_admin_admin_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/components/admin/admin.component */ "./src/app/components/admin/admin.component.ts");
/* harmony import */ var src_app_components_admin_login_login_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/components/admin/login/login.component */ "./src/app/components/admin/login/login.component.ts");
/* harmony import */ var src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/_guards/auth.guard */ "./src/app/_guards/auth.guard.ts");
/* harmony import */ var src_app_components_blogpost_new_newblogpost_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/app/components/blogpost/new/newblogpost.component */ "./src/app/components/blogpost/new/newblogpost.component.ts");
/* harmony import */ var ng2_scroll_to_el__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng2-scroll-to-el */ "./node_modules/ng2-scroll-to-el/index.js");
/* harmony import */ var src_app_components_services_services_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! src/app/components/services/services.component */ "./src/app/components/services/services.component.ts");
/* harmony import */ var ngx_editor__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ngx-editor */ "./node_modules/ngx-editor/esm5/ngx-editor.js");
/* harmony import */ var src_app_resolvers_blogpost_resolver__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! src/app/_resolvers/blogpost-resolver */ "./src/app/_resolvers/blogpost-resolver.ts");
/* harmony import */ var src_app_resolvers_blogposts_resolver__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! src/app/_resolvers/blogposts-resolver */ "./src/app/_resolvers/blogposts-resolver.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_8__["NavComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _components_about_about_component__WEBPACK_IMPORTED_MODULE_10__["AboutComponent"],
                _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_11__["ProjectsComponent"],
                _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_13__["ContactComponent"],
                src_app_components_blogpost_view_blogpost_component__WEBPACK_IMPORTED_MODULE_15__["BlogpostComponent"],
                src_app_components_admin_admin_component__WEBPACK_IMPORTED_MODULE_17__["AdminComponent"],
                src_app_components_admin_login_login_component__WEBPACK_IMPORTED_MODULE_18__["LoginComponent"],
                src_app_components_blogpost_new_newblogpost_component__WEBPACK_IMPORTED_MODULE_21__["NewblogpostComponent"],
                src_app_components_services_services_component__WEBPACK_IMPORTED_MODULE_23__["ServicesComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_12__["appRoutes"]),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsDropdownModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                ng2_scroll_to_el__WEBPACK_IMPORTED_MODULE_22__["ScrollToModule"].forRoot(),
                ngx_editor__WEBPACK_IMPORTED_MODULE_24__["NgxEditorModule"]
            ],
            providers: [
                _app_services_blogpost_service__WEBPACK_IMPORTED_MODULE_14__["BlogpostService"],
                src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_16__["AuthService"],
                src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_19__["AlertifyService"],
                src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_20__["AuthGuard"],
                src_app_resolvers_blogposts_resolver__WEBPACK_IMPORTED_MODULE_26__["BlogpostsResolver"],
                src_app_resolvers_blogpost_resolver__WEBPACK_IMPORTED_MODULE_25__["BlogpostResolver"]
            ],
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/about/about.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/about/about.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/about/about.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/about/about.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\"  style=\"width: 100%;\">\n    <div class=\"card-body\">\n      About\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/components/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/components/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/components/admin/admin.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/admin/admin.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\r\n  background-color: #555555; \r\n  border: none;\r\n  color: white;\r\n  padding: 5px 32px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/components/admin/admin.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/admin/admin.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n    <div class=\"card-body\">\n            <div class=\"container\">\n                    <div class=\"row\">\n                        <button type=\"button\" (click)=\"NewBlogPost()\">New Blog Post</button>\n                        &nbsp;\n                        <button type=\"button\">Manage Email Lists</button>\n                    </div>\n                    <hr>\n                    <h3>Current Posts:</h3>\n                    <br>\n                          \n                    <p *ngIf=\"!blogPosts\"><em>Loading...</em></p>\n                    \n                    <table class='table' *ngIf=\"blogPosts\">\n                        <thead>\n                            <tr>\n                                <th>Id</th>\n                                <th>Title</th>\n                                <th>Description</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let post of blogPosts\">\n                                <td>{{ post.id }}</td>\n                                <td>{{ post.title }}</td>\n                                <td>{{ post.description }}</td>\n                                <td>\n                                    <button (click)=\"EditBlogPost(post.id)\">edit</button>\n                                </td>\n                                <td>\n                                    <button (click)=\"DeleteBlogPost(post.id)\">delete</button>\n                                </td>\n                                \n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n                \n\n\n\n    </div>\n</div>\n\n\n  "

/***/ }),

/***/ "./src/app/components/admin/admin.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/admin/admin.component.ts ***!
  \*****************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_blogpost_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/blogpost.service */ "./src/app/_services/blogpost.service.ts");
/* harmony import */ var src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/alertify.service */ "./src/app/_services/alertify.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminComponent = /** @class */ (function () {
    function AdminComponent(router, blogpostService, alertify) {
        this.router = router;
        this.blogpostService = blogpostService;
        this.alertify = alertify;
    }
    AdminComponent.prototype.ngOnInit = function () {
        this.ListBlogPosts();
    };
    AdminComponent.prototype.NewBlogPost = function () {
        this.router.navigate(['/blog/new']);
    };
    AdminComponent.prototype.ListBlogPosts = function () {
        var _this = this;
        this.blogpostService.getPosts().subscribe(function (result) {
            _this.blogPosts = result;
        });
    };
    AdminComponent.prototype.DeleteBlogPost = function (id) {
        var _this = this;
        this.blogpostService.deletePost(id).subscribe(function (result) {
            _this.ListBlogPosts();
        });
    };
    AdminComponent.prototype.EditBlogPost = function (id) {
        this.router.navigate(['/blog/new'], { queryParams: { id: id } });
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/components/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/components/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], src_app_services_blogpost_service__WEBPACK_IMPORTED_MODULE_2__["BlogpostService"], src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/components/admin/login/login.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/admin/login/login.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center {\r\n    margin: auto;\r\n    width: 30%;\r\n    border: 1px solid gainsboro;\r\n    padding: 20px;\r\n}\r\n\r\nbutton {\r\n    margin-top: 20px;\r\n}\r\n\r\nlabel {\r\n    margin-top: 20px;\r\n    margin-bottom: 5px;\r\n    color: gray;\r\n}\r\n\r\nbody {\r\n    background-color: white;\r\n}"

/***/ }),

/***/ "./src/app/components/admin/login/login.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/admin/login/login.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"center\" style=\"background-color:white; padding:20px;\">\n  <form *ngIf=\"!loggedIn()\" #loginForm=\"ngForm\" (submit)=\"login()\">\n    <label for=\"username\">username</label>\n    <input class=\"form-control mr-sm-2\" type=\"text\" name=\"username\" \n           placeholder=\"Username\" required [(ngModel)]=\"model.username\">\n    <label for=\"password\">password</label>           \n    <input class=\"form-control mr-sm-2 ut-c\" type=\"password\" name=\"password\" \n           placeholder=\"Password\" required [(ngModel)]=\"model.password\">\n    <hr>\n    <button [disabled]=\"!loginForm.valid\" class=\"form-control \" type=\"submit\">Login</button>\n  </form> \n</div> "

/***/ }),

/***/ "./src/app/components/admin/login/login.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/admin/login/login.component.ts ***!
  \***********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, alertify, router) {
        this.authService = authService;
        this.alertify = alertify;
        this.router = router;
        this.model = {};
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.authService.login(this.model).subscribe(function (next) {
            _this.alertify.success('You are logged in!');
            _this.router.navigate(['/admin']);
        }, function (error) {
            _this.alertify.error('failed to log in');
            _this.router.navigate(['/']);
        });
    };
    LoginComponent.prototype.loggedIn = function () {
        var token = localStorage.getItem('token');
        return !!token;
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/admin/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/admin/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_2__["AlertifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/blogpost/new/newblogpost.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/components/blogpost/new/newblogpost.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\r\n  background-color: #555555; \r\n  border: none;\r\n  color: white;\r\n  padding: 5px 32px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n  margin-top: 10px;\r\n}"

/***/ }),

/***/ "./src/app/components/blogpost/new/newblogpost.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/blogpost/new/newblogpost.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"background-color:white; padding:50px;\" >\n  <h2>{{pageTitle}}</h2>\n  <div class=\"input-group\">\n      <div class=\"input-group input-group-sm mb-3\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Title</span>\n          </div>\n          <input type=\"text\" \n                 class=\"form-control\" aria-label=\"Sizing example input\" aria-describedby=\"inputGroup-sizing-sm\"\n                 [(ngModel)]=\"model.title\">\n      </div>\n      <div class=\"input-group input-group-sm mb-3\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Description</span>\n          </div>\n          <input type=\"text\" \n                 class=\"form-control\" aria-label=\"Sizing example input\" aria-describedby=\"inputGroup-sizing-sm\"\n                 [(ngModel)]=\"model.description\">\n      </div>\n      <div class=\"input-group input-group-sm mb-3\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Category</span>\n          </div>\n          <input type=\"text\" \n                 class=\"form-control\" aria-label=\"Sizing example input\" aria-describedby=\"inputGroup-sizing-sm\"\n                 [(ngModel)]=\"model.category\">\n      </div>\n\n      <div class=\"input-group input-group-sm mb-3\">\n        <div class=\"input-group-prepend\">\n          <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Likes</span>\n        </div>\n        <input type=\"text\" \n               class=\"form-control\" aria-label=\"Sizing example input\" aria-describedby=\"inputGroup-sizing-sm\"\n               [(ngModel)]=\"model.likes\">\n      </div>\n\n      <app-ngx-editor [placeholder]=\"'Enter text here...'\" [height]=\"200\" [spellcheck]=\"true\" [(ngModel)]=\"model.body\"></app-ngx-editor>\n      \n      <button type=\"button\" (click)=\"submitPost()\">Submit Post</button>\n      \n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/blogpost/new/newblogpost.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/blogpost/new/newblogpost.component.ts ***!
  \******************************************************************/
/*! exports provided: NewblogpostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewblogpostComponent", function() { return NewblogpostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_blogpost_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_services/blogpost.service */ "./src/app/_services/blogpost.service.ts");
/* harmony import */ var src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewblogpostComponent = /** @class */ (function () {
    function NewblogpostComponent(blogpostSevice, alertify, router, activatedRoute) {
        this.blogpostSevice = blogpostSevice;
        this.alertify = alertify;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.model = {};
    }
    NewblogpostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.id = params['id'];
            if (_this.id) {
                _this.getPost(_this.id);
                _this.pageTitle = 'Edit Blog Post';
            }
            else {
                _this.pageTitle = 'New Blog Post';
            }
        });
    };
    ;
    NewblogpostComponent.prototype.getPost = function (id) {
        var _this = this;
        this.blogpostSevice.getPost(id).subscribe(function (result) {
            _this.model = result;
        }, function (error) {
            console.log(error);
        });
    };
    NewblogpostComponent.prototype.submitPost = function () {
        if (typeof this.id === 'undefined') {
            this.blogpostSevice.addNewPost(this.model);
        }
        else {
            this.blogpostSevice.editPost(this.model);
        }
        this.alertify.success('Post Submitted!');
    };
    NewblogpostComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-newblogpost',
            template: __webpack_require__(/*! ./newblogpost.component.html */ "./src/app/components/blogpost/new/newblogpost.component.html"),
            styles: [__webpack_require__(/*! ./newblogpost.component.css */ "./src/app/components/blogpost/new/newblogpost.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_blogpost_service__WEBPACK_IMPORTED_MODULE_1__["BlogpostService"],
            src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_2__["AlertifyService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], NewblogpostComponent);
    return NewblogpostComponent;
}());



/***/ }),

/***/ "./src/app/components/blogpost/view/blogpost.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/components/blogpost/view/blogpost.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\r\n  background-color: #555555; \r\n  border: none;\r\n  color: white;\r\n  padding: 5px 32px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n}\r\n\r\n.dot {\r\n  height: 50px;\r\n  width: 60px;\r\n  background-color: #bbb;\r\n  border-radius: 50%;\r\n  display: inline-block;\r\n  text-align: center;\r\n  margin: auto;\r\n  color: white;\r\n  padding: 10px;\r\n}\r\n\r\n.heart {\r\n  color: #fff; \r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/components/blogpost/view/blogpost.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/blogpost/view/blogpost.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" style=\"width: 100%;\">\n  <div style=\"padding:30px;\">\n      <h1>\n          {{ blogpost?.title }}\n      </h1>\n      <h3>{{ blogpost?.description }}</h3>\n      <h4>Category: {{ blogpost?.category }}</h4>\n      <p class=\"blog-post-meta\">{{ blogpost?.dateCreated | date }} by <a [routerLink]=\"['/about']\">{{ blogpost?.author }}</a></p>\n      <hr>\n      <div [innerHTML]=\"blogpost?.body\"></div>\n      <hr>\n      <div class=\"row\">\n        <span class=\"dot\"><i class=\"fa fa-heart heart\"></i> {{ likes }} </span>\n      </div>\n      <hr>\n      <div class=\"row\">\n        <button (click)=\"addLike(blogpost.id)\"><i class=\"fa fa-heart\"></i> Like</button>&nbsp;\n        <button><i class=\"fa fa-share\"></i> share</button>&nbsp;\n        <button *ngIf=\"loggedIn()\" (click)=\"editBlogPost(blogpost.id)\"><i class=\"fa fa-edit\"></i> edit</button>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/blogpost/view/blogpost.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/blogpost/view/blogpost.component.ts ***!
  \****************************************************************/
/*! exports provided: BlogpostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogpostComponent", function() { return BlogpostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_blogpost_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_services/blogpost.service */ "./src/app/_services/blogpost.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BlogpostComponent = /** @class */ (function () {
    function BlogpostComponent(blogpostService, activatedRoute, router) {
        this.blogpostService = blogpostService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    BlogpostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.getPost(_this.id);
        });
    };
    BlogpostComponent.prototype.getPost = function (id) {
        var _this = this;
        this.activatedRoute.data.subscribe(function (data) {
            _this.blogpost = data['blogpost'];
            _this.likes = _this.blogpost.likes;
        });
    };
    BlogpostComponent.prototype.loggedIn = function () {
        var token = localStorage.getItem('token');
        return !!token;
    };
    BlogpostComponent.prototype.editBlogPost = function (id) {
        this.router.navigate(['/blog/new'], { queryParams: { id: id } });
    };
    BlogpostComponent.prototype.addLike = function (id) {
        this.blogpostService.addLike(id);
        this.likes = this.likes + 1;
    };
    BlogpostComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blogpost',
            template: __webpack_require__(/*! ./blogpost.component.html */ "./src/app/components/blogpost/view/blogpost.component.html"),
            styles: [__webpack_require__(/*! ./blogpost.component.css */ "./src/app/components/blogpost/view/blogpost.component.css")]
        }),
        __metadata("design:paramtypes", [_services_blogpost_service__WEBPACK_IMPORTED_MODULE_1__["BlogpostService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], BlogpostComponent);
    return BlogpostComponent;
}());



/***/ }),

/***/ "./src/app/components/contact/contact.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/contact/contact.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/contact/contact.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/contact/contact.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" style=\"width: 100%;\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">Contact Us!</h5>\n      <p class=\"card-text\">Send us an email or message...</p>\n      <a class=\"p-2 text-dark\" href=\"mailto:marcmendoza@outlook.com\">\n          <button class=\"btn btn-circle btn-secondary\"><i class=\"fa fa-envelope\"></i></button>    \n      </a>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/components/contact/contact.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/contact/contact.component.ts ***!
  \*********************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/components/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/components/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".div-post-container {\r\n    padding: 20px;\r\n    margin-top: 25px;\r\n    display: -webkit-flex; /* Safari */\r\n    -webkit-flex-wrap: wrap; /* Safari 6.1+ */\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.overlay-card{\r\n    background-color:#222;\r\n    background-image: url('bg-masthead.jpg');\r\n    background-size: 325px;\r\n    height:240px;\r\n    padding-top:25px;\r\n}\r\n\r\nh5{\r\n    color:white;\r\n    font-size: x-large;\r\n    font-weight: bolder;\r\n}\r\n\r\n.btn.btn-follow {\r\n    border-radius: 15px;\r\n    border-color: white;\r\n    border-style: solid;\r\n    border-width: 2px;\r\n    margin: 5px;\r\n    color: white;\r\n  }\r\n\r\n.img-rounded{\r\n      border-radius:100px;\r\n      height:100px;\r\n      width:100px;\r\n      margin-bottom:10px;\r\n  }\r\n\r\n.panel.panel-default{\r\n    border:none;\r\n    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);\r\n    background: #ffffff;\r\n  }\r\n\r\n.panel-body{\r\n    padding:20px;\r\n  }\r\n\r\n.truncate {\r\n    width: 100%;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n  }\r\n\r\n.panel-bottom {\r\n    margin-bottom: 15px;\r\n  }"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"div-post-container\">\r\n</div>\r\n\r\n\r\n<div class=\"row\">\r\n    \r\n    <!-- RIGHT ABOUT  -->\r\n    <div class=\"col-md-3\">\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"overlay-card  text-center\">\r\n                <img src=\"../../../assets/images/70879.jpg\" class=\"img-rounded center-block\">\r\n                <div class=\"row\" style=\"padding-left:80px; padding-top:20px;\">\r\n                    <h5>Marc Mendoza</h5>\r\n                </div>                       \r\n            </div>\r\n            <div class=\"panel-body text-center\">\r\n                <p>Principal Developer - Founder</p>\r\n                <a class=\"p-2 text-dark\" href=\"https://www.linkedin.com/in/marc-mendoza-51a6b06/\" target=\"_blank\">\r\n                    <button class=\"btn btn-circle btn-secondary\"><i class=\"fa fa-linkedin\"></i></button>    \r\n                </a>\r\n                <a class=\"p-2\" href=\"https://github.com/777marc\" target=\"_blank\">\r\n                    <button class=\"btn btn-circle btn-secondary\"><i class=\"fa fa-github\"></i></button>    \r\n                </a>\r\n                <a class=\"p-2 text-dark\" href=\"mailto:marcmendoza@outlook.com\">\r\n                    <button class=\"btn btn-circle btn-secondary\"><i class=\"fa fa-envelope\"></i></button>    \r\n                </a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- CENTER BLOG FEED -->\r\n    <div class=\"col-md-6\">\r\n        <div *ngFor=\"let post of posts\">\r\n            <div class=\"panel panel-default panel-bottom\">\r\n                <div class=\"card-body\">\r\n                    <h3 class=\"card-title\">{{post.title}}</h3>\r\n                    <h4 class=\"card-text\">{{post.description}}</h4>\r\n                    <p class=\"card-text\"><i class=\"fa fa-angle-double-right\"></i> {{post.category}}</p>\r\n                    <div class=\"truncate\" [innerHTML]=\"post.body\"></div>\r\n                    <!-- <p class=\"truncate\">{{post.body}}</p> -->\r\n                    <a class=\"nav-link\"  [routerLink]=\"['/blogpost', post.id]\"><i class=\"fa fa-book\"></i> read more</a>\r\n                </div>\r\n            </div>\r\n        </div>  \r\n    </div>\r\n    \r\n    <!-- LEFT MISC INFO -->\r\n    <div class=\"col-md-3\">\r\n        <div class=\"panel panel-default panel-bottom\">\r\n            <div class=\"card-body\">\r\n              <h3 class=\"card-title\">Project Name</h3>\r\n              <h6 class=\"card-subtitle mb-2 text-muted\">A mobile app</h6>\r\n              <p class=\"card-text\">This app helps you do something cool and helps me write better code that people can use to make their lives better</p>\r\n              <a href=\"#\" class=\"card-link\">Source Code</a>\r\n              <a href=\"#\" class=\"card-link\">Live Demo</a>\r\n            </div>\r\n        </div>      \r\n\r\n\r\n        <div class=\"panel panel-default panel-bottom\">\r\n                <div class=\"card-body\">\r\n                  <h3 class=\"card-title\">Project Name #2</h3>\r\n                  <h6 class=\"card-subtitle mb-2 text-muted\">A mobile app</h6>\r\n                  <p class=\"card-text\">This app helps you do something cool and helps me write better code that people can use to make their lives better</p>\r\n                  <a href=\"#\" class=\"card-link\">Source Code</a>\r\n                  <a href=\"#\" class=\"card-link\">Live Demo</a>\r\n                </div>\r\n        </div>      \r\n    \r\n        <div class=\"panel panel-default panel-bottom\">\r\n                <div class=\"card-body\">\r\n                  <h3 class=\"card-title\">Project Name # 3</h3>\r\n                  <h6 class=\"card-subtitle mb-2 text-muted\">A mobile app</h6>\r\n                  <p class=\"card-text\">This app helps you do something cool and helps me write better code that people can use to make their lives better</p>\r\n                  <a href=\"#\" class=\"card-link\">Source Code</a>\r\n                  <a href=\"#\" class=\"card-link\">Live Demo</a>\r\n                </div>\r\n        </div>      \r\n\r\n\r\n    </div>\r\n  </div>\r\n\r\n  "

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_blogpost_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/blogpost.service */ "./src/app/_services/blogpost.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(blogpostService, route) {
        this.blogpostService = blogpostService;
        this.route = route;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            _this.posts = data['blogposts'];
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_services_blogpost_service__WEBPACK_IMPORTED_MODULE_2__["BlogpostService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/nav/nav.component.css":
/*!**************************************************!*\
  !*** ./src/app/components/nav/nav.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/nav/nav.component.html":
/*!***************************************************!*\
  !*** ./src/app/components/nav/nav.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow fixed-top\">\n    <h5 class=\"my-0 mr-md-auto font-weight-normal\"><a class=\"p-2 text-dark\" [routerLink]=\"['/home']\"><img src=\"../../../assets/images/logo.png\" height=\"35\" alt=\"\"/></a> Almina Software</h5>\n    <nav class=\"my-2 my-md-0 mr-md-3\">\n      <a class=\"p-2 text-dark\" [routerLink]=\"['/about']\">About</a>\n      <a class=\"p-2 text-dark\" [routerLink]=\"['/services']\">Services</a>\n      <a class=\"p-2 text-dark\" [routerLink]=\"['/contact']\">Contact</a>\n      <a *ngIf=\"!loggedIn()\" class=\"p-2 text-dark\" [routerLink]=\"['/admin/login']\"><i class=\"fa fa-lock\"></i></a>\n      <a *ngIf=\"loggedIn()\" class=\"p-2 text-dark\" (click)=\"logout()\"><i class=\"fa fa-unlock\"></i></a>\n      <a *ngIf=\"loggedIn()\" class=\"p-2 text-dark\" [routerLink]=\"['/admin']\"><i class=\"fa fa-list\"></i></a>\n    </nav>\n  </div>\n "

/***/ }),

/***/ "./src/app/components/nav/nav.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/nav/nav.component.ts ***!
  \*************************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/alertify.service */ "./src/app/_services/alertify.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavComponent = /** @class */ (function () {
    function NavComponent(authService, router, alertify) {
        this.authService = authService;
        this.router = router;
        this.alertify = alertify;
        this.model = {};
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent.prototype.login = function () {
        this.authService.login(this.model).subscribe(function (next) {
            console.log('logged in good');
        }, function (error) {
            console.log('failed to log in');
        });
    };
    NavComponent.prototype.loggedIn = function () {
        var token = localStorage.getItem('token');
        return !!token;
    };
    NavComponent.prototype.logout = function () {
        localStorage.removeItem('token');
        this.alertify.message('You are logged out.');
        this.router.navigate(['/home']);
    };
    NavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/components/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/components/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/components/projects/projects.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/projects/projects.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/projects/projects.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/projects/projects.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Projects Section -->\n<section id=\"projects\" class=\"projects-section bg-light\">\n    <div class=\"container\">\n\n    <!-- Featured Project Row -->\n    <div class=\"row align-items-center no-gutters mb-4 mb-lg-5\">\n        <div class=\"col-xl-8 col-lg-7\">\n        <img class=\"img-fluid mb-3 mb-lg-0\" src=\"../assets/images/bg-masthead.jpg\" alt=\"\">\n        </div>\n        <div class=\"col-xl-4 col-lg-5\">\n        <div class=\"featured-text text-center text-lg-left\">\n            <h4>Shoreline</h4>\n            <p class=\"text-black-50 mb-0\">Grayscale is open source and MIT licensed. This means you can use it for any project - even commercial projects! Download it, customize it, and publish your website!</p>\n        </div>\n        </div>\n    </div>\n\n    <!-- Project One Row -->\n    <div class=\"row justify-content-center no-gutters mb-5 mb-lg-0\">\n        <div class=\"col-lg-6\">\n        <img class=\"img-fluid\" src=\"../assets/images/demo-image-01.jpg\" alt=\"\">\n        </div>\n        <div class=\"col-lg-6\">\n        <div class=\"bg-black text-center h-100 project\">\n            <div class=\"d-flex h-100\">\n            <div class=\"project-text w-100 my-auto text-center text-lg-left\">\n                <h4 class=\"text-white\">Misty</h4>\n                <p class=\"mb-0 text-white-50\">An example of where you can put an image of a project, or anything else, along with a description.</p>\n                <hr class=\"d-none d-lg-block mb-0 ml-0\">\n            </div>\n            </div>\n        </div>\n        </div>\n    </div>\n\n    <!-- Project Two Row -->\n    <div class=\"row justify-content-center no-gutters\">\n        <div class=\"col-lg-6\">\n        <img class=\"img-fluid\" src=\"../assets/images/demo-image-02.jpg\" alt=\"\">\n        </div>\n        <div class=\"col-lg-6 order-lg-first\">\n        <div class=\"bg-black text-center h-100 project\">\n            <div class=\"d-flex h-100\">\n            <div class=\"project-text w-100 my-auto text-center text-lg-right\">\n                <h4 class=\"text-white\">Mountains</h4>\n                <p class=\"mb-0 text-white-50\">Another example of a project with its respective description. These sections work well responsively as well, try this theme on a small screen!</p>\n                <hr class=\"d-none d-lg-block mb-0 mr-0\">\n            </div>\n            </div>\n        </div>\n        </div>\n    </div>\n\n    </div>\n</section>\n"

/***/ }),

/***/ "./src/app/components/projects/projects.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/projects/projects.component.ts ***!
  \***********************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent() {
    }
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    ProjectsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! ./projects.component.html */ "./src/app/components/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.css */ "./src/app/components/projects/projects.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/components/services/services.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/services/services.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/services/services.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/services/services.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" style=\"width: 100%;\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">Card title</h5>\n      <h6 class=\"card-subtitle mb-2 text-muted\">Card subtitle</h6>\n      <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n      <a href=\"#\" class=\"card-link\">Card link</a>\n      <a href=\"#\" class=\"card-link\">Another link</a>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/components/services/services.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/services/services.component.ts ***!
  \***********************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServicesComponent = /** @class */ (function () {
    function ServicesComponent() {
    }
    ServicesComponent.prototype.ngOnInit = function () {
    };
    ServicesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-services',
            template: __webpack_require__(/*! ./services.component.html */ "./src/app/components/services/services.component.html"),
            styles: [__webpack_require__(/*! ./services.component.css */ "./src/app/components/services/services.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ServicesComponent);
    return ServicesComponent;
}());



/***/ }),

/***/ "./src/app/routes.ts":
/*!***************************!*\
  !*** ./src/app/routes.ts ***!
  \***************************/
/*! exports provided: appRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/projects/projects.component */ "./src/app/components/projects/projects.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var src_app_components_blogpost_view_blogpost_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/blogpost/view/blogpost.component */ "./src/app/components/blogpost/view/blogpost.component.ts");
/* harmony import */ var src_app_components_admin_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/admin/login/login.component */ "./src/app/components/admin/login/login.component.ts");
/* harmony import */ var src_app_components_admin_admin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/admin/admin.component */ "./src/app/components/admin/admin.component.ts");
/* harmony import */ var src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/_guards/auth.guard */ "./src/app/_guards/auth.guard.ts");
/* harmony import */ var src_app_components_blogpost_new_newblogpost_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/blogpost/new/newblogpost.component */ "./src/app/components/blogpost/new/newblogpost.component.ts");
/* harmony import */ var src_app_components_services_services_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/components/services/services.component */ "./src/app/components/services/services.component.ts");
/* harmony import */ var src_app_resolvers_blogpost_resolver__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/_resolvers/blogpost-resolver */ "./src/app/_resolvers/blogpost-resolver.ts");
/* harmony import */ var src_app_resolvers_blogposts_resolver__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/_resolvers/blogposts-resolver */ "./src/app/_resolvers/blogposts-resolver.ts");












var appRoutes = [
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"], resolve: { blogposts: src_app_resolvers_blogposts_resolver__WEBPACK_IMPORTED_MODULE_11__["BlogpostsResolver"] } },
    { path: 'about', component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_1__["AboutComponent"] },
    { path: 'projects', component: _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_2__["ProjectsComponent"] },
    { path: 'contact', component: _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_3__["ContactComponent"] },
    { path: 'services', component: src_app_components_services_services_component__WEBPACK_IMPORTED_MODULE_9__["ServicesComponent"] },
    { path: 'blogpost/:id', component: src_app_components_blogpost_view_blogpost_component__WEBPACK_IMPORTED_MODULE_4__["BlogpostComponent"], resolve: { blogpost: src_app_resolvers_blogpost_resolver__WEBPACK_IMPORTED_MODULE_10__["BlogpostResolver"] } },
    { path: 'admin/login', component: src_app_components_admin_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]],
        children: [
            { path: 'admin', component: src_app_components_admin_admin_component__WEBPACK_IMPORTED_MODULE_6__["AdminComponent"] },
            { path: 'blog/new', component: src_app_components_blogpost_new_newblogpost_component__WEBPACK_IMPORTED_MODULE_8__["NewblogpostComponent"] },
        ]
    },
    { path: '**', redirectTo: 'home', pathMatch: 'full' },
];


/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: true,
    apiUrl: 'api/'
};


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiUrl: 'http://localhost:5000/api/'
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\marc_\source\repos\marc-co\marcblog-spa\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map