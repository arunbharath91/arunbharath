import {N}from'./chunk-BgqfbpE3.js';import {P}from'./chunk-BGLIRIT3.js';import {h}from'./chunk-B-KMdjOY.js';import {r as rn}from'./chunk-CCYOOI3R.js';import {G as GE,c2 as NL,N as Ni,m as mT,X as Xc,n as nh,Y as Yp,Z as Zp,ad as kT,h as hI}from'./main-ZIE2MMIM.js';var f=()=>["Navigation","Tree","Hierarchical"],_=(()=>{class s{constructor(){this.deepNestedItems=[{id:"level-1-item-1",label:"Level 1 - Item 1",icon:"folder",children:[{id:"level-2-item-1",label:"Level 2 - Item 1",link:"/l1/l2-1"},{id:"level-2-item-2",label:"Level 2 - Item 2",icon:"folder",children:[{id:"level-3-item-1",label:"Level 3 - Item 1",link:"/l1/l2-2/l3-1"},{id:"level-3-item-2",label:"Level 3 - Item 2",icon:"folder",children:[{id:"level-4-item-1",label:"Level 4 - Item 1",link:"/l1/l2-2/l3-2/l4-1"},{id:"level-4-item-2",label:"Level 4 - Item 2",link:"/l1/l2-2/l3-2/l4-2"},{id:"level-4-item-3",label:"Level 4 - Item 3",link:"/l1/l2-2/l3-2/l4-3"}]},{id:"level-3-item-3",label:"Level 3 - Item 3",link:"/l1/l2-2/l3-3"}]},{id:"level-2-item-3",label:"Level 2 - Item 3",link:"/l1/l2-3"}]},{id:"level-1-item-2",label:"Level 1 - Item 2",icon:"folder",children:[{id:"level-2-item-4",label:"Level 2 - Item 4",link:"/l1-2/l2-4"},{id:"level-2-item-5",label:"Level 2 - Item 5",link:"/l1-2/l2-5"}]},{id:"level-1-item-3",label:"Level 1 - Item 3",link:"/l1-3"}],this.adminMenuItems=[{id:"dashboard",label:"Dashboard",icon:"dashboard",link:"/admin/dashboard"},{id:"users",label:"Users",icon:"people",badge:142,badgeVariant:"primary",children:[{id:"all-users",label:"All Users",link:"/admin/users/all"},{id:"active-users",label:"Active Users",badge:98,link:"/admin/users/active"},{id:"pending-users",label:"Pending Approval",badge:12,badgeVariant:"warning",link:"/admin/users/pending"}]},{id:"content",label:"Content",icon:"article",children:[{id:"posts",label:"Posts",badge:45,link:"/admin/content/posts"},{id:"pages",label:"Pages",badge:12,link:"/admin/content/pages"},{id:"media",label:"Media Library",link:"/admin/content/media"}]},{id:"settings",label:"Settings",icon:"settings",children:[{id:"general",label:"General",link:"/admin/settings/general"},{id:"security",label:"Security",link:"/admin/settings/security"},{id:"notifications",label:"Notifications",badge:3,badgeVariant:"danger",link:"/admin/settings/notifications"}]}],this.fileTreeItems=[{id:"src",label:"src",icon:"folder",expanded:true,children:[{id:"app",label:"app",icon:"folder",children:[{id:"app-component",label:"app.component.ts",icon:"description"},{id:"app-module",label:"app.module.ts",icon:"description"}]},{id:"assets",label:"assets",icon:"folder",children:[{id:"images",label:"images",icon:"folder"},{id:"styles",label:"styles",icon:"folder"}]},{id:"index",label:"index.html",icon:"description"},{id:"main",label:"main.ts",icon:"description"}]},{id:"node-modules",label:"node_modules",icon:"folder",disabled:true},{id:"package",label:"package.json",icon:"description"},{id:"readme",label:"README.md",icon:"description"}],this.minimalNavItems=[{id:"home",label:"Home",link:"/home"},{id:"about",label:"About",link:"/about"},{id:"services",label:"Services",link:"/services"},{id:"contact",label:"Contact",link:"/contact"}],this.customIconItems=[{id:"dashboard",label:"Dashboard",iconSvg:'<svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor"><path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/></svg>',link:"/dashboard"},{id:"users-custom",label:"Users",iconSvg:'<svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor"><path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/></svg>',badge:24,children:[{id:"all-users-custom",label:"All Users",link:"/users/all"},{id:"active-users-custom",label:"Active",badge:18,link:"/users/active"}]},{id:"settings-custom",label:"Settings",iconSvg:'<svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"/></svg>',link:"/settings"}],this.treeNavProps=[{name:"items",type:"input<ITreeNavItem[]>",description:"Tree data structure"},{name:"variant",type:"input<'default' | 'minimal' | 'pills' | 'bordered' | 'compact'>",description:"Visual variant. Defaults to 'default'."},{name:"layout",type:"input<'vertical' | 'horizontal'>",description:"Layout direction. Defaults to 'vertical'."},{name:"size",type:"input<'sm' | 'md' | 'lg'>",description:"Size. Defaults to 'md'."},{name:"showIcons",type:"input<boolean>",description:"Show icons. Defaults to true."},{name:"showBadges",type:"input<boolean>",description:"Show badges. Defaults to true."},{name:"indentSize",type:"input<number>",description:"Indent size for nested levels in rem. Defaults to 1.5."},{name:"expandIconPosition",type:"input<'left' | 'right'>",description:"Position of expand/collapse icon. Defaults to 'left'."},{name:"expandIconType",type:"input<'chevron' | 'plus' | 'arrow'>",description:"Type of expand/collapse icon. Defaults to 'chevron'."},{name:"selectable",type:"input<boolean>",description:"Items can be selected. Defaults to true."},{name:"expandable",type:"input<boolean>",description:"Groups can expand/collapse. Defaults to true."},{name:"multiSelect",type:"input<boolean>",description:"Allow multiple items to be selected. Defaults to false."},{name:"accordion",type:"input<boolean>",description:"Only one group can be expanded at a time. Defaults to false."},{name:"expandAll",type:"input<boolean>",description:"Expand all groups by default. Defaults to false."},{name:"routerIntegration",type:"input<boolean>",description:"Enable router integration. Defaults to true."},{name:"keyboardNav",type:"input<boolean>",description:"Enable keyboard navigation. Defaults to true."},{name:"itemClick",type:"output<ITreeNavItem>",description:"Emits when item is clicked"},{name:"itemSelect",type:"output<ITreeNavItem>",description:"Emits when item is selected"},{name:"expandChange",type:"output<{ item: ITreeNavItem; expanded: boolean }>",description:"Emits when group is expanded/collapsed"},{name:"selectionChange",type:"output<ITreeNavItem[]>",description:"Emits when selection changes"}],this.itemProps=[{name:"id",type:"string | number?",description:"Unique identifier"},{name:"label",type:"string (required)",description:"Display text"},{name:"icon",type:"string?",description:"Material icon name"},{name:"iconSvg",type:"string?",description:"Custom SVG icon (overrides icon). Use this to pass custom SVG markup for item icons."},{name:"badge",type:"number | string?",description:"Badge content"},{name:"badgeVariant",type:"'primary' | 'success' | 'warning' | 'danger' | 'info'?",description:"Badge variant"},{name:"link",type:"string?",description:"Router link"},{name:"href",type:"string?",description:"External link"},{name:"target",type:"'_blank' | '_self' | '_parent' | '_top'?",description:"Link target"},{name:"children",type:"ITreeNavItem[]?",description:"Nested items"},{name:"expanded",type:"boolean?",description:"Initial expand state"},{name:"selected",type:"boolean?",description:"Initial selected state"},{name:"disabled",type:"boolean?",description:"Disabled state"},{name:"metadata",type:"Record<string, any>?",description:"Custom metadata"},{name:"cssClass",type:"string?",description:"Custom CSS class"}],this.importCode=`
import { TreeNavComponent, ITreeNavItem } from '@arun-bharath-ui/cmp-ui';
  `.trim(),this.basicCode=`
readonly deepNestedItems: ITreeNavItem[] = [
  {
    id: 'level-1-item-1',
    label: 'Level 1 - Item 1',
    icon: 'folder',
    children: [
      { id: 'level-2-item-1', label: 'Level 2 - Item 1', link: '/l1/l2-1' },
      {
        id: 'level-2-item-2',
        label: 'Level 2 - Item 2',
        icon: 'folder',
        children: [
          { id: 'level-3-item-1', label: 'Level 3 - Item 1', link: '/l1/l2-2/l3-1' },
          {
            id: 'level-3-item-2',
            label: 'Level 3 - Item 2',
            icon: 'folder',
            children: [
              { id: 'level-4-item-1', label: 'Level 4 - Item 1', link: '/l1/l2-2/l3-2/l4-1' },
              { id: 'level-4-item-2', label: 'Level 4 - Item 2', link: '/l1/l2-2/l3-2/l4-2' },
              { id: 'level-4-item-3', label: 'Level 4 - Item 3', link: '/l1/l2-2/l3-2/l4-3' },
            ],
          },
          { id: 'level-3-item-3', label: 'Level 3 - Item 3', link: '/l1/l2-2/l3-3' },
        ],
      },
      { id: 'level-2-item-3', label: 'Level 2 - Item 3', link: '/l1/l2-3' },
    ],
  },
];

<ui-tree-nav [items]="deepNestedItems" />
  `.trim(),this.adminCode=`
<ui-tree-nav 
  [items]="adminMenuItems"
  variant="default"
  [accordion]="true"
  (itemClick)="onItemClick($event)"
/>
  `.trim(),this.fileExplorerCode=`
<ui-tree-nav 
  [items]="fileTreeItems"
  variant="minimal"
  [routerIntegration]="false"
  (itemClick)="onItemClick($event)"
/>
  `.trim(),this.variantsCode=`
<!-- Default variant -->
<ui-tree-nav [items]="items" variant="default" />

<!-- Minimal variant -->
<ui-tree-nav [items]="items" variant="minimal" />

<!-- Pills variant -->
<ui-tree-nav [items]="items" variant="pills" />

<!-- Bordered variant -->
<ui-tree-nav [items]="items" variant="bordered" />

<!-- Compact variant -->
<ui-tree-nav [items]="items" variant="compact" />
  `.trim(),this.accordionCode=`
<!-- Accordion mode - only one group open at a time -->
<ui-tree-nav 
  [items]="items" 
  [accordion]="true" 
/>
  `.trim(),this.eventsCode=`
<ui-tree-nav 
  [items]="items"
  (itemClick)="onItemClick($event)"
  (itemSelect)="onItemSelect($event)"
  (expandChange)="onExpandChange($event)"
  (selectionChange)="onSelectionChange($event)"
/>

onItemClick(item: ITreeNavItem): void {
  console.log('Item clicked:', item);
}

onItemSelect(item: ITreeNavItem): void {
  console.log('Item selected:', item);
}

onExpandChange(event: { item: ITreeNavItem; expanded: boolean }): void {
  console.log('Expand changed:', event);
}

onSelectionChange(items: ITreeNavItem[]): void {
  console.log('Selection changed:', items);
}
  `.trim(),this.iconCustomizationCode=`
<!-- Chevron icon on the left (default) -->
<ui-tree-nav 
  [items]="items"
  expandIconType="chevron"
  expandIconPosition="left"
/>

<!-- Plus icon on the right -->
<ui-tree-nav 
  [items]="items"
  expandIconType="plus"
  expandIconPosition="right"
/>

<!-- Arrow icon on the left -->
<ui-tree-nav 
  [items]="items"
  expandIconType="arrow"
  expandIconPosition="left"
/>
  `.trim(),this.customSvgIconsCode=`
// Define tree items with custom SVG icons
readonly customIconItems: ITreeNavItem[] = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    iconSvg: '<svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor"><path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4z..."/></svg>',
    link: '/dashboard',
  },
  {
    id: 'users',
    label: 'Users',
    iconSvg: '<svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor"><path d="M9 6a3 3 0 11-6 0..."/></svg>',
    badge: 24,
    children: [
      { id: 'all-users', label: 'All Users', link: '/users/all' },
      { id: 'active-users', label: 'Active', link: '/users/active' },
    ],
  },
];

// Use in template
<ui-tree-nav [items]="customIconItems" />
  `.trim(),this.treeNavTokens=[{localVar:"--ui-treenav-font-size",mapsTo:"var(--cmp-font-base)",description:"Base font size of tree nav",type:"value"},{localVar:"--ui-treenav-vertical-gap",mapsTo:"var(--cmp-spacing-1)",description:"Vertical gap between tree items",type:"value"},{localVar:"--ui-treenav-horizontal-gap",mapsTo:"var(--cmp-spacing-2)",description:"Horizontal gap spacing inside item elements",type:"value"},{localVar:"--ui-treeitem-expand-color",mapsTo:"var(--cmp-gray-600)",description:"Expand chevron/indicator color",type:"color"},{localVar:"--ui-treeitem-expand-hover-bg",mapsTo:"var(--cmp-gray-100)",description:"Expand toggle background on hover",type:"color"},{localVar:"--ui-treeitem-expand-hover-color",mapsTo:"var(--cmp-gray-900)",description:"Expand toggle text/chevron color on hover",type:"color"},{localVar:"--ui-treeitem-link-color",mapsTo:"var(--cmp-gray-700)",description:"Item link label text/icon color",type:"color"},{localVar:"--ui-treeitem-link-hover-bg",mapsTo:"var(--cmp-gray-100)",description:"Item link background on hover",type:"color"},{localVar:"--ui-treeitem-link-hover-color",mapsTo:"var(--cmp-gray-900)",description:"Item link text/icon color on hover",type:"color"},{localVar:"--ui-treeitem-link-radius",mapsTo:"var(--cmp-radius-md)",description:"Item link corner radius",type:"radius"},{localVar:"--ui-treeitem-active-bg",mapsTo:"var(--cmp-primary-soft)",description:"Selected active item background color",type:"color"},{localVar:"--ui-treeitem-active-color",mapsTo:"var(--cmp-primary)",description:"Selected active item label text/icon color",type:"color"},{localVar:"--ui-treeitem-active-outline",mapsTo:"2px solid var(--cmp-primary)",description:"Outline border for active keyboard focus",type:"value"}],this.treeNavOverrideSnippet=`// Customize the Tree Navigation Component
ui-tree-nav {
  --ui-treenav-vertical-gap: var(--cmp-spacing-2);
  --ui-treeitem-link-radius: var(--cmp-radius-lg);
  --ui-treeitem-active-bg: var(--cmp-secondary-soft);
  --ui-treeitem-active-color: var(--cmp-secondary);
  --ui-treeitem-active-outline: 2px solid var(--cmp-secondary);
}`;}onItemClick(r){console.log("Item clicked:",r);}onItemSelect(r){console.log("Item selected:",r);}onExpandChange(r){console.log("Expand changed:",r);}onSelectionChange(r){console.log("Selection changed:",r);}static{this.\u0275fac=function(c){return new(c||s)};}static{this.\u0275cmp=GE({type:s,selectors:[["playground-tree-nav-demo"]],decls:114,vars:37,consts:[["title","Tree Nav","description","A flexible, hierarchical navigation component with expand/collapse, selection, and router integration. Perfect for sidebars, documentation, file explorers, and admin panels.",3,"tags","apiReference","examples","theming"],["demo",""],[1,"demo-section"],[1,"demo-section-title"],[1,"demo-description"],[1,"demo-container"],[1,"demo-sidebar"],[3,"itemClick","expandChange","items"],[1,"demo-section","cmp-mt-5"],["variant","default",3,"itemClick","items","accordion"],["variant","minimal",3,"itemClick","items","routerIntegration"],[1,"demo-grid"],[1,"demo-card"],["variant","default",3,"items"],["variant","minimal",3,"items"],["variant","pills",3,"items"],["variant","bordered",3,"items"],["variant","compact",3,"items"],[3,"items","accordion"],["expandIconType","chevron","expandIconPosition","left",3,"items"],["expandIconType","chevron","expandIconPosition","right",3,"items"],["expandIconType","plus","expandIconPosition","left",3,"items"],["expandIconType","plus","expandIconPosition","right",3,"items"],["expandIconType","arrow","expandIconPosition","left",3,"items"],["expandIconType","arrow","expandIconPosition","right",3,"items"],[3,"itemClick","items"],["api",""],[3,"properties"],[1,"cmp-mt-5"],["title","Import","language","typescript",3,"code"],["title","Basic Usage","language","typescript",3,"code"],["title","Admin Dashboard","language","typescript",3,"code"],["title","File Explorer","language","typescript",3,"code"],["title","Variants","language","html",3,"code"],["title","Accordion Mode","language","html",3,"code"],["title","Events","language","typescript",3,"code"],["title","Icon Customization","language","html",3,"code"],["title","Custom SVG Icons for Items","language","typescript",3,"code"],["theming",""],["title","Tree Nav CSS Custom Properties",3,"tokens","overrideSnippet"]],template:function(c,t){c&1&&(Ni(0,"playground-demo-page-template",0)(1,"div",1)(2,"div",2)(3,"h3",3),mT(4,"4-Level Deep Nested Tree"),Xc(),Ni(5,"p",4),mT(6,"Test deep nesting with 4 levels of hierarchy"),Xc(),Ni(7,"div",5)(8,"div",6)(9,"ui-tree-nav",7),nh("itemClick",function(d){return t.onItemClick(d)})("expandChange",function(d){return t.onExpandChange(d)}),Xc()()()(),Ni(10,"div",8)(11,"h3",3),mT(12,"Admin Dashboard with Badges"),Xc(),Ni(13,"div",5)(14,"div",6)(15,"ui-tree-nav",9),nh("itemClick",function(d){return t.onItemClick(d)}),Xc()()()(),Ni(16,"div",8)(17,"h3",3),mT(18,"File Explorer"),Xc(),Ni(19,"div",5)(20,"div",6)(21,"ui-tree-nav",10),nh("itemClick",function(d){return t.onItemClick(d)}),Xc()()()(),Ni(22,"div",8)(23,"h3",3),mT(24,"Variants"),Xc(),Ni(25,"div",11)(26,"div",12)(27,"h4"),mT(28,"Default"),Xc(),Yp(29,"ui-tree-nav",13),Xc(),Ni(30,"div",12)(31,"h4"),mT(32,"Minimal"),Xc(),Yp(33,"ui-tree-nav",14),Xc(),Ni(34,"div",12)(35,"h4"),mT(36,"Pills"),Xc(),Yp(37,"ui-tree-nav",15),Xc(),Ni(38,"div",12)(39,"h4"),mT(40,"Bordered"),Xc(),Yp(41,"ui-tree-nav",16),Xc(),Ni(42,"div",12)(43,"h4"),mT(44,"Compact"),Xc(),Yp(45,"ui-tree-nav",17),Xc()()(),Ni(46,"div",8)(47,"h3",3),mT(48,"Accordion Mode"),Xc(),Ni(49,"p",4),mT(50,"Only one group can be expanded at a time"),Xc(),Ni(51,"div",5)(52,"div",6),Yp(53,"ui-tree-nav",18),Xc()()(),Ni(54,"div",8)(55,"h3",3),mT(56,"Expand Icon Customization"),Xc(),Ni(57,"p",4),mT(58,"Different expand icon types and positions"),Xc(),Ni(59,"div",11)(60,"div",12)(61,"h4"),mT(62,"Chevron Left (Default)"),Xc(),Yp(63,"ui-tree-nav",19),Xc(),Ni(64,"div",12)(65,"h4"),mT(66,"Chevron Right"),Xc(),Yp(67,"ui-tree-nav",20),Xc(),Ni(68,"div",12)(69,"h4"),mT(70,"Plus Icon Left"),Xc(),Yp(71,"ui-tree-nav",21),Xc(),Ni(72,"div",12)(73,"h4"),mT(74,"Plus Icon Right"),Xc(),Yp(75,"ui-tree-nav",22),Xc(),Ni(76,"div",12)(77,"h4"),mT(78,"Arrow Icon Left"),Xc(),Yp(79,"ui-tree-nav",23),Xc(),Ni(80,"div",12)(81,"h4"),mT(82,"Arrow Icon Right"),Xc(),Yp(83,"ui-tree-nav",24),Xc()()(),Ni(84,"div",8)(85,"h3",3),mT(86,"Custom Item Icons (SVG)"),Xc(),Ni(87,"p",4),mT(88,"Use iconSvg property in tree data to pass custom SVG icons for items"),Xc(),Ni(89,"div",5)(90,"div",6)(91,"ui-tree-nav",25),nh("itemClick",function(d){return t.onItemClick(d)}),Xc()()()()(),Ni(92,"div",26)(93,"h2"),mT(94,"API Reference"),Xc(),Ni(95,"h3"),mT(96,"TreeNavComponent"),Xc(),Yp(97,"playground-api-table",27),Ni(98,"h3"),mT(99,"ITreeNavItem"),Xc(),Yp(100,"playground-api-table",27),Ni(101,"h2",28),mT(102,"Code Examples"),Xc(),Yp(103,"playground-example-viewer",29)(104,"playground-example-viewer",30)(105,"playground-example-viewer",31)(106,"playground-example-viewer",32)(107,"playground-example-viewer",33)(108,"playground-example-viewer",34)(109,"playground-example-viewer",35)(110,"playground-example-viewer",36)(111,"playground-example-viewer",37),Xc(),Ni(112,"div",38),Yp(113,"playground-token-table",39),Xc()()),c&2&&(Zp("tags",kT(36,f))("apiReference",true)("examples",true)("theming",true),hI(9),Zp("items",t.deepNestedItems),hI(6),Zp("items",t.adminMenuItems)("accordion",true),hI(6),Zp("items",t.fileTreeItems)("routerIntegration",false),hI(8),Zp("items",t.minimalNavItems),hI(4),Zp("items",t.minimalNavItems),hI(4),Zp("items",t.minimalNavItems),hI(4),Zp("items",t.minimalNavItems),hI(4),Zp("items",t.minimalNavItems),hI(8),Zp("items",t.adminMenuItems)("accordion",true),hI(10),Zp("items",t.deepNestedItems),hI(4),Zp("items",t.deepNestedItems),hI(4),Zp("items",t.deepNestedItems),hI(4),Zp("items",t.deepNestedItems),hI(4),Zp("items",t.deepNestedItems),hI(4),Zp("items",t.deepNestedItems),hI(8),Zp("items",t.customIconItems),hI(6),Zp("properties",t.treeNavProps),hI(3),Zp("properties",t.itemProps),hI(3),Zp("code",t.importCode),hI(),Zp("code",t.basicCode),hI(),Zp("code",t.adminCode),hI(),Zp("code",t.fileExplorerCode),hI(),Zp("code",t.variantsCode),hI(),Zp("code",t.accordionCode),hI(),Zp("code",t.eventsCode),hI(),Zp("code",t.iconCustomizationCode),hI(),Zp("code",t.customSvgIconsCode),hI(2),Zp("tokens",t.treeNavTokens)("overrideSnippet",t.treeNavOverrideSnippet));},dependencies:[rn,P,h,NL,N],styles:[".demo-section[_ngcontent-%COMP%]{margin-bottom:3rem}.demo-section-title[_ngcontent-%COMP%]{margin:0 0 1rem;font-size:var(--cmp-font-lg);font-weight:var(--cmp-font-semibold);color:var(--cmp-gray-900)}.demo-description[_ngcontent-%COMP%]{margin:0 0 1rem;color:var(--cmp-gray-600);font-size:var(--cmp-font-sm)}.demo-container[_ngcontent-%COMP%]{display:flex;gap:2rem;min-height:400px}.demo-sidebar[_ngcontent-%COMP%]{width:300px;padding:1rem;background:var(--cmp-white);border:1px solid var(--cmp-border-light);border-radius:var(--cmp-radius-lg);box-shadow:var(--cmp-shadow-sm)}.demo-info[_ngcontent-%COMP%]{flex:1;padding:1rem;background:var(--cmp-gray-50);border-radius:var(--cmp-radius-md)}.demo-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;color:var(--cmp-gray-600);font-size:var(--cmp-font-sm)}.demo-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:1.5rem}.demo-card[_ngcontent-%COMP%]{padding:1rem;background:var(--cmp-white);border:1px solid var(--cmp-border-light);border-radius:var(--cmp-radius-lg)}.demo-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin:0 0 1rem;font-size:var(--cmp-font-base);font-weight:var(--cmp-font-semibold);color:var(--cmp-gray-900)}@media(max-width:768px){.demo-container[_ngcontent-%COMP%]{flex-direction:column}.demo-sidebar[_ngcontent-%COMP%]{width:100%}.demo-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}}"]});}}return s})();export{_ as TreeNavDemoComponent};