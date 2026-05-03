import{a as V}from"./chunk-7G6ASC32.js";import{a as q}from"./chunk-N6NA3XCO.js";import{b as B}from"./chunk-G7ZIQJ6X.js";import{ta as _,ua as L,va as N}from"./chunk-OAN3UY7U.js";import"./chunk-Q6P3UIUZ.js";import"./chunk-V3AM2RAD.js";import"./chunk-H2UPXF7Z.js";import"./chunk-5LJC7C5H.js";import{r as z}from"./chunk-BQIXJMI7.js";import{$b as f,Ec as F,Gc as W,Hb as S,Ib as k,Ic as A,Jb as I,Lb as T,Mb as C,Nb as l,Ob as a,Oc as M,Pb as e,Pc as P,Qb as h,Xb as E,Zc as R,bc as y,cb as o,ma as w,na as x,oc as O,pc as i,qc as b,tb as D,xc as g,ya as s,yc as m,zc as u}from"./chunk-FEOD6RYX.js";import"./chunk-EU2KAMEK.js";import"./chunk-DAQOROHW.js";var U={basic:`import { Component, signal } from '@angular/core';
import { TagInputComponent } from '@arun-bharath-ui/cmp-ui';

@Component({
  standalone: true,
  imports: [TagInputComponent],
  template: \`
    <ui-tag-input
      label="Technologies"
      placeholder="Add a technology\u2026"
      helperText="Press Enter or , to add \xB7 Backspace to remove"
      [(value)]="tags"
    />
  \`,
})
export class BasicDemo {
  tags = signal<string[]>(['Angular', 'TypeScript']);
}`,signalForm:`import { Component, signal } from '@angular/core';
import { form, FormField, required } from '@angular/forms/signals';
import { TagInputComponent } from '@arun-bharath-ui/cmp-ui';

@Component({
  standalone: true,
  imports: [TagInputComponent, FormField],
  template: \`
    <ui-tag-input
      label="Skills (required)"
      placeholder="Add a skill\u2026"
      [formField]="myForm.skills"
      helperText="Required \u2014 add at least one skill"
    />

    <ui-tag-input
      label="Frameworks"
      placeholder="Search frameworks\u2026"
      [formField]="myForm.frameworks"
      [suggestions]="frameworkSuggestions"
    />
  \`,
})
export class SignalFormDemo {
  readonly frameworkSuggestions = ['Angular', 'React', 'Vue', 'Svelte', 'Solid'];

  formModel = signal({
    skills: [] as string[],
    frameworks: ['Angular'] as string[],
  });

  myForm = form(this.formModel, (schema) => {
    required(schema.skills, { message: 'At least one skill is required' });
  });
}`,suggestions:`<ui-tag-input
  label="Frameworks"
  placeholder="Search frameworks\u2026"
  [suggestions]="['Angular', 'React', 'Vue', 'Svelte', 'Solid', 'Qwik', 'Next.js', 'Nuxt']"
  [(value)]="selectedFrameworks"
  [showSuggestionsOnFocus]="true"
  helperText="Type to filter \xB7 \u2191\u2193 navigate \xB7 Enter select \xB7 Esc close"
/>`,colors:`<!-- All six color variants -->
<ui-tag-input label="Primary"   [tagColor]="'primary'"   [(value)]="t1" />
<ui-tag-input label="Secondary" [tagColor]="'secondary'" [(value)]="t2" />
<ui-tag-input label="Success"   [tagColor]="'success'"   [(value)]="t3" />
<ui-tag-input label="Warning"   [tagColor]="'warning'"   [(value)]="t4" />
<ui-tag-input label="Danger"    [tagColor]="'danger'"    [(value)]="t5" />
<ui-tag-input label="Info"      [tagColor]="'info'"      [(value)]="t6" />`,sizes:`<ui-tag-input [size]="'sm'" label="Small"          [(value)]="tags" />
<ui-tag-input [size]="'md'" label="Medium (default)" [(value)]="tags" />
<ui-tag-input [size]="'lg'" label="Large"            [(value)]="tags" />`,variants:`<ui-tag-input [variant]="'default'"  label="Default"  [(value)]="tags" />
<ui-tag-input [variant]="'outlined'" label="Outlined" [(value)]="tags" />
<ui-tag-input [variant]="'filled'"   label="Filled"   [(value)]="tags" />`,maxTags:`<!-- Hard cap at 3 tags -->
<ui-tag-input
  label="Max 3 Tags"
  [maxTags]="3"
  helperText="You can add up to 3 tags"
  [(value)]="tags"
/>`,validation:`import { Component, signal, computed } from '@angular/core';
import { TagInputComponent } from '@arun-bharath-ui/cmp-ui';

@Component({
  standalone: true,
  imports: [TagInputComponent],
  template: \`
    <ui-tag-input
      label="Required Tags"
      placeholder="Add at least one tag\u2026"
      [(value)]="tags"
      [errorMessage]="errorMessage()"
      helperText="This field is required"
      (valueChange)="touched.set(true)"
    />
    <button (click)="submit()">Submit</button>
  \`,
})
export class ValidationDemo {
  tags = signal<string[]>([]);
  touched = signal(false);

  errorMessage = computed(() => {
    if (this.touched() && this.tags().length === 0) {
      return 'At least one tag is required';
    }
    return '';
  });

  submit() {
    this.touched.set(true);
    if (this.tags().length > 0) {
      console.log('Valid!', this.tags());
    }
  }
}`,chipStandalone:`import { ChipComponent } from '@arun-bharath-ui/cmp-ui';

<!-- Use chips anywhere, independently of the tag input -->
<ui-chip label="Angular"    [color]="'primary'"   />
<ui-chip label="Removable"  [color]="'success'"   [removable]="true" (removed)="onRemove()" />
<ui-chip label="Disabled"   [color]="'secondary'" [disabled]="true" />
<ui-chip label="Large"      [color]="'info'"      [size]="'lg'" />`,events:`<ui-tag-input
  label="Event log"
  [(value)]="tags"
  (tagAdded)="onAdded($event)"
  (tagRemoved)="onRemoved($event)"
  (inputChange)="onInput($event)"
/>

// In component class
onAdded(tag: string) {
  console.log('Tag added:', tag);
}

onRemoved(tag: string) {
  console.log('Tag removed:', tag);
}

onInput(value: string) {
  console.log('Input changed:', value);
}`,disabled:`<!-- Fully disabled -->
<ui-tag-input label="Disabled" [disabled]="true" [(value)]="tags" />

<!-- Read-only \u2014 shows tags, no editing -->
<ui-tag-input label="Readonly" [readonly]="true" [(value)]="tags" />`,customChipTemplate:`import { Component, signal } from '@angular/core';
import { TagInputComponent, ChipTemplateContext, ITag } from '@arun-bharath-ui/cmp-ui';

@Component({
  standalone: true,
  imports: [TagInputComponent],
  template: \`
    <ui-tag-input
      label="Custom Chip Rendering"
      placeholder="Add tags\u2026"
      [(value)]="tags"
    >
      <!-- Custom chip template -->
      <ng-template 
        #chipTemplate 
        let-tag="tag" 
        let-index="index" 
        let-remove="remove" 
        let-active="active"
      >
        <div class="custom-chip" [class.active]="active">
          <span class="chip-icon">\u{1F3F7}\uFE0F</span>
          <span class="chip-label">{{ tag.label }}</span>
          <span class="chip-index">#{{ index + 1 }}</span>
          <button 
            class="chip-remove" 
            (click)="remove()" 
            [attr.aria-label]="'Remove ' + tag.label"
          >
            \xD7
          </button>
        </div>
      </ng-template>
    </ui-tag-input>
  \`,
  styles: [\`
    .custom-chip {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 6px 12px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border-radius: 20px;
      font-size: 14px;
      transition: all 0.2s;
    }
    .custom-chip.active {
      box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.3);
    }
    .chip-icon { font-size: 16px; }
    .chip-index {
      font-size: 11px;
      opacity: 0.8;
      font-weight: 600;
    }
    .chip-remove {
      background: rgba(255,255,255,0.2);
      border: none;
      color: white;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      cursor: pointer;
      font-size: 16px;
      line-height: 1;
      transition: background 0.2s;
    }
    .chip-remove:hover {
      background: rgba(255,255,255,0.3);
    }
  \`]
})
export class CustomChipDemo {
  tags = signal<string[]>(['Angular', 'TypeScript', 'RxJS']);
}`,customSuggestionTemplate:`import { Component, signal } from '@angular/core';
import { TagInputComponent, SuggestionTemplateContext } from '@arun-bharath-ui/cmp-ui';

interface FrameworkInfo {
  name: string;
  icon: string;
  description: string;
  popularity: string;
}

@Component({
  standalone: true,
  imports: [TagInputComponent],
  template: \`
    <ui-tag-input
      label="Framework Selection"
      placeholder="Search frameworks\u2026"
      [suggestions]="frameworkNames"
      [(value)]="selectedFrameworks"
    >
      <!-- Custom suggestion template -->
      <ng-template 
        #suggestionTemplate 
        let-suggestion="suggestion" 
        let-active="active" 
        let-index="index"
      >
        <div class="custom-suggestion" [class.active]="active">
          <span class="suggestion-icon">{{ getFrameworkInfo(suggestion).icon }}</span>
          <div class="suggestion-content">
            <div class="suggestion-name">{{ suggestion }}</div>
            <div class="suggestion-meta">{{ getFrameworkInfo(suggestion).description }}</div>
          </div>
          <span class="suggestion-badge">{{ getFrameworkInfo(suggestion).popularity }}</span>
        </div>
      </ng-template>
    </ui-tag-input>
  \`,
  styles: [\`
    .custom-suggestion {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px 16px;
      transition: all 0.15s;
    }
    .custom-suggestion.active {
      background: linear-gradient(90deg, #f0f4ff 0%, #e0e7ff 100%);
    }
    .suggestion-icon {
      font-size: 24px;
      flex-shrink: 0;
    }
    .suggestion-content {
      flex: 1;
    }
    .suggestion-name {
      font-weight: 600;
      color: #1e293b;
    }
    .suggestion-meta {
      font-size: 12px;
      color: #64748b;
      margin-top: 2px;
    }
    .suggestion-badge {
      font-size: 11px;
      padding: 2px 8px;
      background: #dbeafe;
      color: #1e40af;
      border-radius: 12px;
      font-weight: 600;
    }
  \`]
})
export class CustomSuggestionDemo {
  frameworksData: FrameworkInfo[] = [
    { name: 'Angular', icon: '\u{1F170}\uFE0F', description: 'Full-featured framework by Google', popularity: 'Popular' },
    { name: 'React', icon: '\u269B\uFE0F', description: 'UI library by Meta', popularity: 'Most Used' },
    { name: 'Vue', icon: '\u{1F49A}', description: 'Progressive framework', popularity: 'Popular' },
    { name: 'Svelte', icon: '\u{1F525}', description: 'Compile-time framework', popularity: 'Growing' },
    { name: 'Solid', icon: '\u{1F48E}', description: 'Fine-grained reactivity', popularity: 'Emerging' },
  ];

  frameworkNames = this.frameworksData.map(f => f.name);
  selectedFrameworks = signal<string[]>([]);

  getFrameworkInfo(name: string): FrameworkInfo {
    return this.frameworksData.find(f => f.name === name) || this.frameworksData[0];
  }
}`};var j=()=>["Forms","Input","Signals","Interactive"],G=(d,c)=>({skills:d,frameworks:c}),Y=(d,c)=>c.color,H=(d,c)=>c.label;function J(d,c){if(d&1){let r=E();a(0,"ui-tag-input",63),f("valueChange",function(t){let p=w(r).$implicit,n=y();return x(n.setColorTags(p.color,t))}),e()}if(d&2){let r=c.$implicit,v=y();l("label",r.label)("tagColor",r.color)("value",v.getColorTags(r.color))}}function K(d,c){if(d&1){let r=E();a(0,"button",64),f("click",function(){w(r);let t=y();return x(t.clearLog())}),i(1,"Clear"),e()}}function Q(d,c){d&1&&(a(0,"p",30),i(1,"No events yet \u2014 interact with the input above."),e())}function X(d,c){if(d&1&&(a(0,"li")(1,"span",66),i(2),e(),a(3,"span",67),i(4),e(),a(5,"span",68),i(6),e()()),d&2){let r=c.$implicit;O(F("event-log__item event-log__item--",r.type)),o(2),b(r.type),o(2),b(r.payload),o(2),b(r.time)}}function Z(d,c){if(d&1&&(a(0,"ul",31),T(1,X,7,6,"li",65,I),e()),d&2){let r=y();o(),C(r.recentEvents())}}function $(d,c){if(d&1&&h(0,"ui-chip",36),d&2){let r=c.$implicit;l("label",r.label)("color",r.color)("removable",r.removable)("disabled",r.disabled)}}var ge=(()=>{class d{constructor(){this.snippets=U,this.basicTags=s(["Angular","TypeScript","Signals"]),this.skillsTags=s(["RxJS"]),this.frameworksTags=s(["Angular"]),this.frameworkSuggestions=["Angular","React","Vue","Svelte","Solid","Qwik","Next.js","Nuxt","Remix","Astro"],this.skillsTouched=s(!1),this.suggestionTags=s([]),this.colorRows=[{label:"Primary",color:_.PRIMARY},{label:"Secondary",color:_.SECONDARY},{label:"Success",color:_.SUCCESS},{label:"Warning",color:_.WARNING},{label:"Danger",color:_.DANGER},{label:"Info",color:_.INFO}],this.colorTags={primary:s(["Primary"]),secondary:s(["Secondary"]),success:s(["Success"]),warning:s(["Warning"]),danger:s(["Danger"]),info:s(["Info"])},this.smTags=s(["Small"]),this.mdTags=s(["Medium"]),this.lgTags=s(["Large"]),this.defaultTags=s(["Default"]),this.outlinedTags=s(["Outlined"]),this.filledTags=s(["Filled"]),this.maxTags=s([]),this.validationTags=s([]),this.validationTouched=s(!1),this.eventTags=s(["Watch me"]),this.eventLog=s([]),this.recentEvents=R(()=>this.eventLog().slice(-5).reverse()),this.chipRows=[{label:"Primary",color:"primary",removable:!1,disabled:!1},{label:"Secondary",color:"secondary",removable:!1,disabled:!1},{label:"Success",color:"success",removable:!1,disabled:!1},{label:"Warning",color:"warning",removable:!1,disabled:!1},{label:"Danger",color:"danger",removable:!1,disabled:!1},{label:"Info",color:"info",removable:!1,disabled:!1},{label:"Removable",color:"primary",removable:!0,disabled:!1},{label:"Disabled",color:"secondary",removable:!1,disabled:!0}],this.disabledTags=s(["Cannot","Edit","This"]),this.readonlyTags=s(["Read","Only","Mode"]),this.inputProps=[{name:"value",type:"model<string[]>",default:"[]",description:"Two-way bindable tag list using [(value)]. Implements FormValueControl."},{name:"placeholder",type:"string",default:"'Add tag\u2026'",description:"Placeholder shown when the field is empty."},{name:"label",type:"string",default:"''",description:"Accessible label rendered above the container."},{name:"helperText",type:"string",default:"''",description:"Hint text shown below the container."},{name:"errorMessage",type:"string",default:"''",description:"When non-empty the field is styled as invalid and this message is shown."},{name:"disabled",type:"boolean",default:"false",description:"Disables all interaction."},{name:"readonly",type:"boolean",default:"false",description:"Shows tags but prevents adding or removing."},{name:"maxTags",type:"number",default:"0",description:"Maximum number of tags (0 = unlimited)."},{name:"minLength",type:"number",default:"1",description:"Minimum character length for a tag to be accepted."},{name:"maxLength",type:"number",default:"50",description:"Maximum character length for a tag."},{name:"separatorKeys",type:"string[]",default:"['Enter', ',']",description:"Keys that commit the current input as a new tag."},{name:"allowDuplicates",type:"boolean",default:"false",description:"When false, duplicate labels are silently rejected."},{name:"tagColor",type:"TagColor",default:"'primary'",description:"Color applied to every tag created by this input."},{name:"tagsRemovable",type:"boolean",default:"true",description:"Whether newly created tags show a remove button."},{name:"size",type:"TagInputSize",default:"'md'",description:"Visual size: 'sm' | 'md' | 'lg'."},{name:"variant",type:"TagInputVariant",default:"'default'",description:"Container style: 'default' | 'outlined' | 'filled'."},{name:"suggestions",type:"string[]",default:"[]",description:"String list used to populate the autocomplete dropdown."},{name:"showSuggestionsOnFocus",type:"boolean",default:"false",description:"When true, autocomplete opens on click/focus."}],this.outputProps=[{name:"valueChange",type:"OutputEmitterRef<string[]>",description:"Fires when the tag list changes (use with [(value)] for two-way binding)."},{name:"tagAdded",type:"OutputEmitterRef<string>",description:"Fires after a tag is successfully added."},{name:"tagRemoved",type:"OutputEmitterRef<string>",description:"Fires after a tag is removed."},{name:"inputChange",type:"OutputEmitterRef<string>",description:"Fires on every keystroke inside the text field."}],this.chipInputProps=[{name:"label",type:"string (required)",default:"\u2014",description:"Text displayed inside the chip."},{name:"color",type:"TagColor",default:"'primary'",description:"Color variant: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info'."},{name:"size",type:"TagInputSize",default:"'md'",description:"Size: 'sm' | 'md' | 'lg'."},{name:"removable",type:"boolean",default:"true",description:"Whether the remove (\xD7) button is shown."},{name:"active",type:"boolean",default:"false",description:"Highlights the chip with a focus ring (used by tag-input internally)."},{name:"disabled",type:"boolean",default:"false",description:"Dims the chip and disables interaction."}],this.chipOutputProps=[{name:"removed",type:"OutputEmitterRef<void>",description:"Emitted when the remove button is clicked."}]}get skillsError(){return this.skillsTags().length===0&&this.skillsTouched()?"At least one skill is required":""}getColorTags(r){return this.colorTags[r]()}setColorTags(r,v){this.colorTags[r].set(v)}get validationError(){return this.validationTags().length===0&&this.validationTouched()?"At least one tag is required":""}submitValidationForm(){this.validationTouched.set(!0)}onTagAdded(r){this._log("added",`"${r}"`)}onTagRemoved(r){this._log("removed",`"${r}"`)}onInputChange(r){r&&this._log("input",`"${r}"`)}_log(r,v){let t=new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",second:"2-digit"});this.eventLog.update(p=>[...p,{type:r,payload:v,time:t}])}clearLog(){this.eventLog.set([])}static{this.\u0275fac=function(v){return new(v||d)}}static{this.\u0275cmp=D({type:d,selectors:[["playground-tag-input-demo"]],decls:217,vars:57,consts:[["title","Tag Input","description","Signal-based tag input with signal forms support, autocomplete, keyboard navigation, and a standalone Chip component.",3,"tags","apiReference","examples"],["demo",""],[1,"demo-section"],[1,"demo-section__header"],[1,"demo-section__title"],[1,"demo-section__badge"],[1,"demo-section__desc"],["label","Technologies","placeholder","Add a technology\u2026","helperText","Press Enter or , to add \xB7 Backspace to remove",3,"valueChange","value"],[1,"demo-output"],[1,"demo-form"],["label","Skills (required)","placeholder","Add a skill\u2026","helperText","Required \u2014 add at least one skill, then click outside",3,"valueChange","value","errorMessage"],["label","Frameworks","placeholder","Search frameworks\u2026","helperText","Type to see autocomplete suggestions",3,"valueChange","value","suggestions"],["label","Frameworks","placeholder","Search frameworks\u2026","helperText","Type to filter \xB7 \u2191\u2193 navigate \xB7 Enter select \xB7 Esc close",3,"valueChange","suggestions","value","showSuggestionsOnFocus"],[1,"demo-color-grid"],[3,"label","tagColor","value"],[1,"demo-stack"],["size","sm","label","Small (sm)",3,"valueChange","value"],["size","md","label","Medium (md) \u2014 default",3,"valueChange","value"],["size","lg","label","Large (lg)",3,"valueChange","value"],["variant","default","label","Default",3,"valueChange","value"],["variant","outlined","label","Outlined",3,"valueChange","value"],["variant","filled","label","Filled",3,"valueChange","value"],["label","Max 3 Tags","helperText","You can add up to 3 tags",3,"valueChange","maxTags","value"],["label","Required Tags","placeholder","Add at least one tag\u2026","helperText","This field is required",3,"valueChange","value","errorMessage"],["type","button",1,"demo-btn",3,"click"],["label","Interact with me","placeholder","Add a tag\u2026",3,"valueChange","tagAdded","tagRemoved","inputChange","suggestions","value"],[1,"event-log"],[1,"event-log__header"],[1,"event-log__title"],["type","button",1,"event-log__clear"],[1,"event-log__empty"],[1,"event-log__list"],[1,"chip-showcase"],[1,"chip-showcase__row"],[1,"chip-showcase__label"],[1,"chip-showcase__chips"],[3,"label","color","removable","disabled"],["label","Small","color","primary","size","sm"],["label","Medium","color","primary","size","md"],["label","Large","color","primary","size","lg"],["label","Default","color","primary"],["label","Active","color","primary",3,"active"],["label","Removable","color","success",3,"removable"],["label","Disabled","color","secondary",3,"disabled"],["label","Disabled \u2014 no interaction at all",3,"valueChange","disabled","value"],["label","Readonly \u2014 tags visible, no editing",3,"valueChange","readonly","value"],["api",""],[1,"api-heading"],["title","Inputs",3,"properties"],["title","Outputs",3,"properties"],[1,"api-heading",2,"margin-top","40px"],["examples",""],["title","Basic Usage","description","Use [formField] with signal forms for reactive tag management.",3,"code"],["title","Signal Forms with Validation","description","Full signal form integration with validators and error messages.",3,"code"],["title","Autocomplete Suggestions","description","Pass a string[] to [suggestions] for a filterable dropdown. Already-added tags are excluded.","language","html",3,"code"],["title","Tag Colors","description","Six semantic color variants driven by design-system tokens.","language","html",3,"code"],["title","Sizes","description","Three sizes: sm, md (default), lg. Size also propagates to the chips inside.","language","html",3,"code"],["title","Variants","description","Three container styles: default, outlined, and filled.","language","html",3,"code"],["title","Max Tags","description","Hard cap on the number of tags. The input hides and a notice appears once the limit is reached.","language","html",3,"code"],["title","Form Validation","description","Combine [errorMessage] with signal form validators for full validation support.","language","html",3,"code"],["title","Event Outputs","description","Listen to (tagAdded), (tagRemoved), and (inputChange) for fine-grained control.","language","html",3,"code"],["title","Chip \u2014 Standalone","description","ui-chip is independent of ui-tag-input and can be used anywhere in your app.","language","html",3,"code"],["title","Disabled & Readonly","description","Disable all interaction or make the field read-only while still displaying tags.","language","html",3,"code"],[3,"valueChange","label","tagColor","value"],["type","button",1,"event-log__clear",3,"click"],[3,"class"],[1,"event-log__badge"],[1,"event-log__payload"],[1,"event-log__time"]],template:function(v,t){v&1&&(a(0,"playground-demo-page-template",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h3",4),i(5,"Basic Usage"),e(),a(6,"span",5),i(7,"[formField]"),e()(),a(8,"p",6),i(9," Use "),a(10,"code"),i(11,"[formField]"),e(),i(12," with signal forms. Press "),a(13,"kbd"),i(14,"Enter"),e(),i(15," or "),a(16,"kbd"),i(17,","),e(),i(18," to add a tag. "),a(19,"kbd"),i(20,"Backspace"),e(),i(21," on an empty field highlights then removes the last chip. "),e(),a(22,"ui-tag-input",7),u("valueChange",function(n){return m(t.basicTags,n)||(t.basicTags=n),n}),e(),a(23,"pre",8),i(24),M(25,"json"),e()(),a(26,"div",2)(27,"div",3)(28,"h3",4),i(29,"Signal Forms with Validation"),e(),a(30,"span",5),i(31,"[formField]"),e()(),a(32,"p",6),i(33," Signal-based two-way binding with "),a(34,"code"),i(35,"[(value)]"),e(),i(36,". Validation and error handling with signals. "),e(),a(37,"div",9)(38,"ui-tag-input",10),u("valueChange",function(n){return m(t.skillsTags,n)||(t.skillsTags=n),n}),f("valueChange",function(){return t.skillsTouched.set(!0)}),e(),a(39,"ui-tag-input",11),u("valueChange",function(n){return m(t.frameworksTags,n)||(t.frameworksTags=n),n}),e()(),a(40,"pre",8),i(41),M(42,"json"),e()(),a(43,"div",2)(44,"div",3)(45,"h3",4),i(46,"Autocomplete Suggestions"),e(),a(47,"span",5),i(48,"[suggestions]"),e()(),a(49,"p",6),i(50," Pass a "),a(51,"code"),i(52,"string[]"),e(),i(53," to "),a(54,"code"),i(55,"[suggestions]"),e(),i(56,". The list filters as you type. Navigate with "),a(57,"kbd"),i(58,"\u2191"),e(),a(59,"kbd"),i(60,"\u2193"),e(),i(61,", confirm with "),a(62,"kbd"),i(63,"Enter"),e(),i(64,", dismiss with "),a(65,"kbd"),i(66,"Esc"),e(),i(67,". Already-added tags are excluded automatically. "),e(),a(68,"ui-tag-input",12),u("valueChange",function(n){return m(t.suggestionTags,n)||(t.suggestionTags=n),n}),e()(),a(69,"div",2)(70,"div",3)(71,"h3",4),i(72,"Tag Colors"),e(),a(73,"span",5),i(74,"[tagColor]"),e()(),a(75,"p",6),i(76," Six semantic colors map to the design-system tokens. Each new tag inherits the "),a(77,"code"),i(78,"tagColor"),e(),i(79," set on the input. "),e(),a(80,"div",13),T(81,J,1,3,"ui-tag-input",14,Y),e()(),a(83,"div",2)(84,"div",3)(85,"h3",4),i(86,"Sizes"),e(),a(87,"span",5),i(88,"[size]"),e()(),a(89,"div",15)(90,"ui-tag-input",16),u("valueChange",function(n){return m(t.smTags,n)||(t.smTags=n),n}),e(),a(91,"ui-tag-input",17),u("valueChange",function(n){return m(t.mdTags,n)||(t.mdTags=n),n}),e(),a(92,"ui-tag-input",18),u("valueChange",function(n){return m(t.lgTags,n)||(t.lgTags=n),n}),e()()(),a(93,"div",2)(94,"div",3)(95,"h3",4),i(96,"Variants"),e(),a(97,"span",5),i(98,"[variant]"),e()(),a(99,"div",15)(100,"ui-tag-input",19),u("valueChange",function(n){return m(t.defaultTags,n)||(t.defaultTags=n),n}),e(),a(101,"ui-tag-input",20),u("valueChange",function(n){return m(t.outlinedTags,n)||(t.outlinedTags=n),n}),e(),a(102,"ui-tag-input",21),u("valueChange",function(n){return m(t.filledTags,n)||(t.filledTags=n),n}),e()()(),a(103,"div",2)(104,"div",3)(105,"h3",4),i(106,"Max Tags"),e(),a(107,"span",5),i(108,"[maxTags]"),e()(),a(109,"p",6),i(110," The text input disappears once the limit is reached and a notice is shown instead. "),e(),a(111,"ui-tag-input",22),u("valueChange",function(n){return m(t.maxTags,n)||(t.maxTags=n),n}),e()(),a(112,"div",2)(113,"div",3)(114,"h3",4),i(115,"Form Validation"),e(),a(116,"span",5),i(117,"[errorMessage]"),e()(),a(118,"p",6),i(119," Pass any string to "),a(120,"code"),i(121,"[errorMessage]"),e(),i(122," to put the field into an error state. Combine with signal form validators for full validation support. "),e(),a(123,"div",9)(124,"ui-tag-input",23),u("valueChange",function(n){return m(t.validationTags,n)||(t.validationTags=n),n}),f("valueChange",function(){return t.validationTouched.set(!0)}),e(),a(125,"button",24),f("click",function(){return t.submitValidationForm()}),i(126,"Submit form"),e()()(),a(127,"div",2)(128,"div",3)(129,"h3",4),i(130,"Event Log"),e(),a(131,"span",5),i(132,"Outputs"),e()(),a(133,"p",6)(134,"code"),i(135,"(tagAdded)"),e(),i(136,", "),a(137,"code"),i(138,"(tagRemoved)"),e(),i(139,", and "),a(140,"code"),i(141,"(inputChange)"),e(),i(142," fire in real time. Add or remove tags below to see the log update. "),e(),a(143,"ui-tag-input",25),u("valueChange",function(n){return m(t.eventTags,n)||(t.eventTags=n),n}),f("tagAdded",function(n){return t.onTagAdded(n)})("tagRemoved",function(n){return t.onTagRemoved(n)})("inputChange",function(n){return t.onInputChange(n)}),e(),a(144,"div",26)(145,"div",27)(146,"span",28),i(147,"Events"),e(),S(148,K,2,0,"button",29),e(),S(149,Q,2,0,"p",30)(150,Z,3,0,"ul",31),e()(),a(151,"div",2)(152,"div",3)(153,"h3",4),i(154,"Chip \u2014 Standalone"),e(),a(155,"span",5),i(156,"ui-chip"),e()(),a(157,"p",6)(158,"code"),i(159,"ui-chip"),e(),i(160," is a fully independent component \u2014 use it anywhere without a tag input. All six colors, three sizes, removable and disabled states. "),e(),a(161,"div",32)(162,"div",33)(163,"span",34),i(164,"Colors"),e(),a(165,"div",35),T(166,$,1,4,"ui-chip",36,H),e()(),a(168,"div",33)(169,"span",34),i(170,"Sizes"),e(),a(171,"div",35),h(172,"ui-chip",37)(173,"ui-chip",38)(174,"ui-chip",39),e()(),a(175,"div",33)(176,"span",34),i(177,"States"),e(),a(178,"div",35),h(179,"ui-chip",40)(180,"ui-chip",41)(181,"ui-chip",42)(182,"ui-chip",43),e()()()(),a(183,"div",2)(184,"div",3)(185,"h3",4),i(186,"Disabled & Readonly"),e(),a(187,"span",5),i(188,"[disabled] [readonly]"),e()(),a(189,"div",15)(190,"ui-tag-input",44),u("valueChange",function(n){return m(t.disabledTags,n)||(t.disabledTags=n),n}),e(),a(191,"ui-tag-input",45),u("valueChange",function(n){return m(t.readonlyTags,n)||(t.readonlyTags=n),n}),e()()()(),a(192,"div",46)(193,"h2",47),i(194,"TagInputComponent "),a(195,"code"),i(196,"ui-tag-input"),e()(),h(197,"playground-api-table",48)(198,"playground-api-table",49),a(199,"h2",50),i(200,"ChipComponent "),a(201,"code"),i(202,"ui-chip"),e()(),h(203,"playground-api-table",48)(204,"playground-api-table",49),e(),a(205,"div",51),h(206,"playground-example-viewer",52)(207,"playground-example-viewer",53)(208,"playground-example-viewer",54)(209,"playground-example-viewer",55)(210,"playground-example-viewer",56)(211,"playground-example-viewer",57)(212,"playground-example-viewer",58)(213,"playground-example-viewer",59)(214,"playground-example-viewer",60)(215,"playground-example-viewer",61)(216,"playground-example-viewer",62),e()()),v&2&&(l("tags",W(53,j))("apiReference",!0)("examples",!0),o(22),g("value",t.basicTags),o(2),b(P(25,49,t.basicTags())),o(14),g("value",t.skillsTags),l("errorMessage",t.skillsError),o(),g("value",t.frameworksTags),l("suggestions",t.frameworkSuggestions),o(2),b(P(42,51,A(54,G,t.skillsTags(),t.frameworksTags()))),o(27),l("suggestions",t.frameworkSuggestions),g("value",t.suggestionTags),l("showSuggestionsOnFocus",!0),o(13),C(t.colorRows),o(9),g("value",t.smTags),o(),g("value",t.mdTags),o(),g("value",t.lgTags),o(8),g("value",t.defaultTags),o(),g("value",t.outlinedTags),o(),g("value",t.filledTags),o(9),l("maxTags",3),g("value",t.maxTags),o(13),g("value",t.validationTags),l("errorMessage",t.validationError),o(19),l("suggestions",t.frameworkSuggestions),g("value",t.eventTags),o(5),k(t.recentEvents().length>0?148:-1),o(),k(t.recentEvents().length===0?149:150),o(17),C(t.chipRows),o(14),l("active",!0),o(),l("removable",!0),o(),l("disabled",!0),o(8),l("disabled",!0),g("value",t.disabledTags),o(),l("readonly",!0),g("value",t.readonlyTags),o(6),l("properties",t.inputProps),o(),l("properties",t.outputProps),o(5),l("properties",t.chipInputProps),o(),l("properties",t.chipOutputProps),o(2),l("code",t.snippets.basic),o(),l("code",t.snippets.signalForm),o(),l("code",t.snippets.suggestions),o(),l("code",t.snippets.colors),o(),l("code",t.snippets.sizes),o(),l("code",t.snippets.variants),o(),l("code",t.snippets.maxTags),o(),l("code",t.snippets.validation),o(),l("code",t.snippets.events),o(),l("code",t.snippets.chipStandalone),o(),l("code",t.snippets.disabled))},dependencies:[B,V,q,N,L,z],styles:[".demo-section[_ngcontent-%COMP%]{margin-bottom:var(--cmp-spacing-8);padding:var(--cmp-spacing-6);background:var(--cmp-white);border:1px solid var(--cmp-border-light);border-radius:var(--cmp-radius-lg)}.demo-section__header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;margin-bottom:var(--cmp-spacing-2)}.demo-section__title[_ngcontent-%COMP%]{font-size:var(--cmp-font-lg);font-weight:var(--cmp-font-semibold);color:var(--cmp-gray-900);margin:0}.demo-section__badge[_ngcontent-%COMP%]{display:inline-flex;align-items:center;padding:2px 8px;background:var(--cmp-primary-soft);color:var(--cmp-primary);border-radius:var(--cmp-radius-full);font-size:var(--cmp-font-xs);font-weight:var(--cmp-font-medium);font-family:monospace;white-space:nowrap}.demo-section__desc[_ngcontent-%COMP%]{font-size:var(--cmp-font-sm);color:var(--cmp-gray-600);margin:0 0 var(--cmp-spacing-4);line-height:1.6}.demo-section__desc[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{padding:1px 5px;background:var(--cmp-gray-100);border-radius:var(--cmp-radius-sm);font-size:.85em;color:var(--cmp-primary)}.demo-section__desc[_ngcontent-%COMP%]   kbd[_ngcontent-%COMP%]{display:inline-block;padding:1px 6px;background:var(--cmp-gray-100);border:1px solid var(--cmp-gray-300);border-radius:var(--cmp-radius-sm);font-size:.8em;font-family:monospace;color:var(--cmp-gray-700);box-shadow:0 1px 0 var(--cmp-gray-300)}.demo-stack[_ngcontent-%COMP%], .demo-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:var(--cmp-spacing-4)}.demo-color-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:var(--cmp-spacing-4)}.demo-output[_ngcontent-%COMP%]{margin-top:var(--cmp-spacing-4);padding:var(--cmp-spacing-3) var(--cmp-spacing-4);background:var(--cmp-gray-50);border:1px solid var(--cmp-gray-200);border-radius:var(--cmp-radius-md);font-size:var(--cmp-font-xs);font-family:monospace;color:var(--cmp-gray-700);white-space:pre-wrap;word-break:break-all;max-height:160px;overflow-y:auto;scrollbar-width:thin;scrollbar-color:var(--cmp-gray-300) transparent}.demo-btn[_ngcontent-%COMP%]{align-self:flex-start;padding:8px 20px;background:var(--cmp-primary);color:var(--cmp-white);border:none;border-radius:var(--cmp-radius);font-size:var(--cmp-font-sm);font-weight:var(--cmp-font-medium);cursor:pointer;transition:background .15s ease}.demo-btn[_ngcontent-%COMP%]:hover{background:var(--cmp-primary-hover)}.event-log[_ngcontent-%COMP%]{margin-top:var(--cmp-spacing-4);border:1px solid var(--cmp-gray-200);border-radius:var(--cmp-radius-md);overflow:hidden}.event-log__header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:8px 14px;background:var(--cmp-gray-50);border-bottom:1px solid var(--cmp-gray-200)}.event-log__title[_ngcontent-%COMP%]{font-size:var(--cmp-font-xs);font-weight:var(--cmp-font-semibold);color:var(--cmp-gray-600);text-transform:uppercase;letter-spacing:.05em}.event-log__clear[_ngcontent-%COMP%]{font-size:var(--cmp-font-xs);color:var(--cmp-gray-500);background:none;border:none;cursor:pointer;padding:2px 6px;border-radius:var(--cmp-radius-sm);transition:color .15s,background .15s}.event-log__clear[_ngcontent-%COMP%]:hover{color:var(--cmp-danger);background:var(--cmp-danger-soft)}.event-log__empty[_ngcontent-%COMP%]{padding:16px 14px;font-size:var(--cmp-font-sm);color:var(--cmp-gray-400);font-style:italic;margin:0}.event-log__list[_ngcontent-%COMP%]{list-style:none;margin:0;padding:0}.event-log__item[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;padding:8px 14px;font-size:var(--cmp-font-xs);border-bottom:1px solid var(--cmp-gray-100);animation:_ngcontent-%COMP%_log-slide-in .15s ease-out both}.event-log__item[_ngcontent-%COMP%]:last-child{border-bottom:none}.event-log__item--added[_ngcontent-%COMP%]   .event-log__badge[_ngcontent-%COMP%]{background:var(--cmp-success-soft);color:var(--cmp-success)}.event-log__item--removed[_ngcontent-%COMP%]   .event-log__badge[_ngcontent-%COMP%]{background:var(--cmp-danger-soft);color:var(--cmp-danger)}.event-log__item--input[_ngcontent-%COMP%]   .event-log__badge[_ngcontent-%COMP%]{background:var(--cmp-info-soft);color:var(--cmp-info)}.event-log__badge[_ngcontent-%COMP%]{display:inline-block;padding:1px 7px;border-radius:var(--cmp-radius-full);font-size:10px;font-weight:var(--cmp-font-semibold);text-transform:uppercase;letter-spacing:.04em;flex-shrink:0}.event-log__payload[_ngcontent-%COMP%]{flex:1;color:var(--cmp-gray-800);font-family:monospace}.event-log__time[_ngcontent-%COMP%]{color:var(--cmp-gray-400);font-size:10px;flex-shrink:0}@keyframes _ngcontent-%COMP%_log-slide-in{0%{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:translateY(0)}}.chip-showcase[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:var(--cmp-spacing-4)}.chip-showcase__row[_ngcontent-%COMP%]{display:flex;align-items:center;gap:var(--cmp-spacing-4);flex-wrap:wrap}.chip-showcase__label[_ngcontent-%COMP%]{font-size:var(--cmp-font-xs);font-weight:var(--cmp-font-semibold);color:var(--cmp-gray-500);text-transform:uppercase;letter-spacing:.05em;min-width:64px;flex-shrink:0}.chip-showcase__chips[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:8px;align-items:center}.api-heading[_ngcontent-%COMP%]{font-size:var(--cmp-font-xl);font-weight:var(--cmp-font-semibold);color:var(--cmp-gray-900);margin:0 0 var(--cmp-spacing-4)}.api-heading[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{font-size:.75em;padding:2px 8px;background:var(--cmp-primary-soft);color:var(--cmp-primary);border-radius:var(--cmp-radius-sm);font-weight:var(--cmp-font-normal);margin-left:8px}@media(max-width:768px){.demo-section[_ngcontent-%COMP%]{padding:var(--cmp-spacing-4);margin-bottom:var(--cmp-spacing-6)}.demo-color-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}.chip-showcase__row[_ngcontent-%COMP%]{flex-direction:column;align-items:flex-start}}"],changeDetection:0})}}return d})();export{ge as TagInputDemoComponent};
