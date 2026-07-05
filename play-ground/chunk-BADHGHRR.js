import{a as I}from"./chunk-PWX2OC2X.js";import{a as D}from"./chunk-SBYSMYNR.js";import{a as P}from"./chunk-3BCNELYW.js";import{b as M}from"./chunk-27AHXUXV.js";import"./chunk-47Y6JH5F.js";import{$a as k}from"./chunk-ASUHKFLY.js";import"./chunk-NXIHUMMZ.js";import"./chunk-CHV5ZX5K.js";import"./chunk-L4L7JHZR.js";import"./chunk-D7FTP3XC.js";import{$b as p,Da as C,Hb as u,Ib as g,Nb as d,Ob as e,Pb as t,Qb as h,Xb as y,bc as f,cb as r,la as x,ma as v,nc as E,qc as i,rc as w,sc as s,tb as S,xa as b,yb as _}from"./chunk-BHGGF63R.js";import"./chunk-EU2KAMEK.js";import"./chunk-DAQOROHW.js";var T={component:`
import { Component } from '@angular/core';
import { SidebarComponent, ISidebarSection } from '@arun-bharath-ui/cmp-ui';

@Component({
  standalone: true,
  imports: [SidebarComponent],
  template: \`
    <div class="sidebar-container">
      <ui-sidebar [items]="menuItems" position="left" (itemClick)="onItemClick($event)">
        <!-- Header Projection -->
        <div sidebar-header class="my-sidebar-header">
          <h2>My App</h2>
        </div>

        <!-- Footer Projection -->
        <div sidebar-footer class="my-sidebar-footer">
          <span>v1.0.0</span>
        </div>
      </ui-sidebar>
    </div>
  \`,
  styles: [\`
    .sidebar-container {
      width: 250px;
      height: 600px;
      border: 1px solid var(--cmp-border-light);
    }
    .my-sidebar-header { padding: 16px; border-bottom: 1px solid var(--cmp-border-light); }
    .my-sidebar-footer { padding: 16px; border-top: 1px solid var(--cmp-border-light); }
  \`]
})
export class ExampleComponent {
  menuItems: ISidebarSection[] = [
    {
      title: 'Navigation',
      icon: 'explore',
      children: [
        { title: 'Dashboard', route: '/dashboard', icon: 'dashboard' },
        { title: 'Analytics', route: '/analytics', icon: 'bar_chart' }
      ]
    }
  ];

  onItemClick(item: any) {
    console.log('Clicked', item);
  }
}
  `};function A(o,l){o&1&&(e(0,"span",22),i(1,"App Header"),t())}function V(o,l){o&1&&(e(0,"i",7),i(1,"apps"),t())}function O(o,l){o&1&&(e(0,"span"),i(1,"Version 1.0"),t())}function j(o,l){o&1&&(e(0,"span"),i(1,"v1"),t())}function B(o,l){if(o&1){let n=y();e(0,"ui-sidebar",20),p("itemClick",function(a){x(n);let c=f();return v(c.onItemClick(a))}),e(1,"div",21),u(2,A,2,0,"span",22)(3,V,2,0,"i",7),t(),e(4,"div",23),u(5,O,2,0,"span")(6,j,2,0,"span"),t(),e(7,"div",24)(8,"h3",25),i(9,"Main Content Area"),t(),e(10,"p",26),i(11,"This content is dynamically projected directly into the "),e(12,"code"),i(13,"<ui-sidebar>"),t(),i(14," wrapper using Angular's content projection."),t(),e(15,"div",27)(16,"div",28)(17,"h4"),i(18,"Card 1"),t(),e(19,"p",29),i(20,"Dynamic layout responds to sidebar width."),t()(),e(21,"div",28)(22,"h4"),i(23,"Card 2"),t(),e(24,"p",29),i(25,"Smooth flexbox transitions built-in."),t()()()()()}if(o&2){let n=f();d("items",n.sampleItems)("position",n.activePosition())("collapse",n.collapseMode()),r(2),g(n.collapseMode()==="none"?2:3),r(3),g(n.collapseMode()==="none"?5:6)}}function N(o,l){o&1&&(e(0,"div",14),i(1,' Sidebar is hidden. Click "Show Sidebar" to reveal. '),t())}var K=(()=>{class o extends I{constructor(){super(...arguments),this.snippets=T,this.activePosition=b("left"),this.collapseMode=b("none"),this.isVisible=b(!0),this.sampleItems=[{title:"Main",icon:"star",children:[{title:"Home",route:".",icon:"home"},{title:"Profile",route:".",icon:"person"}]},{title:"Settings",icon:"settings",children:[{title:"Account",route:".",icon:"manage_accounts"},{title:"Security",route:".",icon:"security"}]}],this.sidebarProps=[{name:"items",type:"ISidebarSection[]",description:"Array of sidebar sections and their children navigation items."},{name:"position",type:"'left' | 'right'",default:"'left'",description:"Determines the alignment and active indicator style of the sidebar."},{name:"collapse",type:"'none' | 'partial' | 'full'",default:"'none'",description:"Controls whether the sidebar is fully visible, partially collapsed (icons only), or fully collapsed."},{name:"itemClick",type:"EventEmitter<ISidebarItem>",description:"Emits when a navigation item is clicked."}]}getApiProperties(){return this.sidebarProps}onItemClick(n){console.log("Sidebar item clicked:",n)}togglePosition(){this.activePosition.update(n=>n==="left"?"right":"left")}cycleCollapse(){this.collapseMode.update(n=>n==="none"?"partial":n==="partial"?"full":"none")}toggleVisibility(){this.isVisible.update(n=>!n)}static{this.\u0275fac=(()=>{let n;return function(a){return(n||(n=C(o)))(a||o)}})()}static{this.\u0275cmp=S({type:o,selectors:[["playground-sidebar-demo"]],features:[_],decls:31,vars:12,consts:[["title","Sidebar","description","A comprehensive navigation sidebar component with themable sections, icons, routing support, and custom header/footer projection.","componentId","sidebar",3,"apiReference","examples"],["demo",""],[1,"cmp-text-h3"],[1,"cmp-text-body"],[1,"cmp-mt-4"],[1,"cmp-mb-4",2,"display","flex","gap","8px","flex-wrap","wrap"],[1,"cmp-btn","cmp-btn-primary",3,"click"],[1,"material-icons"],[1,"cmp-btn","cmp-btn-secondary",3,"click"],[1,"cmp-btn","cmp-btn-warning",3,"click"],[1,"demo-showcase"],[1,"sidebar-wrapper",2,"width","100%"],[1,"mock-container",2,"height","500px","border","1px solid var(--cmp-border-light)","overflow","hidden","border-radius","var(--cmp-radius-md)"],[3,"items","position","collapse"],[2,"padding","20px","text-align","center","color","var(--cmp-text-muted)","width","100%","display","flex","align-items","center","justify-content","center","height","100%"],["api",""],[1,"cmp-text-h3","cmp-mt-6"],["componentName","SidebarComponent",3,"properties"],["examples",""],["title","Basic Sidebar","description","Creating a sidebar with headers and footers.",3,"code"],[3,"itemClick","items","position","collapse"],["sidebar-header","",1,"mock-header"],[1,"cmp-font-bold"],["sidebar-footer","",1,"mock-footer",2,"text-align","center"],[2,"padding","24px","background","var(--cmp-bg-body)","height","100%"],[1,"cmp-text-h3","cmp-mb-4"],[1,"cmp-text-body","cmp-mb-4"],[2,"display","grid","grid-template-columns","repeat(auto-fill, minmax(200px, 1fr))","gap","16px"],[2,"background","var(--cmp-bg-surface)","padding","16px","border-radius","8px","border","1px solid var(--cmp-border-light)"],[1,"cmp-text-sm","cmp-text-muted"]],template:function(m,a){m&1&&(e(0,"playground-demo-page-template",0)(1,"div",1)(2,"h3",2),i(3,"Basic Usage"),t(),e(4,"p",3),i(5," The Sidebar takes a strict JSON schema for navigation items and supports custom projections for headers and footers. It supports both left and right orientations. "),t(),e(6,"div",4)(7,"div",5)(8,"button",6),p("click",function(){return a.togglePosition()}),e(9,"i",7),i(10,"swap_horiz"),t(),i(11),t(),e(12,"button",8),p("click",function(){return a.cycleCollapse()}),e(13,"i",7),i(14),t(),i(15),t(),e(16,"button",9),p("click",function(){return a.toggleVisibility()}),e(17,"i",7),i(18),t(),i(19),t()(),e(20,"div",10)(21,"div",11)(22,"div",12),u(23,B,26,5,"ui-sidebar",13)(24,N,2,0,"div",14),t()()()()(),e(25,"div",15)(26,"h3",16),i(27,"API Reference"),t(),h(28,"playground-api-table",17),t(),e(29,"div",18),h(30,"playground-example-viewer",19),t()()),m&2&&(d("apiReference",!0)("examples",!0),r(11),s(" Toggle Position (",a.activePosition(),") "),r(3),s(" ",a.collapseMode()==="none"?"unfold_less":a.collapseMode()==="partial"?"visibility_off":"unfold_more"," "),r(),s(" Collapse Mode: ",a.collapseMode()," "),r(3),w(a.isVisible()?"visibility_off":"visibility"),r(),s(" ",a.isVisible()?"Hide Sidebar":"Show Sidebar"," "),r(2),E("collapsed-wrapper",a.collapseMode()!=="none"),r(2),g(a.isVisible()?23:24),r(5),d("properties",a.sidebarProps),r(2),d("code",a.snippets.component))},dependencies:[M,D,P,k],styles:[".demo-showcase[_ngcontent-%COMP%]{display:flex;gap:var(--cmp-spacing-6);flex-wrap:wrap}.sidebar-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:var(--cmp-spacing-3)}.sidebar-wrapper[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin:0;font-size:var(--cmp-font-sm);color:var(--cmp-text-muted)}.mock-container[_ngcontent-%COMP%]{width:100%;border:1px solid var(--cmp-border-light);border-radius:var(--cmp-radius-md);overflow:hidden;box-shadow:var(--cmp-shadow-sm)}.mock-header[_ngcontent-%COMP%]{padding:16px 0;font-weight:700;border-bottom:1px solid var(--cmp-border-light);background:var(--cmp-bg-surface);text-align:center}.mock-footer[_ngcontent-%COMP%]{padding:16px 0;font-size:var(--cmp-font-xs);border-top:1px solid var(--cmp-border-light);background:var(--cmp-bg-surface);color:var(--cmp-text-muted);text-align:center}"],changeDetection:0})}}return o})();export{K as SidebarDemoComponent};
