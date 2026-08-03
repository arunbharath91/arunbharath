import {N}from'./chunk-BgqfbpE3.js';import {P as P$1}from'./chunk-BGLIRIT3.js';import {h}from'./chunk-B-KMdjOY.js';import {r as rn}from'./chunk-CCYOOI3R.js';import {H as He,G as GE,x as xi,N as Ni,m as mT,X as Xc,n as nh,Y as Yp,K as vD,v as TD,Z as Zp,ad as kT,h as hI,S as ID,F as CD,a1 as FD,i as Ch}from'./main-ZIE2MMIM.js';var M=[{title:"Basic Usage",description:"Simple dropdown with items array binding.",code:`import { Component } from '@angular/core';
import { DropdownComponent, IDropdownItem } from '@arun-bharath-ui/cmp-ui';

@Component({
  standalone: true,
  imports: [DropdownComponent],
  template: \`
    <ui-dropdown [items]="items" (itemClick)="onItemClick($event)">
      <button trigger>User Menu</button>
    </ui-dropdown>
  \`,
})
export class BasicDemo {
  items: IDropdownItem[] = [
    { label: 'Profile', icon: 'bi bi-person', value: 'profile' },
    { label: 'Settings', icon: 'bi bi-gear', value: 'settings' },
    { divider: true, label: '' },
    { label: 'Logout', icon: 'bi bi-box-arrow-right', value: 'logout' },
  ];

  onItemClick(item: IDropdownItem): void {
    console.log('Clicked:', item);
  }
}`},{title:"With Icons",description:"Add icons to menu items using Bootstrap Icons or Font Awesome.",code:`items: IDropdownItem[] = [
  { label: 'Edit', icon: 'bi bi-pencil', value: 'edit' },
  { label: 'Duplicate', icon: 'bi bi-files', value: 'duplicate' },
  { label: 'Archive', icon: 'bi bi-archive', value: 'archive' },
  { divider: true, label: '' },
  { label: 'Delete', icon: 'bi bi-trash', value: 'delete' },
];`,language:"typescript"},{title:"Disabled Items",description:"Disable specific menu items.",code:`items: IDropdownItem[] = [
  { label: 'Available Action', value: 'available' },
  { label: 'Disabled Action', value: 'disabled', disabled: true },
  { label: 'Another Action', value: 'another' },
];`,language:"typescript"},{title:"Placement Options",description:"Control dropdown position relative to the trigger.",code:`<!-- Bottom start (default) -->
<ui-dropdown [items]="items" placement="bottom-start">
  <button trigger>Bottom Start</button>
</ui-dropdown>

<!-- Bottom end -->
<ui-dropdown [items]="items" placement="bottom-end">
  <button trigger>Bottom End</button>
</ui-dropdown>

<!-- Top start -->
<ui-dropdown [items]="items" placement="top-start">
  <button trigger>Top Start</button>
</ui-dropdown>

<!-- Top end -->
<ui-dropdown [items]="items" placement="top-end">
  <button trigger>Top End</button>
</ui-dropdown>`,language:"html"},{title:"Hover Trigger",description:"Open dropdown on hover instead of click.",code:`<ui-dropdown [items]="items" trigger="hover">
  <button trigger>Hover Me</button>
</ui-dropdown>`,language:"html"},{title:"Custom Content",description:"Project custom HTML content instead of using items array.",code:`<ui-dropdown>
  <button trigger>Custom Content</button>
  
  <div class="custom-content">
    <h4>Custom Header</h4>
    <p>Any HTML content here</p>
    <button (click)="handleAction()">Custom Action</button>
  </div>
</ui-dropdown>`,language:"html"},{title:"External Trigger",description:"Control dropdown from an external button using template reference.",code:`<button #externalBtn>External Trigger</button>

<ui-dropdown 
  [items]="items" 
  [externalTrigger]="externalBtn"
  (itemClick)="onItemClick($event)"
/>`,language:"html"},{title:"Match Trigger Width",description:"Make dropdown width match the trigger element.",code:`<ui-dropdown 
  [items]="items" 
  [matchTriggerWidth]="true"
>
  <button trigger style="width: 300px;">
    Wide Trigger Button
  </button>
</ui-dropdown>`,language:"html"},{title:"Programmatic Control",description:"Control dropdown open state programmatically.",code:`import { Component, signal } from '@angular/core';

@Component({
  template: \`
    <button (click)="isOpen.set(!isOpen())">
      Toggle Dropdown
    </button>

    <ui-dropdown 
      [items]="items"
      [(isOpen)]="isOpen"
    >
      <button trigger>Controlled Dropdown</button>
    </ui-dropdown>
  \`,
})
export class ControlledDemo {
  isOpen = signal(false);
  items: IDropdownItem[] = [/* ... */];
}`},{title:"Global Configuration (Config Token)",description:"Configure dropdown behavior globally using DROPDOWN_CONFIG token.",code:`// app.config.ts
import { ApplicationConfig } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { DROPDOWN_CONFIG } from '@arun-bharath-ui/cmp-ui';

export const appConfig: ApplicationConfig = {
  providers: [
    {
      provide: DROPDOWN_CONFIG,
      useFactory: (overlay: Overlay) => ({
        // Close dropdown when scrolling
        scrollStrategyFactory: () => overlay.scrollStrategies.close(),
        // Add backdrop by default
        hasBackdrop: true,
        backdropClass: 'cdk-overlay-transparent-backdrop',
        // Dispose overlay on close for better memory management
        disposeOnClose: true,
      }),
      deps: [Overlay],
    },
  ],
};

// Now all dropdowns in the app use this configuration!`},{title:"Component-Level Configuration",description:"Override configuration for a specific component tree.",code:`import { Component } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { DROPDOWN_CONFIG, DropdownComponent } from '@arun-bharath-ui/cmp-ui';

@Component({
  standalone: true,
  imports: [DropdownComponent],
  providers: [
    {
      provide: DROPDOWN_CONFIG,
      useFactory: (overlay: Overlay) => ({
        scrollStrategyFactory: () => overlay.scrollStrategies.block(),
        hasBackdrop: true,
      }),
      deps: [Overlay],
    },
  ],
  template: \`
    <ui-dropdown [items]="items">
      <button trigger>Dropdown (Blocks Scroll)</button>
    </ui-dropdown>
  \`,
})
export class FeatureComponent {
  items = [/* ... */];
}`},{title:"Custom Service - Close on Scroll",description:"Create a custom service to change scroll behavior (closes dropdown when scrolling).",code:`// close-on-scroll-dropdown.service.ts
import { Injectable, inject } from '@angular/core';
import { Overlay, ScrollStrategy } from '@angular/cdk/overlay';
import { DropdownOverlayService } from '@arun-bharath-ui/cmp-ui';

@Injectable()
export class CloseOnScrollDropdownService extends DropdownOverlayService {
  protected override getScrollStrategy(): ScrollStrategy {
    // Close dropdown when any scrolling occurs
    return inject(Overlay).scrollStrategies.close();
  }
}

// Usage in component
@Component({
  standalone: true,
  imports: [DropdownComponent],
  providers: [
    { provide: DropdownOverlayService, useClass: CloseOnScrollDropdownService }
  ],
  template: \`
    <ui-dropdown [items]="items">
      <button trigger>Dropdown (Closes on Scroll)</button>
    </ui-dropdown>
  \`,
})
export class MyComponent {
  items = [/* ... */];
}`},{title:"Custom Service - Block Scrolling",description:"Create a custom service that blocks scrolling while dropdown is open.",code:`// block-scroll-dropdown.service.ts
import { Injectable, inject } from '@angular/core';
import { Overlay, ScrollStrategy } from '@angular/cdk/overlay';
import { DropdownOverlayService } from '@arun-bharath-ui/cmp-ui';

@Injectable()
export class BlockScrollDropdownService extends DropdownOverlayService {
  protected override getScrollStrategy(): ScrollStrategy {
    // Block all scrolling while dropdown is open
    return inject(Overlay).scrollStrategies.block();
  }
}

// Usage
@Component({
  providers: [
    { provide: DropdownOverlayService, useClass: BlockScrollDropdownService }
  ],
  template: \`<ui-dropdown [items]="items">
    <button trigger>Dropdown (Blocks Scroll)</button>
  </ui-dropdown>\`,
})
export class MyComponent {}`},{title:"Custom Service - Custom Positioning",description:"Override positioning strategy for custom offset and push behavior.",code:`// custom-position-dropdown.service.ts
import { Injectable } from '@angular/core';
import { ConnectedPosition, FlexibleConnectedPositionStrategy } from '@angular/cdk/overlay';
import { DropdownOverlayService } from '@arun-bharath-ui/cmp-ui';

@Injectable()
export class CustomPositionDropdownService extends DropdownOverlayService {
  protected override getPositionStrategy(
    origin: HTMLElement,
    positions: ConnectedPosition[]
  ): FlexibleConnectedPositionStrategy {
    return super.getPositionStrategy(origin, positions)
      .withPush(true)              // Allow pushing to stay in viewport
      .withViewportMargin(20)      // 20px margin from viewport edges
      .withDefaultOffsetX(10)      // 10px horizontal offset
      .withDefaultOffsetY(8);      // 8px vertical offset
  }
}

// Usage
@Component({
  providers: [
    { provide: DropdownOverlayService, useClass: CustomPositionDropdownService }
  ],
  template: \`<ui-dropdown [items]="items">
    <button trigger>Custom Positioned Dropdown</button>
  </ui-dropdown>\`,
})
export class MyComponent {}`},{title:"Custom Service - With Backdrop",description:"Add backdrop and customize overlay configuration.",code:`// backdrop-dropdown.service.ts
import { Injectable } from '@angular/core';
import { OverlayConfig, ScrollStrategy } from '@angular/cdk/overlay';
import { DropdownOverlayService, DropdownOverlayConfig } from '@arun-bharath-ui/cmp-ui';

@Injectable()
export class BackdropDropdownService extends DropdownOverlayService {
  protected override buildOverlayConfig(
    config: DropdownOverlayConfig,
    positionStrategy: any,
    scrollStrategy: ScrollStrategy
  ): OverlayConfig {
    return {
      ...super.buildOverlayConfig(config, positionStrategy, scrollStrategy),
      hasBackdrop: true,
      backdropClass: 'cdk-overlay-dark-backdrop',
    };
  }
}

// Usage
@Component({
  providers: [
    { provide: DropdownOverlayService, useClass: BackdropDropdownService }
  ],
  template: \`<ui-dropdown [items]="items">
    <button trigger>Dropdown with Backdrop</button>
  </ui-dropdown>\`,
})
export class MyComponent {}`},{title:"Custom Service - Analytics Tracking",description:"Track dropdown interactions using lifecycle hooks.",code:`// analytics-dropdown.service.ts
import { Injectable, inject } from '@angular/core';
import { OverlayRef } from '@angular/cdk/overlay';
import { DropdownOverlayService } from '@arun-bharath-ui/cmp-ui';

// Assume you have an analytics service
interface AnalyticsService {
  track(event: string, data?: any): void;
}

@Injectable()
export class AnalyticsDropdownService extends DropdownOverlayService {
  private analytics = inject(AnalyticsService, { optional: true });

  protected override onOverlayCreated(_overlayRef: OverlayRef): void {
    this.analytics?.track('dropdown_opened', {
      timestamp: new Date().toISOString()
    });
  }

  protected override onBeforeDispose(_overlayRef: OverlayRef): void {
    this.analytics?.track('dropdown_closed', {
      timestamp: new Date().toISOString()
    });
  }
}

// Usage
@Component({
  providers: [
    { provide: DropdownOverlayService, useClass: AnalyticsDropdownService }
  ],
  template: \`<ui-dropdown [items]="items" (itemClick)="handleClick($event)">
    <button trigger>Tracked Dropdown</button>
  </ui-dropdown>\`,
})
export class MyComponent {
  handleClick(item: any) {
    // Analytics automatically tracked via service
    console.log('Item clicked:', item);
  }
}`},{title:"Service Architecture Overview",description:"Understanding the dropdown service-based architecture.",code:`/**
 * Dropdown Service Architecture
 * 
 * The dropdown component uses a service-based architecture for CDK customization:
 * 
 * 1. DEFAULT BEHAVIOR (No configuration needed)
 *    - Component works out of the box
 *    - Uses DropdownOverlayService automatically
 *    - Default scroll strategy: reposition on scroll
 * 
 * 2. SIMPLE CUSTOMIZATION (Config Token)
 *    - Use DROPDOWN_CONFIG injection token
 *    - Configure scroll strategy, backdrop, etc.
 *    - No service creation needed
 * 
 * 3. ADVANCED CUSTOMIZATION (Custom Service)
 *    - Extend DropdownOverlayService
 *    - Override specific methods
 *    - Full control over CDK behavior
 * 
 * Extension Points:
 * - getScrollStrategy()      - Control scroll behavior
 * - getPositionStrategy()    - Control positioning
 * - buildOverlayConfig()     - Customize overlay config
 * - onOverlayCreated()       - Lifecycle hook after creation
 * - onBeforeDispose()        - Lifecycle hook before disposal
 */

// Example: Extending the service
@Injectable()
export class MyCustomDropdownService extends DropdownOverlayService {
  // Override only what you need to change
  protected override getScrollStrategy(): ScrollStrategy {
    return inject(Overlay).scrollStrategies.close();
  }
}

// Provide in component
@Component({
  providers: [
    { provide: DropdownOverlayService, useClass: MyCustomDropdownService }
  ]
})
export class MyComponent {}`}];var P=()=>["Menu","Dropdown","Overlay","Navigation"],E=(a,s)=>s.title;function I(a,s){if(a&1&&(Ni(0,"p",9),mT(1,"Last clicked: "),Ni(2,"strong"),mT(3),Xc()()),a&2){let l=FD();hI(3),Ch(l.lastClicked());}}function T(a,s){if(a&1&&Yp(0,"playground-example-viewer",35),a&2){let l=s.$implicit;Zp("title",l.title)("description",l.description)("code",l.code)("language",l.language??"typescript");}}var H=(()=>{class a{constructor(){this.examples=M,this.userMenuItems=[{label:"My Profile",icon:"bi bi-person",value:"profile"},{label:"Settings",icon:"bi bi-gear",value:"settings"},{label:"Billing",icon:"bi bi-credit-card",value:"billing"},{divider:true,label:""},{label:"Logout",icon:"bi bi-box-arrow-right",value:"logout"}],this.actionItems=[{label:"Edit",icon:"bi bi-pencil",value:"edit"},{label:"Duplicate",icon:"bi bi-files",value:"duplicate"},{label:"Archive",icon:"bi bi-archive",value:"archive"},{divider:true,label:""},{label:"Delete",icon:"bi bi-trash",value:"delete"}],this.disabledItems=[{label:"Available Action",value:"available"},{label:"Disabled Action",value:"disabled",disabled:true},{label:"Another Action",value:"another"}],this.lastClicked=He(null),this.apiInputs=[{name:"items",type:"IDropdownItem[]",default:"[]",description:"Array of items to display. Supports dividers via { divider: true }."},{name:"trigger",type:"DropdownTriggerType",default:"'click'",description:"How the dropdown is triggered: 'click' | 'hover'."},{name:"placement",type:"DropdownPlacementType",default:"'bottom-start'",description:"Dropdown position: 'bottom-start' | 'bottom-end' | 'top-start' | 'top-end'."},{name:"autoClose",type:"boolean",default:"true",description:"Whether to close the menu when an item is clicked."},{name:"externalTrigger",type:"HTMLElement | null",default:"null",description:"Pass a template reference to trigger from an external button."},{name:"isOpen",type:"boolean (Model)",default:"false",description:'Controls the open/closed state. Supports two-way binding [(isOpen)]="value".'},{name:"matchTriggerWidth",type:"boolean",default:"false",description:"Make dropdown width match the trigger element width."},{name:"panelClass",type:"string | string[]",default:"[]",description:"Additional CSS classes for the dropdown panel."}],this.apiOutputs=[{name:"itemClick",type:"OutputEmitterRef<IDropdownItem>",description:"Emitted when a non-disabled, non-divider item is clicked."},{name:"closed",type:"OutputEmitterRef<void>",description:"Emitted when the dropdown is closed."},{name:"isOpenChange",type:"OutputEmitterRef<boolean>",description:"Emitted when the open state changes."}],this.itemProps=[{name:"label",type:"string",default:"\u2014",description:"Display text for the item."},{name:"value",type:"string | number | boolean",default:"''",description:"Optional value associated with the item."},{name:"icon",type:"string",default:"''",description:"Optional icon class (e.g., Bootstrap Icons)."},{name:"disabled",type:"boolean",default:"false",description:"Disables the item."},{name:"divider",type:"boolean",default:"false",description:"Renders a horizontal divider instead of an item."}],this.dropdownTokens=[{localVar:"--ui-dropdown-menu-bg",mapsTo:"var(--cmp-surface)",description:"Dropdown menu background",type:"color"},{localVar:"--ui-dropdown-menu-border-color",mapsTo:"var(--cmp-border)",description:"Dropdown menu border color",type:"color"},{localVar:"--ui-dropdown-menu-radius",mapsTo:"var(--cmp-radius)",description:"Dropdown menu corner radius",type:"radius"},{localVar:"--ui-dropdown-menu-shadow",mapsTo:"var(--cmp-shadow-lg)",description:"Dropdown menu box shadow",type:"value"},{localVar:"--ui-dropdown-item-color",mapsTo:"var(--cmp-text)",description:"Menu item text color",type:"color"},{localVar:"--ui-dropdown-item-bg-hover",mapsTo:"var(--cmp-surface-variant)",description:"Menu item background on hover",type:"color"},{localVar:"--ui-dropdown-item-color-disabled",mapsTo:"var(--cmp-text-muted)",description:"Disabled item text color",type:"color"},{localVar:"--ui-dropdown-divider-color",mapsTo:"var(--cmp-border-light)",description:"Divider separator color",type:"color"},{localVar:"--ui-dropdown-item-font-size",mapsTo:"var(--cmp-font-sm)",description:"Menu item font size",type:"value"}],this.dropdownOverrideSnippet=`// Customize the Dropdown
ui-dropdown {
  --ui-dropdown-menu-bg: var(--cmp-gray-900);
  --ui-dropdown-menu-border-color: var(--cmp-gray-700);
  --ui-dropdown-item-color: var(--cmp-white);
  --ui-dropdown-item-bg-hover: var(--cmp-gray-800);
  --ui-dropdown-menu-radius: var(--cmp-radius-lg);
}`;}onItemClick(l){this.lastClicked.set(l.label),console.log("Clicked:",l);}static{this.\u0275fac=function(m){return new(m||a)};}static{this.\u0275cmp=GE({type:a,selectors:[["playground-dropdown-demo"]],decls:173,vars:19,consts:[["title","Dropdown","description","Flexible dropdown menu component with CDK Overlay positioning, custom triggers, and rich content support.",3,"tags","apiReference","examples","theming"],["demo","",1,"dropdown-demo-preview"],[1,"demo-section"],[1,"demo-section-label"],[1,"demo-section-desc"],[3,"itemClick","items"],["trigger","",1,"demo-btn"],[1,"bi","bi-person-circle"],[1,"bi","bi-chevron-down"],[1,"demo-feedback"],["trigger","",1,"demo-btn","demo-btn-outline"],[1,"bi","bi-three-dots-vertical"],[1,"placement-grid"],["placement","bottom-start",3,"items"],["trigger","",1,"demo-btn","demo-btn-sm"],["placement","bottom-end",3,"items"],["placement","top-start",3,"items"],["placement","top-end",3,"items"],["trigger","hover",3,"items"],[1,"custom-dropdown-content"],[1,"custom-dropdown-header"],[1,"custom-dropdown-body"],[1,"custom-dropdown-item",3,"click"],[1,"bi","bi-star"],[1,"bi","bi-heart"],["api",""],[1,"api-heading"],[1,"api-description"],["title","Inputs",3,"properties"],["title","Outputs",3,"properties"],[1,"api-heading",2,"margin-top","40px"],["title","Item Properties",3,"properties"],[1,"service-architecture-info"],[1,"architecture-level"],["examples",""],[3,"title","description","code","language"],["theming",""],["title","Dropdown CSS Custom Properties",3,"tokens","overrideSnippet"]],template:function(m,n){m&1&&(Ni(0,"playground-demo-page-template",0)(1,"div",1)(2,"section",2)(3,"p",3),mT(4,"Basic Usage"),Xc(),Ni(5,"p",4),mT(6," Click the button to open a dropdown menu with items and dividers. "),Xc(),Ni(7,"ui-dropdown",5),nh("itemClick",function(p){return n.onItemClick(p)}),Ni(8,"button",6),Yp(9,"i",7),mT(10," User Menu "),Yp(11,"i",8),Xc()(),vD(12,I,4,1,"p",9),Xc(),Ni(13,"section",2)(14,"p",3),mT(15,"With Icons"),Xc(),Ni(16,"p",4),mT(17," Add icons to menu items using Bootstrap Icons or Font Awesome. "),Xc(),Ni(18,"ui-dropdown",5),nh("itemClick",function(p){return n.onItemClick(p)}),Ni(19,"button",10),Yp(20,"i",11),mT(21," Actions "),Xc()()(),Ni(22,"section",2)(23,"p",3),mT(24,"Disabled Items"),Xc(),Ni(25,"p",4),mT(26," Disable specific menu items by setting "),Ni(27,"code"),mT(28,"disabled: true"),Xc(),mT(29,". "),Xc(),Ni(30,"ui-dropdown",5),nh("itemClick",function(p){return n.onItemClick(p)}),Ni(31,"button",6),mT(32," Menu with Disabled Item "),Xc()()(),Ni(33,"section",2)(34,"p",3),mT(35,"Placement Options"),Xc(),Ni(36,"p",4),mT(37," Control where the dropdown appears relative to the trigger: bottom-start, bottom-end, top-start, top-end. "),Xc(),Ni(38,"div",12)(39,"ui-dropdown",13)(40,"button",14),mT(41,"Bottom Start"),Xc()(),Ni(42,"ui-dropdown",15)(43,"button",14),mT(44,"Bottom End"),Xc()(),Ni(45,"ui-dropdown",16)(46,"button",14),mT(47,"Top Start"),Xc()(),Ni(48,"ui-dropdown",17)(49,"button",14),mT(50,"Top End"),Xc()()()(),Ni(51,"section",2)(52,"p",3),mT(53,"Hover Trigger"),Xc(),Ni(54,"p",4),mT(55," Set "),Ni(56,"code"),mT(57,'trigger="hover"'),Xc(),mT(58," to open the dropdown on mouse hover. "),Xc(),Ni(59,"ui-dropdown",18)(60,"button",6),mT(61," Hover Me "),Xc()()(),Ni(62,"section",2)(63,"p",3),mT(64,"Custom Content"),Xc(),Ni(65,"p",4),mT(66," Project custom HTML content instead of using the "),Ni(67,"code"),mT(68,"[items]"),Xc(),mT(69," binding. "),Xc(),Ni(70,"ui-dropdown")(71,"button",6),mT(72," Custom Content "),Xc(),Ni(73,"div",19)(74,"div",20)(75,"h4"),mT(76,"Custom Header"),Xc(),Ni(77,"p"),mT(78,"You can put any HTML here"),Xc()(),Ni(79,"div",21)(80,"button",22),nh("click",function(){return n.onItemClick({label:"Custom Action 1",value:"c1"})}),Yp(81,"i",23),mT(82," Custom Action 1 "),Xc(),Ni(83,"button",22),nh("click",function(){return n.onItemClick({label:"Custom Action 2",value:"c2"})}),Yp(84,"i",24),mT(85," Custom Action 2 "),Xc()()()()()(),Ni(86,"div",25)(87,"h2",26),mT(88,"DropdownComponent "),Ni(89,"code"),mT(90,"ui-dropdown"),Xc()(),Ni(91,"p",27),mT(92," The dropdown component uses a service-based architecture for CDK customization. It works out of the box with sensible defaults, but can be customized at multiple levels. "),Xc(),Yp(93,"playground-api-table",28)(94,"playground-api-table",29),Ni(95,"h2",30),mT(96,"IDropdownItem"),Xc(),Yp(97,"playground-api-table",31),Ni(98,"h2",30),mT(99,"Service Architecture"),Xc(),Ni(100,"div",32)(101,"p"),mT(102,"The dropdown uses "),Ni(103,"code"),mT(104,"DropdownOverlayService"),Xc(),mT(105," to manage CDK overlay behavior. You can customize it at three levels:"),Xc(),Ni(106,"div",33)(107,"h3"),mT(108,"1. Default (No Configuration)"),Xc(),Ni(109,"p"),mT(110,"Component works immediately with sensible defaults:"),Xc(),Ni(111,"ul")(112,"li"),mT(113,"Scroll strategy: Reposition on scroll"),Xc(),Ni(114,"li"),mT(115,"No backdrop"),Xc(),Ni(116,"li"),mT(117,"Overlay reused for performance"),Xc()()(),Ni(118,"div",33)(119,"h3"),mT(120,"2. Config Token (Simple Customization)"),Xc(),Ni(121,"p"),mT(122,"Use "),Ni(123,"code"),mT(124,"DROPDOWN_CONFIG"),Xc(),mT(125," injection token for simple customization:"),Xc(),Ni(126,"ul")(127,"li"),mT(128,"Change scroll strategy (close, block, noop, reposition)"),Xc(),Ni(129,"li"),mT(130,"Add backdrop"),Xc(),Ni(131,"li"),mT(132,"Configure disposal behavior"),Xc()(),Ni(133,"p")(134,"em"),mT(135,'See examples: "Global Configuration" and "Component-Level Configuration"'),Xc()()(),Ni(136,"div",33)(137,"h3"),mT(138,"3. Custom Service (Advanced)"),Xc(),Ni(139,"p"),mT(140,"Extend "),Ni(141,"code"),mT(142,"DropdownOverlayService"),Xc(),mT(143," for full control:"),Xc(),Ni(144,"ul")(145,"li")(146,"code"),mT(147,"getScrollStrategy()"),Xc(),mT(148," - Control scroll behavior"),Xc(),Ni(149,"li")(150,"code"),mT(151,"getPositionStrategy()"),Xc(),mT(152," - Customize positioning"),Xc(),Ni(153,"li")(154,"code"),mT(155,"buildOverlayConfig()"),Xc(),mT(156," - Modify overlay config"),Xc(),Ni(157,"li")(158,"code"),mT(159,"onOverlayCreated()"),Xc(),mT(160," - Lifecycle hook after creation"),Xc(),Ni(161,"li")(162,"code"),mT(163,"onBeforeDispose()"),Xc(),mT(164," - Lifecycle hook before disposal"),Xc()(),Ni(165,"p")(166,"em"),mT(167,'See examples: "Custom Service" sections'),Xc()()()()(),Ni(168,"div",34),TD(169,T,1,4,"playground-example-viewer",35,E),Xc(),Ni(171,"div",36),Yp(172,"playground-token-table",37),Xc()()),m&2&&(Zp("tags",kT(18,P))("apiReference",true)("examples",true)("theming",true),hI(7),Zp("items",n.userMenuItems),hI(5),ID(n.lastClicked()?12:-1),hI(6),Zp("items",n.actionItems),hI(12),Zp("items",n.disabledItems),hI(9),Zp("items",n.userMenuItems),hI(3),Zp("items",n.userMenuItems),hI(3),Zp("items",n.userMenuItems),hI(3),Zp("items",n.userMenuItems),hI(11),Zp("items",n.userMenuItems),hI(34),Zp("properties",n.apiInputs),hI(),Zp("properties",n.apiOutputs),hI(3),Zp("properties",n.itemProps),hI(72),CD(n.examples),hI(3),Zp("tokens",n.dropdownTokens)("overrideSnippet",n.dropdownOverrideSnippet));},dependencies:[rn,P$1,h,N,xi],styles:[".dropdown-demo-preview[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:var(--cmp-spacing-6)}.demo-section[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:var(--cmp-spacing-3)}.demo-section-label[_ngcontent-%COMP%]{font-size:var(--cmp-font-lg);font-weight:var(--cmp-font-semibold);color:var(--cmp-text);margin:0}.demo-section-desc[_ngcontent-%COMP%]{font-size:var(--cmp-font-sm);color:var(--cmp-text-secondary);margin:0;line-height:1.6}.demo-section-desc[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:var(--cmp-code-bg);color:var(--cmp-code-text);padding:2px 6px;border-radius:var(--cmp-radius-sm);font-size:.9em;font-family:Courier New,monospace}.demo-btn[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:var(--cmp-spacing-2);padding:var(--cmp-spacing-2) var(--cmp-spacing-4);background:var(--cmp-primary);color:var(--cmp-white);border:none;border-radius:var(--cmp-radius);font-size:var(--cmp-font-sm);font-weight:var(--cmp-font-medium);cursor:pointer;transition:all .2s ease}.demo-btn[_ngcontent-%COMP%]:hover{background:var(--cmp-primary-hover)}.demo-btn-outline[_ngcontent-%COMP%]{background:transparent;color:var(--cmp-primary);border:1px solid var(--cmp-primary)}.demo-btn-outline[_ngcontent-%COMP%]:hover{background:var(--cmp-primary-soft)}.demo-btn-sm[_ngcontent-%COMP%]{padding:var(--cmp-spacing-1) var(--cmp-spacing-3);font-size:var(--cmp-font-xs)}.demo-feedback[_ngcontent-%COMP%]{margin:var(--cmp-spacing-2) 0 0 0;padding:var(--cmp-spacing-2) var(--cmp-spacing-3);background:var(--cmp-success-soft);border:1px solid var(--cmp-success-border);border-radius:var(--cmp-radius);font-size:var(--cmp-font-sm);color:var(--cmp-success)}.placement-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:var(--cmp-spacing-3)}.custom-dropdown-content[_ngcontent-%COMP%]{padding:var(--cmp-spacing-3);min-width:250px}.custom-dropdown-header[_ngcontent-%COMP%]{padding-bottom:var(--cmp-spacing-3);border-bottom:1px solid var(--cmp-border-light);margin-bottom:var(--cmp-spacing-3)}.custom-dropdown-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin:0 0 var(--cmp-spacing-1) 0;font-size:var(--cmp-font-base);font-weight:var(--cmp-font-semibold);color:var(--cmp-text)}.custom-dropdown-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;font-size:var(--cmp-font-sm);color:var(--cmp-text-secondary)}.custom-dropdown-body[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:var(--cmp-spacing-1)}.custom-dropdown-item[_ngcontent-%COMP%]{display:flex;align-items:center;gap:var(--cmp-spacing-2);padding:var(--cmp-spacing-2) var(--cmp-spacing-3);background:transparent;border:none;border-radius:var(--cmp-radius-sm);font-size:var(--cmp-font-sm);color:var(--cmp-text);cursor:pointer;transition:background .2s ease;text-align:left}.custom-dropdown-item[_ngcontent-%COMP%]:hover{background:var(--cmp-surface-variant)}.custom-dropdown-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:1.1em}.api-heading[_ngcontent-%COMP%]{font-size:var(--cmp-font-xl);font-weight:var(--cmp-font-semibold);color:var(--cmp-text);margin:var(--cmp-spacing-4) 0 var(--cmp-spacing-3) 0}.api-heading[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:var(--cmp-code-bg);color:var(--cmp-code-text);padding:4px 8px;border-radius:var(--cmp-radius-sm);font-size:.85em;font-family:Courier New,monospace;font-weight:var(--cmp-font-normal)}.api-description[_ngcontent-%COMP%]{font-size:var(--cmp-font-base);color:var(--cmp-text-secondary);margin:var(--cmp-spacing-2) 0 var(--cmp-spacing-4) 0;line-height:1.6}.service-architecture-info[_ngcontent-%COMP%]{background:var(--cmp-surface-variant);border:1px solid var(--cmp-border);border-radius:var(--cmp-radius);padding:var(--cmp-spacing-4);margin-top:var(--cmp-spacing-3)}.service-architecture-info[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{margin:0 0 var(--cmp-spacing-4) 0;font-size:var(--cmp-font-base);color:var(--cmp-text);line-height:1.6}.service-architecture-info[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:var(--cmp-code-bg);color:var(--cmp-code-text);padding:2px 6px;border-radius:var(--cmp-radius-sm);font-size:.9em;font-family:Courier New,monospace}.architecture-level[_ngcontent-%COMP%]{background:var(--cmp-surface);border:1px solid var(--cmp-border-light);border-radius:var(--cmp-radius);padding:var(--cmp-spacing-3);margin-bottom:var(--cmp-spacing-3)}.architecture-level[_ngcontent-%COMP%]:last-child{margin-bottom:0}.architecture-level[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:var(--cmp-font-lg);font-weight:var(--cmp-font-semibold);color:var(--cmp-primary);margin:0 0 var(--cmp-spacing-2) 0}.architecture-level[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:var(--cmp-font-sm);color:var(--cmp-text-secondary);margin:0 0 var(--cmp-spacing-2) 0;line-height:1.6}.architecture-level[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:var(--cmp-code-bg);color:var(--cmp-code-text);padding:2px 6px;border-radius:var(--cmp-radius-sm);font-size:.9em;font-family:Courier New,monospace}.architecture-level[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:0;padding-left:var(--cmp-spacing-4);font-size:var(--cmp-font-sm);color:var(--cmp-text);line-height:1.8}.architecture-level[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:var(--cmp-spacing-1)}.architecture-level[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:var(--cmp-code-bg);color:var(--cmp-code-text);padding:2px 6px;border-radius:var(--cmp-radius-sm);font-size:.9em;font-family:Courier New,monospace}.architecture-level[_ngcontent-%COMP%]   em[_ngcontent-%COMP%]{display:block;margin-top:var(--cmp-spacing-2);font-size:var(--cmp-font-xs);color:var(--cmp-text-muted);font-style:italic}"]});}}return a})();export{H as DropdownDemoComponent};