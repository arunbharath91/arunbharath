import{a as h}from"./chunk-PJ7XOCDA.js";import{a as D}from"./chunk-4WV6B4MP.js";import{b as k}from"./chunk-6M5HNMHA.js";import{ca as _}from"./chunk-BEOYKDQV.js";import"./chunk-NCYMELVQ.js";import"./chunk-W6W7GG7E.js";import"./chunk-H2UPXF7Z.js";import"./chunk-COQAZMJT.js";import"./chunk-TYY62FAW.js";import{Cb as w,Db as v,Ib as r,Jb as e,Kb as n,Lb as s,Wb as l,Yb as y,bb as o,fc as g,kc as i,lc as f,qb as b,xa as u,yc as C}from"./chunk-BZBWJHGN.js";import"./chunk-EU2KAMEK.js";import"./chunk-DAQOROHW.js";var S={basic:`<!-- Internal trigger via content projection -->
<ui-dropdown [items]="items" (itemClick)="onItemClick($event)">
  <button trigger class="cmp-btn cmp-btn-primary">
    Options
  </button>
</ui-dropdown>`,htmlContent:`<!-- HTML content projection (no [items] binding) -->
<ui-dropdown>
  <button trigger class="cmp-btn cmp-btn-secondary">
    Account
  </button>

  <div class="dropdown-header">
    <strong>John Doe</strong>
    <span>john@example.com</span>
  </div>
  <button type="button" class="cmp-dropdown-item" (click)="onItemClick('profile')">
    My Profile
  </button>
  <button type="button" class="cmp-dropdown-item" (click)="onItemClick('settings')">
    Settings
  </button>
  <div class="cmp-dropdown-divider"></div>
  <button type="button" class="cmp-dropdown-item" (click)="onItemClick('logout')">
    Logout
  </button>
</ui-dropdown>`,externalTrigger:`<!-- External trigger - button lives outside ui-dropdown -->
<button #myBtn type="button" class="cmp-btn cmp-btn-primary">
  Open Menu
</button>

<ui-dropdown [externalTrigger]="myBtn" placement="bottom-end">
  <button type="button" class="cmp-dropdown-item" (click)="onItemClick('option1')">
    Option 1
  </button>
  <button type="button" class="cmp-dropdown-item" (click)="onItemClick('option2')">
    Option 2
  </button>
</ui-dropdown>`,placements:`<!-- bottom-start (default) -->
<ui-dropdown [items]="items" placement="bottom-start">
  <button trigger class="cmp-btn cmp-btn-outline-primary">Bottom Start</button>
</ui-dropdown>

<!-- bottom-end -->
<ui-dropdown [items]="items" placement="bottom-end">
  <button trigger class="cmp-btn cmp-btn-outline-primary">Bottom End</button>
</ui-dropdown>

<!-- top-start -->
<ui-dropdown [items]="items" placement="top-start">
  <button trigger class="cmp-btn cmp-btn-outline-primary">Top Start</button>
</ui-dropdown>

<!-- top-end -->
<ui-dropdown [items]="items" placement="top-end">
  <button trigger class="cmp-btn cmp-btn-outline-primary">Top End</button>
</ui-dropdown>`,hover:`<!-- Hover trigger -->
<ui-dropdown [items]="items" trigger="hover">
  <button trigger class="cmp-btn cmp-btn-secondary">
    Hover Me
  </button>
</ui-dropdown>`};var E=()=>["Overlay","Signal","Interactive","CDK"];function x(d,T){if(d&1&&(e(0,"div",17),i(1," Last clicked: "),e(2,"strong"),i(3),n()()),d&2){let a=y();o(3),f(a.lastClicked())}}var N=(()=>{class d{constructor(){this.snippets=S,this.items=u([{label:"My Profile",value:"profile"},{label:"Settings",value:"settings"},{divider:!0,label:""},{label:"Logout",value:"logout"}]),this.lastClicked=u(null),this.dropdownInputs=[{name:"items",type:"IDropdownItem[]",default:"[]",description:"List of items to display. Supports dividers via { divider: true }."},{name:"trigger",type:"'click' | 'hover'",default:"'click'",description:"How the dropdown is triggered."},{name:"placement",type:"'bottom-start' | 'bottom-end' | 'top-start' | 'top-end'",default:"'bottom-start'",description:"Where to place the dropdown relative to the trigger."},{name:"autoClose",type:"boolean",default:"true",description:"Whether to close the menu when an item is clicked."},{name:"externalTrigger",type:"HTMLElement | null",default:"null",description:"Pass a template reference to trigger the dropdown from an external button."}],this.dropdownOutputs=[{name:"itemClick",type:"EventEmitter<IDropdownItem>",description:"Emits when a non-disabled, non-divider item is clicked."},{name:"closed",type:"EventEmitter<void>",description:"Emits when the dropdown is closed."}],this.iDropdownItemProps=[{name:"label",type:"string",description:"Display text for the item."},{name:"value",type:"string | number | boolean",default:"undefined",description:"Optional value associated with the item."},{name:"icon",type:"string",default:"undefined",description:"Optional icon class to display."},{name:"disabled",type:"boolean",default:"false",description:"Disables the item."},{name:"divider",type:"boolean",default:"false",description:"Renders a horizontal divider instead of an item."}]}onItemClick(a){this.lastClicked.set(a.label)}onHtmlItemClick(a){this.lastClicked.set(a)}static{this.\u0275fac=function(c){return new(c||d)}}static{this.\u0275cmp=b({type:d,selectors:[["playground-dropdown-demo"]],decls:78,vars:25,consts:[["externalBtn",""],["extBtn",""],["title","Dropdown","description","A flexible dropdown menu component powered by Angular CDK Overlay. Supports internal triggers, external triggers, HTML content projection, and automatic viewport overflow correction.",3,"tags","apiReference","examples"],["demo",""],[1,"cmp-d-flex","cmp-gap-3","cmp-flex-wrap","cmp-align-items-center"],[3,"itemClick","items"],["trigger","",1,"cmp-btn","cmp-btn-primary"],["trigger","",1,"cmp-btn","cmp-btn-secondary"],[2,"padding","0.75rem 1rem","border-bottom","1px solid var(--cmp-gray-200)","background","var(--cmp-gray-50)"],[2,"font-weight","600","font-size","0.875rem"],[2,"font-size","0.75rem","color","var(--cmp-gray-500)"],["type","button",1,"cmp-dropdown-item",3,"click"],[1,"cmp-dropdown-divider"],["type","button",1,"cmp-btn","cmp-btn-outline-primary"],[3,"itemClick","externalTrigger","items"],["trigger","hover",3,"itemClick","items"],["trigger","",1,"cmp-btn","cmp-btn-outline-secondary"],[1,"cmp-alert","cmp-alert-info","cmp-mt-4"],["api",""],["title","Inputs",3,"properties"],["title","Outputs",3,"properties"],["title","IDropdownItem Interface",3,"properties"],["examples",""],["title","Basic \u2014 Internal Trigger","description","Use content projection with the trigger attribute to embed a button inside the dropdown.",3,"code"],["title","HTML Content Projection","description","Instead of [items] binding, project any HTML content directly into the dropdown menu.",3,"code"],["title","External Trigger","description","Pass any button outside the dropdown component via [externalTrigger]. The dropdown handles click events automatically.",3,"code"],[1,"cmp-d-flex","cmp-gap-3","cmp-align-items-center"],["type","button",1,"cmp-btn","cmp-btn-primary"],["title","Placements","description","Control where the dropdown opens. Viewport overflow is automatically corrected.",3,"code"],[1,"cmp-d-flex","cmp-gap-3","cmp-flex-wrap"],["placement","bottom-start",3,"items"],["trigger","",1,"cmp-btn","cmp-btn-outline-primary"],["placement","bottom-end",3,"items"],["placement","top-start",3,"items"],["placement","top-end",3,"items"],["title","Hover Trigger","description","Opens the dropdown when the mouse enters the trigger area.",3,"code"]],template:function(c,t){if(c&1&&(e(0,"playground-demo-page-template",2)(1,"div",3)(2,"div",4)(3,"ui-dropdown",5),l("itemClick",function(m){return t.onItemClick(m)}),e(4,"button",6),i(5," Options "),n()(),e(6,"ui-dropdown")(7,"button",7),i(8," Account "),n(),e(9,"div",8)(10,"div",9),i(11,"John Doe"),n(),e(12,"div",10),i(13,"john@example.com"),n()(),e(14,"button",11),l("click",function(){return t.onHtmlItemClick("My Profile")}),i(15,"My Profile"),n(),e(16,"button",11),l("click",function(){return t.onHtmlItemClick("Settings")}),i(17,"Settings"),n(),s(18,"div",12),e(19,"button",11),l("click",function(){return t.onHtmlItemClick("Logout")}),i(20,"Logout"),n()(),e(21,"button",13,0),i(23," External Trigger "),n(),e(24,"ui-dropdown",14),l("itemClick",function(m){return t.onItemClick(m)}),n(),e(25,"ui-dropdown",15),l("itemClick",function(m){return t.onItemClick(m)}),e(26,"button",16),i(27," Hover Me "),n()()(),w(28,x,4,1,"div",17),n(),e(29,"div",18),s(30,"playground-api-table",19)(31,"playground-api-table",20)(32,"playground-api-table",21),n(),e(33,"div",22)(34,"playground-example-viewer",23)(35,"ui-dropdown",5),l("itemClick",function(m){return t.onItemClick(m)}),e(36,"button",6),i(37,"Options"),n()()(),e(38,"playground-example-viewer",24)(39,"ui-dropdown")(40,"button",7),i(41,"Account"),n(),e(42,"div",8)(43,"div",9),i(44,"John Doe"),n(),e(45,"div",10),i(46,"john@example.com"),n()(),e(47,"button",11),l("click",function(){return t.onHtmlItemClick("My Profile")}),i(48,"My Profile"),n(),e(49,"button",11),l("click",function(){return t.onHtmlItemClick("Settings")}),i(50,"Settings"),n(),s(51,"div",12),e(52,"button",11),l("click",function(){return t.onHtmlItemClick("Logout")}),i(53,"Logout"),n()()(),e(54,"playground-example-viewer",25)(55,"div",26)(56,"button",27,1),i(58," Open Menu "),n(),e(59,"ui-dropdown",14),l("itemClick",function(m){return t.onItemClick(m)}),n()()(),e(60,"playground-example-viewer",28)(61,"div",29)(62,"ui-dropdown",30)(63,"button",31),i(64,"Bottom Start"),n()(),e(65,"ui-dropdown",32)(66,"button",31),i(67,"Bottom End"),n()(),e(68,"ui-dropdown",33)(69,"button",31),i(70,"Top Start"),n()(),e(71,"ui-dropdown",34)(72,"button",31),i(73,"Top End"),n()()()(),e(74,"playground-example-viewer",35)(75,"ui-dropdown",15),l("itemClick",function(m){return t.onItemClick(m)}),e(76,"button",7),i(77,"Hover Me"),n()()()()()),c&2){let p=g(22),m=g(57);r("tags",C(24,E))("apiReference",!0)("examples",!0),o(3),r("items",t.items()),o(21),r("externalTrigger",p)("items",t.items()),o(),r("items",t.items()),o(3),v(t.lastClicked()?28:-1),o(2),r("properties",t.dropdownInputs),o(),r("properties",t.dropdownOutputs),o(),r("properties",t.iDropdownItemProps),o(2),r("code",t.snippets.basic),o(),r("items",t.items()),o(3),r("code",t.snippets.htmlContent),o(16),r("code",t.snippets.externalTrigger),o(5),r("externalTrigger",m)("items",t.items()),o(),r("code",t.snippets.placements),o(2),r("items",t.items()),o(3),r("items",t.items()),o(3),r("items",t.items()),o(3),r("items",t.items()),o(3),r("code",t.snippets.hover),o(),r("items",t.items())}},dependencies:[_,k,h,D],styles:[".demo-section[_ngcontent-%COMP%]{border:1px solid #eee;padding:30px;border-radius:12px;background:#fcfcfc}"],changeDetection:0})}}return d})();export{N as DropdownDemoComponent};
