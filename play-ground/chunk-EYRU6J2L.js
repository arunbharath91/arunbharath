import{a as V}from"./chunk-V5C7FI6U.js";import{a as q}from"./chunk-PEEPRID2.js";import{b as B}from"./chunk-T4J2U4CP.js";import{wa as _,xa as L,ya as N}from"./chunk-NSESCRPY.js";import"./chunk-O4PMXQUQ.js";import"./chunk-MGXTA5CE.js";import"./chunk-WIRG7O55.js";import{r as z}from"./chunk-RZJWTSPA.js";import{Bc as g,Cc as m,Dc as u,Ic as F,Jb as k,Kb as M,Kc as W,Lb as I,Mc as A,Nb as T,Ob as C,Pb as l,Qb as t,Rb as e,Sb as h,Sc as w,Tc as x,Zb as D,bc as f,bd as R,db as o,dc as y,ma as S,na as E,rc as O,sc as a,tc as b,ub as P,ya as s}from"./chunk-NUUKVCZD.js";import"./chunk-FK6H3RFT.js";import"./chunk-CHV5ZX5K.js";import"./chunk-EU2KAMEK.js";import"./chunk-DAQOROHW.js";var U={basic:`import { Component, signal } from '@angular/core';
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
}`,editable:`import { Component, signal } from '@angular/core';
import { TagInputComponent } from '@arun-bharath-ui/cmp-ui';

@Component({
  standalone: true,
  imports: [TagInputComponent],
  template: \`
    <ui-tag-input
      label="Editable Tags"
      placeholder="Add tags\u2026"
      [editable]="true"
      [(value)]="tags"
      helperText="Double click a tag or select it and press Enter to edit inline"
    />
  \`,
})
export class EditableDemo {
  tags = signal<string[]>(['Double Click Me', 'Or Press Enter', 'To Edit']);
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
}`};var j=()=>["Forms","Input","Signals","Interactive"],G=(p,c)=>({skills:p,frameworks:c}),Y=(p,c)=>c.color,H=(p,c)=>c.label;function J(p,c){if(p&1){let r=D();t(0,"ui-tag-input",65),f("valueChange",function(i){let d=S(r).$implicit,n=y();return E(n.setColorTags(d.color,i))}),e()}if(p&2){let r=c.$implicit,v=y();l("label",r.label)("tagColor",r.color)("value",v.getColorTags(r.color))}}function K(p,c){if(p&1){let r=D();t(0,"button",66),f("click",function(){S(r);let i=y();return E(i.clearLog())}),a(1,"Clear"),e()}}function Q(p,c){p&1&&(t(0,"p",31),a(1,"No events yet \u2014 interact with the input above."),e())}function X(p,c){if(p&1&&(t(0,"li")(1,"span",68),a(2),e(),t(3,"span",69),a(4),e(),t(5,"span",70),a(6),e()()),p&2){let r=c.$implicit;O(F("event-log__item event-log__item--",r.type)),o(2),b(r.type),o(2),b(r.payload),o(2),b(r.time)}}function Z(p,c){if(p&1&&(t(0,"ul",32),T(1,X,7,6,"li",67,I),e()),p&2){let r=y();o(),C(r.recentEvents())}}function $(p,c){if(p&1&&h(0,"ui-chip",37),p&2){let r=c.$implicit;l("label",r.label)("color",r.color)("removable",r.removable)("disabled",r.disabled)}}var ge=(()=>{class p{constructor(){this.snippets=U,this.basicTags=s(["Angular","TypeScript","Signals"]),this.editableTags=s(["Double Click Me","Or Press Enter","To Edit Inline"]),this.skillsTags=s(["RxJS"]),this.frameworksTags=s(["Angular"]),this.frameworkSuggestions=["Angular","React","Vue","Svelte","Solid","Qwik","Next.js","Nuxt","Remix","Astro"],this.skillsTouched=s(!1),this.suggestionTags=s([]),this.colorRows=[{label:"Primary",color:_.PRIMARY},{label:"Secondary",color:_.SECONDARY},{label:"Success",color:_.SUCCESS},{label:"Warning",color:_.WARNING},{label:"Danger",color:_.DANGER},{label:"Info",color:_.INFO}],this.colorTags={primary:s(["Primary"]),secondary:s(["Secondary"]),success:s(["Success"]),warning:s(["Warning"]),danger:s(["Danger"]),info:s(["Info"])},this.smTags=s(["Small"]),this.mdTags=s(["Medium"]),this.lgTags=s(["Large"]),this.defaultTags=s(["Default"]),this.outlinedTags=s(["Outlined"]),this.filledTags=s(["Filled"]),this.maxTags=s([]),this.validationTags=s([]),this.validationTouched=s(!1),this.eventTags=s(["Watch me"]),this.eventLog=s([]),this.recentEvents=R(()=>this.eventLog().slice(-5).reverse()),this.chipRows=[{label:"Primary",color:"primary",removable:!1,disabled:!1},{label:"Secondary",color:"secondary",removable:!1,disabled:!1},{label:"Success",color:"success",removable:!1,disabled:!1},{label:"Warning",color:"warning",removable:!1,disabled:!1},{label:"Danger",color:"danger",removable:!1,disabled:!1},{label:"Info",color:"info",removable:!1,disabled:!1},{label:"Removable",color:"primary",removable:!0,disabled:!1},{label:"Disabled",color:"secondary",removable:!1,disabled:!0}],this.disabledTags=s(["Cannot","Edit","This"]),this.readonlyTags=s(["Read","Only","Mode"]),this.inputProps=[{name:"value",type:"model<string[]>",default:"[]",description:"Two-way bindable tag list using [(value)]. Implements FormValueControl."},{name:"placeholder",type:"string",default:"'Add tag\u2026'",description:"Placeholder shown when the field is empty."},{name:"label",type:"string",default:"''",description:"Accessible label rendered above the container."},{name:"helperText",type:"string",default:"''",description:"Hint text shown below the container."},{name:"errorMessage",type:"string",default:"''",description:"When non-empty the field is styled as invalid and this message is shown."},{name:"disabled",type:"boolean",default:"false",description:"Disables all interaction."},{name:"readonly",type:"boolean",default:"false",description:"Shows tags but prevents adding or removing."},{name:"maxTags",type:"number",default:"0",description:"Maximum number of tags (0 = unlimited)."},{name:"minLength",type:"number",default:"1",description:"Minimum character length for a tag to be accepted."},{name:"maxLength",type:"number",default:"50",description:"Maximum character length for a tag."},{name:"separatorKeys",type:"string[]",default:"['Enter', ',']",description:"Keys that commit the current input as a new tag."},{name:"allowDuplicates",type:"boolean",default:"false",description:"When false, duplicate labels are silently rejected."},{name:"tagColor",type:"TagColor",default:"'primary'",description:"Color applied to every tag created by this input."},{name:"tagsRemovable",type:"boolean",default:"true",description:"Whether newly created tags show a remove button."},{name:"size",type:"TagInputSize",default:"'md'",description:"Visual size: 'sm' | 'md' | 'lg'."},{name:"variant",type:"TagInputVariant",default:"'default'",description:"Container style: 'default' | 'outlined' | 'filled'."},{name:"editable",type:"boolean",default:"true",description:"Whether tags can be edited inline by double-clicking or pressing Enter."},{name:"suggestions",type:"string[]",default:"[]",description:"String list used to populate the autocomplete dropdown."},{name:"showSuggestionsOnFocus",type:"boolean",default:"false",description:"When true, autocomplete opens on click/focus."}],this.outputProps=[{name:"valueChange",type:"OutputEmitterRef<string[]>",description:"Fires when the tag list changes (use with [(value)] for two-way binding)."},{name:"tagAdded",type:"OutputEmitterRef<string>",description:"Fires after a tag is successfully added."},{name:"tagRemoved",type:"OutputEmitterRef<string>",description:"Fires after a tag is removed."},{name:"inputChange",type:"OutputEmitterRef<string>",description:"Fires on every keystroke inside the text field."}],this.chipInputProps=[{name:"label",type:"string (required)",default:"\u2014",description:"Text displayed inside the chip."},{name:"color",type:"TagColor",default:"'primary'",description:"Color variant: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info'."},{name:"size",type:"TagInputSize",default:"'md'",description:"Size: 'sm' | 'md' | 'lg'."},{name:"removable",type:"boolean",default:"true",description:"Whether the remove (\xD7) button is shown."},{name:"active",type:"boolean",default:"false",description:"Highlights the chip with a focus ring (used by tag-input internally)."},{name:"disabled",type:"boolean",default:"false",description:"Dims the chip and disables interaction."}],this.chipOutputProps=[{name:"removed",type:"OutputEmitterRef<void>",description:"Emitted when the remove button is clicked."}]}get skillsError(){return this.skillsTags().length===0&&this.skillsTouched()?"At least one skill is required":""}getColorTags(r){return this.colorTags[r]()}setColorTags(r,v){this.colorTags[r].set(v)}get validationError(){return this.validationTags().length===0&&this.validationTouched()?"At least one tag is required":""}submitValidationForm(){this.validationTouched.set(!0)}onTagAdded(r){this._log("added",`"${r}"`)}onTagRemoved(r){this._log("removed",`"${r}"`)}onInputChange(r){r&&this._log("input",`"${r}"`)}_log(r,v){let i=new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",second:"2-digit"});this.eventLog.update(d=>[...d,{type:r,payload:v,time:i}])}clearLog(){this.eventLog.set([])}static{this.\u0275fac=function(v){return new(v||p)}}static{this.\u0275cmp=P({type:p,selectors:[["playground-tag-input-demo"]],decls:242,vars:63,consts:[["title","Tag Input","description","Signal-based tag input with signal forms support, autocomplete, keyboard navigation, and a standalone Chip component.",3,"tags","apiReference","examples"],["demo",""],[1,"demo-section"],[1,"demo-section__header"],[1,"demo-section__title"],[1,"demo-section__badge"],[1,"demo-section__desc"],["label","Technologies","placeholder","Add a technology\u2026","helperText","Press Enter or , to add \xB7 Backspace to remove",3,"valueChange","value"],[1,"demo-output"],["label","Editable Tags (Double click to edit)","placeholder","Add tag\u2026","helperText","Try double-clicking a tag, or use backspace to focus and press Enter",3,"valueChange","editable","value"],[1,"demo-form"],["label","Skills (required)","placeholder","Add a skill\u2026","helperText","Required \u2014 add at least one skill, then click outside",3,"valueChange","value","errorMessage"],["label","Frameworks","placeholder","Search frameworks\u2026","helperText","Type to see autocomplete suggestions",3,"valueChange","value","suggestions"],["label","Frameworks","placeholder","Search frameworks\u2026","helperText","Type to filter \xB7 \u2191\u2193 navigate \xB7 Enter select \xB7 Esc close",3,"valueChange","suggestions","value","showSuggestionsOnFocus"],[1,"demo-color-grid"],[3,"label","tagColor","value"],[1,"demo-stack"],["size","sm","label","Small (sm)",3,"valueChange","value"],["size","md","label","Medium (md) \u2014 default",3,"valueChange","value"],["size","lg","label","Large (lg)",3,"valueChange","value"],["variant","default","label","Default",3,"valueChange","value"],["variant","outlined","label","Outlined",3,"valueChange","value"],["variant","filled","label","Filled",3,"valueChange","value"],["label","Max 3 Tags","helperText","You can add up to 3 tags",3,"valueChange","maxTags","value"],["label","Required Tags","placeholder","Add at least one tag\u2026","helperText","This field is required",3,"valueChange","value","errorMessage"],["type","button",1,"demo-btn",3,"click"],["label","Interact with me","placeholder","Add a tag\u2026",3,"valueChange","tagAdded","tagRemoved","inputChange","suggestions","value"],[1,"event-log"],[1,"event-log__header"],[1,"event-log__title"],["type","button",1,"event-log__clear"],[1,"event-log__empty"],[1,"event-log__list"],[1,"chip-showcase"],[1,"chip-showcase__row"],[1,"chip-showcase__label"],[1,"chip-showcase__chips"],[3,"label","color","removable","disabled"],["label","Small","color","primary","size","sm"],["label","Medium","color","primary","size","md"],["label","Large","color","primary","size","lg"],["label","Default","color","primary"],["label","Active","color","primary",3,"active"],["label","Removable","color","success",3,"removable"],["label","Disabled","color","secondary",3,"disabled"],["label","Disabled \u2014 no interaction at all",3,"valueChange","disabled","value"],["label","Readonly \u2014 tags visible, no editing",3,"valueChange","readonly","value"],["api",""],[1,"api-heading"],["title","Inputs",3,"properties"],["title","Outputs",3,"properties"],[1,"api-heading",2,"margin-top","40px"],["examples",""],["title","Basic Usage","description","Use [formField] with signal forms for reactive tag management.",3,"code"],["title","Editable Tags","description","Enable inline tag editing via double click or keyboard navigation.",3,"code"],["title","Signal Forms with Validation","description","Full signal form integration with validators and error messages.",3,"code"],["title","Autocomplete Suggestions","description","Pass a string[] to [suggestions] for a filterable dropdown. Already-added tags are excluded.","language","html",3,"code"],["title","Tag Colors","description","Six semantic color variants driven by design-system tokens.","language","html",3,"code"],["title","Sizes","description","Three sizes: sm, md (default), lg. Size also propagates to the chips inside.","language","html",3,"code"],["title","Variants","description","Three container styles: default, outlined, and filled.","language","html",3,"code"],["title","Max Tags","description","Hard cap on the number of tags. The input hides and a notice appears once the limit is reached.","language","html",3,"code"],["title","Form Validation","description","Combine [errorMessage] with signal form validators for full validation support.","language","html",3,"code"],["title","Event Outputs","description","Listen to (tagAdded), (tagRemoved), and (inputChange) for fine-grained control.","language","html",3,"code"],["title","Chip \u2014 Standalone","description","ui-chip is independent of ui-tag-input and can be used anywhere in your app.","language","html",3,"code"],["title","Disabled & Readonly","description","Disable all interaction or make the field read-only while still displaying tags.","language","html",3,"code"],[3,"valueChange","label","tagColor","value"],["type","button",1,"event-log__clear",3,"click"],[3,"class"],[1,"event-log__badge"],[1,"event-log__payload"],[1,"event-log__time"]],template:function(v,i){v&1&&(t(0,"playground-demo-page-template",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h3",4),a(5,"Basic Usage"),e(),t(6,"span",5),a(7,"[formField]"),e()(),t(8,"p",6),a(9," Use "),t(10,"code"),a(11,"[formField]"),e(),a(12," with signal forms. Press "),t(13,"kbd"),a(14,"Enter"),e(),a(15," or "),t(16,"kbd"),a(17,","),e(),a(18," to add a tag. "),t(19,"kbd"),a(20,"Backspace"),e(),a(21," on an empty field highlights then removes the last chip. "),e(),t(22,"ui-tag-input",7),u("valueChange",function(n){return m(i.basicTags,n)||(i.basicTags=n),n}),e(),t(23,"pre",8),a(24),w(25,"json"),e()(),t(26,"div",2)(27,"div",3)(28,"h3",4),a(29,"Editable Tags"),e(),t(30,"span",5),a(31,"[editable]"),e()(),t(32,"p",6),a(33," Double click any tag (or highlight it using keyboard and press "),t(34,"kbd"),a(35,"Enter"),e(),a(36,") to edit inline. Press "),t(37,"kbd"),a(38,"Enter"),e(),a(39," to save, or "),t(40,"kbd"),a(41,"Esc"),e(),a(42," to cancel. Set "),t(43,"code"),a(44,'[editable]="true"'),e(),a(45," to enable. "),e(),t(46,"ui-tag-input",9),u("valueChange",function(n){return m(i.editableTags,n)||(i.editableTags=n),n}),e(),t(47,"pre",8),a(48),w(49,"json"),e()(),t(50,"div",2)(51,"div",3)(52,"h3",4),a(53,"Signal Forms with Validation"),e(),t(54,"span",5),a(55,"[formField]"),e()(),t(56,"p",6),a(57," Signal-based two-way binding with "),t(58,"code"),a(59,"[(value)]"),e(),a(60,". Validation and error handling with signals. "),e(),t(61,"div",10)(62,"ui-tag-input",11),u("valueChange",function(n){return m(i.skillsTags,n)||(i.skillsTags=n),n}),f("valueChange",function(){return i.skillsTouched.set(!0)}),e(),t(63,"ui-tag-input",12),u("valueChange",function(n){return m(i.frameworksTags,n)||(i.frameworksTags=n),n}),e()(),t(64,"pre",8),a(65),w(66,"json"),e()(),t(67,"div",2)(68,"div",3)(69,"h3",4),a(70,"Autocomplete Suggestions"),e(),t(71,"span",5),a(72,"[suggestions]"),e()(),t(73,"p",6),a(74," Pass a "),t(75,"code"),a(76,"string[]"),e(),a(77," to "),t(78,"code"),a(79,"[suggestions]"),e(),a(80,". The list filters as you type. Navigate with "),t(81,"kbd"),a(82,"\u2191"),e(),t(83,"kbd"),a(84,"\u2193"),e(),a(85,", confirm with "),t(86,"kbd"),a(87,"Enter"),e(),a(88,", dismiss with "),t(89,"kbd"),a(90,"Esc"),e(),a(91,". Already-added tags are excluded automatically. "),e(),t(92,"ui-tag-input",13),u("valueChange",function(n){return m(i.suggestionTags,n)||(i.suggestionTags=n),n}),e()(),t(93,"div",2)(94,"div",3)(95,"h3",4),a(96,"Tag Colors"),e(),t(97,"span",5),a(98,"[tagColor]"),e()(),t(99,"p",6),a(100," Six semantic colors map to the design-system tokens. Each new tag inherits the "),t(101,"code"),a(102,"tagColor"),e(),a(103," set on the input. "),e(),t(104,"div",14),T(105,J,1,3,"ui-tag-input",15,Y),e()(),t(107,"div",2)(108,"div",3)(109,"h3",4),a(110,"Sizes"),e(),t(111,"span",5),a(112,"[size]"),e()(),t(113,"div",16)(114,"ui-tag-input",17),u("valueChange",function(n){return m(i.smTags,n)||(i.smTags=n),n}),e(),t(115,"ui-tag-input",18),u("valueChange",function(n){return m(i.mdTags,n)||(i.mdTags=n),n}),e(),t(116,"ui-tag-input",19),u("valueChange",function(n){return m(i.lgTags,n)||(i.lgTags=n),n}),e()()(),t(117,"div",2)(118,"div",3)(119,"h3",4),a(120,"Variants"),e(),t(121,"span",5),a(122,"[variant]"),e()(),t(123,"div",16)(124,"ui-tag-input",20),u("valueChange",function(n){return m(i.defaultTags,n)||(i.defaultTags=n),n}),e(),t(125,"ui-tag-input",21),u("valueChange",function(n){return m(i.outlinedTags,n)||(i.outlinedTags=n),n}),e(),t(126,"ui-tag-input",22),u("valueChange",function(n){return m(i.filledTags,n)||(i.filledTags=n),n}),e()()(),t(127,"div",2)(128,"div",3)(129,"h3",4),a(130,"Max Tags"),e(),t(131,"span",5),a(132,"[maxTags]"),e()(),t(133,"p",6),a(134," The text input disappears once the limit is reached and a notice is shown instead. "),e(),t(135,"ui-tag-input",23),u("valueChange",function(n){return m(i.maxTags,n)||(i.maxTags=n),n}),e()(),t(136,"div",2)(137,"div",3)(138,"h3",4),a(139,"Form Validation"),e(),t(140,"span",5),a(141,"[errorMessage]"),e()(),t(142,"p",6),a(143," Pass any string to "),t(144,"code"),a(145,"[errorMessage]"),e(),a(146," to put the field into an error state. Combine with signal form validators for full validation support. "),e(),t(147,"div",10)(148,"ui-tag-input",24),u("valueChange",function(n){return m(i.validationTags,n)||(i.validationTags=n),n}),f("valueChange",function(){return i.validationTouched.set(!0)}),e(),t(149,"button",25),f("click",function(){return i.submitValidationForm()}),a(150,"Submit form"),e()()(),t(151,"div",2)(152,"div",3)(153,"h3",4),a(154,"Event Log"),e(),t(155,"span",5),a(156,"Outputs"),e()(),t(157,"p",6)(158,"code"),a(159,"(tagAdded)"),e(),a(160,", "),t(161,"code"),a(162,"(tagRemoved)"),e(),a(163,", and "),t(164,"code"),a(165,"(inputChange)"),e(),a(166," fire in real time. Add or remove tags below to see the log update. "),e(),t(167,"ui-tag-input",26),u("valueChange",function(n){return m(i.eventTags,n)||(i.eventTags=n),n}),f("tagAdded",function(n){return i.onTagAdded(n)})("tagRemoved",function(n){return i.onTagRemoved(n)})("inputChange",function(n){return i.onInputChange(n)}),e(),t(168,"div",27)(169,"div",28)(170,"span",29),a(171,"Events"),e(),k(172,K,2,0,"button",30),e(),k(173,Q,2,0,"p",31)(174,Z,3,0,"ul",32),e()(),t(175,"div",2)(176,"div",3)(177,"h3",4),a(178,"Chip \u2014 Standalone"),e(),t(179,"span",5),a(180,"ui-chip"),e()(),t(181,"p",6)(182,"code"),a(183,"ui-chip"),e(),a(184," is a fully independent component \u2014 use it anywhere without a tag input. All six colors, three sizes, removable and disabled states. "),e(),t(185,"div",33)(186,"div",34)(187,"span",35),a(188,"Colors"),e(),t(189,"div",36),T(190,$,1,4,"ui-chip",37,H),e()(),t(192,"div",34)(193,"span",35),a(194,"Sizes"),e(),t(195,"div",36),h(196,"ui-chip",38)(197,"ui-chip",39)(198,"ui-chip",40),e()(),t(199,"div",34)(200,"span",35),a(201,"States"),e(),t(202,"div",36),h(203,"ui-chip",41)(204,"ui-chip",42)(205,"ui-chip",43)(206,"ui-chip",44),e()()()(),t(207,"div",2)(208,"div",3)(209,"h3",4),a(210,"Disabled & Readonly"),e(),t(211,"span",5),a(212,"[disabled] [readonly]"),e()(),t(213,"div",16)(214,"ui-tag-input",45),u("valueChange",function(n){return m(i.disabledTags,n)||(i.disabledTags=n),n}),e(),t(215,"ui-tag-input",46),u("valueChange",function(n){return m(i.readonlyTags,n)||(i.readonlyTags=n),n}),e()()()(),t(216,"div",47)(217,"h2",48),a(218,"TagInputComponent "),t(219,"code"),a(220,"ui-tag-input"),e()(),h(221,"playground-api-table",49)(222,"playground-api-table",50),t(223,"h2",51),a(224,"ChipComponent "),t(225,"code"),a(226,"ui-chip"),e()(),h(227,"playground-api-table",49)(228,"playground-api-table",50),e(),t(229,"div",52),h(230,"playground-example-viewer",53)(231,"playground-example-viewer",54)(232,"playground-example-viewer",55)(233,"playground-example-viewer",56)(234,"playground-example-viewer",57)(235,"playground-example-viewer",58)(236,"playground-example-viewer",59)(237,"playground-example-viewer",60)(238,"playground-example-viewer",61)(239,"playground-example-viewer",62)(240,"playground-example-viewer",63)(241,"playground-example-viewer",64),e()()),v&2&&(l("tags",W(59,j))("apiReference",!0)("examples",!0),o(22),g("value",i.basicTags),o(2),b(x(25,53,i.basicTags())),o(22),l("editable",!0),g("value",i.editableTags),o(2),b(x(49,55,i.editableTags())),o(14),g("value",i.skillsTags),l("errorMessage",i.skillsError),o(),g("value",i.frameworksTags),l("suggestions",i.frameworkSuggestions),o(2),b(x(66,57,A(60,G,i.skillsTags(),i.frameworksTags()))),o(27),l("suggestions",i.frameworkSuggestions),g("value",i.suggestionTags),l("showSuggestionsOnFocus",!0),o(13),C(i.colorRows),o(9),g("value",i.smTags),o(),g("value",i.mdTags),o(),g("value",i.lgTags),o(8),g("value",i.defaultTags),o(),g("value",i.outlinedTags),o(),g("value",i.filledTags),o(9),l("maxTags",3),g("value",i.maxTags),o(13),g("value",i.validationTags),l("errorMessage",i.validationError),o(19),l("suggestions",i.frameworkSuggestions),g("value",i.eventTags),o(5),M(i.recentEvents().length>0?172:-1),o(),M(i.recentEvents().length===0?173:174),o(17),C(i.chipRows),o(14),l("active",!0),o(),l("removable",!0),o(),l("disabled",!0),o(8),l("disabled",!0),g("value",i.disabledTags),o(),l("readonly",!0),g("value",i.readonlyTags),o(6),l("properties",i.inputProps),o(),l("properties",i.outputProps),o(5),l("properties",i.chipInputProps),o(),l("properties",i.chipOutputProps),o(2),l("code",i.snippets.basic),o(),l("code",i.snippets.editable),o(),l("code",i.snippets.signalForm),o(),l("code",i.snippets.suggestions),o(),l("code",i.snippets.colors),o(),l("code",i.snippets.sizes),o(),l("code",i.snippets.variants),o(),l("code",i.snippets.maxTags),o(),l("code",i.snippets.validation),o(),l("code",i.snippets.events),o(),l("code",i.snippets.chipStandalone),o(),l("code",i.snippets.disabled))},dependencies:[B,V,q,N,L,z],styles:[".demo-section[_ngcontent-%COMP%]{margin-bottom:var(--cmp-spacing-8);padding:var(--cmp-spacing-6);background:var(--cmp-white);border:1px solid var(--cmp-border-light);border-radius:var(--cmp-radius-lg)}.demo-section__header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;margin-bottom:var(--cmp-spacing-2)}.demo-section__title[_ngcontent-%COMP%]{font-size:var(--cmp-font-lg);font-weight:var(--cmp-font-semibold);color:var(--cmp-gray-900);margin:0}.demo-section__badge[_ngcontent-%COMP%]{display:inline-flex;align-items:center;padding:2px 8px;background:var(--cmp-primary-soft);color:var(--cmp-primary);border-radius:var(--cmp-radius-full);font-size:var(--cmp-font-xs);font-weight:var(--cmp-font-medium);font-family:monospace;white-space:nowrap}.demo-section__desc[_ngcontent-%COMP%]{font-size:var(--cmp-font-sm);color:var(--cmp-gray-600);margin:0 0 var(--cmp-spacing-4);line-height:1.6}.demo-section__desc[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{padding:1px 5px;background:var(--cmp-gray-100);border-radius:var(--cmp-radius-sm);font-size:.85em;color:var(--cmp-primary)}.demo-section__desc[_ngcontent-%COMP%]   kbd[_ngcontent-%COMP%]{display:inline-block;padding:1px 6px;background:var(--cmp-gray-100);border:1px solid var(--cmp-gray-300);border-radius:var(--cmp-radius-sm);font-size:.8em;font-family:monospace;color:var(--cmp-gray-700);box-shadow:0 1px 0 var(--cmp-gray-300)}.demo-stack[_ngcontent-%COMP%], .demo-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:var(--cmp-spacing-4)}.demo-color-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:var(--cmp-spacing-4)}.demo-output[_ngcontent-%COMP%]{margin-top:var(--cmp-spacing-4);padding:var(--cmp-spacing-3) var(--cmp-spacing-4);background:var(--cmp-gray-50);border:1px solid var(--cmp-gray-200);border-radius:var(--cmp-radius-md);font-size:var(--cmp-font-xs);font-family:monospace;color:var(--cmp-gray-700);white-space:pre-wrap;word-break:break-all;max-height:160px;overflow-y:auto;scrollbar-width:thin;scrollbar-color:var(--cmp-gray-300) transparent}.demo-btn[_ngcontent-%COMP%]{align-self:flex-start;padding:8px 20px;background:var(--cmp-primary);color:var(--cmp-white);border:none;border-radius:var(--cmp-radius);font-size:var(--cmp-font-sm);font-weight:var(--cmp-font-medium);cursor:pointer;transition:background .15s ease}.demo-btn[_ngcontent-%COMP%]:hover{background:var(--cmp-primary-hover)}.event-log[_ngcontent-%COMP%]{margin-top:var(--cmp-spacing-4);border:1px solid var(--cmp-gray-200);border-radius:var(--cmp-radius-md);overflow:hidden}.event-log__header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:8px 14px;background:var(--cmp-gray-50);border-bottom:1px solid var(--cmp-gray-200)}.event-log__title[_ngcontent-%COMP%]{font-size:var(--cmp-font-xs);font-weight:var(--cmp-font-semibold);color:var(--cmp-gray-600);text-transform:uppercase;letter-spacing:.05em}.event-log__clear[_ngcontent-%COMP%]{font-size:var(--cmp-font-xs);color:var(--cmp-gray-500);background:none;border:none;cursor:pointer;padding:2px 6px;border-radius:var(--cmp-radius-sm);transition:color .15s,background .15s}.event-log__clear[_ngcontent-%COMP%]:hover{color:var(--cmp-danger);background:var(--cmp-danger-soft)}.event-log__empty[_ngcontent-%COMP%]{padding:16px 14px;font-size:var(--cmp-font-sm);color:var(--cmp-gray-400);font-style:italic;margin:0}.event-log__list[_ngcontent-%COMP%]{list-style:none;margin:0;padding:0}.event-log__item[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;padding:8px 14px;font-size:var(--cmp-font-xs);border-bottom:1px solid var(--cmp-gray-100);animation:_ngcontent-%COMP%_log-slide-in .15s ease-out both}.event-log__item[_ngcontent-%COMP%]:last-child{border-bottom:none}.event-log__item--added[_ngcontent-%COMP%]   .event-log__badge[_ngcontent-%COMP%]{background:var(--cmp-success-soft);color:var(--cmp-success)}.event-log__item--removed[_ngcontent-%COMP%]   .event-log__badge[_ngcontent-%COMP%]{background:var(--cmp-danger-soft);color:var(--cmp-danger)}.event-log__item--input[_ngcontent-%COMP%]   .event-log__badge[_ngcontent-%COMP%]{background:var(--cmp-info-soft);color:var(--cmp-info)}.event-log__badge[_ngcontent-%COMP%]{display:inline-block;padding:1px 7px;border-radius:var(--cmp-radius-full);font-size:10px;font-weight:var(--cmp-font-semibold);text-transform:uppercase;letter-spacing:.04em;flex-shrink:0}.event-log__payload[_ngcontent-%COMP%]{flex:1;color:var(--cmp-gray-800);font-family:monospace}.event-log__time[_ngcontent-%COMP%]{color:var(--cmp-gray-400);font-size:10px;flex-shrink:0}@keyframes _ngcontent-%COMP%_log-slide-in{0%{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:translateY(0)}}.chip-showcase[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:var(--cmp-spacing-4)}.chip-showcase__row[_ngcontent-%COMP%]{display:flex;align-items:center;gap:var(--cmp-spacing-4);flex-wrap:wrap}.chip-showcase__label[_ngcontent-%COMP%]{font-size:var(--cmp-font-xs);font-weight:var(--cmp-font-semibold);color:var(--cmp-gray-500);text-transform:uppercase;letter-spacing:.05em;min-width:64px;flex-shrink:0}.chip-showcase__chips[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:8px;align-items:center}.api-heading[_ngcontent-%COMP%]{font-size:var(--cmp-font-xl);font-weight:var(--cmp-font-semibold);color:var(--cmp-gray-900);margin:0 0 var(--cmp-spacing-4)}.api-heading[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{font-size:.75em;padding:2px 8px;background:var(--cmp-primary-soft);color:var(--cmp-primary);border-radius:var(--cmp-radius-sm);font-weight:var(--cmp-font-normal);margin-left:8px}@media(max-width:768px){.demo-section[_ngcontent-%COMP%]{padding:var(--cmp-spacing-4);margin-bottom:var(--cmp-spacing-6)}.demo-color-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}.chip-showcase__row[_ngcontent-%COMP%]{flex-direction:column;align-items:flex-start}}"],changeDetection:0})}}return p})();export{ge as TagInputDemoComponent};
