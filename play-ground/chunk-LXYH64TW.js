import{a as x}from"./chunk-W7DAE6VW.js";import"./chunk-Y44E6TIF.js";import"./chunk-24GYA6MA.js";import"./chunk-5FBFIPUF.js";import{a as b}from"./chunk-HAYVGET7.js";import"./chunk-W3V7OEYG.js";import"./chunk-35IBFZQM.js";import"./chunk-5JN3VS6X.js";import"./chunk-CGVOUCLE.js";import"./chunk-XJA634MG.js";import"./chunk-PRGDJABY.js";import"./chunk-XNXG5RW6.js";import"./chunk-6F733C44.js";import{Bc as s,Pb as d,Qb as n,Rb as e,Sb as u,cb as a,oc as t,sb as m,sc as l,tc as c,uc as p,vc as r}from"./chunk-6QGPMABE.js";import"./chunk-EU2KAMEK.js";import"./chunk-DAQOROHW.js";var h=()=>["Material","Navigation","Breadcrumb"],f=(()=>{class i{static{this.\u0275fac=function(o){return new(o||i)}}static{this.\u0275cmp=m({type:i,selectors:[["playground-breadcrumb-material-demo"]],decls:131,vars:122,consts:[["title","Material Breadcrumb","description","Dynamic breadcrumb navigation component using Material Design",3,"tags","apiReference","examples"],["demo",""],[1,"breadcrumb-demo"],[1,"note"],["api",""],[1,"feature-list"],["examples",""]],template:function(o,E){o&1&&(n(0,"app-demo-page-template",0)(1,"div",1)(2,"div",2)(3,"h3"),t(4,"Current Page Breadcrumb"),e(),u(5,"mt-bread-crumb"),n(6,"p",3),t(7," Note: The breadcrumb automatically generates based on your current route's data configuration. Navigate through the app to see it update dynamically. "),e()()(),n(8,"div",4)(9,"h3"),t(10,"Component Overview"),e(),n(11,"p"),t(12," The Material Breadcrumb component automatically generates breadcrumb navigation based on Angular route configuration. It reads breadcrumb data from route metadata and dynamically replaces parameters with actual values. "),e(),n(13,"h3"),t(14,"Selector"),e(),n(15,"pre")(16,"code"),t(17,"<mt-bread-crumb></mt-bread-crumb>"),e()(),n(18,"h3"),t(19,"Inputs"),e(),n(20,"p"),t(21," This component has no inputs - it automatically reads from route data. "),e(),n(22,"h3"),t(23,"Route Data Configuration"),e(),n(24,"p"),t(25,"Add breadcrumb data to your route configuration:"),e(),n(26,"pre")(27,"code"),t(28),e()(),n(29,"h3"),t(30,"Key Features"),e(),n(31,"ul",5)(32,"li")(33,"strong"),t(34,"Automatic Generation:"),e(),t(35," Reads from Angular Router's activated route "),e(),n(36,"li")(37,"strong"),t(38,"Dynamic Parameters:"),e(),t(39),e(),n(40,"li")(41,"strong"),t(42,"URL Parameters:"),e(),t(43," Replaces :param in URLs with actual values "),e(),n(44,"li")(45,"strong"),t(46,"Query Parameters:"),e(),t(47," Supports query parameter mapping "),e(),n(48,"li")(49,"strong"),t(50,"Material Design:"),e(),t(51," Styled with Material Design principles "),e(),n(52,"li")(53,"strong"),t(54,"Reactive:"),e(),t(55," Updates automatically on route changes"),e(),n(56,"li")(57,"strong"),t(58,"OnPush:"),e(),t(59," Optimized change detection"),e()(),n(60,"h3"),t(61,"Parameter Replacement"),e(),n(62,"ul")(63,"li")(64,"strong"),t(65,"Route Params:"),e(),t(66),e(),n(67,"li")(68,"strong"),t(69,"Query Params:"),e(),t(70),e(),n(71,"li")(72,"strong"),t(73,"URL Params:"),e(),t(74," :id \u2192 replaced with actual parameter in URL "),e()(),n(75,"h3"),t(76,"Use Cases"),e(),n(77,"ul")(78,"li"),t(79,"Multi-level navigation hierarchies"),e(),n(80,"li"),t(81,"E-commerce category navigation"),e(),n(82,"li"),t(83,"Admin panel section navigation"),e(),n(84,"li"),t(85,"Documentation site navigation"),e(),n(86,"li"),t(87,"Any hierarchical page structure"),e()()(),n(88,"div",6)(89,"h3"),t(90,"1. Basic Route Configuration"),e(),n(91,"p"),t(92,"Simple breadcrumb with static labels."),e(),n(93,"pre")(94,"code"),t(95),e()(),n(96,"h3"),t(97,"2. Dynamic Parameters"),e(),n(98,"p"),t(99,"Breadcrumb with dynamic route parameters."),e(),n(100,"pre")(101,"code"),t(102),e()(),n(103,"h3"),t(104,"3. Multi-Level Navigation"),e(),n(105,"p"),t(106,"Deep navigation hierarchy with multiple parameters."),e(),n(107,"pre")(108,"code"),t(109),e()(),n(110,"h3"),t(111,"4. With Query Parameters"),e(),n(112,"p"),t(113,"Include query parameters in breadcrumb navigation."),e(),n(114,"pre")(115,"code"),t(116),e()(),n(117,"h3"),t(118,"5. Component Usage"),e(),n(119,"p"),t(120,"Add the breadcrumb component to your layout."),e(),n(121,"pre")(122,"code"),t(123),e()(),n(124,"h3"),t(125,"6. Nested Routes"),e(),n(126,"p"),t(127,"Handle nested route configurations."),e(),n(128,"pre")(129,"code"),t(130),e()()()()),o&2&&(d("tags",s(121,h))("apiReference",!0)("examples",!0),a(28),p("interface Breadcrumb ","{",`
  label: string;      // Breadcrumb text (supports `,"{","","{","param","}","","}",` syntax)
  url: string;        // Navigation URL (supports :param syntax)
  paramMap?: Params;  // Optional query parameters
`,"}",`

// In your routes
data: `,"{",`
  breadcrumb: Breadcrumb[]
`,"}"),a(11),l(" Replaces ","{","","{","param","}","","}"," in labels with actual route params "),a(27),l(" ","{","","{","id","}","","}"," \u2192 replaced with actual route parameter value "),a(4),l(" ","{","","{","search","}","","}"," \u2192 replaced with query parameter value "),a(25),r(["import ","{"," Routes ","}",` from '@angular/router';

export const routes: Routes = [
  `,"{",`
    path: 'products',
    component: ProductsComponent,
    data: `,"{",`
      breadcrumb: [
        `,"{"," label: 'Home', url: '/' ","}",`,
        `,"{"," label: 'Products', url: '/products' ","}",`
      ]
    `,"}",`
  `,"}",`
];`]),a(7),r([`export const routes: Routes = [
  `,"{",`
    path: 'products/:id',
    component: ProductDetailComponent,
    data: `,"{",`
      breadcrumb: [
        `,"{"," label: 'Home', url: '/' ","}",`,
        `,"{"," label: 'Products', url: '/products' ","}",`,
        `,"{"," label: 'Product ","{","","{","id","}","","}","', url: '/products/:id' ","}",`
      ]
    `,"}",`
  `,"}",`
];

// When navigating to /products/123
// Breadcrumb displays: Home / Products / Product 123`]),a(7),r([`export const routes: Routes = [
  `,"{",`
    path: 'categories/:categoryId/products/:productId',
    component: ProductDetailComponent,
    data: `,"{",`
      breadcrumb: [
        `,"{"," label: 'Home', url: '/' ","}",`,
        `,"{"," label: 'Categories', url: '/categories' ","}",`,
        `,"{"," label: 'Category ","{","","{","categoryId","}","","}","', url: '/categories/:categoryId' ","}",`,
        `,"{"," label: 'Products', url: '/categories/:categoryId/products' ","}",`,
        `,"{"," label: 'Product ","{","","{","productId","}","","}","', url: '/categories/:categoryId/products/:productId' ","}",`
      ]
    `,"}",`
  `,"}",`
];

// URL: /categories/electronics/products/laptop-123
// Breadcrumb: Home / Categories / Category electronics / Products / Product laptop-123`]),a(7),r([`export const routes: Routes = [
  `,"{",`
    path: 'search',
    component: SearchComponent,
    data: `,"{",`
      breadcrumb: [
        `,"{"," label: 'Home', url: '/' ","}",`,
        `,"{",`
          label: 'Search: `,"{","","{","query","}","","}",`',
          url: '/search',
          paramMap: ['query:query', 'category:category']
        `,"}",`
      ]
    `,"}",`
  `,"}",`
];

// URL: /search?query=laptop&category=electronics
// Breadcrumb: Home / Search: laptop`]),a(7),c("import ","{"," BreadCrumbComponent ","}",` from '@arun-bharath-ui/cmp-material';

@Component(`,"{",`
  standalone: true,
  imports: [BreadCrumbComponent],
  template: \\\`
    <header>
      <mt-bread-crumb />
    </header>
    <main>
      <router-outlet />
    </main>
  \\\`
`,"}",`)
export class LayoutComponent `,"{","","}"),a(7),r([`export const routes: Routes = [
  `,"{",`
    path: 'admin',
    component: AdminLayoutComponent,
    data: `,"{",`
      breadcrumb: [
        `,"{"," label: 'Home', url: '/' ","}",`,
        `,"{"," label: 'Admin', url: '/admin' ","}",`
      ]
    `,"}",`,
    children: [
      `,"{",`
        path: 'users',
        component: UsersComponent,
        data: `,"{",`
          breadcrumb: [
            `,"{"," label: 'Home', url: '/' ","}",`,
            `,"{"," label: 'Admin', url: '/admin' ","}",`,
            `,"{"," label: 'Users', url: '/admin/users' ","}",`
          ]
        `,"}",`
      `,"}",`,
      `,"{",`
        path: 'users/:id',
        component: UserDetailComponent,
        data: `,"{",`
          breadcrumb: [
            `,"{"," label: 'Home', url: '/' ","}",`,
            `,"{"," label: 'Admin', url: '/admin' ","}",`,
            `,"{"," label: 'Users', url: '/admin/users' ","}",`,
            `,"{"," label: 'User ","{","","{","id","}","","}","', url: '/admin/users/:id' ","}",`
          ]
        `,"}",`
      `,"}",`
    ]
  `,"}",`
];`]))},dependencies:[b,x],styles:[".breadcrumb-demo[_ngcontent-%COMP%]{padding:24px;background:#f5f5f5;border-radius:8px}.breadcrumb-demo[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-top:0;margin-bottom:16px}.breadcrumb-demo[_ngcontent-%COMP%]   .note[_ngcontent-%COMP%]{margin-top:16px;padding:12px;background:#fff3cd;border-left:4px solid #ffc107;border-radius:4px;font-size:14px}"]})}}return i})();export{f as BreadcrumbMaterialDemoComponent};
