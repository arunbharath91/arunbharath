import{a as K}from"./chunk-5CZ3JQ5C.js";import{a as G}from"./chunk-FISUCOPR.js";import{b as W}from"./chunk-LDB23PJE.js";import{Aa as x,Ba as R,Ca as F,Da as A,Ea as L,Fa as s,Ga as P,l as I,xa as N,ya as S,za as h}from"./chunk-SWCB4D6M.js";import"./chunk-O2CXEIYS.js";import"./chunk-T3YZDFP3.js";import"./chunk-CHV5ZX5K.js";import"./chunk-GPLIFPL6.js";import"./chunk-W4YJMS2G.js";import{Ac as E,Gc as O,Hc as z,Ib as u,Jb as C,Ob as c,Pb as n,Qb as e,Rb as l,_c as _,ac as k,cc as v,db as a,qc as t,rc as p,sc as T,ub as f,ya as y,yc as D,zc as M}from"./chunk-UVDLXSKN.js";import"./chunk-EU2KAMEK.js";import"./chunk-DAQOROHW.js";var V={providerGlobal:`// app.config.ts - Global configuration for all date pickers
import { 
  DATE_PICKER_CONFIG_TOKEN, 
  LocaleEnum, 
  FirstDayOfWeekEnum 
} from '@arun-bharath-ui/cmp-ui';

export const appConfig: ApplicationConfig = {
  providers: [
    // ... other providers
    {
      provide: DATE_PICKER_CONFIG_TOKEN,
      useValue: {
        locale: LocaleEnum.EnglishUS,
        firstDayOfWeek: FirstDayOfWeekEnum.Monday,
      },
    },
  ],
};

// All date pickers in the app will use this configuration by default`,providerComponent:`// Component-level configuration override
import { 
  DatePickerComponent,
  DatePickerConfigService,
  DATE_PICKER_CONFIG_TOKEN, 
  LocaleEnum, 
  FirstDayOfWeekEnum 
} from '@arun-bharath-ui/cmp-ui';

@Component({
  selector: 'my-component',
  standalone: true,
  imports: [DatePickerComponent],
  providers: [
    DatePickerConfigService,
    {
      provide: DATE_PICKER_CONFIG_TOKEN,
      useValue: {
        locale: LocaleEnum.French,
        firstDayOfWeek: FirstDayOfWeekEnum.Monday,
      },
    },
  ],
  template: \`
    <ui-date-picker placeholder="S\xE9lectionner une date" />
  \`
})
export class MyComponent {}

// This component's date pickers will use French locale,
// overriding the global configuration`,providerRoute:`// Route-level configuration
import { Routes } from '@angular/router';
import { 
  DATE_PICKER_CONFIG_TOKEN, 
  LocaleEnum 
} from '@arun-bharath-ui/cmp-ui';

export const routes: Routes = [
  {
    path: 'french-section',
    loadComponent: () => import('./french-section.component'),
    providers: [
      {
        provide: DATE_PICKER_CONFIG_TOKEN,
        useValue: {
          locale: LocaleEnum.French,
        },
      },
    ],
  },
];

// All components in this route will use French locale`,basic:`import { DatePickerComponent } from '@arun-bharath-ui/cmp-ui';

<ui-date-picker
  placeholder="Select a date"
  (dateChange)="onDateChange($event)"
/>

// Component
selectedDate = signal<Date | null>(null);

onDateChange(date: Date | null): void {
  this.selectedDate.set(date);
}`,sizes:`import { DatePickerSizeEnum } from '@arun-bharath-ui/cmp-ui';

<!-- Small -->
<ui-date-picker
  [size]="DatePickerSizeEnum.Small"
  placeholder="Small size"
/>

<!-- Medium (Default) -->
<ui-date-picker
  [size]="DatePickerSizeEnum.Medium"
  placeholder="Medium size"
/>

<!-- Large -->
<ui-date-picker
  [size]="DatePickerSizeEnum.Large"
  placeholder="Large size"
/>`,minMax:`// Provider-based configuration for min/max dates
import { 
  DATE_PICKER_CONFIG_TOKEN,
  createDateRangeConfig 
} from '@arun-bharath-ui/cmp-ui';

@Component({
  selector: 'my-component',
  providers: [
    {
      provide: DATE_PICKER_CONFIG_TOKEN,
      useValue: createDateRangeConfig(
        new Date(), // Min date
        new Date(new Date().setMonth(new Date().getMonth() + 3)) // Max date
      )
    }
  ]
})
export class MyComponent {}

// Or manually:
@Component({
  providers: [
    {
      provide: DATE_PICKER_CONFIG_TOKEN,
      useValue: {
        minDate: new Date(),
        maxDate: new Date(new Date().setMonth(new Date().getMonth() + 3))
      }
    }
  ]
})`,disabledDates:`// Provider-based configuration for disabled dates
import { 
  DATE_PICKER_CONFIG_TOKEN,
  createDisabledDatesConfig 
} from '@arun-bharath-ui/cmp-ui';

@Component({
  selector: 'my-component',
  providers: [
    {
      provide: DATE_PICKER_CONFIG_TOKEN,
      useValue: createDisabledDatesConfig([
        new Date(2026, 4, 1),  // May 1, 2026
        new Date(2026, 4, 15), // May 15, 2026
        new Date(2026, 4, 25)  // May 25, 2026
      ])
    }
  ]
})
export class MyComponent {}

// Or manually:
@Component({
  providers: [
    {
      provide: DATE_PICKER_CONFIG_TOKEN,
      useValue: {
        disabledDates: [
          new Date(2026, 4, 1),
          new Date(2026, 4, 15),
          new Date(2026, 4, 25)
        ]
      }
    }
  ]
})`,firstDayOfWeek:`// Provider-based configuration for first day of week
import { 
  DATE_PICKER_CONFIG_TOKEN,
  FirstDayOfWeekEnum, 
  LocaleEnum 
} from '@arun-bharath-ui/cmp-ui';

@Component({
  selector: 'my-component',
  providers: [
    {
      provide: DATE_PICKER_CONFIG_TOKEN,
      useValue: {
        firstDayOfWeek: FirstDayOfWeekEnum.Monday,
        locale: LocaleEnum.EnglishGB
      }
    }
  ]
})
export class MyComponent {}

// Or with numbers (0 = Sunday, 1 = Monday):
@Component({
  providers: [
    {
      provide: DATE_PICKER_CONFIG_TOKEN,
      useValue: {
        firstDayOfWeek: 1,
        locale: 'en-GB'
      }
    }
  ]
})`,timezone:`// Provider-based configuration for timezone
import { 
  DATE_PICKER_CONFIG_TOKEN,
  TimeZoneEnum, 
  LocaleEnum 
} from '@arun-bharath-ui/cmp-ui';

// New York timezone
@Component({
  selector: 'my-component',
  providers: [
    {
      provide: DATE_PICKER_CONFIG_TOKEN,
      useValue: {
        locale: LocaleEnum.EnglishUS,
        timeZone: TimeZoneEnum.NewYork
      }
    }
  ]
})
export class MyComponent {}

// Tokyo timezone
@Component({
  providers: [
    {
      provide: DATE_PICKER_CONFIG_TOKEN,
      useValue: {
        locale: LocaleEnum.Japanese,
        timeZone: TimeZoneEnum.Tokyo
      }
    }
  ]
})

// London timezone
@Component({
  providers: [
    {
      provide: DATE_PICKER_CONFIG_TOKEN,
      useValue: {
        locale: LocaleEnum.EnglishGB,
        timeZone: TimeZoneEnum.London
      }
    }
  ]
})

// Or use strings directly:
@Component({
  providers: [
    {
      provide: DATE_PICKER_CONFIG_TOKEN,
      useValue: {
        locale: 'de-DE',
        timeZone: 'Europe/Berlin'
      }
    }
  ]
})`,twoWayBinding:`// Component (Angular 21 signal-based two-way binding)
boundDate = signal<Date | null>(null);

// Template
<ui-date-picker
  [(value)]="boundDate"
  placeholder="Select date"
/>

// Access the value
@if (boundDate()) {
  <p>Selected: {{ boundDate()!.toLocaleDateString() }}</p>
}`,range:`// Component (Angular 21 signal-based range binding)
import { DatePickerSelectionModeEnum, IDateRange } from '@arun-bharath-ui/cmp-ui';

selectedRange = signal<IDateRange | null>(null);

// Template
<ui-date-picker
  [selectionMode]="DatePickerSelectionModeEnum.Range"
  [(rangeValue)]="selectedRange"
  placeholder="Select date range"
/>

// Access the range value
@if (selectedRange()?.start) {
  <p>Start: {{ selectedRange()!.start!.toLocaleDateString() }}</p>
  @if (selectedRange()?.end) {
    <p>End: {{ selectedRange()!.end!.toLocaleDateString() }}</p>
  }
}`,disabled:`<ui-date-picker
  [disabled]="true"
  placeholder="Disabled date picker"
/>`};var Z=(()=>{class r{constructor(){this.configService=new s,this.activeConfig=_(()=>this.configService.getConfig())}formatConfig(){let i=this.activeConfig();return JSON.stringify({locale:i.locale,firstDayOfWeek:i.firstDayOfWeek,timeZone:i.timeZone||"browser default"},null,2)}static{this.\u0275fac=function(d){return new(d||r)}}static{this.\u0275cmp=f({type:r,selectors:[["playground-global-config-demo"]],features:[O([s])],decls:31,vars:1,consts:[[1,"config-demo-card"],[1,"config-header"],[1,"badge","badge-primary"],[1,"config-info"],[1,"config-display"],[1,"date-picker-demo"],[1,"cmp-form-label"],["placeholder","Select a date"],[1,"code-example"]],template:function(d,o){d&1&&(n(0,"div",0)(1,"div",1)(2,"h4"),t(3,"Global Configuration"),e(),n(4,"span",2),t(5,"App-Level Providers"),e()(),n(6,"div",3)(7,"p")(8,"strong"),t(9,"Configuration Source:"),e(),t(10," app.config.ts providers"),e(),n(11,"p")(12,"strong"),t(13,"Precedence:"),e(),t(14," Overrides default configuration"),e()(),n(15,"div",4)(16,"h5"),t(17,"Active Configuration:"),e(),n(18,"pre")(19,"code"),t(20),e()()(),n(21,"div",5)(22,"label",6),t(23,"Date Picker (Global: en-US, Monday first)"),e(),l(24,"ui-date-picker",7),e(),n(25,"div",8)(26,"h5"),t(27,"Global Configuration (app.config.ts):"),e(),n(28,"pre")(29,"code"),t(30,`// app.config.ts
export const appConfig: ApplicationConfig = {
  providers: [
    // ... other providers
    {
      provide: DATE_PICKER_CONFIG_TOKEN,
      useValue: {
        locale: LocaleEnum.EnglishUS,
        firstDayOfWeek: FirstDayOfWeekEnum.Monday,
      }
    }
  ]
};`),e()()()()),d&2&&(a(20),p(o.formatConfig()))},dependencies:[P],styles:[".config-demo-card[_ngcontent-%COMP%]{border:1px solid var(--cmp-border-color);border-radius:var(--cmp-radius);padding:1.5rem;background:var(--cmp-surface);margin-bottom:1rem}.config-demo-card[_ngcontent-%COMP%]   .config-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem;padding-bottom:.75rem;border-bottom:1px solid var(--cmp-border-color)}.config-demo-card[_ngcontent-%COMP%]   .config-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin:0;font-size:1.125rem;font-weight:600;color:var(--cmp-text-primary)}.config-demo-card[_ngcontent-%COMP%]   .config-header[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%]{padding:.25rem .75rem;border-radius:1rem;font-size:.75rem;font-weight:600;text-transform:uppercase}.config-demo-card[_ngcontent-%COMP%]   .config-header[_ngcontent-%COMP%]   .badge.badge-primary[_ngcontent-%COMP%]{background:var(--cmp-primary);color:var(--cmp-white)}.config-demo-card[_ngcontent-%COMP%]   .config-header[_ngcontent-%COMP%]   .badge.badge-warning[_ngcontent-%COMP%]{background:var(--cmp-warning);color:var(--cmp-white)}.config-demo-card[_ngcontent-%COMP%]   .config-header[_ngcontent-%COMP%]   .badge.badge-info[_ngcontent-%COMP%]{background:var(--cmp-info);color:var(--cmp-white)}.config-demo-card[_ngcontent-%COMP%]   .config-info[_ngcontent-%COMP%]{margin-bottom:1rem}.config-demo-card[_ngcontent-%COMP%]   .config-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:.25rem 0;font-size:.875rem;color:var(--cmp-text-secondary)}.config-demo-card[_ngcontent-%COMP%]   .config-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:var(--cmp-text-primary)}.config-demo-card[_ngcontent-%COMP%]   .config-display[_ngcontent-%COMP%]{margin-bottom:1.5rem}.config-demo-card[_ngcontent-%COMP%]   .config-display[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{margin:0 0 .5rem;font-size:.875rem;font-weight:600;color:var(--cmp-text-primary);text-transform:uppercase;letter-spacing:.5px}.config-demo-card[_ngcontent-%COMP%]   .config-display[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{background:var(--cmp-code-bg);border:1px solid var(--cmp-border-light);border-radius:var(--cmp-radius-sm);padding:var(--cmp-spacing-4);margin:0;overflow-x:auto}.config-demo-card[_ngcontent-%COMP%]   .config-display[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{font-family:Courier New,monospace;font-size:var(--cmp-font-sm);color:var(--cmp-gray-200)}.config-demo-card[_ngcontent-%COMP%]   .date-picker-demo[_ngcontent-%COMP%]{margin-bottom:1.5rem}.config-demo-card[_ngcontent-%COMP%]   .date-picker-demo[_ngcontent-%COMP%]   .cmp-form-label[_ngcontent-%COMP%]{display:block;margin-bottom:.5rem;font-weight:var(--cmp-font-medium);color:var(--cmp-text-primary)}.config-demo-card[_ngcontent-%COMP%]   .code-example[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{margin:0 0 .5rem;font-size:var(--cmp-font-sm);font-weight:var(--cmp-font-semibold);color:var(--cmp-text-primary);text-transform:uppercase;letter-spacing:.5px}.config-demo-card[_ngcontent-%COMP%]   .code-example[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{background:var(--cmp-code-bg);border:1px solid var(--cmp-border-light);border-radius:var(--cmp-radius-sm);padding:var(--cmp-spacing-4);margin:0;overflow-x:auto}.config-demo-card[_ngcontent-%COMP%]   .code-example[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{font-family:Courier New,monospace;font-size:var(--cmp-font-sm);color:var(--cmp-gray-200);line-height:1.5}"],changeDetection:0})}}return r})();var B=(()=>{class r{constructor(){this.configService=new s,this.activeConfig=_(()=>this.configService.getConfig())}formatConfig(){let i=this.activeConfig();return JSON.stringify({locale:i.locale,firstDayOfWeek:i.firstDayOfWeek,timeZone:i.timeZone||"browser default"},null,2)}static{this.\u0275fac=function(d){return new(d||r)}}static{this.\u0275cmp=f({type:r,selectors:[["playground-component-override-demo"]],features:[O([s,{provide:L,useValue:{locale:h.French,firstDayOfWeek:x.Monday}}])],decls:31,vars:1,consts:[[1,"config-demo-card"],[1,"config-header"],[1,"badge","badge-warning"],[1,"config-info"],[1,"config-display"],[1,"date-picker-demo"],[1,"cmp-form-label"],["placeholder","S\xE9lectionner une date"],[1,"code-example"]],template:function(d,o){d&1&&(n(0,"div",0)(1,"div",1)(2,"h4"),t(3,"Component-Level Override"),e(),n(4,"span",2),t(5,"Component Providers"),e()(),n(6,"div",3)(7,"p")(8,"strong"),t(9,"Configuration Source:"),e(),t(10," Component providers array"),e(),n(11,"p")(12,"strong"),t(13,"Precedence:"),e(),t(14," Overrides global configuration"),e()(),n(15,"div",4)(16,"h5"),t(17,"Active Configuration:"),e(),n(18,"pre")(19,"code"),t(20),e()()(),n(21,"div",5)(22,"label",6),t(23,"Date Picker (French locale, Monday first)"),e(),l(24,"ui-date-picker",7),e(),n(25,"div",8)(26,"h5"),t(27,"Provider Configuration:"),e(),n(28,"pre")(29,"code"),t(30,`@Component({
  selector: 'my-component',
  providers: [
    DatePickerConfigService,
    {
      provide: DATE_PICKER_CONFIG_TOKEN,
      useValue: {
        locale: LocaleEnum.French,
        firstDayOfWeek: FirstDayOfWeekEnum.Monday,
      }
    }
  ]
})
export class MyComponent { }`),e()()()()),d&2&&(a(20),p(o.formatConfig()))},dependencies:[P],styles:[".config-demo-card[_ngcontent-%COMP%]{border:1px solid var(--cmp-border-color);border-radius:var(--cmp-radius);padding:1.5rem;background:var(--cmp-surface);margin-bottom:1rem}.config-demo-card[_ngcontent-%COMP%]   .config-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem;padding-bottom:.75rem;border-bottom:1px solid var(--cmp-border-color)}.config-demo-card[_ngcontent-%COMP%]   .config-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin:0;font-size:1.125rem;font-weight:600;color:var(--cmp-text-primary)}.config-demo-card[_ngcontent-%COMP%]   .config-header[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%]{padding:.25rem .75rem;border-radius:1rem;font-size:.75rem;font-weight:600;text-transform:uppercase}.config-demo-card[_ngcontent-%COMP%]   .config-header[_ngcontent-%COMP%]   .badge.badge-primary[_ngcontent-%COMP%]{background:var(--cmp-primary);color:var(--cmp-white)}.config-demo-card[_ngcontent-%COMP%]   .config-header[_ngcontent-%COMP%]   .badge.badge-warning[_ngcontent-%COMP%]{background:var(--cmp-warning);color:var(--cmp-white)}.config-demo-card[_ngcontent-%COMP%]   .config-header[_ngcontent-%COMP%]   .badge.badge-info[_ngcontent-%COMP%]{background:var(--cmp-info);color:var(--cmp-white)}.config-demo-card[_ngcontent-%COMP%]   .config-info[_ngcontent-%COMP%]{margin-bottom:1rem}.config-demo-card[_ngcontent-%COMP%]   .config-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:.25rem 0;font-size:.875rem;color:var(--cmp-text-secondary)}.config-demo-card[_ngcontent-%COMP%]   .config-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:var(--cmp-text-primary)}.config-demo-card[_ngcontent-%COMP%]   .config-display[_ngcontent-%COMP%]{margin-bottom:1.5rem}.config-demo-card[_ngcontent-%COMP%]   .config-display[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{margin:0 0 .5rem;font-size:.875rem;font-weight:600;color:var(--cmp-text-primary);text-transform:uppercase;letter-spacing:.5px}.config-demo-card[_ngcontent-%COMP%]   .config-display[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{background:var(--cmp-code-bg);border:1px solid var(--cmp-border-light);border-radius:var(--cmp-radius-sm);padding:var(--cmp-spacing-4);margin:0;overflow-x:auto}.config-demo-card[_ngcontent-%COMP%]   .config-display[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{font-family:Courier New,monospace;font-size:var(--cmp-font-sm);color:var(--cmp-gray-200)}.config-demo-card[_ngcontent-%COMP%]   .date-picker-demo[_ngcontent-%COMP%]{margin-bottom:1.5rem}.config-demo-card[_ngcontent-%COMP%]   .date-picker-demo[_ngcontent-%COMP%]   .cmp-form-label[_ngcontent-%COMP%]{display:block;margin-bottom:.5rem;font-weight:var(--cmp-font-medium);color:var(--cmp-text-primary)}.config-demo-card[_ngcontent-%COMP%]   .code-example[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{margin:0 0 .5rem;font-size:var(--cmp-font-sm);font-weight:var(--cmp-font-semibold);color:var(--cmp-text-primary);text-transform:uppercase;letter-spacing:.5px}.config-demo-card[_ngcontent-%COMP%]   .code-example[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{background:var(--cmp-code-bg);border:1px solid var(--cmp-border-light);border-radius:var(--cmp-radius-sm);padding:var(--cmp-spacing-4);margin:0;overflow-x:auto}.config-demo-card[_ngcontent-%COMP%]   .code-example[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{font-family:Courier New,monospace;font-size:var(--cmp-font-sm);color:var(--cmp-gray-200);line-height:1.5}"],changeDetection:0})}}return r})();var U=(()=>{class r{constructor(){this.configService=new s,this.activeConfig=_(()=>this.configService.getConfig())}formatConfig(){let i=this.activeConfig();return JSON.stringify({locale:i.locale,firstDayOfWeek:i.firstDayOfWeek,timeZone:i.timeZone||"browser default"},null,2)}static{this.\u0275fac=function(d){return new(d||r)}}static{this.\u0275cmp=f({type:r,selectors:[["playground-no-config-demo"]],features:[O([s])],decls:31,vars:1,consts:[[1,"config-demo-card"],[1,"config-header"],[1,"badge","badge-info"],[1,"config-info"],[1,"config-display"],[1,"date-picker-demo"],[1,"cmp-form-label"],["placeholder","Select a date"],[1,"code-example"]],template:function(d,o){d&1&&(n(0,"div",0)(1,"div",1)(2,"h4"),t(3,"Default Configuration Only"),e(),n(4,"span",2),t(5,"No Providers"),e()(),n(6,"div",3)(7,"p")(8,"strong"),t(9,"Configuration Source:"),e(),t(10," Default values only"),e(),n(11,"p")(12,"strong"),t(13,"Precedence:"),e(),t(14," Uses hardcoded defaults (no global or component config)"),e()(),n(15,"div",4)(16,"h5"),t(17,"Active Configuration:"),e(),n(18,"pre")(19,"code"),t(20),e()()(),n(21,"div",5)(22,"label",6),t(23,"Date Picker (Default: en-US, Sunday first)"),e(),l(24,"ui-date-picker",7),e(),n(25,"div",8)(26,"h5"),t(27,"Component Setup:"),e(),n(28,"pre")(29,"code"),t(30,`@Component({
  selector: 'my-component',
  providers: [DatePickerConfigService] // No token provider
})
export class MyComponent { 
  // Uses default configuration:
  // - locale: 'en-US'
  // - firstDayOfWeek: 0 (Sunday)
}`),e()()()()),d&2&&(a(20),p(o.formatConfig()))},dependencies:[P],styles:[".config-demo-card[_ngcontent-%COMP%]{border:1px solid var(--cmp-border-color);border-radius:var(--cmp-radius);padding:1.5rem;background:var(--cmp-surface);margin-bottom:1rem}.config-demo-card[_ngcontent-%COMP%]   .config-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem;padding-bottom:.75rem;border-bottom:1px solid var(--cmp-border-color)}.config-demo-card[_ngcontent-%COMP%]   .config-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin:0;font-size:1.125rem;font-weight:600;color:var(--cmp-text-primary)}.config-demo-card[_ngcontent-%COMP%]   .config-header[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%]{padding:.25rem .75rem;border-radius:1rem;font-size:.75rem;font-weight:600;text-transform:uppercase}.config-demo-card[_ngcontent-%COMP%]   .config-header[_ngcontent-%COMP%]   .badge.badge-primary[_ngcontent-%COMP%]{background:var(--cmp-primary);color:var(--cmp-white)}.config-demo-card[_ngcontent-%COMP%]   .config-header[_ngcontent-%COMP%]   .badge.badge-warning[_ngcontent-%COMP%]{background:var(--cmp-warning);color:var(--cmp-white)}.config-demo-card[_ngcontent-%COMP%]   .config-header[_ngcontent-%COMP%]   .badge.badge-info[_ngcontent-%COMP%]{background:var(--cmp-info);color:var(--cmp-white)}.config-demo-card[_ngcontent-%COMP%]   .config-info[_ngcontent-%COMP%]{margin-bottom:1rem}.config-demo-card[_ngcontent-%COMP%]   .config-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:.25rem 0;font-size:.875rem;color:var(--cmp-text-secondary)}.config-demo-card[_ngcontent-%COMP%]   .config-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:var(--cmp-text-primary)}.config-demo-card[_ngcontent-%COMP%]   .config-display[_ngcontent-%COMP%]{margin-bottom:1.5rem}.config-demo-card[_ngcontent-%COMP%]   .config-display[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{margin:0 0 .5rem;font-size:.875rem;font-weight:600;color:var(--cmp-text-primary);text-transform:uppercase;letter-spacing:.5px}.config-demo-card[_ngcontent-%COMP%]   .config-display[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{background:var(--cmp-code-bg);border:1px solid var(--cmp-border-light);border-radius:var(--cmp-radius-sm);padding:var(--cmp-spacing-4);margin:0;overflow-x:auto}.config-demo-card[_ngcontent-%COMP%]   .config-display[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{font-family:Courier New,monospace;font-size:var(--cmp-font-sm);color:var(--cmp-gray-200)}.config-demo-card[_ngcontent-%COMP%]   .date-picker-demo[_ngcontent-%COMP%]{margin-bottom:1.5rem}.config-demo-card[_ngcontent-%COMP%]   .date-picker-demo[_ngcontent-%COMP%]   .cmp-form-label[_ngcontent-%COMP%]{display:block;margin-bottom:.5rem;font-weight:var(--cmp-font-medium);color:var(--cmp-text-primary)}.config-demo-card[_ngcontent-%COMP%]   .code-example[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{margin:0 0 .5rem;font-size:var(--cmp-font-sm);font-weight:var(--cmp-font-semibold);color:var(--cmp-text-primary);text-transform:uppercase;letter-spacing:.5px}.config-demo-card[_ngcontent-%COMP%]   .code-example[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{background:var(--cmp-code-bg);border:1px solid var(--cmp-border-light);border-radius:var(--cmp-radius-sm);padding:var(--cmp-spacing-4);margin:0;overflow-x:auto}.config-demo-card[_ngcontent-%COMP%]   .code-example[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{font-family:Courier New,monospace;font-size:var(--cmp-font-sm);color:var(--cmp-gray-200);line-height:1.5}"],changeDetection:0})}}return r})();var j=()=>["Form Control","Signal","i18n","Calendar"];function J(r,b){if(r&1&&(n(0,"ui-alert",17),t(1," Selected: "),n(2,"strong"),t(3),e()()),r&2){let i=v();a(3),p(i.selectedDate().toLocaleDateString())}}function Y(r,b){if(r&1&&(t(0," to "),n(1,"strong"),t(2),e()),r&2){let i=v(2);a(2),p(i.selectedRange().end.toLocaleDateString())}}function X(r,b){if(r&1&&(n(0,"ui-alert",17),t(1," Selected Range: "),n(2,"strong"),t(3),e(),u(4,Y,3,1),e()),r&2){let i,d=v();a(3),p(d.selectedRange().start.toLocaleDateString()),a(),C((i=d.selectedRange())!=null&&i.end?4:-1)}}function q(r,b){if(r&1&&(n(0,"ui-alert",25),t(1," Bound Value: "),n(2,"strong"),t(3),e()()),r&2){let i=v();a(3),p(i.boundDate().toLocaleDateString())}}function H(r,b){if(r&1&&(n(0,"ui-alert",56),t(1),e()),r&2){let i=v();a(),T(" Bound Value: ",i.boundDate().toLocaleDateString()," ")}}function Q(r,b){if(r&1&&(t(0," - Range End: "),n(1,"strong"),t(2),e()),r&2){let i=v(2);a(2),p(i.selectedRange().end.toLocaleDateString())}}function $(r,b){if(r&1&&(n(0,"ui-alert",17),t(1," Range Start: "),n(2,"strong"),t(3),e(),u(4,Q,3,1),e()),r&2){let i,d=v();a(3),p(d.selectedRange().start.toLocaleDateString()),a(),C((i=d.selectedRange())!=null&&i.end?4:-1)}}var xe=(()=>{class r{constructor(){this.configService=new s,this.snippets=V,this.globalConfig=_(()=>this.configService.getConfig()),this.modifiedGlobalLocale=y(h.EnglishUS),this.modifiedGlobalFirstDay=y(x.Monday),this.selectedDate=y(null),this.DatePickerSizeEnum=N,this.DatePickerSelectionModeEnum=R,this.boundDate=y(null),this.selectedRange=y({start:new Date,end:new Date(new Date().setDate(new Date().getDate()+5))}),this.minMaxConfig=F(new Date,new Date(new Date().setMonth(new Date().getMonth()+3))),this.disabledDatesConfig=A([new Date(2026,4,1),new Date(2026,4,15),new Date(2026,4,25)]),this.mondayFirstConfig={firstDayOfWeek:x.Monday},this.timezoneConfig={locale:h.EnglishUS,timeZone:S.NewYork},this.timezoneConfigTokyo={locale:h.Japanese,timeZone:S.Tokyo},this.timezoneConfigLondon={locale:h.EnglishGB,timeZone:S.London},this.datePickerProps=[{name:"placeholder",type:"string",default:"'Select date'",description:"Placeholder text for the input field."},{name:"size",type:"DatePickerSize ('sm' | 'md' | 'lg')",default:"'md'",description:"Size variant of the date picker."},{name:"disabled",type:"boolean",default:"false",description:"Whether the date picker is disabled."},{name:"value",type:"Date | null",default:"null",description:"Two-way bindable model signal for the selected date."}],this.datePickerOutputs=[{name:"dateChange",type:"OutputEmitterRef<Date | null>",description:"Emits when a date is selected or cleared."},{name:"valueChange",type:"OutputEmitterRef<Date | null>",description:"Emits when the model value changes (for two-way binding)."}],this.providerConfigProps=[{name:"DATE_PICKER_CONFIG_TOKEN",type:"InjectionToken<Partial<IDatePickerConfig>>",default:"undefined",description:"Injection token for providing date picker configuration at app or component level."},{name:"DatePickerConfigService",type:"Injectable",default:"N/A",description:"Service that merges configuration from multiple sources (Default \u2192 Global \u2192 Component)."}],this.configProps=[{name:"minDate",type:"Date",default:"undefined",description:"Minimum selectable date."},{name:"maxDate",type:"Date",default:"undefined",description:"Maximum selectable date."},{name:"disabledDates",type:"Date[]",default:"undefined",description:"Array of dates that should be disabled."},{name:"locale",type:"Locale (LocaleEnum | string)",default:"'en-US'",description:"BCP 47 locale identifier. Use LocaleEnum for common locales."},{name:"timeZone",type:"TimeZone (TimeZoneEnum | string)",default:"undefined",description:"IANA timezone identifier. Use TimeZoneEnum for common timezones."},{name:"firstDayOfWeek",type:"FirstDayOfWeek (0-6)",default:"0",description:"First day of the week. Use FirstDayOfWeekEnum for clarity."}]}onDateChange(i){this.selectedDate.set(i)}formatConfig(i){return JSON.stringify({locale:i.locale,firstDayOfWeek:i.firstDayOfWeek,timeZone:i.timeZone||"browser default",minDate:i.minDate?"set":"undefined",maxDate:i.maxDate?"set":"undefined",disabledDates:i.disabledDates?`${i.disabledDates.length} dates`:"undefined"},null,2)}updateGlobalLocale(i){this.modifiedGlobalLocale.set(i)}updateGlobalFirstDay(i){this.modifiedGlobalFirstDay.set(i)}static{this.\u0275fac=function(d){return new(d||r)}}static{this.\u0275cmp=f({type:r,selectors:[["playground-date-picker-demo"]],decls:174,vars:38,consts:[["title","Date Picker","description","A minimal, accessible date picker component with calendar dropdown, built with Angular 21 signals and Intl.DateTimeFormat",3,"tags","apiReference","examples"],["demo",""],[1,"cmp-mb-5"],[1,"cmp-mb-3"],["variant","info","title","Configuration Precedence",1,"cmp-mb-4"],[1,"config-precedence-visual","cmp-mb-4"],[1,"precedence-flow"],[1,"precedence-step"],[1,"step-number"],[1,"step-content"],[1,"precedence-arrow"],[1,"config-scenarios"],[1,"cmp-my-5"],["variant","info","title","Timezone Behavior",1,"cmp-mb-4"],[1,"cmp-d-flex","cmp-flex-column","cmp-gap-4"],[1,"cmp-form-label"],["placeholder","Select a date",3,"dateChange"],["variant","success",1,"cmp-mt-2"],["placeholder","Select date range",3,"rangeValueChange","selectionMode","rangeValue"],[1,"cmp-d-flex","cmp-gap-3"],[1,"cmp-flex-1"],["placeholder","Small",3,"size"],["placeholder","Medium",3,"size"],["placeholder","Large",3,"size"],["placeholder","Select date",3,"valueChange","value"],["variant","primary",1,"cmp-mt-2"],["api",""],[1,"cmp-mb-4"],["variant","info","title","Migration Note",1,"cmp-mb-4"],["title","Provider Configuration",3,"properties"],[1,"cmp-mb-4","cmp-mt-5"],["title","Date Picker Inputs",3,"properties"],["title","Date Picker Outputs",3,"properties"],["title","IDatePickerConfig Interface",3,"properties"],["examples",""],["title","Global Configuration (app.config.ts)","description","Set application-wide defaults for all date pickers",3,"code"],["variant","success","title","Best Practice"],["title","Component-Level Override","description","Override global configuration for specific components",3,"code"],["variant","warning","title","Component Providers"],["title","Route-Level Configuration","description","Apply configuration to all components within a route",3,"code"],["variant","info","title","Route Providers"],["title","Basic Usage","description","Simple date picker with default configuration",3,"code"],["title","Size Variants","description","Three size options: small, medium (default), and large",3,"code"],["title","Min/Max Date Restrictions","description","Restrict selectable dates to a specific range using provider configuration",3,"code"],["variant","warning","title","Note",1,"cmp-mb-3"],["placeholder","Next 3 months only"],[1,"cmp-text-muted","cmp-d-block","cmp-mt-2"],["title","Disabled Specific Dates","description","Disable specific dates (e.g., holidays, blackout dates) using provider configuration",3,"code"],["placeholder","Some dates disabled"],["title","First Day of Week","description","Configure calendar to start on Monday instead of Sunday using provider configuration",3,"code"],["placeholder","Week starts Monday"],["title","Timezone Support","description","Use IANA timezone identifiers for consistent date display across locations via provider configuration",3,"code"],[1,"cmp-d-flex","cmp-flex-column","cmp-gap-3"],["placeholder","Select date"],[1,"cmp-text-muted"],["title","Two-Way Binding","description","Use Angular 21's model signal for two-way binding",3,"code"],["variant","info",1,"cmp-mt-2"],["title","Date Range Picker","description","Enable date range selection (start and end date) with interactive highlights",3,"code"],["title","Disabled State","description","Disable the date picker when needed",3,"code"],["placeholder","Disabled date picker",3,"disabled"]],template:function(d,o){if(d&1&&(n(0,"playground-demo-page-template",0)(1,"div",1)(2,"div",2)(3,"h3",3),t(4,"Provider-Based Configuration System"),e(),n(5,"ui-alert",4),t(6," Default \u2192 Global (app.config.ts) \u2192 Component (providers array) "),l(7,"br"),n(8,"small"),t(9,"The date picker uses Angular's dependency injection to manage configuration. Each level overrides the previous one."),e()(),n(10,"div",5)(11,"div",6)(12,"div",7)(13,"div",8),t(14,"1"),e(),n(15,"div",9)(16,"strong"),t(17,"Default Config"),e(),n(18,"small"),t(19,"en-US, Sunday first"),e()()(),n(20,"div",10),t(21,"\u2192"),e(),n(22,"div",7)(23,"div",8),t(24,"2"),e(),n(25,"div",9)(26,"strong"),t(27,"Global Config"),e(),n(28,"small"),t(29,"app.config.ts providers"),e()()(),n(30,"div",10),t(31,"\u2192"),e(),n(32,"div",7)(33,"div",8),t(34,"3"),e(),n(35,"div",9)(36,"strong"),t(37,"Component Config"),e(),n(38,"small"),t(39,"Component providers"),e()()()()(),n(40,"div",11)(41,"h4",3),t(42,"Configuration Scenarios"),e(),l(43,"playground-global-config-demo")(44,"playground-component-override-demo")(45,"playground-no-config-demo"),e()(),l(46,"hr",12),n(47,"ui-alert",13),t(48," When no timezone is specified, the date picker uses the user's local timezone automatically. Specify a timezone for consistent display across locations. "),e(),n(49,"div",14)(50,"div")(51,"label",15),t(52,"Basic Date Picker"),e(),n(53,"ui-date-picker",16),k("dateChange",function(m){return o.onDateChange(m)}),e(),u(54,J,4,1,"ui-alert",17),e(),n(55,"div")(56,"label",15),t(57,"Date Range Picker"),e(),n(58,"ui-date-picker",18),E("rangeValueChange",function(m){return M(o.selectedRange,m)||(o.selectedRange=m),m}),e(),u(59,X,5,2,"ui-alert",17),e(),n(60,"div",19)(61,"div",20)(62,"label",15),t(63,"Small Size"),e(),l(64,"ui-date-picker",21),e(),n(65,"div",20)(66,"label",15),t(67,"Medium (Default)"),e(),l(68,"ui-date-picker",22),e(),n(69,"div",20)(70,"label",15),t(71,"Large Size"),e(),l(72,"ui-date-picker",23),e()(),n(73,"div")(74,"label",15),t(75,"Two-Way Binding"),e(),n(76,"ui-date-picker",24),E("valueChange",function(m){return M(o.boundDate,m)||(o.boundDate=m),m}),e(),u(77,q,4,1,"ui-alert",25),e()()(),n(78,"div",26)(79,"h3",27),t(80,"Provider-Based Configuration API"),e(),n(81,"ui-alert",28),t(82," The "),n(83,"code"),t(84,"@Input() config"),e(),t(85," property has been removed. Configuration is now managed through Angular's dependency injection system using providers. "),e(),l(86,"playground-api-table",29),n(87,"h3",30),t(88,"Component API"),e(),l(89,"playground-api-table",31)(90,"playground-api-table",32)(91,"playground-api-table",33),e(),n(92,"div",34)(93,"h3",27),t(94,"Provider-Based Configuration Examples"),e(),n(95,"playground-example-viewer",35)(96,"ui-alert",36),t(97," Define global configuration in app.config.ts for consistent behavior across your application. "),e()(),n(98,"playground-example-viewer",37)(99,"ui-alert",38),t(100," Use component providers to customize date pickers for specific features or sections. "),e()(),n(101,"playground-example-viewer",39)(102,"ui-alert",40),t(103," Perfect for multi-language applications or region-specific sections. "),e()(),l(104,"hr",12),n(105,"h3",27),t(106,"Component Usage Examples"),e(),n(107,"playground-example-viewer",41)(108,"ui-date-picker",16),k("dateChange",function(m){return o.onDateChange(m)}),e()(),n(109,"playground-example-viewer",42)(110,"div",19),l(111,"ui-date-picker",21)(112,"ui-date-picker",22)(113,"ui-date-picker",23),e()(),n(114,"playground-example-viewer",43)(115,"ui-alert",44),t(116," This example uses the legacy "),n(117,"code"),t(118,"@Input() config"),e(),t(119," pattern for demonstration. In production, use provider-based configuration as shown in the examples above. "),e(),l(120,"ui-date-picker",45),n(121,"small",46),t(122," Configure min/max dates via providers for production use. "),e()(),n(123,"playground-example-viewer",47)(124,"ui-alert",44),t(125," This example uses the legacy "),n(126,"code"),t(127,"@Input() config"),e(),t(128," pattern for demonstration. In production, use provider-based configuration as shown in the examples above. "),e(),l(129,"ui-date-picker",48),n(130,"small",46),t(131," Configure disabled dates via providers for production use. "),e()(),n(132,"playground-example-viewer",49)(133,"ui-alert",44),t(134," This example uses the legacy "),n(135,"code"),t(136,"@Input() config"),e(),t(137," pattern for demonstration. In production, use provider-based configuration as shown in the examples above. "),e(),l(138,"ui-date-picker",50),n(139,"small",46),t(140," Configure first day of week via providers for production use. "),e()(),n(141,"playground-example-viewer",51)(142,"ui-alert",44),t(143," This example uses the legacy "),n(144,"code"),t(145,"@Input() config"),e(),t(146," pattern for demonstration. In production, use provider-based configuration as shown in the examples above. "),e(),n(147,"div",52)(148,"div")(149,"label",15),t(150,"New York (America/New_York)"),e(),l(151,"ui-date-picker",53),n(152,"small",54),t(153,"Configure timezone via providers for production use."),e()(),n(154,"div")(155,"label",15),t(156,"Tokyo (Asia/Tokyo)"),e(),l(157,"ui-date-picker",53),n(158,"small",54),t(159,"Configure timezone via providers for production use."),e()(),n(160,"div")(161,"label",15),t(162,"London (Europe/London)"),e(),l(163,"ui-date-picker",53),n(164,"small",54),t(165,"Configure timezone via providers for production use."),e()()()(),n(166,"playground-example-viewer",55)(167,"ui-date-picker",24),E("valueChange",function(m){return M(o.boundDate,m)||(o.boundDate=m),m}),e(),u(168,H,2,1,"ui-alert",56),e(),n(169,"playground-example-viewer",57)(170,"ui-date-picker",18),E("rangeValueChange",function(m){return M(o.selectedRange,m)||(o.selectedRange=m),m}),e(),u(171,$,5,2,"ui-alert",17),e(),n(172,"playground-example-viewer",58),l(173,"ui-date-picker",59),e()()()),d&2){let g,m;c("tags",z(37,j))("apiReference",!0)("examples",!0),a(54),C(o.selectedDate()?54:-1),a(4),c("selectionMode",o.DatePickerSelectionModeEnum.Range),D("rangeValue",o.selectedRange),a(),C((g=o.selectedRange())!=null&&g.start?59:-1),a(5),c("size",o.DatePickerSizeEnum.Small),a(4),c("size",o.DatePickerSizeEnum.Medium),a(4),c("size",o.DatePickerSizeEnum.Large),a(4),D("value",o.boundDate),a(),C(o.boundDate()?77:-1),a(9),c("properties",o.providerConfigProps),a(3),c("properties",o.datePickerProps),a(),c("properties",o.datePickerOutputs),a(),c("properties",o.configProps),a(4),c("code",o.snippets.providerGlobal),a(3),c("code",o.snippets.providerComponent),a(3),c("code",o.snippets.providerRoute),a(6),c("code",o.snippets.basic),a(2),c("code",o.snippets.sizes),a(2),c("size",o.DatePickerSizeEnum.Small),a(),c("size",o.DatePickerSizeEnum.Medium),a(),c("size",o.DatePickerSizeEnum.Large),a(),c("code",o.snippets.minMax),a(9),c("code",o.snippets.disabledDates),a(9),c("code",o.snippets.firstDayOfWeek),a(9),c("code",o.snippets.timezone),a(25),c("code",o.snippets.twoWayBinding),a(),D("value",o.boundDate),a(),C(o.boundDate()?168:-1),a(),c("code",o.snippets.range||""),a(),c("selectionMode",o.DatePickerSelectionModeEnum.Range),D("rangeValue",o.selectedRange),a(),C((m=o.selectedRange())!=null&&m.start?171:-1),a(),c("code",o.snippets.disabled),a(),c("disabled",!0)}},dependencies:[P,W,K,G,Z,B,U,I],styles:["[_nghost-%COMP%]{display:block}ui-date-picker[_ngcontent-%COMP%]{display:block;width:100%}.config-precedence-visual[_ngcontent-%COMP%]{background:var(--cmp-surface);border:1px solid var(--cmp-border-color);border-radius:var(--cmp-radius);padding:2rem}.config-precedence-visual[_ngcontent-%COMP%]   .precedence-flow[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;gap:1rem;flex-wrap:wrap}.config-precedence-visual[_ngcontent-%COMP%]   .precedence-flow[_ngcontent-%COMP%]   .precedence-step[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.75rem;padding:1rem 1.5rem;background:var(--cmp-white);border:2px solid var(--cmp-primary);border-radius:var(--cmp-radius);min-width:180px}.config-precedence-visual[_ngcontent-%COMP%]   .precedence-flow[_ngcontent-%COMP%]   .precedence-step[_ngcontent-%COMP%]   .step-number[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:2rem;height:2rem;background:var(--cmp-primary);color:var(--cmp-white);border-radius:50%;font-weight:700;font-size:1rem;flex-shrink:0}.config-precedence-visual[_ngcontent-%COMP%]   .precedence-flow[_ngcontent-%COMP%]   .precedence-step[_ngcontent-%COMP%]   .step-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.25rem}.config-precedence-visual[_ngcontent-%COMP%]   .precedence-flow[_ngcontent-%COMP%]   .precedence-step[_ngcontent-%COMP%]   .step-content[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:.875rem;color:var(--cmp-text-primary);font-weight:600}.config-precedence-visual[_ngcontent-%COMP%]   .precedence-flow[_ngcontent-%COMP%]   .precedence-step[_ngcontent-%COMP%]   .step-content[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:.75rem;color:var(--cmp-text-secondary)}.config-precedence-visual[_ngcontent-%COMP%]   .precedence-flow[_ngcontent-%COMP%]   .precedence-arrow[_ngcontent-%COMP%]{font-size:1.5rem;color:var(--cmp-primary);font-weight:700}.config-scenarios[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:1.25rem;font-weight:600;color:var(--cmp-text-primary);margin-bottom:1rem}"],changeDetection:0})}}return r})();export{xe as DatePickerDemoComponent};
