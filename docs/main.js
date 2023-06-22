"use strict";
(self["webpackChunkmbc"] = self["webpackChunkmbc"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);



const routes = [];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_nav_nav_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/nav/nav.component */ 9273);
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/home/home.component */ 8263);
/* harmony import */ var _components_work_work_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/work/work.component */ 4060);




class AppComponent {}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)();
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 4,
  vars: 0,
  consts: [[1, "flex"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-nav");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "app-home")(3, "app-work");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
  },
  dependencies: [_shared_nav_nav_component__WEBPACK_IMPORTED_MODULE_0__.NavComponent, _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent, _components_work_work_component__WEBPACK_IMPORTED_MODULE_2__.WorkComponent],
  encapsulation: 2
});

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _shared_nav_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/nav/nav.component */ 9273);
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ 8263);
/* harmony import */ var _components_work_work_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/work/work.component */ 4060);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);








class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _shared_nav_nav_component__WEBPACK_IMPORTED_MODULE_2__.NavComponent, _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__.HomeComponent, _components_work_work_component__WEBPACK_IMPORTED_MODULE_4__.WorkComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule]
  });
})();

/***/ }),

/***/ 8263:
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class HomeComponent {}
HomeComponent.ɵfac = function HomeComponent_Factory(t) {
  return new (t || HomeComponent)();
};
HomeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: HomeComponent,
  selectors: [["app-home"]],
  decls: 29,
  vars: 0,
  consts: [["id", "home", 1, "flex", "vhw-100"], [1, "flex", "flex-center", "flex-wrap", "m-auto"], [1, "flex", "flex-align-center"], ["href", "https://www.linkedin.com/in/morad-elhamdouni/", "target", "_blank"], [1, "fab", "fa-2x", "fa-linkedin"], ["href", "mailto:morad.elhamdouni@gmail.com"], [1, "fas", "fa-2x", "fa-envelope"], [1, "grid"], ["src", "assets/logo_html.svg", "alt", "", "width", "40", "height", "40"], ["src", "assets/logo_css.svg", "alt", "", "width", "40", "height", "40"], ["src", "assets/logo_js.svg", "alt", "", "width", "40", "height", "40"], ["src", "assets/logo_ts.svg", "alt", "", "width", "40", "height", "40"], ["src", "assets/logo_git.svg", "alt", "", "width", "40", "height", "40"], ["src", "assets/logo_github.svg", "alt", "", "width", "40", "height", "40"], ["src", "assets/logo_angular.svg", "alt", "", "width", "40", "height", "40"], ["src", "assets/logo_ionic.svg", "alt", "", "width", "40", "height", "40"]],
  template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "article")(3, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Hey there I'm Morad!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div")(6, "i");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "A Web Developer that specialize on the client side of things.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "I participated to multiple projects in different domains and will continue to do so while still pursing my quest for knowledge.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Contact me through ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " or ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "These are some of the languages and tools I use");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "article", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 8)(22, "img", 9)(23, "img", 10)(24, "img", 11)(25, "img", 12)(26, "img", 13)(27, "img", 14)(28, "img", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
  },
  styles: ["@charset \"UTF-8\";\narticle[_ngcontent-%COMP%] {\n  margin: 20px;\n}\narticle[_ngcontent-%COMP%]:first-child {\n  width: 50%;\n}\narticle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child {\n  font-size: 1.8em;\n}\narticle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) {\n  font-size: 1.2em;\n}\narticle[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child:after {\n  content: \" \u25B6\";\n}\n\n.grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 50px);\n  grid-column-gap: 30px;\n  grid-row-gap: 30px;\n}\n\n@media screen and (max-width: 800px) {\n  article[_ngcontent-%COMP%] {\n    text-align: justify;\n  }\n  article[_ngcontent-%COMP%]:first-child {\n    width: 100%;\n  }\n  article[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child:after {\n    content: \" \u25BC\";\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCO0VBQ0ksWUFBQTtBQUVKO0FBQUk7RUFDSSxVQUFBO0FBRVI7QUFFUTtFQUNJLGdCQUFBO0FBQVo7QUFHUTtFQUNJLGdCQUFBO0FBRFo7QUFLSTtFQUNJLGFBQUE7QUFIUjs7QUFPQTtFQUNJLGFBQUE7RUFDQSxzQ0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFKSjs7QUFPQTtFQUNJO0lBQ0ksbUJBQUE7RUFKTjtFQU1NO0lBQ0ksV0FBQTtFQUpWO0VBT007SUFDSSxhQUFBO0VBTFY7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbImFydGljbGUge1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG5cclxuICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICB9XHJcblxyXG4gICAgZGl2IHtcclxuICAgICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjhlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcDpsYXN0LWNoaWxkOmFmdGVyIHtcclxuICAgICAgICBjb250ZW50OiBcIiDDosKWwrZcIjtcclxuICAgIH1cclxufVxyXG5cclxuLmdyaWQge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDUwcHgpO1xyXG4gICAgZ3JpZC1jb2x1bW4tZ2FwOiAzMHB4O1xyXG4gICAgZ3JpZC1yb3ctZ2FwOiAzMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gICAgYXJ0aWNsZSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuXHJcbiAgICAgICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcDpsYXN0LWNoaWxkOmFmdGVyIHtcclxuICAgICAgICAgICAgY29udGVudDogXCIgw6LClsK8XCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 4060:
/*!***************************************************!*\
  !*** ./src/app/components/work/work.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkComponent": () => (/* binding */ WorkComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var src_app_mocks_repos_mock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/mocks/repos.mock */ 399);
