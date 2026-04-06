import{a as P,b as O,c as F}from"./chunk-26LA2WLA.js";import"./chunk-MMGA6UQG.js";import"./chunk-37S2BO6D.js";import{a as M}from"./chunk-HAYVGET7.js";import"./chunk-W3V7OEYG.js";import{b as _,f as D}from"./chunk-35IBFZQM.js";import"./chunk-5JN3VS6X.js";import"./chunk-CGVOUCLE.js";import"./chunk-XJA634MG.js";import"./chunk-PRGDJABY.js";import{G as b,H as v}from"./chunk-XNXG5RW6.js";import"./chunk-6F733C44.js";import{Bc as y,Mb as x,Nb as h,Ob as f,Pb as d,Qb as e,Rb as t,Zb as s,cb as a,oc as n,pc as S,qc as c,rc as p,sb as g,vc as u,wc as W,xc as E,yc as w,zd as C}from"./chunk-6QGPMABE.js";import"./chunk-EU2KAMEK.js";import"./chunk-DAQOROHW.js";var I=()=>["Bootstrap","Filter","Date"];function B(r,T){if(r&1&&(e(0,"mat-button-toggle",8),n(1),t()),r&2){let o=T.$implicit;d("value",o),a(),c(" ",o," ")}}var A=(()=>{class r{constructor(){this.currentWeek=12,this.selectedDay="Monday",this.days=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]}previousWeek(){this.currentWeek>1&&this.currentWeek--}nextWeek(){this.currentWeek<52&&this.currentWeek++}getDateRange(){let o=new Date(2024,0,(this.currentWeek-1)*7+1),l=new Date(2024,0,this.currentWeek*7);return`${o.toLocaleDateString("en-US",{month:"short",day:"numeric"})} - ${l.toLocaleDateString("en-US",{month:"short",day:"numeric"})}`}static{this.\u0275fac=function(l){return new(l||r)}}static{this.\u0275cmp=g({type:r,selectors:[["app-week-filter-demo"]],decls:117,vars:35,consts:[["title","Week Filter","description","Week selector for filtering date-based content",3,"tags","apiReference","examples"],["demo",""],[1,"week-filter"],["mat-icon-button","",3,"click"],[1,"week-display"],[1,"week-label"],[1,"date-range"],[1,"day-selector",3,"valueChange","value"],[3,"value"],[1,"selected-info"],["api",""],[1,"api-table"],[1,"feature-list"],["examples",""]],template:function(l,i){l&1&&(e(0,"app-demo-page-template",0)(1,"div",1)(2,"div",2)(3,"button",3),s("click",function(){return i.previousWeek()}),e(4,"mat-icon"),n(5,"chevron_left"),t()(),e(6,"div",4)(7,"div",5),n(8),t(),e(9,"div",6),n(10),t()(),e(11,"button",3),s("click",function(){return i.nextWeek()}),e(12,"mat-icon"),n(13,"chevron_right"),t()()(),e(14,"mat-button-toggle-group",7),w("valueChange",function(m){return E(i.selectedDay,m)||(i.selectedDay=m),m}),h(15,B,2,2,"mat-button-toggle",8,x),t(),e(17,"div",9),n(18," Selected: "),e(19,"strong"),n(20),t()()(),e(21,"div",10)(22,"h3"),n(23,"Inputs"),t(),e(24,"table",11)(25,"thead")(26,"tr")(27,"th"),n(28,"Name"),t(),e(29,"th"),n(30,"Type"),t(),e(31,"th"),n(32,"Required"),t(),e(33,"th"),n(34,"Description"),t()()(),e(35,"tbody")(36,"tr")(37,"td"),n(38,"color"),t(),e(39,"td")(40,"code"),n(41,"InputSignal<string>"),t()(),e(42,"td"),n(43,"No"),t(),e(44,"td"),n(45,"Background color class (default: 'bg-primary')"),t()()()(),e(46,"h3"),n(47,"Outputs"),t(),e(48,"table",11)(49,"thead")(50,"tr")(51,"th"),n(52,"Name"),t(),e(53,"th"),n(54,"Type"),t(),e(55,"th"),n(56,"Description"),t()()(),e(57,"tbody")(58,"tr")(59,"td"),n(60,"nextWeek"),t(),e(61,"td")(62,"code"),n(63,"OutputEmitterRef<number>"),t()(),e(64,"td"),n(65,"Emitted when next week is selected"),t()(),e(66,"tr")(67,"td"),n(68,"prevWeek"),t(),e(69,"td")(70,"code"),n(71,"OutputEmitterRef<number>"),t()(),e(72,"td"),n(73,"Emitted when previous week is selected"),t()(),e(74,"tr")(75,"td"),n(76,"selectionChange"),t(),e(77,"td")(78,"code"),n(79,"OutputEmitterRef<number>"),t()(),e(80,"td"),n(81,"Emitted when week selection changes"),t()()()(),e(82,"h3"),n(83,"Features"),t(),e(84,"ul",12)(85,"li"),n(86,"Week-based date filtering"),t(),e(87,"li"),n(88,"Previous/Next week navigation"),t(),e(89,"li"),n(90,"Current week highlighting"),t(),e(91,"li"),n(92,"Week number display"),t(),e(93,"li"),n(94,"Days of week display"),t(),e(95,"li"),n(96,"Customizable color scheme"),t(),e(97,"li"),n(98,"OnPush change detection"),t(),e(99,"li"),n(100,"Automatic week calculation"),t()()(),e(101,"div",13)(102,"h3"),n(103,"Basic Usage"),t(),e(104,"pre")(105,"code"),n(106),t()(),e(107,"h3"),n(108,"With Custom Color"),t(),e(109,"pre")(110,"code"),n(111),t()(),e(112,"h3"),n(113,"With Data Loading"),t(),e(114,"pre")(115,"code"),n(116),t()()()()),l&2&&(d("tags",y(34,I))("apiReference",!0)("examples",!0),a(8),c("Week ",i.currentWeek),a(2),S(i.getDateRange()),a(4),W("value",i.selectedDay),a(),f(i.days),a(5),p("",i.selectedDay,", Week ",i.currentWeek),a(86),u(["import ","{"," WeekFilterComponent ","}",` from '@arun-bharath-ui/cmp-bootstrap';

@Component(`,"{",`
  standalone: true,
  imports: [WeekFilterComponent],
  template: \`
    <bt-week-filter
      (nextWeek)="onNextWeek($event)"
      (prevWeek)="onPrevWeek($event)"
      (selectionChange)="onWeekChange($event)"
    />
  \`
`,"}",`)
export class ScheduleComponent `,"{",`
  onNextWeek(week: number) `,"{",`
    console.log('Next week:', week);
    this.loadWeekData(week);
  `,"}",`

  onPrevWeek(week: number) `,"{",`
    console.log('Previous week:', week);
    this.loadWeekData(week);
  `,"}",`

  onWeekChange(week: number) `,"{",`
    console.log('Week changed:', week);
    this.loadWeekData(week);
  `,"}",`

  loadWeekData(week: number) `,"{",`
    // Load data for selected week
  `,"}",`
`,"}"]),a(5),p("export class TasksComponent ","{",`
  weekColor = 'bg-success';
`,"}",`

<bt-week-filter
  [color]="weekColor"
  (selectionChange)="onWeekChange($event)"
/>`),a(5),u(["export class ReportsComponent ","{",`
  currentWeekData: any[] = [];
  loading = false;

  onWeekChange(week: number) `,"{",`
    this.loading = true;
    this.reportService.getWeeklyData(week).subscribe(`,"{",`
      next: (data) => `,"{",`
        this.currentWeekData = data;
        this.loading = false;
      `,"}",`,
      error: (err) => `,"{",`
        console.error('Error loading week data:', err);
        this.loading = false;
      `,"}",`
    `,"}",`);
  `,"}",`
`,"}"]))},dependencies:[M,C,F,P,O,v,b,D,_],styles:[".week-filter[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;gap:16px;margin-bottom:24px;padding:16px;background:#f5f5f5;border-radius:8px}.week-filter[_ngcontent-%COMP%]   .week-display[_ngcontent-%COMP%]{text-align:center;min-width:200px}.week-filter[_ngcontent-%COMP%]   .week-display[_ngcontent-%COMP%]   .week-label[_ngcontent-%COMP%]{font-size:18px;font-weight:500;margin-bottom:4px}.week-filter[_ngcontent-%COMP%]   .week-display[_ngcontent-%COMP%]   .date-range[_ngcontent-%COMP%]{font-size:14px;color:#0009}.day-selector[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-bottom:24px}.selected-info[_ngcontent-%COMP%]{text-align:center;padding:16px;background:#e3f2fd;border-radius:4px}"]})}}return r})();export{A as WeekFilterDemoComponent};
