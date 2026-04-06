import{a as R,b as k,c as B,d as V,e as N,f as z,h as A}from"./chunk-QC24V5CR.js";import"./chunk-MMGA6UQG.js";import"./chunk-37S2BO6D.js";import{a as $}from"./chunk-HAYVGET7.js";import"./chunk-W3V7OEYG.js";import{b as L,d as O,f as P}from"./chunk-35IBFZQM.js";import"./chunk-5JN3VS6X.js";import"./chunk-CGVOUCLE.js";import"./chunk-XJA634MG.js";import"./chunk-PRGDJABY.js";import{G as w,H as y}from"./chunk-XNXG5RW6.js";import"./chunk-6F733C44.js";import{$b as s,Bc as D,Jb as h,Kb as v,Nb as F,Ob as C,Pb as b,Qb as e,Rb as t,Xb as S,Zb as d,cb as o,jc as M,la as f,ma as x,oc as i,pc as _,rc as g,sb as E,sc as I,uc as U,zd as T}from"./chunk-6QGPMABE.js";import"./chunk-EU2KAMEK.js";import"./chunk-DAQOROHW.js";var W=()=>["Bootstrap","Form","Upload"],j=(r,p)=>p.name;function q(r,p){if(r&1){let n=S();e(0,"mat-list-item")(1,"mat-icon",12),i(2,"insert_drive_file"),t(),e(3,"div",13),i(4),t(),e(5,"div",14),i(6),t(),e(7,"button",15),d("click",function(){let m=f(n).$implicit,c=s(2);return x(c.removeFile(m))}),e(8,"mat-icon"),i(9,"close"),t()()()}if(r&2){let n=p.$implicit,l=s(2);o(4),_(n.name),o(2),_(l.formatFileSize(n.size))}}function H(r,p){if(r&1&&(e(0,"mat-list",6)(1,"h3",11),i(2,"Uploaded Files"),t(),F(3,q,10,2,"mat-list-item",null,j),t()),r&2){let n=s();o(3),C(n.files)}}var ie=(()=>{class r{constructor(){this.files=[]}onDragOver(n){n.preventDefault()}onDrop(n){n.preventDefault();let l=n.dataTransfer?.files;l&&this.addFiles(Array.from(l))}onFileSelect(n){let l=n.target;l.files&&this.addFiles(Array.from(l.files))}addFiles(n){this.files=[...this.files,...n]}removeFile(n){this.files=this.files.filter(l=>l!==n)}formatFileSize(n){return n<1024?n+" B":n<1024*1024?(n/1024).toFixed(2)+" KB":(n/(1024*1024)).toFixed(2)+" MB"}static{this.\u0275fac=function(l){return new(l||r)}}static{this.\u0275cmp=E({type:r,selectors:[["app-file-uploader-demo"]],decls:126,vars:21,consts:[["fileInput",""],["title","File Uploader","description","Drag and drop file upload component",3,"tags","apiReference","examples"],["demo",""],[1,"upload-area",3,"dragover","drop"],["mat-raised-button","","color","primary",3,"click"],["type","file","multiple","","hidden","",3,"change"],[1,"file-list"],["api",""],[1,"api-table"],[1,"feature-list"],["examples",""],["mat-subheader",""],["matListItemIcon",""],["matListItemTitle",""],["matListItemLine",""],["mat-icon-button","",3,"click"]],template:function(l,m){if(l&1){let c=S();e(0,"app-demo-page-template",1)(1,"div",2)(2,"div",3),d("dragover",function(a){return m.onDragOver(a)})("drop",function(a){return m.onDrop(a)}),e(3,"mat-icon"),i(4,"cloud_upload"),t(),e(5,"h3"),i(6,"Drag & Drop files here"),t(),e(7,"p"),i(8,"or"),t(),e(9,"button",4),d("click",function(){f(c);let a=M(14);return x(a.click())}),e(10,"mat-icon"),i(11,"folder_open"),t(),i(12," Browse Files "),t(),e(13,"input",5,0),d("change",function(a){return m.onFileSelect(a)}),t()(),h(15,H,5,0,"mat-list",6),t(),e(16,"div",7)(17,"h3"),i(18,"Inputs"),t(),e(19,"table",8)(20,"thead")(21,"tr")(22,"th"),i(23,"Name"),t(),e(24,"th"),i(25,"Type"),t(),e(26,"th"),i(27,"Required"),t(),e(28,"th"),i(29,"Description"),t()()(),e(30,"tbody")(31,"tr")(32,"td"),i(33,"accept"),t(),e(34,"td")(35,"code"),i(36,"InputSignal<string>"),t()(),e(37,"td"),i(38,"No"),t(),e(39,"td"),i(40,"Accepted file types (e.g., 'image/*', '.pdf')"),t()(),e(41,"tr")(42,"td"),i(43,"multiple"),t(),e(44,"td")(45,"code"),i(46,"InputSignal<boolean>"),t()(),e(47,"td"),i(48,"No"),t(),e(49,"td"),i(50,"Allow multiple file selection"),t()(),e(51,"tr")(52,"td"),i(53,"serverSide"),t(),e(54,"td")(55,"code"),i(56,"InputSignal<boolean>"),t()(),e(57,"td"),i(58,"No"),t(),e(59,"td"),i(60,"Enable server-side upload"),t()()()(),e(61,"h3"),i(62,"Outputs"),t(),e(63,"table",8)(64,"thead")(65,"tr")(66,"th"),i(67,"Name"),t(),e(68,"th"),i(69,"Type"),t(),e(70,"th"),i(71,"Description"),t()()(),e(72,"tbody")(73,"tr")(74,"td"),i(75,"remove"),t(),e(76,"td")(77,"code"),i(78,"OutputEmitterRef<void>"),t()(),e(79,"td"),i(80,"Emitted when a file is removed"),t()()()(),e(81,"h3"),i(82,"IFile Interface"),t(),e(83,"pre")(84,"code"),i(85),t()(),e(86,"h3"),i(87,"Features"),t(),e(88,"ul",9)(89,"li"),i(90,"Drag and drop file upload"),t(),e(91,"li"),i(92,"Multiple file selection"),t(),e(93,"li"),i(94,"File type filtering"),t(),e(95,"li"),i(96,"File preview with URL generation"),t(),e(97,"li"),i(98,"Progress tracking support"),t(),e(99,"li"),i(100,"Server-side upload option"),t(),e(101,"li"),i(102,"File removal"),t(),e(103,"li"),i(104,"OnPush change detection"),t()()(),e(105,"div",10)(106,"h3"),i(107,"Basic Usage"),t(),e(108,"pre")(109,"code"),i(110),t()(),e(111,"h3"),i(112,"With File Type Restriction"),t(),e(113,"pre")(114,"code"),i(115),t()(),e(116,"h3"),i(117,"Single File Upload"),t(),e(118,"pre")(119,"code"),i(120,`<bt-file-uploader
  [accept]="'.pdf,.doc,.docx'"
  [multiple]="false"
/>`),t()(),e(121,"h3"),i(122,"With Server-Side Upload"),t(),e(123,"pre")(124,"code"),i(125),t()()()()}l&2&&(b("tags",D(20,W))("apiReference",!0)("examples",!0),o(15),v(m.files.length>0?15:-1),o(70),g("interface IFile ","{",`
  inProgress: boolean;  // Upload in progress
  progress?: number;    // Upload progress (0-100)
  data?: File;          // File object
  url: string;          // File preview URL
  index: number;        // File index
`,"}"),o(25),U("import ","{"," FileUploaderComponent ","}",` from '@arun-bharath-ui/cmp-bootstrap';

@Component(`,"{",`
  standalone: true,
  imports: [FileUploaderComponent],
  template: \`
    <bt-file-uploader
      [multiple]="true"
      (remove)="onFileRemoved()"
    />
  \`
`,"}",`)
export class UploadFormComponent `,"{",`
  onFileRemoved() `,"{",`
    console.log('File removed');
  `,"}",`
`,"}"),o(5),g("export class ImageUploadComponent ","{",`
  acceptedTypes = 'image/*';
`,"}",`

<bt-file-uploader
  [accept]="acceptedTypes"
  [multiple]="true"
/>`),o(10),I("export class DocumentUploadComponent ","{",`
  serverUpload = true;

  handleRemove() `,"{",`
    // Handle file removal
    this.uploadService.deleteFile(fileId).subscribe();
  `,"}",`
`,"}",`

<bt-file-uploader
  [serverSide]="serverUpload"
  [multiple]="true"
  (remove)="handleRemove()"
/>`))},dependencies:[$,T,P,O,L,y,w,A,V,N,B,z,k,R],styles:[".upload-area[_ngcontent-%COMP%]{border:2px dashed #ccc;border-radius:8px;padding:48px;text-align:center;cursor:pointer;transition:all .3s}.upload-area[_ngcontent-%COMP%]:hover{border-color:#3f51b5;background:#3f51b50d}.upload-area[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:64px;width:64px;height:64px;color:#3f51b5}.upload-area[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:16px 0 8px;font-weight:500}.upload-area[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#0009;margin:8px 0}.file-list[_ngcontent-%COMP%]{margin-top:24px}"]})}}return r})();export{ie as FileUploaderDemoComponent};
