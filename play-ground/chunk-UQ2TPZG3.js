import{a as v}from"./chunk-VDAENKCK.js";import{ga as _}from"./chunk-QNVBOXMV.js";import"./chunk-RVWPVG2K.js";import"./chunk-RPEJZLQH.js";import"./chunk-7AVGRWBP.js";import{$b as g,Fc as b,Hb as S,Ib as t,Jb as n,Ob as f,Pc as c,Sb as a,ac as h,ca as s,gc as e,lb as p,ob as d,tb as u,uc as x}from"./chunk-TFOBNGQK.js";import"./chunk-EU2KAMEK.js";import"./chunk-DAQOROHW.js";var P=["customPanel"],C=["trappedContainer"],E=()=>["Native","Panel","Drawer","Signals"];function T(o,y){o&1&&(t(0,"div",16)(1,"div",17)(2,"i",18),e(3,"rocket_launch"),n(),t(4,"div")(5,"h4",19),e(6,"Rich Custom Content"),n(),t(7,"span",20),e(8,"Projected via TemplateRef from the host component."),n()()(),t(9,"p",21),e(10,"Any complex Angular component structure can be projected into the SlidePanel. This enables dynamic forms, product drawers, filter panels, and much more."),n()())}var O=(()=>{class o{constructor(){this.panelService=s(_),this.customPanelTemplate=c.required("customPanel"),this.trappedContainer=c.required("trappedContainer",{read:p})}openPanel(r,i){this.panelService.open({position:r,title:i,size:r==="left"||r==="right"?"360px":"55%",closeOnBackdrop:!0})}openCustomTemplate(){this.panelService.open({position:"right",title:"Custom Template",size:"400px",template:this.customPanelTemplate()})}openTrapped(){this.panelService.open({position:"bottom",title:"Trapped Panel",size:"60%",viewContainerRef:this.trappedContainer()})}static{this.\u0275fac=function(i){return new(i||o)}}static{this.\u0275cmp=d({type:o,selectors:[["playground-slide-panel-demo"]],viewQuery:function(i,l){i&1&&g(l.customPanelTemplate,P,5)(l.trappedContainer,C,5,p),i&2&&h(2)},decls:71,vars:4,consts:[["customPanel",""],["trappedContainer",""],["title","Slide Panel","description","Lightweight CDK-free panel that slides in from any screen edge with trap strategy support",3,"tags","apiReference","examples"],["demo",""],[1,"mb-2"],[1,"mb-4"],[2,"display","flex","flex-wrap","wrap","gap","12px","margin-bottom","2rem"],[1,"cmp-btn","cmp-btn-primary",3,"click"],[1,"material-icons"],[1,"cmp-btn","cmp-btn-success","mb-4",3,"click"],[2,"transform","translateZ(0)","position","relative","height","400px","border","2px dashed rgba(63,81,181,0.3)","border-radius","16px","display","flex","align-items","center","justify-content","center","background","rgba(63,81,181,0.03)"],[2,"text-align","center"],[2,"color","rgba(0,0,0,0.4)","margin-bottom","1rem"],[1,"cmp-btn","cmp-btn-warning",3,"click"],["api",""],["examples",""],[2,"padding","8px 0"],[2,"display","flex","align-items","center","gap","12px","padding","16px","background","rgba(63,81,181,0.06)","border-radius","12px","margin-bottom","16px"],[1,"material-icons",2,"color","#3f51b5","font-size","2rem"],[2,"margin","0 0 4px","font-weight","700"],[2,"font-size","0.85rem","color","rgba(0,0,0,0.5)"],[2,"color","rgba(0,0,0,0.6)","line-height","1.7"]],template:function(i,l){i&1&&(t(0,"playground-demo-page-template",2)(1,"div",3)(2,"h3",4),e(3,"Position Variants"),n(),t(4,"p",5),e(5,"The panel slides in from any of the four screen edges."),n(),t(6,"div",6)(7,"button",7),a("click",function(){return l.openPanel("bottom","Bottom Panel")}),t(8,"i",8),e(9,"vertical_align_bottom"),n(),e(10," Slide from Bottom "),n(),t(11,"button",7),a("click",function(){return l.openPanel("top","Top Panel")}),t(12,"i",8),e(13,"vertical_align_top"),n(),e(14," Slide from Top "),n(),t(15,"button",7),a("click",function(){return l.openPanel("left","Left Panel")}),t(16,"i",8),e(17,"chevron_right"),n(),e(18," Slide from Left "),n(),t(19,"button",7),a("click",function(){return l.openPanel("right","Right Panel")}),t(20,"i",8),e(21,"chevron_left"),n(),e(22," Slide from Right "),n()(),t(23,"h3",4),e(24,"Custom Template Projection"),n(),t(25,"p",5),e(26,"Pass any Angular template as content via "),t(27,"code"),e(28,"TemplateRef"),n(),e(29,"."),n(),t(30,"button",9),a("click",function(){return l.openCustomTemplate()}),t(31,"i",8),e(32,"view_quilt"),n(),e(33," Open with Custom Template "),n(),u(34,T,11,0,"ng-template",null,0,b),t(36,"h3",4),e(37,"Trapped Container"),n(),t(38,"p",5),e(39,"Using "),t(40,"code"),e(41,"viewContainerRef"),n(),e(42,", the panel renders inside a target element. Add "),t(43,"code"),e(44,"transform: translateZ(0)"),n(),e(45," to contain "),t(46,"code"),e(47,"position: fixed"),n(),e(48," elements."),n(),t(49,"div",10),f(50,null,1),t(52,"div",11)(53,"p",12),e(54,"CSS transform boundary active"),n(),t(55,"button",13),a("click",function(){return l.openTrapped()}),t(56,"i",8),e(57,"crop_free"),n(),e(58," Open Trapped Panel "),n()()()(),t(59,"div",14)(60,"h3"),e(61,"Service Usage"),n(),t(62,"pre")(63,"code"),e(64,`import { SlidePanelService } from '@arun-bharath-ui/cmp-ui';

panelService = inject(SlidePanelService);

// Basic usage
this.panelService.open({
  position: 'right',         // 'bottom' | 'top' | 'left' | 'right'
  title: 'My Panel',
  size: '400px',
  closeOnBackdrop: true,
});

// Custom template
this.panelService.open({
  template: this.myTemplate(),
  position: 'bottom',
});

// Trap strategy
this.panelService.open({
  viewContainerRef: this.containerRef(),
  position: 'bottom',
});`),n()()(),t(65,"div",15)(66,"h3"),e(67,"ISlidePanelOptions"),n(),t(68,"pre")(69,"code"),e(70,`interface ISlidePanelOptions {
  template?:         TemplateRef<unknown>;   // Custom content
  position?:         SlidePanelPosition;       // 'bottom' | 'top' | 'left' | 'right'
  size?:             string;                   // CSS value e.g. '400px', '50%'
  title?:            string;                   // Header title
  closeOnBackdrop?:  boolean;                  // Default: true
  viewContainerRef?: ViewContainerRef;         // Trap strategy
}`),n()()()()),i&2&&S("tags",x(3,E))("apiReference",!0)("examples",!0)},dependencies:[v],encapsulation:2})}}return o})();export{O as SlidePanelDemoComponent};
