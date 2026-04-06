import{a as E,b as y}from"./chunk-Z4NTDZ7A.js";import{a as S}from"./chunk-HAYVGET7.js";import"./chunk-W3V7OEYG.js";import"./chunk-35IBFZQM.js";import"./chunk-5JN3VS6X.js";import"./chunk-CGVOUCLE.js";import"./chunk-XJA634MG.js";import"./chunk-PRGDJABY.js";import{G as P,H as w}from"./chunk-XNXG5RW6.js";import"./chunk-6F733C44.js";import{Bc as p,Mb as f,Nb as s,Ob as l,Pb as g,Qb as n,Rb as e,Sb as u,cb as a,lc as C,oc as t,qc as c,rc as d,sb as x,uc as v,vc as _,zd as M}from"./chunk-6QGPMABE.js";import"./chunk-EU2KAMEK.js";import"./chunk-DAQOROHW.js";var b=()=>["Bootstrap","Rating","Analytics","Display"],h=()=>[1,2,3,4,5],k=(i,o)=>o.stars;function R(i,o){if(i&1&&(n(0,"mat-icon"),t(1,"star"),e()),i&2){let r=o.$implicit;C("filled",r<=4.5)}}function B(i,o){if(i&1&&(n(0,"div",9)(1,"span",14),t(2),n(3,"mat-icon"),t(4,"star"),e()(),u(5,"mat-progress-bar",15),n(6,"span",16),t(7),e()()),i&2){let r=o.$implicit;a(2),c("",r.stars," "),a(3),g("value",r.percentage),a(2),c("",r.percentage,"%")}}var $=(()=>{class i{constructor(){this.ratings=[{stars:5,percentage:70},{stars:4,percentage:20},{stars:3,percentage:5},{stars:2,percentage:3},{stars:1,percentage:2}]}static{this.\u0275fac=function(m){return new(m||i)}}static{this.\u0275cmp=x({type:i,selectors:[["app-rating-breakdown-demo"]],decls:98,vars:31,consts:[["title","Rating Breakdown","description","Visual rating distribution display with star ratings and progress bars",3,"tags","apiReference","examples"],["demo",""],[1,"rating-summary"],[1,"average-rating"],[1,"rating-number"],[1,"stars"],[3,"filled"],[1,"total-reviews"],[1,"rating-breakdown"],[1,"rating-row"],["api",""],[1,"api-table"],[1,"feature-list"],["examples",""],[1,"stars-label"],["mode","determinate",3,"value"],[1,"percentage"]],template:function(m,O){m&1&&(n(0,"app-demo-page-template",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4),t(5,"4.5"),e(),n(6,"div",5),s(7,R,2,2,"mat-icon",6,f),e(),n(9,"div",7),t(10,"Based on 1,234 reviews"),e()(),n(11,"div",8),s(12,B,8,3,"div",9,k),e()()(),n(14,"div",10)(15,"h3"),t(16,"Inputs"),e(),n(17,"table",11)(18,"thead")(19,"tr")(20,"th"),t(21,"Name"),e(),n(22,"th"),t(23,"Type"),e(),n(24,"th"),t(25,"Required"),e(),n(26,"th"),t(27,"Description"),e()()(),n(28,"tbody")(29,"tr")(30,"td"),t(31,"data"),e(),n(32,"td")(33,"code"),t(34,"InputSignal<IBreakdown>"),e()(),n(35,"td"),t(36,"No"),e(),n(37,"td"),t(38,"Rating breakdown data"),e()()()(),n(39,"h3"),t(40,"IBreakdown Interface"),e(),n(41,"pre")(42,"code"),t(43),e()(),n(44,"h3"),t(45,"Features"),e(),n(46,"ul",12)(47,"li"),t(48,"Visual star rating display"),e(),n(49,"li"),t(50,"Progress bars showing distribution"),e(),n(51,"li"),t(52,"Color-coded by rating (1-5 stars)"),e(),n(53,"li"),t(54,"Percentage display for each rating"),e(),n(55,"li"),t(56,"Responsive design"),e(),n(57,"li"),t(58,"OnPush change detection"),e()(),n(59,"h3"),t(60,"Color Scheme"),e(),n(61,"ul")(62,"li")(63,"strong"),t(64,"5 stars:"),e(),t(65," Success (green)"),e(),n(66,"li")(67,"strong"),t(68,"4 stars:"),e(),t(69," Success (green)"),e(),n(70,"li")(71,"strong"),t(72,"3 stars:"),e(),t(73," Primary (blue)"),e(),n(74,"li")(75,"strong"),t(76,"2 stars:"),e(),t(77," Warning (yellow)"),e(),n(78,"li")(79,"strong"),t(80,"1 star:"),e(),t(81," Danger (red)"),e()()(),n(82,"div",13)(83,"h3"),t(84,"Basic Usage"),e(),n(85,"pre")(86,"code"),t(87),e()(),n(88,"h3"),t(89,"Multiple Ratings"),e(),n(90,"pre")(91,"code"),t(92),e()(),n(93,"h3"),t(94,"With Summary"),e(),n(95,"pre")(96,"code"),t(97),e()()()()),m&2&&(g("tags",p(29,b))("apiReference",!0)("examples",!0),a(7),l(p(30,h)),a(5),l(O.ratings),a(31),d("interface IBreakdown ","{",`
  reviews: string;      // Number of reviews
  for: string;          // Star rating (1-5)
  percentage?: string;  // Percentage of total
`,"}"),a(44),v("import ","{"," RatingBreakDownComponent ","}",` from '@arun-bharath-ui/cmp-bootstrap';

@Component(`,"{",`
  standalone: true,
  imports: [RatingBreakDownComponent],
  template: \`
    <bt-rating-breakdown [data]="ratingData" />
  \`
`,"}",`)
export class ReviewsComponent `,"{",`
  ratingData = `,"{",`
    reviews: '1234',
    for: '5',
    percentage: '70'
  `,"}",`;
`,"}"),a(5),_(["export class ProductReviewsComponent ","{",`
  ratings = [
    `,"{"," reviews: '850', for: '5', percentage: '70' ","}",`,
    `,"{"," reviews: '250', for: '4', percentage: '20' ","}",`,
    `,"{"," reviews: '60', for: '3', percentage: '5' ","}",`,
    `,"{"," reviews: '40', for: '2', percentage: '3' ","}",`,
    `,"{"," reviews: '24', for: '1', percentage: '2' ","}",`
  ];
`,"}",`

@for (rating of ratings; track rating.for) `,"{",`
  <bt-rating-breakdown [data]="rating" />
`,"}"]),a(5),d(`<div class="rating-summary">
  <h3>Customer Reviews</h3>
  <div class="average">4.5 out of 5</div>

  @for (rating of ratings; track rating.for) `,"{",`
    <bt-rating-breakdown [data]="rating" />
  `,"}",`
</div>`))},dependencies:[S,M,y,E,w,P],styles:[".rating-summary[_ngcontent-%COMP%]{display:grid;grid-template-columns:200px 1fr;gap:48px;align-items:center}.rating-summary[_ngcontent-%COMP%]   .average-rating[_ngcontent-%COMP%]{text-align:center}.rating-summary[_ngcontent-%COMP%]   .average-rating[_ngcontent-%COMP%]   .rating-number[_ngcontent-%COMP%]{font-size:64px;font-weight:300;color:#3f51b5}.rating-summary[_ngcontent-%COMP%]   .average-rating[_ngcontent-%COMP%]   .stars[_ngcontent-%COMP%]{display:flex;justify-content:center;gap:4px;margin:8px 0}.rating-summary[_ngcontent-%COMP%]   .average-rating[_ngcontent-%COMP%]   .stars[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#ccc}.rating-summary[_ngcontent-%COMP%]   .average-rating[_ngcontent-%COMP%]   .stars[_ngcontent-%COMP%]   mat-icon.filled[_ngcontent-%COMP%]{color:#ffc107}.rating-summary[_ngcontent-%COMP%]   .average-rating[_ngcontent-%COMP%]   .total-reviews[_ngcontent-%COMP%]{font-size:14px;color:#0009}.rating-summary[_ngcontent-%COMP%]   .rating-breakdown[_ngcontent-%COMP%]   .rating-row[_ngcontent-%COMP%]{display:grid;grid-template-columns:60px 1fr 60px;gap:16px;align-items:center;margin-bottom:12px}.rating-summary[_ngcontent-%COMP%]   .rating-breakdown[_ngcontent-%COMP%]   .rating-row[_ngcontent-%COMP%]   .stars-label[_ngcontent-%COMP%]{display:flex;align-items:center;gap:4px;font-size:14px}.rating-summary[_ngcontent-%COMP%]   .rating-breakdown[_ngcontent-%COMP%]   .rating-row[_ngcontent-%COMP%]   .stars-label[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:16px;width:16px;height:16px;color:#ffc107}.rating-summary[_ngcontent-%COMP%]   .rating-breakdown[_ngcontent-%COMP%]   .rating-row[_ngcontent-%COMP%]   .percentage[_ngcontent-%COMP%]{text-align:right;font-size:14px;color:#0009}@media(max-width:768px){.rating-summary[_ngcontent-%COMP%]{grid-template-columns:1fr;gap:24px}}"]})}}return i})();export{$ as RatingBreakdownDemoComponent};
