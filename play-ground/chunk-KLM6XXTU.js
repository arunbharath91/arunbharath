import{a as E}from"./chunk-HAYVGET7.js";import"./chunk-W3V7OEYG.js";import{d as b,f as v}from"./chunk-35IBFZQM.js";import"./chunk-5JN3VS6X.js";import"./chunk-CGVOUCLE.js";import"./chunk-XJA634MG.js";import"./chunk-PRGDJABY.js";import{G as g,H as f}from"./chunk-XNXG5RW6.js";import"./chunk-6F733C44.js";import{Bc as h,Pb as p,Qb as e,Rb as n,Zb as s,cb as i,lc as c,oc as t,pc as u,qc as m,rc as r,sb as d,tc as x,zd as S}from"./chunk-6QGPMABE.js";import"./chunk-EU2KAMEK.js";import"./chunk-DAQOROHW.js";var C=()=>["Bootstrap","Content","Interactive"],R=(()=>{class a{constructor(){this.expanded=!1,this.longText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."}static{this.\u0275fac=function(l){return new(l||a)}}static{this.\u0275cmp=d({type:a,selectors:[["app-view-more-demo"]],decls:94,vars:19,consts:[["title","View More","description","Expandable content with show more/less functionality",3,"tags","apiReference","examples"],["demo",""],[1,"content-container"],["mat-button","","color","primary",3,"click"],["api",""],[1,"api-table"],[1,"feature-list"],["examples",""]],template:function(l,o){l&1&&(e(0,"app-demo-page-template",0)(1,"div",1)(2,"div",2)(3,"p"),t(4),n(),e(5,"button",3),s("click",function(){return o.expanded=!o.expanded}),t(6),e(7,"mat-icon"),t(8),n()()()(),e(9,"div",4)(10,"h3"),t(11,"Inputs"),n(),e(12,"table",5)(13,"thead")(14,"tr")(15,"th"),t(16,"Name"),n(),e(17,"th"),t(18,"Type"),n(),e(19,"th"),t(20,"Required"),n(),e(21,"th"),t(22,"Description"),n()()(),e(23,"tbody")(24,"tr")(25,"td"),t(26,"maxHeight"),n(),e(27,"td")(28,"code"),t(29,"InputSignal<number>"),n()(),e(30,"td"),t(31,"No"),n(),e(32,"td"),t(33,"Maximum height in pixels (default: 100)"),n()(),e(34,"tr")(35,"td"),t(36,"label"),n(),e(37,"td")(38,"code"),t(39,"InputSignal<string[]>"),n()(),e(40,"td"),t(41,"No"),n(),e(42,"td"),t(43," Button labels [expanded, collapsed] (default: ['Read More', 'Read Less']) "),n()(),e(44,"tr")(45,"td"),t(46,"yOffset"),n(),e(47,"td")(48,"code"),t(49,"InputSignal<number>"),n()(),e(50,"td"),t(51,"No"),n(),e(52,"td"),t(53,"Scroll offset when collapsing (default: 120)"),n()()()(),e(54,"h3"),t(55,"Features"),n(),e(56,"ul",6)(57,"li"),t(58,"Automatic height detection"),n(),e(59,"li"),t(60,"Smooth expand/collapse animation"),n(),e(61,"li"),t(62,"Customizable max height"),n(),e(63,"li"),t(64,"Custom button labels"),n(),e(65,"li"),t(66,"Auto-scroll on collapse"),n(),e(67,"li"),t(68,"Shadow effect when collapsed"),n(),e(69,"li"),t(70,"OnPush change detection"),n(),e(71,"li"),t(72,"Only shows button if content exceeds max height"),n()()(),e(73,"div",7)(74,"h3"),t(75,"Basic Usage"),n(),e(76,"pre")(77,"code"),t(78),n()(),e(79,"h3"),t(80,"Custom Height"),n(),e(81,"pre")(82,"code"),t(83),n()(),e(84,"h3"),t(85,"Custom Labels"),n(),e(86,"pre")(87,"code"),t(88),n()(),e(89,"h3"),t(90,"With Custom Scroll Offset"),n(),e(91,"pre")(92,"code"),t(93,`<bt-view-more
  [maxHeight]="150"
  [yOffset]="80"
  [label]="['Read More', 'Read Less']"
>
  <article>
    <p>Article content...</p>
  </article>
</bt-view-more>`),n()()()()),l&2&&(p("tags",h(18,C))("apiReference",!0)("examples",!0),i(3),c("expanded",o.expanded),i(),m(" ",o.longText," "),i(2),m(" ",o.expanded?"Show Less":"Show More"," "),i(2),u(o.expanded?"expand_less":"expand_more"),i(70),x("import ","{"," ViewMoreComponent ","}",` from '@arun-bharath-ui/cmp-bootstrap';

@Component(`,"{",`
  standalone: true,
  imports: [ViewMoreComponent],
  template: \`
    <bt-view-more>
      <p>Long content here...</p>
    </bt-view-more>
  \`
`,"}",`)
export class ArticleComponent `,"{","","}"),i(5),r("export class ProductDescriptionComponent ","{",`
  maxHeight = 200;
`,"}",`

<bt-view-more [maxHeight]="maxHeight">
  <div>
    <h3>Product Details</h3>
    <p>Long product description...</p>
  </div>
</bt-view-more>`),i(5),r("export class ReviewsComponent ","{",`
  labels = ['Show Full Review', 'Hide Details'];
`,"}",`

<bt-view-more [label]="labels">
  <p>Customer review content...</p>
</bt-view-more>`))},dependencies:[E,S,v,b,f,g],styles:[".content-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{max-height:100px;overflow:hidden;transition:max-height .3s ease;line-height:1.6;margin-bottom:16px}.content-container[_ngcontent-%COMP%]   p.expanded[_ngcontent-%COMP%]{max-height:1000px}.content-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:flex;align-items:center;gap:4px}"]})}}return a})();export{R as ViewMoreDemoComponent};