/* harmony import */ var src_app_enums_languages_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/enums/languages.enum */ 2569);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_github_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/github.service */ 7357);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);






function WorkComponent_article_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "article", 6)(1, "q");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "- Github Zen");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const zen_r4 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](zen_r4);
  }
}
function WorkComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "article");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " The Github API seems to be down, you can check my work directly on ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Github.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function WorkComponent_div_7_label_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const topic_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](topic_r7);
  }
}
function WorkComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8)(1, "div", 9)(2, "a", 10)(3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, WorkComponent_div_7_label_6_Template, 2, 1, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const repo_r5 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("href", repo_r5.html_url, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](repo_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", repo_r5.topics);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](repo_r5.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("background-color", ctx_r3.getDotColor(repo_r5.language));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](repo_r5.language);
  }
}
class WorkComponent {
  constructor(gs) {
    this.gs = gs;
    this.repos$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(src_app_mocks_repos_mock__WEBPACK_IMPORTED_MODULE_0__.repos);
  }
  // TODO: Test API requests overload prevention
  ngOnInit() {
    this.zen$ = this.gs.getZen();
    this.repos$ = this.gs.getRepos();
  }
  getDotColor(language) {
    switch (language) {
      case src_app_enums_languages_enum__WEBPACK_IMPORTED_MODULE_1__.LANGUAGES.TYPESCRIPT:
        return '#287dc6';
      case src_app_enums_languages_enum__WEBPACK_IMPORTED_MODULE_1__.LANGUAGES.JAVASCRIPT:
        return 'yellow';
      case src_app_enums_languages_enum__WEBPACK_IMPORTED_MODULE_1__.LANGUAGES.CSHARP:
        return '#178600';
      default:
        return 'gray';
    }
  }
}
WorkComponent.ɵfac = function WorkComponent_Factory(t) {
  return new (t || WorkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_github_service__WEBPACK_IMPORTED_MODULE_2__.GithubService));
};
WorkComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: WorkComponent,
  selectors: [["app-work"]],
  decls: 9,
  vars: 7,
  consts: [["id", "work", 1, "flex", "vhw-100"], [1, "m-auto"], ["class", "quote", 4, "ngIf", "ngIfElse"], ["noZen", ""], [1, "flex", "flex-center", "flex-wrap"], ["class", "flex flex-column flex-between card", 4, "ngFor", "ngForOf"], [1, "quote"], ["href", "https://github.com/motheblackcat", "target", "_blank"], [1, "flex", "flex-column", "flex-between", "card"], [1, "flex", "flex-between"], ["target", "_blank", 3, "href"], [4, "ngFor", "ngForOf"], [1, "flex", "flex-align-center"], [1, "color-dot"]],
  template: function WorkComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, WorkComponent_article_2_Template, 5, 1, "article", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, WorkComponent_ng_template_4_Template, 4, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, WorkComponent_div_7_Template, 13, 7, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 3, ctx.zen$))("ngIfElse", _r1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](8, 5, ctx.repos$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe],
  styles: ["article[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n  text-align: center;\n  margin-bottom: 40px;\n}\narticle[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}\n\n.card[_ngcontent-%COMP%] {\n  border: white solid 1px;\n  border-radius: 6px;\n  margin: 8px;\n  padding: 16px;\n  width: 40%;\n  min-height: 120px;\n}\n.card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: rgb(47, 129, 247);\n}\n.card[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  border: white solid 1px;\n  border-radius: 24px;\n  padding: 2px 7px;\n  margin-left: 10px;\n  text-transform: capitalize;\n}\n.card[_ngcontent-%COMP%]   .color-dot[_ngcontent-%COMP%] {\n  width: 15px;\n  height: 15px;\n  margin-right: 10px;\n  border-radius: 100%;\n}\n\n@media screen and (max-width: 800px) {\n  .card[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .card[_ngcontent-%COMP%]:last-child {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy93b3JrL3dvcmsuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFDSjtBQUNJO0VBQ0ksMEJBQUE7QUFDUjs7QUFHQTtFQUNJLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtBQUFKO0FBRUk7RUFDSSx3QkFBQTtBQUFSO0FBR0k7RUFDSSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLDBCQUFBO0FBRFI7QUFJSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUZSOztBQU1BO0VBQ0k7SUFDSSxXQUFBO0VBSE47RUFLTTtJQUNJLGFBQUE7RUFIVjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiYXJ0aWNsZSB7XHJcbiAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuXHJcbiAgICBhIHtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIH1cclxufVxyXG5cclxuLmNhcmQge1xyXG4gICAgYm9yZGVyOiB3aGl0ZSBzb2xpZCAxcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBtYXJnaW46IDhweDtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgbWluLWhlaWdodDogMTIwcHg7XHJcblxyXG4gICAgYSB7XHJcbiAgICAgICAgY29sb3I6IHJnYig0NywgMTI5LCAyNDcpO1xyXG4gICAgfVxyXG5cclxuICAgIGxhYmVsIHtcclxuICAgICAgICBib3JkZXI6IHdoaXRlIHNvbGlkIDFweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDJweCA3cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbG9yLWRvdCB7XHJcbiAgICAgICAgd2lkdGg6IDE1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gICAgLmNhcmQge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 2569:
/*!*****************************************!*\
  !*** ./src/app/enums/languages.enum.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LANGUAGES": () => (/* binding */ LANGUAGES)
