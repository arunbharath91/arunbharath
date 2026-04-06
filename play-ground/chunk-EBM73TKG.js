import{a as j}from"./chunk-HAYVGET7.js";import"./chunk-W3V7OEYG.js";import{b as A,d as L,f as k}from"./chunk-35IBFZQM.js";import"./chunk-5JN3VS6X.js";import"./chunk-CGVOUCLE.js";import"./chunk-XJA634MG.js";import{a as F,c as N,e as $,g as H,i as V}from"./chunk-PRGDJABY.js";import{G as T,H as R,q as B,v as I}from"./chunk-XNXG5RW6.js";import"./chunk-6F733C44.js";import{$b as s,Bc as f,Gc as _,Hc as v,Jb as c,Kb as p,Mb as y,Nb as g,Ob as u,Pb as b,Qb as n,Rb as e,Sb as M,Za as E,ba as x,cb as r,lc as h,oc as t,pc as l,qc as P,rc as S,sb as m,tb as C,tc as D,vc as O,yd as z,zd as w}from"./chunk-6QGPMABE.js";import"./chunk-EU2KAMEK.js";import"./chunk-DAQOROHW.js";var W=(()=>{class i{static \u0275fac=function(o){return new(o||i)};static \u0275mod=C({type:i});static \u0275inj=x({imports:[B,I]})}return i})();var q=()=>["Bootstrap","E-commerce","Card"],Y=()=>[1,2,3,4,5],Z=(i,d)=>d.id;function K(i,d){if(i&1&&(n(0,"div",8),t(1),e()),i&2){let a=s().$implicit;r(),l(a.badge)}}function J(i,d){if(i&1&&(n(0,"mat-icon"),t(1,"star"),e()),i&2){let a=d.$implicit,o=s().$implicit;h("filled",a<=o.rating)}}function Q(i,d){if(i&1&&(n(0,"span",14),t(1),_(2,"currency"),e()),i&2){let a=s().$implicit;r(),l(v(2,1,a.oldPrice))}}function X(i,d){if(i&1&&(n(0,"mat-card",3),c(1,K,2,1,"div",8),M(2,"img",9),n(3,"mat-card-content")(4,"h3"),t(5),e(),n(6,"p",10),t(7),e(),n(8,"div",11),g(9,J,2,2,"mat-icon",12,y),n(11,"span"),t(12),e()(),n(13,"div",13),c(14,Q,3,3,"span",14),n(15,"span",15),t(16),_(17,"currency"),e()()(),n(18,"mat-card-actions")(19,"button",16)(20,"mat-icon"),t(21,"shopping_cart"),e(),t(22," Add to Cart "),e(),n(23,"button",17)(24,"mat-icon"),t(25,"favorite_border"),e()()()()),i&2){let a=d.$implicit;r(),p(a.badge?1:-1),r(),b("src",a.image,E)("alt",a.name),r(3),l(a.name),r(2),l(a.description),r(2),u(f(10,Y)),r(3),P("(",a.reviews,")"),r(2),p(a.oldPrice?14:-1),r(2),l(v(17,8,a.price))}}var fe=(()=>{class i{constructor(){this.products=[{id:1,name:"Wireless Headphones",description:"Premium noise-cancelling headphones",price:299.99,oldPrice:399.99,rating:4,reviews:128,image:"https://via.placeholder.com/280x200",badge:"SALE"},{id:2,name:"Smart Watch",description:"Fitness tracker with heart rate monitor",price:199.99,rating:5,reviews:89,image:"https://via.placeholder.com/280x200",badge:"NEW"},{id:3,name:"Laptop Stand",description:"Ergonomic aluminum laptop stand",price:49.99,rating:4,reviews:256,image:"https://via.placeholder.com/280x200",badge:null}]}static{this.\u0275fac=function(o){return new(o||i)}}static{this.\u0275cmp=m({type:i,selectors:[["app-product-tiles-demo"]],decls:123,vars:22,consts:[["title","Product Tiles","description","Product display cards for e-commerce",3,"tags","apiReference","examples"],["demo",""],[1,"product-grid"],[1,"product-card"],["api",""],[1,"api-table"],[1,"feature-list"],["examples",""],[1,"badge"],["mat-card-image","",3,"src","alt"],[1,"description"],[1,"rating"],[3,"filled"],[1,"price"],[1,"old-price"],[1,"current-price"],["mat-raised-button","","color","primary"],["mat-icon-button",""]],template:function(o,G){o&1&&(n(0,"app-demo-page-template",0)(1,"div",1)(2,"div",2),g(3,X,26,11,"mat-card",3,Z),e()(),n(5,"div",4)(6,"h3"),t(7,"Inputs (TilePrimaryComponent)"),e(),n(8,"table",5)(9,"thead")(10,"tr")(11,"th"),t(12,"Name"),e(),n(13,"th"),t(14,"Type"),e(),n(15,"th"),t(16,"Required"),e(),n(17,"th"),t(18,"Description"),e()()(),n(19,"tbody")(20,"tr")(21,"td"),t(22,"data"),e(),n(23,"td")(24,"code"),t(25,"InputSignal<TilePrimaryData>"),e()(),n(26,"td"),t(27,"Yes"),e(),n(28,"td"),t(29,"Product tile data"),e()(),n(30,"tr")(31,"td"),t(32,"params"),e(),n(33,"td")(34,"code"),t(35,"InputSignal<IKeyValue>"),e()(),n(36,"td"),t(37,"Yes"),e(),n(38,"td"),t(39,"URL parameters for routing"),e()(),n(40,"tr")(41,"td"),t(42,"urlPath"),e(),n(43,"td")(44,"code"),t(45,"InputSignal<string>"),e()(),n(46,"td"),t(47,"Yes"),e(),n(48,"td"),t(49,"Navigation path"),e()(),n(50,"tr")(51,"td"),t(52,"target"),e(),n(53,"td")(54,"code"),t(55,"InputSignal<string>"),e()(),n(56,"td"),t(57,"No"),e(),n(58,"td"),t(59,"Link target (default: '_self')"),e()()()(),n(60,"h3"),t(61,"TilePrimaryData Interface"),e(),n(62,"pre")(63,"code"),t(64),e()(),n(65,"h3"),t(66,"Other Tile Variants"),e(),n(67,"p"),t(68,"The library includes multiple tile components:"),e(),n(69,"ul")(70,"li")(71,"code"),t(72,"bt-tile-primary"),e(),t(73," - Primary product tile"),e(),n(74,"li")(75,"code"),t(76,"bt-tile-secondary-row"),e(),t(77," - Row layout with rating/price "),e(),n(78,"li")(79,"code"),t(80,"bt-tile-secondary-col"),e(),t(81," - Column layout with details "),e(),n(82,"li")(83,"code"),t(84,"bt-tile-secondary-des"),e(),t(85," - Detailed description tile "),e(),n(86,"li")(87,"code"),t(88,"bt-tile-tertiary"),e(),t(89," - Tertiary tile with comments"),e()(),n(90,"h3"),t(91,"Features"),e(),n(92,"ul",6)(93,"li"),t(94,"Multiple tile layouts (primary, secondary, tertiary)"),e(),n(95,"li"),t(96,"Product image display"),e(),n(97,"li"),t(98,"Rating and review support"),e(),n(99,"li"),t(100,"Price display with old price strikethrough"),e(),n(101,"li"),t(102,"Offer badges"),e(),n(103,"li"),t(104,"Router integration"),e(),n(105,"li"),t(106,"OnPush change detection"),e()()(),n(107,"div",7)(108,"h3"),t(109,"Basic Usage"),e(),n(110,"pre")(111,"code"),t(112),e()(),n(113,"h3"),t(114,"Secondary Row Tile"),e(),n(115,"pre")(116,"code"),t(117),e()(),n(118,"h3"),t(119,"With Custom Target"),e(),n(120,"pre")(121,"code"),t(122,`<bt-tile-primary
  [data]="productData"
  [params]="routeParams"
  [urlPath]="'/products'"
  [target]="'_blank'"
/>`),e()()()()),o&2&&(b("tags",f(21,q))("apiReference",!0)("examples",!0),r(3),u(G.products),r(61),S("interface TilePrimaryData ","{",`
  src: string;    // Product image URL
  title: string;  // Product title
`,"}"),r(48),O(["import ","{"," TilePrimaryComponent ","}",` from '@arun-bharath-ui/cmp-bootstrap';

@Component(`,"{",`
  standalone: true,
  imports: [TilePrimaryComponent],
  template: \`
    <bt-tile-primary
      [data]="productData"
      [params]="routeParams"
      [urlPath]="'/products'"
    />
  \`
`,"}",`)
export class ProductListComponent `,"{",`
  productData = `,"{",`
    src: 'assets/images/product.jpg',
    title: 'Wireless Headphones'
  `,"}",`;

  routeParams = `,"{",`
    key: 'id',
    value: '123'
  `,"}",`;
`,"}"]),r(5),D("import ","{"," TileSecondaryRowComponent ","}",` from '@arun-bharath-ui/cmp-bootstrap';

export class ProductGridComponent `,"{",`
  product = `,"{",`
    src: 'assets/images/product.jpg',
    rating: 4.5,
    currentprice: '$299.99',
    title: 'Smart Watch',
    oldprice: '$399.99',
    offer: '25% OFF',
    shortdesc: 'Fitness tracker with heart rate monitor'
  `,"}",`;
`,"}",`

<bt-tile-secondary-row [data]="product" />`))},dependencies:[j,w,V,F,$,N,H,k,L,A,R,T,W,z],styles:[".product-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:24px}.product-grid[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%]{position:relative}.product-grid[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%]{position:absolute;top:16px;right:16px;background:#f44336;color:#fff;padding:4px 12px;border-radius:12px;font-size:12px;font-weight:500;z-index:1}.product-grid[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:200px;object-fit:cover}.product-grid[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0 0 8px;font-size:18px;font-weight:500}.product-grid[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{color:#0009;font-size:14px;margin-bottom:12px}.product-grid[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%]   .rating[_ngcontent-%COMP%]{display:flex;align-items:center;gap:4px;margin-bottom:12px}.product-grid[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%]   .rating[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:16px;width:16px;height:16px;color:#ccc}.product-grid[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%]   .rating[_ngcontent-%COMP%]   mat-icon.filled[_ngcontent-%COMP%]{color:#ffc107}.product-grid[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%]   .rating[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:14px;color:#0009}.product-grid[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px}.product-grid[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]   .old-price[_ngcontent-%COMP%]{text-decoration:line-through;color:#0006;font-size:14px}.product-grid[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]   .current-price[_ngcontent-%COMP%]{font-size:20px;font-weight:500;color:#3f51b5}.product-grid[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%]   mat-card-actions[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:8px 16px}.product-grid[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%]   mat-card-actions[_ngcontent-%COMP%]   button[mat-raised-button][_ngcontent-%COMP%]{flex:1;margin-right:8px}"]})}}return i})();export{fe as ProductTilesDemoComponent};
