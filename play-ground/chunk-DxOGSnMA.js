import {m as m$1}from'./chunk-C7WQ6hV1.js';import {N as N$1}from'./chunk-BgqfbpE3.js';import {P}from'./chunk-BGLIRIT3.js';import {h}from'./chunk-B-KMdjOY.js';import {r as rn}from'./chunk-CCYOOI3R.js';import {C,al as Wu,am as it,H as He,a8 as _y,G as GE,a9 as Bp,g as on,N as Ni,m as mT,X as Xc,n as nh,U as Up,b as zT,Y as Yp,Z as Zp,ad as kT,h as hI,an as sh,ao as $D,ap as UD,$ as SD,a0 as $u,a1 as FD,a2 as Uu}from'./main-ZIE2MMIM.js';var I={basic:`import { Component, inject, TemplateRef, ViewChild } from '@angular/core';
import { SlidePanelService } from '@arun-bharath-ui/cmp-ui';

@Component({
  selector: 'app-demo',
  template: \`
    <button (click)="openPanel()">Open Slide Panel</button>

    <ng-template #panelTemplate>
      <div class="panel-content">
        <h3>Standard Slide Panel</h3>
        <p>This panel slides in from the bottom with a default backdrop.</p>
        <button (click)="close()">Close Panel</button>
      </div>
    </ng-template>
  \`
})
export class DemoComponent {
  private slidePanel = inject(SlidePanelService);
  @ViewChild('panelTemplate') template!: TemplateRef<any>;

  openPanel() {
    this.slidePanel.open({
      title: 'Quick Settings',
      template: this.template,
      position: 'bottom', // 'top' | 'bottom' | 'left' | 'right'
      size: '300px'
    });
  }

  close() {
    this.slidePanel.close();
  }
}`,advanced:`import { Component, inject, TemplateRef, ViewChild } from '@angular/core';
import { SlidePanelService, SlidePanelPositionEnum } from '@arun-bharath-ui/cmp-ui';

@Component({
  selector: 'app-demo-advanced',
  template: \`
    <button (click)="openCart()">View Shopping Cart</button>

    <ng-template #cartTemplate>
      <div class="cart-panel">
        <div class="cart-header">
          <h4>Your Cart (3 items)</h4>
        </div>
        <div class="cart-items">
          <div class="item">
            <span>Quantum Framework License</span>
            <strong>$199.00</strong>
          </div>
        </div>
        <div class="cart-footer">
          <button class="btn btn-primary" (click)="checkout()">Checkout</button>
        </div>
      </div>
    </ng-template>
  \`
})
export class AdvancedDemoComponent {
  private slidePanel = inject(SlidePanelService);
  @ViewChild('cartTemplate') template!: TemplateRef<any>;

  openCart() {
    this.slidePanel.open({
      title: 'Shopping Cart',
      template: this.template,
      position: 'right', // Slide in from the right edge
      size: '400px',
      showBackdrop: true,
      closeOnBackdrop: true
    });
  }

  checkout() {
    this.slidePanel.close();
    // Proceed to checkout logic
  }
}`};var z=["settingsTemplate"],N=["cartTemplate"],j=["notificationsTemplate"],Q=()=>["Overlay","Gestures","Slide-Drawer","Dynamic Dynamic"];function F(p,P){if(p&1){let m=SD();Ni(0,"div",35)(1,"p",21),mT(2,"Customize workspace details and network environment options below."),Xc(),Ni(3,"div",36)(4,"label",12),mT(5,"PROJECT NAMESPACE"),Xc(),Yp(6,"input",37),Xc(),Ni(7,"div",36)(8,"label",12),mT(9,"DEPLOYMENT STRATEGY"),Xc(),Ni(10,"select",38)(11,"option"),mT(12,"Edge Node (Fastest latency)"),Xc(),Ni(13,"option"),mT(14,"Multi-Region Coverage"),Xc(),Ni(15,"option"),mT(16,"Local Developer Hub"),Xc()()(),Ni(17,"div",39)(18,"button",40),nh("click",function(){$u(m);let n=FD();return Uu(n.closePanel())}),mT(19,"Save Preferences"),Xc(),Ni(20,"button",41),nh("click",function(){$u(m);let n=FD();return Uu(n.closePanel())}),mT(21,"Cancel"),Xc()()();}}function G(p,P){if(p&1){let m=SD();Ni(0,"div",35)(1,"div",42)(2,"div",43)(3,"div")(4,"h5",44),mT(5,"Angular Enterprise Framework"),Xc(),Ni(6,"span",45),mT(7,"Quantity: 1"),Xc()(),Ni(8,"strong",46),mT(9,"$299.00"),Xc()(),Ni(10,"div",43)(11,"div")(12,"h5",44),mT(13,"Premium Theme Toolkit"),Xc(),Ni(14,"span",45),mT(15,"Quantity: 1"),Xc()(),Ni(16,"strong",46),mT(17,"$99.00"),Xc()()(),Ni(18,"div",47)(19,"div",48)(20,"span"),mT(21,"Subtotal"),Xc(),Ni(22,"strong"),mT(23,"$398.00"),Xc()(),Ni(24,"button",49),nh("click",function(){$u(m);let n=FD();return Uu(n.closePanel())}),mT(25,"Proceed to Checkout"),Xc()()();}}function W(p,P){if(p&1){let m=SD();Ni(0,"div",35)(1,"div",50)(2,"div",51),mT(3,"BUILD COMPLETED"),Xc(),Ni(4,"p",52),mT(5,"The project "),Ni(6,"strong"),mT(7,"play-ground"),Xc(),mT(8," finished compiling successfully in 16.3 seconds."),Xc()(),Ni(9,"div",50)(10,"div",53),mT(11,"BUDGET EXCEEDED"),Xc(),Ni(12,"p",52),mT(13,"`file-uploader-demo.component.scss` exceeded size budget limits."),Xc()(),Ni(14,"button",54),nh("click",function(){$u(m);let n=FD();return Uu(n.closePanel())}),mT(15,"Dismiss All"),Xc()();}}var ae=(()=>{class p extends m$1{constructor(){super(...arguments),this.slidePanel=C(Wu),this.snippets=I,this.PositionEnum=it,this.position=He(it.Bottom),this.size=He("400px"),this.showBackdrop=He(true),this.closeOnBackdrop=He(true),this.apiProps=[{name:"template",type:"TemplateRef<unknown>",description:"Custom angular template reference to project inside the slide panel body."},{name:"position",type:"'bottom' | 'top' | 'left' | 'right'",default:"'bottom'",description:"Screen edge the panel slides in from."},{name:"size",type:"string",default:"'50%'",description:"Width of horizontal panels (left/right) or height of vertical panels (top/bottom)."},{name:"showBackdrop",type:"boolean",default:"true",description:"Whether to show the overlay backdrop."},{name:"closeOnBackdrop",type:"boolean",default:"true",description:"If true, clicking the backdrop closes the panel."},{name:"title",type:"string",description:"Optional header title."},{name:"viewContainerRef",type:"ViewContainerRef",description:"Trap the panel within a specific container instead of the root body viewport."}],this.slidePanelTokens=[{localVar:"--ui-slide-panel-bg",mapsTo:"var(--cmp-white)",description:"Slide panel background color",type:"color"},{localVar:"--ui-slide-panel-shadow",mapsTo:"var(--cmp-shadow-xl)",description:"Slide panel box shadow",type:"value"},{localVar:"--ui-slide-panel-radius",mapsTo:"var(--cmp-radius-xl)",description:"Slide panel corner radius",type:"radius"},{localVar:"--ui-slide-panel-backdrop-bg",mapsTo:"var(--cmp-overlay-bg)",description:"Backdrop overlay background",type:"color"},{localVar:"--ui-slide-panel-title-color",mapsTo:"var(--cmp-black)",description:"Panel title text color",type:"color"},{localVar:"--ui-slide-panel-header-border",mapsTo:"1px solid var(--cmp-border-light)",description:"Bottom border of panel header",type:"value"},{localVar:"--ui-slide-panel-close-bg",mapsTo:"var(--cmp-gray-100)",description:"Close button background",type:"color"},{localVar:"--ui-slide-panel-close-hover-bg",mapsTo:"var(--cmp-gray-200)",description:"Close button background on hover",type:"color"}],this.slidePanelOverrideSnippet=`// Customize the Slide Panel
.ui-slide-panel {
  --ui-slide-panel-bg: var(--cmp-surface);
  --ui-slide-panel-radius: var(--cmp-radius-lg);
  --ui-slide-panel-backdrop-bg: rgba(0, 0, 0, 0.6);
}`;}getApiProperties(){return this.apiProps}openSettings(){this.slidePanel.open({title:"Global Settings Workspace",template:this.settingsTemplate,position:this.position(),size:this.size(),showBackdrop:this.showBackdrop(),closeOnBackdrop:this.closeOnBackdrop()});}openCart(){this.slidePanel.open({title:"Your Workspace Cart",template:this.cartTemplate,position:it.Right,size:"400px",showBackdrop:true,closeOnBackdrop:true});}openNotifications(){this.slidePanel.open({title:"Workspace Notifications",template:this.notificationsTemplate,position:it.Left,size:"320px",showBackdrop:true,closeOnBackdrop:true});}closePanel(){this.slidePanel.close();}static{this.\u0275fac=(()=>{let m;return function(n){return (m||(m=_y(p)))(n||p)}})();}static{this.\u0275cmp=GE({type:p,selectors:[["playground-slide-panel-demo"]],viewQuery:function(c,n){if(c&1&&sh(z,7)(N,7)(j,7),c&2){let a;$D(a=UD())&&(n.settingsTemplate=a.first),$D(a=UD())&&(n.cartTemplate=a.first),$D(a=UD())&&(n.notificationsTemplate=a.first);}},features:[Bp],decls:87,vars:18,consts:[["settingsTemplate",""],["cartTemplate",""],["notificationsTemplate",""],["title","Slide Panel","description","A dynamic, hardware-accelerated drawer system sliding from any screen edge, featuring built-in swipe gestures and viewport-trapping support.",3,"tags","apiReference","examples","theming"],["demo",""],[1,"cmp-card","glass-card","cmp-mb-5"],[1,"cmp-card-header","cmp-border-bottom","cmp-pb-3","cmp-mb-4"],[1,"cmp-card-title","cmp-m-0"],[1,"cmp-text-muted","cmp-m-0","small"],[1,"cmp-card-content","cmp-px-4","cmp-pb-4"],[1,"cmp-row","cmp-mb-4"],[1,"cmp-col-md-6","cmp-mb-3"],[1,"cmp-text-muted","cmp-mb-2","cmp-d-block","small","cmp-fw-bold"],[1,"cmp-form-control",3,"change","value"],[3,"value"],["type","text","placeholder","e.g., 400px, 50%, 100%",1,"cmp-form-control",3,"input","value"],[1,"cmp-form-check","cmp-mb-2"],["type","checkbox",1,"cmp-form-check-input",3,"change","checked"],[1,"cmp-form-check-label"],[1,"cmp-btn","cmp-btn-primary","cmp-px-5",3,"click"],[1,"cmp-mb-3"],[1,"cmp-text-muted","cmp-mb-4"],[1,"cmp-d-flex","cmp-gap-3","cmp-mb-5"],[1,"cmp-btn","cmp-btn-outline",3,"click"],[1,"material-icons","cmp-mr-1"],["api",""],["title","SlidePanelService Options",3,"properties"],[1,"api-section","cmp-mt-4"],[1,"api-title"],[1,"feature-list-simple"],["examples",""],["title","Basic Slide Panel Launch","description","Inject SlidePanelService and call open() passing a TemplateRef.",3,"code"],["title","Advanced Options Drawer","description","Configure edge directions, size specs, and disable backdrop closures.",3,"code"],["theming",""],["title","Slide Panel CSS Custom Properties",3,"tokens","overrideSnippet"],[1,"demo-panel-content"],[1,"cmp-mb-4"],["type","text","value","antigravity-core-beta",1,"cmp-form-control"],[1,"cmp-form-control"],[1,"cmp-mt-5","cmp-d-flex","cmp-gap-2"],[1,"cmp-btn","cmp-btn-primary",3,"click"],[1,"cmp-btn","cmp-btn-soft-secondary",3,"click"],[1,"cart-scroll-container"],[1,"cart-item-row","cmp-d-flex","cmp-align-items-center","cmp-justify-content-between","cmp-mb-3","cmp-pb-3","cmp-border-bottom"],[1,"cmp-m-0"],[1,"small","cmp-text-muted"],[1,"cmp-text-primary"],[1,"cart-totals","cmp-mt-5","cmp-pt-3","cmp-border-top"],[1,"cmp-d-flex","cmp-justify-content-between","cmp-mb-3"],[1,"cmp-btn","cmp-btn-primary","cmp-w-100",3,"click"],[1,"notification-item","cmp-p-3","cmp-mb-3","cmp-bg-light","cmp-rounded"],[1,"small","cmp-text-primary","cmp-fw-bold","cmp-mb-1"],[1,"cmp-m-0","small"],[1,"small","cmp-text-warning","cmp-fw-bold","cmp-mb-1"],[1,"cmp-btn","cmp-btn-outline","cmp-w-100","cmp-mt-4",3,"click"]],template:function(c,n){c&1&&(Ni(0,"playground-demo-page-template",3)(1,"div",4)(2,"div",5)(3,"div",6)(4,"h3",7),mT(5,"Interactive Configurator"),Xc(),Ni(6,"p",8),mT(7,"Adjust slide drawer parameters dynamically and launch the configuration panel."),Xc()(),Ni(8,"div",9)(9,"div",10)(10,"div",11)(11,"label",12),mT(12,"SLIDE POSITION"),Xc(),Ni(13,"select",13),nh("change",function(s){return n.position.set(s.target.value)}),Ni(14,"option",14),mT(15,"Bottom Edge (Standard)"),Xc(),Ni(16,"option",14),mT(17,"Top Edge"),Xc(),Ni(18,"option",14),mT(19,"Left Edge"),Xc(),Ni(20,"option",14),mT(21,"Right Edge"),Xc()()(),Ni(22,"div",11)(23,"label",12),mT(24,"PANEL SIZING (WIDTH/HEIGHT)"),Xc(),Ni(25,"input",15),nh("input",function(s){return n.size.set(s.target.value)}),Xc()()(),Ni(26,"div",10)(27,"div",11)(28,"label",12),mT(29,"BACKDROP OVERLAY"),Xc(),Ni(30,"label",16)(31,"input",17),nh("change",function(s){return n.showBackdrop.set(s.target.checked)}),Xc(),Ni(32,"span",18),mT(33,"Show Backdrop Blur Cover"),Xc()()(),Ni(34,"div",11)(35,"label",12),mT(36,"DISMISS BACKDROP CLICK"),Xc(),Ni(37,"label",16)(38,"input",17),nh("change",function(s){return n.closeOnBackdrop.set(s.target.checked)}),Xc(),Ni(39,"span",18),mT(40,"Close on Backdrop Overlay Click"),Xc()()()(),Ni(41,"button",19),nh("click",function(){return n.openSettings()}),mT(42," Launch Configured Panel "),Xc()()(),Ni(43,"h3",20),mT(44,"Common Preset Workspaces"),Xc(),Ni(45,"p",21),mT(46,"Trigger slide panels set up for common application patterns (e.g. right-side shopping cart, left-side notifications sidebar)."),Xc(),Ni(47,"div",22)(48,"button",23),nh("click",function(){return n.openCart()}),Ni(49,"span",24),mT(50,"shopping_cart"),Xc(),mT(51," Right-Side Cart Preset (400px) "),Xc(),Ni(52,"button",23),nh("click",function(){return n.openNotifications()}),Ni(53,"span",24),mT(54,"notifications"),Xc(),mT(55," Left-Side Notification Presets (320px) "),Xc()(),Up(56,F,22,0,"ng-template",null,0,zT)(58,G,26,0,"ng-template",null,1,zT)(60,W,16,0,"ng-template",null,2,zT),Xc(),Ni(62,"div",25),Yp(63,"playground-api-table",26),Ni(64,"div",27)(65,"h4",28),mT(66,"Gesture Support"),Xc(),Ni(67,"p"),mT(68,"The Slide Panel has native swipe gestures using the `uiSwipe` directive:"),Xc(),Ni(69,"ul",29)(70,"li")(71,"strong"),mT(72,"Swipe to Close"),Xc(),mT(73,": Swipe panels *toward* their home screen edge to close them (e.g. swipe down on a bottom drawer)."),Xc(),Ni(74,"li")(75,"strong"),mT(76,"Swipe to Expand"),Xc(),mT(77,": Swipe panels *away* from their home edge to expand them to full screen cover (`100%`)."),Xc(),Ni(78,"li")(79,"strong"),mT(80,"Backdrop Cancel"),Xc(),mT(81,": Backdrop fade overlays can be tapped to cancel/dismiss the slide drawer."),Xc()()()(),Ni(82,"div",30),Yp(83,"playground-example-viewer",31)(84,"playground-example-viewer",32),Xc(),Ni(85,"div",33),Yp(86,"playground-token-table",34),Xc()()),c&2&&(Zp("tags",kT(17,Q))("apiReference",true)("examples",true)("theming",true),hI(13),Zp("value",n.position()),hI(),Zp("value",n.PositionEnum.Bottom),hI(2),Zp("value",n.PositionEnum.Top),hI(2),Zp("value",n.PositionEnum.Left),hI(2),Zp("value",n.PositionEnum.Right),hI(5),Zp("value",n.size()),hI(6),Zp("checked",n.showBackdrop()),hI(7),Zp("checked",n.closeOnBackdrop()),hI(25),Zp("properties",n.apiProps),hI(20),Zp("code",n.snippets.basic),hI(),Zp("code",n.snippets.advanced),hI(2),Zp("tokens",n.slidePanelTokens)("overrideSnippet",n.slidePanelOverrideSnippet));},dependencies:[on,rn,P,h,N$1],styles:[".demo-panel-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%;box-sizing:border-box;padding:var(--cmp-spacing-2, 8px) 0}.demo-panel-content[_ngcontent-%COMP%]   .cart-scroll-container[_ngcontent-%COMP%]{flex-grow:1;overflow-y:auto}.demo-panel-content[_ngcontent-%COMP%]   .cart-item-row[_ngcontent-%COMP%]{border-bottom:1px solid var(--cmp-border-light, rgba(0, 0, 0, .06));padding-bottom:var(--cmp-spacing-3, 12px);margin-bottom:var(--cmp-spacing-3, 12px)}body.dark-theme[_ngcontent-%COMP%]   .demo-panel-content[_ngcontent-%COMP%]   .cart-item-row[_ngcontent-%COMP%]{border-color:#ffffff14}.demo-panel-content[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%]{background:var(--cmp-gray-50, #f9f9fb);border-left:4px solid var(--cmp-primary, #6366f1);border-radius:var(--cmp-radius-md, 8px);padding:var(--cmp-spacing-3, 12px);margin-bottom:var(--cmp-spacing-3, 12px)}body.dark-theme[_ngcontent-%COMP%]   .demo-panel-content[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%]{background:#ffffff08}"]});}}return p})();export{ae as SlidePanelDemoComponent};