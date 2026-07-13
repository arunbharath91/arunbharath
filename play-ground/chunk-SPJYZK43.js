import{a as I}from"./chunk-V5C7FI6U.js";import{a as L}from"./chunk-PEEPRID2.js";import{b as z}from"./chunk-T4J2U4CP.js";import{Ta as g,Ua as E,Va as C,Wa as T,Xa as O}from"./chunk-NSESCRPY.js";import{c as D,e as F,f as R}from"./chunk-O4PMXQUQ.js";import"./chunk-MGXTA5CE.js";import"./chunk-WIRG7O55.js";import"./chunk-RZJWTSPA.js";import{Jb as h,Kb as f,Kc as k,Mb as w,Nb as v,Ob as y,Pb as l,Qb as t,Rb as e,Sb as d,bc as s,db as r,dc as _,ob as S,pb as P,pc as p,sc as i,tc as x,ub as M,ya as u}from"./chunk-NUUKVCZD.js";import"./chunk-FK6H3RFT.js";import"./chunk-CHV5ZX5K.js";import"./chunk-EU2KAMEK.js";import"./chunk-DAQOROHW.js";var B=[{title:"Basic Usage",description:"Simple editor with full toolbar (default)",code:`<ui-rich-editor
  label="Product Description"
  placeholder="Start typing..."
  helperText="Use the toolbar to format your text"
/>`},{title:"Toolbar Presets",description:"Use named presets to quickly configure the toolbar",code:`<!-- Full toolbar (all tools) -->
<ui-rich-editor [toolbar]="'full'" />

<!-- Basic toolbar (common formatting) -->
<ui-rich-editor [toolbar]="'basic'" />

<!-- Minimal toolbar (just essentials) -->
<ui-rich-editor [toolbar]="'minimal'" />

<!-- Document toolbar (long-form content) -->
<ui-rich-editor [toolbar]="'document'" />`},{title:"Custom Toolbar",description:"Define exactly which tools to show and in what groups",code:`// In your component:
readonly myToolbar: ToolbarDefinition = [
  ['bold', 'italic', 'underline'],    // Group 1: formatting
  ['heading'],                         // Group 2: headings dropdown
  ['bulletList', 'orderedList'],       // Group 3: lists
  ['link', 'image'],                   // Group 4: inserts
  ['textColor'],                       // Group 5: colors
  ['undo', 'redo'],                    // Group 6: history
];

// In template:
<ui-rich-editor [toolbar]="myToolbar" />`,language:"typescript"},{title:"Available Toolbar Items",description:"All toolbar items that can be used in custom configurations",code:`// Inline formatting
'bold' | 'italic' | 'underline' | 'strikethrough'
'superscript' | 'subscript'

// Block formatting
'heading'          // Dropdown: Normal / H1 / H2 / H3
'blockquote'       // Toggle block quote
'codeBlock'        // Toggle code block

// Lists & Indentation
'bulletList' | 'orderedList'
'indent' | 'outdent'

// Alignment
'alignLeft' | 'alignCenter' | 'alignRight' | 'alignJustify'

// Colors (opens popover with palette + custom picker)
'textColor' | 'highlight'

// Inserts
'link'             // Opens link popover
'image'            // Opens image popover
'table'            // Opens table grid picker
'horizontalRule'   // Inserts <hr>
'inlineCode'       // Wraps selection in <code>

// History
'undo' | 'redo'

// Utilities
'clearFormatting'  // Removes all formatting
'sourceView'       // Toggle HTML source view
'fullscreen'       // Toggle fullscreen mode`,language:"typescript"},{title:"Signal Form Integration",description:"Use [formField] for reactive form binding with validation",code:`// Component:
readonly formModel = signal({ description: '' });
readonly myForm = form(this.formModel, (schema) => {
  required(schema.description, { message: 'Required' });
});

// Template:
<ui-rich-editor
  label="Description"
  [toolbar]="'basic'"
  [formField]="myForm.description"
  placeholder="Enter description..."
/>`,language:"typescript"},{title:"Without Word Count",description:"Hide the word/character count footer",code:`<ui-rich-editor
  [toolbar]="'minimal'"
  [showWordCount]="false"
  placeholder="Clean minimal editor..."
  size="sm"
/>`},{title:"Resizable Editor",description:"The editor is resizable by default \u2014 drag the bottom-right corner to resize",code:`<ui-rich-editor
  label="Resizable Editor"
  size="md"
  placeholder="Drag the corner to resize..."
/>`}];var A=()=>["Rich Text","WYSIWYG","Signal Forms","HTML","contenteditable","Configurable Toolbar"],H=(n,m)=>m.title;function q(n,m){if(n&1&&(t(0,"span"),i(1),e()),n&2){let a=m.$implicit;r(),x(a.message)}}function W(n,m){if(n&1&&(t(0,"div",9),v(1,q,2,1,"span",null,w),e()),n&2){let a=_();r(),y(a.editorForm.description().errors())}}function G(n,m){if(n&1&&(t(0,"div",13)(1,"strong"),i(2,"Form value:"),e(),t(3,"code"),i(4),e()()),n&2){let a=_();r(4),x(a.editorForm.description().value())}}function N(n,m){if(n&1&&d(0,"playground-example-viewer",28),n&2){let a=m.$implicit;l("title",a.title)("description",a.description)("code",a.code)("language",a.language??"html")}}var te=(()=>{class n{constructor(){this.examples=B,this.presetFull=g,this.presetBasic=E,this.presetMinimal=C,this.presetDocument=T,this.customToolbar=[["bold","italic","underline"],["heading"],["bulletList","orderedList"],["link","image"],["textColor"],["undo","redo"]],this.activePreset=u("full"),this.activeToolbar=u(g),this.formModel=u({description:""}),this.editorForm=D(this.formModel,a=>{F(a.description,{message:"Description is required"})}),this.formSubmitted=u(!1),this.apiInputs=[{name:"value",type:"model<string>",default:"''",description:"Current HTML content. Two-way bindable via FormValueControl."},{name:"toolbar",type:"ToolbarDefinition",default:"'full'",description:"Toolbar config: preset name ('full' | 'basic' | 'minimal' | 'document') or custom ToolbarItem[][] array."},{name:"size",type:"'sm' | 'md' | 'lg'",default:"'md'",description:"Minimum height. sm=120px, md=200px, lg=320px."},{name:"label",type:"string",default:"''",description:"Label text above the editor."},{name:"placeholder",type:"string",default:"''",description:"Placeholder when content is empty."},{name:"disabled",type:"boolean",default:"false",description:"Disables editing entirely."},{name:"readonly",type:"boolean",default:"false",description:"Allows selection but prevents edits."},{name:"invalid",type:"boolean",default:"false",description:"Displays error border state."},{name:"errorMessage",type:"string",default:"''",description:"Error text below the editor."},{name:"helperText",type:"string",default:"''",description:"Helper text below the editor."},{name:"showWordCount",type:"boolean",default:"true",description:"Show word/character count footer."},{name:"touched",type:"model<boolean>",default:"false",description:"Whether user has blurred the editor."}],this.apiOutputs=[{name:"value",type:"model<string>",description:"Emits sanitized HTML on each change."},{name:"touched",type:"model<boolean>",description:"Emits true on first blur."}]}selectPreset(a){switch(this.activePreset.set(a),a){case"full":this.activeToolbar.set(g);break;case"basic":this.activeToolbar.set(E);break;case"minimal":this.activeToolbar.set(C);break;case"document":this.activeToolbar.set(T);break;case"custom":this.activeToolbar.set(this.customToolbar);break}}submitForm(){this.formSubmitted.set(!0),this.editorForm().valid()&&alert(`Form submitted with value:
`+this.editorForm.description().value())}resetForm(){this.formSubmitted.set(!1),this.formModel.set({description:""})}static{this.\u0275fac=function(b){return new(b||n)}}static{this.\u0275cmp=M({type:n,selectors:[["playground-rich-editor-demo"]],decls:79,vars:42,consts:[["title","Rich Editor","description","Enterprise-grade rich text editor with configurable toolbar, color pickers, table insertion, source view, fullscreen mode, and word count. Implements FormValueControl<string> for Signal Forms. Outputs clean, sanitized HTML.",3,"tags","apiReference","examples"],["demo","",1,"rich-editor-demo"],[1,"demo-section"],[1,"demo-section-label"],[1,"demo-section-desc"],[1,"demo-preset-buttons"],[1,"cmp-btn",3,"click"],["label","Interactive Editor","placeholder","Start typing your content...","helperText","Toolbar changes based on selected preset above",3,"toolbar"],["label","Description (required)","placeholder","Enter a product description...","helperText","This field is required for form submission",3,"toolbar","formField"],["role","alert",1,"demo-validation-error"],[1,"demo-form-actions"],[1,"cmp-btn","cmp-btn-primary",3,"click"],[1,"cmp-btn","cmp-btn-outline-secondary",3,"click"],[1,"demo-form-output"],[1,"demo-sizes"],[1,"demo-size-item"],[1,"demo-size-badge"],["size","sm","placeholder","Small size...",3,"toolbar"],["size","md","label","Medium (default)","placeholder","Medium size...",3,"toolbar"],["size","lg","label","Large Editor","placeholder","Large size...",3,"toolbar"],["placeholder","Type a comment...","size","sm",3,"toolbar","showWordCount"],["label","Disabled","placeholder","Cannot edit",3,"toolbar","disabled"],["label","Readonly","placeholder","Can select, can't edit",3,"toolbar","readonly"],["label","Error State","errorMessage","Content is required","placeholder","Shows error...",3,"toolbar","invalid"],["api",""],["title","Inputs",3,"properties"],["title","Outputs",3,"properties"],["examples",""],[3,"title","description","code","language"]],template:function(b,o){b&1&&(t(0,"playground-demo-page-template",0)(1,"div",1)(2,"section",2)(3,"p",3),i(4,"Toolbar Presets"),e(),t(5,"p",4),i(6," Switch between presets to see different toolbar configurations. You can also pass a custom "),t(7,"code"),i(8,"ToolbarItem[][]"),e(),i(9," array. "),e(),t(10,"div",5)(11,"button",6),s("click",function(){return o.selectPreset("full")}),i(12,"Full"),e(),t(13,"button",6),s("click",function(){return o.selectPreset("basic")}),i(14,"Basic"),e(),t(15,"button",6),s("click",function(){return o.selectPreset("minimal")}),i(16,"Minimal"),e(),t(17,"button",6),s("click",function(){return o.selectPreset("document")}),i(18,"Document"),e(),t(19,"button",6),s("click",function(){return o.selectPreset("custom")}),i(20,"Custom"),e()(),d(21,"ui-rich-editor",7),e(),t(22,"section",2)(23,"p",3),i(24,"Signal Form Binding"),e(),t(25,"p",4),i(26," Bound to a Signal Form with "),t(27,"code"),i(28,"[formField]"),e(),i(29," and a "),t(30,"code"),i(31,"required"),e(),i(32," validator. "),e(),d(33,"ui-rich-editor",8),S(),h(34,W,3,0,"div",9),t(35,"div",10)(36,"button",11),s("click",function(){return o.submitForm()}),i(37,"Submit"),e(),t(38,"button",12),s("click",function(){return o.resetForm()}),i(39,"Reset"),e()(),h(40,G,5,1,"div",13),e(),t(41,"section",2)(42,"p",3),i(43,"Size Variants"),e(),t(44,"div",14)(45,"div",15)(46,"span",16),i(47,"sm (120px)"),e(),d(48,"ui-rich-editor",17),e(),t(49,"div",15)(50,"span",16),i(51,"md (200px)"),e(),d(52,"ui-rich-editor",18),e(),t(53,"div",15)(54,"span",16),i(55,"lg (320px)"),e(),d(56,"ui-rich-editor",19),e()()(),t(57,"section",2)(58,"p",3),i(59,"Minimal Toolbar"),e(),t(60,"p",4),i(61,"Perfect for comments, chat inputs, or simple text fields."),e(),d(62,"ui-rich-editor",20),e(),t(63,"section",2)(64,"p",3),i(65,"States"),e(),t(66,"div",14)(67,"div",15),d(68,"ui-rich-editor",21),e(),t(69,"div",15),d(70,"ui-rich-editor",22),e(),t(71,"div",15),d(72,"ui-rich-editor",23),e()()()(),t(73,"div",24),d(74,"playground-api-table",25)(75,"playground-api-table",26),e(),t(76,"div",27),v(77,N,1,4,"playground-example-viewer",28,H),e()()),b&2&&(l("tags",k(41,A))("apiReference",!0)("examples",!0),r(11),p("cmp-btn-primary",o.activePreset()==="full")("cmp-btn-outline-secondary",o.activePreset()!=="full"),r(2),p("cmp-btn-primary",o.activePreset()==="basic")("cmp-btn-outline-secondary",o.activePreset()!=="basic"),r(2),p("cmp-btn-primary",o.activePreset()==="minimal")("cmp-btn-outline-secondary",o.activePreset()!=="minimal"),r(2),p("cmp-btn-primary",o.activePreset()==="document")("cmp-btn-outline-secondary",o.activePreset()!=="document"),r(2),p("cmp-btn-primary",o.activePreset()==="custom")("cmp-btn-outline-secondary",o.activePreset()!=="custom"),r(2),l("toolbar",o.activeToolbar()),r(12),l("toolbar","basic")("formField",o.editorForm.description),P(),r(),f(o.formSubmitted()&&o.editorForm.description().errors()?34:-1),r(6),f(o.formSubmitted()&&o.editorForm().valid()?40:-1),r(8),l("toolbar","minimal"),r(4),l("toolbar","minimal"),r(4),l("toolbar","basic"),r(6),l("toolbar","minimal")("showWordCount",!1),r(6),l("toolbar","minimal")("disabled",!0),r(2),l("toolbar","minimal")("readonly",!0),r(2),l("toolbar","minimal")("invalid",!0),r(2),l("properties",o.apiInputs),r(),l("properties",o.apiOutputs),r(2),y(o.examples))},dependencies:[z,I,L,O,R],styles:[".rich-editor-demo[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:32px}.demo-section[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px}.demo-section-label[_ngcontent-%COMP%]{font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:.06em;color:var(--cmp-text-muted, #888);margin:0}.demo-section-desc[_ngcontent-%COMP%]{font-size:14px;color:var(--cmp-text-secondary, #666);margin:0}.demo-section-desc[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:var(--cmp-code-bg, rgba(0, 0, 0, .06));padding:2px 6px;border-radius:3px;font-size:12px}.demo-preset-buttons[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:8px}.demo-sizes[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:20px}.demo-size-item[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:6px}.demo-size-badge[_ngcontent-%COMP%]{font-size:11px;font-weight:500;color:var(--cmp-primary, #6366f1);text-transform:uppercase;letter-spacing:.04em}.demo-validation-error[_ngcontent-%COMP%]{color:var(--cmp-danger, #ef4444);font-size:13px}.demo-form-actions[_ngcontent-%COMP%]{display:flex;gap:8px}.demo-form-output[_ngcontent-%COMP%]{padding:12px;background:var(--cmp-code-bg, #f5f5f5);border-radius:var(--cmp-radius, 4px);font-size:13px;overflow-x:auto}.demo-form-output[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{display:block;margin-top:6px;white-space:pre-wrap;word-break:break-all}"],changeDetection:0})}}return n})();export{te as RichEditorDemoComponent};
