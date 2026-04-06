import{f as s}from"./chunk-5FBFIPUF.js";import{a as g}from"./chunk-HAYVGET7.js";import"./chunk-W3V7OEYG.js";import"./chunk-35IBFZQM.js";import"./chunk-5JN3VS6X.js";import"./chunk-CGVOUCLE.js";import"./chunk-XJA634MG.js";import"./chunk-PRGDJABY.js";import{G as b,H as x}from"./chunk-XNXG5RW6.js";import"./chunk-6F733C44.js";import{Bc as p,Pb as l,Qb as n,Rb as e,cb as i,oc as t,rc as d,sb as m,uc as c,vc as o,zd as u}from"./chunk-6QGPMABE.js";import"./chunk-EU2KAMEK.js";import"./chunk-DAQOROHW.js";var v=()=>["Bootstrap","Navigation"],P=(()=>{class a{static{this.\u0275fac=function(r){return new(r||a)}}static{this.\u0275cmp=m({type:a,selectors:[["app-breadcrumb-demo"]],decls:78,vars:40,consts:[["title","Breadcrumb","description","Navigation breadcrumbs showing the current page location",3,"tags","apiReference","examples"],["demo",""],[1,"breadcrumb"],["routerLink","/",1,"breadcrumb-item"],[1,"separator"],["routerLink","/components",1,"breadcrumb-item"],[1,"breadcrumb-item","active"],["api",""],[1,"api-table"],[1,"feature-list"],["examples",""]],template:function(r,E){r&1&&(n(0,"app-demo-page-template",0)(1,"div",1)(2,"nav",2)(3,"a",3)(4,"mat-icon"),t(5,"home"),e(),t(6," Home "),e(),n(7,"mat-icon",4),t(8,"chevron_right"),e(),n(9,"a",5),t(10,"Components"),e(),n(11,"mat-icon",4),t(12,"chevron_right"),e(),n(13,"span",6),t(14,"Breadcrumb"),e()()(),n(15,"div",7)(16,"h3"),t(17,"Inputs"),e(),n(18,"table",8)(19,"thead")(20,"tr")(21,"th"),t(22,"Name"),e(),n(23,"th"),t(24,"Type"),e(),n(25,"th"),t(26,"Required"),e(),n(27,"th"),t(28,"Description"),e()()(),n(29,"tbody")(30,"tr")(31,"td"),t(32,"data"),e(),n(33,"td")(34,"code"),t(35,"InputSignal<IKeyValue[]>"),e()(),n(36,"td"),t(37,"No"),e(),n(38,"td"),t(39,"Array of breadcrumb items"),e()()()(),n(40,"h3"),t(41,"IKeyValue Interface"),e(),n(42,"pre")(43,"code"),t(44),e()(),n(45,"h3"),t(46,"Features"),e(),n(47,"ul",9)(48,"li"),t(49,"Hierarchical navigation display"),e(),n(50,"li"),t(51,"Router integration"),e(),n(52,"li"),t(53,"Customizable separators"),e(),n(54,"li"),t(55,"Active item styling"),e(),n(56,"li"),t(57,"Responsive design"),e(),n(58,"li"),t(59,"OnPush change detection"),e(),n(60,"li"),t(61,"Standalone component"),e()()(),n(62,"div",10)(63,"h3"),t(64,"Basic Usage"),e(),n(65,"pre")(66,"code"),t(67),e()(),n(68,"h3"),t(69,"Dynamic Breadcrumbs"),e(),n(70,"pre")(71,"code"),t(72),e()(),n(73,"h3"),t(74,"With Icons"),e(),n(75,"pre")(76,"code"),t(77),e()()()()),r&2&&(l("tags",p(39,v))("apiReference",!0)("examples",!0),i(44),d("interface IKeyValue ","{",`
  key: string;    // Breadcrumb label
  value: string;  // Route path or URL
`,"}"),i(23),o(["import ","{"," BreadcrumbComponent ","}",` from '@arun-bharath-ui/cmp-bootstrap';

@Component(`,"{",`
  standalone: true,
  imports: [BreadcrumbComponent],
  template: \`
    <bt-breadcrumb [data]="breadcrumbs" />
  \`
`,"}",`)
export class PageHeaderComponent `,"{",`
  breadcrumbs = [
    `,"{"," key: 'Home', value: '/' ","}",`,
    `,"{"," key: 'Products', value: '/products' ","}",`,
    `,"{"," key: 'Electronics', value: '/products/electronics' ","}",`
  ];
`,"}"]),i(5),o(["export class ProductDetailComponent ","{",`
  breadcrumbs: IKeyValue[] = [];

  ngOnInit() `,"{",`
    this.route.data.subscribe(data => `,"{",`
      this.breadcrumbs = [
        `,"{"," key: 'Home', value: '/' ","}",`,
        `,"{"," key: 'Products', value: '/products' ","}",`,
        `,"{"," key: data['category'], value: '/products/' + data['category'] ","}",`,
        `,"{"," key: data['productName'], value: '' ","}",`
      ];
    `,"}",`);
  `,"}",`
`,"}"]),i(5),c("export class DashboardComponent ","{",`
  breadcrumbs = [
    `,"{"," key: '\u{1F3E0} Home', value: '/' ","}",`,
    `,"{"," key: '\u{1F4CA} Dashboard', value: '/dashboard' ","}",`,
    `,"{"," key: '\u{1F4C8} Analytics', value: '' ","}",`
  ];
`,"}"))},dependencies:[g,u,x,b,s],styles:[".breadcrumb[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;padding:12px 16px;background:#f5f5f5;border-radius:4px}.breadcrumb[_ngcontent-%COMP%]   .breadcrumb-item[_ngcontent-%COMP%]{display:flex;align-items:center;gap:4px;color:#3f51b5;text-decoration:none;font-size:14px}.breadcrumb[_ngcontent-%COMP%]   .breadcrumb-item[_ngcontent-%COMP%]:hover:not(.active){text-decoration:underline}.breadcrumb[_ngcontent-%COMP%]   .breadcrumb-item.active[_ngcontent-%COMP%]{color:#0009;cursor:default}.breadcrumb[_ngcontent-%COMP%]   .breadcrumb-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:18px;width:18px;height:18px}.breadcrumb[_ngcontent-%COMP%]   .separator[_ngcontent-%COMP%]{font-size:18px;width:18px;height:18px;color:#0006}"]})}}return a})();export{P as BreadcrumbDemoComponent};
