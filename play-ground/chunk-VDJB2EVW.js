import{a as b,b as h}from"./chunk-DC5M5VGK.js";import{a as P}from"./chunk-HAYVGET7.js";import"./chunk-W3V7OEYG.js";import"./chunk-35IBFZQM.js";import"./chunk-5JN3VS6X.js";import"./chunk-CGVOUCLE.js";import"./chunk-XJA634MG.js";import"./chunk-PRGDJABY.js";import"./chunk-XNXG5RW6.js";import"./chunk-6F733C44.js";import{Bc as C,Nb as d,Ob as p,Pb as m,Qb as e,Rb as t,Sb as c,cb as i,oc as n,pc as g,qc as x,rc as u,sb as s,tc as S,uc as E,vc as f,zd as v}from"./chunk-6QGPMABE.js";import"./chunk-EU2KAMEK.js";import"./chunk-DAQOROHW.js";var M=()=>["Bootstrap","Progress","Visual"],y=(r,o)=>o.label;function _(r,o){if(r&1&&(e(0,"div",3)(1,"div",8),c(2,"mat-progress-spinner",9),e(3,"div",10),n(4),t()(),e(5,"p"),n(6),t()()),r&2){let a=o.$implicit;i(2),m("mode","determinate")("value",a.value)("diameter",100)("strokeWidth",8)("color",a.color),i(2),x("",a.value,"%"),i(2),g(a.label)}}var R=(()=>{class r{constructor(){this.progressItems=[{label:"CPU Usage",value:75,color:"primary"},{label:"Memory",value:60,color:"accent"},{label:"Storage",value:85,color:"warn"},{label:"Network",value:45,color:"primary"}]}static{this.\u0275fac=function(l){return new(l||r)}}static{this.\u0275cmp=s({type:r,selectors:[["app-circle-progress-demo"]],decls:123,vars:30,consts:[["title","Circle Progress","description","Circular progress indicators for visual feedback",3,"tags","apiReference","examples"],["demo",""],[1,"progress-grid"],[1,"progress-item"],["api",""],[1,"api-table"],[1,"feature-list"],["examples",""],[1,"circle-wrapper"],[3,"mode","value","diameter","strokeWidth","color"],[1,"progress-value"]],template:function(l,I){l&1&&(e(0,"app-demo-page-template",0)(1,"div",1)(2,"div",2),d(3,_,7,7,"div",3,y),t()(),e(5,"div",4)(6,"h3"),n(7,"Inputs"),t(),e(8,"table",5)(9,"thead")(10,"tr")(11,"th"),n(12,"Name"),t(),e(13,"th"),n(14,"Type"),t(),e(15,"th"),n(16,"Required"),t(),e(17,"th"),n(18,"Description"),t()()(),e(19,"tbody")(20,"tr")(21,"td"),n(22,"data"),t(),e(23,"td")(24,"code"),n(25,"InputSignal<ICircleProgressData>"),t()(),e(26,"td"),n(27,"No"),t(),e(28,"td"),n(29,"Progress data with percentage, rating, and title"),t()(),e(30,"tr")(31,"td"),n(32,"params"),t(),e(33,"td")(34,"code"),n(35,"InputSignal<Partial<IKeyValue>>"),t()(),e(36,"td"),n(37,"No"),t(),e(38,"td"),n(39,"URL parameters for routing"),t()(),e(40,"tr")(41,"td"),n(42,"urlPath"),t(),e(43,"td")(44,"code"),n(45,"InputSignal<string>"),t()(),e(46,"td"),n(47,"No"),t(),e(48,"td"),n(49,"Navigation path"),t()(),e(50,"tr")(51,"td"),n(52,"fragment"),t(),e(53,"td")(54,"code"),n(55,"InputSignal<string>"),t()(),e(56,"td"),n(57,"No"),t(),e(58,"td"),n(59,"URL fragment"),t()(),e(60,"tr")(61,"td"),n(62,"target"),t(),e(63,"td")(64,"code"),n(65,"InputSignal<string>"),t()(),e(66,"td"),n(67,"No"),t(),e(68,"td"),n(69,"Link target (default: '_self')"),t()(),e(70,"tr")(71,"td"),n(72,"enableFeedback"),t(),e(73,"td")(74,"code"),n(75,"InputSignal<boolean>"),t()(),e(76,"td"),n(77,"No"),t(),e(78,"td"),n(79,"Enable feedback display (default: false)"),t()()()(),e(80,"h3"),n(81,"ICircleProgressData Interface"),t(),e(82,"pre")(83,"code"),n(84),t()(),e(85,"h3"),n(86,"Features"),t(),e(87,"ul",6)(88,"li"),n(89,"Circular progress visualization"),t(),e(90,"li"),n(91," Color-coded by percentage (danger < 0, warning 0-30, success > 30) "),t(),e(92,"li"),n(93,"Router integration"),t(),e(94,"li"),n(95,"Rating and title display"),t(),e(96,"li"),n(97,"Clickable with navigation support"),t(),e(98,"li"),n(99,"OnPush change detection"),t(),e(100,"li"),n(101,"Automatic stroke calculation"),t()()(),e(102,"div",7)(103,"h3"),n(104,"Basic Usage"),t(),e(105,"pre")(106,"code"),n(107),t()(),e(108,"h3"),n(109,"With Navigation"),t(),e(110,"pre")(111,"code"),n(112),t()(),e(113,"h3"),n(114,"Multiple Progress Indicators"),t(),e(115,"pre")(116,"code"),n(117),t()(),e(118,"h3"),n(119,"With Feedback Enabled"),t(),e(120,"pre")(121,"code"),n(122,`<bt-circle-progress
  [data]="progressData"
  [enableFeedback]="true"
  [urlPath]="'/feedback'"
/>`),t()()()()),l&2&&(m("tags",C(29,M))("apiReference",!0)("examples",!0),i(3),p(I.progressItems),i(81),u("interface ICircleProgressData ","{",`
  percentage: number;  // Progress percentage (0-100)
  rating: string;      // Rating text
  title: string;       // Progress title
`,"}"),i(23),E("import ","{"," CircleProgressComponent ","}",` from '@arun-bharath-ui/cmp-bootstrap';

@Component(`,"{",`
  standalone: true,
  imports: [CircleProgressComponent],
  template: \\\`
    <bt-circle-progress [data]="progressData" />
  \\\`
`,"}",`)
export class DashboardComponent `,"{",`
  progressData = `,"{",`
    percentage: 75,
    rating: '4.5/5',
    title: 'Completion Rate'
  `,"}",`;
`,"}"),i(5),S("export class MetricsComponent ","{",`
  progressData = `,"{",`
    percentage: 85,
    rating: 'Excellent',
    title: 'Performance'
  `,"}",`;

  routeParams = `,"{",`
    key: 'id',
    value: 'metrics-detail'
  `,"}",`;
`,"}",`

<bt-circle-progress
  [data]="progressData"
  [urlPath]="'/metrics'"
  [params]="routeParams"
/>`),i(5),f(["export class StatsComponent ","{",`
  stats = [
    `,"{"," percentage: 90, rating: 'A+', title: 'Quality' ","}",`,
    `,"{"," percentage: 25, rating: 'C', title: 'Speed' ","}",`,
    `,"{"," percentage: -10, rating: 'F', title: 'Errors' ","}",`
  ];
`,"}",`

@for (stat of stats; track stat.title) `,"{",`
  <bt-circle-progress [data]="stat" />
`,"}"]))},dependencies:[P,v,h,b],styles:[".progress-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:32px;text-align:center}.progress-grid[_ngcontent-%COMP%]   .progress-item[_ngcontent-%COMP%]   .circle-wrapper[_ngcontent-%COMP%]{position:relative;display:inline-block}.progress-grid[_ngcontent-%COMP%]   .progress-item[_ngcontent-%COMP%]   .circle-wrapper[_ngcontent-%COMP%]   .progress-value[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:20px;font-weight:500}.progress-grid[_ngcontent-%COMP%]   .progress-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:16px;color:#0009}"]})}}return r})();export{R as CircleProgressDemoComponent};
