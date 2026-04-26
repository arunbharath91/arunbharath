import{a as X,b as $}from"./chunk-N2ZFJZV5.js";import{b as J}from"./chunk-L5DR7Q22.js";import{aa as F,ba as m,ca as W,da as V,ea as q,fa as j}from"./chunk-MVIMINCG.js";import"./chunk-BTR3CA56.js";import"./chunk-ZQ7F4TPO.js";import"./chunk-H2UPXF7Z.js";import"./chunk-NIT7R2TE.js";import{$a as t,Ab as U,Bb as L,Bc as O,Cc as x,Gb as n,Gc as z,Hb as r,Ib as o,Jb as f,Nb as v,Ob as S,Pb as w,Qb as N,Sb as g,Ub as H,fc as _,gc as s,hc as P,ic as T,ka as C,la as y,md as B,ob as R,oc as k,pc as M,qc as E,sc as D,tb as h,uc as A,wa as d}from"./chunk-O5SYL5FD.js";import"./chunk-EU2KAMEK.js";import"./chunk-DAQOROHW.js";var G={basic:`import { TableComponent, ColumnDirective } from '@arun-bharath-ui/cmp-ui';

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
}`};var Y=()=>["Data","Signals","Sorting","Pagination","Selection"],Z=()=>[5,8,15,25];function ee(l,c){if(l&1&&(r(0,"span",10),s(1),o()),l&2){let a=H();t(),T("",a.selectedUsers().length," selected")}}function te(l,c){if(l&1&&(r(0,"span"),O(1,"lowercase"),s(2),o()),l&2){let a=c.value;_(D("badge badge--",x(1,4,a))),t(2),P(a)}}function ne(l,c){if(l&1&&(r(0,"span"),O(1,"lowercase"),s(2),o()),l&2){let a=c.value;_(D("badge badge--",x(1,4,a))),t(2),P(a)}}var ue=(()=>{class l{constructor(){this.SelectionMode=m,this.ColumnAlign=W,this.SortDirection=F,this.snippets=G,this.users=Array.from({length:42},(a,i)=>({id:i+1,name:b[i%b.length],email:`${b[i%b.length].toLowerCase().replace(" ",".")}${i}@example.com`,role:K[i%K.length],status:Q[i%Q.length],age:20+i%40})),this.selectedUsers=d([]),this.selectionMode=d(m.Multi),this.stickyHeader=d(!1),this.isLoading=d(!1),this.rowClassFn=(a,i)=>a.status==="Inactive"?"row--inactive":"",this.ageComparator=(a,i)=>a.age-i.age,this.STATUS_ORDER={Active:0,Pending:1,Inactive:2},this.statusComparator=(a,i)=>(this.STATUS_ORDER[a.status]??99)-(this.STATUS_ORDER[i.status]??99),this.tableProps=[{name:"data",type:"T[]",default:"[]",description:"Array of row data objects."},{name:"loading",type:"boolean",default:"false",description:"Shows a loading overlay over the table."},{name:"stickyHeader",type:"boolean",default:"false",description:"Fixes the header row when scrolling. Requires maxHeight to be set."},{name:"maxHeight",type:"string",default:'""',description:'CSS max-height on the scroll container (e.g. "400px"). Enables vertical scrolling and makes stickyHeader functional.'},{name:"selectionMode",type:"SelectionMode",default:"None",description:"Row selection mode: None, Single, or Multi."},{name:"selected",type:"T[]",default:"[]",description:"Two-way bindable selected rows [(selected)]."},{name:"pageSize",type:"number",default:"10",description:"Initial number of rows per page."},{name:"pageSizeOptions",type:"number[]",default:"[5,10,25,50]",description:"Available page size choices."},{name:"emptyMessage",type:"string",default:"No data available",description:"Message shown when data is empty."},{name:"rowClass",type:"(row: T, i: number) => string",default:'() => ""',description:"Function to apply a CSS class to a row."}],this.tableOutputs=[{name:"sortChange",type:"ITableSort",description:"Emits when the sort column or direction changes."},{name:"pageChange",type:"ITablePagination",description:"Emits when the page index or page size changes."}],this.columnProps=[{name:"key",type:"string",default:"\u2014",description:"Property key on the data object (required)."},{name:"label",type:"string",default:'""',description:"Column header text."},{name:"sortable",type:"boolean",default:"false",description:"Enables click-to-sort on this column."},{name:"align",type:"ColumnAlign",default:"Left",description:"Cell text alignment: Left, Center, Right."},{name:"width",type:"string",default:'""',description:'CSS width for the column (e.g. "120px").'},{name:"sticky",type:"boolean",default:"false",description:"Pins the column to the left when scrolling horizontally."},{name:"comparator",type:"(a,b) => number",default:"undefined",description:"Custom sort comparator for this column."}],this.columnTemplates=[{name:"#headerCell",type:"TemplateRef",description:"Custom header cell template."},{name:"#bodyCell",type:"TemplateRef<{ $implicit: T, value, index }>",description:"Custom body cell template. $implicit = row, value = cell value."}],this.paginationProps=[{name:"totalItems",type:"number",default:"\u2014",description:"Total number of items (required)."},{name:"pageSize",type:"number",default:"10",description:"Initial rows per page."},{name:"pageSizeOptions",type:"number[]",default:"[5,10,25,50]",description:"Available page size options."},{name:"[(currentPage)]",type:"number",default:"1",description:"Two-way bindable current page index."}],this.paginationOutputs=[{name:"pageChange",type:"ITablePagination",description:"Emits { pageIndex, pageSize } on every page or size change."}],this.standalonePage=d(1)}onSelectionModeChange(a){let i=a==="multi"?m.Multi:a==="single"?m.Single:m.None;this.selectionMode.set(i)}onSelectionChange(a){this.selectedUsers.set(a)}triggerLoading(){this.isLoading.set(!0),setTimeout(()=>this.isLoading.set(!1),2e3)}static{this.\u0275fac=function(i){return new(i||l)}}static{this.\u0275cmp=R({type:l,selectors:[["playground-table-demo"]],decls:50,vars:44,consts:[["bodyCell",""],["title","Table","description","A lightweight, fully-featured data table built with Angular signals \u2014 sorting, pagination, row selection, custom cells, sticky headers and loading states.",3,"tags","apiReference","examples"],["demo",""],[1,"demo-controls"],[3,"change","value"],["value","none"],["value","single"],["value","multi"],["type","checkbox",3,"change","checked"],[1,"demo-btn",3,"click"],[1,"demo-badge"],[3,"selectedChange","data","loading","stickyHeader","selectionMode","maxHeight","pageSize","pageSizeOptions","rowClass","selected"],["uiColumn","","key","id","label","ID","width","60px"],["uiColumn","","key","name","label","Name",3,"sortable"],["uiColumn","","key","email","label","Email",3,"sortable"],["uiColumn","","key","role","label","Role",3,"sortable","align"],["uiColumn","","key","status","label","Status",3,"sortable","align","comparator"],["uiColumn","","key","age","label","Age","width","70px",3,"sortable","align","comparator"],[1,"demo-section"],[1,"demo-section__label"],[3,"currentPageChange","totalItems","pageSize","currentPage"],["api",""],["title","Table Inputs",3,"properties"],["title","Table Outputs",3,"properties"],["title","uiColumn Directive Inputs",3,"properties"],["title","uiColumn Templates",3,"properties"],["title","ui-table-pagination Inputs",3,"properties"],["title","ui-table-pagination Outputs",3,"properties"],["examples",""],["title","Basic table with sorting","description","Minimal setup \u2014 pass data and define columns with the uiColumn directive.",3,"code"],["title","Row selection","description","Single or multi-row selection with two-way [(selected)] binding.",3,"code"],["title","Custom cell templates","description","Use #bodyCell to render badges, buttons, or any custom markup per cell.",3,"code"],["title","Pagination","description","Built-in pagination with configurable page size options.",3,"code"],["title","Loading state","description","Uses an isolated LoaderService instance \u2014 won't trigger the global app loader.",3,"code"],["title","Custom sort comparator","description","Pass a [comparator] function to any sortable column to override the default sort logic \u2014 useful for numeric, date, or priority-based ordering.",3,"code"],["title","Standalone pagination","description","ui-table-pagination can be used independently on any list or grid.",3,"code"]],template:function(i,e){if(i&1){let I=N();r(0,"playground-demo-page-template",1)(1,"div",2)(2,"div",3)(3,"label"),s(4," Selection mode: "),r(5,"select",4),g("change",function(p){return e.onSelectionModeChange(p.target.value)}),r(6,"option",5),s(7,"None"),o(),r(8,"option",6),s(9,"Single"),o(),r(10,"option",7),s(11,"Multi"),o()()(),r(12,"label")(13,"input",8),g("change",function(p){return e.stickyHeader.set(p.target.checked)}),o(),s(14," Sticky header "),o(),r(15,"button",9),g("click",function(){return e.triggerLoading()}),s(16," Simulate loading "),o(),U(17,ee,2,1,"span",10),o(),r(18,"ui-table",11),E("selectedChange",function(p){return C(I),M(e.selectedUsers,p)||(e.selectedUsers=p),y(p)}),w(19,12)(20,13)(21,14),v(22,15),h(23,te,3,6,"ng-template",null,0,z),S(),v(25,16),h(26,ne,3,6,"ng-template",null,0,z),S(),w(28,17),o(),r(29,"div",18)(30,"p",19)(31,"code"),s(32,"ui-table-pagination"),o(),s(33),o(),r(34,"ui-table-pagination",20),E("currentPageChange",function(p){return C(I),M(e.standalonePage,p)||(e.standalonePage=p),y(p)}),o()()(),r(35,"div",21),f(36,"playground-api-table",22)(37,"playground-api-table",23)(38,"playground-api-table",24)(39,"playground-api-table",25)(40,"playground-api-table",26)(41,"playground-api-table",27),o(),r(42,"div",28),f(43,"playground-example-viewer",29)(44,"playground-example-viewer",30)(45,"playground-example-viewer",31)(46,"playground-example-viewer",32)(47,"playground-example-viewer",33)(48,"playground-example-viewer",34)(49,"playground-example-viewer",35),o()()}i&2&&(n("tags",A(42,Y))("apiReference",!0)("examples",!0),t(5),n("value",e.selectionMode()),t(8),n("checked",e.stickyHeader()),t(4),L(e.selectedUsers().length>0?17:-1),t(),n("data",e.users)("loading",e.isLoading())("stickyHeader",e.stickyHeader())("selectionMode",e.selectionMode())("maxHeight",e.stickyHeader()?"400px":"")("pageSize",8)("pageSizeOptions",A(43,Z))("rowClass",e.rowClassFn),k("selected",e.selectedUsers),t(2),n("sortable",!0),t(),n("sortable",!0),t(),n("sortable",!0)("align",e.ColumnAlign.Center),t(3),n("sortable",!0)("align",e.ColumnAlign.Center)("comparator",e.statusComparator),t(3),n("sortable",!0)("align",e.ColumnAlign.Right)("comparator",e.ageComparator),t(5),T(" used standalone (page ",e.standalonePage()," of 10): "),t(),n("totalItems",100)("pageSize",10),k("currentPage",e.standalonePage),t(2),n("properties",e.tableProps),t(),n("properties",e.tableOutputs),t(),n("properties",e.columnProps),t(),n("properties",e.columnTemplates),t(),n("properties",e.paginationProps),t(),n("properties",e.paginationOutputs),t(2),n("code",e.snippets.basic),t(),n("code",e.snippets.selection),t(),n("code",e.snippets.customCell),t(),n("code",e.snippets.pagination),t(),n("code",e.snippets.loading),t(),n("code",e.snippets.customComparator),t(),n("code",e.snippets.standalonePagination))},dependencies:[J,X,$,j,V,q,B],styles:[".demo-controls[_ngcontent-%COMP%]{display:flex;align-items:center;flex-wrap:wrap;gap:1rem;margin-bottom:1rem}.demo-controls[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.4rem;font-size:.875rem}.demo-controls[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{border:1px solid #e0e0e0;border-radius:4px;padding:.25rem .5rem;font-size:.875rem}.demo-btn[_ngcontent-%COMP%]{padding:.35rem .85rem;border:1px solid #1976d2;border-radius:4px;background:transparent;color:#1976d2;font-size:.875rem;cursor:pointer;transition:background .15s,color .15s}.demo-btn[_ngcontent-%COMP%]:hover{background:#1976d2;color:#fff}.demo-badge[_ngcontent-%COMP%]{padding:.25rem .65rem;border-radius:12px;background:#e3f2fd;color:#1565c0;font-size:.8125rem;font-weight:600}.badge[_ngcontent-%COMP%]{display:inline-block;padding:.2rem .6rem;border-radius:12px;font-size:.75rem;font-weight:600;white-space:nowrap}.badge--admin[_ngcontent-%COMP%]{background:#fce4ec;color:#c62828}.badge--editor[_ngcontent-%COMP%]{background:#e8f5e9;color:#2e7d32}.badge--viewer[_ngcontent-%COMP%]{background:#e3f2fd;color:#1565c0}.badge--manager[_ngcontent-%COMP%]{background:#fff3e0;color:#e65100}.badge--active[_ngcontent-%COMP%]{background:#e8f5e9;color:#2e7d32}.badge--inactive[_ngcontent-%COMP%]{background:#fafafa;color:#757575}.badge--pending[_ngcontent-%COMP%]{background:#fff8e1;color:#f57f17}[_nghost-%COMP%]     .row--inactive{opacity:.55}.demo-section[_ngcontent-%COMP%]{margin-top:1.5rem;border:1px dashed #e0e0e0;border-radius:4px;padding:1rem}.demo-section__label[_ngcontent-%COMP%]{font-size:.8125rem;color:#616161;margin:0 0 .75rem}.demo-section__label[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#f5f5f5;padding:.1rem .35rem;border-radius:3px;font-size:.8rem}"]})}}return l})(),b=["Alice Johnson","Bob Smith","Carol White","David Brown","Eva Martinez","Frank Lee","Grace Kim","Henry Wilson"],K=["Admin","Editor","Viewer","Manager"],Q=["Active","Inactive","Pending"];export{ue as TableDemoComponent};
