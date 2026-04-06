import{a as C}from"./chunk-HAYVGET7.js";import"./chunk-W3V7OEYG.js";import"./chunk-35IBFZQM.js";import"./chunk-5JN3VS6X.js";import"./chunk-CGVOUCLE.js";import"./chunk-XJA634MG.js";import"./chunk-PRGDJABY.js";import{G as f,H as M}from"./chunk-XNXG5RW6.js";import"./chunk-6F733C44.js";import{Bc as h,Nb as s,Ob as p,Pb as g,Qb as n,Rb as e,cb as i,nc as u,oc as t,pc as o,sb as d,tc as v,uc as x,vc as m,zd as y}from"./chunk-6QGPMABE.js";import"./chunk-EU2KAMEK.js";import"./chunk-DAQOROHW.js";var P=()=>["Bootstrap","Layout","Timeline"],S=(a,c)=>c.id;function O(a,c){if(a&1&&(n(0,"div",3)(1,"div",8)(2,"mat-icon"),t(3),e()(),n(4,"div",9)(5,"div",10)(6,"h3"),t(7),e(),n(8,"span",11),t(9),e()(),n(10,"p"),t(11),e()()()),a&2){let l=c.$implicit;i(),u(l.type),i(2),o(l.icon),i(4),o(l.title),i(2),o(l.date),i(2),o(l.description)}}var A=(()=>{class a{constructor(){this.events=[{id:1,title:"Project Started",description:"Initial project setup and configuration",date:"Jan 15, 2024",icon:"flag",type:"success"},{id:2,title:"First Milestone",description:"Completed core features and components",date:"Feb 20, 2024",icon:"check_circle",type:"success"},{id:3,title:"Beta Release",description:"Released beta version for testing",date:"Mar 10, 2024",icon:"rocket_launch",type:"warning"},{id:4,title:"Production Launch",description:"Official production release",date:"Apr 1, 2024",icon:"celebration",type:"success"}]}static{this.\u0275fac=function(r){return new(r||a)}}static{this.\u0275cmp=d({type:a,selectors:[["app-timeline-demo"]],decls:115,vars:64,consts:[["title","Timeline","description","Vertical timeline for displaying chronological events",3,"tags","apiReference","examples"],["demo",""],[1,"timeline"],[1,"timeline-item"],["api",""],[1,"api-table"],[1,"feature-list"],["examples",""],[1,"timeline-marker"],[1,"timeline-content"],[1,"timeline-header"],[1,"timeline-date"]],template:function(r,E){r&1&&(n(0,"app-demo-page-template",0)(1,"div",1)(2,"div",2),s(3,O,12,6,"div",3,S),e()(),n(5,"div",4)(6,"h3"),t(7,"Component Overview"),e(),n(8,"p"),t(9," The Timeline component displays events in a vertical chronological layout. Perfect for showing order tracking, project milestones, activity logs, or any sequential events. "),e(),n(10,"h3"),t(11,"Selector"),e(),n(12,"pre")(13,"code"),t(14,"<bt-timeline></bt-timeline>"),e()(),n(15,"h3"),t(16,"Inputs"),e(),n(17,"table",5)(18,"thead")(19,"tr")(20,"th"),t(21,"Property"),e(),n(22,"th"),t(23,"Type"),e(),n(24,"th"),t(25,"Default"),e(),n(26,"th"),t(27,"Description"),e()()(),n(28,"tbody")(29,"tr")(30,"td")(31,"code"),t(32,"data"),e()(),n(33,"td")(34,"code"),t(35,"InputSignal<IKeyValue[]>"),e()(),n(36,"td")(37,"code"),t(38,"undefined"),e()(),n(39,"td"),t(40," Array of timeline events. Each event has a key (event name) and value (timestamp/date) "),e()()()(),n(41,"h3"),t(42,"Data Interface"),e(),n(43,"pre")(44,"code"),t(45),e()(),n(46,"h3"),t(47,"Key Features"),e(),n(48,"ul",6)(49,"li")(50,"strong"),t(51,"Vertical Layout:"),e(),t(52," Clean vertical timeline with connecting line "),e(),n(53,"li")(54,"strong"),t(55,"Event Markers:"),e(),t(56," Visual markers for each timeline event "),e(),n(57,"li")(58,"strong"),t(59,"Chronological Display:"),e(),t(60," Events displayed in order from top to bottom "),e(),n(61,"li")(62,"strong"),t(63,"Responsive:"),e(),t(64," Adapts to different screen sizes"),e(),n(65,"li")(66,"strong"),t(67,"Performance:"),e(),t(68," OnPush change detection for optimal rendering "),e(),n(69,"li")(70,"strong"),t(71,"Standalone:"),e(),t(72," No module imports required"),e()(),n(73,"h3"),t(74,"Use Cases"),e(),n(75,"ul")(76,"li"),t(77,"Order tracking and delivery status"),e(),n(78,"li"),t(79,"Project milestone tracking"),e(),n(80,"li"),t(81,"Activity logs and audit trails"),e(),n(82,"li"),t(83,"User journey visualization"),e(),n(84,"li"),t(85,"Historical event display"),e()()(),n(86,"div",7)(87,"h3"),t(88,"1. Basic Timeline"),e(),n(89,"p"),t(90,"Simple timeline with event names and dates."),e(),n(91,"pre")(92,"code"),t(93),e()(),n(94,"h3"),t(95,"2. Order Tracking Timeline"),e(),n(96,"p"),t(97,"Track order status with detailed timestamps."),e(),n(98,"pre")(99,"code"),t(100),e()(),n(101,"h3"),t(102,"3. Dynamic Timeline from API"),e(),n(103,"p"),t(104,"Load timeline events dynamically from a service."),e(),n(105,"pre")(106,"code"),t(107),e()(),n(108,"h3"),t(109,"4. Conditional Timeline"),e(),n(110,"p"),t(111,"Show timeline only when data is available."),e(),n(112,"pre")(113,"code"),t(114),e()()()()),r&2&&(g("tags",h(63,P))("apiReference",!0)("examples",!0),i(3),p(E.events),i(42),v("interface IKeyValue ","{",`
  key: string;    // Event title or name
  value: string;  // Event date, time, or description
`,"}",`

// Example
const events: IKeyValue[] = [
  `,"{"," key: 'Order Placed', value: 'March 14, 2024 10:30 AM' ","}",`,
  `,"{"," key: 'Payment Confirmed', value: 'March 14, 2024 10:31 AM' ","}",`
];`),i(48),m(["import ","{"," TimelineComponent ","}",` from '@arun-bharath-ui/cmp-bootstrap';

@Component(`,"{",`
  standalone: true,
  imports: [TimelineComponent],
  template: \`<bt-timeline [data]="events" />\`
`,"}",`)
export class ProjectHistoryComponent `,"{",`
  events: IKeyValue[] = [
    `,"{"," key: 'Project Started', value: 'January 15, 2024' ","}",`,
    `,"{"," key: 'First Milestone', value: 'February 20, 2024' ","}",`,
    `,"{"," key: 'Beta Release', value: 'March 10, 2024' ","}",`,
    `,"{"," key: 'Production Launch', value: 'April 1, 2024' ","}",`
  ];
`,"}"]),i(7),m(["export class OrderTrackingComponent ","{",`
  orderTimeline: IKeyValue[] = [
    `,"{"," key: 'Order Placed', value: 'March 14, 2024 at 10:30 AM' ","}",`,
    `,"{"," key: 'Payment Confirmed', value: 'March 14, 2024 at 10:31 AM' ","}",`,
    `,"{"," key: 'Order Processing', value: 'March 14, 2024 at 11:00 AM' ","}",`,
    `,"{"," key: 'Shipped', value: 'March 15, 2024 at 9:00 AM' ","}",`,
    `,"{"," key: 'Out for Delivery', value: 'March 16, 2024 at 8:00 AM' ","}",`,
    `,"{"," key: 'Delivered', value: 'March 16, 2024 at 2:30 PM' ","}",`
  ];
`,"}",`

<div class="order-status">
  <h2>Order #12345</h2>
  <bt-timeline [data]="orderTimeline" />
</div>`]),i(7),m(["export class ActivityLogComponent implements OnInit ","{",`
  activities: IKeyValue[] = [];
  loading = false;

  constructor(private activityService: ActivityService) `,"{","","}",`

  ngOnInit() `,"{",`
    this.loadActivities();
  `,"}",`

  loadActivities() `,"{",`
    this.loading = true;
    this.activityService.getActivityLog().subscribe(`,"{",`
      next: (data) => `,"{",`
        // Transform API response to IKeyValue format
        this.activities = data.map(item => (`,"{",`
          key: item.action,
          value: this.formatDate(item.timestamp)
        `,"}",`));
        this.loading = false;
      `,"}",`,
      error: (err) => `,"{",`
        console.error('Failed to load activities:', err);
        this.loading = false;
      `,"}",`
    `,"}",`);
  `,"}",`

  formatDate(timestamp: string): string `,"{",`
    return new Date(timestamp).toLocaleString();
  `,"}",`
`,"}",`

<bt-timeline [data]="activities" />`]),i(7),x("export class UserJourneyComponent ","{",`
  journeyEvents: IKeyValue[] = [];

  ngOnInit() `,"{",`
    this.loadUserJourney();
  `,"}",`
`,"}",`

@if (journeyEvents.length > 0) `,"{",`
  <bt-timeline [data]="journeyEvents" />
`,"}"," @else ","{",`
  <p>No journey events to display</p>
`,"}"))},dependencies:[C,y,M,f],styles:['.timeline[_ngcontent-%COMP%]{position:relative;padding-left:40px}.timeline[_ngcontent-%COMP%]:before{content:"";position:absolute;left:15px;top:0;bottom:0;width:2px;background:#e0e0e0}.timeline[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]{position:relative;margin-bottom:32px}.timeline[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]   .timeline-marker[_ngcontent-%COMP%]{position:absolute;left:-40px;width:32px;height:32px;border-radius:50%;background:#3f51b5;display:flex;align-items:center;justify-content:center}.timeline[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]   .timeline-marker[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#fff;font-size:18px;width:18px;height:18px}.timeline[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]   .timeline-marker.success[_ngcontent-%COMP%]{background:#4caf50}.timeline[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]   .timeline-marker.warning[_ngcontent-%COMP%]{background:#ff9800}.timeline[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]   .timeline-marker.error[_ngcontent-%COMP%]{background:#f44336}.timeline[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]{background:#fff;padding:16px;border-radius:8px;box-shadow:0 2px 4px #0000001a}.timeline[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]   .timeline-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:8px}.timeline[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]   .timeline-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;font-size:18px;font-weight:500}.timeline[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]   .timeline-header[_ngcontent-%COMP%]   .timeline-date[_ngcontent-%COMP%]{font-size:14px;color:#0009}.timeline[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;color:#000000b3;line-height:1.6}']})}}return a})();export{A as TimelineDemoComponent};
