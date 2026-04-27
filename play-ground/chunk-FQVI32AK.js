import{a as b}from"./chunk-BHP4JTLZ.js";import{a as C}from"./chunk-GUJLOWQ7.js";import{b as y}from"./chunk-VHDJ24KY.js";import{G as S}from"./chunk-CJK7SFDF.js";import{j as f}from"./chunk-3XBYOJNL.js";import"./chunk-2T7PP3I7.js";import"./chunk-H2UPXF7Z.js";import"./chunk-IQR54AYO.js";import{Db as m,Eb as u,Jb as o,Kb as i,Lb as a,Mb as n,Vb as g,cb as t,da as s,gc as h,jc as l,lc as p,rb as c,xc as v}from"./chunk-HTLIC7AN.js";import"./chunk-EU2KAMEK.js";import"./chunk-DAQOROHW.js";var x={setup:`// app.config.ts
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { loadingInterceptor } from '@arun-bharath-ui/cmp-core';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withInterceptors([loadingInterceptor]))
  ]
};`,addToTemplate:`<!-- app.component.html -->
<!-- Place once at the root level of your app -->
<ui-busy-loader
  *ngIf="loaderState().showloader"
  type="circle"
  mode="indeterminate"
  size="48"
/>`,manualUsage:`import { Component, inject } from '@angular/core';
import { LoaderService } from '@arun-bharath-ui/cmp-core';

@Component({ standalone: true, ... })
export class MyComponent {
  private loaderService = inject(LoaderService);

  loadData(): void {
    this.loaderService.show();

    fetchSomething().subscribe({
      next: (data) => { /* handle data */ },
      complete: () => this.loaderService.hide(),
      error: () => this.loaderService.hide()
    });
  }
}`,httpAutomatic:`import { HttpService } from '@arun-bharath-ui/cmp-core';

@Component({ standalone: true, ... })
export class MyComponent {
  private http = inject(HttpService);

  loadData(): void {
    // Pass SHOW_LOADING: true in context \u2014 interceptor handles show/hide automatically
    this.http.get('/api/data', { context: { SHOW_LOADING: true } }).subscribe(data => {
      console.log(data);
    });
  }
}`,readState:`import { Component, inject } from '@angular/core';
import { LoaderService } from '@arun-bharath-ui/cmp-core';

@Component({ standalone: true, ... })
export class MyComponent {
  private loaderService = inject(LoaderService);

  // Reactive signal \u2014 use in template with loaderState().showloader
  readonly loaderState = this.loaderService.loaderState;
}`};var w=()=>["Service","cmp-core","Signal","HTTP"];function _(r,L){r&1&&(i(0,"div",3),n(1,"ui-busy-loader",17),a())}var G=(()=>{class r{constructor(){this.loaderService=s(f),this.loaderState=this.loaderService.loaderState,this.snippets=x,this.isSimulating=!1,this.apiProperties=[{name:"loaderState",type:"Signal<LoaderState>",description:"Read-only signal exposing the current loader state ({ showloader: boolean })."},{name:"show()",type:"void",description:"Sets showloader to true, triggering the loading indicator."},{name:"hide()",type:"void",description:"Sets showloader to false, hiding the loading indicator."}],this.interceptorProperties=[{name:"SHOW_LOADING",type:"boolean",default:"false",description:"HTTP context token. Set to true on a request to auto-trigger the loader via loadingInterceptor."}]}simulateLoading(){this.isSimulating||(this.isSimulating=!0,this.loaderService.show(),setTimeout(()=>{this.loaderService.hide(),this.isSimulating=!1},2500))}static{this.\u0275fac=function(d){return new(d||r)}}static{this.\u0275cmp=c({type:r,selectors:[["playground-loader-service-demo"]],decls:20,vars:16,consts:[["title","Loader Service","description","A signal-based global loading state service. Trigger it manually or automatically via the HTTP interceptor.",3,"tags","apiReference","examples"],["demo",""],[1,"demo-loader-wrapper"],[1,"demo-loader-overlay"],[1,"demo-content"],[1,"demo-hint"],[1,"btn","btn-primary",3,"click","disabled"],[1,"demo-state-badge"],[1,"dot"],["api",""],["title","LoaderService Methods & Properties",3,"properties"],["title","HTTP Context Token (loadingInterceptor)",3,"properties"],["examples",""],["title","1. Register the HTTP Interceptor","description","Add loadingInterceptor once in app.config.ts to enable automatic loader triggering on HTTP requests.",3,"code"],["title","2. Manual show / hide","description","Inject LoaderService and call show() / hide() directly for non-HTTP async operations.",3,"code"],["title","3. Automatic via HTTP context","description","Pass SHOW_LOADING: true in the request context \u2014 the interceptor handles show/hide automatically.",3,"code"],["title","4. Read loader state reactively","description","Use the loaderState signal to react to loading changes in your template or component logic.",3,"code"],["type","circle","mode","indeterminate","size","48"]],template:function(d,e){d&1&&(i(0,"playground-demo-page-template",0)(1,"div",1)(2,"div",2),m(3,_,2,0,"div",3),i(4,"div",4)(5,"p",5),l(6,"Click the button to simulate a 2.5s loading state."),a(),i(7,"button",6),g("click",function(){return e.simulateLoading()}),l(8),a(),i(9,"div",7),n(10,"span",8),l(11),a()()()(),i(12,"div",9),n(13,"playground-api-table",10)(14,"playground-api-table",11),a(),i(15,"div",12),n(16,"playground-example-viewer",13)(17,"playground-example-viewer",14)(18,"playground-example-viewer",15)(19,"playground-example-viewer",16),a()()),d&2&&(o("tags",v(15,w))("apiReference",!0)("examples",!0),t(3),u(e.loaderState().showloader?3:-1),t(4),o("disabled",e.isSimulating),t(),p(" ",e.isSimulating?"Loading...":"Simulate Loading"," "),t(),h("active",e.loaderState().showloader),t(2),p(" ",e.loaderState().showloader?"Loader is ACTIVE":"Loader is IDLE"," "),t(2),o("properties",e.apiProperties),t(),o("properties",e.interceptorProperties),t(2),o("code",e.snippets.setup),t(),o("code",e.snippets.manualUsage),t(),o("code",e.snippets.httpAutomatic),t(),o("code",e.snippets.readState))},dependencies:[y,b,C,S],styles:[".demo-loader-wrapper[_ngcontent-%COMP%]{position:relative;min-height:200px;border:1px dashed var(--border-color, #dee2e6);border-radius:8px;overflow:hidden}.demo-loader-overlay[_ngcontent-%COMP%]{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;background:#ffffffbf;z-index:10;-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px)}.demo-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:1.5rem;padding:2.5rem 1.5rem}.demo-hint[_ngcontent-%COMP%]{margin:0;color:var(--text-muted, #6c757d);font-size:.9rem}.demo-state-badge[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem;padding:.4rem 1rem;border-radius:20px;font-size:.8rem;font-weight:600;background:var(--surface-secondary, #f8f9fa);color:var(--text-muted, #6c757d);transition:all .3s ease}.demo-state-badge.active[_ngcontent-%COMP%]{background:#fff3cd;color:#856404}.demo-state-badge.active[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]{background:#ffc107;animation:_ngcontent-%COMP%_pulse 1s infinite}.dot[_ngcontent-%COMP%]{width:8px;height:8px;border-radius:50%;background:#adb5bd;transition:background .3s ease}@keyframes _ngcontent-%COMP%_pulse{0%,to{opacity:1;transform:scale(1)}50%{opacity:.5;transform:scale(1.3)}}"],changeDetection:0})}}return r})();export{G as LoaderServiceDemoComponent};
