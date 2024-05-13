"use strict";
(self["webpackChunkmbc"] = self["webpackChunkmbc"] || []).push([["main"],{

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/header/header.component */ 6772);
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/home/home.component */ 2865);
/* harmony import */ var _components_work_work_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/work/work.component */ 2669);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);




class AppComponent {
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
    decls: 3,
    vars: 0,
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-nav")(1, "app-home")(2, "app-work");
      }
    },
    dependencies: [_shared_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent, _components_work_work_component__WEBPACK_IMPORTED_MODULE_2__.WorkComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 2865:
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class HomeComponent {
  static #_ = this.ɵfac = function HomeComponent_Factory(t) {
    return new (t || HomeComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: HomeComponent,
    selectors: [["app-home"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 18,
    vars: 0,
    consts: [["id", "home", 1, "vh-100", "flex", "flex-center"], ["href", "https://angular.io", "target", "_blank"], ["href", "https://ionicframework.com/", "target", "_blank"], ["href", "https://www.linkedin.com/in/morad-elhamdouni/", "target", "_blank"]],
    template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "article")(2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Hey there I'm Morad!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4")(5, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "A web developer that specialize on the client side of things.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " I specialize on front-end development mainly using ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " for web projects and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Ionic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " for mobile, I also enjoy React and Vue. Feel free to check some of my personal projects below, you can also check my working history and get in touch via ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Linkedin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
    },
    styles: ["article[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\n@media (max-width: 850px) {\n  section[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n  section[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0FBQ0o7O0FBRUE7RUFDSTtJQUNJLGFBQUE7RUFDTjtFQUNNO0lBQ0ksV0FBQTtFQUNWO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJhcnRpY2xlIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6IDg1MHB4KSB7XHJcbiAgICBzZWN0aW9uIHtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG5cclxuICAgICAgICBhcnRpY2xlIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 2037:
/*!********************************************************!*\
  !*** ./src/app/components/work/card/card.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CardComponent: () => (/* binding */ CardComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 1536);
/* harmony import */ var src_app_enums_languages_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/enums/languages.enum */ 225);
/* harmony import */ var src_app_services_github_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/github.service */ 201);







function CardComponent_For_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const topic_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](topic_r1);
  }
}
function CardComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const latestRelease_r2 = ctx;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", latestRelease_r2.assets[0].browser_download_url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](latestRelease_r2.assets[0].browser_download_url);
  }
}
function CardComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", (tmp_1_0 = ctx_r2.repo()) == null ? null : tmp_1_0.homepage, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]((tmp_2_0 = ctx_r2.repo()) == null ? null : tmp_2_0.homepage);
  }
}
class CardComponent {
  constructor() {
    this.repo = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.input)();
    this.gs = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(src_app_services_github_service__WEBPACK_IMPORTED_MODULE_1__.GithubService);
    this.latestRelease$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)();
    this.cSharp = src_app_enums_languages_enum__WEBPACK_IMPORTED_MODULE_0__.LANGUAGES_NAMES.CSHARP;
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.effect)(() => this.latestRelease$ = this.gs.getLatestRelease(this.repo()?.name));
  }
  getDotColor(language) {
    switch (language) {
      case src_app_enums_languages_enum__WEBPACK_IMPORTED_MODULE_0__.LANGUAGES_NAMES.TYPESCRIPT:
        return src_app_enums_languages_enum__WEBPACK_IMPORTED_MODULE_0__.LANGUAGES_COLORS.TYPESCRIPT;
      case src_app_enums_languages_enum__WEBPACK_IMPORTED_MODULE_0__.LANGUAGES_NAMES.JAVASCRIPT:
        return src_app_enums_languages_enum__WEBPACK_IMPORTED_MODULE_0__.LANGUAGES_COLORS.JAVASCRIPT;
      case src_app_enums_languages_enum__WEBPACK_IMPORTED_MODULE_0__.LANGUAGES_NAMES.CSHARP:
        return src_app_enums_languages_enum__WEBPACK_IMPORTED_MODULE_0__.LANGUAGES_COLORS.CSHARP;
      default:
        return src_app_enums_languages_enum__WEBPACK_IMPORTED_MODULE_0__.LANGUAGES_COLORS.UNKNOWN;
    }
  }
  static #_ = this.ɵfac = function CardComponent_Factory(t) {
    return new (t || CardComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: CardComponent,
    selectors: [["app-card"]],
    inputs: {
      repo: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInputFlags"].SignalBased, "repo"]
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 18,
    vars: 9,
    consts: [[1, "flex", "flex-column", "flex-justify-between"], [1, "flex", "flex-justify-between", "flex-align-center"], ["target", "_blank", 3, "href"], [1, "url", 3, "href"], [1, "flex", "flex-align-center"], ["viewBox", "0 0 15 15", "width", "15", "height", "15"], ["cx", "7.5", "cy", "7.5", "r", "7.5"], ["target", "_blank", 1, "url", 3, "href"]],
    template: function CardComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "main", 0)(1, "header", 1)(2, "a", 2)(3, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterCreate"](6, CardComponent_For_7_Template, 2, 1, "code", null, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterTrackByIndex"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, CardComponent_Conditional_10_Template, 2, 2, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, CardComponent_Conditional_12_Template, 2, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "footer", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "svg", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "circle", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        let tmp_0_0;
        let tmp_1_0;
        let tmp_2_0;
        let tmp_3_0;
        let tmp_4_0;
        let tmp_5_0;
        let tmp_6_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", (tmp_0_0 = ctx.repo()) == null ? null : tmp_0_0.html_url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]((tmp_1_0 = ctx.repo()) == null ? null : tmp_1_0.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeater"]((tmp_2_0 = ctx.repo()) == null ? null : tmp_2_0.topics);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]((tmp_3_0 = ctx.repo()) == null ? null : tmp_3_0.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](10, (tmp_4_0 = ((tmp_4_0 = ctx.repo()) == null ? null : tmp_4_0.language) === ctx.cSharp && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 7, ctx.latestRelease$)) ? 10 : 12, tmp_4_0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("fill", ctx.getDotColor((tmp_5_0 = ctx.repo()) == null ? null : tmp_5_0.language));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]((tmp_6_0 = ctx.repo()) == null ? null : tmp_6_0.language);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.AsyncPipe],
    styles: ["main[_ngcontent-%COMP%] {\n  height: 100%;\n  border: 1px solid #30363d;\n  border-radius: 10px;\n}\nmain[_ngcontent-%COMP%]   header[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%] {\n  padding: 20px;\n}\nmain[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .url[_ngcontent-%COMP%] {\n  padding: 0 20px;\n}\nmain[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  border: 1px solid #30363d;\n  border-radius: 20px;\n  padding: 5px 10px;\n  margin-left: 10px;\n}\nmain[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy93b3JrL2NhcmQvY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBQ0o7QUFDSTtFQUNJLGFBQUE7QUFDUjtBQUVJO0VBQ0ksZUFBQTtBQUFSO0FBSVE7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQUZaO0FBTUk7RUFDSSxrQkFBQTtBQUpSIiwic291cmNlc0NvbnRlbnQiOlsibWFpbiB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzAzNjNkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuXHJcbiAgICBoZWFkZXIsIGZvb3RlciB7XHJcbiAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICBwLCAudXJsIHtcclxuICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgaGVhZGVyIHtcclxuICAgICAgICBjb2RlIHtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzMwMzYzZDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdmcge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 2669:
/*!***************************************************!*\
  !*** ./src/app/components/work/work.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WorkComponent: () => (/* binding */ WorkComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_services_github_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/github.service */ 201);
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card/card.component */ 2037);






function WorkComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h1")(1, "q");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "- Github Zen");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx);
  }
}
function WorkComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h1")(1, "q");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "No Github Zen quotes showed up it seems.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function WorkComponent_Conditional_5_For_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-card", 2);
  }
  if (rf & 2) {
    const repo_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("repo", repo_r1);
  }
}
function WorkComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterCreate"](0, WorkComponent_Conditional_5_For_1_Template, 1, 1, "app-card", 2, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterTrackByIndex"]);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeater"](ctx);
  }
}
function WorkComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Oops! The Github Repos API seems to be down... Please go directly to ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Github");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " to check some of my work!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
class WorkComponent {
  constructor() {
    this.gs = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(src_app_services_github_service__WEBPACK_IMPORTED_MODULE_0__.GithubService);
    this.zen$ = this.gs.getZen();
    this.repos$ = this.gs.getRepos();
  }
  static #_ = this.ɵfac = function WorkComponent_Factory(t) {
    return new (t || WorkComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: WorkComponent,
    selectors: [["app-work"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 8,
    vars: 6,
    consts: [["id", "work"], [1, "grid-container"], [3, "repo"], ["href", "https://github.com/motheblackcat", "target", "_blank"]],
    template: function WorkComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, WorkComponent_Conditional_2_Template, 5, 1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, WorkComponent_Conditional_4_Template, 3, 0)(5, WorkComponent_Conditional_5_Template, 2, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, WorkComponent_Conditional_7_Template, 5, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        let tmp_0_0;
        let tmp_1_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](2, (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 2, ctx.zen$)) ? 2 : 4, tmp_0_0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](5, (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 4, ctx.repos$)) ? 5 : 7, tmp_1_0);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.AsyncPipe, _card_card_component__WEBPACK_IMPORTED_MODULE_1__.CardComponent],
    styles: ["section[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background-color: #0d1117;\n}\nsection[_ngcontent-%COMP%]   .grid-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 650px);\n  justify-content: center;\n  align-content: center;\n  height: 100vh;\n  gap: 20px;\n}\nsection[_ngcontent-%COMP%]   .grid-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  grid-column: 1/3;\n  justify-self: center;\n}\n@media (max-width: 850px) {\n  section[_ngcontent-%COMP%] {\n    padding: 50px 20px 20px;\n  }\n  section[_ngcontent-%COMP%]   .grid-container[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    height: initial;\n  }\n  section[_ngcontent-%COMP%]   .grid-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    grid-column: 1/2;\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy93b3JrL3dvcmsuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLHlCQUFBO0FBQ0o7QUFDSTtFQUNJLGFBQUE7RUFDQSw4Q0FBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtBQUNSO0FBQ1E7RUFDSSxnQkFBQTtFQUNBLG9CQUFBO0FBQ1o7QUFJSTtFQW5CSjtJQW9CUSx1QkFBQTtFQUROO0VBR007SUFDSSwwQkFBQTtJQUNBLGVBQUE7RUFEVjtFQUdVO0lBQ0ksZ0JBQUE7SUFDQSxrQkFBQTtFQURkO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9uIHtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBkMTExNztcclxuXHJcbiAgICAuZ3JpZC1jb250YWluZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIDY1MHB4KTtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICBnYXA6IDIwcHg7XHJcblxyXG4gICAgICAgIGgxIHtcclxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVE9ETzogRml4IGJyZWFrcG9pbnRzXHJcbiAgICBAbWVkaWEobWF4LXdpZHRoOiA4NTBweCkge1xyXG4gICAgICAgIHBhZGRpbmc6IDUwcHggMjBweCAyMHB4O1xyXG5cclxuICAgICAgICAuZ3JpZC1jb250YWluZXIge1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgICAgICAgICAgaGVpZ2h0OiBpbml0aWFsO1xyXG5cclxuICAgICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 225:
/*!*****************************************!*\
  !*** ./src/app/enums/languages.enum.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LANGUAGES_COLORS: () => (/* binding */ LANGUAGES_COLORS),
