import {N}from'./chunk-BgqfbpE3.js';import {P}from'./chunk-BGLIRIT3.js';import {h}from'./chunk-B-KMdjOY.js';import {r as rn}from'./chunk-CCYOOI3R.js';import {H as He,bN as Ti,f as Tt,G as GE,bO as Ix,aF as ji,bw as Qt,N as Ni,m as mT,X as Xc,av as Ah,aw as wT,aj as BT,n as nh,v as TD,K as vD,Y as Yp,Z as Zp,ad as kT,h as hI,ax as xh,i as Ch,ak as UT,bb as LT,F as CD,S as ID,$ as SD,a0 as $u,a1 as FD,a2 as Uu,b1 as ED,a4 as sT,aH as _T}from'./main-ZIE2MMIM.js';var j={basic:`import { Component, signal } from '@angular/core';
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
}`};var G=()=>["Forms","Input","Signals","Interactive"],H=(d,c)=>({skills:d,frameworks:c}),Y=(d,c)=>c.color,J=(d,c)=>c.label;function K(d,c){if(d&1){let r=SD();Ni(0,"ui-tag-input",67),nh("valueChange",function(a){let p=$u(r).$implicit,n=FD();return Uu(n.setColorTags(p.color,a))}),Xc();}if(d&2){let r=c.$implicit,v=FD();Zp("label",r.label)("tagColor",r.color)("value",v.getColorTags(r.color));}}function Q(d,c){if(d&1){let r=SD();Ni(0,"button",68),nh("click",function(){$u(r);let a=FD();return Uu(a.clearLog())}),mT(1,"Clear"),Xc();}}function X(d,c){d&1&&(Ni(0,"p",31),mT(1,"No events yet \u2014 interact with the input above."),Xc());}function Z(d,c){if(d&1&&(Ni(0,"li")(1,"span",70),mT(2),Xc(),Ni(3,"span",71),mT(4),Xc(),Ni(5,"span",72),mT(6),Xc()()),d&2){let r=c.$implicit;sT(_T("event-log__item event-log__item--",r.type)),hI(2),Ch(r.type),hI(2),Ch(r.payload),hI(2),Ch(r.time);}}function $(d,c){if(d&1&&(Ni(0,"ul",32),TD(1,Z,7,6,"li",69,ED),Xc()),d&2){let r=FD();hI(),CD(r.recentEvents());}}function ee(d,c){if(d&1&&Yp(0,"ui-chip",37),d&2){let r=c.$implicit;Zp("label",r.label)("color",r.color)("removable",r.removable)("disabled",r.disabled);}}var me=(()=>{class d{constructor(){this.snippets=j,this.basicTags=He(["Angular","TypeScript","Signals"]),this.editableTags=He(["Double Click Me","Or Press Enter","To Edit Inline"]),this.skillsTags=He(["RxJS"]),this.frameworksTags=He(["Angular"]),this.frameworkSuggestions=["Angular","React","Vue","Svelte","Solid","Qwik","Next.js","Nuxt","Remix","Astro"],this.skillsTouched=He(false),this.suggestionTags=He([]),this.colorRows=[{label:"Primary",color:Ti.PRIMARY},{label:"Secondary",color:Ti.SECONDARY},{label:"Success",color:Ti.SUCCESS},{label:"Warning",color:Ti.WARNING},{label:"Danger",color:Ti.DANGER},{label:"Info",color:Ti.INFO}],this.colorTags={primary:He(["Primary"]),secondary:He(["Secondary"]),success:He(["Success"]),warning:He(["Warning"]),danger:He(["Danger"]),info:He(["Info"])},this.smTags=He(["Small"]),this.mdTags=He(["Medium"]),this.lgTags=He(["Large"]),this.defaultTags=He(["Default"]),this.outlinedTags=He(["Outlined"]),this.filledTags=He(["Filled"]),this.maxTags=He([]),this.validationTags=He([]),this.validationTouched=He(false),this.eventTags=He(["Watch me"]),this.eventLog=He([]),this.recentEvents=Tt(()=>this.eventLog().slice(-5).reverse()),this.chipRows=[{label:"Primary",color:"primary",removable:false,disabled:false},{label:"Secondary",color:"secondary",removable:false,disabled:false},{label:"Success",color:"success",removable:false,disabled:false},{label:"Warning",color:"warning",removable:false,disabled:false},{label:"Danger",color:"danger",removable:false,disabled:false},{label:"Info",color:"info",removable:false,disabled:false},{label:"Removable",color:"primary",removable:true,disabled:false},{label:"Disabled",color:"secondary",removable:false,disabled:true}],this.disabledTags=He(["Cannot","Edit","This"]),this.readonlyTags=He(["Read","Only","Mode"]),this.inputProps=[{name:"value",type:"model<string[]>",default:"[]",description:"Two-way bindable tag list using [(value)]. Implements FormValueControl."},{name:"placeholder",type:"string",default:"'Add tag\u2026'",description:"Placeholder shown when the field is empty."},{name:"label",type:"string",default:"''",description:"Accessible label rendered above the container."},{name:"helperText",type:"string",default:"''",description:"Hint text shown below the container."},{name:"errorMessage",type:"string",default:"''",description:"When non-empty the field is styled as invalid and this message is shown."},{name:"disabled",type:"boolean",default:"false",description:"Disables all interaction."},{name:"readonly",type:"boolean",default:"false",description:"Shows tags but prevents adding or removing."},{name:"maxTags",type:"number",default:"0",description:"Maximum number of tags (0 = unlimited)."},{name:"minLength",type:"number",default:"1",description:"Minimum character length for a tag to be accepted."},{name:"maxLength",type:"number",default:"50",description:"Maximum character length for a tag."},{name:"separatorKeys",type:"string[]",default:"['Enter', ',']",description:"Keys that commit the current input as a new tag."},{name:"allowDuplicates",type:"boolean",default:"false",description:"When false, duplicate labels are silently rejected."},{name:"tagColor",type:"TagColor",default:"'primary'",description:"Color applied to every tag created by this input."},{name:"tagsRemovable",type:"boolean",default:"true",description:"Whether newly created tags show a remove button."},{name:"size",type:"TagInputSize",default:"'md'",description:"Visual size: 'sm' | 'md' | 'lg'."},{name:"variant",type:"TagInputVariant",default:"'default'",description:"Container style: 'default' | 'outlined' | 'filled'."},{name:"editable",type:"boolean",default:"true",description:"Whether tags can be edited inline by double-clicking or pressing Enter."},{name:"suggestions",type:"string[]",default:"[]",description:"String list used to populate the autocomplete dropdown."},{name:"showSuggestionsOnFocus",type:"boolean",default:"false",description:"When true, autocomplete opens on click/focus."}],this.outputProps=[{name:"valueChange",type:"OutputEmitterRef<string[]>",description:"Fires when the tag list changes (use with [(value)] for two-way binding)."},{name:"tagAdded",type:"OutputEmitterRef<string>",description:"Fires after a tag is successfully added."},{name:"tagRemoved",type:"OutputEmitterRef<string>",description:"Fires after a tag is removed."},{name:"inputChange",type:"OutputEmitterRef<string>",description:"Fires on every keystroke inside the text field."}],this.chipInputProps=[{name:"label",type:"string (required)",default:"\u2014",description:"Text displayed inside the chip."},{name:"color",type:"TagColor",default:"'primary'",description:"Color variant: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info'."},{name:"size",type:"TagInputSize",default:"'md'",description:"Size: 'sm' | 'md' | 'lg'."},{name:"removable",type:"boolean",default:"true",description:"Whether the remove (\xD7) button is shown."},{name:"active",type:"boolean",default:"false",description:"Highlights the chip with a focus ring (used by tag-input internally)."},{name:"disabled",type:"boolean",default:"false",description:"Dims the chip and disables interaction."}],this.chipOutputProps=[{name:"removed",type:"OutputEmitterRef<void>",description:"Emitted when the remove button is clicked."}],this.tagInputTokens=[{localVar:"--ui-taginput-font-size",mapsTo:"var(--cmp-font-sm)",description:"Tag input container text size",type:"value"},{localVar:"--ui-taginput-label-color",mapsTo:"var(--cmp-gray-700)",description:"Input label text color",type:"color"},{localVar:"--ui-taginput-bg",mapsTo:"var(--cmp-surface)",description:"Input container background color",type:"color"},{localVar:"--ui-taginput-border-color",mapsTo:"var(--cmp-gray-300)",description:"Input container border color",type:"color"},{localVar:"--ui-taginput-border-radius",mapsTo:"var(--cmp-radius)",description:"Input container corner radius",type:"radius"},{localVar:"--ui-taginput-focus-border-color",mapsTo:"var(--cmp-primary)",description:"Input container border color when focused",type:"color"},{localVar:"--ui-taginput-focus-shadow",mapsTo:"0 0 0 3px var(--cmp-primary-alpha)",description:"Container box shadow when focused",type:"value"},{localVar:"--ui-taginput-disabled-bg",mapsTo:"var(--cmp-gray-100)",description:"Container background when disabled",type:"color"},{localVar:"--ui-taginput-error-color",mapsTo:"var(--cmp-danger)",description:"Error status theme color",type:"color"},{localVar:"--ui-taginput-text-color",mapsTo:"var(--cmp-gray-900)",description:"Container text typing color",type:"color"},{localVar:"--ui-taginput-placeholder-color",mapsTo:"var(--cmp-gray-400)",description:"Placeholder text color",type:"color"},{localVar:"--ui-taginput-clear-color",mapsTo:"var(--cmp-gray-400)",description:"Clear button icon color",type:"color"},{localVar:"--ui-taginput-suggestion-bg",mapsTo:"var(--cmp-surface)",description:"Autocomplete dropdown menu background color",type:"color"},{localVar:"--ui-taginput-suggestion-color",mapsTo:"var(--cmp-gray-800)",description:"Autocomplete dropdown item text color",type:"color"},{localVar:"--ui-taginput-suggestion-active-bg",mapsTo:"var(--cmp-primary-soft)",description:"Hover/active autocomplete item background",type:"color"},{localVar:"--ui-taginput-suggestion-active-color",mapsTo:"var(--cmp-primary)",description:"Hover/active autocomplete item text color",type:"color"}],this.tagInputOverrideSnippet=`// Customize the Tag Input
ui-tag-input {
  --ui-taginput-border-radius: var(--cmp-radius-md);
  --ui-taginput-focus-border-color: var(--cmp-secondary);
  --ui-taginput-suggestion-active-bg: var(--cmp-secondary-soft);
  --ui-taginput-suggestion-active-color: var(--cmp-secondary);
}`;}get skillsError(){return this.skillsTags().length===0&&this.skillsTouched()?"At least one skill is required":""}getColorTags(r){return this.colorTags[r]()}setColorTags(r,v){this.colorTags[r].set(v);}get validationError(){return this.validationTags().length===0&&this.validationTouched()?"At least one tag is required":""}submitValidationForm(){this.validationTouched.set(true);}onTagAdded(r){this._log("added",`"${r}"`);}onTagRemoved(r){this._log("removed",`"${r}"`);}onInputChange(r){r&&this._log("input",`"${r}"`);}_log(r,v){let a=new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",second:"2-digit"});this.eventLog.update(p=>[...p,{type:r,payload:v,time:a}]);}clearLog(){this.eventLog.set([]);}static{this.\u0275fac=function(v){return new(v||d)};}static{this.\u0275cmp=GE({type:d,selectors:[["playground-tag-input-demo"]],decls:244,vars:66,consts:[["title","Tag Input","description","Signal-based tag input with signal forms support, autocomplete, keyboard navigation, and a standalone Chip component.",3,"tags","apiReference","examples","theming"],["demo",""],[1,"demo-section"],[1,"demo-section__header"],[1,"demo-section__title"],[1,"demo-section__badge"],[1,"demo-section__desc"],["label","Technologies","placeholder","Add a technology\u2026","helperText","Press Enter or , to add \xB7 Backspace to remove",3,"valueChange","value"],[1,"demo-output"],["label","Editable Tags (Double click to edit)","placeholder","Add tag\u2026","helperText","Try double-clicking a tag, or use backspace to focus and press Enter",3,"valueChange","editable","value"],[1,"demo-form"],["label","Skills (required)","placeholder","Add a skill\u2026","helperText","Required \u2014 add at least one skill, then click outside",3,"valueChange","value","errorMessage"],["label","Frameworks","placeholder","Search frameworks\u2026","helperText","Type to see autocomplete suggestions",3,"valueChange","value","suggestions"],["label","Frameworks","placeholder","Search frameworks\u2026","helperText","Type to filter \xB7 \u2191\u2193 navigate \xB7 Enter select \xB7 Esc close",3,"valueChange","suggestions","value","showSuggestionsOnFocus"],[1,"demo-color-grid"],[3,"label","tagColor","value"],[1,"demo-stack"],["size","sm","label","Small (sm)",3,"valueChange","value"],["size","md","label","Medium (md) \u2014 default",3,"valueChange","value"],["size","lg","label","Large (lg)",3,"valueChange","value"],["variant","default","label","Default",3,"valueChange","value"],["variant","outlined","label","Outlined",3,"valueChange","value"],["variant","filled","label","Filled",3,"valueChange","value"],["label","Max 3 Tags","helperText","You can add up to 3 tags",3,"valueChange","maxTags","value"],["label","Required Tags","placeholder","Add at least one tag\u2026","helperText","This field is required",3,"valueChange","value","errorMessage"],["type","button",1,"demo-btn",3,"click"],["label","Interact with me","placeholder","Add a tag\u2026",3,"valueChange","tagAdded","tagRemoved","inputChange","suggestions","value"],[1,"event-log"],[1,"event-log__header"],[1,"event-log__title"],["type","button",1,"event-log__clear"],[1,"event-log__empty"],[1,"event-log__list"],[1,"chip-showcase"],[1,"chip-showcase__row"],[1,"chip-showcase__label"],[1,"chip-showcase__chips"],[3,"label","color","removable","disabled"],["label","Small","color","primary","size","sm"],["label","Medium","color","primary","size","md"],["label","Large","color","primary","size","lg"],["label","Default","color","primary"],["label","Active","color","primary",3,"active"],["label","Removable","color","success",3,"removable"],["label","Disabled","color","secondary",3,"disabled"],["label","Disabled \u2014 no interaction at all",3,"valueChange","disabled","value"],["label","Readonly \u2014 tags visible, no editing",3,"valueChange","readonly","value"],["api",""],[1,"api-heading"],["title","Inputs",3,"properties"],["title","Outputs",3,"properties"],[1,"api-heading",2,"margin-top","40px"],["examples",""],["title","Basic Usage","description","Use [formField] with signal forms for reactive tag management.",3,"code"],["title","Editable Tags","description","Enable inline tag editing via double click or keyboard navigation.",3,"code"],["title","Signal Forms with Validation","description","Full signal form integration with validators and error messages.",3,"code"],["title","Autocomplete Suggestions","description","Pass a string[] to [suggestions] for a filterable dropdown. Already-added tags are excluded.","language","html",3,"code"],["title","Tag Colors","description","Six semantic color variants driven by design-system tokens.","language","html",3,"code"],["title","Sizes","description","Three sizes: sm, md (default), lg. Size also propagates to the chips inside.","language","html",3,"code"],["title","Variants","description","Three container styles: default, outlined, and filled.","language","html",3,"code"],["title","Max Tags","description","Hard cap on the number of tags. The input hides and a notice appears once the limit is reached.","language","html",3,"code"],["title","Form Validation","description","Combine [errorMessage] with signal form validators for full validation support.","language","html",3,"code"],["title","Event Outputs","description","Listen to (tagAdded), (tagRemoved), and (inputChange) for fine-grained control.","language","html",3,"code"],["title","Chip \u2014 Standalone","description","ui-chip is independent of ui-tag-input and can be used anywhere in your app.","language","html",3,"code"],["title","Disabled & Readonly","description","Disable all interaction or make the field read-only while still displaying tags.","language","html",3,"code"],["theming",""],["title","Tag Input CSS Custom Properties",3,"tokens","overrideSnippet"],[3,"valueChange","label","tagColor","value"],["type","button",1,"event-log__clear",3,"click"],[3,"class"],[1,"event-log__badge"],[1,"event-log__payload"],[1,"event-log__time"]],template:function(v,a){v&1&&(Ni(0,"playground-demo-page-template",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h3",4),mT(5,"Basic Usage"),Xc(),Ni(6,"span",5),mT(7,"[formField]"),Xc()(),Ni(8,"p",6),mT(9," Use "),Ni(10,"code"),mT(11,"[formField]"),Xc(),mT(12," with signal forms. Press "),Ni(13,"kbd"),mT(14,"Enter"),Xc(),mT(15," or "),Ni(16,"kbd"),mT(17,","),Xc(),mT(18," to add a tag. "),Ni(19,"kbd"),mT(20,"Backspace"),Xc(),mT(21," on an empty field highlights then removes the last chip. "),Xc(),Ni(22,"ui-tag-input",7),Ah("valueChange",function(n){return wT(a.basicTags,n)||(a.basicTags=n),n}),Xc(),Ni(23,"pre",8),mT(24),BT(25,"json"),Xc()(),Ni(26,"div",2)(27,"div",3)(28,"h3",4),mT(29,"Editable Tags"),Xc(),Ni(30,"span",5),mT(31,"[editable]"),Xc()(),Ni(32,"p",6),mT(33," Double click any tag (or highlight it using keyboard and press "),Ni(34,"kbd"),mT(35,"Enter"),Xc(),mT(36,") to edit inline. Press "),Ni(37,"kbd"),mT(38,"Enter"),Xc(),mT(39," to save, or "),Ni(40,"kbd"),mT(41,"Esc"),Xc(),mT(42," to cancel. Set "),Ni(43,"code"),mT(44,'[editable]="true"'),Xc(),mT(45," to enable. "),Xc(),Ni(46,"ui-tag-input",9),Ah("valueChange",function(n){return wT(a.editableTags,n)||(a.editableTags=n),n}),Xc(),Ni(47,"pre",8),mT(48),BT(49,"json"),Xc()(),Ni(50,"div",2)(51,"div",3)(52,"h3",4),mT(53,"Signal Forms with Validation"),Xc(),Ni(54,"span",5),mT(55,"[formField]"),Xc()(),Ni(56,"p",6),mT(57," Signal-based two-way binding with "),Ni(58,"code"),mT(59,"[(value)]"),Xc(),mT(60,". Validation and error handling with signals. "),Xc(),Ni(61,"div",10)(62,"ui-tag-input",11),Ah("valueChange",function(n){return wT(a.skillsTags,n)||(a.skillsTags=n),n}),nh("valueChange",function(){return a.skillsTouched.set(true)}),Xc(),Ni(63,"ui-tag-input",12),Ah("valueChange",function(n){return wT(a.frameworksTags,n)||(a.frameworksTags=n),n}),Xc()(),Ni(64,"pre",8),mT(65),BT(66,"json"),Xc()(),Ni(67,"div",2)(68,"div",3)(69,"h3",4),mT(70,"Autocomplete Suggestions"),Xc(),Ni(71,"span",5),mT(72,"[suggestions]"),Xc()(),Ni(73,"p",6),mT(74," Pass a "),Ni(75,"code"),mT(76,"string[]"),Xc(),mT(77," to "),Ni(78,"code"),mT(79,"[suggestions]"),Xc(),mT(80,". The list filters as you type. Navigate with "),Ni(81,"kbd"),mT(82,"\u2191"),Xc(),Ni(83,"kbd"),mT(84,"\u2193"),Xc(),mT(85,", confirm with "),Ni(86,"kbd"),mT(87,"Enter"),Xc(),mT(88,", dismiss with "),Ni(89,"kbd"),mT(90,"Esc"),Xc(),mT(91,". Already-added tags are excluded automatically. "),Xc(),Ni(92,"ui-tag-input",13),Ah("valueChange",function(n){return wT(a.suggestionTags,n)||(a.suggestionTags=n),n}),Xc()(),Ni(93,"div",2)(94,"div",3)(95,"h3",4),mT(96,"Tag Colors"),Xc(),Ni(97,"span",5),mT(98,"[tagColor]"),Xc()(),Ni(99,"p",6),mT(100," Six semantic colors map to the design-system tokens. Each new tag inherits the "),Ni(101,"code"),mT(102,"tagColor"),Xc(),mT(103," set on the input. "),Xc(),Ni(104,"div",14),TD(105,K,1,3,"ui-tag-input",15,Y),Xc()(),Ni(107,"div",2)(108,"div",3)(109,"h3",4),mT(110,"Sizes"),Xc(),Ni(111,"span",5),mT(112,"[size]"),Xc()(),Ni(113,"div",16)(114,"ui-tag-input",17),Ah("valueChange",function(n){return wT(a.smTags,n)||(a.smTags=n),n}),Xc(),Ni(115,"ui-tag-input",18),Ah("valueChange",function(n){return wT(a.mdTags,n)||(a.mdTags=n),n}),Xc(),Ni(116,"ui-tag-input",19),Ah("valueChange",function(n){return wT(a.lgTags,n)||(a.lgTags=n),n}),Xc()()(),Ni(117,"div",2)(118,"div",3)(119,"h3",4),mT(120,"Variants"),Xc(),Ni(121,"span",5),mT(122,"[variant]"),Xc()(),Ni(123,"div",16)(124,"ui-tag-input",20),Ah("valueChange",function(n){return wT(a.defaultTags,n)||(a.defaultTags=n),n}),Xc(),Ni(125,"ui-tag-input",21),Ah("valueChange",function(n){return wT(a.outlinedTags,n)||(a.outlinedTags=n),n}),Xc(),Ni(126,"ui-tag-input",22),Ah("valueChange",function(n){return wT(a.filledTags,n)||(a.filledTags=n),n}),Xc()()(),Ni(127,"div",2)(128,"div",3)(129,"h3",4),mT(130,"Max Tags"),Xc(),Ni(131,"span",5),mT(132,"[maxTags]"),Xc()(),Ni(133,"p",6),mT(134," The text input disappears once the limit is reached and a notice is shown instead. "),Xc(),Ni(135,"ui-tag-input",23),Ah("valueChange",function(n){return wT(a.maxTags,n)||(a.maxTags=n),n}),Xc()(),Ni(136,"div",2)(137,"div",3)(138,"h3",4),mT(139,"Form Validation"),Xc(),Ni(140,"span",5),mT(141,"[errorMessage]"),Xc()(),Ni(142,"p",6),mT(143," Pass any string to "),Ni(144,"code"),mT(145,"[errorMessage]"),Xc(),mT(146," to put the field into an error state. Combine with signal form validators for full validation support. "),Xc(),Ni(147,"div",10)(148,"ui-tag-input",24),Ah("valueChange",function(n){return wT(a.validationTags,n)||(a.validationTags=n),n}),nh("valueChange",function(){return a.validationTouched.set(true)}),Xc(),Ni(149,"button",25),nh("click",function(){return a.submitValidationForm()}),mT(150,"Submit form"),Xc()()(),Ni(151,"div",2)(152,"div",3)(153,"h3",4),mT(154,"Event Log"),Xc(),Ni(155,"span",5),mT(156,"Outputs"),Xc()(),Ni(157,"p",6)(158,"code"),mT(159,"(tagAdded)"),Xc(),mT(160,", "),Ni(161,"code"),mT(162,"(tagRemoved)"),Xc(),mT(163,", and "),Ni(164,"code"),mT(165,"(inputChange)"),Xc(),mT(166," fire in real time. Add or remove tags below to see the log update. "),Xc(),Ni(167,"ui-tag-input",26),Ah("valueChange",function(n){return wT(a.eventTags,n)||(a.eventTags=n),n}),nh("tagAdded",function(n){return a.onTagAdded(n)})("tagRemoved",function(n){return a.onTagRemoved(n)})("inputChange",function(n){return a.onInputChange(n)}),Xc(),Ni(168,"div",27)(169,"div",28)(170,"span",29),mT(171,"Events"),Xc(),vD(172,Q,2,0,"button",30),Xc(),vD(173,X,2,0,"p",31)(174,$,3,0,"ul",32),Xc()(),Ni(175,"div",2)(176,"div",3)(177,"h3",4),mT(178,"Chip \u2014 Standalone"),Xc(),Ni(179,"span",5),mT(180,"ui-chip"),Xc()(),Ni(181,"p",6)(182,"code"),mT(183,"ui-chip"),Xc(),mT(184," is a fully independent component \u2014 use it anywhere without a tag input. All six colors, three sizes, removable and disabled states. "),Xc(),Ni(185,"div",33)(186,"div",34)(187,"span",35),mT(188,"Colors"),Xc(),Ni(189,"div",36),TD(190,ee,1,4,"ui-chip",37,J),Xc()(),Ni(192,"div",34)(193,"span",35),mT(194,"Sizes"),Xc(),Ni(195,"div",36),Yp(196,"ui-chip",38)(197,"ui-chip",39)(198,"ui-chip",40),Xc()(),Ni(199,"div",34)(200,"span",35),mT(201,"States"),Xc(),Ni(202,"div",36),Yp(203,"ui-chip",41)(204,"ui-chip",42)(205,"ui-chip",43)(206,"ui-chip",44),Xc()()()(),Ni(207,"div",2)(208,"div",3)(209,"h3",4),mT(210,"Disabled & Readonly"),Xc(),Ni(211,"span",5),mT(212,"[disabled] [readonly]"),Xc()(),Ni(213,"div",16)(214,"ui-tag-input",45),Ah("valueChange",function(n){return wT(a.disabledTags,n)||(a.disabledTags=n),n}),Xc(),Ni(215,"ui-tag-input",46),Ah("valueChange",function(n){return wT(a.readonlyTags,n)||(a.readonlyTags=n),n}),Xc()()()(),Ni(216,"div",47)(217,"h2",48),mT(218,"TagInputComponent "),Ni(219,"code"),mT(220,"ui-tag-input"),Xc()(),Yp(221,"playground-api-table",49)(222,"playground-api-table",50),Ni(223,"h2",51),mT(224,"ChipComponent "),Ni(225,"code"),mT(226,"ui-chip"),Xc()(),Yp(227,"playground-api-table",49)(228,"playground-api-table",50),Xc(),Ni(229,"div",52),Yp(230,"playground-example-viewer",53)(231,"playground-example-viewer",54)(232,"playground-example-viewer",55)(233,"playground-example-viewer",56)(234,"playground-example-viewer",57)(235,"playground-example-viewer",58)(236,"playground-example-viewer",59)(237,"playground-example-viewer",60)(238,"playground-example-viewer",61)(239,"playground-example-viewer",62)(240,"playground-example-viewer",63)(241,"playground-example-viewer",64),Xc(),Ni(242,"div",65),Yp(243,"playground-token-table",66),Xc()()),v&2&&(Zp("tags",kT(62,G))("apiReference",true)("examples",true)("theming",true),hI(22),xh("value",a.basicTags),hI(2),Ch(UT(25,56,a.basicTags())),hI(22),Zp("editable",true),xh("value",a.editableTags),hI(2),Ch(UT(49,58,a.editableTags())),hI(14),xh("value",a.skillsTags),Zp("errorMessage",a.skillsError),hI(),xh("value",a.frameworksTags),Zp("suggestions",a.frameworkSuggestions),hI(2),Ch(UT(66,60,LT(63,H,a.skillsTags(),a.frameworksTags()))),hI(27),Zp("suggestions",a.frameworkSuggestions),xh("value",a.suggestionTags),Zp("showSuggestionsOnFocus",true),hI(13),CD(a.colorRows),hI(9),xh("value",a.smTags),hI(),xh("value",a.mdTags),hI(),xh("value",a.lgTags),hI(8),xh("value",a.defaultTags),hI(),xh("value",a.outlinedTags),hI(),xh("value",a.filledTags),hI(9),Zp("maxTags",3),xh("value",a.maxTags),hI(13),xh("value",a.validationTags),Zp("errorMessage",a.validationError),hI(19),Zp("suggestions",a.frameworkSuggestions),xh("value",a.eventTags),hI(5),ID(a.recentEvents().length>0?172:-1),hI(),ID(a.recentEvents().length===0?173:174),hI(17),CD(a.chipRows),hI(14),Zp("active",true),hI(),Zp("removable",true),hI(),Zp("disabled",true),hI(8),Zp("disabled",true),xh("value",a.disabledTags),hI(),Zp("readonly",true),xh("value",a.readonlyTags),hI(6),Zp("properties",a.inputProps),hI(),Zp("properties",a.outputProps),hI(5),Zp("properties",a.chipInputProps),hI(),Zp("properties",a.chipOutputProps),hI(2),Zp("code",a.snippets.basic),hI(),Zp("code",a.snippets.editable),hI(),Zp("code",a.snippets.signalForm),hI(),Zp("code",a.snippets.suggestions),hI(),Zp("code",a.snippets.colors),hI(),Zp("code",a.snippets.sizes),hI(),Zp("code",a.snippets.variants),hI(),Zp("code",a.snippets.maxTags),hI(),Zp("code",a.snippets.validation),hI(),Zp("code",a.snippets.events),hI(),Zp("code",a.snippets.chipStandalone),hI(),Zp("code",a.snippets.disabled),hI(2),Zp("tokens",a.tagInputTokens)("overrideSnippet",a.tagInputOverrideSnippet));},dependencies:[rn,P,h,Ix,ji,N,Qt],styles:[".demo-section[_ngcontent-%COMP%]{margin-bottom:var(--cmp-spacing-8);padding:var(--cmp-spacing-6);background:var(--cmp-white);border:1px solid var(--cmp-border-light);border-radius:var(--cmp-radius-lg)}.demo-section__header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;margin-bottom:var(--cmp-spacing-2)}.demo-section__title[_ngcontent-%COMP%]{font-size:var(--cmp-font-lg);font-weight:var(--cmp-font-semibold);color:var(--cmp-gray-900);margin:0}.demo-section__badge[_ngcontent-%COMP%]{display:inline-flex;align-items:center;padding:2px 8px;background:var(--cmp-primary-soft);color:var(--cmp-primary);border-radius:var(--cmp-radius-full);font-size:var(--cmp-font-xs);font-weight:var(--cmp-font-medium);font-family:monospace;white-space:nowrap}.demo-section__desc[_ngcontent-%COMP%]{font-size:var(--cmp-font-sm);color:var(--cmp-gray-600);margin:0 0 var(--cmp-spacing-4);line-height:1.6}.demo-section__desc[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{padding:1px 5px;background:var(--cmp-gray-100);border-radius:var(--cmp-radius-sm);font-size:.85em;color:var(--cmp-primary)}.demo-section__desc[_ngcontent-%COMP%]   kbd[_ngcontent-%COMP%]{display:inline-block;padding:1px 6px;background:var(--cmp-gray-100);border:1px solid var(--cmp-gray-300);border-radius:var(--cmp-radius-sm);font-size:.8em;font-family:monospace;color:var(--cmp-gray-700);box-shadow:0 1px 0 var(--cmp-gray-300)}.demo-stack[_ngcontent-%COMP%], .demo-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:var(--cmp-spacing-4)}.demo-color-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:var(--cmp-spacing-4)}.demo-output[_ngcontent-%COMP%]{margin-top:var(--cmp-spacing-4);padding:var(--cmp-spacing-3) var(--cmp-spacing-4);background:var(--cmp-gray-50);border:1px solid var(--cmp-gray-200);border-radius:var(--cmp-radius-md);font-size:var(--cmp-font-xs);font-family:monospace;color:var(--cmp-gray-700);white-space:pre-wrap;word-break:break-all;max-height:160px;overflow-y:auto;scrollbar-width:thin;scrollbar-color:var(--cmp-gray-300) transparent}.demo-btn[_ngcontent-%COMP%]{align-self:flex-start;padding:8px 20px;background:var(--cmp-primary);color:var(--cmp-white);border:none;border-radius:var(--cmp-radius);font-size:var(--cmp-font-sm);font-weight:var(--cmp-font-medium);cursor:pointer;transition:background .15s ease}.demo-btn[_ngcontent-%COMP%]:hover{background:var(--cmp-primary-hover)}.event-log[_ngcontent-%COMP%]{margin-top:var(--cmp-spacing-4);border:1px solid var(--cmp-gray-200);border-radius:var(--cmp-radius-md);overflow:hidden}.event-log__header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:8px 14px;background:var(--cmp-gray-50);border-bottom:1px solid var(--cmp-gray-200)}.event-log__title[_ngcontent-%COMP%]{font-size:var(--cmp-font-xs);font-weight:var(--cmp-font-semibold);color:var(--cmp-gray-600);text-transform:uppercase;letter-spacing:.05em}.event-log__clear[_ngcontent-%COMP%]{font-size:var(--cmp-font-xs);color:var(--cmp-gray-500);background:none;border:none;cursor:pointer;padding:2px 6px;border-radius:var(--cmp-radius-sm);transition:color .15s,background .15s}.event-log__clear[_ngcontent-%COMP%]:hover{color:var(--cmp-danger);background:var(--cmp-danger-soft)}.event-log__empty[_ngcontent-%COMP%]{padding:16px 14px;font-size:var(--cmp-font-sm);color:var(--cmp-gray-400);font-style:italic;margin:0}.event-log__list[_ngcontent-%COMP%]{list-style:none;margin:0;padding:0}.event-log__item[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;padding:8px 14px;font-size:var(--cmp-font-xs);border-bottom:1px solid var(--cmp-gray-100);animation:_ngcontent-%COMP%_log-slide-in .15s ease-out both}.event-log__item[_ngcontent-%COMP%]:last-child{border-bottom:none}.event-log__item--added[_ngcontent-%COMP%]   .event-log__badge[_ngcontent-%COMP%]{background:var(--cmp-success-soft);color:var(--cmp-success)}.event-log__item--removed[_ngcontent-%COMP%]   .event-log__badge[_ngcontent-%COMP%]{background:var(--cmp-danger-soft);color:var(--cmp-danger)}.event-log__item--input[_ngcontent-%COMP%]   .event-log__badge[_ngcontent-%COMP%]{background:var(--cmp-info-soft);color:var(--cmp-info)}.event-log__badge[_ngcontent-%COMP%]{display:inline-block;padding:1px 7px;border-radius:var(--cmp-radius-full);font-size:10px;font-weight:var(--cmp-font-semibold);text-transform:uppercase;letter-spacing:.04em;flex-shrink:0}.event-log__payload[_ngcontent-%COMP%]{flex:1;color:var(--cmp-gray-800);font-family:monospace}.event-log__time[_ngcontent-%COMP%]{color:var(--cmp-gray-400);font-size:10px;flex-shrink:0}@keyframes _ngcontent-%COMP%_log-slide-in{0%{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:translateY(0)}}.chip-showcase[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:var(--cmp-spacing-4)}.chip-showcase__row[_ngcontent-%COMP%]{display:flex;align-items:center;gap:var(--cmp-spacing-4);flex-wrap:wrap}.chip-showcase__label[_ngcontent-%COMP%]{font-size:var(--cmp-font-xs);font-weight:var(--cmp-font-semibold);color:var(--cmp-gray-500);text-transform:uppercase;letter-spacing:.05em;min-width:64px;flex-shrink:0}.chip-showcase__chips[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:8px;align-items:center}.api-heading[_ngcontent-%COMP%]{font-size:var(--cmp-font-xl);font-weight:var(--cmp-font-semibold);color:var(--cmp-gray-900);margin:0 0 var(--cmp-spacing-4)}.api-heading[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{font-size:.75em;padding:2px 8px;background:var(--cmp-primary-soft);color:var(--cmp-primary);border-radius:var(--cmp-radius-sm);font-weight:var(--cmp-font-normal);margin-left:8px}@media(max-width:768px){.demo-section[_ngcontent-%COMP%]{padding:var(--cmp-spacing-4);margin-bottom:var(--cmp-spacing-6)}.demo-color-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}.chip-showcase__row[_ngcontent-%COMP%]{flex-direction:column;align-items:flex-start}}"]});}}return d})();export{me as TagInputDemoComponent};