import{d as p}from"./chunk-W7DAE6VW.js";import"./chunk-Y44E6TIF.js";import"./chunk-24GYA6MA.js";import"./chunk-5FBFIPUF.js";import{a as h}from"./chunk-HAYVGET7.js";import"./chunk-W3V7OEYG.js";import{d as E,f as b}from"./chunk-35IBFZQM.js";import"./chunk-5JN3VS6X.js";import"./chunk-CGVOUCLE.js";import"./chunk-XJA634MG.js";import"./chunk-PRGDJABY.js";import"./chunk-XNXG5RW6.js";import"./chunk-6F733C44.js";import{Ac as k,Bc as g,Pb as x,Qb as n,Rb as e,Zb as r,cb as i,fa as S,oc as t,rc as f,sb as u,tc as d,vc as s}from"./chunk-6QGPMABE.js";import"./chunk-EU2KAMEK.js";import"./chunk-DAQOROHW.js";var v=()=>["Material","Snackbar","Toast","Notification"],D=(()=>{class l{constructor(){this.snackBarService=S(p)}showSnackbar(c){let a={primary:"This is a primary notification",success:"Operation completed successfully!",danger:"An error occurred. Please try again.",warning:"Warning: Please review your input.",info:"Here is some helpful information."};this.snackBarService.open({message:a[c],panelClass:c,duration:3e3})}static{this.\u0275fac=function(a){return new(a||l)}}static{this.\u0275cmp=u({type:l,selectors:[["playground-snackbar-material-demo"]],features:[k([p])],decls:219,vars:78,consts:[["title","Material Snackbar","description","Toast notification component using Material Snackbar",3,"tags","apiReference","examples"],["demo",""],[1,"snackbar-demo"],[1,"button-group"],["mat-raised-button","","color","primary",3,"click"],["mat-raised-button","","color","accent",3,"click"],["mat-raised-button","","color","warn",3,"click"],["mat-raised-button","",3,"click"],["api",""],[1,"api-table"],[1,"feature-list"],["examples",""]],template:function(a,o){a&1&&(n(0,"app-demo-page-template",0)(1,"div",1)(2,"div",2)(3,"h3"),t(4,"Snackbar Types"),e(),n(5,"p"),t(6,"Click the buttons below to see different snackbar notifications:"),e(),n(7,"div",3)(8,"button",4),r("click",function(){return o.showSnackbar("primary")}),t(9," Primary Snackbar "),e(),n(10,"button",5),r("click",function(){return o.showSnackbar("success")}),t(11," Success Snackbar "),e(),n(12,"button",6),r("click",function(){return o.showSnackbar("danger")}),t(13," Danger Snackbar "),e(),n(14,"button",7),r("click",function(){return o.showSnackbar("warning")}),t(15," Warning Snackbar "),e(),n(16,"button",7),r("click",function(){return o.showSnackbar("info")}),t(17," Info Snackbar "),e()()()(),n(18,"div",8)(19,"h3"),t(20,"Component Overview"),e(),n(21,"p"),t(22," The Material Snackbar service provides toast-style notifications using Angular Material's MatSnackBar. It offers pre-styled notification types with custom icons and colors for different message contexts. "),e(),n(23,"h3"),t(24,"Service"),e(),n(25,"pre")(26,"code"),t(27,"MtSnackBarService"),e()(),n(28,"h3"),t(29,"Service Methods"),e(),n(30,"table",9)(31,"thead")(32,"tr")(33,"th"),t(34,"Method"),e(),n(35,"th"),t(36,"Parameters"),e(),n(37,"th"),t(38,"Returns"),e(),n(39,"th"),t(40,"Description"),e()()(),n(41,"tbody")(42,"tr")(43,"td")(44,"code"),t(45,"open()"),e()(),n(46,"td")(47,"code"),t(48,"ISnackBarOptions"),e()(),n(49,"td")(50,"code"),t(51,"MatSnackBarRef"),e()(),n(52,"td"),t(53,"Opens a snackbar notification"),e()(),n(54,"tr")(55,"td")(56,"code"),t(57,"setViewConRef()"),e()(),n(58,"td")(59,"code"),t(60,"ViewContainerRef"),e()(),n(61,"td")(62,"code"),t(63,"void"),e()(),n(64,"td"),t(65,"Sets the view container reference"),e()()()(),n(66,"h3"),t(67,"Options Interface"),e(),n(68,"pre")(69,"code"),t(70),e()(),n(71,"h3"),t(72,"Snackbar Types"),e(),n(73,"table",9)(74,"thead")(75,"tr")(76,"th"),t(77,"Type"),e(),n(78,"th"),t(79,"Color"),e(),n(80,"th"),t(81,"Use Case"),e()()(),n(82,"tbody")(83,"tr")(84,"td")(85,"code"),t(86,"primary"),e()(),n(87,"td"),t(88,"Blue"),e(),n(89,"td"),t(90,"General notifications, default messages"),e()(),n(91,"tr")(92,"td")(93,"code"),t(94,"success"),e()(),n(95,"td"),t(96,"Green"),e(),n(97,"td"),t(98,"Success messages, confirmations"),e()(),n(99,"tr")(100,"td")(101,"code"),t(102,"danger"),e()(),n(103,"td"),t(104,"Red"),e(),n(105,"td"),t(106,"Error messages, failures"),e()(),n(107,"tr")(108,"td")(109,"code"),t(110,"warning"),e()(),n(111,"td"),t(112,"Orange"),e(),n(113,"td"),t(114,"Warnings, cautions"),e()(),n(115,"tr")(116,"td")(117,"code"),t(118,"info"),e()(),n(119,"td"),t(120,"Light Blue"),e(),n(121,"td"),t(122,"Informational messages"),e()()()(),n(123,"h3"),t(124,"Key Features"),e(),n(125,"ul",10)(126,"li")(127,"strong"),t(128,"Multiple Types:"),e(),t(129," 5 pre-styled notification types"),e(),n(130,"li")(131,"strong"),t(132,"Auto-Dismiss:"),e(),t(133," Configurable duration (default 3 seconds) "),e(),n(134,"li")(135,"strong"),t(136,"Positioning:"),e(),t(137," Flexible vertical and horizontal positioning "),e(),n(138,"li")(139,"strong"),t(140,"Custom Icons:"),e(),t(141," Type-specific icons for visual clarity "),e(),n(142,"li")(143,"strong"),t(144,"Material Design:"),e(),t(145," Built on Angular Material Snackbar "),e(),n(146,"li")(147,"strong"),t(148,"Accessible:"),e(),t(149," ARIA-compliant notifications"),e(),n(150,"li")(151,"strong"),t(152,"Non-Blocking:"),e(),t(153," Doesn't interrupt user workflow"),e()(),n(154,"h3"),t(155,"Use Cases"),e(),n(156,"ul")(157,"li"),t(158,"Success/error feedback after operations"),e(),n(159,"li"),t(160,"Form submission confirmations"),e(),n(161,"li"),t(162,"API call status notifications"),e(),n(163,"li"),t(164,"User action feedback"),e(),n(165,"li"),t(166,"System status updates"),e(),n(167,"li"),t(168,"Temporary informational messages"),e()()(),n(169,"div",11)(170,"h3"),t(171,"1. Basic Snackbar"),e(),n(172,"p"),t(173,"Simple success notification."),e(),n(174,"pre")(175,"code"),t(176),e()(),n(177,"h3"),t(178,"2. Error Notification"),e(),n(179,"p"),t(180,"Show error messages with danger styling."),e(),n(181,"pre")(182,"code"),t(183),e()(),n(184,"h3"),t(185,"3. Custom Position"),e(),n(186,"p"),t(187,"Position snackbar at bottom-right."),e(),n(188,"pre")(189,"code"),t(190),e()(),n(191,"h3"),t(192,"4. Warning Message"),e(),n(193,"p"),t(194,"Display warnings before actions."),e(),n(195,"pre")(196,"code"),t(197),e()(),n(198,"h3"),t(199,"5. Long Duration Notification"),e(),n(200,"p"),t(201,"Keep notification visible longer."),e(),n(202,"pre")(203,"code"),t(204),e()(),n(205,"h3"),t(206,"6. With Snackbar Reference"),e(),n(207,"p"),t(208,"Get reference to dismiss programmatically."),e(),n(209,"pre")(210,"code"),t(211),e()(),n(212,"h3"),t(213,"7. Multiple Notifications"),e(),n(214,"p"),t(215,"Show sequential notifications."),e(),n(216,"pre")(217,"code"),t(218),e()()()()),a&2&&(x("tags",g(77,v))("apiReference",!0)("examples",!0),i(70),f("interface ISnackBarOptions ","{",`
  message: string;                          // Notification message (required)
  duration?: number;                        // Auto-dismiss duration in ms (default: 3000)
  panelClass?: ISnackType;                  // Snackbar type for styling
  verticalPosition?: 'top' | 'bottom';      // Vertical position (default: 'top')
  horizontalPosition?: 'start' | 'center' | 'end' | 'left' | 'right';  // Horizontal position (default: 'center')
  viewContainerRef?: ViewContainerRef;      // Custom view container
`,"}",`

type ISnackType = 'primary' | 'success' | 'danger' | 'warning' | 'info';`),i(106),s(["import ","{"," MtSnackBarService ","}",` from '@arun-bharath-ui/cmp-material';

@Component(`,"{",`
  standalone: true,
  providers: [MtSnackBarService]
`,"}",`)
export class MyComponent `,"{",`
  private snackBarService = inject(MtSnackBarService);

  saveData() `,"{",`
    this.dataService.save(this.formData).subscribe(`,"{",`
      next: () => `,"{",`
        this.snackBarService.open(`,"{",`
          message: 'Data saved successfully!',
          panelClass: 'success',
          duration: 3000
        `,"}",`);
      `,"}",`
    `,"}",`);
  `,"}",`
`,"}"]),i(7),s(["export class FormComponent ","{",`
  private snackBarService = inject(MtSnackBarService);

  submitForm() `,"{",`
    this.apiService.submit(this.form.value).subscribe(`,"{",`
      error: (err) => `,"{",`
        this.snackBarService.open(`,"{",`
          message: 'Failed to submit form. Please try again.',
          panelClass: 'danger',
          duration: 5000
        `,"}",`);
      `,"}",`
    `,"}",`);
  `,"}",`
`,"}"]),i(7),d("export class NotificationComponent ","{",`
  private snackBarService = inject(MtSnackBarService);

  showNotification() `,"{",`
    this.snackBarService.open(`,"{",`
      message: 'New message received',
      panelClass: 'info',
      duration: 4000,
      verticalPosition: 'bottom',
      horizontalPosition: 'end'
    `,"}",`);
  `,"}",`
`,"}"),i(7),d("export class DeleteComponent ","{",`
  private snackBarService = inject(MtSnackBarService);

  confirmDelete() `,"{",`
    this.snackBarService.open(`,"{",`
      message: 'This action cannot be undone',
      panelClass: 'warning',
      duration: 5000,
      verticalPosition: 'top',
      horizontalPosition: 'center'
    `,"}",`);
  `,"}",`
`,"}"),i(7),d("export class UpdateComponent ","{",`
  private snackBarService = inject(MtSnackBarService);

  showUpdateNotice() `,"{",`
    this.snackBarService.open(`,"{",`
      message: 'A new version is available. Please refresh.',
      panelClass: 'primary',
      duration: 10000  // 10 seconds
    `,"}",`);
  `,"}",`
`,"}"),i(7),s(["export class ProgressComponent ","{",`
  private snackBarService = inject(MtSnackBarService);
  private snackBarRef: MatSnackBarRef<SnackBarComponent> | null = null;

  startOperation() `,"{",`
    this.snackBarRef = this.snackBarService.open(`,"{",`
      message: 'Processing...',
      panelClass: 'info',
      duration: 0  // Don't auto-dismiss
    `,"}",`);

    this.performLongOperation().then(() => `,"{",`
      this.snackBarRef?.dismiss();
      this.showSuccess();
    `,"}",`);
  `,"}",`

  showSuccess() `,"{",`
    this.snackBarService.open(`,"{",`
      message: 'Operation completed!',
      panelClass: 'success',
      duration: 3000
    `,"}",`);
  `,"}",`
`,"}"]),i(7),s(["export class BatchComponent ","{",`
  private snackBarService = inject(MtSnackBarService);

  processBatch() `,"{",`
    this.snackBarService.open(`,"{",`
      message: 'Starting batch process...',
      panelClass: 'info',
      duration: 2000
    `,"}",`);

    this.batchService.process().subscribe(`,"{",`
      next: (result) => `,"{",`
        this.snackBarService.open(`,"{","\n          message: \\`Processed $","{","result.count","}",` items successfully\\\`,
          panelClass: 'success',
          duration: 3000
        `,"}",`);
      `,"}",`,
      error: () => `,"{",`
        this.snackBarService.open(`,"{",`
          message: 'Batch process failed',
          panelClass: 'danger',
          duration: 5000
        `,"}",`);
      `,"}",`
    `,"}",`);
  `,"}",`
`,"}"]))},dependencies:[h,b,E],styles:[".snackbar-demo[_ngcontent-%COMP%]{padding:24px}.snackbar-demo[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-top:0;margin-bottom:16px}.snackbar-demo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:16px}.snackbar-demo[_ngcontent-%COMP%]   .button-group[_ngcontent-%COMP%]{display:flex;gap:12px;flex-wrap:wrap}"]})}}return l})();export{D as SnackbarMaterialDemoComponent};
