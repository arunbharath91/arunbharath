import{a as w}from"./chunk-TXKYU3YU.js";import{a as D}from"./chunk-PDG4LZXE.js";import{b as x}from"./chunk-N6TXZUVO.js";import{oa as T,pa as I,qa as f}from"./chunk-HRGEVEKL.js";import"./chunk-6YDFT5TX.js";import"./chunk-T3YZDFP3.js";import"./chunk-H2UPXF7Z.js";import"./chunk-GPLIFPL6.js";import"./chunk-W4YJMS2G.js";import{Ab as v,Ac as b,Hc as S,Ib as h,Jb as y,Ob as r,Pb as e,Qb as t,Rb as u,db as l,qc as a,ub as _,ya as d,yc as p,zc as c}from"./chunk-UVDLXSKN.js";import"./chunk-EU2KAMEK.js";import"./chunk-DAQOROHW.js";var P=()=>["Navigation","Layout","Router"];function z(o,s){o&1&&(e(0,"p"),a(1,"Overview content"),t())}function M(o,s){o&1&&(e(0,"p"),a(1,"Details content"),t())}function B(o,s){o&1&&(e(0,"p"),a(1,"Settings content"),t())}function L(o,s){o&1&&(e(0,"p"),a(1,"All items"),t())}function W(o,s){o&1&&(e(0,"p"),a(1,"Active items"),t())}function k(o,s){o&1&&(e(0,"p"),a(1,"Archived items"),t())}function A(o,s){o&1&&(e(0,"p"),a(1,"Posts content"),t())}function O(o,s){o&1&&(e(0,"p"),a(1,"Comments content"),t())}function U(o,s){o&1&&(e(0,"p"),a(1,"Likes content"),t())}function j(o,s){o&1&&(e(0,"p"),a(1,"Overview content projected directly \u2014 no "),e(2,"code"),a(3,"@switch"),t(),a(4," needed."),t())}function N(o,s){o&1&&(e(0,"p"),a(1,"Details content with a badge on the tab."),t())}function R(o,s){o&1&&(e(0,"p"),a(1,"This panel is never shown."),t())}function F(o,s){o&1&&(e(0,"p"),a(1,"Posts projected content."),t())}function H(o,s){o&1&&(e(0,"p"),a(1,"Comments projected content."),t())}function V(o,s){o&1&&(e(0,"p"),a(1,"Likes projected content."),t())}var $=(()=>{class o{constructor(){this.activeBasic=d(0),this.activePills=d(0),this.activeUnder=d(0),this.activeIcons=d(0),this.activeBadges=d(0),this.activeDisabled=d(0),this.activeSizeSm=d(0),this.activeSizeMd=d(0),this.activeSizeLg=d(0),this.basicItems=[{label:"Overview"},{label:"Details"},{label:"Settings"},{label:"Analytics"},{label:"Reports"},{label:"Users"},{label:"Permissions"},{label:"Billing"}],this.pillItems=[{label:"All"},{label:"Active"},{label:"Archived"},{label:"Pending"},{label:"Completed"},{label:"Cancelled"}],this.underlineItems=[{label:"Posts"},{label:"Comments"},{label:"Likes"},{label:"Shares"},{label:"Bookmarks"},{label:"Mentions"},{label:"Notifications"}],this.iconItems=[{label:"Dashboard",icon:"dashboard"},{label:"Analytics",icon:"bar_chart"},{label:"Settings",icon:"settings"},{label:"Messages",icon:"message"},{label:"Calendar",icon:"calendar_today"},{label:"Tasks",icon:"task"}],this.badgeItems=[{label:"Inbox",badge:12},{label:"Sent",badge:3},{label:"Drafts",badge:0},{label:"Spam",badge:45},{label:"Trash",badge:2}],this.disabledItems=[{label:"Active"},{label:"Disabled",disabled:!0},{label:"Another"}],this.tabsProps=[{name:"items",type:"input<ITabItem[]>",description:"Flat item list. Ignored when <ui-tab-panel> children are projected."},{name:"variant",type:"input<'tabs' | 'pills' | 'underline'>",description:"Visual style. Defaults to 'tabs'."},{name:"size",type:"input<'sm' | 'md' | 'lg'>",description:"Tab size. Defaults to 'md'."},{name:"activeIndex",type:"model<number>",description:"Two-way bindable active tab index."},{name:"tabClick",type:"output<ITabItem>",description:"Emits the clicked ITabItem."}],this.itemProps=[{name:"label",type:"string",description:"Display text shown in the nav bar."},{name:"link",type:"string?",description:"Router link \u2014 enables router mode for this item."},{name:"icon",type:"string?",description:"Material icon name shown before the label."},{name:"badge",type:"number | string?",description:"Badge value shown after the label."},{name:"disabled",type:"boolean?",description:"Disables this specific tab."}],this.panelProps=[{name:"label",type:"input<string> (required)",description:"Tab label shown in the nav bar."},{name:"icon",type:"input<string>?",description:"Material icon name."},{name:"badge",type:"input<number | string>?",description:"Badge value."},{name:"disabled",type:"input<boolean>",description:"Disables this tab. Defaults to false."},{name:"content",type:"contentChild (TemplateRef)",description:"Resolved from the inner <ng-template uiTabContent>. Used by TabsComponent to stamp the panel."}],this.directiveProps=[{name:"uiTabContent",type:"selector (attribute)",description:"Marker placed on <ng-template> inside <ui-tab-panel>. Lets TabPanelComponent locate the correct TemplateRef via contentChild."}],this.importCode=`
// All three pieces are exported individually from @arun-bharath-ui/cmp-ui
import {
  TabsComponent,          // <ui-tabs>
  TabPanelComponent,      // <ui-tab-panel>
  UiTabContentDirective,  // [uiTabContent]  \u2190 lives in tab-content.directive.ts
  ITabItem,
} from '@arun-bharath-ui/cmp-ui';
  `.trim(),this.basicCode=`
readonly items: ITabItem[] = [
  { label: 'Overview' },
  { label: 'Details' },
  { label: 'Settings' },
];

activeIndex = signal(0);

<!-- template -->
<ui-tabs [items]="items" variant="tabs" [(activeIndex)]="activeIndex" />

@switch (activeIndex()) {
  @case (0) { <p>Overview content</p> }
  @case (1) { <p>Details content</p>  }
  @case (2) { <p>Settings content</p> }
}
  `.trim(),this.panelCode=`
<!-- Panel projection mode \u2014 no @switch or activeIndex management needed -->
<ui-tabs variant="pills">

  <ui-tab-panel label="Overview" icon="dashboard">
    <ng-template uiTabContent>
      <p>Overview content projected directly.</p>
    </ng-template>
  </ui-tab-panel>

  <ui-tab-panel label="Details" [badge]="5">
    <ng-template uiTabContent>
      <p>Details content with a badge on the tab.</p>
    </ng-template>
  </ui-tab-panel>

  <ui-tab-panel label="Disabled" [disabled]="true">
    <ng-template uiTabContent>
      <p>This panel is never shown.</p>
    </ng-template>
  </ui-tab-panel>

</ui-tabs>
  `.trim(),this.routerCode=`
// Add a link to each item \u2192 ui-tabs switches to routerLink / routerLinkActive
readonly items: ITabItem[] = [
  { label: 'Profile',    link: './profile' },
  { label: 'Address',    link: './address' },
  { label: 'Technology', link: './technology' },
];

<!-- template \u2014 no activeIndex needed in router mode -->
<ui-tabs [items]="items" variant="tabs" />
<router-outlet />
  `.trim(),this.iconBadgeCode=`
readonly items: ITabItem[] = [
  { label: 'Dashboard', icon: 'dashboard' },
  { label: 'Inbox',     icon: 'inbox',    badge: 12 },
  { label: 'Settings',  icon: 'settings', disabled: true },
];

<ui-tabs [items]="items" variant="tabs" [(activeIndex)]="activeIndex" />
  `.trim(),this.sizeCode=`
<!-- sm -->
<ui-tabs [items]="items" variant="tabs" size="sm" [(activeIndex)]="activeSm" />

<!-- md (default) -->
<ui-tabs [items]="items" variant="tabs" size="md" [(activeIndex)]="activeMd" />

<!-- lg -->
<ui-tabs [items]="items" variant="tabs" size="lg" [(activeIndex)]="activeLg" />
  `.trim()}static{this.\u0275fac=function(g){return new(g||o)}}static{this.\u0275cmp=_({type:o,selectors:[["playground-tabs-demo"]],decls:107,vars:38,consts:[["title","Tabs","description","A navigation component for switching between related content panels or routes. Supports three visual variants, icons, badges, disabled states, sizes, and router-link mode. Content can be managed externally with activeIndex or projected directly via ui-tab-panel.",3,"tags","apiReference","examples"],["demo",""],[1,"demo-section"],[1,"demo-label"],["variant","tabs",3,"activeIndexChange","items","activeIndex"],[1,"demo-panel"],["variant","pills",3,"activeIndexChange","items","activeIndex"],["variant","underline",3,"activeIndexChange","items","activeIndex"],[1,"demo-sizes"],[1,"demo-size-label"],["variant","tabs","size","sm",3,"activeIndexChange","items","activeIndex"],["variant","tabs","size","md",3,"activeIndexChange","items","activeIndex"],["variant","tabs","size","lg",3,"activeIndexChange","items","activeIndex"],["variant","pills"],["label","Overview","icon","dashboard"],["uiTabContent",""],["label","Details",3,"badge"],["label","Disabled",3,"disabled"],["variant","underline"],["label","Posts","icon","article"],["label","Comments","icon","comment",3,"badge"],["label","Likes","icon","favorite"],["api",""],[1,"api-heading"],[3,"properties"],[1,"api-note"],["examples",""],["title","Imports","description","TabsComponent, TabPanelComponent, and UiTabContentDirective are each exported from their own file and re-exported from the library barrel.","language","TypeScript",3,"code"],["title","Basic usage \u2014 index mode","description","Use [(activeIndex)] to track the selected tab and render content with @switch.","language","TypeScript",3,"code"],["title","Panel projection mode","description","Project content directly inside ui-tabs using ui-tab-panel children. TabsComponent stamps the active panel's ng-template \u2014 no external @switch or activeIndex management needed.","language","HTML",3,"code"],["title","Router mode","description","Add a link property to each ITabItem \u2014 ui-tabs switches to routerLink / routerLinkActive automatically. Pair with a router-outlet.","language","TypeScript",3,"code"],["title","Icons, badges & disabled","description","Combine icon, badge, and disabled on any ITabItem.","language","TypeScript",3,"code"],["title","Sizes","description","Three sizes available: sm, md (default), and lg.","language","HTML",3,"code"]],template:function(g,i){if(g&1&&(e(0,"playground-demo-page-template",0)(1,"div",1)(2,"div",2)(3,"p",3),a(4,'variant="tabs" (default)'),t(),e(5,"ui-tabs",4),b("activeIndexChange",function(n){return c(i.activeBasic,n)||(i.activeBasic=n),n}),t(),e(6,"div",5),h(7,z,2,0,"p")(8,M,2,0,"p")(9,B,2,0,"p"),t()(),e(10,"div",2)(11,"p",3),a(12,'variant="pills"'),t(),e(13,"ui-tabs",6),b("activeIndexChange",function(n){return c(i.activePills,n)||(i.activePills=n),n}),t(),e(14,"div",5),h(15,L,2,0,"p")(16,W,2,0,"p")(17,k,2,0,"p"),t()(),e(18,"div",2)(19,"p",3),a(20,'variant="underline"'),t(),e(21,"ui-tabs",7),b("activeIndexChange",function(n){return c(i.activeUnder,n)||(i.activeUnder=n),n}),t(),e(22,"div",5),h(23,A,2,0,"p")(24,O,2,0,"p")(25,U,2,0,"p"),t()(),e(26,"div",2)(27,"p",3),a(28,"Icons"),t(),e(29,"ui-tabs",4),b("activeIndexChange",function(n){return c(i.activeIcons,n)||(i.activeIcons=n),n}),t()(),e(30,"div",2)(31,"p",3),a(32,"Badges"),t(),e(33,"ui-tabs",6),b("activeIndexChange",function(n){return c(i.activeBadges,n)||(i.activeBadges=n),n}),t()(),e(34,"div",2)(35,"p",3),a(36,"Disabled tab"),t(),e(37,"ui-tabs",4),b("activeIndexChange",function(n){return c(i.activeDisabled,n)||(i.activeDisabled=n),n}),t()(),e(38,"div",2)(39,"p",3),a(40,"Sizes \u2014 sm / md / lg"),t(),e(41,"div",8)(42,"div")(43,"span",9),a(44,"sm"),t(),e(45,"ui-tabs",10),b("activeIndexChange",function(n){return c(i.activeSizeSm,n)||(i.activeSizeSm=n),n}),t()(),e(46,"div")(47,"span",9),a(48,"md"),t(),e(49,"ui-tabs",11),b("activeIndexChange",function(n){return c(i.activeSizeMd,n)||(i.activeSizeMd=n),n}),t()(),e(50,"div")(51,"span",9),a(52,"lg"),t(),e(53,"ui-tabs",12),b("activeIndexChange",function(n){return c(i.activeSizeLg,n)||(i.activeSizeLg=n),n}),t()()()(),e(54,"div",2)(55,"p",3),a(56," Panel projection mode \u2014 content lives inside "),e(57,"code"),a(58,"<ng-template uiTabContent>"),t()(),e(59,"ui-tabs",13)(60,"ui-tab-panel",14),v(61,j,5,0,"ng-template",15),t(),e(62,"ui-tab-panel",16),v(63,N,2,0,"ng-template",15),t(),e(64,"ui-tab-panel",17),v(65,R,2,0,"ng-template",15),t()()(),e(66,"div",2)(67,"p",3),a(68,'Panel projection mode \u2014 variant="underline"'),t(),e(69,"ui-tabs",18)(70,"ui-tab-panel",19),v(71,F,2,0,"ng-template",15),t(),e(72,"ui-tab-panel",20),v(73,H,2,0,"ng-template",15),t(),e(74,"ui-tab-panel",21),v(75,V,2,0,"ng-template",15),t()()()(),e(76,"div",22)(77,"h4",23),a(78,"TabsComponent \u2014 inputs / outputs"),t(),u(79,"playground-api-table",24),e(80,"h4",23),a(81,"ITabItem interface"),t(),u(82,"playground-api-table",24),e(83,"h4",23),a(84,"TabPanelComponent inputs"),t(),u(85,"playground-api-table",24),e(86,"h4",23),a(87,"UiTabContentDirective"),t(),e(88,"p",25),a(89," Marker directive placed on "),e(90,"code"),a(91,"<ng-template>"),t(),a(92," inside "),e(93,"code"),a(94,"<ui-tab-panel>"),t(),a(95,". Segregated into its own file ("),e(96,"code"),a(97,"tab-content.directive.ts"),t(),a(98,") and exported separately from the library. "),t(),u(99,"playground-api-table",24),t(),e(100,"div",26),u(101,"playground-example-viewer",27)(102,"playground-example-viewer",28)(103,"playground-example-viewer",29)(104,"playground-example-viewer",30)(105,"playground-example-viewer",31)(106,"playground-example-viewer",32),t()()),g&2){let m,n,C;r("tags",S(37,P))("apiReference",!0)("examples",!0),l(5),r("items",i.basicItems),p("activeIndex",i.activeBasic),l(2),y((m=i.activeBasic())===0?7:m===1?8:m===2?9:-1),l(6),r("items",i.pillItems),p("activeIndex",i.activePills),l(2),y((n=i.activePills())===0?15:n===1?16:n===2?17:-1),l(6),r("items",i.underlineItems),p("activeIndex",i.activeUnder),l(2),y((C=i.activeUnder())===0?23:C===1?24:C===2?25:-1),l(6),r("items",i.iconItems),p("activeIndex",i.activeIcons),l(4),r("items",i.badgeItems),p("activeIndex",i.activeBadges),l(4),r("items",i.disabledItems),p("activeIndex",i.activeDisabled),l(8),r("items",i.basicItems),p("activeIndex",i.activeSizeSm),l(4),r("items",i.basicItems),p("activeIndex",i.activeSizeMd),l(4),r("items",i.basicItems),p("activeIndex",i.activeSizeLg),l(9),r("badge",5),l(2),r("disabled",!0),l(8),r("badge",3),l(7),r("properties",i.tabsProps),l(3),r("properties",i.itemProps),l(3),r("properties",i.panelProps),l(14),r("properties",i.directiveProps),l(2),r("code",i.importCode),l(),r("code",i.basicCode),l(),r("code",i.panelCode),l(),r("code",i.routerCode),l(),r("code",i.iconBadgeCode),l(),r("code",i.sizeCode)}},dependencies:[x,w,D,f,I,T],styles:[".demo-section[_ngcontent-%COMP%]{margin-bottom:2.5rem}.demo-label[_ngcontent-%COMP%]{font-size:var(--cmp-font-sm, .875rem);color:var(--cmp-text-secondary);margin-bottom:.5rem}.demo-panel[_ngcontent-%COMP%]{padding:1rem;border:1px solid var(--cmp-border);border-top:none;border-radius:0 0 var(--cmp-radius-md) var(--cmp-radius-md)}.demo-sizes[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1.25rem}.demo-size-label[_ngcontent-%COMP%]{display:inline-block;font-size:var(--cmp-font-xs, .75rem);font-weight:600;color:var(--cmp-text-secondary);margin-bottom:.375rem;text-transform:uppercase;letter-spacing:.05em}.api-heading[_ngcontent-%COMP%]{font-size:var(--cmp-font-base, 1rem);font-weight:600;margin-top:2rem;margin-bottom:.75rem}.api-heading[_ngcontent-%COMP%]:first-child{margin-top:0}.api-note[_ngcontent-%COMP%]{font-size:var(--cmp-font-sm, .875rem);color:var(--cmp-text-secondary);margin-bottom:.75rem}"],changeDetection:0})}}return o})();export{$ as TabsDemoComponent};
