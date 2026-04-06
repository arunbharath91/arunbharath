import{e as W}from"./chunk-W7DAE6VW.js";import"./chunk-Y44E6TIF.js";import"./chunk-24GYA6MA.js";import"./chunk-5FBFIPUF.js";import{a as x}from"./chunk-HAYVGET7.js";import"./chunk-W3V7OEYG.js";import"./chunk-35IBFZQM.js";import"./chunk-5JN3VS6X.js";import"./chunk-CGVOUCLE.js";import"./chunk-XJA634MG.js";import"./chunk-PRGDJABY.js";import"./chunk-XNXG5RW6.js";import"./chunk-6F733C44.js";import{Bc as u,Pb as d,Qb as n,Rb as e,Zb as h,cb as i,oc as t,qc as k,sb as p,tc as g,uc as w,vc as r}from"./chunk-6QGPMABE.js";import"./chunk-EU2KAMEK.js";import"./chunk-DAQOROHW.js";var E=()=>["Material","Date","Filter","Week"],C=(()=>{class m{constructor(){this.selectedWeek=0,this.lastAction="None"}onNextWeek(a){this.selectedWeek=a,this.lastAction="Next Week",console.log("Next week:",a)}onPrevWeek(a){this.selectedWeek=a,this.lastAction="Previous Week",console.log("Previous week:",a)}onWeekChange(a){this.selectedWeek=a,this.lastAction="Week Selection Changed",console.log("Week changed:",a)}static{this.\u0275fac=function(s){return new(s||m)}}static{this.\u0275cmp=p({type:m,selectors:[["playground-week-filter-material-demo"]],decls:199,vars:101,consts:[["title","Material Week Filter","description","Week selection and filtering component using Material Design",3,"tags","apiReference","examples"],["demo",""],[1,"week-filter-demo"],[3,"nextWeek","prevWeek","selectionChange","color"],[1,"selected-week"],["api",""],[1,"api-table"],[1,"feature-list"],["examples",""]],template:function(s,l){s&1&&(n(0,"app-demo-page-template",0)(1,"div",1)(2,"div",2)(3,"h3"),t(4,"Week Filter"),e(),n(5,"mt-week-filter",3),h("nextWeek",function(o){return l.onNextWeek(o)})("prevWeek",function(o){return l.onPrevWeek(o)})("selectionChange",function(o){return l.onWeekChange(o)}),e(),n(6,"div",4)(7,"p")(8,"strong"),t(9,"Selected Week:"),e(),t(10),e(),n(11,"p")(12,"strong"),t(13,"Last Action:"),e(),t(14),e()()()(),n(15,"div",5)(16,"h3"),t(17,"Component Overview"),e(),n(18,"p"),t(19," The Material Week Filter component provides week-based date selection with Material Design styling. It automatically calculates the current week and allows navigation between weeks with previous/next controls. "),e(),n(20,"h3"),t(21,"Selector"),e(),n(22,"pre")(23,"code"),t(24,"<mt-week-filter></mt-week-filter>"),e()(),n(25,"h3"),t(26,"Inputs"),e(),n(27,"table",6)(28,"thead")(29,"tr")(30,"th"),t(31,"Property"),e(),n(32,"th"),t(33,"Type"),e(),n(34,"th"),t(35,"Default"),e(),n(36,"th"),t(37,"Description"),e()()(),n(38,"tbody")(39,"tr")(40,"td")(41,"code"),t(42,"color"),e()(),n(43,"td")(44,"code"),t(45,"string"),e()(),n(46,"td")(47,"code"),t(48,"'accent'"),e()(),n(49,"td"),t(50,"Material color theme (primary, accent, warn)"),e()()()(),n(51,"h3"),t(52,"Outputs"),e(),n(53,"table",6)(54,"thead")(55,"tr")(56,"th"),t(57,"Event"),e(),n(58,"th"),t(59,"Type"),e(),n(60,"th"),t(61,"Description"),e()()(),n(62,"tbody")(63,"tr")(64,"td")(65,"code"),t(66,"nextWeek"),e()(),n(67,"td")(68,"code"),t(69,"OutputEmitterRef<number>"),e()(),n(70,"td"),t(71,"Emitted when next week button is clicked"),e()(),n(72,"tr")(73,"td")(74,"code"),t(75,"prevWeek"),e()(),n(76,"td")(77,"code"),t(78,"OutputEmitterRef<number>"),e()(),n(79,"td"),t(80,"Emitted when previous week button is clicked"),e()(),n(81,"tr")(82,"td")(83,"code"),t(84,"selectionChange"),e()(),n(85,"td")(86,"code"),t(87,"OutputEmitterRef<number>"),e()(),n(88,"td"),t(89,"Emitted when week selection changes"),e()()()(),n(90,"h3"),t(91,"Key Features"),e(),n(92,"ul",7)(93,"li")(94,"strong"),t(95,"Automatic Week Calculation:"),e(),t(96," Determines current week number automatically "),e(),n(97,"li")(98,"strong"),t(99,"Navigation Controls:"),e(),t(100," Previous/Next buttons for week navigation "),e(),n(101,"li")(102,"strong"),t(103,"Week Dropdown:"),e(),t(104," Select any week from dropdown list "),e(),n(105,"li")(106,"strong"),t(107,"Material Design:"),e(),t(108," Styled with Material Design buttons "),e(),n(109,"li")(110,"strong"),t(111,"Customizable Color:"),e(),t(112," Supports Material color themes "),e(),n(113,"li")(114,"strong"),t(115,"Event Emissions:"),e(),t(116," Separate events for next, previous, and selection changes "),e(),n(117,"li")(118,"strong"),t(119,"OnPush:"),e(),t(120," Optimized change detection"),e(),n(121,"li")(122,"strong"),t(123,"Boundary Handling:"),e(),t(124," Prevents navigation beyond valid week range "),e()(),n(125,"h3"),t(126,"Week Calculation"),e(),n(127,"p"),t(128,"The component uses utility functions to:"),e(),n(129,"ul")(130,"li"),t(131,"Calculate current week number from today's date"),e(),n(132,"li"),t(133,"Generate array of week numbers from 1 to current week"),e(),n(134,"li"),t(135,"Get days of week starting from specified day (0 = Sunday)"),e()(),n(136,"h3"),t(137,"Use Cases"),e(),n(138,"ul")(139,"li"),t(140,"Weekly report filtering"),e(),n(141,"li"),t(142,"Task scheduling by week"),e(),n(143,"li"),t(144,"Time tracking applications"),e(),n(145,"li"),t(146,"Weekly analytics dashboards"),e(),n(147,"li"),t(148,"Calendar-based data filtering"),e()()(),n(149,"div",8)(150,"h3"),t(151,"1. Basic Usage"),e(),n(152,"p"),t(153,"Simple week filter with event handling."),e(),n(154,"pre")(155,"code"),t(156),e()(),n(157,"h3"),t(158,"2. With Custom Color"),e(),n(159,"p"),t(160,"Use different Material color themes."),e(),n(161,"pre")(162,"code"),t(163),e()(),n(164,"h3"),t(165,"3. With Data Loading"),e(),n(166,"p"),t(167,"Load data when week changes."),e(),n(168,"pre")(169,"code"),t(170),e()(),n(171,"h3"),t(172,"4. With Date Range Display"),e(),n(173,"p"),t(174,"Show date range for selected week."),e(),n(175,"pre")(176,"code"),t(177),e()(),n(178,"h3"),t(179,"5. Navigation Tracking"),e(),n(180,"p"),t(181,"Track navigation direction."),e(),n(182,"pre")(183,"code"),t(184),e()(),n(185,"h3"),t(186,"6. With State Management"),e(),n(187,"p"),t(188,"Integrate with state management."),e(),n(189,"pre")(190,"code"),t(191),e()(),n(192,"h3"),t(193,"7. Multiple Week Filters"),e(),n(194,"p"),t(195,"Use multiple filters for comparison."),e(),n(196,"pre")(197,"code"),t(198),e()()()()),s&2&&(d("tags",u(100,E))("apiReference",!0)("examples",!0),i(5),d("color","primary"),i(5),k(" ",l.selectedWeek),i(4),k(" ",l.lastAction),i(142),r(["import ","{"," WeekFilterComponent ","}",` from '@arun-bharath-ui/cmp-material';

@Component(`,"{",`
  standalone: true,
  imports: [WeekFilterComponent],
  template: \\\`
    <mt-week-filter
      (nextWeek)="onNextWeek($event)"
      (prevWeek)="onPrevWeek($event)"
      (selectionChange)="onWeekChange($event)"
    />
  \\\`
`,"}",`)
export class WeeklyReportComponent `,"{",`
  selectedWeek: number = 0;

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
    this.selectedWeek = week;
    this.loadWeekData(week);
  `,"}",`

  loadWeekData(week: number) `,"{",`
    // Load data for selected week
  `,"}",`
`,"}"]),i(7),g("export class TasksComponent ","{",`
  weekColor = 'primary';

  onWeekChange(week: number) `,"{",`
    this.taskService.getTasksByWeek(week).subscribe(tasks => `,"{",`
      this.tasks = tasks;
    `,"}",`);
  `,"}",`
`,"}",`

<mt-week-filter
  [color]="weekColor"
  (selectionChange)="onWeekChange($event)"
/>`),i(7),r(["export class AnalyticsComponent ","{",`
  weeklyData: any[] = [];
  loading = false;
  currentWeek = 0;

  onWeekChange(week: number) `,"{",`
    this.currentWeek = week;
    this.loading = true;

    this.analyticsService.getWeeklyData(week).subscribe(`,"{",`
      next: (data) => `,"{",`
        this.weeklyData = data;
        this.loading = false;
      `,"}",`,
      error: (err) => `,"{",`
        console.error('Error loading week data:', err);
        this.loading = false;
      `,"}",`
    `,"}",`);
  `,"}",`
`,"}",`

<mt-week-filter (selectionChange)="onWeekChange($event)" />

@if (loading) `,"{",`
  <p>Loading week `,"{","","{"," currentWeek ","}","","}",` data...</p>
`,"}"," @else ","{",`
  <div>Data for week `,"{","","{"," currentWeek ","}","","}",`</div>
`,"}"]),i(7),r(["export class ScheduleComponent ","{",`
  selectedWeek = 0;
  dateRange = '';

  onWeekChange(week: number) `,"{",`
    this.selectedWeek = week;
    this.dateRange = this.getDateRangeForWeek(week);
  `,"}",`

  getDateRangeForWeek(weekNumber: number): string `,"{",`
    const year = new Date().getFullYear();
    const startDate = new Date(year, 0, (weekNumber - 1) * 7 + 1);
    const endDate = new Date(year, 0, weekNumber * 7);

    return \\\`$`,"{","startDate.toLocaleDateString()","}"," - $","{","endDate.toLocaleDateString()","}","\\`;\n  ","}",`
`,"}",`

<mt-week-filter (selectionChange)="onWeekChange($event)" />
<p>Week `,"{","","{"," selectedWeek ","}","","}",": ","{","","{"," dateRange ","}","","}","</p>"]),i(7),r(["export class NavigationComponent ","{",`
  currentWeek = 0;
  navigationHistory: string[] = [];

  onNextWeek(week: number) `,"{",`
    this.currentWeek = week;
    this.navigationHistory.push(\\\`Next \u2192 Week $`,"{","week","}",`\\\`);
    this.loadWeekData(week);
  `,"}",`

  onPrevWeek(week: number) `,"{",`
    this.currentWeek = week;
    this.navigationHistory.push(\\\`Previous \u2190 Week $`,"{","week","}",`\\\`);
    this.loadWeekData(week);
  `,"}",`

  onWeekChange(week: number) `,"{",`
    this.currentWeek = week;
    this.navigationHistory.push(\\\`Selected Week $`,"{","week","}",`\\\`);
    this.loadWeekData(week);
  `,"}",`
`,"}"]),i(7),w("export class ReportsComponent ","{",`
  private store = inject(Store);

  onWeekChange(week: number) `,"{",`
    // Dispatch action to update state
    this.store.dispatch(setSelectedWeek(`,"{"," week ","}",`));

    // Load data based on week
    this.store.dispatch(loadWeeklyReport(`,"{"," week ","}",`));
  `,"}",`
`,"}",`

<mt-week-filter (selectionChange)="onWeekChange($event)" />`),i(7),r(["export class ComparisonComponent ","{",`
  week1 = 0;
  week2 = 0;

  onWeek1Change(week: number) `,"{",`
    this.week1 = week;
    this.compareWeeks();
  `,"}",`

  onWeek2Change(week: number) `,"{",`
    this.week2 = week;
    this.compareWeeks();
  `,"}",`

  compareWeeks() `,"{",`
    if (this.week1 && this.week2) `,"{",`
      this.comparisonService.compare(this.week1, this.week2)
        .subscribe(result => `,"{",`
          this.comparisonData = result;
        `,"}",`);
    `,"}",`
  `,"}",`
`,"}",`

<div class="comparison">
  <div>
    <h3>Week 1</h3>
    <mt-week-filter [color]="'primary'" (selectionChange)="onWeek1Change($event)" />
  </div>
  <div>
    <h3>Week 2</h3>
    <mt-week-filter [color]="'accent'" (selectionChange)="onWeek2Change($event)" />
  </div>
</div>`]))},dependencies:[x,W],styles:[".week-filter-demo[_ngcontent-%COMP%]{padding:1rem}.week-filter-demo[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-bottom:1rem;color:#333}.week-filter-demo[_ngcontent-%COMP%]   .selected-week[_ngcontent-%COMP%]{margin-top:2rem;padding:1rem;background:#f5f5f5;border-radius:4px;border-left:4px solid #3f51b5}.week-filter-demo[_ngcontent-%COMP%]   .selected-week[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:.5rem 0;font-size:1rem}.week-filter-demo[_ngcontent-%COMP%]   .selected-week[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#3f51b5}"]})}}return m})();export{C as WeekFilterMaterialDemoComponent};
