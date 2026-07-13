import{a as F}from"./chunk-MXXR6PQ6.js";import{a as x}from"./chunk-V5C7FI6U.js";import{a as I}from"./chunk-DKFH35WL.js";import{b as E}from"./chunk-N5KNFZE4.js";import{La as k}from"./chunk-FSLXAI77.js";import"./chunk-O4PMXQUQ.js";import"./chunk-MGXTA5CE.js";import"./chunk-WIRG7O55.js";import{r as _}from"./chunk-RZJWTSPA.js";import{Bc as s,Cc as c,Dc as m,Kc as M,Nb as w,Ob as C,Pb as n,Qb as t,Rb as i,Sb as u,Sc as v,Tc as h,db as o,sc as l,tc as f,ub as y,ya as g}from"./chunk-NUUKVCZD.js";import"./chunk-FK6H3RFT.js";import"./chunk-CHV5ZX5K.js";import"./chunk-EU2KAMEK.js";import"./chunk-DAQOROHW.js";var T=[{title:"Basic Usage",description:"Simple multi-select with two-way binding using signals.",code:`import { Component, signal } from '@angular/core';
import { MultiSelectComponent, IMultiSelectItem, MultiSelectValue } from '@arun-bharath-ui/cmp-ui';

@Component({
  standalone: true,
  imports: [MultiSelectComponent],
  template: \`
    <ui-multi-select
      [items]="frameworks"
      [(value)]="selectedFrameworks"
    />
  \`,
})
export class BasicDemo {
  frameworks: IMultiSelectItem[] = [
    { label: 'Angular', value: 'angular' },
    { label: 'React', value: 'react' },
    { label: 'Vue', value: 'vue' },
  ];

  selectedFrameworks = signal<MultiSelectValue[]>(['angular']);
}`},{title:"With Search & Select All",description:"Enable search and select-all features via configuration.",code:`import { Component, signal } from '@angular/core';
import { MultiSelectComponent, IMultiSelectConfig } from '@arun-bharath-ui/cmp-ui';

@Component({
  standalone: true,
  imports: [MultiSelectComponent],
  template: \`
    <ui-multi-select
      [items]="countries"
      [config]="config"
      [(value)]="selected"
    />
  \`,
})
export class SearchDemo {
  config: IMultiSelectConfig = {
    placeholder: 'Select countries',
    searchPlaceholder: 'Search...',
    showSearch: true,
    showSelectAll: true,
    maxDisplayedItems: 3,
  };

  countries: IMultiSelectItem[] = [
    { label: 'United States', value: 'us' },
    { label: 'United Kingdom', value: 'uk' },
    { label: 'Germany', value: 'de' },
    // ... more items
  ];

  selected = signal<MultiSelectValue[]>([]);
}`},{title:"Single Select Mode",description:'Use [multiple]="false" for single-selection behavior.',code:`<ui-multi-select
  [items]="frameworks"
  [multiple]="false"
  [(value)]="selectedFramework"
/>

// Component
selectedFramework = signal<MultiSelectValue[]>([]);`,language:"typescript"},{title:"With Icons",description:"Add icons to items using Font Awesome or other icon libraries.",code:`frameworks: IMultiSelectItem[] = [
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
];`,language:"typescript"},{title:"Custom Template",description:"Use the MultiSelectOptionDirective to customize item rendering.",code:`<ui-multi-select [items]="items" [(value)]="selected">
  <ng-template multiSelectOption let-item let-selected="selected">
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
</ui-multi-select>`,language:"html"},{title:"Signal Forms Integration",description:"Use with Angular Signal Forms for reactive form management.",code:`import { Component, signal } from '@angular/core';
import { form, FormField, required } from '@angular/forms/signals';
import { MultiSelectComponent } from '@arun-bharath-ui/cmp-ui';

@Component({
  standalone: true,
  imports: [FormField, MultiSelectComponent],
  template: \`
    <ui-multi-select
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

  frameworks: IMultiSelectItem[] = [
    { label: 'Angular', value: 'angular' },
    { label: 'React', value: 'react' },
    { label: 'Vue', value: 'vue' },
  ];
}`},{title:"Disabled State",description:"Disable the entire component or individual items.",code:`<!-- Disable entire component -->
<ui-multi-select
  [items]="frameworks"
  [disabled]="true"
  [(value)]="selected"
/>

<!-- Disable specific items -->
frameworks: IMultiSelectItem[] = [
  { label: 'Angular', value: 'angular' },
  { label: 'React', value: 'react' },
  { label: 'Ember', value: 'ember', disabled: true },
];`,language:"typescript"}];var D=()=>["Forms","Select","Multi-select","Signals"],P=(r,b)=>b.title;function A(r,b){if(r&1&&u(0,"playground-example-viewer",18),r&2){let p=b.$implicit;n("title",p.title)("description",p.description)("code",p.code)("language",p.language??"typescript")}}var q=(()=>{class r{constructor(){this.examples=T,this.frameworks=[{label:"Angular",value:"angular",icon:"fa-brands fa-angular"},{label:"React",value:"react",icon:"fa-brands fa-react"},{label:"Vue",value:"vue",icon:"fa-brands fa-vuejs"},{label:"Svelte",value:"svelte",icon:"fa-solid fa-code"},{label:"Next.js",value:"nextjs",icon:"fa-solid fa-n"},{label:"Nuxt.js",value:"nuxtjs",icon:"fa-solid fa-n"},{label:"Ember",value:"ember",icon:"fa-brands fa-ember",disabled:!0}],this.countries=[{label:"United States",value:"us"},{label:"United Kingdom",value:"uk"},{label:"Germany",value:"de"},{label:"France",value:"fr"},{label:"India",value:"in"},{label:"Japan",value:"jp"},{label:"Canada",value:"ca"},{label:"Australia",value:"au"},{label:"Brazil",value:"br"},{label:"Italy",value:"it"}],this.skills=[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"},{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"C#",value:"csharp"},{label:"Go",value:"go"},{label:"Rust",value:"rust"}],this.selectedFrameworks=g(["angular","react"]),this.selectedCountries=g([]),this.selectedSkills=g(["typescript"]),this.singleSelection=g([]),this.customConfig={placeholder:"Pick your countries",searchPlaceholder:"Search countries...",maxDisplayedItems:2,showSelectAll:!0,showSearch:!0},this.noSearchConfig={placeholder:"Select skills",showSearch:!1,showSelectAll:!1},this.apiInputs=[{name:"items",type:"IMultiSelectItem[]",default:"[]",description:"Array of items to display in the dropdown."},{name:"value",type:"model<MultiSelectValue[]>",default:"[]",description:"Two-way bindable selected values. Implements FormValueControl."},{name:"multiple",type:"boolean",default:"true",description:"Allow multiple selections. Set to false for single-select mode."},{name:"config",type:"IMultiSelectConfig",default:"DEFAULT_MULTI_SELECT_CONFIG",description:"Configuration object for customizing behavior and appearance."},{name:"disabled",type:"boolean",default:"false",description:"Disables the entire component."},{name:"readonly",type:"boolean",default:"false",description:"Makes the component read-only."}],this.apiOutputs=[{name:"selectionChange",type:"OutputEmitterRef<MultiSelectValue[]>",description:"Emitted when the selection changes."}],this.configProps=[{name:"placeholder",type:"string",default:"'Select items'",description:"Placeholder text shown when nothing is selected."},{name:"searchPlaceholder",type:"string",default:"'Search...'",description:"Placeholder for the search input."},{name:"noResultsText",type:"string",default:"'No results found'",description:"Text shown when search returns no results."},{name:"selectAllText",type:"string",default:"'Select All'",description:"Text for the select-all option."},{name:"maxDisplayedItems",type:"number",default:"3",description:'Maximum number of chips to display before showing "+X more".'},{name:"showSearch",type:"boolean",default:"true",description:"Show/hide the search input."},{name:"showSelectAll",type:"boolean",default:"false",description:'Show/hide the "Select All" option.'},{name:"disabled",type:"boolean",default:"false",description:"Disable the component via config."}],this.itemProps=[{name:"label",type:"string",default:"\u2014",description:"Display text for the item."},{name:"value",type:"string | number | boolean",default:"\u2014",description:"Unique value for the item."},{name:"icon",type:"string",default:"''",description:"Optional icon class (e.g., Font Awesome)."},{name:"disabled",type:"boolean",default:"false",description:"Disables this specific item."}],this.multiSelectTokens=[{localVar:"--ui-multiselect-bg",mapsTo:"var(--cmp-surface)",description:"Multi-select button background color",type:"color"},{localVar:"--ui-multiselect-border-color",mapsTo:"var(--cmp-border)",description:"Multi-select button border color",type:"color"},{localVar:"--ui-multiselect-border-radius",mapsTo:"var(--cmp-radius)",description:"Multi-select button corner radius",type:"radius"},{localVar:"--ui-multiselect-focus-border-color",mapsTo:"var(--cmp-primary)",description:"Border color when focused",type:"color"},{localVar:"--ui-multiselect-focus-shadow",mapsTo:"0 0 0 3px var(--cmp-primary-alpha)",description:"Shadow effect on focus",type:"value"},{localVar:"--ui-multiselect-disabled-bg",mapsTo:"var(--cmp-surface-variant)",description:"Background color when disabled",type:"color"},{localVar:"--ui-multiselect-placeholder-color",mapsTo:"var(--cmp-text-muted)",description:"Placeholder text color",type:"color"},{localVar:"--ui-multiselect-text-color",mapsTo:"var(--cmp-text)",description:"Selected items label text color",type:"color"},{localVar:"--ui-multiselect-dropdown-item-hover-bg",mapsTo:"var(--cmp-surface-variant)",description:"Dropdown list item hover state bg color",type:"color"},{localVar:"--ui-multiselect-dropdown-item-selected-bg",mapsTo:"var(--cmp-primary-soft)",description:"Selected dropdown item background color",type:"color"},{localVar:"--ui-multiselect-dropdown-item-selected-color",mapsTo:"var(--cmp-primary)",description:"Selected dropdown item text color",type:"color"}],this.multiSelectOverrideSnippet=`// Customize the Multi-Select Component
ui-multi-select {
  --ui-multiselect-border-radius: var(--cmp-radius-md);
  --ui-multiselect-focus-border-color: var(--cmp-secondary);
  --ui-multiselect-dropdown-item-selected-bg: var(--cmp-secondary-soft);
  --ui-multiselect-dropdown-item-selected-color: var(--cmp-secondary);
}`}static{this.\u0275fac=function(S){return new(S||r)}}static{this.\u0275cmp=y({type:r,selectors:[["playground-multi-select-demo"]],decls:74,vars:39,consts:[["title","Multi Select","description","A premium multi-select component with search, select-all, and chip-based selection display.",3,"tags","apiReference","examples","theming"],["demo","",1,"multi-select-demo-preview"],[1,"demo-section"],[1,"demo-section-label"],[1,"demo-section-desc"],[3,"valueChange","items","value"],[1,"demo-output"],[3,"valueChange","items","config","value"],[3,"valueChange","items","multiple","value"],[3,"valueChange","items","disabled","value"],["api",""],[1,"api-heading"],["title","Inputs",3,"properties"],["title","Outputs",3,"properties"],[1,"api-heading",2,"margin-top","40px"],["title","Configuration Properties",3,"properties"],["title","Item Properties",3,"properties"],["examples",""],[3,"title","description","code","language"],["theming",""],["title","Multi Select CSS Custom Properties",3,"tokens","overrideSnippet"]],template:function(S,e){S&1&&(t(0,"playground-demo-page-template",0)(1,"div",1)(2,"section",2)(3,"p",3),l(4,"Basic Usage"),i(),t(5,"p",4),l(6," Select multiple items from a dropdown. Selected items appear as removable chips. "),i(),t(7,"ui-multi-select",5),m("valueChange",function(a){return c(e.selectedFrameworks,a)||(e.selectedFrameworks=a),a}),i(),t(8,"pre",6),l(9),v(10,"json"),i()(),t(11,"section",2)(12,"p",3),l(13,"With Search & Select All"),i(),t(14,"p",4),l(15," Enable search and select-all features via the config object. "),i(),t(16,"ui-multi-select",7),m("valueChange",function(a){return c(e.selectedCountries,a)||(e.selectedCountries=a),a}),i(),t(17,"pre",6),l(18),v(19,"json"),i()(),t(20,"section",2)(21,"p",3),l(22,"Single Select Mode"),i(),t(23,"p",4),l(24," Set "),t(25,"code"),l(26,'[multiple]="false"'),i(),l(27," to allow only one selection at a time. "),i(),t(28,"ui-multi-select",8),m("valueChange",function(a){return c(e.singleSelection,a)||(e.singleSelection=a),a}),i(),t(29,"pre",6),l(30),v(31,"json"),i()(),t(32,"section",2)(33,"p",3),l(34,"Without Search"),i(),t(35,"p",4),l(36," Hide the search input for simpler dropdowns with fewer items. "),i(),t(37,"ui-multi-select",7),m("valueChange",function(a){return c(e.selectedSkills,a)||(e.selectedSkills=a),a}),i(),t(38,"pre",6),l(39),v(40,"json"),i()(),t(41,"section",2)(42,"p",3),l(43,"With Icons"),i(),t(44,"p",4),l(45," Add icons to items using the "),t(46,"code"),l(47,"icon"),i(),l(48," property. Supports Font Awesome and other icon libraries. "),i(),t(49,"ui-multi-select",5),m("valueChange",function(a){return c(e.selectedFrameworks,a)||(e.selectedFrameworks=a),a}),i()(),t(50,"section",2)(51,"p",3),l(52,"Disabled State"),i(),t(53,"p",4),l(54," Disable the entire component or individual items. "),i(),t(55,"ui-multi-select",9),m("valueChange",function(a){return c(e.selectedFrameworks,a)||(e.selectedFrameworks=a),a}),i()()(),t(56,"div",10)(57,"h2",11),l(58,"MultiSelectComponent "),t(59,"code"),l(60,"ui-multi-select"),i()(),u(61,"playground-api-table",12)(62,"playground-api-table",13),t(63,"h2",14),l(64,"IMultiSelectConfig"),i(),u(65,"playground-api-table",15),t(66,"h2",14),l(67,"IMultiSelectItem"),i(),u(68,"playground-api-table",16),i(),t(69,"div",17),w(70,A,1,4,"playground-example-viewer",18,P),i(),t(72,"div",19),u(73,"playground-token-table",20),i()()),S&2&&(n("tags",M(38,D))("apiReference",!0)("examples",!0)("theming",!0),o(7),n("items",e.frameworks),s("value",e.selectedFrameworks),o(2),f(h(10,30,e.selectedFrameworks())),o(7),n("items",e.countries)("config",e.customConfig),s("value",e.selectedCountries),o(2),f(h(19,32,e.selectedCountries())),o(10),n("items",e.frameworks)("multiple",!1),s("value",e.singleSelection),o(2),f(h(31,34,e.singleSelection())),o(7),n("items",e.skills)("config",e.noSearchConfig),s("value",e.selectedSkills),o(2),f(h(40,36,e.selectedSkills())),o(10),n("items",e.frameworks),s("value",e.selectedFrameworks),o(6),n("items",e.frameworks)("disabled",!0),s("value",e.selectedFrameworks),o(6),n("properties",e.apiInputs),o(),n("properties",e.apiOutputs),o(3),n("properties",e.configProps),o(3),n("properties",e.itemProps),o(2),C(e.examples),o(3),n("tokens",e.multiSelectTokens)("overrideSnippet",e.multiSelectOverrideSnippet))},dependencies:[E,x,I,k,F,_],styles:[".multi-select-demo-preview[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:var(--cmp-spacing-6)}.demo-section[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:var(--cmp-spacing-3)}.demo-section-label[_ngcontent-%COMP%]{font-size:var(--cmp-font-lg);font-weight:var(--cmp-font-semibold);color:var(--cmp-text);margin:0}.demo-section-desc[_ngcontent-%COMP%]{font-size:var(--cmp-font-sm);color:var(--cmp-text-secondary);margin:0;line-height:1.6}.demo-section-desc[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:var(--cmp-code-bg);color:var(--cmp-code-text);padding:2px 6px;border-radius:var(--cmp-radius-sm);font-size:.9em;font-family:Courier New,monospace}.demo-output[_ngcontent-%COMP%]{background:var(--cmp-surface-variant);border:1px solid var(--cmp-border);border-radius:var(--cmp-radius);padding:var(--cmp-spacing-3);font-family:Courier New,monospace;font-size:var(--cmp-font-sm);color:var(--cmp-text);margin:var(--cmp-spacing-2) 0 0 0;overflow-x:auto}.api-heading[_ngcontent-%COMP%]{font-size:var(--cmp-font-xl);font-weight:var(--cmp-font-semibold);color:var(--cmp-text);margin:var(--cmp-spacing-4) 0 var(--cmp-spacing-3) 0}.api-heading[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:var(--cmp-code-bg);color:var(--cmp-code-text);padding:4px 8px;border-radius:var(--cmp-radius-sm);font-size:.85em;font-family:Courier New,monospace;font-weight:var(--cmp-font-normal)}"],changeDetection:0})}}return r})();export{q as MultiSelectDemoComponent};