/* harmony export */ });
var LANGUAGES;
(function (LANGUAGES) {
  LANGUAGES["TYPESCRIPT"] = "TypeScript";
  LANGUAGES["JAVASCRIPT"] = "JavaScript";
  LANGUAGES["CSHARP"] = "C#";
})(LANGUAGES || (LANGUAGES = {}));
;

/***/ }),

/***/ 23:
/*!***********************************!*\
  !*** ./src/app/enums/url.enum.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "URLS": () => (/* binding */ URLS)
/* harmony export */ });
var URLS;
(function (URLS) {
  URLS["BASE"] = "https://api.github.com/";
  URLS["ZEN"] = "zen";
  URLS["REPOS"] = "users/motheblackcat/repos";
})(URLS || (URLS = {}));

/***/ }),

/***/ 399:
/*!*************************************!*\
  !*** ./src/app/mocks/repos.mock.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "repos": () => (/* binding */ repos)
/* harmony export */ });
/* harmony import */ var _enums_languages_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums/languages.enum */ 2569);

const repos = [{
  name: 'lk',
  description: 'Unity 2D heroic-fantasy adventure game demo / sandbox project in Unity.',
  language: _enums_languages_enum__WEBPACK_IMPORTED_MODULE_0__.LANGUAGES.CSHARP,
  html_url: 'https://google.com',
  topics: ['unity']
}, {
  name: 'nhl-v2',
  description: 'Character sheet for the tabletop rpg "Le Donjon de Naheulbeuk" mobile app made with Ionic (Angular) available on the Play Store.',
  language: _enums_languages_enum__WEBPACK_IMPORTED_MODULE_0__.LANGUAGES.TYPESCRIPT,
  html_url: 'https://google.com',
  topics: ['ionic']
}, {
  name: 'lolcheck',
  description: 'A simple React test app with the riot api.',
  language: _enums_languages_enum__WEBPACK_IMPORTED_MODULE_0__.LANGUAGES.TYPESCRIPT,
  html_url: 'https://google.com',
  topics: ['react', 'riot-api']
}, {
  name: 'motheblackcat.github.io',
  description: 'Angular project for a github page.',
  language: _enums_languages_enum__WEBPACK_IMPORTED_MODULE_0__.LANGUAGES.TYPESCRIPT,
  html_url: 'https://google.com',
  topics: ['angular']
}];

