import{a as X}from"./chunk-7G6ASC32.js";import{a as $}from"./chunk-N6NA3XCO.js";import{b as J}from"./chunk-G7ZIQJ6X.js";import{ha as F,ia as c,ja as W,ka as V,la as q,ma as j}from"./chunk-OAN3UY7U.js";import"./chunk-Q6P3UIUZ.js";import"./chunk-V3AM2RAD.js";import"./chunk-H2UPXF7Z.js";import"./chunk-5LJC7C5H.js";import{n as B}from"./chunk-BQIXJMI7.js";import{$b as u,Ec as E,Gc as A,Hb as U,Ib as L,Nb as a,Ob as r,Oc as O,Pb as o,Pc as x,Qb as h,Tc as z,Ub as f,Vb as S,Wb as w,Xb as N,bc as H,cb as t,ma as C,na as y,oc as _,pc as s,qc as P,rc as T,tb as R,xc as k,ya as m,yc as M,zb as v,zc as D}from"./chunk-FEOD6RYX.js";import"./chunk-EU2KAMEK.js";import"./chunk-DAQOROHW.js";var G={basic:`import { TableComponent, ColumnDirective } from '@arun-bharath-ui/cmp-ui';

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
}`};var Y=()=>["Data","Signals","Sorting","Pagination","Selection"],Z=()=>[5,8,15,25];function ee(l,d){if(l&1&&(r(0,"span",10),s(1),o()),l&2){let n=H();t(),T("",n.selectedUsers().length," selected")}}function te(l,d){if(l&1&&(r(0,"span"),O(1,"lowercase"),s(2),o()),l&2){let n=d.value;_(E("badge badge--",x(1,4,n))),t(2),P(n)}}function ae(l,d){if(l&1&&(r(0,"span"),O(1,"lowercase"),s(2),o()),l&2){let n=d.value;_(E("badge badge--",x(1,4,n))),t(2),P(n)}}var ue=(()=>{class l{constructor(){this.SelectionMode=c,this.ColumnAlign=W,this.SortDirection=F,this.snippets=G,this.users=Array.from({length:42},(n,i)=>({id:i+1,name:b[i%b.length],email:`${b[i%b.length].toLowerCase().replace(" ",".")}${i}@example.com`,role:K[i%K.length],status:Q[i%Q.length],age:20+i%40})),this.selectedUsers=m([]),this.selectionMode=m(c.Multi),this.stickyHeader=m(!1),this.isLoading=m(!1),this.rowClassFn=n=>n.status==="Inactive"?"row--inactive":"",this.ageComparator=(n,i)=>n.age-i.age,this.STATUS_ORDER={Active:0,Pending:1,Inactive:2},this.statusComparator=(n,i)=>(this.STATUS_ORDER[n.status]??99)-(this.STATUS_ORDER[i.status]??99),this.tableProps=[{name:"data",type:"T[]",default:"[]",description:"Array of row data objects."},{name:"loading",type:"boolean",default:"false",description:"Shows a loading overlay over the table."},{name:"stickyHeader",type:"boolean",default:"false",description:"Fixes the header row when scrolling. Requires maxHeight to be set."},{name:"maxHeight",type:"string",default:'""',description:'CSS max-height on the scroll container (e.g. "400px"). Enables vertical scrolling and makes stickyHeader functional.'},{name:"selectionMode",type:"SelectionMode",default:"None",description:"Row selection mode: None, Single, or Multi."},{name:"selected",type:"T[]",default:"[]",description:"Two-way bindable selected rows [(selected)]."},{name:"pageSize",type:"number",default:"10",description:"Initial number of rows per page."},{name:"pageSizeOptions",type:"number[]",default:"[5,10,25,50]",description:"Available page size choices."},{name:"emptyMessage",type:"string",default:"No data available",description:"Message shown when data is empty."},{name:"rowClass",type:"(row: T, i: number) => string",default:'() => ""',description:"Function to apply a CSS class to a row."}],this.tableOutputs=[{name:"sortChange",type:"ITableSort",description:"Emits when the sort column or direction changes."},{name:"pageChange",type:"ITablePagination",description:"Emits when the page index or page size changes."}],this.columnProps=[{name:"key",type:"string",default:"\u2014",description:"Property key on the data object (required)."},{name:"label",type:"string",default:'""',description:"Column header text."},{name:"sortable",type:"boolean",default:"false",description:"Enables click-to-sort on this column."},{name:"align",type:"ColumnAlign",default:"Left",description:"Cell text alignment: Left, Center, Right."},{name:"width",type:"string",default:'""',description:'CSS width for the column (e.g. "120px").'},{name:"sticky",type:"boolean",default:"false",description:"Pins the column to the left when scrolling horizontally."},{name:"comparator",type:"(a,b) => number",default:"undefined",description:"Custom sort comparator for this column."}],this.columnTemplates=[{name:"#headerCell",type:"TemplateRef",description:"Custom header cell template."},{name:"#bodyCell",type:"TemplateRef<{ $implicit: T, value, index }>",description:"Custom body cell template. $implicit = row, value = cell value."}],this.paginationProps=[{name:"totalItems",type:"number",default:"\u2014",description:"Total number of items (required)."},{name:"pageSize",type:"number",default:"10",description:"Initial rows per page."},{name:"pageSizeOptions",type:"number[]",default:"[5,10,25,50]",description:"Available page size options."},{name:"[(currentPage)]",type:"number",default:"1",description:"Two-way bindable current page index."}],this.paginationOutputs=[{name:"pageChange",type:"ITablePagination",description:"Emits { pageIndex, pageSize } on every page or size change."}],this.standalonePage=m(1)}onSelectionModeChange(n){let i=n==="multi"?c.Multi:n==="single"?c.Single:c.None;this.selectionMode.set(i)}onSelectionChange(n){this.selectedUsers.set(n)}triggerLoading(){this.isLoading.set(!0),setTimeout(()=>this.isLoading.set(!1),2e3)}static{this.\u0275fac=function(i){return new(i||l)}}static{this.\u0275cmp=R({type:l,selectors:[["playground-table-demo"]],decls:50,vars:44,consts:[["bodyCell",""],["title","Table","description","A lightweight, fully-featured data table built with Angular signals \u2014 sorting, pagination, row selection, custom cells, sticky headers and loading states.",3,"tags","apiReference","examples"],["demo",""],[1,"demo-controls"],[3,"change","value"],["value","none"],["value","single"],["value","multi"],["type","checkbox",3,"change","checked"],[1,"demo-btn",3,"click"],[1,"demo-badge"],[3,"selectedChange","data","loading","stickyHeader","selectionMode","maxHeight","pageSize","pageSizeOptions","rowClass","selected"],["uiColumn","","key","id","label","ID","width","60px"],["uiColumn","","key","name","label","Name",3,"sortable"],["uiColumn","","key","email","label","Email",3,"sortable"],["uiColumn","","key","role","label","Role",3,"sortable","align"],["uiColumn","","key","status","label","Status",3,"sortable","align","comparator"],["uiColumn","","key","age","label","Age","width","70px",3,"sortable","align","comparator"],[1,"demo-section"],[1,"demo-section__label"],[3,"currentPageChange","totalItems","pageSize","currentPage"],["api",""],["title","Table Inputs",3,"properties"],["title","Table Outputs",3,"properties"],["title","uiColumn Directive Inputs",3,"properties"],["title","uiColumn Templates",3,"properties"],["title","ui-table-pagination Inputs",3,"properties"],["title","ui-table-pagination Outputs",3,"properties"],["examples",""],["title","Basic table with sorting","description","Minimal setup \u2014 pass data and define columns with the uiColumn directive.",3,"code"],["title","Row selection","description","Single or multi-row selection with two-way [(selected)] binding.",3,"code"],["title","Custom cell templates","description","Use #bodyCell to render badges, buttons, or any custom markup per cell.",3,"code"],["title","Pagination","description","Built-in pagination with configurable page size options.",3,"code"],["title","Loading state","description","Uses an isolated LoaderService instance \u2014 won't trigger the global app loader.",3,"code"],["title","Custom sort comparator","description","Pass a [comparator] function to any sortable column to override the default sort logic \u2014 useful for numeric, date, or priority-based ordering.",3,"code"],["title","Standalone pagination","description","ui-table-pagination can be used independently on any list or grid.",3,"code"]],template:function(i,e){if(i&1){let I=N();r(0,"playground-demo-page-template",1)(1,"div",2)(2,"div",3)(3,"label"),s(4," Selection mode: "),r(5,"select",4),u("change",function(p){return e.onSelectionModeChange(p.target.value)}),r(6,"option",5),s(7,"None"),o(),r(8,"option",6),s(9,"Single"),o(),r(10,"option",7),s(11,"Multi"),o()()(),r(12,"label")(13,"input",8),u("change",function(p){return e.stickyHeader.set(p.target.checked)}),o(),s(14," Sticky header "),o(),r(15,"button",9),u("click",function(){return e.triggerLoading()}),s(16," Simulate loading "),o(),U(17,ee,2,1,"span",10),o(),r(18,"ui-table",11),D("selectedChange",function(p){return C(I),M(e.selectedUsers,p)||(e.selectedUsers=p),y(p)}),w(19,12)(20,13)(21,14),f(22,15),v(23,te,3,6,"ng-template",null,0,z),S(),f(25,16),v(26,ae,3,6,"ng-template",null,0,z),S(),w(28,17),o(),r(29,"div",18)(30,"p",19)(31,"code"),s(32,"ui-table-pagination"),o(),s(33),o(),r(34,"ui-table-pagination",20),D("currentPageChange",function(p){return C(I),M(e.standalonePage,p)||(e.standalonePage=p),y(p)}),o()()(),r(35,"div",21),h(36,"playground-api-table",22)(37,"playground-api-table",23)(38,"playground-api-table",24)(39,"playground-api-table",25)(40,"playground-api-table",26)(41,"playground-api-table",27),o(),r(42,"div",28),h(43,"playground-example-viewer",29)(44,"playground-example-viewer",30)(45,"playground-example-viewer",31)(46,"playground-example-viewer",32)(47,"playground-example-viewer",33)(48,"playground-example-viewer",34)(49,"playground-example-viewer",35),o()()}i&2&&(a("tags",A(42,Y))("apiReference",!0)("examples",!0),t(5),a("value",e.selectionMode()),t(8),a("checked",e.stickyHeader()),t(4),L(e.selectedUsers().length>0?17:-1),t(),a("data",e.users)("loading",e.isLoading())("stickyHeader",e.stickyHeader())("selectionMode",e.selectionMode())("maxHeight",e.stickyHeader()?"400px":"")("pageSize",8)("pageSizeOptions",A(43,Z))("rowClass",e.rowClassFn),k("selected",e.selectedUsers),t(2),a("sortable",!0),t(),a("sortable",!0),t(),a("sortable",!0)("align",e.ColumnAlign.Center),t(3),a("sortable",!0)("align",e.ColumnAlign.Center)("comparator",e.statusComparator),t(3),a("sortable",!0)("align",e.ColumnAlign.Right)("comparator",e.ageComparator),t(5),T(" used standalone (page ",e.standalonePage()," of 10): "),t(),a("totalItems",100)("pageSize",10),k("currentPage",e.standalonePage),t(2),a("properties",e.tableProps),t(),a("properties",e.tableOutputs),t(),a("properties",e.columnProps),t(),a("properties",e.columnTemplates),t(),a("properties",e.paginationProps),t(),a("properties",e.paginationOutputs),t(2),a("code",e.snippets.basic),t(),a("code",e.snippets.selection),t(),a("code",e.snippets.customCell),t(),a("code",e.snippets.pagination),t(),a("code",e.snippets.loading),t(),a("code",e.snippets.customComparator),t(),a("code",e.snippets.standalonePagination))},dependencies:[J,X,$,j,V,q,B],styles:[".demo-controls[_ngcontent-%COMP%]{display:flex;align-items:center;flex-wrap:wrap;gap:1rem;margin-bottom:1rem}.demo-controls[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.4rem;font-size:var(--cmp-font-sm);color:var(--cmp-gray-700)}.demo-controls[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{border:1px solid var(--cmp-gray-300);border-radius:var(--cmp-radius-sm);padding:.25rem .5rem;font-size:var(--cmp-font-sm);background:var(--cmp-white);color:var(--cmp-gray-800)}.demo-btn[_ngcontent-%COMP%]{padding:.35rem .85rem;border:1px solid var(--cmp-primary);border-radius:var(--cmp-radius-sm);background:transparent;color:var(--cmp-primary);font-size:var(--cmp-font-sm);cursor:pointer;transition:background .15s,color .15s}.demo-btn[_ngcontent-%COMP%]:hover{background:var(--cmp-primary);color:var(--cmp-white)}.demo-badge[_ngcontent-%COMP%]{padding:.25rem .65rem;border-radius:var(--cmp-radius-full);background:var(--cmp-primary-soft);color:var(--cmp-primary);font-size:var(--cmp-font-xs);font-weight:var(--cmp-font-semibold)}.badge[_ngcontent-%COMP%]{display:inline-block;padding:.2rem .6rem;border-radius:var(--cmp-radius-full);font-size:var(--cmp-font-xs);font-weight:var(--cmp-font-semibold);white-space:nowrap}.badge--admin[_ngcontent-%COMP%]{background:var(--cmp-danger-soft);color:var(--cmp-danger)}.badge--editor[_ngcontent-%COMP%]{background:var(--cmp-success-soft);color:var(--cmp-success)}.badge--viewer[_ngcontent-%COMP%]{background:var(--cmp-primary-soft);color:var(--cmp-primary)}.badge--manager[_ngcontent-%COMP%]{background:var(--cmp-warning-soft);color:var(--cmp-warning)}.badge--active[_ngcontent-%COMP%]{background:var(--cmp-success-soft);color:var(--cmp-success)}.badge--inactive[_ngcontent-%COMP%]{background:var(--cmp-gray-100);color:var(--cmp-gray-500)}.badge--pending[_ngcontent-%COMP%]{background:var(--cmp-warning-soft);color:var(--cmp-warning)}[_nghost-%COMP%]     .row--inactive{opacity:.55}.demo-section[_ngcontent-%COMP%]{margin-top:1.5rem;border:1px dashed var(--cmp-gray-300);border-radius:var(--cmp-radius-sm);padding:1rem}.demo-section__label[_ngcontent-%COMP%]{font-size:var(--cmp-font-xs);color:var(--cmp-gray-600);margin:0 0 .75rem}.demo-section__label[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:var(--cmp-gray-100);padding:.1rem .35rem;border-radius:var(--cmp-radius-sm);font-size:var(--cmp-font-xs)}"],changeDetection:0})}}return l})(),b=["Alice Johnson","Bob Smith","Carol White","David Brown","Eva Martinez","Frank Lee","Grace Kim","Henry Wilson"],K=["Admin","Editor","Viewer","Manager"],Q=["Active","Inactive","Pending"];export{ue as TableDemoComponent};
