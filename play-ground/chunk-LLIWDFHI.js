import{a as h,b as v}from"./chunk-DC5M5VGK.js";import{a as b,b as C}from"./chunk-Z4NTDZ7A.js";import{a as y}from"./chunk-HAYVGET7.js";import"./chunk-W3V7OEYG.js";import{d as E,f}from"./chunk-35IBFZQM.js";import"./chunk-5JN3VS6X.js";import"./chunk-CGVOUCLE.js";import"./chunk-XJA634MG.js";import"./chunk-PRGDJABY.js";import"./chunk-XNXG5RW6.js";import"./chunk-6F733C44.js";import{Bc as S,Jb as p,Kb as c,Pb as l,Qb as t,Rb as e,Sb as r,cb as i,oc as n,qc as x,rc as m,sb as s,tc as u,vc as g}from"./chunk-6QGPMABE.js";import"./chunk-EU2KAMEK.js";import"./chunk-DAQOROHW.js";var L=()=>["Bootstrap","Feedback","Loading"];function M(a,D){a&1&&r(0,"mat-spinner",8)}var F=(()=>{class a{constructor(){this.loading=!0}static{this.\u0275fac=function(o){return new(o||a)}}static{this.\u0275cmp=s({type:a,selectors:[["app-busy-loader-demo"]],decls:129,vars:30,consts:[["title","Busy Loader","description","Loading indicators for async operations",3,"tags","apiReference","examples"],["demo",""],[1,"loader-examples"],[1,"loader-item"],["diameter","50"],["mode","indeterminate"],["mode","determinate",3,"value"],["mat-raised-button","","color","primary",3,"disabled"],["diameter","20"],["api",""],[1,"api-table"],[1,"feature-list"],["examples",""]],template:function(o,d){o&1&&(t(0,"app-demo-page-template",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h3"),n(5,"Spinner"),e(),r(6,"mat-spinner",4),e(),t(7,"div",3)(8,"h3"),n(9,"Progress Bar"),e(),r(10,"mat-progress-bar",5),e(),t(11,"div",3)(12,"h3"),n(13,"Determinate Progress"),e(),r(14,"mat-progress-bar",6),t(15,"p"),n(16,"65% Complete"),e()(),t(17,"div",3)(18,"h3"),n(19,"Button with Loader"),e(),t(20,"button",7),p(21,M,1,0,"mat-spinner",8),n(22),e()()()(),t(23,"div",9)(24,"h3"),n(25,"Inputs"),e(),t(26,"table",10)(27,"thead")(28,"tr")(29,"th"),n(30,"Name"),e(),t(31,"th"),n(32,"Type"),e(),t(33,"th"),n(34,"Required"),e(),t(35,"th"),n(36,"Description"),e()()(),t(37,"tbody")(38,"tr")(39,"td"),n(40,"mode"),e(),t(41,"td")(42,"code"),n(43,"InputSignal<'determinate' | 'indeterminate'>"),e()(),t(44,"td"),n(45,"No"),e(),t(46,"td"),n(47,"Loader mode (default: 'indeterminate')"),e()(),t(48,"tr")(49,"td"),n(50,"type"),e(),t(51,"td")(52,"code"),n(53,"InputSignal<'bar' | 'circle'>"),e()(),t(54,"td"),n(55,"No"),e(),t(56,"td"),n(57,"Loader type (default: 'bar')"),e()(),t(58,"tr")(59,"td"),n(60,"size"),e(),t(61,"td")(62,"code"),n(63,"InputSignal<string>"),e()(),t(64,"td"),n(65,"No"),e(),t(66,"td"),n(67,"Loader size (default: '10')"),e()(),t(68,"tr")(69,"td"),n(70,"value"),e(),t(71,"td")(72,"code"),n(73,"InputSignal<number>"),e()(),t(74,"td"),n(75,"No"),e(),t(76,"td"),n(77,"Progress value (0-100) for determinate mode"),e()(),t(78,"tr")(79,"td"),n(80,"color"),e(),t(81,"td")(82,"code"),n(83,"InputSignal<string>"),e()(),t(84,"td"),n(85,"No"),e(),t(86,"td"),n(87,"Color class (default: 'bg-primary')"),e()()()(),t(88,"h3"),n(89,"Features"),e(),t(90,"ul",11)(91,"li"),n(92,"Two loader types: bar and circle"),e(),t(93,"li"),n(94,"Determinate and indeterminate modes"),e(),t(95,"li"),n(96,"Customizable size and color"),e(),t(97,"li"),n(98,"Progress value support"),e(),t(99,"li"),n(100,"OnPush change detection"),e(),t(101,"li"),n(102,"Standalone component"),e()()(),t(103,"div",12)(104,"h3"),n(105,"Basic Usage"),e(),t(106,"pre")(107,"code"),n(108),e()(),t(109,"h3"),n(110,"Circle Loader"),e(),t(111,"pre")(112,"code"),n(113),e()(),t(114,"h3"),n(115,"Determinate Progress"),e(),t(116,"pre")(117,"code"),n(118),e()(),t(119,"h3"),n(120,"Custom Color and Size"),e(),t(121,"pre")(122,"code"),n(123,`<bt-busy-loader
  [type]="'circle'"
  [size]="'20'"
  [color]="'bg-success'"
/>`),e()(),t(124,"h3"),n(125,"With Conditional Display"),e(),t(126,"pre")(127,"code"),n(128),e()()()()),o&2&&(l("tags",S(29,L))("apiReference",!0)("examples",!0),i(14),l("value",65),i(6),l("disabled",d.loading),i(),c(d.loading?21:-1),i(),x(" ",d.loading?"Loading...":"Load Data"," "),i(86),u("import ","{"," BusyLoaderComponent ","}",` from '@arun-bharath-ui/cmp-bootstrap';

@Component(`,"{",`
  standalone: true,
  imports: [BusyLoaderComponent],
  template: \\\`
    <bt-busy-loader />
  \\\`
`,"}",`)
export class LoadingComponent `,"{","","}"),i(5),m("export class DataLoadingComponent ","{",`
  loaderType = 'circle';
`,"}",`

<bt-busy-loader [type]="loaderType" />`),i(5),m("export class UploadComponent ","{",`
  uploadProgress = 45;
`,"}",`

<bt-busy-loader
  [mode]="'determinate'"
  [type]="'bar'"
  [value]="uploadProgress"
/>`),i(10),g(["export class ApiCallComponent ","{",`
  isLoading = false;

  loadData() `,"{",`
    this.isLoading = true;
    this.apiService.getData().subscribe(`,"{",`
      next: (data) => `,"{",`
        this.isLoading = false;
      `,"}",`,
      error: () => `,"{",`
        this.isLoading = false;
      `,"}",`
    `,"}",`);
  `,"}",`
`,"}",`

@if (isLoading) `,"{",`
  <bt-busy-loader [type]="'circle'" />
`,"}"]))},dependencies:[y,v,h,C,b,f,E],styles:[".loader-examples[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:32px}.loader-examples[_ngcontent-%COMP%]   .loader-item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-bottom:16px;font-weight:500;font-size:16px}.loader-examples[_ngcontent-%COMP%]   .loader-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:8px;color:#0009}.loader-examples[_ngcontent-%COMP%]   .loader-item[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px}"]})}}return a})();export{F as BusyLoaderDemoComponent};
