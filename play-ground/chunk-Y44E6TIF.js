import{d as Qt,f as Jt}from"./chunk-35IBFZQM.js";import{a as ft,c as I,e as _t}from"./chunk-XJA634MG.js";import{j as mt,k as gt,l as te,m as ee,o as vt,p as z}from"./chunk-PRGDJABY.js";import{B as pt,D as Ut,F as ut,b as ct,c as x,h as ht,j as dt,k as Gt,p as Kt,t as W,u as $t,v as H,w as f,z as qt}from"./chunk-XNXG5RW6.js";import{$b as st,$c as jt,Ca as et,Ea as D,Gb as Ft,Ib as Lt,Jb as Yt,Ka as Bt,Kb as Xt,Qb as N,Rb as T,Sb as Nt,V as Rt,Xb as Wt,Zb as nt,a as tt,aa as b,ba as L,cb as A,d as u,da as R,dc as Ht,ec as ot,fa as h,fc as rt,ib as O,ja as Dt,jb as it,k as Pt,kb as Y,la as At,lb as Tt,lc as zt,ma as Mt,oc as at,od as Zt,pa as k,qa as w,qc as lt,sb as M,tb as X,ua as S,ub as B,xb as It,yb as Vt,z as Et}from"./chunk-6QGPMABE.js";import{a as y,b as xt}from"./chunk-DAQOROHW.js";var ie=qt();function ce(n){return new j(n.get(I),n.get(w))}var j=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(t,e){this._viewportRuler=t,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let t=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=t.style.left||"",this._previousHTMLStyles.top=t.style.top||"",t.style.left=f(-this._previousScrollPosition.left),t.style.top=f(-this._previousScrollPosition.top),t.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let t=this._document.documentElement,e=this._document.body,i=t.style,s=e.style,o=i.scrollBehavior||"",r=s.scrollBehavior||"";this._isEnabled=!1,i.left=this._previousHTMLStyles.left,i.top=this._previousHTMLStyles.top,t.classList.remove("cdk-global-scrollblock"),ie&&(i.scrollBehavior=s.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),ie&&(i.scrollBehavior=o,s.scrollBehavior=r)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let e=this._document.documentElement,i=this._viewportRuler.getViewportSize();return e.scrollHeight>i.height||e.scrollWidth>i.width}};function he(n,t){return new Z(n.get(ft),n.get(S),n.get(I),t)}var Z=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(t,e,i,s){this._scrollDispatcher=t,this._ngZone=e,this._viewportRuler=i,this._config=s}attach(t){this._overlayRef,this._overlayRef=t}enable(){if(this._scrollSubscription)return;let t=this._scrollDispatcher.scrolled(0).pipe(Et(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=t.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=t.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var V=class{enable(){}disable(){}attach(){}};function yt(n,t){return t.some(e=>{let i=n.bottom<e.top,s=n.top>e.bottom,o=n.right<e.left,r=n.left>e.right;return i||s||o||r})}function ne(n,t){return t.some(e=>{let i=n.top<e.top,s=n.bottom>e.bottom,o=n.left<e.left,r=n.right>e.right;return i||s||o||r})}function de(n,t){return new G(n.get(ft),n.get(I),n.get(S),t)}var G=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(t,e,i,s){this._scrollDispatcher=t,this._viewportRuler=e,this._ngZone=i,this._config=s}attach(t){this._overlayRef,this._overlayRef=t}enable(){if(!this._scrollSubscription){let t=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(t).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:i,height:s}=this._viewportRuler.getViewportSize();yt(e,[{width:i,height:s,bottom:s,right:i,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},pe=(()=>{class n{_injector=h(k);constructor(){}noop=()=>new V;close=e=>he(this._injector,e);block=()=>ce(this._injector);reposition=e=>de(this._injector,e);static \u0275fac=function(i){return new(i||n)};static \u0275prov=b({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),P=class{positionStrategy;scrollStrategy=new V;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(t){if(t){let e=Object.keys(t);for(let i of e)t[i]!==void 0&&(this[i]=t[i])}}};var K=class{connectionPair;scrollableViewProperties;constructor(t,e){this.connectionPair=t,this.scrollableViewProperties=e}};var fe=(()=>{class n{_attachedOverlays=[];_document=h(w);_isAttached=!1;constructor(){}ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let i=this._attachedOverlays.indexOf(e);i>-1&&this._attachedOverlays.splice(i,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,i,s){return s.observers.length<1?!1:e.eventPredicate?e.eventPredicate(i):!0}static \u0275fac=function(i){return new(i||n)};static \u0275prov=b({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),_e=(()=>{class n extends fe{_ngZone=h(S);_renderer=h(Y).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let i=this._attachedOverlays;for(let s=i.length-1;s>-1;s--){let o=i[s];if(this.canReceiveEvent(o,e,o._keydownEvents)){this._ngZone.run(()=>o._keydownEvents.next(e));break}}};static \u0275fac=(()=>{let e;return function(s){return(e||(e=et(n)))(s||n)}})();static \u0275prov=b({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),ue=(()=>{class n extends fe{_platform=h(x);_ngZone=h(S);_renderer=h(Y).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let i=this._document.body,s={capture:!0},o=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[o.listen(i,"pointerdown",this._pointerDownListener,s),o.listen(i,"click",this._clickListener,s),o.listen(i,"auxclick",this._clickListener,s),o.listen(i,"contextmenu",this._clickListener,s)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=i.style.cursor,i.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=ct(e)};_clickListener=e=>{let i=ct(e),s=e.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:i;this._pointerDownEventTarget=null;let o=this._attachedOverlays.slice();for(let r=o.length-1;r>-1;r--){let a=o[r],l=a._outsidePointerEvents;if(!(!a.hasAttached()||!this.canReceiveEvent(a,e,l))){if(se(a.overlayElement,i)||se(a.overlayElement,s))break;this._ngZone?this._ngZone.run(()=>l.next(e)):l.next(e)}}};static \u0275fac=(()=>{let e;return function(s){return(e||(e=et(n)))(s||n)}})();static \u0275prov=b({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function se(n,t){let e=typeof ShadowRoot<"u"&&ShadowRoot,i=t;for(;i;){if(i===n)return!0;i=e&&i instanceof ShadowRoot?i.host:i.parentNode}return!1}var me=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275cmp=M({type:n,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(i,s){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cdk-overlay-container {
  position: fixed;
}
@layer cdk-overlay {
  .cdk-overlay-container {
    z-index: 1000;
  }
}
.cdk-overlay-container:empty {
  display: none;
}

.cdk-global-overlay-wrapper {
  display: flex;
  position: absolute;
}
@layer cdk-overlay {
  .cdk-global-overlay-wrapper {
    z-index: 1000;
  }
}

.cdk-overlay-pane {
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
@layer cdk-overlay {
  .cdk-overlay-pane {
    z-index: 1000;
  }
}

.cdk-overlay-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  touch-action: manipulation;
}
@layer cdk-overlay {
  .cdk-overlay-backdrop {
    z-index: 1000;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (prefers-reduced-motion) {
  .cdk-overlay-backdrop {
    transition-duration: 1ms;
  }
}

.cdk-overlay-backdrop-showing {
  opacity: 1;
}
@media (forced-colors: active) {
  .cdk-overlay-backdrop-showing {
    opacity: 0.6;
  }
}

@layer cdk-overlay {
  .cdk-overlay-dark-backdrop {
    background: rgba(0, 0, 0, 0.32);
  }
}

.cdk-overlay-transparent-backdrop {
  transition: visibility 1ms linear, opacity 1ms linear;
  visibility: hidden;
  opacity: 1;
}
.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {
  opacity: 0;
  visibility: visible;
}

.cdk-overlay-backdrop-noop-animation {
  transition: none;
}

.cdk-overlay-connected-position-bounding-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 1px;
  min-height: 1px;
}
@layer cdk-overlay {
  .cdk-overlay-connected-position-bounding-box {
    z-index: 1000;
  }
}

.cdk-global-scrollblock {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.cdk-overlay-popover {
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  overflow: visible;
  position: fixed;
  pointer-events: none;
  white-space: normal;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  inset: auto;
  top: 0;
  left: 0;
}
.cdk-overlay-popover::backdrop {
  display: none;
}
.cdk-overlay-popover .cdk-overlay-backdrop {
  position: fixed;
  z-index: auto;
}
`],encapsulation:2,changeDetection:0})}return n})(),ge=(()=>{class n{_platform=h(x);_containerElement;_document=h(w);_styleLoader=h(ht);constructor(){}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||pt()){let s=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let o=0;o<s.length;o++)s[o].remove()}let i=this._document.createElement("div");i.classList.add(e),pt()?i.setAttribute("platform","test"):this._platform.isBrowser||i.setAttribute("platform","server"),this._document.body.appendChild(i),this._containerElement=i}_loadStyles(){this._styleLoader.load(me)}static \u0275fac=function(i){return new(i||n)};static \u0275prov=b({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),bt=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(t,e,i,s){this._renderer=e,this._ngZone=i,this.element=t.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=e.listen(this.element,"click",s)}detach(){this._ngZone.runOutsideAngular(()=>{let t=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(t,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),t.style.pointerEvents="none",t.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function kt(n){return n&&n.nodeType===1}var $=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new u;_attachments=new u;_detachments=new u;_positionStrategy;_scrollStrategy;_locationChanges=tt.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new u;_outsidePointerEvents=new u;_afterNextRenderRef;constructor(t,e,i,s,o,r,a,l,d,c=!1,p,_){this._portalOutlet=t,this._host=e,this._pane=i,this._config=s,this._ngZone=o,this._keyboardDispatcher=r,this._document=a,this._location=l,this._outsideClickDispatcher=d,this._animationsDisabled=c,this._injector=p,this._renderer=_,s.scrollStrategy&&(this._scrollStrategy=s.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=s.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(t){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(t);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=O(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let t=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),t}dispose(){if(this._disposed)return;let t=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,t&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(t){t!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=t,this.hasAttached()&&(t.attach(this),this.updatePosition()))}updateSize(t){this._config=y(y({},this._config),t),this._updateElementSize()}setDirection(t){this._config=xt(y({},this._config),{direction:t}),this._updateElementDirection()}addPanelClass(t){this._pane&&this._toggleClasses(this._pane,t,!0)}removePanelClass(t){this._pane&&this._toggleClasses(this._pane,t,!1)}getDirection(){let t=this._config.direction;return t?typeof t=="string"?t:t.value:"ltr"}updateScrollStrategy(t){t!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=t,this.hasAttached()&&(t.attach(this),t.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let t=this._pane.style;t.width=f(this._config.width),t.height=f(this._config.height),t.minWidth=f(this._config.minWidth),t.minHeight=f(this._config.minHeight),t.maxWidth=f(this._config.maxWidth),t.maxHeight=f(this._config.maxHeight)}_togglePointerEvents(t){this._pane.style.pointerEvents=t?"":"none"}_attachHost(){if(!this._host.parentElement){let t=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;kt(t)?t.after(this._host):t?.type==="parent"?t.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let t="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new bt(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(t))}):this._backdropRef.element.classList.add(t)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(t,e,i){let s=dt(e||[]).filter(o=>!!o);s.length&&(i?t.classList.add(...s):t.classList.remove(...s))}_detachContentWhenEmpty(){let t=!1;try{this._detachContentAfterRenderRef=O(()=>{t=!0,this._detachContent()},{injector:this._injector})}catch(e){if(t)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let t=this._scrollStrategy;t?.disable(),t?.detach?.()}},oe="cdk-overlay-connected-position-bounding-box",Oe=/([A-Za-z%]+)$/;function ve(n,t){return new q(t,n.get(I),n.get(w),n.get(x),n.get(ge))}var q=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new u;_resizeSubscription=tt.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(t,e,i,s,o){this._viewportRuler=e,this._document=i,this._platform=s,this._overlayContainer=o,this.setOrigin(t)}attach(t){this._overlayRef&&this._overlayRef,this._validatePositions(),t.hostElement.classList.add(oe),this._overlayRef=t,this._boundingBox=t.hostElement,this._pane=t.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let t=this._originRect,e=this._overlayRect,i=this._viewportRect,s=this._containerRect,o=[],r;for(let a of this._preferredPositions){let l=this._getOriginPoint(t,s,a),d=this._getOverlayPoint(l,e,a),c=this._getOverlayFit(d,e,i,a);if(c.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(a,l);return}if(this._canFitWithFlexibleDimensions(c,d,i)){o.push({position:a,origin:l,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(l,a)});continue}(!r||r.overlayFit.visibleArea<c.visibleArea)&&(r={overlayFit:c,overlayPoint:d,originPoint:l,position:a,overlayRect:e})}if(o.length){let a=null,l=-1;for(let d of o){let c=d.boundingBoxRect.width*d.boundingBoxRect.height*(d.position.weight||1);c>l&&(l=c,a=d)}this._isPushed=!1,this._applyPosition(a.position,a.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(r.position,r.originPoint);return}this._applyPosition(r.position,r.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&C(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(oe),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let t=this._lastPosition;t?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(t,this._getOriginPoint(this._originRect,this._containerRect,t))):this.apply()}withScrollableContainers(t){return this._scrollables=t,this}withPositions(t){return this._preferredPositions=t,t.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(t){return this._viewportMargin=t,this}withFlexibleDimensions(t=!0){return this._hasFlexibleDimensions=t,this}withGrowAfterOpen(t=!0){return this._growAfterOpen=t,this}withPush(t=!0){return this._canPush=t,this}withLockedPosition(t=!0){return this._positionLocked=t,this}setOrigin(t){return this._origin=t,this}withDefaultOffsetX(t){return this._offsetX=t,this}withDefaultOffsetY(t){return this._offsetY=t,this}withTransformOriginOn(t){return this._transformOriginSelector=t,this}withPopoverLocation(t){return this._popoverLocation=t,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof D?this._origin.nativeElement:kt(this._origin)?this._origin:null}_getOriginPoint(t,e,i){let s;if(i.originX=="center")s=t.left+t.width/2;else{let r=this._isRtl()?t.right:t.left,a=this._isRtl()?t.left:t.right;s=i.originX=="start"?r:a}e.left<0&&(s-=e.left);let o;return i.originY=="center"?o=t.top+t.height/2:o=i.originY=="top"?t.top:t.bottom,e.top<0&&(o-=e.top),{x:s,y:o}}_getOverlayPoint(t,e,i){let s;i.overlayX=="center"?s=-e.width/2:i.overlayX==="start"?s=this._isRtl()?-e.width:0:s=this._isRtl()?0:-e.width;let o;return i.overlayY=="center"?o=-e.height/2:o=i.overlayY=="top"?0:-e.height,{x:t.x+s,y:t.y+o}}_getOverlayFit(t,e,i,s){let o=ae(e),{x:r,y:a}=t,l=this._getOffset(s,"x"),d=this._getOffset(s,"y");l&&(r+=l),d&&(a+=d);let c=0-r,p=r+o.width-i.width,_=0-a,g=a+o.height-i.height,m=this._subtractOverflows(o.width,c,p),v=this._subtractOverflows(o.height,_,g),Ot=m*v;return{visibleArea:Ot,isCompletelyWithinViewport:o.width*o.height===Ot,fitsInViewportVertically:v===o.height,fitsInViewportHorizontally:m==o.width}}_canFitWithFlexibleDimensions(t,e,i){if(this._hasFlexibleDimensions){let s=i.bottom-e.y,o=i.right-e.x,r=re(this._overlayRef.getConfig().minHeight),a=re(this._overlayRef.getConfig().minWidth),l=t.fitsInViewportVertically||r!=null&&r<=s,d=t.fitsInViewportHorizontally||a!=null&&a<=o;return l&&d}return!1}_pushOverlayOnScreen(t,e,i){if(this._previousPushAmount&&this._positionLocked)return{x:t.x+this._previousPushAmount.x,y:t.y+this._previousPushAmount.y};let s=ae(e),o=this._viewportRect,r=Math.max(t.x+s.width-o.width,0),a=Math.max(t.y+s.height-o.height,0),l=Math.max(o.top-i.top-t.y,0),d=Math.max(o.left-i.left-t.x,0),c=0,p=0;return s.width<=o.width?c=d||-r:c=t.x<this._getViewportMarginStart()?o.left-i.left-t.x:0,s.height<=o.height?p=l||-a:p=t.y<this._getViewportMarginTop()?o.top-i.top-t.y:0,this._previousPushAmount={x:c,y:p},{x:t.x+c,y:t.y+p}}_applyPosition(t,e){if(this._setTransformOrigin(t),this._setOverlayElementStyles(e,t),this._setBoundingBoxStyles(e,t),t.panelClass&&this._addPanelClasses(t.panelClass),this._positionChanges.observers.length){let i=this._getScrollVisibility();if(t!==this._lastPosition||!this._lastScrollVisibility||!xe(this._lastScrollVisibility,i)){let s=new K(t,i);this._positionChanges.next(s)}this._lastScrollVisibility=i}this._lastPosition=t,this._isInitialRender=!1}_setTransformOrigin(t){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),i,s=t.overlayY;t.overlayX==="center"?i="center":this._isRtl()?i=t.overlayX==="start"?"right":"left":i=t.overlayX==="start"?"left":"right";for(let o=0;o<e.length;o++)e[o].style.transformOrigin=`${i} ${s}`}_calculateBoundingBoxRect(t,e){let i=this._viewportRect,s=this._isRtl(),o,r,a;if(e.overlayY==="top")r=t.y,o=i.height-r+this._getViewportMarginBottom();else if(e.overlayY==="bottom")a=i.height-t.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),o=i.height-a+this._getViewportMarginTop();else{let g=Math.min(i.bottom-t.y+i.top,t.y),m=this._lastBoundingBoxSize.height;o=g*2,r=t.y-g,o>m&&!this._isInitialRender&&!this._growAfterOpen&&(r=t.y-m/2)}let l=e.overlayX==="start"&&!s||e.overlayX==="end"&&s,d=e.overlayX==="end"&&!s||e.overlayX==="start"&&s,c,p,_;if(d)_=i.width-t.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),c=t.x-this._getViewportMarginStart();else if(l)p=t.x,c=i.right-t.x-this._getViewportMarginEnd();else{let g=Math.min(i.right-t.x+i.left,t.x),m=this._lastBoundingBoxSize.width;c=g*2,p=t.x-g,c>m&&!this._isInitialRender&&!this._growAfterOpen&&(p=t.x-m/2)}return{top:r,left:p,bottom:a,right:_,width:c,height:o}}_setBoundingBoxStyles(t,e){let i=this._calculateBoundingBoxRect(t,e);!this._isInitialRender&&!this._growAfterOpen&&(i.height=Math.min(i.height,this._lastBoundingBoxSize.height),i.width=Math.min(i.width,this._lastBoundingBoxSize.width));let s={};if(this._hasExactPosition())s.top=s.left="0",s.bottom=s.right="auto",s.maxHeight=s.maxWidth="",s.width=s.height="100%";else{let o=this._overlayRef.getConfig().maxHeight,r=this._overlayRef.getConfig().maxWidth;s.width=f(i.width),s.height=f(i.height),s.top=f(i.top)||"auto",s.bottom=f(i.bottom)||"auto",s.left=f(i.left)||"auto",s.right=f(i.right)||"auto",e.overlayX==="center"?s.alignItems="center":s.alignItems=e.overlayX==="end"?"flex-end":"flex-start",e.overlayY==="center"?s.justifyContent="center":s.justifyContent=e.overlayY==="bottom"?"flex-end":"flex-start",o&&(s.maxHeight=f(o)),r&&(s.maxWidth=f(r))}this._lastBoundingBoxSize=i,C(this._boundingBox.style,s)}_resetBoundingBoxStyles(){C(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){C(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(t,e){let i={},s=this._hasExactPosition(),o=this._hasFlexibleDimensions,r=this._overlayRef.getConfig();if(s){let c=this._viewportRuler.getViewportScrollPosition();C(i,this._getExactOverlayY(e,t,c)),C(i,this._getExactOverlayX(e,t,c))}else i.position="static";let a="",l=this._getOffset(e,"x"),d=this._getOffset(e,"y");l&&(a+=`translateX(${l}px) `),d&&(a+=`translateY(${d}px)`),i.transform=a.trim(),r.maxHeight&&(s?i.maxHeight=f(r.maxHeight):o&&(i.maxHeight="")),r.maxWidth&&(s?i.maxWidth=f(r.maxWidth):o&&(i.maxWidth="")),C(this._pane.style,i)}_getExactOverlayY(t,e,i){let s={top:"",bottom:""},o=this._getOverlayPoint(e,this._overlayRect,t);if(this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,i)),t.overlayY==="bottom"){let r=this._document.documentElement.clientHeight;s.bottom=`${r-(o.y+this._overlayRect.height)}px`}else s.top=f(o.y);return s}_getExactOverlayX(t,e,i){let s={left:"",right:""},o=this._getOverlayPoint(e,this._overlayRect,t);this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,i));let r;if(this._isRtl()?r=t.overlayX==="end"?"left":"right":r=t.overlayX==="end"?"right":"left",r==="right"){let a=this._document.documentElement.clientWidth;s.right=`${a-(o.x+this._overlayRect.width)}px`}else s.left=f(o.x);return s}_getScrollVisibility(){let t=this._getOriginRect(),e=this._pane.getBoundingClientRect(),i=this._scrollables.map(s=>s.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:ne(t,i),isOriginOutsideView:yt(t,i),isOverlayClipped:ne(e,i),isOverlayOutsideView:yt(e,i)}}_subtractOverflows(t,...e){return e.reduce((i,s)=>i-Math.max(s,0),t)}_getNarrowedViewportRect(){let t=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,i=this._viewportRuler.getViewportScrollPosition();return{top:i.top+this._getViewportMarginTop(),left:i.left+this._getViewportMarginStart(),right:i.left+t-this._getViewportMarginEnd(),bottom:i.top+e-this._getViewportMarginBottom(),width:t-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(t,e){return e==="x"?t.offsetX==null?this._offsetX:t.offsetX:t.offsetY==null?this._offsetY:t.offsetY}_validatePositions(){}_addPanelClasses(t){this._pane&&dt(t).forEach(e=>{e!==""&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(t=>{this._pane.classList.remove(t)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let t=this._origin;if(t instanceof D)return t.nativeElement.getBoundingClientRect();if(t instanceof Element)return t.getBoundingClientRect();let e=t.width||0,i=t.height||0;return{top:t.y,bottom:t.y+i,left:t.x,right:t.x+e,height:i,width:e}}_getContainerRect(){let t=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",e=this._overlayContainer.getContainerElement();t&&(e.style.display="block");let i=e.getBoundingClientRect();return t&&(e.style.display=""),i}};function C(n,t){for(let e in t)t.hasOwnProperty(e)&&(n[e]=t[e]);return n}function re(n){if(typeof n!="number"&&n!=null){let[t,e]=n.split(Oe);return!e||e==="px"?parseFloat(t):null}return n||null}function ae(n){return{top:Math.floor(n.top),right:Math.floor(n.right),bottom:Math.floor(n.bottom),left:Math.floor(n.left),width:Math.floor(n.width),height:Math.floor(n.height)}}function xe(n,t){return n===t?!0:n.isOriginClipped===t.isOriginClipped&&n.isOriginOutsideView===t.isOriginOutsideView&&n.isOverlayClipped===t.isOverlayClipped&&n.isOverlayOutsideView===t.isOverlayOutsideView}var le="cdk-global-overlay-wrapper";function Q(n){return new U}var U=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(t){let e=t.getConfig();this._overlayRef=t,this._width&&!e.width&&t.updateSize({width:this._width}),this._height&&!e.height&&t.updateSize({height:this._height}),t.hostElement.classList.add(le),this._isDisposed=!1}top(t=""){return this._bottomOffset="",this._topOffset=t,this._alignItems="flex-start",this}left(t=""){return this._xOffset=t,this._xPosition="left",this}bottom(t=""){return this._topOffset="",this._bottomOffset=t,this._alignItems="flex-end",this}right(t=""){return this._xOffset=t,this._xPosition="right",this}start(t=""){return this._xOffset=t,this._xPosition="start",this}end(t=""){return this._xOffset=t,this._xPosition="end",this}width(t=""){return this._overlayRef?this._overlayRef.updateSize({width:t}):this._width=t,this}height(t=""){return this._overlayRef?this._overlayRef.updateSize({height:t}):this._height=t,this}centerHorizontally(t=""){return this.left(t),this._xPosition="center",this}centerVertically(t=""){return this.top(t),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let t=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,i=this._overlayRef.getConfig(),{width:s,height:o,maxWidth:r,maxHeight:a}=i,l=(s==="100%"||s==="100vw")&&(!r||r==="100%"||r==="100vw"),d=(o==="100%"||o==="100vh")&&(!a||a==="100%"||a==="100vh"),c=this._xPosition,p=this._xOffset,_=this._overlayRef.getConfig().direction==="rtl",g="",m="",v="";l?v="flex-start":c==="center"?(v="center",_?m=p:g=p):_?c==="left"||c==="end"?(v="flex-end",g=p):(c==="right"||c==="start")&&(v="flex-start",m=p):c==="left"||c==="start"?(v="flex-start",g=p):(c==="right"||c==="end")&&(v="flex-end",m=p),t.position=this._cssPosition,t.marginLeft=l?"0":g,t.marginTop=d?"0":this._topOffset,t.marginBottom=this._bottomOffset,t.marginRight=l?"0":m,e.justifyContent=v,e.alignItems=d?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let t=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,i=e.style;e.classList.remove(le),i.justifyContent=i.alignItems=t.marginTop=t.marginBottom=t.marginLeft=t.marginRight=t.position="",this._overlayRef=null,this._isDisposed=!0}},ye=(()=>{class n{_injector=h(k);constructor(){}global(){return Q()}flexibleConnectedTo(e){return ve(this._injector,e)}static \u0275fac=function(i){return new(i||n)};static \u0275prov=b({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),be=new R("OVERLAY_DEFAULT_CONFIG");function J(n,t){n.get(ht).load(me);let e=n.get(ge),i=n.get(w),s=n.get(W),o=n.get(Ft),r=n.get($t),a=n.get(Tt,null,{optional:!0})||n.get(Y).createRenderer(null,null),l=new P(t),d=n.get(be,null,{optional:!0})?.usePopover??!0;l.direction=l.direction||r.value,"showPopover"in i.body?l.usePopover=t?.usePopover??d:l.usePopover=!1;let c=i.createElement("div"),p=i.createElement("div");c.id=s.getId("cdk-overlay-"),c.classList.add("cdk-overlay-pane"),p.appendChild(c),l.usePopover&&(p.setAttribute("popover","manual"),p.classList.add("cdk-overlay-popover"));let _=l.usePopover?l.positionStrategy?.getPopoverInsertionPoint?.():null;return kt(_)?_.after(p):_?.type==="parent"?_.element.appendChild(p):e.getContainerElement().appendChild(p),new $(new ee(c,o,n),p,c,l,n.get(S),n.get(_e),i,n.get(Zt),n.get(ue),t?.disableAnimations??n.get(Bt,null,{optional:!0})==="NoopAnimations",n.get(Dt),a)}var ke=(()=>{class n{scrollStrategies=h(pe);_positionBuilder=h(ye);_injector=h(k);constructor(){}create(e){return J(this._injector,e)}position(){return this._positionBuilder}static \u0275fac=function(i){return new(i||n)};static \u0275prov=b({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var wt=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=X({type:n});static \u0275inj=L({providers:[ke],imports:[H,z,_t,_t]})}return n})();function Pe(n,t){if(n&1){let e=Wt();N(0,"div",1)(1,"button",2),nt("click",function(){At(e);let s=st();return Mt(s.action())}),at(2),T()()}if(n&2){let e=st();A(2),lt(" ",e.data.action," ")}}var Ee=["label"];function Re(n,t){}var De=Math.pow(2,31)-1,F=class{_overlayRef;instance;containerInstance;_afterDismissed=new u;_afterOpened=new u;_onAction=new u;_durationTimeoutId;_dismissedByAction=!1;constructor(t,e){this._overlayRef=e,this.containerInstance=t,t._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(t){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(t,De))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}},we=new R("MatSnackBarData"),E=class{politeness="polite";announcementMessage="";viewContainerRef;duration=0;panelClass;direction;data=null;horizontalPosition="center";verticalPosition="bottom"},Ae=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275dir=B({type:n,selectors:[["","matSnackBarLabel",""]],hostAttrs:[1,"mat-mdc-snack-bar-label","mdc-snackbar__label"]})}return n})(),Me=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275dir=B({type:n,selectors:[["","matSnackBarActions",""]],hostAttrs:[1,"mat-mdc-snack-bar-actions","mdc-snackbar__actions"]})}return n})(),Be=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275dir=B({type:n,selectors:[["","matSnackBarAction",""]],hostAttrs:[1,"mat-mdc-snack-bar-action","mdc-snackbar__action"]})}return n})(),Se=(()=>{class n{snackBarRef=h(F);data=h(we);constructor(){}action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=M({type:n,selectors:[["simple-snack-bar"]],hostAttrs:[1,"mat-mdc-simple-snack-bar"],exportAs:["matSnackBar"],decls:3,vars:2,consts:[["matSnackBarLabel",""],["matSnackBarActions",""],["matButton","","matSnackBarAction","",3,"click"]],template:function(i,s){i&1&&(N(0,"div",0),at(1),T(),Yt(2,Pe,3,1,"div",1)),i&2&&(A(),lt(" ",s.data.message,`
`),A(),Xt(s.hasAction?2:-1))},dependencies:[Qt,Ae,Me,Be],styles:[`.mat-mdc-simple-snack-bar {
  display: flex;
}
.mat-mdc-simple-snack-bar .mat-mdc-snack-bar-label {
  max-height: 50vh;
  overflow: auto;
}
`],encapsulation:2,changeDetection:0})}return n})(),St="_mat-snack-bar-enter",Ct="_mat-snack-bar-exit",Te=(()=>{class n extends te{_ngZone=h(S);_elementRef=h(D);_changeDetectorRef=h(jt);_platform=h(x);_animationsDisabled=ut();snackBarConfig=h(E);_document=h(w);_trackedModals=new Set;_enterFallback;_exitFallback;_injector=h(k);_announceDelay=150;_announceTimeoutId;_destroyed=!1;_portalOutlet;_onAnnounce=new u;_onExit=new u;_onEnter=new u;_animationState="void";_live;_label;_role;_liveElementId=h(W).getId("mat-snack-bar-container-live-");constructor(){super();let e=this.snackBarConfig;e.politeness==="assertive"&&!e.announcementMessage?this._live="assertive":e.politeness==="off"?this._live="off":this._live="polite",this._platform.FIREFOX&&(this._live==="polite"&&(this._role="status"),this._live==="assertive"&&(this._role="alert"))}attachComponentPortal(e){this._assertNotAttached();let i=this._portalOutlet.attachComponentPortal(e);return this._afterPortalAttached(),i}attachTemplatePortal(e){this._assertNotAttached();let i=this._portalOutlet.attachTemplatePortal(e);return this._afterPortalAttached(),i}attachDomPortal=e=>{this._assertNotAttached();let i=this._portalOutlet.attachDomPortal(e);return this._afterPortalAttached(),i};onAnimationEnd(e){e===Ct?this._completeExit():e===St&&(clearTimeout(this._enterFallback),this._ngZone.run(()=>{this._onEnter.next(),this._onEnter.complete()}))}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce(),this._animationsDisabled?O(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(St)))},{injector:this._injector}):(clearTimeout(this._enterFallback),this._enterFallback=setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-snack-bar-fallback-visible"),this.onAnimationEnd(St)},200)))}exit(){return this._destroyed?Pt(void 0):(this._ngZone.run(()=>{this._animationState="hidden",this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute("mat-exit",""),clearTimeout(this._announceTimeoutId),this._animationsDisabled?O(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(Ct)))},{injector:this._injector}):(clearTimeout(this._exitFallback),this._exitFallback=setTimeout(()=>this.onAnimationEnd(Ct),200))}),this._onExit)}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){clearTimeout(this._exitFallback),queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let e=this._elementRef.nativeElement,i=this.snackBarConfig.panelClass;i&&(Array.isArray(i)?i.forEach(r=>e.classList.add(r)):e.classList.add(i)),this._exposeToModals();let s=this._label.nativeElement,o="mdc-snackbar__label";s.classList.toggle(o,!s.querySelector(`.${o}`))}_exposeToModals(){let e=this._liveElementId,i=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let s=0;s<i.length;s++){let o=i[s],r=o.getAttribute("aria-owns");this._trackedModals.add(o),r?r.indexOf(e)===-1&&o.setAttribute("aria-owns",r+" "+e):o.setAttribute("aria-owns",e)}}_clearFromModals(){this._trackedModals.forEach(e=>{let i=e.getAttribute("aria-owns");if(i){let s=i.replace(this._liveElementId,"").trim();s.length>0?e.setAttribute("aria-owns",s):e.removeAttribute("aria-owns")}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{if(this._destroyed)return;let e=this._elementRef.nativeElement,i=e.querySelector("[aria-hidden]"),s=e.querySelector("[aria-live]");if(i&&s){let o=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&i.contains(document.activeElement)&&(o=document.activeElement),i.removeAttribute("aria-hidden"),s.appendChild(i),o?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=M({type:n,selectors:[["mat-snack-bar-container"]],viewQuery:function(i,s){if(i&1&&Ht(vt,7)(Ee,7),i&2){let o;ot(o=rt())&&(s._portalOutlet=o.first),ot(o=rt())&&(s._label=o.first)}},hostAttrs:[1,"mdc-snackbar","mat-mdc-snack-bar-container"],hostVars:6,hostBindings:function(i,s){i&1&&nt("animationend",function(r){return s.onAnimationEnd(r.animationName)})("animationcancel",function(r){return s.onAnimationEnd(r.animationName)}),i&2&&zt("mat-snack-bar-container-enter",s._animationState==="visible")("mat-snack-bar-container-exit",s._animationState==="hidden")("mat-snack-bar-container-animations-enabled",!s._animationsDisabled)},features:[It],decls:6,vars:3,consts:[["label",""],[1,"mdc-snackbar__surface","mat-mdc-snackbar-surface"],[1,"mat-mdc-snack-bar-label"],["aria-hidden","true"],["cdkPortalOutlet",""]],template:function(i,s){i&1&&(N(0,"div",1)(1,"div",2,0)(3,"div",3),Vt(4,Re,0,0,"ng-template",4),T(),Nt(5,"div"),T()()),i&2&&(A(5),Lt("aria-live",s._live)("role",s._role)("id",s._liveElementId))},dependencies:[vt],styles:[`@keyframes _mat-snack-bar-enter {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes _mat-snack-bar-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-snack-bar-container {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  margin: 8px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snack-bar-container {
  width: 100vw;
}

.mat-snack-bar-container-animations-enabled {
  opacity: 0;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-fallback-visible {
  opacity: 1;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-enter {
  animation: _mat-snack-bar-enter 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-exit {
  animation: _mat-snack-bar-exit 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}

.mat-mdc-snackbar-surface {
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  padding-left: 0;
  padding-right: 8px;
}
[dir=rtl] .mat-mdc-snackbar-surface {
  padding-right: 0;
  padding-left: 8px;
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  min-width: 344px;
  max-width: 672px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snackbar-surface {
  width: 100%;
  min-width: 0;
}
@media (forced-colors: active) {
  .mat-mdc-snackbar-surface {
    outline: solid 1px;
  }
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  color: var(--mat-snack-bar-supporting-text-color, var(--mat-sys-inverse-on-surface));
  border-radius: var(--mat-snack-bar-container-shape, var(--mat-sys-corner-extra-small));
  background-color: var(--mat-snack-bar-container-color, var(--mat-sys-inverse-surface));
}

.mdc-snackbar__label {
  width: 100%;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  padding: 14px 8px 14px 16px;
}
[dir=rtl] .mdc-snackbar__label {
  padding-left: 8px;
  padding-right: 16px;
}
.mat-mdc-snack-bar-container .mdc-snackbar__label {
  font-family: var(--mat-snack-bar-supporting-text-font, var(--mat-sys-body-medium-font));
  font-size: var(--mat-snack-bar-supporting-text-size, var(--mat-sys-body-medium-size));
  font-weight: var(--mat-snack-bar-supporting-text-weight, var(--mat-sys-body-medium-weight));
  line-height: var(--mat-snack-bar-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
}

.mat-mdc-snack-bar-actions {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  box-sizing: border-box;
}

.mat-mdc-snack-bar-handset,
.mat-mdc-snack-bar-container,
.mat-mdc-snack-bar-label {
  flex: 1 1 auto;
}

.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled).mat-unthemed {
  color: var(--mat-snack-bar-button-color, var(--mat-sys-inverse-primary));
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) {
  --mat-button-text-state-layer-color: currentColor;
  --mat-button-text-ripple-color: currentColor;
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element {
  opacity: 0.1;
}
`],encapsulation:2})}return n})(),Ie=new R("mat-snack-bar-default-options",{providedIn:"root",factory:()=>new E}),Ve=(()=>{class n{_live=h(Kt);_injector=h(k);_breakpointObserver=h(Gt);_parentSnackBar=h(n,{optional:!0,skipSelf:!0});_defaultConfig=h(Ie);_animationsDisabled=ut();_snackBarRefAtThisLevel=null;simpleSnackBarComponent=Se;snackBarContainerComponent=Te;handsetCssClass="mat-mdc-snack-bar-handset";get _openedSnackBarRef(){let e=this._parentSnackBar;return e?e._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(e){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=e:this._snackBarRefAtThisLevel=e}constructor(){}openFromComponent(e,i){return this._attach(e,i)}openFromTemplate(e,i){return this._attach(e,i)}open(e,i="",s){let o=y(y({},this._defaultConfig),s);return o.data={message:e,action:i},o.announcementMessage===e&&(o.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,o)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(e,i){let s=i&&i.viewContainerRef&&i.viewContainerRef.injector,o=k.create({parent:s||this._injector,providers:[{provide:E,useValue:i}]}),r=new mt(this.snackBarContainerComponent,i.viewContainerRef,o),a=e.attach(r);return a.instance.snackBarConfig=i,a.instance}_attach(e,i){let s=y(y(y({},new E),this._defaultConfig),i),o=this._createOverlay(s),r=this._attachSnackBarContainer(o,s),a=new F(r,o);if(e instanceof it){let l=new gt(e,null,{$implicit:s.data,snackBarRef:a});a.instance=r.attachTemplatePortal(l)}else{let l=this._createInjector(s,a),d=new mt(e,void 0,l),c=r.attachComponentPortal(d);a.instance=c.instance}return this._breakpointObserver.observe(Ut.HandsetPortrait).pipe(Rt(o.detachments())).subscribe(l=>{o.overlayElement.classList.toggle(this.handsetCssClass,l.matches)}),s.announcementMessage&&r._onAnnounce.subscribe(()=>{this._live.announce(s.announcementMessage,s.politeness)}),this._animateSnackBar(a,s),this._openedSnackBarRef=a,this._openedSnackBarRef}_animateSnackBar(e,i){e.afterDismissed().subscribe(()=>{this._openedSnackBarRef==e&&(this._openedSnackBarRef=null),i.announcementMessage&&this._live.clear()}),i.duration&&i.duration>0&&e.afterOpened().subscribe(()=>e._dismissAfter(i.duration)),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{e.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):e.containerInstance.enter()}_createOverlay(e){let i=new P;i.direction=e.direction;let s=Q(this._injector),o=e.direction==="rtl",r=e.horizontalPosition==="left"||e.horizontalPosition==="start"&&!o||e.horizontalPosition==="end"&&o,a=!r&&e.horizontalPosition!=="center";return r?s.left("0"):a?s.right("0"):s.centerHorizontally(),e.verticalPosition==="top"?s.top("0"):s.bottom("0"),i.positionStrategy=s,i.disableAnimations=this._animationsDisabled,J(this._injector,i)}_createInjector(e,i){let s=e&&e.viewContainerRef&&e.viewContainerRef.injector;return k.create({parent:s||this._injector,providers:[{provide:F,useValue:i},{provide:we,useValue:e.data}]})}static \u0275fac=function(i){return new(i||n)};static \u0275prov=b({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var zi=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=X({type:n});static \u0275inj=L({providers:[Ve],imports:[wt,z,Jt,Se,H]})}return n})();export{ce as a,P as b,ge as c,$ as d,Q as e,J as f,wt as g,we as h,Ve as i,zi as j};
