import{a as T}from"./chunk-MXXR6PQ6.js";import{a as C}from"./chunk-V5C7FI6U.js";import{a as w}from"./chunk-DKFH35WL.js";import{b as V}from"./chunk-N5KNFZE4.js";import{f}from"./chunk-FSLXAI77.js";import"./chunk-O4PMXQUQ.js";import"./chunk-MGXTA5CE.js";import"./chunk-WIRG7O55.js";import"./chunk-RZJWTSPA.js";import{Bc as p,Cc as s,Dc as m,Kc as y,Pb as n,Qb as i,Rb as r,Sb as h,db as a,sc as o,ub as b,uc as u,vc as S,ya as l}from"./chunk-NUUKVCZD.js";import"./chunk-FK6H3RFT.js";import"./chunk-CHV5ZX5K.js";import"./chunk-EU2KAMEK.js";import"./chunk-DAQOROHW.js";var _={basic:`import { RangeSliderComponent } from '@arun-bharath-ui/cmp-ui';
import { signal } from '@angular/core';

@Component({
  standalone: true,
  imports: [RangeSliderComponent],
  template: \`
    <ui-range-slider [(value)]="sliderValue" />
    <p>Value: {{ sliderValue() }}</p>
  \`
})
export class DemoComponent {
  sliderValue = signal(50);
}`,range:`import { RangeSliderComponent } from '@arun-bharath-ui/cmp-ui';
import { signal } from '@angular/core';

@Component({
  standalone: true,
  imports: [RangeSliderComponent],
  template: \`
    <ui-range-slider 
      [isRange]="true"
      [(value)]="rangeValue" 
    />
    <p>Range: {{ rangeValue()[0] }} - {{ rangeValue()[1] }}</p>
  \`
})
export class DemoComponent {
  rangeValue = signal<[number, number]>([20, 80]);
}`,vertical:`import { RangeSliderComponent } from '@arun-bharath-ui/cmp-ui';
import { signal } from '@angular/core';

@Component({
  standalone: true,
  imports: [RangeSliderComponent],
  template: \`
    <ui-range-slider 
      orientation="vertical"
      [(value)]="verticalValue"
      [showTicks]="true"
      [step]="20"
    />
  \`
})
export class DemoComponent {
  verticalValue = signal(60);
}`,ticks:`import { RangeSliderComponent } from '@arun-bharath-ui/cmp-ui';
import { signal } from '@angular/core';

@Component({
  standalone: true,
  imports: [RangeSliderComponent],
  template: \`
    <ui-range-slider 
      [min]="0"
      [max]="100"
      [showTicks]="true"
      [ticks]="[0, 25, 50, 75, 100]"
      [(value)]="tickValue"
    />
  \`
})
export class DemoComponent {
  tickValue = signal(50);
}`,formatter:`import { RangeSliderComponent } from '@arun-bharath-ui/cmp-ui';
import { signal } from '@angular/core';

@Component({
  standalone: true,
  imports: [RangeSliderComponent],
  template: \`
    <ui-range-slider 
      [min]="0"
      [max]="1000"
      [step]="50"
      [labelFormatter]="currencyFormatter"
      [(value)]="budgetValue"
      color="success"
    />
  \`
})
export class DemoComponent {
  budgetValue = signal(500);
  currencyFormatter = (value: number) => \`$\${value}\`;
}`,persistent:`import { RangeSliderComponent } from '@arun-bharath-ui/cmp-ui';
import { signal } from '@angular/core';

@Component({
  standalone: true,
  imports: [RangeSliderComponent],
  template: \`
    <ui-range-slider 
      [alwaysShowTooltip]="true"
      [(value)]="persistentValue"
      color="danger"
    />
  \`
})
export class DemoComponent {
  persistentValue = signal(40);
}`,noTooltip:`import { RangeSliderComponent } from '@arun-bharath-ui/cmp-ui';
import { signal } from '@angular/core';

@Component({
  standalone: true,
  imports: [RangeSliderComponent],
  template: \`
    <ui-range-slider 
      [showTooltip]="false"
      [(value)]="simpleValue"
      color="secondary"
    />
  \`
})
export class DemoComponent {
  simpleValue = signal(65);
}`};var k=()=>["Forms","Input","Interactive","Signals"],R=()=>[0,25,50,75,100],N=(()=>{class g{constructor(){this.snippets=_,this.basicValue=l(50),this.rangeValue=l([20,80]),this.verticalValue=l(60),this.tickValue=l(50),this.budgetValue=l(500),this.persistentValue=l(40),this.noTooltipValue=l(65),this.currencyFormatter=c=>`$${c}`,this.percentageFormatter=c=>`${c}%`,this.inputProps=[{name:"min",type:"number",default:"0",description:"Minimum value of the slider"},{name:"max",type:"number",default:"100",description:"Maximum value of the slider"},{name:"step",type:"number",default:"1",description:"Step increment for value changes"},{name:"value",type:"number | [number, number]",default:"0",description:"Current value (two-way bindable)"},{name:"disabled",type:"boolean",default:"false",description:"Whether the slider is disabled"},{name:"isRange",type:"boolean",default:"false",description:"Enable dual-thumb range selection"},{name:"orientation",type:'"horizontal" | "vertical"',default:'"horizontal"',description:"Slider orientation"},{name:"size",type:'"sm" | "md" | "lg"',default:'"md"',description:"Size variant"},{name:"color",type:'"primary" | "secondary" | "success" | "warning" | "danger"',default:'"primary"',description:"Color theme"},{name:"showLabels",type:"boolean",default:"true",description:"Show min/max labels"},{name:"showValue",type:"boolean",default:"true",description:"Show current value below slider"},{name:"showTicks",type:"boolean",default:"false",description:"Show tick marks on track"},{name:"ticks",type:"number[]",default:"undefined",description:"Custom tick positions"},{name:"showTooltip",type:"boolean",default:"true",description:"Show tooltip popover on thumbs"},{name:"alwaysShowTooltip",type:"boolean",default:"false",description:"Keep tooltip always visible"},{name:"labelFormatter",type:"(value: number) => string",default:"undefined",description:"Custom label formatting function"}],this.outputProps=[{name:"valueChange",type:"number | [number, number]",description:"Emitted when value changes"},{name:"slideStart",type:"number | [number, number]",description:"Emitted when user starts dragging"},{name:"slideEnd",type:"number | [number, number]",description:"Emitted when user stops dragging"}],this.methodProps=[{name:"setValue(value)",type:"void",description:"Programmatically set the slider value"},{name:"getValue()",type:"number | [number, number]",description:"Get the current slider value"},{name:"reset()",type:"void",description:"Reset slider to minimum value"}],this.rangeSliderTokens=[{localVar:"--ui-slider-track-bg",mapsTo:"var(--cmp-gray-200)",description:"Slider track background (empty side)",type:"color"},{localVar:"--ui-slider-fill-bg",mapsTo:"var(--cmp-primary)",description:"Slider fill / progress color",type:"color"},{localVar:"--ui-slider-thumb-bg",mapsTo:"var(--cmp-white)",description:"Thumb background color",type:"color"},{localVar:"--ui-slider-thumb-border",mapsTo:"var(--cmp-primary)",description:"Thumb border color",type:"color"},{localVar:"--ui-slider-thumb-shadow",mapsTo:"var(--cmp-shadow-md)",description:"Thumb box shadow",type:"value"},{localVar:"--ui-slider-thumb-radius",mapsTo:"var(--cmp-radius-full)",description:"Thumb border radius (circular)",type:"radius"},{localVar:"--ui-slider-tooltip-bg",mapsTo:"var(--cmp-primary)",description:"Tooltip background color",type:"color"},{localVar:"--ui-slider-tooltip-color",mapsTo:"var(--cmp-white)",description:"Tooltip text color",type:"color"},{localVar:"--ui-slider-tooltip-radius",mapsTo:"var(--cmp-radius-sm)",description:"Tooltip corner radius",type:"radius"},{localVar:"--ui-slider-mark-color",mapsTo:"var(--cmp-primary)",description:"Tick/mark indicator color",type:"color"},{localVar:"--ui-slider-label-color",mapsTo:"var(--cmp-gray-600)",description:"Step/mark label color",type:"color"}],this.rangeSliderOverrideSnippet=`// Customize Range Slider
ui-range-slider {
  --ui-slider-fill-bg: var(--cmp-secondary);
  --ui-slider-thumb-border: var(--cmp-secondary);
  --ui-slider-tooltip-bg: var(--cmp-secondary);
  --ui-slider-track-bg: var(--cmp-secondary-soft);
}`}static{this.\u0275fac=function(v){return new(v||g)}}static{this.\u0275cmp=b({type:g,selectors:[["playground-range-slider-demo"]],decls:59,vars:44,consts:[["title","Range Slider","description","Interactive slider component for selecting single values or ranges with customizable appearance and behavior",3,"tags","apiReference","examples","theming"],["demo",""],[1,"demo-section"],[3,"valueChange","value"],[1,"value-display"],["color","secondary",3,"valueChange","isRange","value"],["color","success",3,"valueChange","showTicks","ticks","value"],["color","warning",3,"valueChange","min","max","step","labelFormatter","value"],[1,"vertical-demo"],["orientation","vertical",3,"valueChange","showTicks","step","value"],["color","danger",3,"valueChange","alwaysShowTooltip","value"],["color","secondary",3,"valueChange","showTooltip","value"],["api",""],["title","Input Properties",3,"properties"],["title","Output Events",3,"properties"],["title","Public Methods",3,"properties"],["examples",""],["title","Basic Usage","description","Simple single-value slider with two-way binding",3,"code"],["title","Range Selection","description","Dual-thumb slider for selecting a range of values",3,"code"],["title","Vertical Orientation","description","Vertical slider with tick marks",3,"code"],["title","With Tick Marks","description","Display tick marks at specific positions",3,"code"],["title","Custom Formatter","description","Format labels with custom function (e.g., currency)",3,"code"],["title","Persistent Tooltip","description","Keep tooltip always visible",3,"code"],["title","Without Tooltip","description","Disable tooltip popover for a cleaner look",3,"code"],["theming",""],["title","Range Slider CSS Custom Properties",3,"tokens","overrideSnippet"]],template:function(v,e){v&1&&(i(0,"playground-demo-page-template",0)(1,"div",1)(2,"div",2)(3,"h3"),o(4,"Basic Single Value"),r(),i(5,"ui-range-slider",3),m("valueChange",function(t){return s(e.basicValue,t)||(e.basicValue=t),t}),r(),i(6,"p",4),o(7),r()(),i(8,"div",2)(9,"h3"),o(10,"Range Selection (Dual Thumb)"),r(),i(11,"ui-range-slider",5),m("valueChange",function(t){return s(e.rangeValue,t)||(e.rangeValue=t),t}),r(),i(12,"p",4),o(13),r()(),i(14,"div",2)(15,"h3"),o(16,"With Tick Marks"),r(),i(17,"ui-range-slider",6),m("valueChange",function(t){return s(e.tickValue,t)||(e.tickValue=t),t}),r(),i(18,"p",4),o(19),r()(),i(20,"div",2)(21,"h3"),o(22,"Custom Label Formatter"),r(),i(23,"ui-range-slider",7),m("valueChange",function(t){return s(e.budgetValue,t)||(e.budgetValue=t),t}),r(),i(24,"p",4),o(25),r()(),i(26,"div",2)(27,"h3"),o(28,"Vertical Orientation"),r(),i(29,"div",8)(30,"ui-range-slider",9),m("valueChange",function(t){return s(e.verticalValue,t)||(e.verticalValue=t),t}),r()(),i(31,"p",4),o(32),r()(),i(33,"div",2)(34,"h3"),o(35,"Always Show Tooltip"),r(),i(36,"ui-range-slider",10),m("valueChange",function(t){return s(e.persistentValue,t)||(e.persistentValue=t),t}),r(),i(37,"p",4),o(38),r()(),i(39,"div",2)(40,"h3"),o(41,"Without Tooltip"),r(),i(42,"ui-range-slider",11),m("valueChange",function(t){return s(e.noTooltipValue,t)||(e.noTooltipValue=t),t}),r(),i(43,"p",4),o(44),r()()(),i(45,"div",12),h(46,"playground-api-table",13)(47,"playground-api-table",14)(48,"playground-api-table",15),r(),i(49,"div",16),h(50,"playground-example-viewer",17)(51,"playground-example-viewer",18)(52,"playground-example-viewer",19)(53,"playground-example-viewer",20)(54,"playground-example-viewer",21)(55,"playground-example-viewer",22)(56,"playground-example-viewer",23),r(),i(57,"div",24),h(58,"playground-token-table",25),r()()),v&2&&(n("tags",y(42,k))("apiReference",!0)("examples",!0)("theming",!0),a(5),p("value",e.basicValue),a(2),u("Value: ",e.basicValue()),a(4),n("isRange",!0),p("value",e.rangeValue),a(2),S("Range: ",e.rangeValue()[0]," - ",e.rangeValue()[1]),a(4),n("showTicks",!0)("ticks",y(43,R)),p("value",e.tickValue),a(2),u("Value: ",e.tickValue()),a(4),n("min",0)("max",1e3)("step",50)("labelFormatter",e.currencyFormatter),p("value",e.budgetValue),a(2),u("Budget: ",e.currencyFormatter(e.budgetValue())),a(5),n("showTicks",!0)("step",20),p("value",e.verticalValue),a(2),u("Value: ",e.verticalValue()),a(4),n("alwaysShowTooltip",!0),p("value",e.persistentValue),a(2),u("Value: ",e.persistentValue()),a(4),n("showTooltip",!1),p("value",e.noTooltipValue),a(2),u("Value: ",e.noTooltipValue()),a(2),n("properties",e.inputProps),a(),n("properties",e.outputProps),a(),n("properties",e.methodProps),a(2),n("code",e.snippets.basic),a(),n("code",e.snippets.range),a(),n("code",e.snippets.vertical),a(),n("code",e.snippets.ticks),a(),n("code",e.snippets.formatter),a(),n("code",e.snippets.persistent),a(),n("code",e.snippets.noTooltip),a(2),n("tokens",e.rangeSliderTokens)("overrideSnippet",e.rangeSliderOverrideSnippet))},dependencies:[V,C,w,T,f],styles:[".demo-section[_ngcontent-%COMP%]{margin-bottom:var(--cmp-spacing-8);padding:var(--cmp-spacing-6);background:var(--cmp-white);border:1px solid var(--cmp-border-light);border-radius:var(--cmp-radius-lg)}.demo-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:var(--cmp-font-lg);font-weight:var(--cmp-font-semibold);color:var(--cmp-gray-900);margin-bottom:var(--cmp-spacing-4)}.demo-section[_ngcontent-%COMP%]   .value-display[_ngcontent-%COMP%]{margin-top:var(--cmp-spacing-4);padding:var(--cmp-spacing-3);background:var(--cmp-gray-50);border-radius:var(--cmp-radius-md);font-size:var(--cmp-font-sm);font-weight:var(--cmp-font-medium);color:var(--cmp-gray-700);text-align:center}.vertical-demo[_ngcontent-%COMP%]{display:flex;justify-content:center;padding:var(--cmp-spacing-6);min-height:250px}@media(max-width:768px){.demo-section[_ngcontent-%COMP%]{padding:var(--cmp-spacing-4);margin-bottom:var(--cmp-spacing-6)}}"],changeDetection:0})}}return g})();export{N as RangeSliderDemoComponent};
