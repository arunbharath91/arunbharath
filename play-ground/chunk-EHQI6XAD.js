import{a as M}from"./chunk-HAYVGET7.js";import"./chunk-W3V7OEYG.js";import{d as T,f as w}from"./chunk-35IBFZQM.js";import"./chunk-5JN3VS6X.js";import"./chunk-CGVOUCLE.js";import"./chunk-XJA634MG.js";import"./chunk-PRGDJABY.js";import"./chunk-XNXG5RW6.js";import"./chunk-6F733C44.js";import{$b as c,Bc as y,Jb as u,Kb as x,Mb as g,Nb as b,Ob as f,Pb as S,Qb as e,Rb as t,Xb as C,Zb as v,cb as a,la as m,lc as E,ma as d,oc as n,pc as _,qc as A,sb as h,uc as L,vc as s,zd as P}from"./chunk-6QGPMABE.js";import"./chunk-EU2KAMEK.js";import"./chunk-DAQOROHW.js";var F=()=>["Bootstrap","Navigation","Filter"];function I(i,p){if(i&1){let r=C();e(0,"button",9),v("click",function(){let o=m(r).$implicit,D=c();return d(D.selectLetter(o))}),n(1),t()}if(i&2){let r=p.$implicit,l=c();E("active",l.selectedLetter===r),a(),A(" ",r," ")}}function k(i,p){if(i&1&&(e(0,"p"),n(1," Showing results for: "),e(2,"strong"),n(3),t()()),i&2){let r=c();a(3),_(r.selectedLetter)}}var R=(()=>{class i{constructor(){this.alphabet="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),this.selectedLetter=null}selectLetter(r){this.selectedLetter=r}static{this.\u0275fac=function(l){return new(l||i)}}static{this.\u0275cmp=h({type:i,selectors:[["app-alphabet-search-demo"]],decls:74,vars:43,consts:[["title","Alphabet Search","description","A-Z navigation filter for quick content access",3,"tags","apiReference","examples"],["demo",""],[1,"alphabet-search"],["mat-button","",3,"active"],[1,"result"],["api",""],[1,"api-table"],[1,"feature-list"],["examples",""],["mat-button","",3,"click"]],template:function(l,o){l&1&&(e(0,"app-demo-page-template",0)(1,"div",1)(2,"div",2),b(3,I,2,3,"button",3,g),t(),e(5,"div",4),u(6,k,4,1,"p"),t()(),e(7,"div",5)(8,"h3"),n(9,"Inputs/Outputs"),t(),e(10,"table",6)(11,"thead")(12,"tr")(13,"th"),n(14,"Name"),t(),e(15,"th"),n(16,"Type"),t(),e(17,"th"),n(18,"Description"),t()()(),e(19,"tbody")(20,"tr")(21,"td"),n(22,"activeAlphabet"),t(),e(23,"td")(24,"code"),n(25,"ModelSignal<string>"),t()(),e(26,"td"),n(27,"Two-way binding for active letter (default: 'A')"),t()(),e(28,"tr")(29,"td"),n(30,"alphabetToggle"),t(),e(31,"td")(32,"code"),n(33,"OutputEmitterRef<string>"),t()(),e(34,"td"),n(35,"Emitted when a letter is selected"),t()()()(),e(36,"h3"),n(37,"Features"),t(),e(38,"ul",7)(39,"li"),n(40,"A-Z alphabet navigation"),t(),e(41,"li"),n(42,"Active letter highlighting"),t(),e(43,"li"),n(44,"Two-way binding support"),t(),e(45,"li"),n(46,"Click event emission"),t(),e(47,"li"),n(48,"Responsive button layout"),t(),e(49,"li"),n(50,"Standalone component"),t(),e(51,"li"),n(52,"Pre-configured alphabet array"),t()()(),e(53,"div",8)(54,"h3"),n(55,"Basic Usage"),t(),e(56,"pre")(57,"code"),n(58),t()(),e(59,"h3"),n(60,"With Two-Way Binding"),t(),e(61,"pre")(62,"code"),n(63),t()(),e(64,"h3"),n(65,"With Filtered List"),t(),e(66,"pre")(67,"code"),n(68),t()(),e(69,"h3"),n(70,"With API Call"),t(),e(71,"pre")(72,"code"),n(73),t()()()()),l&2&&(S("tags",y(42,F))("apiReference",!0)("examples",!0),a(3),f(o.alphabet),a(3),x(o.selectedLetter?6:-1),a(52),s(["import ","{"," AlphabetSearchComponent ","}",` from '@arun-bharath-ui/cmp-bootstrap';

@Component(`,"{",`
  standalone: true,
  imports: [AlphabetSearchComponent],
  template: \\\`
    <bt-alphabet-search
      (alphabetToggle)="onLetterSelect($event)"
    />
  \\\`
`,"}",`)
export class ContactsComponent `,"{",`
  onLetterSelect(letter: string) `,"{",`
    console.log('Selected letter:', letter);
    this.filterContacts(letter);
  `,"}",`

  filterContacts(letter: string) `,"{",`
    // Filter logic here
  `,"}",`
`,"}"]),a(5),L("export class DirectoryComponent ","{",`
  selectedLetter = 'A';

  onLetterChange(letter: string) `,"{",`
    this.loadData(letter);
  `,"}",`
`,"}",`

<bt-alphabet-search
  [(activeAlphabet)]="selectedLetter"
  (alphabetToggle)="onLetterChange($event)"
/>

<p>Current: `,"{","","{"," selectedLetter ","}","","}","</p>"),a(5),s(["export class ProductListComponent ","{",`
  products: Product[] = [];
  filteredProducts: Product[] = [];

  onAlphabetFilter(letter: string) `,"{",`
    this.filteredProducts = this.products.filter(
      p => p.name.toUpperCase().startsWith(letter)
    );
  `,"}",`
`,"}",`

<bt-alphabet-search (alphabetToggle)="onAlphabetFilter($event)" />

@for (product of filteredProducts; track product.id) `,"{",`
  <div>`,"{","","{"," product.name ","}","","}",`</div>
`,"}"]),a(5),s(["export class UsersComponent ","{",`
  users: User[] = [];
  loading = false;

  onLetterSelect(letter: string) `,"{",`
    this.loading = true;
    this.userService.getUsersByLetter(letter).subscribe(`,"{",`
      next: (data) => `,"{",`
        this.users = data;
        this.loading = false;
      `,"}",`,
      error: () => `,"{",`
        this.loading = false;
      `,"}",`
    `,"}",`);
  `,"}",`
`,"}"]))},dependencies:[M,P,w,T],styles:[".alphabet-search[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:4px;margin-bottom:24px}.alphabet-search[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{min-width:40px}.alphabet-search[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%]{background:#3f51b5;color:#fff}.result[_ngcontent-%COMP%]{padding:16px;background:#f5f5f5;border-radius:4px;min-height:60px}"]})}}return i})();export{R as AlphabetSearchDemoComponent};
