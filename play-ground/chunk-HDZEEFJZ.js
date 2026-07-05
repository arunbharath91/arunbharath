import{a as V}from"./chunk-PWX2OC2X.js";import{a as R}from"./chunk-SBYSMYNR.js";import{a as L}from"./chunk-3BCNELYW.js";import{b as M}from"./chunk-27AHXUXV.js";import"./chunk-47Y6JH5F.js";import{eb as h,fb as B}from"./chunk-ASUHKFLY.js";import"./chunk-NXIHUMMZ.js";import"./chunk-CHV5ZX5K.js";import"./chunk-L4L7JHZR.js";import{v as O}from"./chunk-D7FTP3XC.js";import{$b as r,Da as C,Gc as D,Nb as a,Ob as t,Pb as e,Qb as b,Tc as x,Xb as S,bc as f,ca as P,cb as l,fc as T,gc as v,hc as _,la as d,ma as u,qc as n,tb as k,xa as g,yb as y,zb as w}from"./chunk-BHGGF63R.js";import"./chunk-EU2KAMEK.js";import"./chunk-DAQOROHW.js";var A={basic:`import { Component, inject, TemplateRef, ViewChild } from '@angular/core';
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
}`};var I=["settingsTemplate"],z=["cartTemplate"],N=["notificationsTemplate"],j=()=>["Overlay","Gestures","Slide-Drawer","Dynamic Dynamic"];function Q(p,E){if(p&1){let m=S();t(0,"div",33)(1,"p",21),n(2,"Customize workspace details and network environment options below."),e(),t(3,"div",34)(4,"label",12),n(5,"PROJECT NAMESPACE"),e(),b(6,"input",35),e(),t(7,"div",34)(8,"label",12),n(9,"DEPLOYMENT STRATEGY"),e(),t(10,"select",36)(11,"option"),n(12,"Edge Node (Fastest latency)"),e(),t(13,"option"),n(14,"Multi-Region Coverage"),e(),t(15,"option"),n(16,"Local Developer Hub"),e()()(),t(17,"div",37)(18,"button",38),r("click",function(){d(m);let i=f();return u(i.closePanel())}),n(19,"Save Preferences"),e(),t(20,"button",39),r("click",function(){d(m);let i=f();return u(i.closePanel())}),n(21,"Cancel"),e()()()}}function F(p,E){if(p&1){let m=S();t(0,"div",33)(1,"div",40)(2,"div",41)(3,"div")(4,"h5",42),n(5,"Angular Enterprise Framework"),e(),t(6,"span",43),n(7,"Quantity: 1"),e()(),t(8,"strong",44),n(9,"$299.00"),e()(),t(10,"div",41)(11,"div")(12,"h5",42),n(13,"Premium Theme Toolkit"),e(),t(14,"span",43),n(15,"Quantity: 1"),e()(),t(16,"strong",44),n(17,"$99.00"),e()()(),t(18,"div",45)(19,"div",46)(20,"span"),n(21,"Subtotal"),e(),t(22,"strong"),n(23,"$398.00"),e()(),t(24,"button",47),r("click",function(){d(m);let i=f();return u(i.closePanel())}),n(25,"Proceed to Checkout"),e()()()}}function G(p,E){if(p&1){let m=S();t(0,"div",33)(1,"div",48)(2,"div",49),n(3,"BUILD COMPLETED"),e(),t(4,"p",50),n(5,"The project "),t(6,"strong"),n(7,"play-ground"),e(),n(8," finished compiling successfully in 16.3 seconds."),e()(),t(9,"div",48)(10,"div",51),n(11,"BUDGET EXCEEDED"),e(),t(12,"p",50),n(13,"`file-uploader-demo.component.scss` exceeded size budget limits."),e()(),t(14,"button",52),r("click",function(){d(m);let i=f();return u(i.closePanel())}),n(15,"Dismiss All"),e()()}}var oe=(()=>{class p extends V{constructor(){super(...arguments),this.slidePanel=P(B),this.snippets=A,this.PositionEnum=h,this.position=g(h.Bottom),this.size=g("400px"),this.showBackdrop=g(!0),this.closeOnBackdrop=g(!0),this.apiProps=[{name:"template",type:"TemplateRef<unknown>",description:"Custom angular template reference to project inside the slide panel body."},{name:"position",type:"'bottom' | 'top' | 'left' | 'right'",default:"'bottom'",description:"Screen edge the panel slides in from."},{name:"size",type:"string",default:"'50%'",description:"Width of horizontal panels (left/right) or height of vertical panels (top/bottom)."},{name:"showBackdrop",type:"boolean",default:"true",description:"Whether to show the overlay backdrop."},{name:"closeOnBackdrop",type:"boolean",default:"true",description:"If true, clicking the backdrop closes the panel."},{name:"title",type:"string",description:"Optional header title."},{name:"viewContainerRef",type:"ViewContainerRef",description:"Trap the panel within a specific container instead of the root body viewport."}]}getApiProperties(){return this.apiProps}openSettings(){this.slidePanel.open({title:"Global Settings Workspace",template:this.settingsTemplate,position:this.position(),size:this.size(),showBackdrop:this.showBackdrop(),closeOnBackdrop:this.closeOnBackdrop()})}openCart(){this.slidePanel.open({title:"Your Workspace Cart",template:this.cartTemplate,position:h.Right,size:"400px",showBackdrop:!0,closeOnBackdrop:!0})}openNotifications(){this.slidePanel.open({title:"Workspace Notifications",template:this.notificationsTemplate,position:h.Left,size:"320px",showBackdrop:!0,closeOnBackdrop:!0})}closePanel(){this.slidePanel.close()}static{this.\u0275fac=(()=>{let m;return function(i){return(m||(m=C(p)))(i||p)}})()}static{this.\u0275cmp=k({type:p,selectors:[["playground-slide-panel-demo"]],viewQuery:function(c,i){if(c&1&&T(I,7)(z,7)(N,7),c&2){let o;v(o=_())&&(i.settingsTemplate=o.first),v(o=_())&&(i.cartTemplate=o.first),v(o=_())&&(i.notificationsTemplate=o.first)}},features:[y],decls:85,vars:15,consts:[["settingsTemplate",""],["cartTemplate",""],["notificationsTemplate",""],["title","Slide Panel","description","A dynamic, hardware-accelerated drawer system sliding from any screen edge, featuring built-in swipe gestures and viewport-trapping support.",3,"tags","apiReference","examples"],["demo",""],[1,"cmp-card","glass-card","cmp-mb-5"],[1,"cmp-card-header","cmp-border-bottom","cmp-pb-3","cmp-mb-4"],[1,"cmp-card-title","cmp-m-0"],[1,"cmp-text-muted","cmp-m-0","small"],[1,"cmp-card-content","cmp-px-4","cmp-pb-4"],[1,"cmp-row","cmp-mb-4"],[1,"cmp-col-md-6","cmp-mb-3"],[1,"cmp-text-muted","cmp-mb-2","cmp-d-block","small","cmp-fw-bold"],[1,"cmp-form-control",3,"change","value"],[3,"value"],["type","text","placeholder","e.g., 400px, 50%, 100%",1,"cmp-form-control",3,"input","value"],[1,"cmp-form-check","cmp-mb-2"],["type","checkbox",1,"cmp-form-check-input",3,"change","checked"],[1,"cmp-form-check-label"],[1,"cmp-btn","cmp-btn-primary","cmp-px-5",3,"click"],[1,"cmp-mb-3"],[1,"cmp-text-muted","cmp-mb-4"],[1,"cmp-d-flex","cmp-gap-3","cmp-mb-5"],[1,"cmp-btn","cmp-btn-outline",3,"click"],[1,"material-icons","cmp-mr-1"],["api",""],["title","SlidePanelService Options",3,"properties"],[1,"api-section","cmp-mt-4"],[1,"api-title"],[1,"feature-list-simple"],["examples",""],["title","Basic Slide Panel Launch","description","Inject SlidePanelService and call open() passing a TemplateRef.",3,"code"],["title","Advanced Options Drawer","description","Configure edge directions, size specs, and disable backdrop closures.",3,"code"],[1,"demo-panel-content"],[1,"cmp-mb-4"],["type","text","value","antigravity-core-beta",1,"cmp-form-control"],[1,"cmp-form-control"],[1,"cmp-mt-5","cmp-d-flex","cmp-gap-2"],[1,"cmp-btn","cmp-btn-primary",3,"click"],[1,"cmp-btn","cmp-btn-soft-secondary",3,"click"],[1,"cart-scroll-container"],[1,"cart-item-row","cmp-d-flex","cmp-align-items-center","cmp-justify-content-between","cmp-mb-3","cmp-pb-3","cmp-border-bottom"],[1,"cmp-m-0"],[1,"small","cmp-text-muted"],[1,"cmp-text-primary"],[1,"cart-totals","cmp-mt-5","cmp-pt-3","cmp-border-top"],[1,"cmp-d-flex","cmp-justify-content-between","cmp-mb-3"],[1,"cmp-btn","cmp-btn-primary","cmp-w-100",3,"click"],[1,"notification-item","cmp-p-3","cmp-mb-3","cmp-bg-light","cmp-rounded"],[1,"small","cmp-text-primary","cmp-fw-bold","cmp-mb-1"],[1,"cmp-m-0","small"],[1,"small","cmp-text-warning","cmp-fw-bold","cmp-mb-1"],[1,"cmp-btn","cmp-btn-outline","cmp-w-100","cmp-mt-4",3,"click"]],template:function(c,i){c&1&&(t(0,"playground-demo-page-template",3)(1,"div",4)(2,"div",5)(3,"div",6)(4,"h3",7),n(5,"Interactive Configurator"),e(),t(6,"p",8),n(7,"Adjust slide drawer parameters dynamically and launch the configuration panel."),e()(),t(8,"div",9)(9,"div",10)(10,"div",11)(11,"label",12),n(12,"SLIDE POSITION"),e(),t(13,"select",13),r("change",function(s){return i.position.set(s.target.value)}),t(14,"option",14),n(15,"Bottom Edge (Standard)"),e(),t(16,"option",14),n(17,"Top Edge"),e(),t(18,"option",14),n(19,"Left Edge"),e(),t(20,"option",14),n(21,"Right Edge"),e()()(),t(22,"div",11)(23,"label",12),n(24,"PANEL SIZING (WIDTH/HEIGHT)"),e(),t(25,"input",15),r("input",function(s){return i.size.set(s.target.value)}),e()()(),t(26,"div",10)(27,"div",11)(28,"label",12),n(29,"BACKDROP OVERLAY"),e(),t(30,"label",16)(31,"input",17),r("change",function(s){return i.showBackdrop.set(s.target.checked)}),e(),t(32,"span",18),n(33,"Show Backdrop Blur Cover"),e()()(),t(34,"div",11)(35,"label",12),n(36,"DISMISS BACKDROP CLICK"),e(),t(37,"label",16)(38,"input",17),r("change",function(s){return i.closeOnBackdrop.set(s.target.checked)}),e(),t(39,"span",18),n(40,"Close on Backdrop Overlay Click"),e()()()(),t(41,"button",19),r("click",function(){return i.openSettings()}),n(42," Launch Configured Panel "),e()()(),t(43,"h3",20),n(44,"Common Preset Workspaces"),e(),t(45,"p",21),n(46,"Trigger slide panels set up for common application patterns (e.g. right-side shopping cart, left-side notifications sidebar)."),e(),t(47,"div",22)(48,"button",23),r("click",function(){return i.openCart()}),t(49,"span",24),n(50,"shopping_cart"),e(),n(51," Right-Side Cart Preset (400px) "),e(),t(52,"button",23),r("click",function(){return i.openNotifications()}),t(53,"span",24),n(54,"notifications"),e(),n(55," Left-Side Notification Presets (320px) "),e()(),w(56,Q,22,0,"ng-template",null,0,x)(58,F,26,0,"ng-template",null,1,x)(60,G,16,0,"ng-template",null,2,x),e(),t(62,"div",25),b(63,"playground-api-table",26),t(64,"div",27)(65,"h4",28),n(66,"Gesture Support"),e(),t(67,"p"),n(68,"The Slide Panel has native swipe gestures using the `uiSwipe` directive:"),e(),t(69,"ul",29)(70,"li")(71,"strong"),n(72,"Swipe to Close"),e(),n(73,": Swipe panels *toward* their home screen edge to close them (e.g. swipe down on a bottom drawer)."),e(),t(74,"li")(75,"strong"),n(76,"Swipe to Expand"),e(),n(77,": Swipe panels *away* from their home edge to expand them to full screen cover (`100%`)."),e(),t(78,"li")(79,"strong"),n(80,"Backdrop Cancel"),e(),n(81,": Backdrop fade overlays can be tapped to cancel/dismiss the slide drawer."),e()()()(),t(82,"div",30),b(83,"playground-example-viewer",31)(84,"playground-example-viewer",32),e()()),c&2&&(a("tags",D(14,j))("apiReference",!0)("examples",!0),l(13),a("value",i.position()),l(),a("value",i.PositionEnum.Bottom),l(2),a("value",i.PositionEnum.Top),l(2),a("value",i.PositionEnum.Left),l(2),a("value",i.PositionEnum.Right),l(5),a("value",i.size()),l(6),a("checked",i.showBackdrop()),l(7),a("checked",i.closeOnBackdrop()),l(25),a("properties",i.apiProps),l(20),a("code",i.snippets.basic),l(),a("code",i.snippets.advanced))},dependencies:[O,M,R,L],styles:[".demo-panel-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%;box-sizing:border-box;padding:var(--cmp-spacing-2, 8px) 0}.demo-panel-content[_ngcontent-%COMP%]   .cart-scroll-container[_ngcontent-%COMP%]{flex-grow:1;overflow-y:auto}.demo-panel-content[_ngcontent-%COMP%]   .cart-item-row[_ngcontent-%COMP%]{border-bottom:1px solid var(--cmp-border-light, rgba(0, 0, 0, .06));padding-bottom:var(--cmp-spacing-3, 12px);margin-bottom:var(--cmp-spacing-3, 12px)}body.dark-theme[_ngcontent-%COMP%]   .demo-panel-content[_ngcontent-%COMP%]   .cart-item-row[_ngcontent-%COMP%]{border-color:#ffffff14}.demo-panel-content[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%]{background:var(--cmp-gray-50, #f9f9fb);border-left:4px solid var(--cmp-primary, #6366f1);border-radius:var(--cmp-radius-md, 8px);padding:var(--cmp-spacing-3, 12px);margin-bottom:var(--cmp-spacing-3, 12px)}body.dark-theme[_ngcontent-%COMP%]   .demo-panel-content[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%]{background:#ffffff08}"],changeDetection:0})}}return p})();export{oe as SlidePanelDemoComponent};
