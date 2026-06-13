import{a as F}from"./chunk-5CZ3JQ5C.js";import{a as I}from"./chunk-FISUCOPR.js";import{b as x}from"./chunk-LDB23PJE.js";import{Ia as E}from"./chunk-SWCB4D6M.js";import"./chunk-O2CXEIYS.js";import"./chunk-T3YZDFP3.js";import"./chunk-CHV5ZX5K.js";import"./chunk-GPLIFPL6.js";import{r as k}from"./chunk-W4YJMS2G.js";import{Ac as m,Hc as _,Mb as w,Nb as C,Ob as o,Pb as t,Pc as h,Qb as i,Qc as S,Rb as g,db as n,qc as l,rc as f,ub as y,ya as u,yc as s,zc as c}from"./chunk-UVDLXSKN.js";import"./chunk-EU2KAMEK.js";import"./chunk-DAQOROHW.js";var D=[{title:"Basic Multi-Select",description:"Simple multi-select with two-way binding using signals.",code:`import { Component, signal } from '@angular/core';
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
];`,language:"typescript"}];var P=()=>["Forms","Select","Single Select","Multi Select","Signals"],A=(r,b)=>b.title;function M(r,b){if(r&1&&g(0,"playground-example-viewer",18),r&2){let p=b.$implicit;o("title",p.title)("description",p.description)("code",p.code)("language",p.language??"typescript")}}var G=(()=>{class r{constructor(){this.examples=D,this.frameworks=[{label:"Angular",value:"angular",icon:"fa-brands fa-angular"},{label:"React",value:"react",icon:"fa-brands fa-react"},{label:"Vue",value:"vue",icon:"fa-brands fa-vuejs"},{label:"Svelte",value:"svelte",icon:"fa-solid fa-code"},{label:"Next.js",value:"nextjs",icon:"fa-solid fa-n"},{label:"Nuxt.js",value:"nuxtjs",icon:"fa-solid fa-n"},{label:"Ember",value:"ember",icon:"fa-brands fa-ember",disabled:!0}],this.countries=[{label:"United States",value:"us"},{label:"United Kingdom",value:"uk"},{label:"Germany",value:"de"},{label:"France",value:"fr"},{label:"India",value:"in"},{label:"Japan",value:"jp"},{label:"Canada",value:"ca"},{label:"Australia",value:"au"},{label:"Brazil",value:"br"},{label:"Italy",value:"it"}],this.skills=[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"},{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"C#",value:"csharp"},{label:"Go",value:"go"},{label:"Rust",value:"rust"}],this.selectedFrameworks=u(["angular","react"]),this.selectedCountries=u([]),this.selectedSkills=u(["typescript"]),this.singleSelection=u([]),this.customConfig={placeholder:"Pick your countries",searchPlaceholder:"Search countries...",maxDisplayedItems:2,showSelectAll:!0,showSearch:!0},this.noSearchConfig={placeholder:"Select skills",showSearch:!1,showSelectAll:!1},this.apiInputs=[{name:"items",type:"ISelectItem[]",default:"[]",description:"Array of items to display in the dropdown."},{name:"value",type:"model<SelectValue[]>",default:"[]",description:"Two-way bindable selected values. Implements FormValueControl."},{name:"multiple",type:"boolean",default:"true",description:"Allow multiple selections. Set to false for single-select mode."},{name:"config",type:"ISelectConfig",default:"DEFAULT_SELECT_CONFIG",description:"Configuration object for customizing behavior and appearance."},{name:"disabled",type:"boolean",default:"false",description:"Disables the entire component."},{name:"readonly",type:"boolean",default:"false",description:"Makes the component read-only."}],this.apiOutputs=[{name:"selectionChange",type:"OutputEmitterRef<SelectValue[]>",description:"Emitted when the selection changes."}],this.configProps=[{name:"placeholder",type:"string",default:"'Select options'",description:"Placeholder text shown when nothing is selected."},{name:"searchPlaceholder",type:"string",default:"'Search...'",description:"Placeholder for the search input."},{name:"noResultsText",type:"string",default:"'No results found'",description:"Text shown when search returns no results."},{name:"selectAllText",type:"string",default:"'Select All'",description:"Text for the select-all option (multi-select only)."},{name:"maxDisplayedItems",type:"number",default:"3",description:'Maximum number of chips to display before showing "+X more".'},{name:"showSearch",type:"boolean",default:"true",description:"Show/hide the search input."},{name:"showSelectAll",type:"boolean",default:"false",description:'Show/hide the "Select All" option (multi-select only).'},{name:"disabled",type:"boolean",default:"false",description:"Disable the component via config."}],this.itemProps=[{name:"label",type:"string",default:"\u2014",description:"Display text for the item."},{name:"value",type:"string | number | boolean",default:"\u2014",description:"Unique value for the item."},{name:"icon",type:"string",default:"''",description:"Optional icon class (e.g., Font Awesome)."},{name:"disabled",type:"boolean",default:"false",description:"Disables this specific item."}]}static{this.\u0275fac=function(v){return new(v||r)}}static{this.\u0275cmp=y({type:r,selectors:[["playground-select-demo"]],decls:72,vars:36,consts:[["title","Select","description","A unified select component for both single and multi-select use cases, with search, select-all, and chip-based display. Mode is controlled via the [multiple] input.",3,"tags","apiReference","examples"],["demo","",1,"select-demo-preview"],[1,"demo-section"],[1,"demo-section-label"],[1,"demo-section-desc"],[3,"valueChange","items","value"],[1,"demo-output"],[3,"valueChange","items","config","value"],[3,"valueChange","items","multiple","value"],[3,"valueChange","items","disabled","value"],["api",""],[1,"api-heading"],["title","Inputs",3,"properties"],["title","Outputs",3,"properties"],[1,"api-heading",2,"margin-top","40px"],["title","Configuration Properties",3,"properties"],["title","Item Properties",3,"properties"],["examples",""],[3,"title","description","code","language"]],template:function(v,e){v&1&&(t(0,"playground-demo-page-template",0)(1,"div",1)(2,"section",2)(3,"p",3),l(4,"Multi-Select (default)"),i(),t(5,"p",4),l(6," Select multiple items from a dropdown. Selected items appear as removable chips. "),i(),t(7,"ui-select",5),m("valueChange",function(a){return c(e.selectedFrameworks,a)||(e.selectedFrameworks=a),a}),i(),t(8,"pre",6),l(9),h(10,"json"),i()(),t(11,"section",2)(12,"p",3),l(13,"With Search & Select All"),i(),t(14,"p",4),l(15," Enable search and select-all features via the config object. "),i(),t(16,"ui-select",7),m("valueChange",function(a){return c(e.selectedCountries,a)||(e.selectedCountries=a),a}),i(),t(17,"pre",6),l(18),h(19,"json"),i()(),t(20,"section",2)(21,"p",3),l(22,"Single Select Mode"),i(),t(23,"p",4),l(24," Set "),t(25,"code"),l(26,'[multiple]="false"'),i(),l(27," to allow only one selection at a time. No chips \u2014 shows the selected label directly. "),i(),t(28,"ui-select",8),m("valueChange",function(a){return c(e.singleSelection,a)||(e.singleSelection=a),a}),i(),t(29,"pre",6),l(30),h(31,"json"),i()(),t(32,"section",2)(33,"p",3),l(34,"Without Search"),i(),t(35,"p",4),l(36," Hide the search input for simpler dropdowns with fewer items. "),i(),t(37,"ui-select",7),m("valueChange",function(a){return c(e.selectedSkills,a)||(e.selectedSkills=a),a}),i(),t(38,"pre",6),l(39),h(40,"json"),i()(),t(41,"section",2)(42,"p",3),l(43,"With Icons"),i(),t(44,"p",4),l(45," Add icons to items using the "),t(46,"code"),l(47,"icon"),i(),l(48," property. Supports Font Awesome and other icon libraries. "),i(),t(49,"ui-select",5),m("valueChange",function(a){return c(e.selectedFrameworks,a)||(e.selectedFrameworks=a),a}),i()(),t(50,"section",2)(51,"p",3),l(52,"Disabled State"),i(),t(53,"p",4),l(54," Disable the entire component or individual items. "),i(),t(55,"ui-select",9),m("valueChange",function(a){return c(e.selectedFrameworks,a)||(e.selectedFrameworks=a),a}),i()()(),t(56,"div",10)(57,"h2",11),l(58,"SelectComponent "),t(59,"code"),l(60,"ui-select"),i()(),g(61,"playground-api-table",12)(62,"playground-api-table",13),t(63,"h2",14),l(64,"ISelectConfig"),i(),g(65,"playground-api-table",15),t(66,"h2",14),l(67,"ISelectItem"),i(),g(68,"playground-api-table",16),i(),t(69,"div",17),w(70,M,1,4,"playground-example-viewer",18,A),i()()),v&2&&(o("tags",_(35,P))("apiReference",!0)("examples",!0),n(7),o("items",e.frameworks),s("value",e.selectedFrameworks),n(2),f(S(10,27,e.selectedFrameworks())),n(7),o("items",e.countries)("config",e.customConfig),s("value",e.selectedCountries),n(2),f(S(19,29,e.selectedCountries())),n(10),o("items",e.frameworks)("multiple",!1),s("value",e.singleSelection),n(2),f(S(31,31,e.singleSelection())),n(7),o("items",e.skills)("config",e.noSearchConfig),s("value",e.selectedSkills),n(2),f(S(40,33,e.selectedSkills())),n(10),o("items",e.frameworks),s("value",e.selectedFrameworks),n(6),o("items",e.frameworks)("disabled",!0),s("value",e.selectedFrameworks),n(6),o("properties",e.apiInputs),n(),o("properties",e.apiOutputs),n(3),o("properties",e.configProps),n(3),o("properties",e.itemProps),n(2),C(e.examples))},dependencies:[x,F,I,E,k],styles:[".select-demo-preview[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:var(--cmp-spacing-6)}.demo-section[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:var(--cmp-spacing-3)}.demo-section-label[_ngcontent-%COMP%]{font-size:var(--cmp-font-lg);font-weight:var(--cmp-font-semibold);color:var(--cmp-text);margin:0}.demo-section-desc[_ngcontent-%COMP%]{font-size:var(--cmp-font-sm);color:var(--cmp-text-secondary);margin:0;line-height:1.6}.demo-section-desc[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:var(--cmp-code-bg);color:var(--cmp-code-text);padding:2px 6px;border-radius:var(--cmp-radius-sm);font-size:.9em;font-family:Courier New,monospace}.demo-output[_ngcontent-%COMP%]{background:var(--cmp-surface-variant);border:1px solid var(--cmp-border);border-radius:var(--cmp-radius);padding:var(--cmp-spacing-3);font-family:Courier New,monospace;font-size:var(--cmp-font-sm);color:var(--cmp-text);margin:var(--cmp-spacing-2) 0 0 0;overflow-x:auto}.api-heading[_ngcontent-%COMP%]{font-size:var(--cmp-font-xl);font-weight:var(--cmp-font-semibold);color:var(--cmp-text);margin:var(--cmp-spacing-4) 0 var(--cmp-spacing-3) 0}.api-heading[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:var(--cmp-code-bg);color:var(--cmp-code-text);padding:4px 8px;border-radius:var(--cmp-radius-sm);font-size:.85em;font-family:Courier New,monospace;font-weight:var(--cmp-font-normal)}"],changeDetection:0})}}return r})();export{G as SelectDemoComponent};
