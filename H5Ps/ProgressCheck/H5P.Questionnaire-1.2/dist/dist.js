!function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";H5P.Questionnaire=n(6).default},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n(12);var s=function(){function e(){r(this,e)}return i(e,null,[{key:"createButton",value:function(t,n,r){var i=e.createElement("button",{className:"h5p-questionnaire-button "+n,type:"button",textContent:t});return r&&i.addEventListener("click",function(){r.trigger(n)}),i}},{key:"createElement",value:function(e,t){var n=document.createElement(e);return Object.keys(t).forEach(function(e){n[e]=t[e]}),n}},{key:"createDiv",value:function(t){return e.createElement("div",t)}}]),e}();t.default=s},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n(14);var u=n(1),c=r(u),l=function(e){function t(e){i(this,t);var n=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n.footerWrapper=document.createElement("div"),n.footerWrapper.className="h5p-questionnaire-footer",n.footerWrapper.appendChild(n.createButton(e.prevLabel,"previous")),n.footerWrapper.appendChild(n.createButton(e.nextLabel,"next")),n.footerWrapper.appendChild(n.createButton(e.continueLabel,"next","continue")),n}return a(t,e),o(t,[{key:"setForwardNavigationButton",value:function(e){this.trigger("disable-next"),this.trigger("disable-continue"),this.trigger("enable-"+e)}},{key:"createButton",value:function(e,t,n){var r=c.default.createButton(e,t,this);return this.on("enable-"+(n||t),function(){r.classList.remove("disable")}),this.on("disable-"+(n||t),function(){r.classList.add("disable")}),r}},{key:"hide",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.footerWrapper.classList[e?"add":"remove"]("hide")}},{key:"attachTo",value:function(e){e.appendChild(this.footerWrapper)}}]),t}(H5P.EventDispatcher);t.default=l},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n(10);var s=function(){function e(t,n){r(this,e),this.numberWidget=document.createElement("div"),this.numberWidget.className="h5p-questionnaire-progress-bar-widget",this.numberWidget.setAttribute("aria-hidden","true"),this.currentIndex=document.createElement("div"),this.currentIndex.className="h5p-questionnaire-progress-bar-widget-current",this.currentIndex.textContent=t;var i=document.createElement("div");i.className="h5p-questionnaire-progress-bar-widget-separator",i.textContent="/";var s=document.createElement("div");s.className="h5p-questionnaire-progress-bar-widget-max",s.textContent=n,this.numberWidget.appendChild(this.currentIndex),this.numberWidget.appendChild(i),this.numberWidget.appendChild(s)}return i(e,[{key:"setCurrentIndex",value:function(e){this.currentIndex.textContent=e}},{key:"attachTo",value:function(e){e.appendChild(this.numberWidget)}}]),e}();t.default=s},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n(11);var a=n(3),o=r(a),u=function(){function e(t){var n=t.currentIndex,r=t.maxIndex,s=t.uiElements;i(this,e),this.maxIndex=r,this.uiElements=s,this.progressBar=document.createElement("div"),this.progressBar.className="h5p-questionnaire-progress-bar",this.progressBar.setAttribute("tabindex","-1"),this.progressBar.setAttribute("role","progressbar"),this.progressBar.setAttribute("aria-valuemin","0"),this.progressBar.setAttribute("aria-valuemax",r),this.updateAriaValues(n),this.currentProgress=document.createElement("div"),this.currentProgress.className="h5p-questionnaire-progress-bar-current",this.numberWidget=new o.default(n,r),this.move(n),this.progressBar.appendChild(this.currentProgress)}return s(e,[{key:"updateAriaValues",value:function(e){this.progressBar.setAttribute("aria-valuenow",e),this.progressBar.setAttribute("aria-valuetext",this.uiElements.accessibility.progressBarText.replace("%current",e).replace("%max",this.maxIndex))}},{key:"move",value:function(e){this.numberWidget.setCurrentIndex(e),this.currentProgress.style.width=e/this.maxIndex*100+"%",this.updateAriaValues(e),this.progressBar.focus()}},{key:"hide",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.progressBar.classList[e?"add":"remove"]("hide")}},{key:"attachNumberWidgetTo",value:function(e){this.numberWidget.attachTo(e)}},{key:"attachTo",value:function(e){e.appendChild(this.progressBar)}}]),e}();t.default=u},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=function(e){function t(e){var i=e.progressBar,s=e.params,a=e.contentId,o=e.requiredField,u=(e.index,e.uiElements);n(this,t);var c=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return c.progressBar=i,c.questionnaireElement=document.createElement("div"),c.questionnaireElement.className="h5p-questionnaire-element hide",c.instance=H5P.newRunnable(s,a,H5P.jQuery(c.questionnaireElement),void 0,{parent:c}),c.requiredField=o,c.answered=s.userDatas&&s.userDatas.state&&s.userDatas.state.length,c.attachRequiredField(o,u),c.instance.on("xAPI",c.handleInteraction.bind(c)),c.instance.on("allow-finish-changed",c.trigger.bind(c)),c.instance.on("changed",c.trigger.bind(c)),c}return i(t,e),s(t,null,[{key:"AllowFinish",get:function(){return{ALWAYS:0,DENY:1,ALLOW:2}}}]),s(t,[{key:"attachRequiredField",value:function(e,t){if(e){var n=this.questionnaireElement.querySelector(".h5p-subcontent-question");this.questionnaireElement.classList.add("h5p-questionnaire-required");var r=document.createElement("div");r.textContent="* "+t.requiredText,r.className="h5p-questionnaire-required-symbol",n&&n.insertBefore(r,n.firstChild)}}},{key:"handleInteraction",value:function(e){if("http://adlnet.gov/expapi/verbs/interacted"===e.data.statement.verb.id){var t=e.data.statement.result.response;t.trim&&(t=t.trim()),this.answered=!!t.length,this.trigger("handledInteraction")}}},{key:"allowFinish",value:function(){return void 0!==this.instance.allowFinish?this.instance.allowFinish():t.AllowFinish.ALWAYS}},{key:"finish",value:function(){if(this.instance.finish)return this.instance.finish()}},{key:"getCurrentState",value:function(){return this.instance.getCurrentState?this.instance.getCurrentState():null}},{key:"getElement",value:function(){return this.questionnaireElement}},{key:"isRequired",value:function(){return this.requiredField}},{key:"isAnswered",value:function(){return this.answered}},{key:"hide",value:function(e){this.questionnaireElement.classList[e?"add":"remove"]("hide")}},{key:"setActivityStarted",value:function(){this.instance.setActivityStarted&&this.instance.setActivityStarted()}}]),t}(H5P.EventDispatcher);t.default=a},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};n(13),n(15);var u=n(9),c=r(u),l=n(8),d=r(l),h=n(7),f=r(h),p=n(2),b=r(p),v=n(4),m=r(v),g=n(5),y=r(g),w=function(e){function t(e){var n=e.questionnaireElements,r=void 0===n?[]:n,a=e.successScreenOptions,u=void 0===a?{}:a,l=e.uiElements,h=void 0===l?{}:l,p=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,v=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};i(this,t);var g=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));g.contentId=p,g.state={questionnaireElements:[],currentIndex:0},h=H5P.jQuery.extend(!0,{buttonLabels:{prevLabel:"Back",nextLabel:"Next",submitLabel:"Submit",continueLabel:"Continue"},accessibility:{requiredTextExitLabel:"Close error message",progressBarText:"Question %current of %max"},requiredMessage:"This question requires an answer",requiredText:"required",submitScreenTitle:"You successfully answered all of the questions",submitScreenSubtitle:"Click below to submit your answers"},h),g.createQuestionnaireBody=function(){var e=this,t=document.createElement("div");return t.className="h5p-questionnaire-content",r.forEach(function(n,r){var i=n.requiredField,s=n.library,a=e.createQuestionContent(i,s,r);t.appendChild(a.getElement()),e.state.questionnaireElements.push(a)}),this.createSubmitScreen().attachTo(t),u.enableSuccessScreen&&this.createSuccessScreen().attachTo(t),t},g.createQuestionContent=function(e,t,n){var r=this,i=new y.default({progressBar:this.progressBar,params:t,contentId:this.contentId,requiredField:e,index:n,uiElements:h});return i.on("handledInteraction",function(){r.trigger("resize"),r.requiredMessage.trigger("hideMessage"),r.triggerXAPI("interacted")}),i.on("allow-finish-changed",function(){r.setForwardNavigationButton(r.state.currentIndex)}),i.on("changed",function(){r.requiredMessage.trigger("hideMessage")}),i},g.createQuestionnaire=function(){var e=document.createElement("div");if(e.className="h5p-questionnaire",1===r.length&&!r[0].library)return e.classList.add("h5p-invalid-questionnaire"),e.textContent="Invalid content",e;this.createProgressBar(r).attachTo(e);var t=this.createQuestionnaireBody();e.appendChild(t),this.requiredMessage=new f.default(h),this.requiredMessage.attachTo(e);var n=this.createFooter();return n.attachTo(e),this.state.questionnaireElements.length&&this.state.questionnaireElements[0].setActivityStarted(),this.state.finished?u.enableSuccessScreen?this.showSuccessScreen():this.showSubmitScreen():this.move(this.state.currentIndex,this.state.currentIndex>0),e},g.createSubmitScreen=function(){var e=this;return this.submitScreen=new d.default({title:h.submitScreenTitle,subtitle:h.submitScreenSubtitle,backLabel:h.buttonLabels.prevLabel,submitLabel:h.buttonLabels.submitLabel}),this.submitScreen.on("submit",this.handleSubmit.bind(this)),this.submitScreen.on("previous",function(){e.submitScreen.hide(),e.hideQuestion(!1),e.trigger("resize")}),this.submitScreen},g.hideQuestion=function(e){this.state.questionnaireElements[this.state.questionnaireElements.length-1].hide(e),this.progressBar.hide(e),this.footer.hide(e)},g.createSuccessScreen=function(){var e=this;return this.successScreen=new c.default(u,this),this.successScreen.on("imageLoaded",function(){e.trigger("resize")}),this.successScreen},g.createProgressBar=function(e){return this.progressBar=new m.default({currentIndex:this.state.currentIndex+1,maxIndex:e.length,uiElements:h}),this.progressBar},g.showSubmitScreen=function(){this.hideQuestion(!0),this.submitScreen.show(),this.trigger("resize")},g.showSuccessScreen=function(){this.hideQuestion(!0),this.submitScreen.hide(),this.successScreen.show(),this.trigger("resize")},g.handleSubmit=function(){u.enableSuccessScreen?this.showSuccessScreen():this.trigger("noSuccessScreen"),this.state.finished=!0,this.triggerXAPI("completed")},g.createFooter=function(){var e=this,t=new b.default(h.buttonLabels);return t.on("next",function(){e.move(e.state.currentIndex+1)&&e.showSubmitScreen()}),t.on("previous",function(){e.move(e.state.currentIndex-1)}),t.trigger("disable-previous"),this.footer=t,t},g.setForwardNavigationButton=function(e){if(!(e>this.state.questionnaireElements.length-1)){var t=this.state.questionnaireElements[e].allowFinish(),n=t===y.default.AllowFinish.ALLOW?"next":"continue";this.footer.setForwardNavigationButton(n)}},g.triggerRequiredQuestion=function(){this.requiredMessage.trigger("showMessage"),this.trigger("resize")},g.move=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.state,r=n.currentIndex,i=n.questionnaireElements,s=i[r];if(e<0)return!1;if(!t&&e>r){if(!this.isValidAnswer(s))return this.triggerRequiredQuestion(),!1;if(s.allowFinish()===y.default.AllowFinish.DENY&&!s.finish())return this.setForwardNavigationButton(r),this.trigger("resize"),!1}if(e>i.length-1)return!0;this.footer.trigger(0===e?"disable-previous":"enable-previous"),this.setForwardNavigationButton(e),this.requiredMessage.trigger("hideMessage"),i[r].hide(!0);var a=i[e];a.hide(!1);var u=a.getElement().querySelector(".h5p-subcontent-question");if(this.progressBar.attachNumberWidgetTo(u),this.trigger("resize"),this.state=o(this.state,{currentIndex:e}),this.progressBar.move(e+1),0!==e&&0!==r){var c=this.createXAPIEventTemplate("progressed");c.data.statement.object&&(c.data.statement.object.definition.extensions["http://id.tincanapi.com/extension/ending-point"]=e+1,this.trigger(c))}return i[e].setActivityStarted(),!1},g.isValidAnswer=function(e){return!e.isRequired()||e.isAnswered()},g.attach=function(e){e.get(0).classList.add("h5p-questionnaire-wrapper"),e.get(0).appendChild(w)},g.getCurrentState=function(){var e=this.state.questionnaireElements.map(function(e){return e.getCurrentState()});return{questions:e,progress:this.state.currentIndex,finished:this.state.finished,version:1}},g.setPreviousState=function(){var e=v.previousState;if(e&&e.questions){if(this.state.finished=e.finished,e.progress){this.state.currentIndex=e.progress;var t=this.state.currentIndex>=r.length;void 0===e.version&&t&&(this.state.currentIndex=r.length-1,this.state.finished=!0)}e.questions.forEach(function(e,t){r[t].library.userDatas=r[t].library.userDatas||{},r[t].library.userDatas.state=e})}},g.setPreviousState();var w=g.createQuestionnaire();return g}return a(t,e),t}(H5P.EventDispatcher);t.default=w},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n(16);var o=function(e){function t(e){r(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));n.requiredElement=document.createElement("div"),n.requiredElement.classList.add("h5p-questionnaire-choice-required"),n.requiredElement.classList.add("hide"),n.requiredMessage=document.createElement("div"),n.requiredMessage.textContent=e.requiredMessage,n.requiredMessage.className="h5p-questionnaire-choice-required-message",n.requiredMessage.setAttribute("role","alert");var s=document.createElement("button");return s.className="h5p-questionnaire-choice-required-exit",s.setAttribute("aria-label",e.accessibility.requiredTextExitLabel),s.addEventListener("click",function(){n.hideMessage()}),n.on("hideMessage",function(){n.hideMessage()}),n.on("showMessage",function(){n.showMessage()}),n.requiredElement.appendChild(n.requiredMessage),n.requiredElement.appendChild(s),n}return s(t,e),a(t,[{key:"showMessage",value:function(){this.requiredElement.classList.remove("hide")}},{key:"hideMessage",value:function(){this.requiredElement.classList.add("hide")}},{key:"attachTo",value:function(e){e.appendChild(this.requiredElement)}}]),t}(H5P.EventDispatcher);t.default=o},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n(17);var u=n(1),c=r(u),l=function(e){function t(e){var n=e.title,r=e.subtitle,a=e.backLabel,o=e.submitLabel;i(this,t);var u=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return u.wrapper=c.default.createDiv({className:"h5p-questionnaire-submit-screen hide"}),u.wrapper.setAttribute("tabindex","-1"),u.wrapper.appendChild(c.default.createDiv({className:"h5p-questionnaire-submit-screen-title",textContent:n})),u.wrapper.appendChild(c.default.createDiv({className:"h5p-questionnaire-submit-screen-subtitle",textContent:r})),u.wrapper.appendChild(c.default.createButton(a,"previous",u)),u.wrapper.appendChild(c.default.createButton(o,"submit",u)),u.show=function(){this.wrapper.classList.remove("hide"),this.wrapper.focus()},u.hide=function(){this.wrapper.classList.add("hide")},u}return a(t,e),o(t,[{key:"attachTo",value:function(e){e.appendChild(this.wrapper)}}]),t}(H5P.EventDispatcher);t.default=l},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n(18);var o=function(e){function t(e,n){var s=e.successScreenImage,a=void 0===s?{}:s,o=e.successMessage,u=void 0===o?"":o;r(this,t);var c=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));c.wrapper=document.createElement("div"),c.wrapper.className="h5p-questionnaire-success",c.wrapper.setAttribute("tabindex","-1"),c.wrapper.classList.add("hide");var l=document.createElement("div");l.className="h5p-questionnaire-success-center",c.wrapper.appendChild(l);var d=document.createElement("div");if(d.className="h5p-questionnaire-success-icon",a.params&&a.params.file){d.classList.add("image");var h=H5P.newRunnable(a,n.contentId,H5P.jQuery(d),void 0,{parent:n});h.on("loaded",function(){c.trigger("imageLoaded")})}else d.classList.add("standard-icon");var f=document.createElement("div");return f.className="h5p-questionnaire-success-message",f.innerHTML=u,l.appendChild(d),l.appendChild(f),c.show=function(){this.wrapper.classList.remove("hide"),this.wrapper.focus()},c}return s(t,e),a(t,[{key:"attachTo",value:function(e){e.appendChild(this.wrapper)}}]),t}(H5P.EventDispatcher);t.default=o},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){}]);