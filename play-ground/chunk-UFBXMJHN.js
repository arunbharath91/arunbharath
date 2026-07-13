import{a as A}from"./chunk-L7PFQNYP.js";import{a as L}from"./chunk-MXXR6PQ6.js";import{a as M}from"./chunk-V5C7FI6U.js";import{a as R}from"./chunk-DKFH35WL.js";import{b as V}from"./chunk-N5KNFZE4.js";import"./chunk-QJL6Z563.js";import{Pa as b,Qa as B}from"./chunk-FSLXAI77.js";import"./chunk-O4PMXQUQ.js";import"./chunk-MGXTA5CE.js";import"./chunk-WIRG7O55.js";import{v as O}from"./chunk-RZJWTSPA.js";import{Ab as y,Bb as w,Ea as k,Kc as D,Pb as o,Qb as t,Rb as e,Sb as h,Xc as x,Zb as v,bc as r,da as E,db as l,dc as f,hc as T,ic as S,jc as _,ma as d,na as u,sc as i,ub as C,ya as g}from"./chunk-NUUKVCZD.js";import"./chunk-FK6H3RFT.js";import"./chunk-CHV5ZX5K.js";import"./chunk-EU2KAMEK.js";import"./chunk-DAQOROHW.js";var I={basic:`import { Component, inject, TemplateRef, ViewChild } from '@angular/core';
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
}`};var z=["settingsTemplate"],N=["cartTemplate"],j=["notificationsTemplate"],Q=()=>["Overlay","Gestures","Slide-Drawer","Dynamic Dynamic"];function F(p,P){if(p&1){let m=v();t(0,"div",35)(1,"p",21),i(2,"Customize workspace details and network environment options below."),e(),t(3,"div",36)(4,"label",12),i(5,"PROJECT NAMESPACE"),e(),h(6,"input",37),e(),t(7,"div",36)(8,"label",12),i(9,"DEPLOYMENT STRATEGY"),e(),t(10,"select",38)(11,"option"),i(12,"Edge Node (Fastest latency)"),e(),t(13,"option"),i(14,"Multi-Region Coverage"),e(),t(15,"option"),i(16,"Local Developer Hub"),e()()(),t(17,"div",39)(18,"button",40),r("click",function(){d(m);let n=f();return u(n.closePanel())}),i(19,"Save Preferences"),e(),t(20,"button",41),r("click",function(){d(m);let n=f();return u(n.closePanel())}),i(21,"Cancel"),e()()()}}function G(p,P){if(p&1){let m=v();t(0,"div",35)(1,"div",42)(2,"div",43)(3,"div")(4,"h5",44),i(5,"Angular Enterprise Framework"),e(),t(6,"span",45),i(7,"Quantity: 1"),e()(),t(8,"strong",46),i(9,"$299.00"),e()(),t(10,"div",43)(11,"div")(12,"h5",44),i(13,"Premium Theme Toolkit"),e(),t(14,"span",45),i(15,"Quantity: 1"),e()(),t(16,"strong",46),i(17,"$99.00"),e()()(),t(18,"div",47)(19,"div",48)(20,"span"),i(21,"Subtotal"),e(),t(22,"strong"),i(23,"$398.00"),e()(),t(24,"button",49),r("click",function(){d(m);let n=f();return u(n.closePanel())}),i(25,"Proceed to Checkout"),e()()()}}function W(p,P){if(p&1){let m=v();t(0,"div",35)(1,"div",50)(2,"div",51),i(3,"BUILD COMPLETED"),e(),t(4,"p",52),i(5,"The project "),t(6,"strong"),i(7,"play-ground"),e(),i(8," finished compiling successfully in 16.3 seconds."),e()(),t(9,"div",50)(10,"div",53),i(11,"BUDGET EXCEEDED"),e(),t(12,"p",52),i(13,"`file-uploader-demo.component.scss` exceeded size budget limits."),e()(),t(14,"button",54),r("click",function(){d(m);let n=f();return u(n.closePanel())}),i(15,"Dismiss All"),e()()}}var le=(()=>{class p extends A{constructor(){super(...arguments),this.slidePanel=E(B),this.snippets=I,this.PositionEnum=b,this.position=g(b.Bottom),this.size=g("400px"),this.showBackdrop=g(!0),this.closeOnBackdrop=g(!0),this.apiProps=[{name:"template",type:"TemplateRef<unknown>",description:"Custom angular template reference to project inside the slide panel body."},{name:"position",type:"'bottom' | 'top' | 'left' | 'right'",default:"'bottom'",description:"Screen edge the panel slides in from."},{name:"size",type:"string",default:"'50%'",description:"Width of horizontal panels (left/right) or height of vertical panels (top/bottom)."},{name:"showBackdrop",type:"boolean",default:"true",description:"Whether to show the overlay backdrop."},{name:"closeOnBackdrop",type:"boolean",default:"true",description:"If true, clicking the backdrop closes the panel."},{name:"title",type:"string",description:"Optional header title."},{name:"viewContainerRef",type:"ViewContainerRef",description:"Trap the panel within a specific container instead of the root body viewport."}],this.slidePanelTokens=[{localVar:"--ui-slide-panel-bg",mapsTo:"var(--cmp-white)",description:"Slide panel background color",type:"color"},{localVar:"--ui-slide-panel-shadow",mapsTo:"var(--cmp-shadow-xl)",description:"Slide panel box shadow",type:"value"},{localVar:"--ui-slide-panel-radius",mapsTo:"var(--cmp-radius-xl)",description:"Slide panel corner radius",type:"radius"},{localVar:"--ui-slide-panel-backdrop-bg",mapsTo:"var(--cmp-overlay-bg)",description:"Backdrop overlay background",type:"color"},{localVar:"--ui-slide-panel-title-color",mapsTo:"var(--cmp-black)",description:"Panel title text color",type:"color"},{localVar:"--ui-slide-panel-header-border",mapsTo:"1px solid var(--cmp-border-light)",description:"Bottom border of panel header",type:"value"},{localVar:"--ui-slide-panel-close-bg",mapsTo:"var(--cmp-gray-100)",description:"Close button background",type:"color"},{localVar:"--ui-slide-panel-close-hover-bg",mapsTo:"var(--cmp-gray-200)",description:"Close button background on hover",type:"color"}],this.slidePanelOverrideSnippet=`// Customize the Slide Panel
.ui-slide-panel {
  --ui-slide-panel-bg: var(--cmp-surface);
  --ui-slide-panel-radius: var(--cmp-radius-lg);
  --ui-slide-panel-backdrop-bg: rgba(0, 0, 0, 0.6);
}`}getApiProperties(){return this.apiProps}openSettings(){this.slidePanel.open({title:"Global Settings Workspace",template:this.settingsTemplate,position:this.position(),size:this.size(),showBackdrop:this.showBackdrop(),closeOnBackdrop:this.closeOnBackdrop()})}openCart(){this.slidePanel.open({title:"Your Workspace Cart",template:this.cartTemplate,position:b.Right,size:"400px",showBackdrop:!0,closeOnBackdrop:!0})}openNotifications(){this.slidePanel.open({title:"Workspace Notifications",template:this.notificationsTemplate,position:b.Left,size:"320px",showBackdrop:!0,closeOnBackdrop:!0})}closePanel(){this.slidePanel.close()}static{this.\u0275fac=(()=>{let m;return function(n){return(m||(m=k(p)))(n||p)}})()}static{this.\u0275cmp=C({type:p,selectors:[["playground-slide-panel-demo"]],viewQuery:function(c,n){if(c&1&&T(z,7)(N,7)(j,7),c&2){let a;S(a=_())&&(n.settingsTemplate=a.first),S(a=_())&&(n.cartTemplate=a.first),S(a=_())&&(n.notificationsTemplate=a.first)}},features:[y],decls:87,vars:18,consts:[["settingsTemplate",""],["cartTemplate",""],["notificationsTemplate",""],["title","Slide Panel","description","A dynamic, hardware-accelerated drawer system sliding from any screen edge, featuring built-in swipe gestures and viewport-trapping support.",3,"tags","apiReference","examples","theming"],["demo",""],[1,"cmp-card","glass-card","cmp-mb-5"],[1,"cmp-card-header","cmp-border-bottom","cmp-pb-3","cmp-mb-4"],[1,"cmp-card-title","cmp-m-0"],[1,"cmp-text-muted","cmp-m-0","small"],[1,"cmp-card-content","cmp-px-4","cmp-pb-4"],[1,"cmp-row","cmp-mb-4"],[1,"cmp-col-md-6","cmp-mb-3"],[1,"cmp-text-muted","cmp-mb-2","cmp-d-block","small","cmp-fw-bold"],[1,"cmp-form-control",3,"change","value"],[3,"value"],["type","text","placeholder","e.g., 400px, 50%, 100%",1,"cmp-form-control",3,"input","value"],[1,"cmp-form-check","cmp-mb-2"],["type","checkbox",1,"cmp-form-check-input",3,"change","checked"],[1,"cmp-form-check-label"],[1,"cmp-btn","cmp-btn-primary","cmp-px-5",3,"click"],[1,"cmp-mb-3"],[1,"cmp-text-muted","cmp-mb-4"],[1,"cmp-d-flex","cmp-gap-3","cmp-mb-5"],[1,"cmp-btn","cmp-btn-outline",3,"click"],[1,"material-icons","cmp-mr-1"],["api",""],["title","SlidePanelService Options",3,"properties"],[1,"api-section","cmp-mt-4"],[1,"api-title"],[1,"feature-list-simple"],["examples",""],["title","Basic Slide Panel Launch","description","Inject SlidePanelService and call open() passing a TemplateRef.",3,"code"],["title","Advanced Options Drawer","description","Configure edge directions, size specs, and disable backdrop closures.",3,"code"],["theming",""],["title","Slide Panel CSS Custom Properties",3,"tokens","overrideSnippet"],[1,"demo-panel-content"],[1,"cmp-mb-4"],["type","text","value","antigravity-core-beta",1,"cmp-form-control"],[1,"cmp-form-control"],[1,"cmp-mt-5","cmp-d-flex","cmp-gap-2"],[1,"cmp-btn","cmp-btn-primary",3,"click"],[1,"cmp-btn","cmp-btn-soft-secondary",3,"click"],[1,"cart-scroll-container"],[1,"cart-item-row","cmp-d-flex","cmp-align-items-center","cmp-justify-content-between","cmp-mb-3","cmp-pb-3","cmp-border-bottom"],[1,"cmp-m-0"],[1,"small","cmp-text-muted"],[1,"cmp-text-primary"],[1,"cart-totals","cmp-mt-5","cmp-pt-3","cmp-border-top"],[1,"cmp-d-flex","cmp-justify-content-between","cmp-mb-3"],[1,"cmp-btn","cmp-btn-primary","cmp-w-100",3,"click"],[1,"notification-item","cmp-p-3","cmp-mb-3","cmp-bg-light","cmp-rounded"],[1,"small","cmp-text-primary","cmp-fw-bold","cmp-mb-1"],[1,"cmp-m-0","small"],[1,"small","cmp-text-warning","cmp-fw-bold","cmp-mb-1"],[1,"cmp-btn","cmp-btn-outline","cmp-w-100","cmp-mt-4",3,"click"]],template:function(c,n){c&1&&(t(0,"playground-demo-page-template",3)(1,"div",4)(2,"div",5)(3,"div",6)(4,"h3",7),i(5,"Interactive Configurator"),e(),t(6,"p",8),i(7,"Adjust slide drawer parameters dynamically and launch the configuration panel."),e()(),t(8,"div",9)(9,"div",10)(10,"div",11)(11,"label",12),i(12,"SLIDE POSITION"),e(),t(13,"select",13),r("change",function(s){return n.position.set(s.target.value)}),t(14,"option",14),i(15,"Bottom Edge (Standard)"),e(),t(16,"option",14),i(17,"Top Edge"),e(),t(18,"option",14),i(19,"Left Edge"),e(),t(20,"option",14),i(21,"Right Edge"),e()()(),t(22,"div",11)(23,"label",12),i(24,"PANEL SIZING (WIDTH/HEIGHT)"),e(),t(25,"input",15),r("input",function(s){return n.size.set(s.target.value)}),e()()(),t(26,"div",10)(27,"div",11)(28,"label",12),i(29,"BACKDROP OVERLAY"),e(),t(30,"label",16)(31,"input",17),r("change",function(s){return n.showBackdrop.set(s.target.checked)}),e(),t(32,"span",18),i(33,"Show Backdrop Blur Cover"),e()()(),t(34,"div",11)(35,"label",12),i(36,"DISMISS BACKDROP CLICK"),e(),t(37,"label",16)(38,"input",17),r("change",function(s){return n.closeOnBackdrop.set(s.target.checked)}),e(),t(39,"span",18),i(40,"Close on Backdrop Overlay Click"),e()()()(),t(41,"button",19),r("click",function(){return n.openSettings()}),i(42," Launch Configured Panel "),e()()(),t(43,"h3",20),i(44,"Common Preset Workspaces"),e(),t(45,"p",21),i(46,"Trigger slide panels set up for common application patterns (e.g. right-side shopping cart, left-side notifications sidebar)."),e(),t(47,"div",22)(48,"button",23),r("click",function(){return n.openCart()}),t(49,"span",24),i(50,"shopping_cart"),e(),i(51," Right-Side Cart Preset (400px) "),e(),t(52,"button",23),r("click",function(){return n.openNotifications()}),t(53,"span",24),i(54,"notifications"),e(),i(55," Left-Side Notification Presets (320px) "),e()(),w(56,F,22,0,"ng-template",null,0,x)(58,G,26,0,"ng-template",null,1,x)(60,W,16,0,"ng-template",null,2,x),e(),t(62,"div",25),h(63,"playground-api-table",26),t(64,"div",27)(65,"h4",28),i(66,"Gesture Support"),e(),t(67,"p"),i(68,"The Slide Panel has native swipe gestures using the `uiSwipe` directive:"),e(),t(69,"ul",29)(70,"li")(71,"strong"),i(72,"Swipe to Close"),e(),i(73,": Swipe panels *toward* their home screen edge to close them (e.g. swipe down on a bottom drawer)."),e(),t(74,"li")(75,"strong"),i(76,"Swipe to Expand"),e(),i(77,": Swipe panels *away* from their home edge to expand them to full screen cover (`100%`)."),e(),t(78,"li")(79,"strong"),i(80,"Backdrop Cancel"),e(),i(81,": Backdrop fade overlays can be tapped to cancel/dismiss the slide drawer."),e()()()(),t(82,"div",30),h(83,"playground-example-viewer",31)(84,"playground-example-viewer",32),e(),t(85,"div",33),h(86,"playground-token-table",34),e()()),c&2&&(o("tags",D(17,Q))("apiReference",!0)("examples",!0)("theming",!0),l(13),o("value",n.position()),l(),o("value",n.PositionEnum.Bottom),l(2),o("value",n.PositionEnum.Top),l(2),o("value",n.PositionEnum.Left),l(2),o("value",n.PositionEnum.Right),l(5),o("value",n.size()),l(6),o("checked",n.showBackdrop()),l(7),o("checked",n.closeOnBackdrop()),l(25),o("properties",n.apiProps),l(20),o("code",n.snippets.basic),l(),o("code",n.snippets.advanced),l(2),o("tokens",n.slidePanelTokens)("overrideSnippet",n.slidePanelOverrideSnippet))},dependencies:[O,V,M,R,L],styles:[".demo-panel-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%;box-sizing:border-box;padding:var(--cmp-spacing-2, 8px) 0}.demo-panel-content[_ngcontent-%COMP%]   .cart-scroll-container[_ngcontent-%COMP%]{flex-grow:1;overflow-y:auto}.demo-panel-content[_ngcontent-%COMP%]   .cart-item-row[_ngcontent-%COMP%]{border-bottom:1px solid var(--cmp-border-light, rgba(0, 0, 0, .06));padding-bottom:var(--cmp-spacing-3, 12px);margin-bottom:var(--cmp-spacing-3, 12px)}body.dark-theme[_ngcontent-%COMP%]   .demo-panel-content[_ngcontent-%COMP%]   .cart-item-row[_ngcontent-%COMP%]{border-color:#ffffff14}.demo-panel-content[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%]{background:var(--cmp-gray-50, #f9f9fb);border-left:4px solid var(--cmp-primary, #6366f1);border-radius:var(--cmp-radius-md, 8px);padding:var(--cmp-spacing-3, 12px);margin-bottom:var(--cmp-spacing-3, 12px)}body.dark-theme[_ngcontent-%COMP%]   .demo-panel-content[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%]{background:#ffffff08}"],changeDetection:0})}}return p})();export{le as SlidePanelDemoComponent};
