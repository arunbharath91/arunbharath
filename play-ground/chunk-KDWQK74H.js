import{i as T,j as y}from"./chunk-Y44E6TIF.js";import{a as E}from"./chunk-HAYVGET7.js";import"./chunk-W3V7OEYG.js";import{d as f,f as h}from"./chunk-35IBFZQM.js";import"./chunk-5JN3VS6X.js";import"./chunk-CGVOUCLE.js";import"./chunk-XJA634MG.js";import"./chunk-PRGDJABY.js";import{G as g,H as x}from"./chunk-XNXG5RW6.js";import"./chunk-6F733C44.js";import{Bc as S,Pb as d,Qb as n,Rb as e,Zb as o,cb as i,fa as c,oc as t,rc as u,sb as p,vc as l}from"./chunk-6QGPMABE.js";import"./chunk-EU2KAMEK.js";import"./chunk-DAQOROHW.js";var C=()=>["Bootstrap","Notification","Feedback"],A=(()=>{class a{constructor(){this.snackBar=c(T)}showSuccess(){this.snackBar.open("\u2713 Operation completed successfully!","Close",{duration:3e3,horizontalPosition:"end",verticalPosition:"top",panelClass:["success-snackbar"]})}showError(){this.snackBar.open("\u2717 An error occurred. Please try again.","Close",{duration:3e3,horizontalPosition:"end",verticalPosition:"top",panelClass:["error-snackbar"]})}showInfo(){this.snackBar.open("\u2139 Here is some information for you.","Close",{duration:3e3,horizontalPosition:"end",verticalPosition:"top"})}showWarning(){this.snackBar.open("\u26A0 Warning: Please review your input.","Close",{duration:3e3,horizontalPosition:"end",verticalPosition:"top"})}static{this.\u0275fac=function(s){return new(s||a)}}static{this.\u0275cmp=p({type:a,selectors:[["app-toast-demo"]],decls:115,vars:52,consts:[["title","Toast","description","Notification toasts for user feedback",3,"tags","apiReference","examples"],["demo",""],[1,"toast-buttons"],["mat-raised-button","",3,"click"],["mat-raised-button","","color","warn",3,"click"],["mat-raised-button","","color","accent",3,"click"],["api",""],[1,"feature-list"],["examples",""]],template:function(s,r){s&1&&(n(0,"app-demo-page-template",0)(1,"div",1)(2,"div",2)(3,"button",3),o("click",function(){return r.showSuccess()}),n(4,"mat-icon"),t(5,"check_circle"),e(),t(6," Success Toast "),e(),n(7,"button",4),o("click",function(){return r.showError()}),n(8,"mat-icon"),t(9,"error"),e(),t(10," Error Toast "),e(),n(11,"button",5),o("click",function(){return r.showInfo()}),n(12,"mat-icon"),t(13,"info"),e(),t(14," Info Toast "),e(),n(15,"button",3),o("click",function(){return r.showWarning()}),n(16,"mat-icon"),t(17,"warning"),e(),t(18," Warning Toast "),e()()(),n(19,"div",6)(20,"h3"),t(21,"Component Overview"),e(),n(22,"p"),t(23," The Toast component provides non-intrusive notifications to users. Built on ng-bootstrap, it supports multiple toast types, positioning, auto-hide, and stacking. "),e(),n(24,"h3"),t(25,"Selector"),e(),n(26,"pre")(27,"code"),t(28,"<bt-toast></bt-toast>"),e()(),n(29,"h3"),t(30,"Service Usage"),e(),n(31,"p"),t(32," Toasts are displayed using the "),n(33,"code"),t(34,"BtToastService"),e(),t(35,". Add the service component to your template and use the service to show toasts. "),e(),n(36,"h3"),t(37,"Toast Configuration"),e(),n(38,"pre")(39,"code"),t(40),e()(),n(41,"h3"),t(42,"Key Features"),e(),n(43,"ul",7)(44,"li")(45,"strong"),t(46,"Multiple Types:"),e(),t(47," Success, error, warning, info, and primary styles "),e(),n(48,"li")(49,"strong"),t(50,"Flexible Positioning:"),e(),t(51," 6 position options (top/bottom, left/right/center) "),e(),n(52,"li")(53,"strong"),t(54,"Auto-Hide:"),e(),t(55," Configurable auto-dismiss with custom delay "),e(),n(56,"li")(57,"strong"),t(58,"Stackable:"),e(),t(59," Display multiple toasts simultaneously "),e(),n(60,"li")(61,"strong"),t(62,"Custom Styling:"),e(),t(63," Add custom CSS classes for branding "),e(),n(64,"li")(65,"strong"),t(66,"Template Data:"),e(),t(67," Pass dynamic data to toast content "),e(),n(68,"li")(69,"strong"),t(70,"Performance:"),e(),t(71," OnPush change detection"),e()(),n(72,"h3"),t(73,"Best Practices"),e(),n(74,"ul")(75,"li"),t(76,"Use "),n(77,"strong"),t(78,"success"),e(),t(79," for completed actions"),e(),n(80,"li"),t(81,"Use "),n(82,"strong"),t(83,"danger"),e(),t(84," for errors that need attention"),e(),n(85,"li"),t(86,"Use "),n(87,"strong"),t(88,"warning"),e(),t(89," for cautionary messages"),e(),n(90,"li"),t(91,"Use "),n(92,"strong"),t(93,"info"),e(),t(94," for general notifications"),e(),n(95,"li"),t(96,"Keep messages concise (under 100 characters)"),e(),n(97,"li"),t(98," Set appropriate delays (3-5 seconds for info, longer for errors) "),e()()(),n(99,"div",8)(100,"h3"),t(101,"Basic Usage"),e(),n(102,"pre")(103,"code"),t(104),e()(),n(105,"h3"),t(106,"Different Toast Types"),e(),n(107,"pre")(108,"code"),t(109),e()(),n(110,"h3"),t(111,"Stacked Toasts"),e(),n(112,"pre")(113,"code"),t(114),e()()()()),s&2&&(d("tags",S(51,C))("apiReference",!0)("examples",!0),i(40),u("interface IToastOption ","{",`
  stacked?: boolean;           // Stack multiple toasts vertically
  panelClass?: ToastType;      // Toast styling type
  customPanelClass?: string;   // Additional custom CSS classes
  autoHide?: boolean;          // Auto-dismiss after delay
  delay?: number;              // Auto-hide delay in milliseconds
  templateData: any;           // Data passed to toast template
  position?: ToastPostion;     // Screen position for toast
`,"}",`

// Toast Types
type ToastType = 'primary' | 'success' | 'danger' | 'warning' | 'info';

// Toast Positions
type ToastPostion =
  | 'TopLeft' | 'TopRight' | 'TopCenter'
  | 'BottomLeft' | 'BottomRight' | 'BottomCenter';`),i(64),l(["import ","{"," ToastComponent, BtToastService ","}",` from '@arun-bharath-ui/cmp-bootstrap';

@Component(`,"{",`
  standalone: true,
  imports: [ToastComponent],
  template: \`
    <bt-toast />
    <button (click)="showToast()">Show Toast</button>
  \`
`,"}",`)
export class NotificationComponent `,"{",`
  constructor(private toastService: BtToastService) `,"{","","}",`

  showToast() `,"{",`
    this.toastService.show(`,"{",`
      panelClass: 'success',
      templateData: `,"{"," message: 'Operation successful!' ","}",`,
      autoHide: true,
      delay: 3000,
      position: 'TopRight'
    `,"}",`);
  `,"}",`
`,"}"]),i(5),l(["export class AlertsComponent ","{",`
  constructor(private toastService: BtToastService) `,"{","","}",`

  showSuccess() `,"{",`
    this.toastService.show(`,"{",`
      panelClass: 'success',
      templateData: `,"{"," message: 'Success!' ","}",`,
      autoHide: true,
      delay: 3000
    `,"}",`);
  `,"}",`

  showError() `,"{",`
    this.toastService.show(`,"{",`
      panelClass: 'danger',
      templateData: `,"{"," message: 'Error occurred!' ","}",`,
      autoHide: false
    `,"}",`);
  `,"}",`

  showWarning() `,"{",`
    this.toastService.show(`,"{",`
      panelClass: 'warning',
      templateData: `,"{"," message: 'Warning!' ","}",`,
      delay: 5000
    `,"}",`);
  `,"}",`
`,"}"]),i(5),l(["showMultipleToasts() ","{",`
  const messages = ['First', 'Second', 'Third'];

  messages.forEach((msg, index) => `,"{",`
    setTimeout(() => `,"{",`
      this.toastService.show(`,"{",`
        stacked: true,
        panelClass: 'info',
        templateData: `,"{"," message: msg ","}",`,
        position: 'BottomRight',
        delay: 3000
      `,"}",`);
    `,"}",`, index * 500);
  `,"}",`);
`,"}"]))},dependencies:[E,h,f,y,x,g],styles:[".toast-buttons[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:16px}.toast-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;gap:8px}"]})}}return a})();export{A as ToastDemoComponent};
