import{a as Ie,c as Re,e as Ae,g as ze,h as Ve}from"./chunk-QC24V5CR.js";import"./chunk-MMGA6UQG.js";import"./chunk-37S2BO6D.js";import{d as Ce,f as ye,g as Me,i as N}from"./chunk-5FBFIPUF.js";import{b as Oe,f as Be}from"./chunk-35IBFZQM.js";import"./chunk-5JN3VS6X.js";import{a as Ee,b as W,c as Pe,d as se}from"./chunk-XJA634MG.js";import{F as Fe,G as H,H as G,c as x,f as xe,n as ke,o as De,r as Se,u as Te,v as Q,x as k}from"./chunk-XNXG5RW6.js";import"./chunk-6F733C44.js";import{$b as re,$c as L,Ac as ae,E as me,Ea as y,F as pe,Fa as ue,G as q,Ib as z,Jb as Y,Kb as ee,Nb as te,Ob as ne,Pb as _e,Qb as i,Rb as a,Sb as S,T as $,Uc as ve,V as p,Xb as V,Zb as g,ac as M,ba as E,bc as h,cb as c,cc as j,d as u,da as K,dc as oe,ec as _,fa as o,fc as b,ib as X,jc as be,kc as ie,la as P,lb as R,lc as w,ma as F,nc as we,oc as m,p as Z,pa as J,pc as v,qa as C,sb as l,ta as O,tb as A,ua as B,ub as fe,xa as I,xb as ge,y as le,z as D,za as he}from"./chunk-6QGPMABE.js";import"./chunk-EU2KAMEK.js";import"./chunk-DAQOROHW.js";var je=["*"],$e=["content"],Ke=[[["mat-drawer"]],[["mat-drawer-content"]],"*"],Je=["mat-drawer","mat-drawer-content","*"];function Xe(r,f){if(r&1){let e=V();i(0,"div",1),g("click",function(){P(e);let n=re();return F(n._onBackdropClicked())}),a()}if(r&2){let e=re();w("mat-drawer-shown",e._isShowingBackdrop())}}function Ye(r,f){r&1&&(i(0,"mat-drawer-content"),h(1,2),a())}var et=new K("MAT_DRAWER_DEFAULT_AUTOSIZE",{providedIn:"root",factory:()=>!1}),Le=new K("MAT_DRAWER_CONTAINER"),T=(()=>{class r extends W{_platform=o(x);_changeDetectorRef=o(L);_container=o(ce);constructor(){let e=o(y),t=o(Ee),n=o(B);super(e,t,n)}ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()})}_shouldBeHidden(){if(this._platform.isBrowser)return!1;let{start:e,end:t}=this._container;return e!=null&&e.mode!=="over"&&e.opened||t!=null&&t.mode!=="over"&&t.opened}static \u0275fac=function(t){return new(t||r)};static \u0275cmp=l({type:r,selectors:[["mat-drawer-content"]],hostAttrs:[1,"mat-drawer-content"],hostVars:6,hostBindings:function(t,n){t&2&&(ie("margin-left",n._container._contentMargins.left,"px")("margin-right",n._container._contentMargins.right,"px"),w("mat-drawer-content-hidden",n._shouldBeHidden()))},features:[ae([{provide:W,useExisting:r}]),ge],ngContentSelectors:je,decls:1,vars:0,template:function(t,n){t&1&&(M(),h(0))},encapsulation:2,changeDetection:0})}return r})(),de=(()=>{class r{_elementRef=o(y);_focusTrapFactory=o(De);_focusMonitor=o(xe);_platform=o(x);_ngZone=o(B);_renderer=o(R);_interactivityChecker=o(ke);_doc=o(C);_container=o(Le,{optional:!0});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached=!1;_anchor=null;get position(){return this._position}set position(e){e=e==="end"?"end":"start",e!==this._position&&(this._isAttached&&this._updatePositionInParent(e),this._position=e,this.onPositionChanged.emit())}_position="start";get mode(){return this._mode}set mode(e){this._mode=e,this._updateFocusTrapState(),this._modeChanged.next()}_mode="over";get disableClose(){return this._disableClose}set disableClose(e){this._disableClose=k(e)}_disableClose=!1;get autoFocus(){let e=this._autoFocus;return e??(this.mode==="side"?"dialog":"first-tabbable")}set autoFocus(e){(e==="true"||e==="false"||e==null)&&(e=k(e)),this._autoFocus=e}_autoFocus;get opened(){return this._opened()}set opened(e){this.toggle(k(e))}_opened=I(!1);_openedVia=null;_animationStarted=new u;_animationEnd=new u;openedChange=new O(!0);_openedStream=this.openedChange.pipe(D(e=>e),Z(()=>{}));openedStart=this._animationStarted.pipe(D(()=>this.opened),q(void 0));_closedStream=this.openedChange.pipe(D(e=>!e),Z(()=>{}));closedStart=this._animationStarted.pipe(D(()=>!this.opened),q(void 0));_destroyed=new u;onPositionChanged=new O;_content;_modeChanged=new u;_injector=o(J);_changeDetectorRef=o(L);constructor(){this.openedChange.pipe(p(this._destroyed)).subscribe(e=>{e?(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement,this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||"program")}),this._eventCleanups=this._ngZone.runOutsideAngular(()=>{let e=this._renderer,t=this._elementRef.nativeElement;return[e.listen(t,"keydown",n=>{n.keyCode===27&&!this.disableClose&&!Se(n)&&this._ngZone.run(()=>{this.close(),n.stopPropagation(),n.preventDefault()})}),e.listen(t,"transitionend",this._handleTransitionEvent),e.listen(t,"transitioncancel",this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened)})}_forceFocus(e,t){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let n=()=>{s(),d(),e.removeAttribute("tabindex")},s=this._renderer.listen(e,"blur",n),d=this._renderer.listen(e,"mousedown",n)})),e.focus(t)}_focusByCssSelector(e,t){let n=this._elementRef.nativeElement.querySelector(e);n&&this._forceFocus(n,t)}_takeFocus(){if(!this._focusTrap)return;let e=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case"dialog":return;case!0:case"first-tabbable":X(()=>{!this._focusTrap.focusInitialElement()&&typeof e.focus=="function"&&e.focus()},{injector:this._injector});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this.autoFocus);break}}_restoreFocus(e){this.autoFocus!=="dialog"&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,e):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){let e=this._doc.activeElement;return!!e&&this._elementRef.nativeElement.contains(e)}ngAfterViewInit(){this._isAttached=!0,this._position==="end"&&this._updatePositionInParent("end"),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(e){return this.toggle(!0,e)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,"mouse")}toggle(e=!this.opened,t){e&&t&&(this._openedVia=t);let n=this._setOpen(e,!e&&this._isFocusWithinDrawer(),this._openedVia||"program");return e||(this._openedVia=null),n}_setOpen(e,t,n){return e===this.opened?Promise.resolve(e?"open":"close"):(this._opened.set(e),this._container?._transitionsEnabled?(this._setIsAnimating(!0),setTimeout(()=>this._animationStarted.next())):setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next()}),this._elementRef.nativeElement.classList.toggle("mat-drawer-opened",e),!e&&t&&this._restoreFocus(n),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(s=>{this.openedChange.pipe(pe(1)).subscribe(d=>s(d?"open":"close"))}))}_setIsAnimating(e){this._elementRef.nativeElement.classList.toggle("mat-drawer-animating",e)}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&!!this._container?._isShowingBackdrop())}_updatePositionInParent(e){if(!this._platform.isBrowser)return;let t=this._elementRef.nativeElement,n=t.parentNode;e==="end"?(this._anchor||(this._anchor=this._doc.createComment("mat-drawer-anchor"),n.insertBefore(this._anchor,t)),n.appendChild(t)):this._anchor&&this._anchor.parentNode.insertBefore(t,this._anchor)}_handleTransitionEvent=e=>{let t=this._elementRef.nativeElement;e.target===t&&this._ngZone.run(()=>{e.type==="transitionend"&&this._setIsAnimating(!1),this._animationEnd.next(e)})};static \u0275fac=function(t){return new(t||r)};static \u0275cmp=l({type:r,selectors:[["mat-drawer"]],viewQuery:function(t,n){if(t&1&&oe($e,5),t&2){let s;_(s=b())&&(n._content=s.first)}},hostAttrs:[1,"mat-drawer"],hostVars:12,hostBindings:function(t,n){t&2&&(z("align",null)("tabIndex",n.mode!=="side"?"-1":null),ie("visibility",!n._container&&!n.opened?"hidden":null),w("mat-drawer-end",n.position==="end")("mat-drawer-over",n.mode==="over")("mat-drawer-push",n.mode==="push")("mat-drawer-side",n.mode==="side"))},inputs:{position:"position",mode:"mode",disableClose:"disableClose",autoFocus:"autoFocus",opened:"opened"},outputs:{openedChange:"openedChange",_openedStream:"opened",openedStart:"openedStart",_closedStream:"closed",closedStart:"closedStart",onPositionChanged:"positionChanged"},exportAs:["matDrawer"],ngContentSelectors:je,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(t,n){t&1&&(M(),i(0,"div",1,0),h(2),a())},dependencies:[W],encapsulation:2,changeDetection:0})}return r})(),ce=(()=>{class r{_dir=o(Te,{optional:!0});_element=o(y);_ngZone=o(B);_changeDetectorRef=o(L);_animationDisabled=Fe();_transitionsEnabled=!1;_allDrawers;_drawers=new ue;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(e){this._autosize=k(e)}_autosize=o(et);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(e){this._backdropOverride=e==null?null:k(e)}_backdropOverride=null;backdropClick=new O;_start=null;_end=null;_left=null;_right=null;_destroyed=new u;_doCheckSubject=new u;_contentMargins={left:null,right:null};_contentMarginChanges=new u;get scrollable(){return this._userContent||this._content}_injector=o(J);constructor(){let e=o(x),t=o(Pe);this._dir?.change.pipe(p(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),t.change().pipe(p(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&e.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add("mat-drawer-transition"),this._transitionsEnabled=!0},200)})}ngAfterContentInit(){this._allDrawers.changes.pipe($(this._allDrawers),p(this._destroyed)).subscribe(e=>{this._drawers.reset(e.filter(t=>!t._container||t._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe($(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(e=>{this._watchDrawerToggle(e),this._watchDrawerPosition(e),this._watchDrawerMode(e)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(me(10),p(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(e=>e.open())}close(){this._drawers.forEach(e=>e.close())}updateContentMargins(){let e=0,t=0;if(this._left&&this._left.opened){if(this._left.mode=="side")e+=this._left._getWidth();else if(this._left.mode=="push"){let n=this._left._getWidth();e+=n,t-=n}}if(this._right&&this._right.opened){if(this._right.mode=="side")t+=this._right._getWidth();else if(this._right.mode=="push"){let n=this._right._getWidth();t+=n,e-=n}}e=e||null,t=t||null,(e!==this._contentMargins.left||t!==this._contentMargins.right)&&(this._contentMargins={left:e,right:t},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(e){e._animationStarted.pipe(p(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),e.mode!=="side"&&e.openedChange.pipe(p(this._drawers.changes)).subscribe(()=>this._setContainerClass(e.opened))}_watchDrawerPosition(e){e.onPositionChanged.pipe(p(this._drawers.changes)).subscribe(()=>{X({read:()=>this._validateDrawers()},{injector:this._injector})})}_watchDrawerMode(e){e._modeChanged.pipe(p(le(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(e){let t=this._element.nativeElement.classList,n="mat-drawer-container-has-open";e?t.add(n):t.remove(n)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(e=>{e.position=="end"?(this._end!=null,this._end=e):(this._start!=null,this._start=e)}),this._right=this._left=null,this._dir&&this._dir.value==="rtl"?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!="over"||this._isDrawerOpen(this._end)&&this._end.mode!="over"}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(e=>e&&!e.disableClose&&this._drawerHasBackdrop(e)).forEach(e=>e._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(e){return e!=null&&e.opened}_drawerHasBackdrop(e){return this._backdropOverride==null?!!e&&e.mode!=="side":this._backdropOverride}static \u0275fac=function(t){return new(t||r)};static \u0275cmp=l({type:r,selectors:[["mat-drawer-container"]],contentQueries:function(t,n,s){if(t&1&&j(s,T,5)(s,de,5),t&2){let d;_(d=b())&&(n._content=d.first),_(d=b())&&(n._allDrawers=d)}},viewQuery:function(t,n){if(t&1&&oe(T,5),t&2){let s;_(s=b())&&(n._userContent=s.first)}},hostAttrs:[1,"mat-drawer-container"],hostVars:2,hostBindings:function(t,n){t&2&&w("mat-drawer-container-explicit-backdrop",n._backdropOverride)},inputs:{autosize:"autosize",hasBackdrop:"hasBackdrop"},outputs:{backdropClick:"backdropClick"},exportAs:["matDrawerContainer"],features:[ae([{provide:Le,useExisting:r}])],ngContentSelectors:Je,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(t,n){t&1&&(M(Ke),Y(0,Xe,1,2,"div",0),h(1),h(2,1),Y(3,Ye,2,0,"mat-drawer-content")),t&2&&(ee(n.hasBackdrop?0:-1),c(3),ee(n._content?-1:3))},dependencies:[T],styles:[`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));
  background-color: var(--mat-sidenav-content-background-color, var(--mat-sys-background));
  box-sizing: border-box;
  display: block;
  overflow: hidden;
}
.mat-drawer-container[fullscreen] {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-drawer-container[fullscreen].mat-drawer-container-has-open {
  overflow: hidden;
}
.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {
  z-index: 3;
}
.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,
.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,
.ng-animate-disabled .mat-drawer-container .mat-drawer-content {
  transition: none;
}

.mat-drawer-backdrop {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  z-index: 3;
  visibility: hidden;
}
.mat-drawer-backdrop.mat-drawer-shown {
  visibility: visible;
  background-color: var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent));
}
.mat-drawer-transition .mat-drawer-backdrop {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: background-color, visibility;
}
@media (forced-colors: active) {
  .mat-drawer-backdrop {
    opacity: 0.5;
  }
}

.mat-drawer-content {
  position: relative;
  z-index: 1;
  display: block;
  height: 100%;
  overflow: auto;
}
.mat-drawer-content.mat-drawer-content-hidden {
  opacity: 0;
}
.mat-drawer-transition .mat-drawer-content {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: transform, margin-left, margin-right;
}

.mat-drawer {
  position: relative;
  z-index: 4;
  color: var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));
  box-shadow: var(--mat-sidenav-container-elevation-shadow, none);
  background-color: var(--mat-sidenav-container-background-color, var(--mat-sys-surface));
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  width: var(--mat-sidenav-container-width, 360px);
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
  outline: 0;
  box-sizing: border-box;
  overflow-y: auto;
  transform: translate3d(-100%, 0, 0);
}
@media (forced-colors: active) {
  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {
    border-right: solid 1px currentColor;
  }
}
@media (forced-colors: active) {
  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {
    border-left: solid 1px currentColor;
    border-right: none;
  }
}
.mat-drawer.mat-drawer-side {
  z-index: 2;
}
.mat-drawer.mat-drawer-end {
  right: 0;
  transform: translate3d(100%, 0, 0);
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  left: 0;
  right: auto;
  transform: translate3d(-100%, 0, 0);
}
.mat-drawer-transition .mat-drawer {
  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {
  visibility: hidden;
  box-shadow: none;
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {
  display: none;
}
.mat-drawer.mat-drawer-opened.mat-drawer-opened {
  transform: none;
}

.mat-drawer-side {
  box-shadow: none;
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
  border-left: none;
}

.mat-drawer-inner-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.mat-sidenav-fixed {
  position: fixed;
}
`],encapsulation:2,changeDetection:0})}return r})();var Ne=(()=>{class r{static \u0275fac=function(t){return new(t||r)};static \u0275mod=A({type:r});static \u0275inj=E({imports:[se,Q,se]})}return r})();var nt=["*",[["mat-toolbar-row"]]],rt=["*","mat-toolbar-row"],ot=(()=>{class r{static \u0275fac=function(t){return new(t||r)};static \u0275dir=fe({type:r,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return r})(),Qe=(()=>{class r{_elementRef=o(y);_platform=o(x);_document=o(C);color;_toolbarRows;constructor(){}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(t){return new(t||r)};static \u0275cmp=l({type:r,selectors:[["mat-toolbar"]],contentQueries:function(t,n,s){if(t&1&&j(s,ot,5),t&2){let d;_(d=b())&&(n._toolbarRows=d)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(t,n){t&2&&(we(n.color?"mat-"+n.color:""),w("mat-toolbar-multiple-rows",n._toolbarRows.length>0)("mat-toolbar-single-row",n._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:rt,decls:2,vars:0,template:function(t,n){t&1&&(M(nt),h(0),h(1,1))},styles:[`.mat-toolbar {
  background: var(--mat-toolbar-container-background-color, var(--mat-sys-surface));
  color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}
.mat-toolbar, .mat-toolbar h1, .mat-toolbar h2, .mat-toolbar h3, .mat-toolbar h4, .mat-toolbar h5, .mat-toolbar h6 {
  font-family: var(--mat-toolbar-title-text-font, var(--mat-sys-title-large-font));
  font-size: var(--mat-toolbar-title-text-size, var(--mat-sys-title-large-size));
  line-height: var(--mat-toolbar-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-weight: var(--mat-toolbar-title-text-weight, var(--mat-sys-title-large-weight));
  letter-spacing: var(--mat-toolbar-title-text-tracking, var(--mat-sys-title-large-tracking));
  margin: 0;
}
@media (forced-colors: active) {
  .mat-toolbar {
    outline: solid 1px;
  }
}
.mat-toolbar .mat-form-field-underline,
.mat-toolbar .mat-form-field-ripple,
.mat-toolbar .mat-focused .mat-form-field-ripple {
  background-color: currentColor;
}
.mat-toolbar .mat-form-field-label,
.mat-toolbar .mat-focused .mat-form-field-label,
.mat-toolbar .mat-select-value,
.mat-toolbar .mat-select-arrow,
.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {
  color: inherit;
}
.mat-toolbar .mat-input-element {
  caret-color: currentColor;
}
.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed {
  --mat-button-text-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
  --mat-button-outlined-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}

.mat-toolbar-row, .mat-toolbar-single-row {
  display: flex;
  box-sizing: border-box;
  padding: 0 16px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-row, .mat-toolbar-single-row {
    height: var(--mat-toolbar-mobile-height, 56px);
  }
}

.mat-toolbar-multiple-rows {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  min-height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-multiple-rows {
    min-height: var(--mat-toolbar-mobile-height, 56px);
  }
}
`],encapsulation:2,changeDetection:0})}return r})();var We=(()=>{class r{static \u0275fac=function(t){return new(t||r)};static \u0275mod=A({type:r});static \u0275inj=E({imports:[Q]})}return r})();var He=(()=>{class r{constructor(){this.document=o(C),this.renderer=o(R),this.isDarkMode=I(this.getInitialTheme()),this.toggleSidebar=ve(),he(()=>{this.isDarkMode()?(this.renderer.addClass(this.document.body,"dark-theme"),localStorage.setItem("theme","dark")):(this.renderer.removeClass(this.document.body,"dark-theme"),localStorage.setItem("theme","light"))})}getInitialTheme(){let e=localStorage.getItem("theme");return e?e==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches}toggleDarkMode(){this.isDarkMode.update(e=>!e)}onToggleSidebar(){this.toggleSidebar.emit()}static{this.\u0275fac=function(t){return new(t||r)}}static{this.\u0275cmp=l({type:r,selectors:[["playground-header"]],outputs:{toggleSidebar:"toggleSidebar"},decls:18,vars:2,consts:[["color","primary",1,"docs-toolbar"],["mat-icon-button","",3,"click"],[1,"docs-logo"],[1,"logo-icon"],[1,"spacer"],["mat-icon-button",""]],template:function(t,n){t&1&&(i(0,"mat-toolbar",0)(1,"button",1),g("click",function(){return n.onToggleSidebar()}),i(2,"mat-icon"),m(3,"menu"),a()(),i(4,"span",2)(5,"mat-icon",3),m(6,"widgets"),a(),m(7," Component Library "),a(),S(8,"span",4),i(9,"button",5)(10,"mat-icon"),m(11,"search"),a()(),i(12,"button",1),g("click",function(){return n.toggleDarkMode()}),i(13,"mat-icon"),m(14),a()(),i(15,"button",5)(16,"mat-icon"),m(17,"code"),a()()()),t&2&&(c(12),z("aria-label",n.isDarkMode()?"Switch to light mode":"Switch to dark mode"),c(2),v(n.isDarkMode()?"light_mode":"dark_mode"))},dependencies:[We,Qe,G,H,Be,Oe],styles:[".docs-toolbar[_ngcontent-%COMP%]{position:fixed;top:0;left:0;right:0;z-index:1000;height:64px;box-shadow:0 2px 4px #0000001a}.docs-toolbar[_ngcontent-%COMP%]   .docs-logo[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;font-size:20px;font-weight:500}.docs-toolbar[_ngcontent-%COMP%]   .docs-logo[_ngcontent-%COMP%]   .logo-icon[_ngcontent-%COMP%]{font-size:28px;width:28px;height:28px}.docs-toolbar[_ngcontent-%COMP%]   .spacer[_ngcontent-%COMP%]{flex:1 1 auto}"],changeDetection:0})}}return r})();var Ge=(r,f)=>f.title;function dt(r,f){if(r&1&&(i(0,"a",4)(1,"mat-icon",5),m(2),a(),i(3,"span",6),m(4),a()()),r&2){let e=f.$implicit;_e("routerLink",e.route),c(2),v(e.icon),c(2),v(e.title)}}function ct(r,f){if(r&1&&(i(0,"div",1)(1,"div",2)(2,"mat-icon",3),m(3),a(),i(4,"span"),m(5),a()(),i(6,"mat-nav-list"),te(7,dt,5,3,"a",4,Ge),a()()),r&2){let e=f.$implicit;c(3),v(e.icon),c(2),v(e.title),c(2),ne(e.children)}}var Ue=(()=>{class r{constructor(){this.menuItems=[{title:"Getting Started",icon:"home",children:[{title:"Overview",route:"/",icon:"dashboard"},{title:"Installation",route:"/installation",icon:"download"},{title:"Diagnostic Engine",route:"/diagnostic-demo",icon:"troubleshoot"}]},{title:"Bootstrap Components",icon:"widgets",description:"Components built with Bootstrap styling",children:[{title:"Accordion",route:"/bootstrap/accordion",icon:"expand_more"},{title:"Breadcrumb",route:"/bootstrap/breadcrumb",icon:"navigation"},{title:"Cart List",route:"/bootstrap/cart-list",icon:"shopping_cart"},{title:"Comment List",route:"/bootstrap/comment-list",icon:"comment"},{title:"Product Tiles",route:"/bootstrap/product-tiles",icon:"grid_view"},{title:"Rating Breakdown",route:"/bootstrap/rating-breakdown",icon:"star"},{title:"Timeline",route:"/bootstrap/timeline",icon:"timeline"},{title:"Toast",route:"/bootstrap/toast",icon:"notifications"}]},{title:"Material Components",icon:"layers",description:"Components built with Material Design",children:[{title:"Breadcrumb",route:"/material/breadcrumb",icon:"navigation"},{title:"Popup",route:"/material/popup",icon:"open_in_new"},{title:"Snackbar",route:"/material/snackbar",icon:"notifications"},{title:"Week Filter",route:"/material/week-filter",icon:"date_range"}]},{title:"Generic UI Components",icon:"palette",description:"Framework-agnostic reusable components",children:[{title:"AI Assist",route:"/ui/ai-assist",icon:"smart_toy"},{title:"Alphabet Search",route:"/ui/alphabet-search",icon:"search"},{title:"Audio Player",route:"/ui/audio-player",icon:"music_note"},{title:"Busy Loader",route:"/ui/busy-loader",icon:"hourglass_empty"},{title:"Circle Progress",route:"/ui/circle-progress",icon:"donut_large"},{title:"Clock",route:"/ui/clock",icon:"schedule"},{title:"Cursor",route:"/ui/cursor",icon:"mouse"},{title:"FAQ Widget",route:"/ui/faq-widget",icon:"help"},{title:"File Uploader",route:"/ui/file-uploader",icon:"upload_file"},{title:"Timer",route:"/ui/timer",icon:"timer"},{title:"TypeWriter",route:"/ui/typewriter",icon:"keyboard"},{title:"View More",route:"/ui/view-more",icon:"visibility"},{title:"Voice Navigation",route:"/ui/voice-nav",icon:"mic"},{title:"Week Filter",route:"/ui/week-filter",icon:"date_range"}]},{title:"Directives",icon:"code",children:[{title:"Accessible Form",route:"/directives/accessible-form",icon:"accessibility"},{title:"Window Opener",route:"/directives/window-opener",icon:"open_in_new"},{title:"Cursor Link",route:"/directives/cursor-link",icon:"link"},{title:"Lazy Scroll",route:"/directives/lazy-scroll",icon:"vertical_align_bottom"},{title:"Palette",route:"/directives/palette",icon:"color_lens"},{title:"Scroll To Element",route:"/directives/scroll-to",icon:"arrow_downward"},{title:"Sticky",route:"/directives/sticky",icon:"push_pin"},{title:"Swipe",route:"/directives/swipe",icon:"swipe"}]},{title:"Pipes",icon:"filter_alt",children:[{title:"Ellipsis",route:"/pipes/ellipsis",icon:"more_horiz"},{title:"KeyValue",route:"/pipes/keyvalue",icon:"key"},{title:"Pagination",route:"/pipes/pagination",icon:"pages"},{title:"Safe",route:"/pipes/safe",icon:"security"},{title:"Short Number",route:"/pipes/short-number",icon:"numbers"},{title:"Sorted KeyValue",route:"/pipes/sorted-keyvalue",icon:"sort"},{title:"Spacer",route:"/pipes/spacer",icon:"space_bar"},{title:"Truncate",route:"/pipes/truncate",icon:"content_cut"}]}]}static{this.\u0275fac=function(t){return new(t||r)}}static{this.\u0275cmp=l({type:r,selectors:[["playground-sidebar"]],decls:3,vars:0,consts:[[1,"sidenav-content"],[1,"nav-section"],[1,"nav-section-header"],[1,"section-icon"],["mat-list-item","","routerLinkActive","active",3,"routerLink"],["matListItemIcon",""],["matListItemTitle",""]],template:function(t,n){t&1&&(i(0,"div",0),te(1,ct,9,2,"div",1,Ge),a()),t&2&&(c(),ne(n.menuItems))},dependencies:[N,ye,Me,Ve,ze,Ae,Re,Ie,G,H],styles:[".sidenav-content[_ngcontent-%COMP%]{padding:16px 0}.nav-section[_ngcontent-%COMP%]{margin-bottom:24px}.nav-section[_ngcontent-%COMP%]   .nav-section-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;padding:8px 16px;font-size:14px;font-weight:600;color:#0000008a;text-transform:uppercase;letter-spacing:.5px}.nav-section[_ngcontent-%COMP%]   .nav-section-header[_ngcontent-%COMP%]   .section-icon[_ngcontent-%COMP%]{font-size:20px;width:20px;height:20px}.nav-section[_ngcontent-%COMP%]   mat-nav-list[_ngcontent-%COMP%]{padding-top:0}.nav-section[_ngcontent-%COMP%]   mat-nav-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:14px;height:40px}.nav-section[_ngcontent-%COMP%]   mat-nav-list[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{background-color:#3f51b514;color:#3f51b5}.nav-section[_ngcontent-%COMP%]   mat-nav-list[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#3f51b5}.nav-section[_ngcontent-%COMP%]   mat-nav-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background-color:#0000000a}.nav-section[_ngcontent-%COMP%]   mat-nav-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:20px;width:20px;height:20px;margin-right:16px}@media(prefers-color-scheme:dark){.nav-section-header[_ngcontent-%COMP%]{color:#ffffffb3}mat-nav-list[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{background-color:#3f51b526;color:#7986cb}mat-nav-list[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#7986cb}mat-nav-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background-color:#ffffff0a}}"],changeDetection:0})}}return r})();var an=(()=>{class r{static{this.\u0275fac=function(t){return new(t||r)}}static{this.\u0275cmp=l({type:r,selectors:[["playground-user"]],decls:7,vars:0,consts:[["drawer",""],[3,"toggleSidebar"],["autosize","",1,"docs-container"],["mode","side","opened","",1,"docs-sidenav"],[1,"docs-content"]],template:function(t,n){if(t&1){let s=V();i(0,"playground-header",1),g("toggleSidebar",function(){P(s);let Ze=be(3);return F(Ze.toggle())}),a(),i(1,"mat-drawer-container",2)(2,"mat-drawer",3,0),S(4,"playground-sidebar"),a(),i(5,"mat-drawer-content",4),S(6,"router-outlet"),a()()}},dependencies:[N,Ce,Ne,de,ce,T,He,Ue],styles:[".docs-container[_ngcontent-%COMP%]{margin-top:64px;height:calc(100vh - 64px);overflow:hidden}.docs-sidenav[_ngcontent-%COMP%]{width:280px;border-right:1px solid rgba(0,0,0,.12);height:100%;overflow-y:auto}.docs-content[_ngcontent-%COMP%]{background-color:#fafafa;height:100%;overflow-y:auto;overflow-x:hidden}@media(prefers-color-scheme:dark){.docs-sidenav[_ngcontent-%COMP%]{border-right-color:#ffffff1f}.docs-content[_ngcontent-%COMP%]{background-color:#303030}}"],changeDetection:0})}}return r})();export{an as UserComponent};
