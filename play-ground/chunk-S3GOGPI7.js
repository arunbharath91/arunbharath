import{a as L}from"./chunk-7G6ASC32.js";import{a as W}from"./chunk-N6NA3XCO.js";import{b as G}from"./chunk-G7ZIQJ6X.js";import{Aa as F,Ba as A,Ca as K,Da as p,Ea as u,l as N,wa as I,xa as y,ya as C,za as P}from"./chunk-OAN3UY7U.js";import"./chunk-Q6P3UIUZ.js";import"./chunk-V3AM2RAD.js";import"./chunk-H2UPXF7Z.js";import"./chunk-5LJC7C5H.js";import"./chunk-BQIXJMI7.js";import{$b as M,Fc as v,Gc as z,Hb as b,Ib as O,Nb as c,Ob as n,Pb as e,Qb as d,Zc as f,bc as h,cb as r,pc as t,qc as s,rc as T,tb as g,xc as E,ya as _,yc as x,zc as k}from"./chunk-FEOD6RYX.js";import"./chunk-EU2KAMEK.js";import"./chunk-DAQOROHW.js";var R={providerGlobal:`// app.config.ts - Global configuration for all date pickers
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
}`,disabled:`<ui-date-picker
  [disabled]="true"
  placeholder="Disabled date picker"
/>`};var Z=(()=>{class a{constructor(){this.configService=new p,this.activeConfig=f(()=>this.configService.getConfig())}formatConfig(){let o=this.activeConfig();return JSON.stringify({locale:o.locale,firstDayOfWeek:o.firstDayOfWeek,timeZone:o.timeZone||"browser default"},null,2)}static{this.\u0275fac=function(m){return new(m||a)}}static{this.\u0275cmp=g({type:a,selectors:[["playground-global-config-demo"]],features:[v([p])],decls:31,vars:1,consts:[[1,"config-demo-card"],[1,"config-header"],[1,"badge","badge-primary"],[1,"config-info"],[1,"config-display"],[1,"date-picker-demo"],[1,"cmp-form-label"],["placeholder","Select a date"],[1,"code-example"]],template:function(m,i){m&1&&(n(0,"div",0)(1,"div",1)(2,"h4"),t(3,"Global Configuration"),e(),n(4,"span",2),t(5,"App-Level Providers"),e()(),n(6,"div",3)(7,"p")(8,"strong"),t(9,"Configuration Source:"),e(),t(10," app.config.ts providers"),e(),n(11,"p")(12,"strong"),t(13,"Precedence:"),e(),t(14," Overrides default configuration"),e()(),n(15,"div",4)(16,"h5"),t(17,"Active Configuration:"),e(),n(18,"pre")(19,"code"),t(20),e()()(),n(21,"div",5)(22,"label",6),t(23,"Date Picker (Global: en-US, Monday first)"),e(),d(24,"ui-date-picker",7),e(),n(25,"div",8)(26,"h5"),t(27,"Global Configuration (app.config.ts):"),e(),n(28,"pre")(29,"code"),t(30,`// app.config.ts
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
};`),e()()()()),m&2&&(r(20),s(i.formatConfig()))},dependencies:[u],styles:[".config-demo-card[_ngcontent-%COMP%]{border:1px solid var(--cmp-border-color);border-radius:var(--cmp-radius);padding:1.5rem;background:var(--cmp-surface);margin-bottom:1rem}.config-demo-card[_ngcontent-%COMP%]   .config-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem;padding-bottom:.75rem;border-bottom:1px solid var(--cmp-border-color)}.config-demo-card[_ngcontent-%COMP%]   .config-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin:0;font-size:1.125rem;font-weight:600;color:var(--cmp-text-primary)}.config-demo-card[_ngcontent-%COMP%]   .config-header[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%]{padding:.25rem .75rem;border-radius:1rem;font-size:.75rem;font-weight:600;text-transform:uppercase}.config-demo-card[_ngcontent-%COMP%]   .config-header[_ngcontent-%COMP%]   .badge.badge-primary[_ngcontent-%COMP%]{background:var(--cmp-primary);color:var(--cmp-white)}.config-demo-card[_ngcontent-%COMP%]   .config-header[_ngcontent-%COMP%]   .badge.badge-warning[_ngcontent-%COMP%]{background:var(--cmp-warning);color:var(--cmp-white)}.config-demo-card[_ngcontent-%COMP%]   .config-header[_ngcontent-%COMP%]   .badge.badge-info[_ngcontent-%COMP%]{background:var(--cmp-info);color:var(--cmp-white)}.config-demo-card[_ngcontent-%COMP%]   .config-info[_ngcontent-%COMP%]{margin-bottom:1rem}.config-demo-card[_ngcontent-%COMP%]   .config-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:.25rem 0;font-size:.875rem;color:var(--cmp-text-secondary)}.config-demo-card[_ngcontent-%COMP%]   .config-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:var(--cmp-text-primary)}.config-demo-card[_ngcontent-%COMP%]   .config-display[_ngcontent-%COMP%]{margin-bottom:1.5rem}.config-demo-card[_ngcontent-%COMP%]   .config-display[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{margin:0 0 .5rem;font-size:.875rem;font-weight:600;color:var(--cmp-text-primary);text-transform:uppercase;letter-spacing:.5px}.config-demo-card[_ngcontent-%COMP%]   .config-display[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{background:var(--cmp-code-bg);border:1px solid var(--cmp-border-light);border-radius:var(--cmp-radius-sm);padding:var(--cmp-spacing-4);margin:0;overflow-x:auto}.config-demo-card[_ngcontent-%COMP%]   .config-display[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{font-family:Courier New,monospace;font-size:var(--cmp-font-sm);color:var(--cmp-gray-200)}.config-demo-card[_ngcontent-%COMP%]   .date-picker-demo[_ngcontent-%COMP%]{margin-bottom:1.5rem}.config-demo-card[_ngcontent-%COMP%]   .date-picker-demo[_ngcontent-%COMP%]   .cmp-form-label[_ngcontent-%COMP%]{display:block;margin-bottom:.5rem;font-weight:var(--cmp-font-medium);color:var(--cmp-text-primary)}.config-demo-card[_ngcontent-%COMP%]   .code-example[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{margin:0 0 .5rem;font-size:var(--cmp-font-sm);font-weight:var(--cmp-font-semibold);color:var(--cmp-text-primary);text-transform:uppercase;letter-spacing:.5px}.config-demo-card[_ngcontent-%COMP%]   .code-example[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{background:var(--cmp-code-bg);border:1px solid var(--cmp-border-light);border-radius:var(--cmp-radius-sm);padding:var(--cmp-spacing-4);margin:0;overflow-x:auto}.config-demo-card[_ngcontent-%COMP%]   .code-example[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{font-family:Courier New,monospace;font-size:var(--cmp-font-sm);color:var(--cmp-gray-200);line-height:1.5}"],changeDetection:0})}}return a})();var B=(()=>{class a{constructor(){this.configService=new p,this.activeConfig=f(()=>this.configService.getConfig())}formatConfig(){let o=this.activeConfig();return JSON.stringify({locale:o.locale,firstDayOfWeek:o.firstDayOfWeek,timeZone:o.timeZone||"browser default"},null,2)}static{this.\u0275fac=function(m){return new(m||a)}}static{this.\u0275cmp=g({type:a,selectors:[["playground-component-override-demo"]],features:[v([p,{provide:K,useValue:{locale:C.French,firstDayOfWeek:P.Monday}}])],decls:31,vars:1,consts:[[1,"config-demo-card"],[1,"config-header"],[1,"badge","badge-warning"],[1,"config-info"],[1,"config-display"],[1,"date-picker-demo"],[1,"cmp-form-label"],["placeholder","S\xE9lectionner une date"],[1,"code-example"]],template:function(m,i){m&1&&(n(0,"div",0)(1,"div",1)(2,"h4"),t(3,"Component-Level Override"),e(),n(4,"span",2),t(5,"Component Providers"),e()(),n(6,"div",3)(7,"p")(8,"strong"),t(9,"Configuration Source:"),e(),t(10," Component providers array"),e(),n(11,"p")(12,"strong"),t(13,"Precedence:"),e(),t(14," Overrides global configuration"),e()(),n(15,"div",4)(16,"h5"),t(17,"Active Configuration:"),e(),n(18,"pre")(19,"code"),t(20),e()()(),n(21,"div",5)(22,"label",6),t(23,"Date Picker (French locale, Monday first)"),e(),d(24,"ui-date-picker",7),e(),n(25,"div",8)(26,"h5"),t(27,"Provider Configuration:"),e(),n(28,"pre")(29,"code"),t(30,`@Component({
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
export class MyComponent { }`),e()()()()),m&2&&(r(20),s(i.formatConfig()))},dependencies:[u],styles:[".config-demo-card[_ngcontent-%COMP%]{border:1px solid var(--cmp-border-color);border-radius:var(--cmp-radius);padding:1.5rem;background:var(--cmp-surface);margin-bottom:1rem}.config-demo-card[_ngcontent-%COMP%]   .config-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem;padding-bottom:.75rem;border-bottom:1px solid var(--cmp-border-color)}.config-demo-card[_ngcontent-%COMP%]   .config-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin:0;font-size:1.125rem;font-weight:600;color:var(--cmp-text-primary)}.config-demo-card[_ngcontent-%COMP%]   .config-header[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%]{padding:.25rem .75rem;border-radius:1rem;font-size:.75rem;font-weight:600;text-transform:uppercase}.config-demo-card[_ngcontent-%COMP%]   .config-header[_ngcontent-%COMP%]   .badge.badge-primary[_ngcontent-%COMP%]{background:var(--cmp-primary);color:var(--cmp-white)}.config-demo-card[_ngcontent-%COMP%]   .config-header[_ngcontent-%COMP%]   .badge.badge-warning[_ngcontent-%COMP%]{background:var(--cmp-warning);color:var(--cmp-white)}.config-demo-card[_ngcontent-%COMP%]   .config-header[_ngcontent-%COMP%]   .badge.badge-info[_ngcontent-%COMP%]{background:var(--cmp-info);color:var(--cmp-white)}.config-demo-card[_ngcontent-%COMP%]   .config-info[_ngcontent-%COMP%]{margin-bottom:1rem}.config-demo-card[_ngcontent-%COMP%]   .config-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:.25rem 0;font-size:.875rem;color:var(--cmp-text-secondary)}.config-demo-card[_ngcontent-%COMP%]   .config-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:var(--cmp-text-primary)}.config-demo-card[_ngcontent-%COMP%]   .config-display[_ngcontent-%COMP%]{margin-bottom:1.5rem}.config-demo-card[_ngcontent-%COMP%]   .config-display[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{margin:0 0 .5rem;font-size:.875rem;font-weight:600;color:var(--cmp-text-primary);text-transform:uppercase;letter-spacing:.5px}.config-demo-card[_ngcontent-%COMP%]   .config-display[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{background:var(--cmp-code-bg);border:1px solid var(--cmp-border-light);border-radius:var(--cmp-radius-sm);padding:var(--cmp-spacing-4);margin:0;overflow-x:auto}.config-demo-card[_ngcontent-%COMP%]   .config-display[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{font-family:Courier New,monospace;font-size:var(--cmp-font-sm);color:var(--cmp-gray-200)}.config-demo-card[_ngcontent-%COMP%]   .date-picker-demo[_ngcontent-%COMP%]{margin-bottom:1.5rem}.config-demo-card[_ngcontent-%COMP%]   .date-picker-demo[_ngcontent-%COMP%]   .cmp-form-label[_ngcontent-%COMP%]{display:block;margin-bottom:.5rem;font-weight:var(--cmp-font-medium);color:var(--cmp-text-primary)}.config-demo-card[_ngcontent-%COMP%]   .code-example[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{margin:0 0 .5rem;font-size:var(--cmp-font-sm);font-weight:var(--cmp-font-semibold);color:var(--cmp-text-primary);text-transform:uppercase;letter-spacing:.5px}.config-demo-card[_ngcontent-%COMP%]   .code-example[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{background:var(--cmp-code-bg);border:1px solid var(--cmp-border-light);border-radius:var(--cmp-radius-sm);padding:var(--cmp-spacing-4);margin:0;overflow-x:auto}.config-demo-card[_ngcontent-%COMP%]   .code-example[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{font-family:Courier New,monospace;font-size:var(--cmp-font-sm);color:var(--cmp-gray-200);line-height:1.5}"],changeDetection:0})}}return a})();var U=(()=>{class a{constructor(){this.configService=new p,this.activeConfig=f(()=>this.configService.getConfig())}formatConfig(){let o=this.activeConfig();return JSON.stringify({locale:o.locale,firstDayOfWeek:o.firstDayOfWeek,timeZone:o.timeZone||"browser default"},null,2)}static{this.\u0275fac=function(m){return new(m||a)}}static{this.\u0275cmp=g({type:a,selectors:[["playground-no-config-demo"]],features:[v([p])],decls:31,vars:1,consts:[[1,"config-demo-card"],[1,"config-header"],[1,"badge","badge-info"],[1,"config-info"],[1,"config-display"],[1,"date-picker-demo"],[1,"cmp-form-label"],["placeholder","Select a date"],[1,"code-example"]],template:function(m,i){m&1&&(n(0,"div",0)(1,"div",1)(2,"h4"),t(3,"Default Configuration Only"),e(),n(4,"span",2),t(5,"No Providers"),e()(),n(6,"div",3)(7,"p")(8,"strong"),t(9,"Configuration Source:"),e(),t(10," Default values only"),e(),n(11,"p")(12,"strong"),t(13,"Precedence:"),e(),t(14," Uses hardcoded defaults (no global or component config)"),e()(),n(15,"div",4)(16,"h5"),t(17,"Active Configuration:"),e(),n(18,"pre")(19,"code"),t(20),e()()(),n(21,"div",5)(22,"label",6),t(23,"Date Picker (Default: en-US, Sunday first)"),e(),d(24,"ui-date-picker",7),e(),n(25,"div",8)(26,"h5"),t(27,"Component Setup:"),e(),n(28,"pre")(29,"code"),t(30,`@Component({
  selector: 'my-component',
  providers: [DatePickerConfigService] // No token provider
})
export class MyComponent { 
  // Uses default configuration:
  // - locale: 'en-US'
  // - firstDayOfWeek: 0 (Sunday)
}`),e()()()()),m&2&&(r(20),s(i.formatConfig()))},dependencies:[u],styles:[".config-demo-card[_ngcontent-%COMP%]{border:1px solid var(--cmp-border-color);border-radius:var(--cmp-radius);padding:1.5rem;background:var(--cmp-surface);margin-bottom:1rem}.config-demo-card[_ngcontent-%COMP%]   .config-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem;padding-bottom:.75rem;border-bottom:1px solid var(--cmp-border-color)}.config-demo-card[_ngcontent-%COMP%]   .config-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin:0;font-size:1.125rem;font-weight:600;color:var(--cmp-text-primary)}.config-demo-card[_ngcontent-%COMP%]   .config-header[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%]{padding:.25rem .75rem;border-radius:1rem;font-size:.75rem;font-weight:600;text-transform:uppercase}.config-demo-card[_ngcontent-%COMP%]   .config-header[_ngcontent-%COMP%]   .badge.badge-primary[_ngcontent-%COMP%]{background:var(--cmp-primary);color:var(--cmp-white)}.config-demo-card[_ngcontent-%COMP%]   .config-header[_ngcontent-%COMP%]   .badge.badge-warning[_ngcontent-%COMP%]{background:var(--cmp-warning);color:var(--cmp-white)}.config-demo-card[_ngcontent-%COMP%]   .config-header[_ngcontent-%COMP%]   .badge.badge-info[_ngcontent-%COMP%]{background:var(--cmp-info);color:var(--cmp-white)}.config-demo-card[_ngcontent-%COMP%]   .config-info[_ngcontent-%COMP%]{margin-bottom:1rem}.config-demo-card[_ngcontent-%COMP%]   .config-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:.25rem 0;font-size:.875rem;color:var(--cmp-text-secondary)}.config-demo-card[_ngcontent-%COMP%]   .config-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:var(--cmp-text-primary)}.config-demo-card[_ngcontent-%COMP%]   .config-display[_ngcontent-%COMP%]{margin-bottom:1.5rem}.config-demo-card[_ngcontent-%COMP%]   .config-display[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{margin:0 0 .5rem;font-size:.875rem;font-weight:600;color:var(--cmp-text-primary);text-transform:uppercase;letter-spacing:.5px}.config-demo-card[_ngcontent-%COMP%]   .config-display[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{background:var(--cmp-code-bg);border:1px solid var(--cmp-border-light);border-radius:var(--cmp-radius-sm);padding:var(--cmp-spacing-4);margin:0;overflow-x:auto}.config-demo-card[_ngcontent-%COMP%]   .config-display[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{font-family:Courier New,monospace;font-size:var(--cmp-font-sm);color:var(--cmp-gray-200)}.config-demo-card[_ngcontent-%COMP%]   .date-picker-demo[_ngcontent-%COMP%]{margin-bottom:1.5rem}.config-demo-card[_ngcontent-%COMP%]   .date-picker-demo[_ngcontent-%COMP%]   .cmp-form-label[_ngcontent-%COMP%]{display:block;margin-bottom:.5rem;font-weight:var(--cmp-font-medium);color:var(--cmp-text-primary)}.config-demo-card[_ngcontent-%COMP%]   .code-example[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{margin:0 0 .5rem;font-size:var(--cmp-font-sm);font-weight:var(--cmp-font-semibold);color:var(--cmp-text-primary);text-transform:uppercase;letter-spacing:.5px}.config-demo-card[_ngcontent-%COMP%]   .code-example[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{background:var(--cmp-code-bg);border:1px solid var(--cmp-border-light);border-radius:var(--cmp-radius-sm);padding:var(--cmp-spacing-4);margin:0;overflow-x:auto}.config-demo-card[_ngcontent-%COMP%]   .code-example[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{font-family:Courier New,monospace;font-size:var(--cmp-font-sm);color:var(--cmp-gray-200);line-height:1.5}"],changeDetection:0})}}return a})();var V=()=>["Form Control","Signal","i18n","Calendar"];function j(a,w){if(a&1&&(n(0,"ui-alert",17),t(1," Selected: "),n(2,"strong"),t(3),e()()),a&2){let o=h();r(3),s(o.selectedDate().toLocaleDateString())}}function J(a,w){if(a&1&&(n(0,"ui-alert",24),t(1," Bound Value: "),n(2,"strong"),t(3),e()()),a&2){let o=h();r(3),s(o.boundDate().toLocaleDateString())}}function Y(a,w){if(a&1&&(n(0,"ui-alert",55),t(1),e()),a&2){let o=h();r(),T(" Bound Value: ",o.boundDate().toLocaleDateString()," ")}}var he=(()=>{class a{constructor(){this.configService=new p,this.snippets=R,this.globalConfig=f(()=>this.configService.getConfig()),this.modifiedGlobalLocale=_(C.EnglishUS),this.modifiedGlobalFirstDay=_(P.Monday),this.selectedDate=_(null),this.DatePickerSizeEnum=I,this.boundDate=_(null),this.minMaxConfig=F(new Date,new Date(new Date().setMonth(new Date().getMonth()+3))),this.disabledDatesConfig=A([new Date(2026,4,1),new Date(2026,4,15),new Date(2026,4,25)]),this.mondayFirstConfig={firstDayOfWeek:P.Monday},this.timezoneConfig={locale:C.EnglishUS,timeZone:y.NewYork},this.timezoneConfigTokyo={locale:C.Japanese,timeZone:y.Tokyo},this.timezoneConfigLondon={locale:C.EnglishGB,timeZone:y.London},this.datePickerProps=[{name:"placeholder",type:"string",default:"'Select date'",description:"Placeholder text for the input field."},{name:"size",type:"DatePickerSize ('sm' | 'md' | 'lg')",default:"'md'",description:"Size variant of the date picker."},{name:"disabled",type:"boolean",default:"false",description:"Whether the date picker is disabled."},{name:"value",type:"Date | null",default:"null",description:"Two-way bindable model signal for the selected date."}],this.datePickerOutputs=[{name:"dateChange",type:"OutputEmitterRef<Date | null>",description:"Emits when a date is selected or cleared."},{name:"valueChange",type:"OutputEmitterRef<Date | null>",description:"Emits when the model value changes (for two-way binding)."}],this.providerConfigProps=[{name:"DATE_PICKER_CONFIG_TOKEN",type:"InjectionToken<Partial<IDatePickerConfig>>",default:"undefined",description:"Injection token for providing date picker configuration at app or component level."},{name:"DatePickerConfigService",type:"Injectable",default:"N/A",description:"Service that merges configuration from multiple sources (Default \u2192 Global \u2192 Component)."}],this.configProps=[{name:"minDate",type:"Date",default:"undefined",description:"Minimum selectable date."},{name:"maxDate",type:"Date",default:"undefined",description:"Maximum selectable date."},{name:"disabledDates",type:"Date[]",default:"undefined",description:"Array of dates that should be disabled."},{name:"locale",type:"Locale (LocaleEnum | string)",default:"'en-US'",description:"BCP 47 locale identifier. Use LocaleEnum for common locales."},{name:"timeZone",type:"TimeZone (TimeZoneEnum | string)",default:"undefined",description:"IANA timezone identifier. Use TimeZoneEnum for common timezones."},{name:"firstDayOfWeek",type:"FirstDayOfWeek (0-6)",default:"0",description:"First day of the week. Use FirstDayOfWeekEnum for clarity."}]}onDateChange(o){this.selectedDate.set(o)}formatConfig(o){return JSON.stringify({locale:o.locale,firstDayOfWeek:o.firstDayOfWeek,timeZone:o.timeZone||"browser default",minDate:o.minDate?"set":"undefined",maxDate:o.maxDate?"set":"undefined",disabledDates:o.disabledDates?`${o.disabledDates.length} dates`:"undefined"},null,2)}updateGlobalLocale(o){this.modifiedGlobalLocale.set(o)}updateGlobalFirstDay(o){this.modifiedGlobalFirstDay.set(o)}static{this.\u0275fac=function(m){return new(m||a)}}static{this.\u0275cmp=g({type:a,selectors:[["playground-date-picker-demo"]],decls:166,vars:31,consts:[["title","Date Picker","description","A minimal, accessible date picker component with calendar dropdown, built with Angular 21 signals and Intl.DateTimeFormat",3,"tags","apiReference","examples"],["demo",""],[1,"cmp-mb-5"],[1,"cmp-mb-3"],["variant","info","title","Configuration Precedence",1,"cmp-mb-4"],[1,"config-precedence-visual","cmp-mb-4"],[1,"precedence-flow"],[1,"precedence-step"],[1,"step-number"],[1,"step-content"],[1,"precedence-arrow"],[1,"config-scenarios"],[1,"cmp-my-5"],["variant","info","title","Timezone Behavior",1,"cmp-mb-4"],[1,"cmp-d-flex","cmp-flex-column","cmp-gap-4"],[1,"cmp-form-label"],["placeholder","Select a date",3,"dateChange"],["variant","success",1,"cmp-mt-2"],[1,"cmp-d-flex","cmp-gap-3"],[1,"cmp-flex-1"],["placeholder","Small",3,"size"],["placeholder","Medium",3,"size"],["placeholder","Large",3,"size"],["placeholder","Select date",3,"valueChange","value"],["variant","primary",1,"cmp-mt-2"],["api",""],[1,"cmp-mb-4"],["variant","info","title","Migration Note",1,"cmp-mb-4"],["title","Provider Configuration",3,"properties"],[1,"cmp-mb-4","cmp-mt-5"],["title","Date Picker Inputs",3,"properties"],["title","Date Picker Outputs",3,"properties"],["title","IDatePickerConfig Interface",3,"properties"],["examples",""],["title","Global Configuration (app.config.ts)","description","Set application-wide defaults for all date pickers",3,"code"],["variant","success","title","Best Practice"],["title","Component-Level Override","description","Override global configuration for specific components",3,"code"],["variant","warning","title","Component Providers"],["title","Route-Level Configuration","description","Apply configuration to all components within a route",3,"code"],["variant","info","title","Route Providers"],["title","Basic Usage","description","Simple date picker with default configuration",3,"code"],["title","Size Variants","description","Three size options: small, medium (default), and large",3,"code"],["title","Min/Max Date Restrictions","description","Restrict selectable dates to a specific range using provider configuration",3,"code"],["variant","warning","title","Note",1,"cmp-mb-3"],["placeholder","Next 3 months only"],[1,"cmp-text-muted","cmp-d-block","cmp-mt-2"],["title","Disabled Specific Dates","description","Disable specific dates (e.g., holidays, blackout dates) using provider configuration",3,"code"],["placeholder","Some dates disabled"],["title","First Day of Week","description","Configure calendar to start on Monday instead of Sunday using provider configuration",3,"code"],["placeholder","Week starts Monday"],["title","Timezone Support","description","Use IANA timezone identifiers for consistent date display across locations via provider configuration",3,"code"],[1,"cmp-d-flex","cmp-flex-column","cmp-gap-3"],["placeholder","Select date"],[1,"cmp-text-muted"],["title","Two-Way Binding","description","Use Angular 21's model signal for two-way binding",3,"code"],["variant","info",1,"cmp-mt-2"],["title","Disabled State","description","Disable the date picker when needed",3,"code"],["placeholder","Disabled date picker",3,"disabled"]],template:function(m,i){m&1&&(n(0,"playground-demo-page-template",0)(1,"div",1)(2,"div",2)(3,"h3",3),t(4,"Provider-Based Configuration System"),e(),n(5,"ui-alert",4),t(6," Default \u2192 Global (app.config.ts) \u2192 Component (providers array) "),d(7,"br"),n(8,"small"),t(9,"The date picker uses Angular's dependency injection to manage configuration. Each level overrides the previous one."),e()(),n(10,"div",5)(11,"div",6)(12,"div",7)(13,"div",8),t(14,"1"),e(),n(15,"div",9)(16,"strong"),t(17,"Default Config"),e(),n(18,"small"),t(19,"en-US, Sunday first"),e()()(),n(20,"div",10),t(21,"\u2192"),e(),n(22,"div",7)(23,"div",8),t(24,"2"),e(),n(25,"div",9)(26,"strong"),t(27,"Global Config"),e(),n(28,"small"),t(29,"app.config.ts providers"),e()()(),n(30,"div",10),t(31,"\u2192"),e(),n(32,"div",7)(33,"div",8),t(34,"3"),e(),n(35,"div",9)(36,"strong"),t(37,"Component Config"),e(),n(38,"small"),t(39,"Component providers"),e()()()()(),n(40,"div",11)(41,"h4",3),t(42,"Configuration Scenarios"),e(),d(43,"playground-global-config-demo")(44,"playground-component-override-demo")(45,"playground-no-config-demo"),e()(),d(46,"hr",12),n(47,"ui-alert",13),t(48," When no timezone is specified, the date picker uses the user's local timezone automatically. Specify a timezone for consistent display across locations. "),e(),n(49,"div",14)(50,"div")(51,"label",15),t(52,"Basic Date Picker"),e(),n(53,"ui-date-picker",16),M("dateChange",function(l){return i.onDateChange(l)}),e(),b(54,j,4,1,"ui-alert",17),e(),n(55,"div",18)(56,"div",19)(57,"label",15),t(58,"Small Size"),e(),d(59,"ui-date-picker",20),e(),n(60,"div",19)(61,"label",15),t(62,"Medium (Default)"),e(),d(63,"ui-date-picker",21),e(),n(64,"div",19)(65,"label",15),t(66,"Large Size"),e(),d(67,"ui-date-picker",22),e()(),n(68,"div")(69,"label",15),t(70,"Two-Way Binding"),e(),n(71,"ui-date-picker",23),k("valueChange",function(l){return x(i.boundDate,l)||(i.boundDate=l),l}),e(),b(72,J,4,1,"ui-alert",24),e()()(),n(73,"div",25)(74,"h3",26),t(75,"Provider-Based Configuration API"),e(),n(76,"ui-alert",27),t(77," The "),n(78,"code"),t(79,"@Input() config"),e(),t(80," property has been removed. Configuration is now managed through Angular's dependency injection system using providers. "),e(),d(81,"playground-api-table",28),n(82,"h3",29),t(83,"Component API"),e(),d(84,"playground-api-table",30)(85,"playground-api-table",31)(86,"playground-api-table",32),e(),n(87,"div",33)(88,"h3",26),t(89,"Provider-Based Configuration Examples"),e(),n(90,"playground-example-viewer",34)(91,"ui-alert",35),t(92," Define global configuration in app.config.ts for consistent behavior across your application. "),e()(),n(93,"playground-example-viewer",36)(94,"ui-alert",37),t(95," Use component providers to customize date pickers for specific features or sections. "),e()(),n(96,"playground-example-viewer",38)(97,"ui-alert",39),t(98," Perfect for multi-language applications or region-specific sections. "),e()(),d(99,"hr",12),n(100,"h3",26),t(101,"Component Usage Examples"),e(),n(102,"playground-example-viewer",40)(103,"ui-date-picker",16),M("dateChange",function(l){return i.onDateChange(l)}),e()(),n(104,"playground-example-viewer",41)(105,"div",18),d(106,"ui-date-picker",20)(107,"ui-date-picker",21)(108,"ui-date-picker",22),e()(),n(109,"playground-example-viewer",42)(110,"ui-alert",43),t(111," This example uses the legacy "),n(112,"code"),t(113,"@Input() config"),e(),t(114," pattern for demonstration. In production, use provider-based configuration as shown in the examples above. "),e(),d(115,"ui-date-picker",44),n(116,"small",45),t(117," Configure min/max dates via providers for production use. "),e()(),n(118,"playground-example-viewer",46)(119,"ui-alert",43),t(120," This example uses the legacy "),n(121,"code"),t(122,"@Input() config"),e(),t(123," pattern for demonstration. In production, use provider-based configuration as shown in the examples above. "),e(),d(124,"ui-date-picker",47),n(125,"small",45),t(126," Configure disabled dates via providers for production use. "),e()(),n(127,"playground-example-viewer",48)(128,"ui-alert",43),t(129," This example uses the legacy "),n(130,"code"),t(131,"@Input() config"),e(),t(132," pattern for demonstration. In production, use provider-based configuration as shown in the examples above. "),e(),d(133,"ui-date-picker",49),n(134,"small",45),t(135," Configure first day of week via providers for production use. "),e()(),n(136,"playground-example-viewer",50)(137,"ui-alert",43),t(138," This example uses the legacy "),n(139,"code"),t(140,"@Input() config"),e(),t(141," pattern for demonstration. In production, use provider-based configuration as shown in the examples above. "),e(),n(142,"div",51)(143,"div")(144,"label",15),t(145,"New York (America/New_York)"),e(),d(146,"ui-date-picker",52),n(147,"small",53),t(148,"Configure timezone via providers for production use."),e()(),n(149,"div")(150,"label",15),t(151,"Tokyo (Asia/Tokyo)"),e(),d(152,"ui-date-picker",52),n(153,"small",53),t(154,"Configure timezone via providers for production use."),e()(),n(155,"div")(156,"label",15),t(157,"London (Europe/London)"),e(),d(158,"ui-date-picker",52),n(159,"small",53),t(160,"Configure timezone via providers for production use."),e()()()(),n(161,"playground-example-viewer",54)(162,"ui-date-picker",23),k("valueChange",function(l){return x(i.boundDate,l)||(i.boundDate=l),l}),e(),b(163,Y,2,1,"ui-alert",55),e(),n(164,"playground-example-viewer",56),d(165,"ui-date-picker",57),e()()()),m&2&&(c("tags",z(30,V))("apiReference",!0)("examples",!0),r(54),O(i.selectedDate()?54:-1),r(5),c("size",i.DatePickerSizeEnum.Small),r(4),c("size",i.DatePickerSizeEnum.Medium),r(4),c("size",i.DatePickerSizeEnum.Large),r(4),E("value",i.boundDate),r(),O(i.boundDate()?72:-1),r(9),c("properties",i.providerConfigProps),r(3),c("properties",i.datePickerProps),r(),c("properties",i.datePickerOutputs),r(),c("properties",i.configProps),r(4),c("code",i.snippets.providerGlobal),r(3),c("code",i.snippets.providerComponent),r(3),c("code",i.snippets.providerRoute),r(6),c("code",i.snippets.basic),r(2),c("code",i.snippets.sizes),r(2),c("size",i.DatePickerSizeEnum.Small),r(),c("size",i.DatePickerSizeEnum.Medium),r(),c("size",i.DatePickerSizeEnum.Large),r(),c("code",i.snippets.minMax),r(9),c("code",i.snippets.disabledDates),r(9),c("code",i.snippets.firstDayOfWeek),r(9),c("code",i.snippets.timezone),r(25),c("code",i.snippets.twoWayBinding),r(),E("value",i.boundDate),r(),O(i.boundDate()?163:-1),r(),c("code",i.snippets.disabled),r(),c("disabled",!0))},dependencies:[u,G,L,W,Z,B,U,N],styles:["[_nghost-%COMP%]{display:block}ui-date-picker[_ngcontent-%COMP%]{display:block;width:100%}.config-precedence-visual[_ngcontent-%COMP%]{background:var(--cmp-surface);border:1px solid var(--cmp-border-color);border-radius:var(--cmp-radius);padding:2rem}.config-precedence-visual[_ngcontent-%COMP%]   .precedence-flow[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;gap:1rem;flex-wrap:wrap}.config-precedence-visual[_ngcontent-%COMP%]   .precedence-flow[_ngcontent-%COMP%]   .precedence-step[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.75rem;padding:1rem 1.5rem;background:var(--cmp-white);border:2px solid var(--cmp-primary);border-radius:var(--cmp-radius);min-width:180px}.config-precedence-visual[_ngcontent-%COMP%]   .precedence-flow[_ngcontent-%COMP%]   .precedence-step[_ngcontent-%COMP%]   .step-number[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:2rem;height:2rem;background:var(--cmp-primary);color:var(--cmp-white);border-radius:50%;font-weight:700;font-size:1rem;flex-shrink:0}.config-precedence-visual[_ngcontent-%COMP%]   .precedence-flow[_ngcontent-%COMP%]   .precedence-step[_ngcontent-%COMP%]   .step-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.25rem}.config-precedence-visual[_ngcontent-%COMP%]   .precedence-flow[_ngcontent-%COMP%]   .precedence-step[_ngcontent-%COMP%]   .step-content[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:.875rem;color:var(--cmp-text-primary);font-weight:600}.config-precedence-visual[_ngcontent-%COMP%]   .precedence-flow[_ngcontent-%COMP%]   .precedence-step[_ngcontent-%COMP%]   .step-content[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:.75rem;color:var(--cmp-text-secondary)}.config-precedence-visual[_ngcontent-%COMP%]   .precedence-flow[_ngcontent-%COMP%]   .precedence-arrow[_ngcontent-%COMP%]{font-size:1.5rem;color:var(--cmp-primary);font-weight:700}.config-scenarios[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:1.25rem;font-weight:600;color:var(--cmp-text-primary);margin-bottom:1rem}"],changeDetection:0})}}return a})();export{he as DatePickerDemoComponent};
