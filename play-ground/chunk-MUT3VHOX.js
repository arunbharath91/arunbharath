import{a as I}from"./chunk-L7PFQNYP.js";import{a as P}from"./chunk-MXXR6PQ6.js";import{a as T}from"./chunk-V5C7FI6U.js";import{a as M}from"./chunk-DKFH35WL.js";import{b as D}from"./chunk-N5KNFZE4.js";import"./chunk-QJL6Z563.js";import{Ja as w}from"./chunk-FSLXAI77.js";import"./chunk-O4PMXQUQ.js";import"./chunk-MGXTA5CE.js";import"./chunk-WIRG7O55.js";import"./chunk-RZJWTSPA.js";import{Ab as C,Ea as S,Jb as u,Kb as g,Pb as l,Qb as e,Rb as t,Sb as v,Zb as _,bc as p,db as a,dc as h,ma as f,na as x,pc as k,sc as i,tc as E,ub as y,uc as c,ya as b}from"./chunk-NUUKVCZD.js";import"./chunk-FK6H3RFT.js";import"./chunk-CHV5ZX5K.js";import"./chunk-EU2KAMEK.js";import"./chunk-DAQOROHW.js";var V={component:`
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
  `};function A(r,d){r&1&&(e(0,"span",24),i(1,"App Header"),t())}function O(r,d){r&1&&(e(0,"i",7),i(1,"apps"),t())}function j(r,d){r&1&&(e(0,"span"),i(1,"Version 1.0"),t())}function B(r,d){r&1&&(e(0,"span"),i(1,"v1"),t())}function N(r,d){if(r&1){let o=_();e(0,"ui-sidebar",22),p("itemClick",function(n){f(o);let m=h();return x(m.onItemClick(n))}),e(1,"div",23),u(2,A,2,0,"span",24)(3,O,2,0,"i",7),t(),e(4,"div",25),u(5,j,2,0,"span")(6,B,2,0,"span"),t(),e(7,"div",26)(8,"h3",27),i(9,"Main Content Area"),t(),e(10,"p",28),i(11,"This content is dynamically projected directly into the "),e(12,"code"),i(13,"<ui-sidebar>"),t(),i(14," wrapper using Angular's content projection."),t(),e(15,"div",29)(16,"div",30)(17,"h4"),i(18,"Card 1"),t(),e(19,"p",31),i(20,"Dynamic layout responds to sidebar width."),t()(),e(21,"div",30)(22,"h4"),i(23,"Card 2"),t(),e(24,"p",31),i(25,"Smooth flexbox transitions built-in."),t()()()()()}if(r&2){let o=h();l("items",o.sampleItems)("position",o.activePosition())("collapse",o.collapseMode()),a(2),g(o.collapseMode()==="none"?2:3),a(3),g(o.collapseMode()==="none"?5:6)}}function F(r,d){r&1&&(e(0,"div",14),i(1,' Sidebar is hidden. Click "Show Sidebar" to reveal. '),t())}var W=(()=>{class r extends I{constructor(){super(...arguments),this.snippets=V,this.activePosition=b("left"),this.collapseMode=b("none"),this.isVisible=b(!0),this.sampleItems=[{title:"Main",icon:"star",children:[{title:"Home",route:".",icon:"home"},{title:"Profile",route:".",icon:"person"}]},{title:"Settings",icon:"settings",children:[{title:"Account",route:".",icon:"manage_accounts"},{title:"Security",route:".",icon:"security"}]}],this.sidebarProps=[{name:"items",type:"ISidebarSection[]",description:"Array of sidebar sections and their children navigation items."},{name:"position",type:"'left' | 'right'",default:"'left'",description:"Determines the alignment and active indicator style of the sidebar."},{name:"collapse",type:"'none' | 'partial' | 'full'",default:"'none'",description:"Controls whether the sidebar is fully visible, partially collapsed (icons only), or fully collapsed."},{name:"itemClick",type:"EventEmitter<ISidebarItem>",description:"Emits when a navigation item is clicked."}],this.sidebarTokens=[{localVar:"--ui-sidebar-bg",mapsTo:"var(--cmp-sidebar-bg)",description:"Sidebar wrapper element background color",type:"color"},{localVar:"--ui-sidebar-header-color",mapsTo:"var(--cmp-sidebar-header-color)",description:"Header labels text color",type:"color"},{localVar:"--ui-sidebar-primary-color",mapsTo:"var(--cmp-primary)",description:"Selected active item icon/text and border color",type:"color"},{localVar:"--ui-sidebar-item-color",mapsTo:"var(--cmp-sidebar-item-color)",description:"Default navigation item text color",type:"color"},{localVar:"--ui-sidebar-icon-color",mapsTo:"var(--cmp-sidebar-icon-color)",description:"Default navigation item icon color",type:"color"},{localVar:"--ui-sidebar-item-hover-bg",mapsTo:"var(--cmp-sidebar-item-hover-bg)",description:"Item background on hover",type:"color"},{localVar:"--ui-sidebar-item-hover-color",mapsTo:"var(--cmp-sidebar-item-hover-color)",description:"Item text color on hover",type:"color"},{localVar:"--ui-sidebar-item-active-bg",mapsTo:"var(--cmp-sidebar-item-active-bg)",description:"Active item background color",type:"color"},{localVar:"--ui-sidebar-item-active-color",mapsTo:"var(--cmp-sidebar-item-active-color)",description:"Active item text color",type:"color"}],this.sidebarOverrideSnippet=`// Customize the Sidebar Component
ui-sidebar {
  --ui-sidebar-bg: var(--cmp-gray-900);
  --ui-sidebar-item-color: var(--cmp-gray-400);
  --ui-sidebar-item-hover-bg: var(--cmp-gray-800);
  --ui-sidebar-item-active-bg: var(--cmp-primary);
  --ui-sidebar-item-active-color: var(--cmp-white);
}`}getApiProperties(){return this.sidebarProps}onItemClick(o){console.log("Sidebar item clicked:",o)}togglePosition(){this.activePosition.update(o=>o==="left"?"right":"left")}cycleCollapse(){this.collapseMode.update(o=>o==="none"?"partial":o==="partial"?"full":"none")}toggleVisibility(){this.isVisible.update(o=>!o)}static{this.\u0275fac=(()=>{let o;return function(n){return(o||(o=S(r)))(n||r)}})()}static{this.\u0275cmp=y({type:r,selectors:[["playground-sidebar-demo"]],features:[C],decls:33,vars:15,consts:[["title","Sidebar","description","A comprehensive navigation sidebar component with themable sections, icons, routing support, and custom header/footer projection.","componentId","sidebar",3,"apiReference","examples","theming"],["demo",""],[1,"cmp-text-h3"],[1,"cmp-text-body"],[1,"cmp-mt-4"],[1,"cmp-mb-4",2,"display","flex","gap","8px","flex-wrap","wrap"],[1,"cmp-btn","cmp-btn-primary",3,"click"],[1,"material-icons"],[1,"cmp-btn","cmp-btn-secondary",3,"click"],[1,"cmp-btn","cmp-btn-warning",3,"click"],[1,"demo-showcase"],[1,"sidebar-wrapper",2,"width","100%"],[1,"mock-container",2,"height","500px","border","1px solid var(--cmp-border-light)","overflow","hidden","border-radius","var(--cmp-radius-md)"],[3,"items","position","collapse"],[2,"padding","20px","text-align","center","color","var(--cmp-text-muted)","width","100%","display","flex","align-items","center","justify-content","center","height","100%"],["api",""],[1,"cmp-text-h3","cmp-mt-6"],["componentName","SidebarComponent",3,"properties"],["examples",""],["title","Basic Sidebar","description","Creating a sidebar with headers and footers.",3,"code"],["theming",""],["title","Sidebar CSS Custom Properties",3,"tokens","overrideSnippet"],[3,"itemClick","items","position","collapse"],["sidebar-header","",1,"mock-header"],[1,"cmp-font-bold"],["sidebar-footer","",1,"mock-footer",2,"text-align","center"],[2,"padding","24px","background","var(--cmp-bg-body)","height","100%"],[1,"cmp-text-h3","cmp-mb-4"],[1,"cmp-text-body","cmp-mb-4"],[2,"display","grid","grid-template-columns","repeat(auto-fill, minmax(200px, 1fr))","gap","16px"],[2,"background","var(--cmp-bg-surface)","padding","16px","border-radius","8px","border","1px solid var(--cmp-border-light)"],[1,"cmp-text-sm","cmp-text-muted"]],template:function(s,n){s&1&&(e(0,"playground-demo-page-template",0)(1,"div",1)(2,"h3",2),i(3,"Basic Usage"),t(),e(4,"p",3),i(5," The Sidebar takes a strict JSON schema for navigation items and supports custom projections for headers and footers. It supports both left and right orientations. "),t(),e(6,"div",4)(7,"div",5)(8,"button",6),p("click",function(){return n.togglePosition()}),e(9,"i",7),i(10,"swap_horiz"),t(),i(11),t(),e(12,"button",8),p("click",function(){return n.cycleCollapse()}),e(13,"i",7),i(14),t(),i(15),t(),e(16,"button",9),p("click",function(){return n.toggleVisibility()}),e(17,"i",7),i(18),t(),i(19),t()(),e(20,"div",10)(21,"div",11)(22,"div",12),u(23,N,26,5,"ui-sidebar",13)(24,F,2,0,"div",14),t()()()()(),e(25,"div",15)(26,"h3",16),i(27,"API Reference"),t(),v(28,"playground-api-table",17),t(),e(29,"div",18),v(30,"playground-example-viewer",19),t(),e(31,"div",20),v(32,"playground-token-table",21),t()()),s&2&&(l("apiReference",!0)("examples",!0)("theming",!0),a(11),c(" Toggle Position (",n.activePosition(),") "),a(3),c(" ",n.collapseMode()==="none"?"unfold_less":n.collapseMode()==="partial"?"visibility_off":"unfold_more"," "),a(),c(" Collapse Mode: ",n.collapseMode()," "),a(3),E(n.isVisible()?"visibility_off":"visibility"),a(),c(" ",n.isVisible()?"Hide Sidebar":"Show Sidebar"," "),a(2),k("collapsed-wrapper",n.collapseMode()!=="none"),a(2),g(n.isVisible()?23:24),a(5),l("properties",n.sidebarProps),a(2),l("code",n.snippets.component),a(2),l("tokens",n.sidebarTokens)("overrideSnippet",n.sidebarOverrideSnippet))},dependencies:[D,T,M,w,P],styles:[".demo-showcase[_ngcontent-%COMP%]{display:flex;gap:var(--cmp-spacing-6);flex-wrap:wrap}.sidebar-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:var(--cmp-spacing-3)}.sidebar-wrapper[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin:0;font-size:var(--cmp-font-sm);color:var(--cmp-text-muted)}.mock-container[_ngcontent-%COMP%]{width:100%;border:1px solid var(--cmp-border-light);border-radius:var(--cmp-radius-md);overflow:hidden;box-shadow:var(--cmp-shadow-sm)}.mock-header[_ngcontent-%COMP%]{padding:16px 0;font-weight:700;border-bottom:1px solid var(--cmp-border-light);background:var(--cmp-bg-surface);text-align:center}.mock-footer[_ngcontent-%COMP%]{padding:16px 0;font-size:var(--cmp-font-xs);border-top:1px solid var(--cmp-border-light);background:var(--cmp-bg-surface);color:var(--cmp-text-muted);text-align:center}"],changeDetection:0})}}return r})();export{W as SidebarDemoComponent};