/***/ }),

/***/ 7357:
/*!********************************************!*\
  !*** ./src/app/services/github.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GithubService": () => (/* binding */ GithubService)
/* harmony export */ });
/* harmony import */ var _enums_url_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums/url.enum */ 23);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



class GithubService {
  constructor(http) {
    this.http = http;
    this.URLS = _enums_url_enum__WEBPACK_IMPORTED_MODULE_0__.URLS;
  }
  getZen() {
    return this.http.get(`${this.URLS.BASE}${this.URLS.ZEN}`, {
      responseType: 'text'
    });
  }
  getRepos() {
    const sort = 'updated';
    const per_page = 4;
    const url = `${this.URLS.BASE}${this.URLS.REPOS}`;
    const params = {
      sort,
      per_page
    };
    return this.http.get(url, {
      params
    });
  }
}
GithubService.ɵfac = function GithubService_Factory(t) {
  return new (t || GithubService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
GithubService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: GithubService,
  factory: GithubService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 9273:
/*!*********************************************!*\
  !*** ./src/app/shared/nav/nav.component.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavComponent": () => (/* binding */ NavComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class NavComponent {
  ngOnInit() {
    const hash = window.location.hash ? window.location.hash : '#home';
    document.querySelector(`a[href="${hash}"]`).className = 'active';
  }
  selectSection(event) {
    const links = document.querySelectorAll('nav a');
    links.forEach(link => link.className = '');
    event.currentTarget.className = 'active';
  }
}
NavComponent.ɵfac = function NavComponent_Factory(t) {
  return new (t || NavComponent)();
};
NavComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NavComponent,
  selectors: [["app-nav"]],
  decls: 13,
  vars: 0,
  consts: [[1, "flex", "flex-between"], [1, "flex", "flex-column", "flex-justify-center"], [1, "name"], [1, "flex", "flex-center"], ["href", "#home", 3, "click"], [1, "fas", "fa-home"], ["href", "#work", 3, "click"], [1, "fas", "fa-code"]],
  template: function NavComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0)(1, "section", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Morad El Hamdouni");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Web Developer Front");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section", 3)(7, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_a_click_7_listener($event) {
        return ctx.selectSection($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "About");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_a_click_10_listener($event) {
        return ctx.selectSection($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Work");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
  },
  styles: ["nav[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  width: 100%;\n}\nnav[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] {\n  margin: 40px;\n}\nnav[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n}\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin-left: 30px;\n  font-size: 1.2em;\n  color: grey;\n  outline: 0;\n}\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\nnav[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  color: white;\n}\n\n@media screen and (max-width: 800px) {\n  section[_ngcontent-%COMP%]:first-child {\n    display: none;\n  }\n  section[_ngcontent-%COMP%]:last-child {\n    width: 100%;\n    justify-content: space-around;\n  }\n  section[_ngcontent-%COMP%]:last-child   a[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL25hdi9uYXYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7QUFDRjtBQUNFO0VBQ0UsWUFBQTtBQUNKO0FBQ0k7RUFDRSxnQkFBQTtBQUNOO0FBR0U7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFESjtBQUdJO0VBQ0UsaUJBQUE7QUFETjtBQUtFO0VBQ0UsWUFBQTtBQUhKOztBQU9BO0VBQ0U7SUFDRSxhQUFBO0VBSkY7RUFPQTtJQUNFLFdBQUE7SUFDQSw2QkFBQTtFQUxGO0VBT0U7SUFDRSxTQUFBO0VBTEo7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIm5hdiB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgc2VjdGlvbiB7XHJcbiAgICBtYXJnaW46IDQwcHg7XHJcblxyXG4gICAgLm5hbWUge1xyXG4gICAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICBjb2xvcjogZ3JleTtcclxuICAgIG91dGxpbmU6IDA7XHJcblxyXG4gICAgaSB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gIHNlY3Rpb246Zmlyc3QtY2hpbGQge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIHNlY3Rpb246bGFzdC1jaGlsZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG5cclxuICAgIGEge1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map