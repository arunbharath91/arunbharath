import {m as m$1}from'./chunk-B64ML2nD.js';import {N as N$1}from'./chunk-D_abR2OK.js';import {P}from'./chunk-CdCF1PI4.js';import {h}from'./chunk-BQQP8wzV.js';import {r as rn}from'./chunk-DDeUKt7M.js';import {H as He,a8 as _y,G as GE,a9 as Bp,x as xF,N as Ni,m as mT,X as Xc,n as nh,O as vD,Y as Yp,Z as Zp,h as hI,F as ol,i as Ch,P as hh,R as ID,_ as SD,a0 as $u,a1 as FD,a2 as Uu}from'./main-2G52S3VT.js';var V={component:`
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
  `};function A(r,d){r&1&&(Ni(0,"span",24),mT(1,"App Header"),Xc());}function O(r,d){r&1&&(Ni(0,"i",7),mT(1,"apps"),Xc());}function j(r,d){r&1&&(Ni(0,"span"),mT(1,"Version 1.0"),Xc());}function B(r,d){r&1&&(Ni(0,"span"),mT(1,"v1"),Xc());}function N(r,d){if(r&1){let o=SD();Ni(0,"ui-sidebar",22),nh("itemClick",function(n){$u(o);let m=FD();return Uu(m.onItemClick(n))}),Ni(1,"div",23),vD(2,A,2,0,"span",24)(3,O,2,0,"i",7),Xc(),Ni(4,"div",25),vD(5,j,2,0,"span")(6,B,2,0,"span"),Xc(),Ni(7,"div",26)(8,"h3",27),mT(9,"Main Content Area"),Xc(),Ni(10,"p",28),mT(11,"This content is dynamically projected directly into the "),Ni(12,"code"),mT(13,"<ui-sidebar>"),Xc(),mT(14," wrapper using Angular's content projection."),Xc(),Ni(15,"div",29)(16,"div",30)(17,"h4"),mT(18,"Card 1"),Xc(),Ni(19,"p",31),mT(20,"Dynamic layout responds to sidebar width."),Xc()(),Ni(21,"div",30)(22,"h4"),mT(23,"Card 2"),Xc(),Ni(24,"p",31),mT(25,"Smooth flexbox transitions built-in."),Xc()()()()();}if(r&2){let o=FD();Zp("items",o.sampleItems)("position",o.activePosition())("collapse",o.collapseMode()),hI(2),ID(o.collapseMode()==="none"?2:3),hI(3),ID(o.collapseMode()==="none"?5:6);}}function F(r,d){r&1&&(Ni(0,"div",14),mT(1,' Sidebar is hidden. Click "Show Sidebar" to reveal. '),Xc());}var Q=(()=>{class r extends m$1{constructor(){super(...arguments),this.snippets=V,this.activePosition=He("left"),this.collapseMode=He("none"),this.isVisible=He(true),this.sampleItems=[{title:"Main",icon:"star",children:[{title:"Home",route:".",icon:"home"},{title:"Profile",route:".",icon:"person"}]},{title:"Settings",icon:"settings",children:[{title:"Account",route:".",icon:"manage_accounts"},{title:"Security",route:".",icon:"security"}]}],this.sidebarProps=[{name:"items",type:"ISidebarSection[]",description:"Array of sidebar sections and their children navigation items."},{name:"position",type:"'left' | 'right'",default:"'left'",description:"Determines the alignment and active indicator style of the sidebar."},{name:"collapse",type:"'none' | 'partial' | 'full'",default:"'none'",description:"Controls whether the sidebar is fully visible, partially collapsed (icons only), or fully collapsed."},{name:"itemClick",type:"EventEmitter<ISidebarItem>",description:"Emits when a navigation item is clicked."}],this.sidebarTokens=[{localVar:"--ui-sidebar-bg",mapsTo:"var(--cmp-sidebar-bg)",description:"Sidebar wrapper element background color",type:"color"},{localVar:"--ui-sidebar-header-color",mapsTo:"var(--cmp-sidebar-header-color)",description:"Header labels text color",type:"color"},{localVar:"--ui-sidebar-primary-color",mapsTo:"var(--cmp-primary)",description:"Selected active item icon/text and border color",type:"color"},{localVar:"--ui-sidebar-item-color",mapsTo:"var(--cmp-sidebar-item-color)",description:"Default navigation item text color",type:"color"},{localVar:"--ui-sidebar-icon-color",mapsTo:"var(--cmp-sidebar-icon-color)",description:"Default navigation item icon color",type:"color"},{localVar:"--ui-sidebar-item-hover-bg",mapsTo:"var(--cmp-sidebar-item-hover-bg)",description:"Item background on hover",type:"color"},{localVar:"--ui-sidebar-item-hover-color",mapsTo:"var(--cmp-sidebar-item-hover-color)",description:"Item text color on hover",type:"color"},{localVar:"--ui-sidebar-item-active-bg",mapsTo:"var(--cmp-sidebar-item-active-bg)",description:"Active item background color",type:"color"},{localVar:"--ui-sidebar-item-active-color",mapsTo:"var(--cmp-sidebar-item-active-color)",description:"Active item text color",type:"color"}],this.sidebarOverrideSnippet=`// Customize the Sidebar Component
ui-sidebar {
  --ui-sidebar-bg: var(--cmp-gray-900);
  --ui-sidebar-item-color: var(--cmp-gray-400);
  --ui-sidebar-item-hover-bg: var(--cmp-gray-800);
  --ui-sidebar-item-active-bg: var(--cmp-primary);
  --ui-sidebar-item-active-color: var(--cmp-white);
}`;}getApiProperties(){return this.sidebarProps}onItemClick(o){console.log("Sidebar item clicked:",o);}togglePosition(){this.activePosition.update(o=>o==="left"?"right":"left");}cycleCollapse(){this.collapseMode.update(o=>o==="none"?"partial":o==="partial"?"full":"none");}toggleVisibility(){this.isVisible.update(o=>!o);}static{this.\u0275fac=(()=>{let o;return function(n){return (o||(o=_y(r)))(n||r)}})();}static{this.\u0275cmp=GE({type:r,selectors:[["playground-sidebar-demo"]],features:[Bp],decls:33,vars:15,consts:[["title","Sidebar","description","A comprehensive navigation sidebar component with themable sections, icons, routing support, and custom header/footer projection.","componentId","sidebar",3,"apiReference","examples","theming"],["demo",""],[1,"cmp-text-h3"],[1,"cmp-text-body"],[1,"cmp-mt-4"],[1,"cmp-mb-4",2,"display","flex","gap","8px","flex-wrap","wrap"],[1,"cmp-btn","cmp-btn-primary",3,"click"],[1,"material-icons"],[1,"cmp-btn","cmp-btn-secondary",3,"click"],[1,"cmp-btn","cmp-btn-warning",3,"click"],[1,"demo-showcase"],[1,"sidebar-wrapper",2,"width","100%"],[1,"mock-container",2,"height","500px","border","1px solid var(--cmp-border-light)","overflow","hidden","border-radius","var(--cmp-radius-md)"],[3,"items","position","collapse"],[2,"padding","20px","text-align","center","color","var(--cmp-text-muted)","width","100%","display","flex","align-items","center","justify-content","center","height","100%"],["api",""],[1,"cmp-text-h3","cmp-mt-6"],["componentName","SidebarComponent",3,"properties"],["examples",""],["title","Basic Sidebar","description","Creating a sidebar with headers and footers.",3,"code"],["theming",""],["title","Sidebar CSS Custom Properties",3,"tokens","overrideSnippet"],[3,"itemClick","items","position","collapse"],["sidebar-header","",1,"mock-header"],[1,"cmp-font-bold"],["sidebar-footer","",1,"mock-footer",2,"text-align","center"],[2,"padding","24px","background","var(--cmp-bg-body)","height","100%"],[1,"cmp-text-h3","cmp-mb-4"],[1,"cmp-text-body","cmp-mb-4"],[2,"display","grid","grid-template-columns","repeat(auto-fill, minmax(200px, 1fr))","gap","16px"],[2,"background","var(--cmp-bg-surface)","padding","16px","border-radius","8px","border","1px solid var(--cmp-border-light)"],[1,"cmp-text-sm","cmp-text-muted"]],template:function(s,n){s&1&&(Ni(0,"playground-demo-page-template",0)(1,"div",1)(2,"h3",2),mT(3,"Basic Usage"),Xc(),Ni(4,"p",3),mT(5," The Sidebar takes a strict JSON schema for navigation items and supports custom projections for headers and footers. It supports both left and right orientations. "),Xc(),Ni(6,"div",4)(7,"div",5)(8,"button",6),nh("click",function(){return n.togglePosition()}),Ni(9,"i",7),mT(10,"swap_horiz"),Xc(),mT(11),Xc(),Ni(12,"button",8),nh("click",function(){return n.cycleCollapse()}),Ni(13,"i",7),mT(14),Xc(),mT(15),Xc(),Ni(16,"button",9),nh("click",function(){return n.toggleVisibility()}),Ni(17,"i",7),mT(18),Xc(),mT(19),Xc()(),Ni(20,"div",10)(21,"div",11)(22,"div",12),vD(23,N,26,5,"ui-sidebar",13)(24,F,2,0,"div",14),Xc()()()()(),Ni(25,"div",15)(26,"h3",16),mT(27,"API Reference"),Xc(),Yp(28,"playground-api-table",17),Xc(),Ni(29,"div",18),Yp(30,"playground-example-viewer",19),Xc(),Ni(31,"div",20),Yp(32,"playground-token-table",21),Xc()()),s&2&&(Zp("apiReference",true)("examples",true)("theming",true),hI(11),ol(" Toggle Position (",n.activePosition(),") "),hI(3),ol(" ",n.collapseMode()==="none"?"unfold_less":n.collapseMode()==="partial"?"visibility_off":"unfold_more"," "),hI(),ol(" Collapse Mode: ",n.collapseMode()," "),hI(3),Ch(n.isVisible()?"visibility_off":"visibility"),hI(),ol(" ",n.isVisible()?"Hide Sidebar":"Show Sidebar"," "),hI(2),hh("collapsed-wrapper",n.collapseMode()!=="none"),hI(2),ID(n.isVisible()?23:24),hI(5),Zp("properties",n.sidebarProps),hI(2),Zp("code",n.snippets.component),hI(2),Zp("tokens",n.sidebarTokens)("overrideSnippet",n.sidebarOverrideSnippet));},dependencies:[rn,P,h,xF,N$1],styles:[".demo-showcase[_ngcontent-%COMP%]{display:flex;gap:var(--cmp-spacing-6);flex-wrap:wrap}.sidebar-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:var(--cmp-spacing-3)}.sidebar-wrapper[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin:0;font-size:var(--cmp-font-sm);color:var(--cmp-text-muted)}.mock-container[_ngcontent-%COMP%]{width:100%;border:1px solid var(--cmp-border-light);border-radius:var(--cmp-radius-md);overflow:hidden;box-shadow:var(--cmp-shadow-sm)}.mock-header[_ngcontent-%COMP%]{padding:16px 0;font-weight:700;border-bottom:1px solid var(--cmp-border-light);background:var(--cmp-bg-surface);text-align:center}.mock-footer[_ngcontent-%COMP%]{padding:16px 0;font-size:var(--cmp-font-xs);border-top:1px solid var(--cmp-border-light);background:var(--cmp-bg-surface);color:var(--cmp-text-muted);text-align:center}"]});}}return r})();export{Q as SidebarDemoComponent};