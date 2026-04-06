import{b as E,c as y}from"./chunk-W7DAE6VW.js";import"./chunk-Y44E6TIF.js";import"./chunk-24GYA6MA.js";import"./chunk-5FBFIPUF.js";import{a as D}from"./chunk-HAYVGET7.js";import"./chunk-W3V7OEYG.js";import{d as S,f as h}from"./chunk-35IBFZQM.js";import"./chunk-5JN3VS6X.js";import"./chunk-CGVOUCLE.js";import"./chunk-XJA634MG.js";import"./chunk-PRGDJABY.js";import"./chunk-XNXG5RW6.js";import"./chunk-6F733C44.js";import{Bc as x,Pb as g,Qb as n,Rb as e,Zb as m,cb as i,fa as c,oc as t,rc as f,sb as u,uc as p,vc as s}from"./chunk-6QGPMABE.js";import"./chunk-EU2KAMEK.js";import"./chunk-DAQOROHW.js";var C=()=>["Material","Dialog","Popup","Modal"],k=(()=>{class d{constructor(){this.dialog=c(E)}openDialog(o){let l={primary:"This is a primary dialog for general actions and information.",success:"Operation completed successfully! Your changes have been saved.",danger:"Warning: This action cannot be undone. Please confirm to proceed.",warning:"Please review this information carefully before continuing.",info:"Here is some helpful information about this feature."};this.dialog.open(y,{data:{title:`${o.charAt(0).toUpperCase()+o.slice(1)} Dialog`,message:l[o],type:o,formDataList:null},width:"400px"}).afterClosed().subscribe(a=>{a?console.log("Dialog closed with result:",a):console.log("Dialog was cancelled")})}static{this.\u0275fac=function(l){return new(l||d)}}static{this.\u0275cmp=u({type:d,selectors:[["playground-popup-material-demo"]],decls:215,vars:104,consts:[["title","Material Popup","description","Customizable dialog/popup component using Material Dialog",3,"tags","apiReference","examples"],["demo",""],[1,"popup-demo"],[1,"button-group"],["mat-raised-button","","color","primary",3,"click"],["mat-raised-button","","color","accent",3,"click"],["mat-raised-button","","color","warn",3,"click"],["mat-raised-button","",3,"click"],["api",""],[1,"api-table"],[1,"feature-list"],["examples",""]],template:function(l,r){l&1&&(n(0,"app-demo-page-template",0)(1,"div",1)(2,"div",2)(3,"h3"),t(4,"Dialog Types"),e(),n(5,"p"),t(6,"Click the buttons below to see different popup types:"),e(),n(7,"div",3)(8,"button",4),m("click",function(){return r.openDialog("primary")}),t(9," Primary Dialog "),e(),n(10,"button",5),m("click",function(){return r.openDialog("success")}),t(11," Success Dialog "),e(),n(12,"button",6),m("click",function(){return r.openDialog("danger")}),t(13," Danger Dialog "),e(),n(14,"button",7),m("click",function(){return r.openDialog("warning")}),t(15," Warning Dialog "),e(),n(16,"button",7),m("click",function(){return r.openDialog("info")}),t(17," Info Dialog "),e()()()(),n(18,"div",8)(19,"h3"),t(20,"Component Overview"),e(),n(21,"p"),t(22," The Material Popup component is a customizable dialog built on Angular Material's MatDialog. It supports multiple dialog types with color-coded styling and can display custom content or forms. "),e(),n(23,"h3"),t(24,"Selector"),e(),n(25,"pre")(26,"code"),t(27,"<mt-popup></mt-popup>"),e()(),n(28,"h3"),t(29,"Usage Pattern"),e(),n(30,"p"),t(31," This component is opened programmatically using MatDialog service, not as a template component. "),e(),n(32,"h3"),t(33,"Dialog Data Interface"),e(),n(34,"pre")(35,"code"),t(36),e()(),n(37,"h3"),t(38,"Methods"),e(),n(39,"table",9)(40,"thead")(41,"tr")(42,"th"),t(43,"Method"),e(),n(44,"th"),t(45,"Returns"),e(),n(46,"th"),t(47,"Description"),e()()(),n(48,"tbody")(49,"tr")(50,"td")(51,"code"),t(52,"submit()"),e()(),n(53,"td")(54,"code"),t(55,"void"),e()(),n(56,"td"),t(57,"Closes dialog and returns the data"),e()(),n(58,"tr")(59,"td")(60,"code"),t(61,"close()"),e()(),n(62,"td")(63,"code"),t(64,"void"),e()(),n(65,"td"),t(66,"Closes dialog without returning data"),e()()()(),n(67,"h3"),t(68,"Dialog Types"),e(),n(69,"table",9)(70,"thead")(71,"tr")(72,"th"),t(73,"Type"),e(),n(74,"th"),t(75,"Color"),e(),n(76,"th"),t(77,"Use Case"),e()()(),n(78,"tbody")(79,"tr")(80,"td")(81,"code"),t(82,"primary"),e()(),n(83,"td"),t(84,"Blue"),e(),n(85,"td"),t(86,"General information, default actions"),e()(),n(87,"tr")(88,"td")(89,"code"),t(90,"success"),e()(),n(91,"td"),t(92,"Green"),e(),n(93,"td"),t(94,"Success messages, confirmations"),e()(),n(95,"tr")(96,"td")(97,"code"),t(98,"danger"),e()(),n(99,"td"),t(100,"Red"),e(),n(101,"td"),t(102,"Destructive actions, errors"),e()(),n(103,"tr")(104,"td")(105,"code"),t(106,"warning"),e()(),n(107,"td"),t(108,"Orange"),e(),n(109,"td"),t(110,"Warnings, cautions"),e()(),n(111,"tr")(112,"td")(113,"code"),t(114,"info"),e()(),n(115,"td"),t(116,"Light Blue"),e(),n(117,"td"),t(118,"Informational messages"),e()()()(),n(119,"h3"),t(120,"Key Features"),e(),n(121,"ul",10)(122,"li")(123,"strong"),t(124,"Multiple Types:"),e(),t(125," 5 pre-styled dialog types"),e(),n(126,"li")(127,"strong"),t(128,"Material Design:"),e(),t(129," Built on Angular Material Dialog "),e(),n(130,"li")(131,"strong"),t(132,"Generic Support:"),e(),t(133," Type-safe with TypeScript generics "),e(),n(134,"li")(135,"strong"),t(136,"Form Integration:"),e(),t(137," Pass custom form data"),e(),n(138,"li")(139,"strong"),t(140,"Responsive:"),e(),t(141," Adapts to screen sizes"),e(),n(142,"li")(143,"strong"),t(144,"OnPush:"),e(),t(145," Optimized change detection"),e(),n(146,"li")(147,"strong"),t(148,"Return Values:"),e(),t(149," Get data back when dialog closes"),e()(),n(150,"h3"),t(151,"Use Cases"),e(),n(152,"ul")(153,"li"),t(154,"Confirmation dialogs"),e(),n(155,"li"),t(156,"Alert messages"),e(),n(157,"li"),t(158,"Form popups"),e(),n(159,"li"),t(160,"Delete confirmations"),e(),n(161,"li"),t(162,"Success/error notifications"),e(),n(163,"li"),t(164,"Information displays"),e()()(),n(165,"div",11)(166,"h3"),t(167,"1. Basic Dialog"),e(),n(168,"p"),t(169,"Simple confirmation dialog with message."),e(),n(170,"pre")(171,"code"),t(172),e()(),n(173,"h3"),t(174,"2. Success Dialog"),e(),n(175,"p"),t(176,"Show success message after an operation."),e(),n(177,"pre")(178,"code"),t(179),e()(),n(180,"h3"),t(181,"3. Danger/Delete Confirmation"),e(),n(182,"p"),t(183,"Confirm destructive actions with danger styling."),e(),n(184,"pre")(185,"code"),t(186),e()(),n(187,"h3"),t(188,"4. With Custom Form Data"),e(),n(189,"p"),t(190,"Pass custom data to the dialog."),e(),n(191,"pre")(192,"code"),t(193),e()(),n(194,"h3"),t(195,"5. Warning Dialog"),e(),n(196,"p"),t(197,"Display warnings before proceeding."),e(),n(198,"pre")(199,"code"),t(200),e()(),n(201,"h3"),t(202,"6. Info Dialog with Custom Width"),e(),n(203,"p"),t(204,"Informational dialog with custom configuration."),e(),n(205,"pre")(206,"code"),t(207),e()(),n(208,"h3"),t(209,"7. Async Operation with Dialog"),e(),n(210,"p"),t(211,"Show dialog during async operations."),e(),n(212,"pre")(213,"code"),t(214),e()()()()),l&2&&(g("tags",x(103,C))("apiReference",!0)("examples",!0),i(36),f("interface IMatDialogData<T> ","{",`
  title: string;           // Dialog title
  message: string;         // Dialog message/content
  type: IDialogType;       // Dialog type for styling
  formDataList: T;         // Optional form data or custom content
`,"}",`

type IDialogType = 'primary' | 'success' | 'danger' | 'warning' | 'info';`),i(136),s(["import ","{"," MatDialog ","}",` from '@angular/material/dialog';
import `,"{"," PopupComponent ","}",` from '@arun-bharath-ui/cmp-material';

@Component(`,"{",`
  standalone: true,
  imports: [MatButtonModule]
`,"}",`)
export class MyComponent `,"{",`
  private dialog = inject(MatDialog);

  openConfirmDialog() `,"{",`
    const dialogRef = this.dialog.open(PopupComponent, `,"{",`
      data: `,"{",`
        title: 'Confirm Action',
        message: 'Are you sure you want to proceed?',
        type: 'primary',
        formDataList: null
      `,"}",`
    `,"}",`);

    dialogRef.afterClosed().subscribe(result => `,"{",`
      if (result) `,"{",`
        console.log('User confirmed');
      `,"}",`
    `,"}",`);
  `,"}",`
`,"}"]),i(7),s(["export class SaveComponent ","{",`
  private dialog = inject(MatDialog);

  saveData() `,"{",`
    this.dataService.save(this.formData).subscribe(`,"{",`
      next: () => `,"{",`
        this.dialog.open(PopupComponent, `,"{",`
          data: `,"{",`
            title: 'Success!',
            message: 'Your data has been saved successfully.',
            type: 'success',
            formDataList: null
          `,"}",`
        `,"}",`);
      `,"}",`
    `,"}",`);
  `,"}",`
`,"}"]),i(7),s(["export class DeleteComponent ","{",`
  private dialog = inject(MatDialog);

  confirmDelete(itemId: string) `,"{",`
    const dialogRef = this.dialog.open(PopupComponent, `,"{",`
      data: `,"{",`
        title: 'Delete Item',
        message: 'This action cannot be undone. Are you sure?',
        type: 'danger',
        formDataList: `,"{"," itemId ","}",`
      `,"}",`
    `,"}",`);

    dialogRef.afterClosed().subscribe(result => `,"{",`
      if (result) `,"{",`
        this.deleteItem(result.formDataList.itemId);
      `,"}",`
    `,"}",`);
  `,"}",`

  deleteItem(id: string) `,"{",`
    this.itemService.delete(id).subscribe();
  `,"}",`
`,"}"]),i(7),s(["interface UserFormData ","{",`
  name: string;
  email: string;
  role: string;
`,"}",`

export class UserManagementComponent `,"{",`
  private dialog = inject(MatDialog);

  editUser(user: UserFormData) `,"{",`
    const dialogRef = this.dialog.open<PopupComponent, IMatDialogData<UserFormData>>(
      PopupComponent,
      `,"{",`
        data: `,"{",`
          title: 'Edit User',
          message: 'Update user information',
          type: 'primary',
          formDataList: `,"{",`
            name: user.name,
            email: user.email,
            role: user.role
          `,"}",`
        `,"}",`
      `,"}",`
    );

    dialogRef.afterClosed().subscribe(result => `,"{",`
      if (result) `,"{",`
        this.updateUser(result.formDataList);
      `,"}",`
    `,"}",`);
  `,"}",`
`,"}"]),i(7),p("export class WarningComponent ","{",`
  private dialog = inject(MatDialog);

  showWarning() `,"{",`
    this.dialog.open(PopupComponent, `,"{",`
      data: `,"{",`
        title: 'Warning',
        message: 'This action may affect other users. Please review before continuing.',
        type: 'warning',
        formDataList: null
      `,"}",`,
      width: '400px'
    `,"}",`);
  `,"}",`
`,"}"),i(7),p("export class InfoComponent ","{",`
  private dialog = inject(MatDialog);

  showInfo() `,"{",`
    this.dialog.open(PopupComponent, `,"{",`
      data: `,"{",`
        title: 'Information',
        message: 'Here is some important information you should know.',
        type: 'info',
        formDataList: null
      `,"}",`,
      width: '500px',
      disableClose: true,  // Prevent closing by clicking outside
      autoFocus: true
    `,"}",`);
  `,"}",`
`,"}"),i(7),s(["export class AsyncComponent ","{",`
  private dialog = inject(MatDialog);

  async performAction() `,"{",`
    const dialogRef = this.dialog.open(PopupComponent, `,"{",`
      data: `,"{",`
        title: 'Confirm',
        message: 'Do you want to proceed?',
        type: 'primary',
        formDataList: null
      `,"}",`
    `,"}",`);

    const result = await dialogRef.afterClosed().toPromise();

    if (result) `,"{",`
      try `,"{",`
        await this.apiService.performAction();
        this.showSuccessDialog();
      `,"}"," catch (error) ","{",`
        this.showErrorDialog(error);
      `,"}",`
    `,"}",`
  `,"}",`

  showSuccessDialog() `,"{",`
    this.dialog.open(PopupComponent, `,"{",`
      data: `,"{",`
        title: 'Success',
        message: 'Action completed successfully!',
        type: 'success',
        formDataList: null
      `,"}",`
    `,"}",`);
  `,"}",`
`,"}"]))},dependencies:[D,h,S],styles:[".popup-demo[_ngcontent-%COMP%]{padding:24px}.popup-demo[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-top:0;margin-bottom:16px}.popup-demo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:16px}.popup-demo[_ngcontent-%COMP%]   .button-group[_ngcontent-%COMP%]{display:flex;gap:12px;flex-wrap:wrap}"]})}}return d})();export{k as PopupMaterialDemoComponent};
