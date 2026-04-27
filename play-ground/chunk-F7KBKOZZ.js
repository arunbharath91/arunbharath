import{a as w}from"./chunk-BHP4JTLZ.js";import{a as V}from"./chunk-GUJLOWQ7.js";import{b as S}from"./chunk-VHDJ24KY.js";import{i as C}from"./chunk-2BJF367T.js";import"./chunk-3XBYOJNL.js";import"./chunk-2T7PP3I7.js";import"./chunk-H2UPXF7Z.js";import"./chunk-IQR54AYO.js";import{Jb as r,Kb as i,Lb as n,Mb as h,cb as a,jc as o,lc as u,mc as f,rb as b,rc as p,sc as s,tc as m,xc as y,ya as l}from"./chunk-HTLIC7AN.js";import"./chunk-EU2KAMEK.js";import"./chunk-DAQOROHW.js";var _={basic:`import { RangeSliderComponent } from '@arun-bharath-ui/cmp-ui';
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
}`};var R=()=>["Forms","Input","Interactive","Signals"],k=()=>[0,25,50,75,100],L=(()=>{class g{constructor(){this.snippets=_,this.basicValue=l(50),this.rangeValue=l([20,80]),this.verticalValue=l(60),this.tickValue=l(50),this.budgetValue=l(500),this.persistentValue=l(40),this.currencyFormatter=d=>`$${d}`,this.percentageFormatter=d=>`${d}%`,this.inputProps=[{name:"min",type:"number",default:"0",description:"Minimum value of the slider"},{name:"max",type:"number",default:"100",description:"Maximum value of the slider"},{name:"step",type:"number",default:"1",description:"Step increment for value changes"},{name:"value",type:"number | [number, number]",default:"0",description:"Current value (two-way bindable)"},{name:"disabled",type:"boolean",default:"false",description:"Whether the slider is disabled"},{name:"isRange",type:"boolean",default:"false",description:"Enable dual-thumb range selection"},{name:"orientation",type:'"horizontal" | "vertical"',default:'"horizontal"',description:"Slider orientation"},{name:"size",type:'"sm" | "md" | "lg"',default:'"md"',description:"Size variant"},{name:"color",type:'"primary" | "secondary" | "success" | "warning" | "danger"',default:'"primary"',description:"Color theme"},{name:"showLabels",type:"boolean",default:"true",description:"Show min/max labels"},{name:"showValue",type:"boolean",default:"true",description:"Show current value below slider"},{name:"showTicks",type:"boolean",default:"false",description:"Show tick marks on track"},{name:"ticks",type:"number[]",default:"undefined",description:"Custom tick positions"},{name:"alwaysShowTooltip",type:"boolean",default:"false",description:"Keep tooltip always visible"},{name:"labelFormatter",type:"(value: number) => string",default:"undefined",description:"Custom label formatting function"}],this.outputProps=[{name:"valueChange",type:"number | [number, number]",description:"Emitted when value changes"},{name:"slideStart",type:"number | [number, number]",description:"Emitted when user starts dragging"},{name:"slideEnd",type:"number | [number, number]",description:"Emitted when user stops dragging"}],this.methodProps=[{name:"setValue(value)",type:"void",description:"Programmatically set the slider value"},{name:"getValue()",type:"number | [number, number]",description:"Get the current slider value"},{name:"reset()",type:"void",description:"Reset slider to minimum value"}]}static{this.\u0275fac=function(v){return new(v||g)}}static{this.\u0275cmp=b({type:g,selectors:[["playground-range-slider-demo"]],decls:50,vars:37,consts:[["title","Range Slider","description","Interactive slider component for selecting single values or ranges with customizable appearance and behavior",3,"tags","apiReference","examples"],["demo",""],[1,"demo-section"],[3,"valueChange","value"],[1,"value-display"],["color","secondary",3,"valueChange","isRange","value"],["color","success",3,"valueChange","showTicks","ticks","value"],["color","warning",3,"valueChange","min","max","step","labelFormatter","value"],[1,"vertical-demo"],["orientation","vertical",3,"valueChange","showTicks","step","value"],["color","danger",3,"valueChange","alwaysShowTooltip","value"],["api",""],["title","Input Properties",3,"properties"],["title","Output Events",3,"properties"],["title","Public Methods",3,"properties"],["examples",""],["title","Basic Usage","description","Simple single-value slider with two-way binding",3,"code"],["title","Range Selection","description","Dual-thumb slider for selecting a range of values",3,"code"],["title","Vertical Orientation","description","Vertical slider with tick marks",3,"code"],["title","With Tick Marks","description","Display tick marks at specific positions",3,"code"],["title","Custom Formatter","description","Format labels with custom function (e.g., currency)",3,"code"],["title","Persistent Tooltip","description","Keep tooltip always visible",3,"code"]],template:function(v,e){v&1&&(i(0,"playground-demo-page-template",0)(1,"div",1)(2,"div",2)(3,"h3"),o(4,"Basic Single Value"),n(),i(5,"ui-range-slider",3),m("valueChange",function(t){return s(e.basicValue,t)||(e.basicValue=t),t}),n(),i(6,"p",4),o(7),n()(),i(8,"div",2)(9,"h3"),o(10,"Range Selection (Dual Thumb)"),n(),i(11,"ui-range-slider",5),m("valueChange",function(t){return s(e.rangeValue,t)||(e.rangeValue=t),t}),n(),i(12,"p",4),o(13),n()(),i(14,"div",2)(15,"h3"),o(16,"With Tick Marks"),n(),i(17,"ui-range-slider",6),m("valueChange",function(t){return s(e.tickValue,t)||(e.tickValue=t),t}),n(),i(18,"p",4),o(19),n()(),i(20,"div",2)(21,"h3"),o(22,"Custom Label Formatter"),n(),i(23,"ui-range-slider",7),m("valueChange",function(t){return s(e.budgetValue,t)||(e.budgetValue=t),t}),n(),i(24,"p",4),o(25),n()(),i(26,"div",2)(27,"h3"),o(28,"Vertical Orientation"),n(),i(29,"div",8)(30,"ui-range-slider",9),m("valueChange",function(t){return s(e.verticalValue,t)||(e.verticalValue=t),t}),n()(),i(31,"p",4),o(32),n()(),i(33,"div",2)(34,"h3"),o(35,"Always Show Tooltip"),n(),i(36,"ui-range-slider",10),m("valueChange",function(t){return s(e.persistentValue,t)||(e.persistentValue=t),t}),n(),i(37,"p",4),o(38),n()()(),i(39,"div",11),h(40,"playground-api-table",12)(41,"playground-api-table",13)(42,"playground-api-table",14),n(),i(43,"div",15),h(44,"playground-example-viewer",16)(45,"playground-example-viewer",17)(46,"playground-example-viewer",18)(47,"playground-example-viewer",19)(48,"playground-example-viewer",20)(49,"playground-example-viewer",21),n()()),v&2&&(r("tags",y(35,R))("apiReference",!0)("examples",!0),a(5),p("value",e.basicValue),a(2),u("Value: ",e.basicValue()),a(4),r("isRange",!0),p("value",e.rangeValue),a(2),f("Range: ",e.rangeValue()[0]," - ",e.rangeValue()[1]),a(4),r("showTicks",!0)("ticks",y(36,k)),p("value",e.tickValue),a(2),u("Value: ",e.tickValue()),a(4),r("min",0)("max",1e3)("step",50)("labelFormatter",e.currencyFormatter),p("value",e.budgetValue),a(2),u("Budget: ",e.currencyFormatter(e.budgetValue())),a(5),r("showTicks",!0)("step",20),p("value",e.verticalValue),a(2),u("Value: ",e.verticalValue()),a(4),r("alwaysShowTooltip",!0),p("value",e.persistentValue),a(2),u("Value: ",e.persistentValue()),a(2),r("properties",e.inputProps),a(),r("properties",e.outputProps),a(),r("properties",e.methodProps),a(2),r("code",e.snippets.basic),a(),r("code",e.snippets.range),a(),r("code",e.snippets.vertical),a(),r("code",e.snippets.ticks),a(),r("code",e.snippets.formatter),a(),r("code",e.snippets.persistent))},dependencies:[S,w,V,C],styles:[".demo-section[_ngcontent-%COMP%]{margin-bottom:var(--cmp-spacing-8);padding:var(--cmp-spacing-6);background:var(--cmp-white);border:1px solid var(--cmp-border-light);border-radius:var(--cmp-radius-lg)}.demo-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:var(--cmp-font-lg);font-weight:var(--cmp-font-semibold);color:var(--cmp-gray-900);margin-bottom:var(--cmp-spacing-4)}.demo-section[_ngcontent-%COMP%]   .value-display[_ngcontent-%COMP%]{margin-top:var(--cmp-spacing-4);padding:var(--cmp-spacing-3);background:var(--cmp-gray-50);border-radius:var(--cmp-radius-md);font-size:var(--cmp-font-sm);font-weight:var(--cmp-font-medium);color:var(--cmp-gray-700);text-align:center}.vertical-demo[_ngcontent-%COMP%]{display:flex;justify-content:center;padding:var(--cmp-spacing-6);min-height:250px}@media(max-width:768px){.demo-section[_ngcontent-%COMP%]{padding:var(--cmp-spacing-4);margin-bottom:var(--cmp-spacing-6)}}"]})}}return g})();export{L as RangeSliderDemoComponent};
