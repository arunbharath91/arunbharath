import{a as y}from"./chunk-V3SYVIUD.js";import{ba as w}from"./chunk-MYSLESFD.js";import"./chunk-RVWPVG2K.js";import"./chunk-RPEJZLQH.js";import"./chunk-7AVGRWBP.js";import{$a as r,$b as f,Fc as C,Hb as h,Ib as n,Jb as t,Ob as u,Pc as S,Sb as o,ac as k,ca as b,gc as e,jc as v,lb as m,lc as p,nc as d,ob as g,tb as x,uc as E}from"./chunk-TFOBNGQK.js";import"./chunk-EU2KAMEK.js";import"./chunk-DAQOROHW.js";var _=["customSnack"],B=["localSnackContainer"],P=["globalScopeContainer"],T=()=>["Native","Snackbar","Toast","Notification","Signals"];function D(c,M){c&1&&(n(0,"div",24)(1,"div",25)(2,"i",26),e(3,"celebration"),t()(),n(4,"div")(5,"h4",27),e(6,"Custom Layout!"),t(),n(7,"span",28),e(8,"This layout is entirely projected via a TemplateRef."),t()()())}var A=(()=>{class c{constructor(){this.snackBarService=b(w),this.customTemplate=S.required("customSnack"),this.localContainer=S.required("localSnackContainer",{read:m}),this.globalScopeContainer=S.required("globalScopeContainer",{read:m})}showSnackbar(l){let a={primary:"This is a primary notification",success:"Operation completed successfully!",danger:"An error occurred. Please try again.",warning:"Warning: Please review your input.",info:"Here is some helpful information."};this.snackBarService.open({message:a[l],panelClass:l,duration:3e3,verticalPosition:l==="warning"?"top":"bottom",horizontalPosition:l==="danger"?"right":l==="success"?"left":"center"})}showCustomSnackbar(){this.snackBarService.open({template:this.customTemplate(),panelClass:"primary",duration:5e3,verticalPosition:"top",horizontalPosition:"right"})}showLocalSnackbar(){this.snackBarService.open({message:"I am physically trapped inside this DOM element!",panelClass:"success",duration:3e3,verticalPosition:"bottom",horizontalPosition:"center",viewContainerRef:this.localContainer()})}showGlobalScopeSnackbar(){this.snackBarService.open({message:"I am logically injected here, but visually global!",panelClass:"warning",duration:3e3,verticalPosition:"top",horizontalPosition:"center",viewContainerRef:this.globalScopeContainer()})}static{this.\u0275fac=function(a){return new(a||c)}}static{this.\u0275cmp=g({type:c,selectors:[["playground-snackbar-demo"]],viewQuery:function(a,i){a&1&&f(i.customTemplate,_,5)(i.localContainer,B,5,m)(i.globalScopeContainer,P,5,m),a&2&&k(3)},decls:258,vars:78,consts:[["customSnack",""],["localSnackContainer",""],["globalScopeContainer",""],["title","Native Snackbar","description","Lighweight toast notification component using signals",3,"tags","apiReference","examples"],["demo",""],[1,"snackbar-demo"],[1,"button-group",2,"display","flex","gap","12px","flex-wrap","wrap"],[1,"cmp-btn","cmp-btn-primary",3,"click"],[1,"cmp-btn","cmp-btn-success",3,"click"],[1,"cmp-btn","cmp-btn-danger",3,"click"],[1,"cmp-btn","cmp-btn-warning",3,"click"],[1,"cmp-btn","cmp-btn-info",3,"click"],[1,"mt-4"],[1,"cmp-btn","cmp-btn-outline-primary",3,"click"],[1,"material-icons"],[2,"transform","translateZ(0)","position","relative","height","350px","background","rgba(255,255,255,0.02)","border","1px dashed rgba(255,255,255,0.2)","border-radius","8px","display","flex","align-items","center","justify-content","center","margin-bottom","2rem"],[2,"text-align","center"],[2,"color","rgba(255,255,255,0.5)","margin-bottom","1rem"],[2,"padding","2rem","background","rgba(255,255,255,0.05)","border","1px solid rgba(255,255,255,0.1)","border-radius","8px","text-align","center"],[1,"cmp-btn","cmp-btn-outline-warning",3,"click"],["api",""],[1,"api-table"],[1,"feature-list"],["examples",""],[2,"display","flex","align-items","center","gap","1rem"],[2,"background","rgba(255,255,255,0.2)","padding","8px","border-radius","50%","display","flex"],[1,"material-icons","text-white"],[2,"margin","0","color","white","font-size","1rem"],[2,"color","rgba(255,255,255,0.8)","font-size","0.85rem"]],template:function(a,i){a&1&&(n(0,"playground-demo-page-template",3)(1,"div",4)(2,"div",5)(3,"h3"),e(4,"Snackbar Types"),t(),n(5,"p"),e(6,"Click the buttons below to see different snackbar notifications:"),t(),n(7,"div",6)(8,"button",7),o("click",function(){return i.showSnackbar("primary")}),e(9," Primary Snackbar "),t(),n(10,"button",8),o("click",function(){return i.showSnackbar("success")}),e(11," Success Snackbar "),t(),n(12,"button",9),o("click",function(){return i.showSnackbar("danger")}),e(13," Danger Snackbar "),t(),n(14,"button",10),o("click",function(){return i.showSnackbar("warning")}),e(15," Warning Snackbar "),t(),n(16,"button",11),o("click",function(){return i.showSnackbar("info")}),e(17," Info Snackbar "),t()(),n(18,"h3",12),e(19,"Custom Template"),t(),n(20,"p"),e(21,"Render any custom Angular template structure inside the snackbar:"),t(),n(22,"button",13),o("click",function(){return i.showCustomSnackbar()}),n(23,"i",14),e(24,"dashboard_customize"),t(),e(25," Show Custom Template "),t(),x(26,D,9,0,"ng-template",null,0,C),n(28,"h3",12),e(29,"Isolated Container Projection"),t(),n(30,"p"),e(31,"Using "),n(32,"code"),e(33,"viewContainerRef"),t(),e(34,", project the notification directly into a targeted DOM element block instead of the global viewport."),t(),n(35,"div",15),u(36,null,1),n(38,"div",16)(39,"h4",17),e(40,"Relative Bounding Box"),t(),n(41,"button",8),o("click",function(){return i.showLocalSnackbar()}),e(42," Show Trapped Snackbar "),t()()(),n(43,"h3",12),e(44,"Contextual Global Projection"),t(),n(45,"p"),e(46,"If you don't wrap the target container with CSS transforms, projecting via a "),n(47,"code"),e(48,"viewContainerRef"),t(),e(49," simply means the Snackbar will safely inherit logic (like Context Providers) from this specific local component's module tree, while visually remaining tied to the global screen viewport naturally!"),t(),n(50,"div",18),u(51,null,2),n(53,"button",19),o("click",function(){return i.showGlobalScopeSnackbar()}),n(54,"i",14),e(55,"fullscreen"),t(),e(56," Show Contextual Global Snackbar "),t()()()(),n(57,"div",20)(58,"h3"),e(59,"Component Overview"),t(),n(60,"p"),e(61," The Material Snackbar service provides toast-style notifications using Angular Material's MatSnackBar. It offers pre-styled notification types with custom icons and colors for different message contexts. "),t(),n(62,"h3"),e(63,"Service"),t(),n(64,"pre")(65,"code"),e(66,"SnackBarService"),t()(),n(67,"h3"),e(68,"Service Methods"),t(),n(69,"table",21)(70,"thead")(71,"tr")(72,"th"),e(73,"Method"),t(),n(74,"th"),e(75,"Parameters"),t(),n(76,"th"),e(77,"Returns"),t(),n(78,"th"),e(79,"Description"),t()()(),n(80,"tbody")(81,"tr")(82,"td")(83,"code"),e(84,"open()"),t()(),n(85,"td")(86,"code"),e(87,"ISnackBarOptions"),t()(),n(88,"td")(89,"code"),e(90,"MatSnackBarRef"),t()(),n(91,"td"),e(92,"Opens a snackbar notification"),t()(),n(93,"tr")(94,"td")(95,"code"),e(96,"setViewConRef()"),t()(),n(97,"td")(98,"code"),e(99,"ViewContainerRef"),t()(),n(100,"td")(101,"code"),e(102,"void"),t()(),n(103,"td"),e(104,"Sets the view container reference"),t()()()(),n(105,"h3"),e(106,"Options Interface"),t(),n(107,"pre")(108,"code"),e(109),t()(),n(110,"h3"),e(111,"Snackbar Types"),t(),n(112,"table",21)(113,"thead")(114,"tr")(115,"th"),e(116,"Type"),t(),n(117,"th"),e(118,"Color"),t(),n(119,"th"),e(120,"Use Case"),t()()(),n(121,"tbody")(122,"tr")(123,"td")(124,"code"),e(125,"primary"),t()(),n(126,"td"),e(127,"Blue"),t(),n(128,"td"),e(129,"General notifications, default messages"),t()(),n(130,"tr")(131,"td")(132,"code"),e(133,"success"),t()(),n(134,"td"),e(135,"Green"),t(),n(136,"td"),e(137,"Success messages, confirmations"),t()(),n(138,"tr")(139,"td")(140,"code"),e(141,"danger"),t()(),n(142,"td"),e(143,"Red"),t(),n(144,"td"),e(145,"Error messages, failures"),t()(),n(146,"tr")(147,"td")(148,"code"),e(149,"warning"),t()(),n(150,"td"),e(151,"Orange"),t(),n(152,"td"),e(153,"Warnings, cautions"),t()(),n(154,"tr")(155,"td")(156,"code"),e(157,"info"),t()(),n(158,"td"),e(159,"Light Blue"),t(),n(160,"td"),e(161,"Informational messages"),t()()()(),n(162,"h3"),e(163,"Key Features"),t(),n(164,"ul",22)(165,"li")(166,"strong"),e(167,"Multiple Types:"),t(),e(168," 5 pre-styled notification types"),t(),n(169,"li")(170,"strong"),e(171,"Auto-Dismiss:"),t(),e(172," Configurable duration (default 3 seconds) "),t(),n(173,"li")(174,"strong"),e(175,"Positioning:"),t(),e(176," Flexible vertical and horizontal positioning "),t(),n(177,"li")(178,"strong"),e(179,"Custom Icons:"),t(),e(180," Type-specific icons for visual clarity "),t(),n(181,"li")(182,"strong"),e(183,"Material Design:"),t(),e(184," Built on Angular Material Snackbar "),t(),n(185,"li")(186,"strong"),e(187,"Accessible:"),t(),e(188," ARIA-compliant notifications"),t(),n(189,"li")(190,"strong"),e(191,"Non-Blocking:"),t(),e(192," Doesn't interrupt user workflow"),t()(),n(193,"h3"),e(194,"Use Cases"),t(),n(195,"ul")(196,"li"),e(197,"Success/error feedback after operations"),t(),n(198,"li"),e(199,"Form submission confirmations"),t(),n(200,"li"),e(201,"API call status notifications"),t(),n(202,"li"),e(203,"User action feedback"),t(),n(204,"li"),e(205,"System status updates"),t(),n(206,"li"),e(207,"Temporary informational messages"),t()()(),n(208,"div",23)(209,"h3"),e(210,"1. Basic Snackbar"),t(),n(211,"p"),e(212,"Simple success notification."),t(),n(213,"pre")(214,"code"),e(215),t()(),n(216,"h3"),e(217,"2. Error Notification"),t(),n(218,"p"),e(219,"Show error messages with danger styling."),t(),n(220,"pre")(221,"code"),e(222),t()(),n(223,"h3"),e(224,"3. Custom Position"),t(),n(225,"p"),e(226,"Position snackbar at bottom-right."),t(),n(227,"pre")(228,"code"),e(229),t()(),n(230,"h3"),e(231,"4. Warning Message"),t(),n(232,"p"),e(233,"Display warnings before actions."),t(),n(234,"pre")(235,"code"),e(236),t()(),n(237,"h3"),e(238,"5. Long Duration Notification"),t(),n(239,"p"),e(240,"Keep notification visible longer."),t(),n(241,"pre")(242,"code"),e(243),t()(),n(244,"h3"),e(245,"6. With Snackbar Reference"),t(),n(246,"p"),e(247,"Get reference to dismiss programmatically."),t(),n(248,"pre")(249,"code"),e(250),t()(),n(251,"h3"),e(252,"7. Multiple Notifications"),t(),n(253,"p"),e(254,"Show sequential notifications."),t(),n(255,"pre")(256,"code"),e(257),t()()()()),a&2&&(h("tags",E(77,T))("apiReference",!0)("examples",!0),r(109),v("interface ISnackBarOptions ","{",`
  message: string;                          // Notification message (required)
  duration?: number;                        // Auto-dismiss duration in ms (default: 3000)
  panelClass?: ISnackType;                  // Snackbar type for styling
  verticalPosition?: 'top' | 'bottom';      // Vertical position (default: 'top')
  horizontalPosition?: 'start' | 'center' | 'end' | 'left' | 'right';  // Horizontal position (default: 'center')
  viewContainerRef?: ViewContainerRef;      // Custom view container
`,"}",`

type ISnackType = 'primary' | 'success' | 'danger' | 'warning' | 'info';`),r(106),d(["import ","{"," SnackBarService ","}",` from '@arun-bharath-ui/cmp-material';

@Component(`,"{",`
  standalone: true,
  providers: [SnackBarService]
`,"}",`)
export class MyComponent `,"{",`
  private snackBarService = inject(SnackBarService);

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
`,"}"]),r(7),d(["export class FormComponent ","{",`
  private snackBarService = inject(SnackBarService);

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
`,"}"]),r(7),p("export class NotificationComponent ","{",`
  private snackBarService = inject(SnackBarService);

  showNotification() `,"{",`
    this.snackBarService.open(`,"{",`
      message: 'New message received',
      panelClass: 'info',
      duration: 4000,
      verticalPosition: 'bottom',
      horizontalPosition: 'end'
    `,"}",`);
  `,"}",`
`,"}"),r(7),p("export class DeleteComponent ","{",`
  private snackBarService = inject(SnackBarService);

  confirmDelete() `,"{",`
    this.snackBarService.open(`,"{",`
      message: 'This action cannot be undone',
      panelClass: 'warning',
      duration: 5000,
      verticalPosition: 'top',
      horizontalPosition: 'center'
    `,"}",`);
  `,"}",`
`,"}"),r(7),p("export class UpdateComponent ","{",`
  private snackBarService = inject(SnackBarService);

  showUpdateNotice() `,"{",`
    this.snackBarService.open(`,"{",`
      message: 'A new version is available. Please refresh.',
      panelClass: 'primary',
      duration: 10000  // 10 seconds
    `,"}",`);
  `,"}",`
`,"}"),r(7),d(["export class ProgressComponent ","{",`
  private snackBarService = inject(SnackBarService);
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
`,"}"]),r(7),d(["export class BatchComponent ","{",`
  private snackBarService = inject(SnackBarService);

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
`,"}"]))},dependencies:[y],styles:[".snackbar-demo[_ngcontent-%COMP%]{padding:24px}.snackbar-demo[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-top:0;margin-bottom:16px}.snackbar-demo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:16px}.snackbar-demo[_ngcontent-%COMP%]   .button-group[_ngcontent-%COMP%]{display:flex;gap:12px;flex-wrap:wrap}"]})}}return c})();export{A as SnackbarDemoComponent};
