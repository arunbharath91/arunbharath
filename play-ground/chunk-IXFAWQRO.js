import{a as Q}from"./chunk-MXXR6PQ6.js";import{a as G}from"./chunk-V5C7FI6U.js";import{a as K}from"./chunk-DKFH35WL.js";import{b as X}from"./chunk-N5KNFZE4.js";import{ka as F,la as d,ma as W,na as j,oa as $,pa as J}from"./chunk-FSLXAI77.js";import"./chunk-O4PMXQUQ.js";import"./chunk-MGXTA5CE.js";import"./chunk-WIRG7O55.js";import{n as q}from"./chunk-RZJWTSPA.js";import{Bb as b,Bc as D,Cc as z,Dc as O,Ic as A,Jb as U,Kb as L,Kc as P,Pb as o,Qb as i,Rb as n,Sb as v,Sc as w,Tc as T,Wb as y,Xb as h,Xc as _,Yb as C,Zb as N,bc as u,bd as B,db as t,dc as H,ma as M,na as x,rc as f,sc as r,tc as S,ub as I,uc as E,xc as V,ya as m}from"./chunk-NUUKVCZD.js";import"./chunk-FK6H3RFT.js";import"./chunk-CHV5ZX5K.js";import"./chunk-EU2KAMEK.js";import"./chunk-DAQOROHW.js";var Y={basic:`import { TableComponent, ColumnDirective } from '@arun-bharath-ui/cmp-ui';

@Component({
  standalone: true,
  imports: [TableComponent, ColumnDirective],
  template: \`
    <ui-table [data]="users">
      <ng-container uiColumn key="id"    label="ID" />
      <ng-container uiColumn key="name"  label="Name"  [sortable]="true" />
      <ng-container uiColumn key="email" label="Email" [sortable]="true" />
      <ng-container uiColumn key="role"  label="Role" />
    </ui-table>
  \`
})
export class DemoComponent {
  users = [
    { id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin' },
    { id: 2, name: 'Bob Smith',     email: 'bob@example.com',   role: 'User'  },
  ];
}`,selection:`import { TableComponent, ColumnDirective, SelectionMode } from '@arun-bharath-ui/cmp-ui';

@Component({
  standalone: true,
  imports: [TableComponent, ColumnDirective],
  template: \`
    <ui-table
      [data]="users"
      [selectionMode]="SelectionMode.Multi"
      [(selected)]="selectedUsers"
    >
      <ng-container uiColumn key="name"  label="Name"  [sortable]="true" />
      <ng-container uiColumn key="email" label="Email" />
      <ng-container uiColumn key="role"  label="Role" />
    </ui-table>
    <p>Selected: {{ selectedUsers().length }}</p>
  \`
})
export class DemoComponent {
  readonly SelectionMode = SelectionMode;
  selectedUsers = signal<User[]>([]);
}`,customCell:`import { TableComponent, ColumnDirective, ColumnAlign } from '@arun-bharath-ui/cmp-ui';

@Component({
  standalone: true,
  imports: [TableComponent, ColumnDirective],
  template: \`
    <ui-table [data]="users">
      <ng-container uiColumn key="name" label="Name" [sortable]="true" />

      <ng-container uiColumn key="status" label="Status" [align]="ColumnAlign.Center">
        <ng-template #bodyCell let-value="value">
          <span [class]="'badge badge--' + value">{{ value }}</span>
        </ng-template>
      </ng-container>

      <ng-container uiColumn key="id" label="Actions" [align]="ColumnAlign.Center">
        <ng-template #bodyCell let-row>
          <button (click)="edit(row)">Edit</button>
        </ng-template>
      </ng-container>
    </ui-table>
  \`
})
export class DemoComponent {
  readonly ColumnAlign = ColumnAlign;
  edit(row: unknown) { console.log(row); }
}`,loading:`<!-- The table uses an isolated LoaderService instance (providers: [LoaderService])
     so triggering loading here won't affect any global ui-loader in your app. -->
<ui-table [data]="rows" [loading]="isLoading()">
  <ng-container uiColumn key="name"  label="Name" />
  <ng-container uiColumn key="email" label="Email" />
</ui-table>`,pagination:`<ui-table
  [data]="largeDataset"
  [pageSize]="5"
  [pageSizeOptions]="[5, 10, 20]"
  (pageChange)="onPageChange($event)"
>
  <ng-container uiColumn key="id"    label="ID" />
  <ng-container uiColumn key="name"  label="Name"  [sortable]="true" />
  <ng-container uiColumn key="email" label="Email" [sortable]="true" />
</ui-table>`,standalonePagination:`import { TablePaginationComponent } from '@arun-bharath-ui/cmp-ui';

@Component({
  standalone: true,
  imports: [TablePaginationComponent],
  template: \`
    <!-- Use pagination independently \u2014 e.g. on a card grid or list -->
    <div class="card-grid">
      @for (item of pagedItems(); track item.id) {
        <app-card [data]="item" />
      }
    </div>

    <ui-table-pagination
      [totalItems]="allItems.length"
      [pageSize]="12"
      [pageSizeOptions]="[6, 12, 24]"
      [(currentPage)]="currentPage"
      (pageChange)="onPageChange($event)"
    />
  \`
})
export class DemoComponent {
  currentPage = signal(1);
  readonly pageSize = 12;

  pagedItems = computed(() => {
    const start = (this.currentPage() - 1) * this.pageSize;
    return this.allItems.slice(start, start + this.pageSize);
  });

  onPageChange(e: ITablePagination) { console.log(e); }
}`,customComparator:`import { TableComponent, ColumnDirective } from '@arun-bharath-ui/cmp-ui';

@Component({
  standalone: true,
  imports: [TableComponent, ColumnDirective],
  template: \`
    <ui-table [data]="users">
      <ng-container uiColumn key="name" label="Name" [sortable]="true" />

      <!-- Sort age in reverse (descending-first) using a custom comparator -->
      <ng-container
        uiColumn
        key="age"
        label="Age"
        [sortable]="true"
        [comparator]="ageComparator"
      />

      <!-- Sort status by a custom priority order -->
      <ng-container
        uiColumn
        key="status"
        label="Status"
        [sortable]="true"
        [comparator]="statusComparator"
      />
    </ui-table>
  \`
})
export class DemoComponent {
  users = [
    { name: 'Alice', age: 32, status: 'Pending' },
    { name: 'Bob',   age: 24, status: 'Active'  },
    { name: 'Carol', age: 28, status: 'Inactive' },
  ];

  // Numeric comparator \u2014 natural ascending order
  ageComparator = (a: User, b: User): number => a.age - b.age;

  // Custom priority order: Active \u2192 Pending \u2192 Inactive
  private readonly STATUS_ORDER: Record<string, number> = {
    Active: 0, Pending: 1, Inactive: 2,
  };
  statusComparator = (a: User, b: User): number =>
    (this.STATUS_ORDER[a.status] ?? 99) - (this.STATUS_ORDER[b.status] ?? 99);
}`,serverSidePagination:`import { TableComponent, ColumnDirective, ITablePagination } from '@arun-bharath-ui/cmp-ui';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  standalone: true,
  imports: [TableComponent, ColumnDirective],
  template: \`
    <ui-table
      [data]="currentPageData()"
      [pageSize]="pageSize()"
      [page]="currentPage()"
      [totalRecords]="totalRecords()"
      (pageChange)="onPageChange($event)"
    >
      <ng-container uiColumn key="id"   label="ID" />
      <ng-container uiColumn key="name" label="Name" [sortable]="true" />
      <ng-container uiColumn key="email" label="Email" />
    </ui-table>
  \`
})
export class ServerPaginatedComponent {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private apiService = inject(MyApiService);

  // Read page/size from URL query params (persists on refresh)
  currentPage = signal(+(this.route.snapshot.queryParams['page'] || 1));
  pageSize = signal(+(this.route.snapshot.queryParams['size'] || 10));

  // API resource \u2014 re-fetches when page/size changes
  resource = this.apiService.getAll(
    () => this.currentPage(),
    () => this.pageSize(),
  );

  // Extract data and total from paginated response
  currentPageData = computed(() => this.resource.value()?.data ?? []);
  totalRecords = computed(() => this.resource.value()?.pagination?.total ?? 0);

  onPageChange(event: ITablePagination): void {
    this.currentPage.set(event.pageIndex);
    this.pageSize.set(event.pageSize);
    // Persist in URL so refresh returns to same page
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { page: event.pageIndex, size: event.pageSize },
      queryParamsHandling: 'merge',
    });
  }
}`};var te=()=>["Data","Signals","Sorting","Pagination","Selection"],ae=()=>[5,8,15,25],ne=()=>[5,10,25];function oe(s,c){if(s&1&&(i(0,"span",10),r(1),n()),s&2){let a=H();t(),E("",a.selectedUsers().length," selected")}}function ie(s,c){if(s&1&&(i(0,"span"),w(1,"lowercase"),r(2),n()),s&2){let a=c.value;f(A("badge badge--",T(1,4,a))),t(2),S(a)}}function re(s,c){if(s&1&&(i(0,"span"),w(1,"lowercase"),r(2),n()),s&2){let a=c.value;f(A("badge badge--",T(1,4,a))),t(2),S(a)}}function le(s,c){if(s&1&&(i(0,"span"),w(1,"lowercase"),r(2),n()),s&2){let a=c.value;f("badge badge--"+T(1,3,a)),t(2),S(a)}}var fe=(()=>{class s{constructor(){this.SelectionMode=d,this.ColumnAlign=W,this.SortDirection=F,this.snippets=Y,this.users=Array.from({length:42},(a,l)=>({id:l+1,name:k[l%k.length],email:`${k[l%k.length].toLowerCase().replace(" ",".")}${l}@example.com`,role:Z[l%Z.length],status:ee[l%ee.length],age:20+l%40})),this.selectedUsers=m([]),this.selectionMode=m(d.Multi),this.stickyHeader=m(!1),this.isLoading=m(!1),this.rowClassFn=a=>a.status==="Inactive"?"row--inactive":"",this.ageComparator=(a,l)=>a.age-l.age,this.STATUS_ORDER={Active:0,Pending:1,Inactive:2},this.statusComparator=(a,l)=>(this.STATUS_ORDER[a.status]??99)-(this.STATUS_ORDER[l.status]??99),this.tableProps=[{name:"data",type:"T[]",default:"[]",description:"Array of row data objects."},{name:"loading",type:"boolean",default:"false",description:"Shows a loading overlay over the table."},{name:"stickyHeader",type:"boolean",default:"false",description:"Fixes the header row when scrolling. Requires maxHeight to be set."},{name:"maxHeight",type:"string",default:'""',description:'CSS max-height on the scroll container (e.g. "400px"). Enables vertical scrolling and makes stickyHeader functional.'},{name:"selectionMode",type:"SelectionMode",default:"None",description:"Row selection mode: None, Single, or Multi."},{name:"selected",type:"T[]",default:"[]",description:"Two-way bindable selected rows [(selected)]."},{name:"pageSize",type:"number",default:"10",description:"Initial number of rows per page."},{name:"pageSizeOptions",type:"number[]",default:"[5,10,25,50]",description:"Available page size choices."},{name:"emptyMessage",type:"string",default:"No data available",description:"Message shown when data is empty."},{name:"rowClass",type:"(row: T, i: number) => string",default:'() => ""',description:"Function to apply a CSS class to a row."},{name:"page",type:"number",default:"0",description:"Initial page to display (1-indexed). Set from URL query params for page persistence on refresh."},{name:"totalRecords",type:"number",default:"0",description:"Total record count from the server. When > 0, enables server-side pagination mode \u2014 table skips internal slicing and uses this for page calculation."}],this.tableOutputs=[{name:"sortChange",type:"ITableSort",description:"Emits when the sort column or direction changes."},{name:"pageChange",type:"ITablePagination",description:"Emits when the page index or page size changes."}],this.columnProps=[{name:"key",type:"string",default:"\u2014",description:"Property key on the data object (required)."},{name:"label",type:"string",default:'""',description:"Column header text."},{name:"sortable",type:"boolean",default:"false",description:"Enables click-to-sort on this column."},{name:"align",type:"ColumnAlign",default:"Left",description:"Cell text alignment: Left, Center, Right."},{name:"width",type:"string",default:'""',description:'CSS width for the column (e.g. "120px").'},{name:"sticky",type:"boolean",default:"false",description:"Pins the column to the left when scrolling horizontally."},{name:"comparator",type:"(a,b) => number",default:"undefined",description:"Custom sort comparator for this column."}],this.columnTemplates=[{name:"#headerCell",type:"TemplateRef",description:"Custom header cell template."},{name:"#bodyCell",type:"TemplateRef<{ $implicit: T, value, index }>",description:"Custom body cell template. $implicit = row, value = cell value."}],this.paginationProps=[{name:"totalItems",type:"number",default:"\u2014",description:"Total number of items (required)."},{name:"pageSize",type:"number",default:"10",description:"Initial rows per page."},{name:"pageSizeOptions",type:"number[]",default:"[5,10,25,50]",description:"Available page size options."},{name:"[(currentPage)]",type:"number",default:"1",description:"Two-way bindable current page index."}],this.paginationOutputs=[{name:"pageChange",type:"ITablePagination",description:"Emits { pageIndex, pageSize } on every page or size change."}],this.standalonePage=m(1),this.serverPage=m(1),this.serverPageSize=m(5),this.serverTotal=42,this.serverPageData=B(()=>{let a=(this.serverPage()-1)*this.serverPageSize(),l=a+this.serverPageSize();return this.users.slice(a,l)}),this.tableTokens=[{localVar:"--ui-table-border",mapsTo:"var(--cmp-gray-200)",description:"Table border separator color",type:"color"},{localVar:"--ui-table-radius",mapsTo:"var(--cmp-radius-sm)",description:"Table outer container corner radius",type:"radius"},{localVar:"--ui-table-bg",mapsTo:"var(--cmp-white)",description:"Table body and row background color",type:"color"},{localVar:"--ui-table-header-bg",mapsTo:"var(--cmp-gray-50)",description:"Table header row background color",type:"color"},{localVar:"--ui-table-text",mapsTo:"var(--cmp-black)",description:"Body cells text color",type:"color"},{localVar:"--ui-table-header-text",mapsTo:"var(--cmp-gray-700)",description:"Header cells label text color",type:"color"},{localVar:"--ui-table-header-hover",mapsTo:"var(--cmp-gray-100)",description:"Header hover background (interactive sorting)",type:"color"},{localVar:"--ui-table-sorted-bg",mapsTo:"var(--cmp-gray-100)",description:"Column cells sorted column background overlay",type:"color"},{localVar:"--ui-table-accent",mapsTo:"var(--cmp-primary)",description:"Sort indicator / selection checkbox color",type:"color"},{localVar:"--ui-table-empty-text",mapsTo:"var(--cmp-gray-400)",description:"Placeholder text color for empty rows message",type:"color"},{localVar:"--ui-table-row-hover",mapsTo:"var(--cmp-gray-50)",description:"Body row background on hover",type:"color"},{localVar:"--ui-table-row-selected",mapsTo:"var(--cmp-primary-soft)",description:"Selected active row background color",type:"color"}],this.tableOverrideSnippet=`// Customize the Table Component
ui-table {
  --ui-table-radius: var(--cmp-radius-md);
  --ui-table-accent: var(--cmp-secondary);
  --ui-table-header-bg: var(--cmp-gray-800);
  --ui-table-header-text: var(--cmp-white);
  --ui-table-row-selected: var(--cmp-secondary-soft);
}`}onSelectionModeChange(a){let l=a==="multi"?d.Multi:a==="single"?d.Single:d.None;this.selectionMode.set(l)}onSelectionChange(a){this.selectedUsers.set(a)}triggerLoading(){this.isLoading.set(!0),setTimeout(()=>this.isLoading.set(!1),2e3)}onServerPageChange(a){this.serverPage.set(a.pageIndex),this.serverPageSize.set(a.pageSize)}static{this.\u0275fac=function(l){return new(l||s)}}static{this.\u0275cmp=I({type:s,selectors:[["playground-table-demo"]],decls:86,vars:59,consts:[["bodyCell",""],["title","Table","description","A lightweight, fully-featured data table built with Angular signals \u2014 sorting, pagination, row selection, custom cells, sticky headers and loading states.",3,"tags","apiReference","examples","theming"],["demo",""],[1,"demo-controls"],[3,"change","value"],["value","none"],["value","single"],["value","multi"],["type","checkbox",3,"change","checked"],[1,"demo-btn",3,"click"],[1,"demo-badge"],[3,"selectedChange","data","loading","stickyHeader","selectionMode","maxHeight","pageSize","pageSizeOptions","rowClass","selected"],["uiColumn","","key","id","label","ID","width","60px"],["uiColumn","","key","name","label","Name",3,"sortable"],["uiColumn","","key","email","label","Email",3,"sortable"],["uiColumn","","key","role","label","Role",3,"sortable","align"],["uiColumn","","key","status","label","Status",3,"sortable","align","comparator"],["uiColumn","","key","age","label","Age","width","70px",3,"sortable","align","comparator"],[1,"demo-section"],[1,"demo-section__label"],[3,"currentPageChange","totalItems","pageSize","currentPage"],[1,"demo-heading"],[1,"demo-desc"],[1,"demo-info-box"],[3,"pageChange","data","pageSize","page","totalRecords","pageSizeOptions"],["uiColumn","","key","email","label","Email"],["uiColumn","","key","role","label","Role"],["uiColumn","","key","status","label","Status"],[1,"demo-output"],["api",""],["title","Table Inputs",3,"properties"],["title","Table Outputs",3,"properties"],["title","uiColumn Directive Inputs",3,"properties"],["title","uiColumn Templates",3,"properties"],["title","ui-table-pagination Inputs",3,"properties"],["title","ui-table-pagination Outputs",3,"properties"],["examples",""],["title","Basic table with sorting","description","Minimal setup \u2014 pass data and define columns with the uiColumn directive.",3,"code"],["title","Row selection","description","Single or multi-row selection with two-way [(selected)] binding.",3,"code"],["title","Custom cell templates","description","Use #bodyCell to render badges, buttons, or any custom markup per cell.",3,"code"],["title","Pagination","description","Built-in pagination with configurable page size options.",3,"code"],["title","Loading state","description","Uses an isolated LoaderService instance \u2014 won't trigger the global app loader.",3,"code"],["title","Custom sort comparator","description","Pass a [comparator] function to any sortable column to override the default sort logic \u2014 useful for numeric, date, or priority-based ordering.",3,"code"],["title","Standalone pagination","description","ui-table-pagination can be used independently on any list or grid.",3,"code"],["title","Server-side pagination","description","Pass [totalRecords] to enable server-side mode. The table displays data as-is and uses the server total for page count. Combine with URL query params for page persistence on refresh.",3,"code"],["theming",""],["title","Table CSS Custom Properties",3,"tokens","overrideSnippet"]],template:function(l,e){if(l&1){let R=N();i(0,"playground-demo-page-template",1)(1,"div",2)(2,"div",3)(3,"label"),r(4," Selection mode: "),i(5,"select",4),u("change",function(p){return e.onSelectionModeChange(p.target.value)}),i(6,"option",5),r(7,"None"),n(),i(8,"option",6),r(9,"Single"),n(),i(10,"option",7),r(11,"Multi"),n()()(),i(12,"label")(13,"input",8),u("change",function(p){return e.stickyHeader.set(p.target.checked)}),n(),r(14," Sticky header "),n(),i(15,"button",9),u("click",function(){return e.triggerLoading()}),r(16," Simulate loading "),n(),U(17,oe,2,1,"span",10),n(),i(18,"ui-table",11),O("selectedChange",function(p){return M(R),z(e.selectedUsers,p)||(e.selectedUsers=p),x(p)}),C(19,12)(20,13)(21,14),y(22,15),b(23,ie,3,6,"ng-template",null,0,_),h(),y(25,16),b(26,re,3,6,"ng-template",null,0,_),h(),C(28,17),n(),i(29,"div",18)(30,"p",19)(31,"code"),r(32,"ui-table-pagination"),n(),r(33),n(),i(34,"ui-table-pagination",20),O("currentPageChange",function(p){return M(R),z(e.standalonePage,p)||(e.standalonePage=p),x(p)}),n()(),i(35,"h3",21),r(36,"Server-Side Pagination"),n(),i(37,"p",22),r(38," When "),i(39,"code"),r(40,"[totalRecords]"),n(),r(41," is set, the table enters "),i(42,"strong"),r(43,"server-side mode"),n(),r(44," \u2014 it displays the data as-is (no internal slicing) and uses the total for page count calculation. Each page change triggers a new API call. "),n(),i(45,"div",23)(46,"strong"),r(47,"How it works:"),n(),r(48," Pass only the current page's data to "),i(49,"code"),r(50,"[data]"),n(),r(51,", set "),i(52,"code"),r(53,"[totalRecords]"),n(),r(54," to the server's total count, and listen to "),i(55,"code"),r(56,"(pageChange)"),n(),r(57," to fetch the next page. "),n(),i(58,"ui-table",24),u("pageChange",function(p){return e.onServerPageChange(p)}),C(59,12)(60,13)(61,25)(62,26),y(63,27),b(64,le,3,5,"ng-template",null,0,_),h(),n(),i(66,"pre",28),r(67),n()(),i(68,"div",29),v(69,"playground-api-table",30)(70,"playground-api-table",31)(71,"playground-api-table",32)(72,"playground-api-table",33)(73,"playground-api-table",34)(74,"playground-api-table",35),n(),i(75,"div",36),v(76,"playground-example-viewer",37)(77,"playground-example-viewer",38)(78,"playground-example-viewer",39)(79,"playground-example-viewer",40)(80,"playground-example-viewer",41)(81,"playground-example-viewer",42)(82,"playground-example-viewer",43)(83,"playground-example-viewer",44),n(),i(84,"div",45),v(85,"playground-token-table",46),n()()}l&2&&(o("tags",P(56,te))("apiReference",!0)("examples",!0)("theming",!0),t(5),o("value",e.selectionMode()),t(8),o("checked",e.stickyHeader()),t(4),L(e.selectedUsers().length>0?17:-1),t(),o("data",e.users)("loading",e.isLoading())("stickyHeader",e.stickyHeader())("selectionMode",e.selectionMode())("maxHeight",e.stickyHeader()?"400px":"")("pageSize",8)("pageSizeOptions",P(57,ae))("rowClass",e.rowClassFn),D("selected",e.selectedUsers),t(2),o("sortable",!0),t(),o("sortable",!0),t(),o("sortable",!0)("align",e.ColumnAlign.Center),t(3),o("sortable",!0)("align",e.ColumnAlign.Center)("comparator",e.statusComparator),t(3),o("sortable",!0)("align",e.ColumnAlign.Right)("comparator",e.ageComparator),t(5),E(" used standalone (page ",e.standalonePage()," of 10): "),t(),o("totalItems",100)("pageSize",10),D("currentPage",e.standalonePage),t(24),o("data",e.serverPageData())("pageSize",e.serverPageSize())("page",e.serverPage())("totalRecords",e.serverTotal)("pageSizeOptions",P(58,ne)),t(2),o("sortable",!0),t(7),V("Page: ",e.serverPage()," | Size: ",e.serverPageSize()," | Total: ",e.serverTotal," | Showing: ",e.serverPageData().length," rows"),t(2),o("properties",e.tableProps),t(),o("properties",e.tableOutputs),t(),o("properties",e.columnProps),t(),o("properties",e.columnTemplates),t(),o("properties",e.paginationProps),t(),o("properties",e.paginationOutputs),t(2),o("code",e.snippets.basic),t(),o("code",e.snippets.selection),t(),o("code",e.snippets.customCell),t(),o("code",e.snippets.pagination),t(),o("code",e.snippets.loading),t(),o("code",e.snippets.customComparator),t(),o("code",e.snippets.standalonePagination),t(),o("code",e.snippets.serverSidePagination),t(2),o("tokens",e.tableTokens)("overrideSnippet",e.tableOverrideSnippet))},dependencies:[X,G,K,J,j,$,Q,q],styles:[".demo-controls[_ngcontent-%COMP%]{display:flex;align-items:center;flex-wrap:wrap;gap:1rem;margin-bottom:1rem}.demo-controls[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.4rem;font-size:var(--cmp-font-sm);color:var(--cmp-gray-700)}.demo-controls[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{border:1px solid var(--cmp-gray-300);border-radius:var(--cmp-radius-sm);padding:.25rem .5rem;font-size:var(--cmp-font-sm);background:var(--cmp-white);color:var(--cmp-gray-800)}.demo-btn[_ngcontent-%COMP%]{padding:.35rem .85rem;border:1px solid var(--cmp-primary);border-radius:var(--cmp-radius-sm);background:transparent;color:var(--cmp-primary);font-size:var(--cmp-font-sm);cursor:pointer;transition:background .15s,color .15s}.demo-btn[_ngcontent-%COMP%]:hover{background:var(--cmp-primary);color:var(--cmp-white)}.demo-badge[_ngcontent-%COMP%]{padding:.25rem .65rem;border-radius:var(--cmp-radius-full);background:var(--cmp-primary-soft);color:var(--cmp-primary);font-size:var(--cmp-font-xs);font-weight:var(--cmp-font-semibold)}.badge[_ngcontent-%COMP%]{display:inline-block;padding:.2rem .6rem;border-radius:var(--cmp-radius-full);font-size:var(--cmp-font-xs);font-weight:var(--cmp-font-semibold);white-space:nowrap}.badge--admin[_ngcontent-%COMP%]{background:var(--cmp-danger-soft);color:var(--cmp-danger)}.badge--editor[_ngcontent-%COMP%]{background:var(--cmp-success-soft);color:var(--cmp-success)}.badge--viewer[_ngcontent-%COMP%]{background:var(--cmp-primary-soft);color:var(--cmp-primary)}.badge--manager[_ngcontent-%COMP%]{background:var(--cmp-warning-soft);color:var(--cmp-warning)}.badge--active[_ngcontent-%COMP%]{background:var(--cmp-success-soft);color:var(--cmp-success)}.badge--inactive[_ngcontent-%COMP%]{background:var(--cmp-gray-100);color:var(--cmp-gray-500)}.badge--pending[_ngcontent-%COMP%]{background:var(--cmp-warning-soft);color:var(--cmp-warning)}[_nghost-%COMP%]     .row--inactive{opacity:.55}.demo-section[_ngcontent-%COMP%]{margin-top:1.5rem;border:1px dashed var(--cmp-gray-300);border-radius:var(--cmp-radius-sm);padding:1rem}.demo-section__label[_ngcontent-%COMP%]{font-size:var(--cmp-font-xs);color:var(--cmp-gray-600);margin:0 0 .75rem}.demo-section__label[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:var(--cmp-gray-100);padding:.1rem .35rem;border-radius:var(--cmp-radius-sm);font-size:var(--cmp-font-xs)}.demo-heading[_ngcontent-%COMP%]{font-size:var(--cmp-font-lg, 1.125rem);font-weight:600;color:var(--cmp-gray-900, #111);margin:2rem 0 .5rem}.demo-desc[_ngcontent-%COMP%]{font-size:var(--cmp-font-sm, .875rem);color:var(--cmp-gray-600, #555);margin:0 0 1rem;line-height:1.6}.demo-desc[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:var(--cmp-gray-100, #f3f4f6);padding:2px 6px;border-radius:4px;font-size:.8em}.demo-info-box[_ngcontent-%COMP%]{background:var(--cmp-primary-light, #eef2ff);border-left:4px solid var(--cmp-primary, #6366f1);padding:.75rem 1rem;border-radius:4px;font-size:var(--cmp-font-sm, .875rem);color:var(--cmp-gray-700, #333);margin-bottom:1rem}.demo-info-box[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:var(--cmp-primary, #6366f1)}.demo-info-box[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#6366f11a;padding:2px 5px;border-radius:3px}.demo-output[_ngcontent-%COMP%]{margin-top:.75rem;padding:.5rem .75rem;background:var(--cmp-gray-50, #f9fafb);border-radius:4px;font-size:.75rem;font-family:SF Mono,monospace;color:var(--cmp-gray-600, #555)}"],changeDetection:0})}}return s})(),k=["Alice Johnson","Bob Smith","Carol White","David Brown","Eva Martinez","Frank Lee","Grace Kim","Henry Wilson"],Z=["Admin","Editor","Viewer","Manager"],ee=["Active","Inactive","Pending"];export{fe as TableDemoComponent};
