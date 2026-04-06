import{a as D,c as P}from"./chunk-IINHMTKA.js";import{h as k}from"./chunk-SBIJFZDA.js";import"./chunk-24GYA6MA.js";import"./chunk-5FBFIPUF.js";import{a as F}from"./chunk-HAYVGET7.js";import"./chunk-W3V7OEYG.js";import"./chunk-35IBFZQM.js";import{c as v,g as w,j as C,s as _}from"./chunk-5JN3VS6X.js";import"./chunk-CGVOUCLE.js";import"./chunk-XJA634MG.js";import{i as M}from"./chunk-PRGDJABY.js";import"./chunk-XNXG5RW6.js";import"./chunk-6F733C44.js";import{$b as x,Bc as I,Jb as g,Kb as u,Pb as m,Qb as t,Rb as e,Zb as c,cb as i,oc as n,pc as S,rc as f,sb as p,sc as h,uc as E,wc as y,xa as d,xc as A,yc as b}from"./chunk-6QGPMABE.js";import"./chunk-RPEJZLQH.js";import"./chunk-EU2KAMEK.js";import"./chunk-DAQOROHW.js";var R=()=>["UI","AI","Interactive","Advanced"];function W(a,N){if(a&1&&(t(0,"div",6)(1,"strong"),n(2,"Applied Suggestion:"),e(),t(3,"p"),n(4),e()()),a&2){let o=x();i(4),S(o.appliedSuggestion())}}var j=(()=>{class a{constructor(){this.message="Hello, I need help with my order. It has not arrived yet.",this.appliedSuggestion=d("")}onApplySuggestion(o){this.appliedSuggestion.set(o)}static{this.\u0275fac=function(r){return new(r||a)}}static{this.\u0275cmp=p({type:a,selectors:[["playground-ai-assist-demo"]],decls:108,vars:21,consts:[["title","AI Assist Widget","description","AI-powered message analysis and suggestion widget with sentiment detection",3,"tags","apiReference","examples"],["demo",""],[1,"ai-assist-demo"],[1,"message-input"],["placeholder","Enter your message here...","rows","4",3,"ngModelChange","ngModel"],[3,"applySuggestion","message"],[1,"applied-suggestion"],["api",""],[1,"api-table"],[1,"feature-list"],["examples",""]],template:function(r,s){r&1&&(t(0,"app-demo-page-template",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"label"),n(5,"Type a message (min 10 characters):"),e(),t(6,"textarea",4),b("ngModelChange",function(l){return A(s.message,l)||(s.message=l),l}),e()(),t(7,"ui-ai-assist-widget",5),c("applySuggestion",function(l){return s.onApplySuggestion(l)}),e(),g(8,W,5,1,"div",6),e()(),t(9,"div",7)(10,"h3"),n(11,"Inputs"),e(),t(12,"table",8)(13,"thead")(14,"tr")(15,"th"),n(16,"Name"),e(),t(17,"th"),n(18,"Type"),e(),t(19,"th"),n(20,"Required"),e(),t(21,"th"),n(22,"Description"),e()()(),t(23,"tbody")(24,"tr")(25,"td"),n(26,"message"),e(),t(27,"td")(28,"code"),n(29,"InputSignal<string>"),e()(),t(30,"td"),n(31,"Yes"),e(),t(32,"td"),n(33,"The message text to analyze (min 10 characters)"),e()()()(),t(34,"h3"),n(35,"Outputs"),e(),t(36,"table",8)(37,"thead")(38,"tr")(39,"th"),n(40,"Name"),e(),t(41,"th"),n(42,"Type"),e(),t(43,"th"),n(44,"Description"),e()()(),t(45,"tbody")(46,"tr")(47,"td"),n(48,"applySuggestion"),e(),t(49,"td")(50,"code"),n(51,"OutputEmitterRef<string>"),e()(),t(52,"td"),n(53,"Emitted when user applies the AI suggestion"),e()()()(),t(54,"h3"),n(55,"Analysis Result"),e(),t(56,"pre")(57,"code"),n(58),e()(),t(59,"h3"),n(60,"Features"),e(),t(61,"ul",9)(62,"li"),n(63,"Real-time AI message analysis with 1-second debounce"),e(),t(64,"li"),n(65,"Sentiment detection (positive, negative, neutral)"),e(),t(66,"li"),n(67,"AI-powered message refinement suggestions"),e(),t(68,"li"),n(69,"Uses Angular Resource API for async operations"),e(),t(70,"li"),n(71,"Automatic debouncing to reduce API calls"),e(),t(72,"li"),n(73,"Loading state indication during analysis"),e(),t(74,"li"),n(75,"Browser AI API support detection"),e(),t(76,"li"),n(77,"Signal-based reactive architecture"),e(),t(78,"li"),n(79,"OnPush change detection for performance"),e()(),t(80,"h3"),n(81,"Browser Compatibility"),e(),t(82,"p"),n(83," Requires browser support for AI APIs (Chrome with AI features enabled). Falls back gracefully if not available. "),e()(),t(84,"div",10)(85,"h3"),n(86,"Basic Usage"),e(),t(87,"pre")(88,"code"),n(89),e()(),t(90,"h3"),n(91,"With Form Integration"),e(),t(92,"pre")(93,"code"),n(94),e()(),t(95,"h3"),n(96,"How It Works"),e(),t(97,"ol")(98,"li"),n(99,"User types a message (minimum 10 characters)"),e(),t(100,"li"),n(101,"Component debounces input for 1 second"),e(),t(102,"li"),n(103,"AI analyzes message for sentiment and improvements"),e(),t(104,"li"),n(105,"Widget displays analysis results and suggestions"),e(),t(106,"li"),n(107,"User can apply suggestion with one click"),e()()()()),r&2&&(m("tags",I(20,R))("apiReference",!0)("examples",!0),i(6),y("ngModel",s.message),i(),m("message",s.message),i(),u(s.appliedSuggestion()?8:-1),i(50),f("interface AIAnalysis ","{",`
  sentiment: string;
  draft: string;
`,"}"),i(31),h("export class ContactComponent ","{",`
  message = signal('');

  handleApplySuggestion(suggestion: string) `,"{",`
    this.message.set(suggestion);
  `,"}",`
`,"}",`

<ui-ai-assist-widget
  [message]="message()"
  (applySuggestion)="handleApplySuggestion($event)"
/>`),i(5),E("export class FeedbackFormComponent ","{",`
  feedbackForm = new FormGroup(`,"{",`
    message: new FormControl('')
  `,"}",`);

  handleApplySuggestion(suggestion: string) `,"{",`
    this.feedbackForm.patchValue(`,"{"," message: suggestion ","}",`);
  `,"}",`
`,"}",`

<form [formGroup]="feedbackForm">
  <textarea formControlName="message"></textarea>
  <ui-ai-assist-widget
    [message]="feedbackForm.get('message')?.value || ''"
    (applySuggestion)="handleApplySuggestion($event)"
  />
</form>`))},dependencies:[F,k,_,v,w,C,D,P,M],styles:[".suggestion-applied[_ngcontent-%COMP%]{margin-top:16px;padding:16px;background:#e8f5e9;border-radius:4px;border-left:4px solid #4caf50}  .api-table{width:100%;border-collapse:collapse;margin:16px 0}  .api-table th,   .api-table td{text-align:left;padding:12px;border-bottom:1px solid rgba(0,0,0,.12)}  .api-table th{font-weight:500;background:#f5f5f5}  .api-table code{background:#0000000d;padding:2px 6px;border-radius:3px}pre[_ngcontent-%COMP%]{background:#f5f5f5;padding:16px;border-radius:4px;overflow-x:auto}h3[_ngcontent-%COMP%]{margin:16px 0;font-weight:500}"]})}}return a})();export{j as AIAssistDemoComponent};
