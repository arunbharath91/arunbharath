import {N}from'./chunk-D_abR2OK.js';import {P as P$1}from'./chunk-CdCF1PI4.js';import {h}from'./chunk-BQQP8wzV.js';import {r as rn}from'./chunk-DDeUKt7M.js';import {H as He,G as GE,bv as LF,bw as Qt,N as Ni,m as mT,X as Xc,av as Ah,aw as wT,aj as BT,Y as Yp,y as TD,Z as Zp,ad as kT,h as hI,ax as xh,i as Ch,ak as UT,I as CD}from'./main-2G52S3VT.js';var P=[{title:"Basic Multi-Select",description:"Simple multi-select with two-way binding using signals.",code:`import { Component, signal } from '@angular/core';
import { SelectComponent, ISelectItem, SelectValue } from '@arun-bharath-ui/cmp-ui';

@Component({
  standalone: true,
  imports: [SelectComponent],
  template: \`
    <ui-select
      [items]="frameworks"
      [(value)]="selectedFrameworks"
    />
  \`,
})
export class BasicDemo {
  frameworks: ISelectItem[] = [
    { label: 'Angular', value: 'angular' },
    { label: 'React', value: 'react' },
    { label: 'Vue', value: 'vue' },
  ];

  selectedFrameworks = signal<SelectValue[]>(['angular']);
}`},{title:"Single Select Mode",description:'Use [multiple]="false" for single-selection. Shows the selected label directly (no chips).',code:`<ui-select
  [items]="frameworks"
  [multiple]="false"
  [(value)]="selectedFramework"
/>

// Component
selectedFramework = signal<SelectValue[]>([]);`,language:"typescript"},{title:"With Search & Select All",description:"Enable search and select-all features via configuration.",code:`import { Component, signal } from '@angular/core';
import { SelectComponent, ISelectConfig } from '@arun-bharath-ui/cmp-ui';

@Component({
  standalone: true,
  imports: [SelectComponent],
  template: \`
    <ui-select
      [items]="countries"
      [config]="config"
      [(value)]="selected"
    />
  \`,
})
export class SearchDemo {
  config: ISelectConfig = {
    placeholder: 'Select countries',
    searchPlaceholder: 'Search...',
    showSearch: true,
    showSelectAll: true,
    maxDisplayedItems: 3,
  };

  countries: ISelectItem[] = [
    { label: 'United States', value: 'us' },
    { label: 'United Kingdom', value: 'uk' },
    { label: 'Germany', value: 'de' },
    // ... more items
  ];

  selected = signal<SelectValue[]>([]);
}`},{title:"With Icons",description:"Add icons to items using Font Awesome or other icon libraries.",code:`frameworks: ISelectItem[] = [
  { 
    label: 'Angular', 
    value: 'angular', 
    icon: 'fa-brands fa-angular' 
  },
  { 
    label: 'React', 
    value: 'react', 
    icon: 'fa-brands fa-react' 
  },
  { 
    label: 'Vue', 
    value: 'vue', 
    icon: 'fa-brands fa-vuejs' 
  },
];`,language:"typescript"},{title:"Custom Template",description:"Use the [uiSelectOption] directive to customize item rendering.",code:`<ui-select [items]="items" [(value)]="selected">
  <ng-template uiSelectOption let-item let-selected="selected">
    <div class="custom-item">
      @if (item.icon) {
        <i [class]="item.icon"></i>
      }
      <span>{{ item.label }}</span>
      @if (selected) {
        <i class="fa-solid fa-check"></i>
      }
    </div>
  </ng-template>
</ui-select>`,language:"html"},{title:"Signal Forms Integration",description:"Use with Angular Signal Forms for reactive form management.",code:`import { Component, signal } from '@angular/core';
import { form, FormField, required } from '@angular/forms/signals';
import { SelectComponent } from '@arun-bharath-ui/cmp-ui';

@Component({
  standalone: true,
  imports: [FormField, SelectComponent],
  template: \`
    <ui-select
      [items]="frameworks"
      [formField]="myForm.selectedFrameworks"
    />
  \`,
})
export class FormDemo {
  formModel = signal({ selectedFrameworks: [] as string[] });
  
  myForm = form(this.formModel, (schema) => {
    required(schema.selectedFrameworks, { 
      message: 'Select at least one framework' 
    });
  });

  frameworks: ISelectItem[] = [
    { label: 'Angular', value: 'angular' },
    { label: 'React', value: 'react' },
    { label: 'Vue', value: 'vue' },
  ];
}`},{title:"Disabled State",description:"Disable the entire component or individual items.",code:`<!-- Disable entire component -->
<ui-select
  [items]="frameworks"
  [disabled]="true"
  [(value)]="selected"
/>

<!-- Disable specific items -->
frameworks: ISelectItem[] = [
  { label: 'Angular', value: 'angular' },
  { label: 'React', value: 'react' },
  { label: 'Ember', value: 'ember', disabled: true },
];`,language:"typescript"}];var D=()=>["Forms","Select","Single Select","Multi Select","Signals"],A=(r,b)=>b.title;function M(r,b){if(r&1&&Yp(0,"playground-example-viewer",18),r&2){let p=b.$implicit;Zp("title",p.title)("description",p.description)("code",p.code)("language",p.language??"typescript");}}var J=(()=>{class r{constructor(){this.examples=P,this.frameworks=[{label:"Angular",value:"angular",icon:"fa-brands fa-angular"},{label:"React",value:"react",icon:"fa-brands fa-react"},{label:"Vue",value:"vue",icon:"fa-brands fa-vuejs"},{label:"Svelte",value:"svelte",icon:"fa-solid fa-code"},{label:"Next.js",value:"nextjs",icon:"fa-solid fa-n"},{label:"Nuxt.js",value:"nuxtjs",icon:"fa-solid fa-n"},{label:"Ember",value:"ember",icon:"fa-brands fa-ember",disabled:true}],this.countries=[{label:"United States",value:"us"},{label:"United Kingdom",value:"uk"},{label:"Germany",value:"de"},{label:"France",value:"fr"},{label:"India",value:"in"},{label:"Japan",value:"jp"},{label:"Canada",value:"ca"},{label:"Australia",value:"au"},{label:"Brazil",value:"br"},{label:"Italy",value:"it"}],this.skills=[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"},{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"C#",value:"csharp"},{label:"Go",value:"go"},{label:"Rust",value:"rust"}],this.selectedFrameworks=He(["angular","react"]),this.selectedCountries=He([]),this.selectedSkills=He(["typescript"]),this.singleSelection=He([]),this.customConfig={placeholder:"Pick your countries",searchPlaceholder:"Search countries...",maxDisplayedItems:2,showSelectAll:true,showSearch:true},this.noSearchConfig={placeholder:"Select skills",showSearch:false,showSelectAll:false},this.apiInputs=[{name:"items",type:"ISelectItem[]",default:"[]",description:"Array of items to display in the dropdown."},{name:"value",type:"model<SelectValue[]>",default:"[]",description:"Two-way bindable selected values. Implements FormValueControl."},{name:"multiple",type:"boolean",default:"true",description:"Allow multiple selections. Set to false for single-select mode."},{name:"config",type:"ISelectConfig",default:"DEFAULT_SELECT_CONFIG",description:"Configuration object for customizing behavior and appearance."},{name:"disabled",type:"boolean",default:"false",description:"Disables the entire component."},{name:"readonly",type:"boolean",default:"false",description:"Makes the component read-only."}],this.apiOutputs=[{name:"selectionChange",type:"OutputEmitterRef<SelectValue[]>",description:"Emitted when the selection changes."}],this.configProps=[{name:"placeholder",type:"string",default:"'Select options'",description:"Placeholder text shown when nothing is selected."},{name:"searchPlaceholder",type:"string",default:"'Search...'",description:"Placeholder for the search input."},{name:"noResultsText",type:"string",default:"'No results found'",description:"Text shown when search returns no results."},{name:"selectAllText",type:"string",default:"'Select All'",description:"Text for the select-all option (multi-select only)."},{name:"maxDisplayedItems",type:"number",default:"3",description:'Maximum number of chips to display before showing "+X more".'},{name:"showSearch",type:"boolean",default:"true",description:"Show/hide the search input."},{name:"showSelectAll",type:"boolean",default:"false",description:'Show/hide the "Select All" option (multi-select only).'},{name:"disabled",type:"boolean",default:"false",description:"Disable the component via config."}],this.itemProps=[{name:"label",type:"string",default:"\u2014",description:"Display text for the item."},{name:"value",type:"string | number | boolean",default:"\u2014",description:"Unique value for the item."},{name:"icon",type:"string",default:"''",description:"Optional icon class (e.g., Font Awesome)."},{name:"disabled",type:"boolean",default:"false",description:"Disables this specific item."}],this.selectTokens=[{localVar:"--ui-select-bg",mapsTo:"var(--cmp-surface)",description:"Select button background color",type:"color"},{localVar:"--ui-select-border-color",mapsTo:"var(--cmp-border)",description:"Select button border color",type:"color"},{localVar:"--ui-select-border-radius",mapsTo:"var(--cmp-radius)",description:"Select button corner radius",type:"radius"},{localVar:"--ui-select-focus-border-color",mapsTo:"var(--cmp-primary)",description:"Border color when focused",type:"color"},{localVar:"--ui-select-focus-shadow",mapsTo:"0 0 0 3px var(--cmp-primary-alpha)",description:"Shadow effect on focus",type:"value"},{localVar:"--ui-select-disabled-bg",mapsTo:"var(--cmp-surface-variant)",description:"Background color when disabled",type:"color"},{localVar:"--ui-select-placeholder-color",mapsTo:"var(--cmp-text-muted)",description:"Placeholder text color",type:"color"},{localVar:"--ui-select-text-color",mapsTo:"var(--cmp-text)",description:"Selected item text color",type:"color"},{localVar:"--ui-select-dropdown-item-hover-bg",mapsTo:"var(--cmp-surface-variant)",description:"Dropdown list item hover state bg color",type:"color"},{localVar:"--ui-select-dropdown-item-selected-bg",mapsTo:"var(--cmp-primary-soft)",description:"Selected dropdown item background color",type:"color"},{localVar:"--ui-select-dropdown-item-selected-color",mapsTo:"var(--cmp-primary)",description:"Selected dropdown item text color",type:"color"}],this.selectOverrideSnippet=`// Customize the Select Component
ui-select {
  --ui-select-border-radius: var(--cmp-radius-md);
  --ui-select-focus-border-color: var(--cmp-secondary);
  --ui-select-dropdown-item-selected-bg: var(--cmp-secondary-soft);
  --ui-select-dropdown-item-selected-color: var(--cmp-secondary);
}`;}static{this.\u0275fac=function(S){return new(S||r)};}static{this.\u0275cmp=GE({type:r,selectors:[["playground-select-demo"]],decls:74,vars:39,consts:[["title","Select","description","A unified select component for both single and multi-select use cases, with search, select-all, and chip-based display. Mode is controlled via the [multiple] input.",3,"tags","apiReference","examples","theming"],["demo","",1,"select-demo-preview"],[1,"demo-section"],[1,"demo-section-label"],[1,"demo-section-desc"],[3,"valueChange","items","value"],[1,"demo-output"],[3,"valueChange","items","config","value"],[3,"valueChange","items","multiple","value"],[3,"valueChange","items","disabled","value"],["api",""],[1,"api-heading"],["title","Inputs",3,"properties"],["title","Outputs",3,"properties"],[1,"api-heading",2,"margin-top","40px"],["title","Configuration Properties",3,"properties"],["title","Item Properties",3,"properties"],["examples",""],[3,"title","description","code","language"],["theming",""],["title","Select CSS Custom Properties",3,"tokens","overrideSnippet"]],template:function(S,e){S&1&&(Ni(0,"playground-demo-page-template",0)(1,"div",1)(2,"section",2)(3,"p",3),mT(4,"Multi-Select (default)"),Xc(),Ni(5,"p",4),mT(6," Select multiple items from a dropdown. Selected items appear as removable chips. "),Xc(),Ni(7,"ui-select",5),Ah("valueChange",function(a){return wT(e.selectedFrameworks,a)||(e.selectedFrameworks=a),a}),Xc(),Ni(8,"pre",6),mT(9),BT(10,"json"),Xc()(),Ni(11,"section",2)(12,"p",3),mT(13,"With Search & Select All"),Xc(),Ni(14,"p",4),mT(15," Enable search and select-all features via the config object. "),Xc(),Ni(16,"ui-select",7),Ah("valueChange",function(a){return wT(e.selectedCountries,a)||(e.selectedCountries=a),a}),Xc(),Ni(17,"pre",6),mT(18),BT(19,"json"),Xc()(),Ni(20,"section",2)(21,"p",3),mT(22,"Single Select Mode"),Xc(),Ni(23,"p",4),mT(24," Set "),Ni(25,"code"),mT(26,'[multiple]="false"'),Xc(),mT(27," to allow only one selection at a time. No chips \u2014 shows the selected label directly. "),Xc(),Ni(28,"ui-select",8),Ah("valueChange",function(a){return wT(e.singleSelection,a)||(e.singleSelection=a),a}),Xc(),Ni(29,"pre",6),mT(30),BT(31,"json"),Xc()(),Ni(32,"section",2)(33,"p",3),mT(34,"Without Search"),Xc(),Ni(35,"p",4),mT(36," Hide the search input for simpler dropdowns with fewer items. "),Xc(),Ni(37,"ui-select",7),Ah("valueChange",function(a){return wT(e.selectedSkills,a)||(e.selectedSkills=a),a}),Xc(),Ni(38,"pre",6),mT(39),BT(40,"json"),Xc()(),Ni(41,"section",2)(42,"p",3),mT(43,"With Icons"),Xc(),Ni(44,"p",4),mT(45," Add icons to items using the "),Ni(46,"code"),mT(47,"icon"),Xc(),mT(48," property. Supports Font Awesome and other icon libraries. "),Xc(),Ni(49,"ui-select",5),Ah("valueChange",function(a){return wT(e.selectedFrameworks,a)||(e.selectedFrameworks=a),a}),Xc()(),Ni(50,"section",2)(51,"p",3),mT(52,"Disabled State"),Xc(),Ni(53,"p",4),mT(54," Disable the entire component or individual items. "),Xc(),Ni(55,"ui-select",9),Ah("valueChange",function(a){return wT(e.selectedFrameworks,a)||(e.selectedFrameworks=a),a}),Xc()()(),Ni(56,"div",10)(57,"h2",11),mT(58,"SelectComponent "),Ni(59,"code"),mT(60,"ui-select"),Xc()(),Yp(61,"playground-api-table",12)(62,"playground-api-table",13),Ni(63,"h2",14),mT(64,"ISelectConfig"),Xc(),Yp(65,"playground-api-table",15),Ni(66,"h2",14),mT(67,"ISelectItem"),Xc(),Yp(68,"playground-api-table",16),Xc(),Ni(69,"div",17),TD(70,M,1,4,"playground-example-viewer",18,A),Xc(),Ni(72,"div",19),Yp(73,"playground-token-table",20),Xc()()),S&2&&(Zp("tags",kT(38,D))("apiReference",true)("examples",true)("theming",true),hI(7),Zp("items",e.frameworks),xh("value",e.selectedFrameworks),hI(2),Ch(UT(10,30,e.selectedFrameworks())),hI(7),Zp("items",e.countries)("config",e.customConfig),xh("value",e.selectedCountries),hI(2),Ch(UT(19,32,e.selectedCountries())),hI(10),Zp("items",e.frameworks)("multiple",false),xh("value",e.singleSelection),hI(2),Ch(UT(31,34,e.singleSelection())),hI(7),Zp("items",e.skills)("config",e.noSearchConfig),xh("value",e.selectedSkills),hI(2),Ch(UT(40,36,e.selectedSkills())),hI(10),Zp("items",e.frameworks),xh("value",e.selectedFrameworks),hI(6),Zp("items",e.frameworks)("disabled",true),xh("value",e.selectedFrameworks),hI(6),Zp("properties",e.apiInputs),hI(),Zp("properties",e.apiOutputs),hI(3),Zp("properties",e.configProps),hI(3),Zp("properties",e.itemProps),hI(2),CD(e.examples),hI(3),Zp("tokens",e.selectTokens)("overrideSnippet",e.selectOverrideSnippet));},dependencies:[rn,P$1,h,LF,N,Qt],styles:[".select-demo-preview[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:var(--cmp-spacing-6)}.demo-section[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:var(--cmp-spacing-3)}.demo-section-label[_ngcontent-%COMP%]{font-size:var(--cmp-font-lg);font-weight:var(--cmp-font-semibold);color:var(--cmp-text);margin:0}.demo-section-desc[_ngcontent-%COMP%]{font-size:var(--cmp-font-sm);color:var(--cmp-text-secondary);margin:0;line-height:1.6}.demo-section-desc[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:var(--cmp-code-bg);color:var(--cmp-code-text);padding:2px 6px;border-radius:var(--cmp-radius-sm);font-size:.9em;font-family:Courier New,monospace}.demo-output[_ngcontent-%COMP%]{background:var(--cmp-surface-variant);border:1px solid var(--cmp-border);border-radius:var(--cmp-radius);padding:var(--cmp-spacing-3);font-family:Courier New,monospace;font-size:var(--cmp-font-sm);color:var(--cmp-text);margin:var(--cmp-spacing-2) 0 0 0;overflow-x:auto}.api-heading[_ngcontent-%COMP%]{font-size:var(--cmp-font-xl);font-weight:var(--cmp-font-semibold);color:var(--cmp-text);margin:var(--cmp-spacing-4) 0 var(--cmp-spacing-3) 0}.api-heading[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:var(--cmp-code-bg);color:var(--cmp-code-text);padding:4px 8px;border-radius:var(--cmp-radius-sm);font-size:.85em;font-family:Courier New,monospace;font-weight:var(--cmp-font-normal)}"]});}}return r})();export{J as SelectDemoComponent};