/* harmony export */   LANGUAGES_NAMES: () => (/* binding */ LANGUAGES_NAMES)
/* harmony export */ });
var LANGUAGES_NAMES;
(function (LANGUAGES_NAMES) {
  LANGUAGES_NAMES["TYPESCRIPT"] = "TypeScript";
  LANGUAGES_NAMES["JAVASCRIPT"] = "JavaScript";
  LANGUAGES_NAMES["CSHARP"] = "C#";
})(LANGUAGES_NAMES || (LANGUAGES_NAMES = {}));
var LANGUAGES_COLORS;
(function (LANGUAGES_COLORS) {
  LANGUAGES_COLORS["TYPESCRIPT"] = "#287dc6";
  LANGUAGES_COLORS["JAVASCRIPT"] = "yellow";
  LANGUAGES_COLORS["CSHARP"] = "#178600";
  LANGUAGES_COLORS["UNKNOWN"] = "gray";
})(LANGUAGES_COLORS || (LANGUAGES_COLORS = {}));

/***/ }),

/***/ 1967:
/*!***********************************!*\
  !*** ./src/app/enums/url.enum.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   URLS: () => (/* binding */ URLS)
/* harmony export */ });
var URLS;
(function (URLS) {
  URLS["BASE"] = "https://api.github.com/";
  URLS["ZEN"] = "zen";
  URLS["REPOS"] = "users/motheblackcat/repos";
})(URLS || (URLS = {}));

/***/ }),

/***/ 201:
/*!********************************************!*\
  !*** ./src/app/services/github.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GithubService: () => (/* binding */ GithubService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _enums_url_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums/url.enum */ 1967);




class GithubService {
  constructor() {
    this.http = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient);
  }
  getZen() {
    return this.http.get(`${_enums_url_enum__WEBPACK_IMPORTED_MODULE_0__.URLS.BASE}${_enums_url_enum__WEBPACK_IMPORTED_MODULE_0__.URLS.ZEN}`, {
      responseType: 'text'
    });
  }
  getRepos() {
    // enum SORT_PARAMS {
    //   UPDATED = 'updated'
    // }
    // const params = { sort: SORT_PARAMS.UPDATED, perPage: 4 };
    const url = `${_enums_url_enum__WEBPACK_IMPORTED_MODULE_0__.URLS.BASE}${_enums_url_enum__WEBPACK_IMPORTED_MODULE_0__.URLS.REPOS}`;
    return this.http.get(url);
  }
  getLatestRelease(repo) {
    return this.http.get(`${_enums_url_enum__WEBPACK_IMPORTED_MODULE_0__.URLS.BASE}repos/motheblackcat/${repo}/releases/latest`);
  }
  static #_ = this.ɵfac = function GithubService_Factory(t) {
    return new (t || GithubService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: GithubService,
    factory: GithubService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 6772:
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderComponent: () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class HeaderComponent {
  onScrollEvent() {
    this.updateNav();
  }
  ngOnInit() {
    this.updateNav();
  }
  updateNav() {
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(navLink => navLink.className = '');
    const workSectionY = Math.abs(document.querySelector('#work').getBoundingClientRect().y);
    const halfInnerHeight = window.innerHeight / 2;
    const hash = workSectionY < halfInnerHeight ? '#work' : '#home';
    document.querySelector(`a[href="${hash}"]`).className = 'active';
    document.querySelector('header').style.backgroundColor = hash === '#home' ? 'black' : '#0d1117';
  }
  static #_ = this.ɵfac = function HeaderComponent_Factory(t) {
    return new (t || HeaderComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: HeaderComponent,
    selectors: [["app-nav"]],
    hostBindings: function HeaderComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function HeaderComponent_scroll_HostBindingHandler() {
          return ctx.onScrollEvent();
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
      }
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 12,
    vars: 0,
    consts: [[1, "flex", "flex-justify-between"], [1, "flex", "flex-gap-10"], ["src", "assets/logo_angular.svg", "alt", "logo angular", "width", "20px", "height", "20px"], [1, "flex", "flex-gap-20"], ["href", "#home", 3, "click"], ["href", "#work", 3, "click"]],
    template: function HeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0)(1, "div", 1)(2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Morad E.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nav", 3)(8, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_8_listener() {
          return ctx.updateNav();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_10_listener() {
          return ctx.updateNav();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
    },
    styles: ["header[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  width: 100%;\n  font-size: 1.2em;\n  padding: 40px 20px;\n  box-sizing: border-box;\n}\nheader[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: grey;\n  outline: 0;\n  text-decoration: none;\n}\nheader[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  color: white;\n}\n@media (max-width: 850px) {\n  header[_ngcontent-%COMP%] {\n    font-size: 1em;\n    padding: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUFDRjtBQUVJO0VBQ0UsV0FBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtBQUFOO0FBR0k7RUFDRSxZQUFBO0FBRE47QUFLRTtFQXBCRjtJQXFCSSxjQUFBO0lBQ0EsYUFBQTtFQUZGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJoZWFkZXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZm9udC1zaXplOiAxLjJlbTtcclxuICBwYWRkaW5nOiA0MHB4IDIwcHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHJcbiAgbmF2IHtcclxuICAgIGEge1xyXG4gICAgICBjb2xvcjogZ3JleTtcclxuICAgICAgb3V0bGluZTogMDtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmFjdGl2ZSB7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA4NTBweCkge1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 5312:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
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

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.component */ 92);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 5312);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 6443);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.bootstrapApplication)(_app_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, {
  providers: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.importProvidersFrom)(_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClientModule)]
}).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map