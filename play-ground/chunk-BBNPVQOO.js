import{a as G}from"./chunk-FQJYJGHS.js";import{a as L}from"./chunk-HTEIFTSL.js";import{b as K}from"./chunk-3ZTLAYV3.js";import{Aa as u,sa as z,ta as y,ua as C,va as P,wa as I,xa as F,ya as A,za as p}from"./chunk-SKZWG7DQ.js";import"./chunk-NCYMELVQ.js";import"./chunk-7JC322ER.js";import"./chunk-H2UPXF7Z.js";import"./chunk-COQAZMJT.js";import"./chunk-TYY62FAW.js";import{Cb as O,Db as b,Ib as c,Jb as n,Kb as e,Lb as d,Qc as f,Wb as E,Yb as h,bb as r,kc as t,lc as s,mc as T,qb as g,sc as M,tc as x,uc as k,xa as _,xc as v,yc as N}from"./chunk-BZBWJHGN.js";import"./chunk-EU2KAMEK.js";import"./chunk-DAQOROHW.js";var W={providerGlobal:`// app.config.ts - Global configuration for all date pickers
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
/>`};var R=(()=>{class a{constructor(){this.configService=new p,this.activeConfig=f(()=>this.configService.getConfig())}formatConfig(){let o=this.activeConfig();return JSON.stringify({locale:o.locale,firstDayOfWeek:o.firstDayOfWeek,timeZone:o.timeZone||"browser default"},null,2)}static{this.\u0275fac=function(m){return new(m||a)}}static{this.\u0275cmp=g({type:a,selectors:[["playground-global-config-demo"]],features:[v([p])],decls:31,vars:1,consts:[[1,"config-demo-card"],[1,"config-header"],[1,"badge","badge-primary"],[1,"config-info"],[1,"config-display"],[1,"date-picker-demo"],[1,"cmp-form-label"],["placeholder","Select a date"],[1,"code-example"]],template:function(m,i){m&1&&(n(0,"div",0)(1,"div",1)(2,"h4"),t(3,"Global Configuration"),e(),n(4,"span",2),t(5,"App-Level Providers"),e()(),n(6,"div",3)(7,"p")(8,"strong"),t(9,"Configuration Source:"),e(),t(10," app.config.ts providers"),e(),n(11,"p")(12,"strong"),t(13,"Precedence:"),e(),t(14," Overrides default configuration"),e()(),n(15,"div",4)(16,"h5"),t(17,"Active Configuration:"),e(),n(18,"pre")(19,"code"),t(20),e()()(),n(21,"div",5)(22,"label",6),t(23,"Date Picker (Global: en-US, Monday first)"),e(),d(24,"ui-date-picker",7),e(),n(25,"div",8)(26,"h5"),t(27,"Global Configuration (app.config.ts):"),e(),n(28,"pre")(29,"code"),t(30,`// app.config.ts
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
};`),e()()()()),m&2&&(r(20),s(i.formatConfig()))},dependencies:[u],styles:[".config-demo-card[_ngcontent-%COMP%]{border:1px solid var(--cmp-border-color);border-radius:var(--cmp-radius);padding:1.5rem;background:var(--cmp-surface);margin-bottom:1rem}.config-demo-card[_ngcontent-%COMP%]   .config-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem;padding-bottom:.75rem;border-bottom:1px solid var(--cmp-border-color)}.config-demo-card[_ngcontent-%COMP%]   .config-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin:0;font-size:1.125rem;font-weight:600;color:var(--cmp-text-primary)}.config-demo-card[_ngcontent-%COMP%]   .config-header[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%]{padding:.25rem .75rem;border-radius:1rem;font-size:.75rem;font-weight:600;text-transform:uppercase}.config-demo-card[_ngcontent-%COMP%]   .config-header[_ngcontent-%COMP%]   .badge.badge-primary[_ngcontent-%COMP%]{background:var(--cmp-primary);color:var(--cmp-white)}.config-demo-card[_ngcontent-%COMP%]   .config-header[_ngcontent-%COMP%]   .badge.badge-warning[_ngcontent-%COMP%]{background:var(--cmp-warning);color:var(--cmp-white)}.config-demo-card[_ngcontent-%COMP%]   .config-header[_ngcontent-%COMP%]   .badge.badge-info[_ngcontent-%COMP%]{background:var(--cmp-info);color:var(--cmp-white)}.config-demo-card[_ngcontent-%COMP%]   .config-info[_ngcontent-%COMP%]{margin-bottom:1rem}.config-demo-card[_ngcontent-%COMP%]   .config-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:.25rem 0;font-size:.875rem;color:var(--cmp-text-secondary)}.config-demo-card[_ngcontent-%COMP%]   .config-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:var(--cmp-text-primary)}.config-demo-card[_ngcontent-%COMP%]   .config-display[_ngcontent-%COMP%]{margin-bottom:1.5rem}.config-demo-card[_ngcontent-%COMP%]   .config-display[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{margin:0 0 .5rem;font-size:.875rem;font-weight:600;color:var(--cmp-text-primary);text-transform:uppercase;letter-spacing:.5px}.config-demo-card[_ngcontent-%COMP%]   .config-display[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{background:var(--cmp-code-bg);border:1px solid var(--cmp-border-light);border-radius:var(--cmp-radius-sm);padding:var(--cmp-spacing-4);margin:0;overflow-x:auto}.config-demo-card[_ngcontent-%COMP%]   .config-display[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{font-family:Courier New,monospace;font-size:var(--cmp-font-sm);color:var(--cmp-gray-200)}.config-demo-card[_ngcontent-%COMP%]   .date-picker-demo[_ngcontent-%COMP%]{margin-bottom:1.5rem}.config-demo-card[_ngcontent-%COMP%]   .date-picker-demo[_ngcontent-%COMP%]   .cmp-form-label[_ngcontent-%COMP%]{display:block;margin-bottom:.5rem;font-weight:var(--cmp-font-medium);color:var(--cmp-text-primary)}.config-demo-card[_ngcontent-%COMP%]   .code-example[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{margin:0 0 .5rem;font-size:var(--cmp-font-sm);font-weight:var(--cmp-font-semibold);color:var(--cmp-text-primary);text-transform:uppercase;letter-spacing:.5px}.config-demo-card[_ngcontent-%COMP%]   .code-example[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{background:var(--cmp-code-bg);border:1px solid var(--cmp-border-light);border-radius:var(--cmp-radius-sm);padding:var(--cmp-spacing-4);margin:0;overflow-x:auto}.config-demo-card[_ngcontent-%COMP%]   .code-example[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{font-family:Courier New,monospace;font-size:var(--cmp-font-sm);color:var(--cmp-gray-200);line-height:1.5}"],changeDetection:0})}}return a})();var Z=(()=>{class a{constructor(){this.configService=new p,this.activeConfig=f(()=>this.configService.getConfig())}formatConfig(){let o=this.activeConfig();return JSON.stringify({locale:o.locale,firstDayOfWeek:o.firstDayOfWeek,timeZone:o.timeZone||"browser default"},null,2)}static{this.\u0275fac=function(m){return new(m||a)}}static{this.\u0275cmp=g({type:a,selectors:[["playground-component-override-demo"]],features:[v([p,{provide:A,useValue:{locale:C.French,firstDayOfWeek:P.Monday}}])],decls:31,vars:1,consts:[[1,"config-demo-card"],[1,"config-header"],[1,"badge","badge-warning"],[1,"config-info"],[1,"config-display"],[1,"date-picker-demo"],[1,"cmp-form-label"],["placeholder","S\xE9lectionner une date"],[1,"code-example"]],template:function(m,i){m&1&&(n(0,"div",0)(1,"div",1)(2,"h4"),t(3,"Component-Level Override"),e(),n(4,"span",2),t(5,"Component Providers"),e()(),n(6,"div",3)(7,"p")(8,"strong"),t(9,"Configuration Source:"),e(),t(10," Component providers array"),e(),n(11,"p")(12,"strong"),t(13,"Precedence:"),e(),t(14," Overrides global configuration"),e()(),n(15,"div",4)(16,"h5"),t(17,"Active Configuration:"),e(),n(18,"pre")(19,"code"),t(20),e()()(),n(21,"div",5)(22,"label",6),t(23,"Date Picker (French locale, Monday first)"),e(),d(24,"ui-date-picker",7),e(),n(25,"div",8)(26,"h5"),t(27,"Provider Configuration:"),e(),n(28,"pre")(29,"code"),t(30,`@Component({
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
export class MyComponent { }`),e()()()()),m&2&&(r(20),s(i.formatConfig()))},dependencies:[u],styles:[".config-demo-card[_ngcontent-%COMP%]{border:1px solid var(--cmp-border-color);border-radius:var(--cmp-radius);padding:1.5rem;background:var(--cmp-surface);margin-bottom:1rem}.config-demo-card[_ngcontent-%COMP%]   .config-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem;padding-bottom:.75rem;border-bottom:1px solid var(--cmp-border-color)}.config-demo-card[_ngcontent-%COMP%]   .config-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin:0;font-size:1.125rem;font-weight:600;color:var(--cmp-text-primary)}.config-demo-card[_ngcontent-%COMP%]   .config-header[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%]{padding:.25rem .75rem;border-radius:1rem;font-size:.75rem;font-weight:600;text-transform:uppercase}.config-demo-card[_ngcontent-%COMP%]   .config-header[_ngcontent-%COMP%]   .badge.badge-primary[_ngcontent-%COMP%]{background:var(--cmp-primary);color:var(--cmp-white)}.config-demo-card[_ngcontent-%COMP%]   .config-header[_ngcontent-%COMP%]   .badge.badge-warning[_ngcontent-%COMP%]{background:var(--cmp-warning);color:var(--cmp-white)}.config-demo-card[_ngcontent-%COMP%]   .config-header[_ngcontent-%COMP%]   .badge.badge-info[_ngcontent-%COMP%]{background:var(--cmp-info);color:var(--cmp-white)}.config-demo-card[_ngcontent-%COMP%]   .config-info[_ngcontent-%COMP%]{margin-bottom:1rem}.config-demo-card[_ngcontent-%COMP%]   .config-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:.25rem 0;font-size:.875rem;color:var(--cmp-text-secondary)}.config-demo-card[_ngcontent-%COMP%]   .config-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:var(--cmp-text-primary)}.config-demo-card[_ngcontent-%COMP%]   .config-display[_ngcontent-%COMP%]{margin-bottom:1.5rem}.config-demo-card[_ngcontent-%COMP%]   .config-display[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{margin:0 0 .5rem;font-size:.875rem;font-weight:600;color:var(--cmp-text-primary);text-transform:uppercase;letter-spacing:.5px}.config-demo-card[_ngcontent-%COMP%]   .config-display[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{background:var(--cmp-code-bg);border:1px solid var(--cmp-border-light);border-radius:var(--cmp-radius-sm);padding:var(--cmp-spacing-4);margin:0;overflow-x:auto}.config-demo-card[_ngcontent-%COMP%]   .config-display[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{font-family:Courier New,monospace;font-size:var(--cmp-font-sm);color:var(--cmp-gray-200)}.config-demo-card[_ngcontent-%COMP%]   .date-picker-demo[_ngcontent-%COMP%]{margin-bottom:1.5rem}.config-demo-card[_ngcontent-%COMP%]   .date-picker-demo[_ngcontent-%COMP%]   .cmp-form-label[_ngcontent-%COMP%]{display:block;margin-bottom:.5rem;font-weight:var(--cmp-font-medium);color:var(--cmp-text-primary)}.config-demo-card[_ngcontent-%COMP%]   .code-example[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{margin:0 0 .5rem;font-size:var(--cmp-font-sm);font-weight:var(--cmp-font-semibold);color:var(--cmp-text-primary);text-transform:uppercase;letter-spacing:.5px}.config-demo-card[_ngcontent-%COMP%]   .code-example[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{background:var(--cmp-code-bg);border:1px solid var(--cmp-border-light);border-radius:var(--cmp-radius-sm);padding:var(--cmp-spacing-4);margin:0;overflow-x:auto}.config-demo-card[_ngcontent-%COMP%]   .code-example[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{font-family:Courier New,monospace;font-size:var(--cmp-font-sm);color:var(--cmp-gray-200);line-height:1.5}"],changeDetection:0})}}return a})();var B=(()=>{class a{constructor(){this.configService=new p,this.activeConfig=f(()=>this.configService.getConfig())}formatConfig(){let o=this.activeConfig();return JSON.stringify({locale:o.locale,firstDayOfWeek:o.firstDayOfWeek,timeZone:o.timeZone||"browser default"},null,2)}static{this.\u0275fac=function(m){return new(m||a)}}static{this.\u0275cmp=g({type:a,selectors:[["playground-no-config-demo"]],features:[v([p])],decls:31,vars:1,consts:[[1,"config-demo-card"],[1,"config-header"],[1,"badge","badge-info"],[1,"config-info"],[1,"config-display"],[1,"date-picker-demo"],[1,"cmp-form-label"],["placeholder","Select a date"],[1,"code-example"]],template:function(m,i){m&1&&(n(0,"div",0)(1,"div",1)(2,"h4"),t(3,"Default Configuration Only"),e(),n(4,"span",2),t(5,"No Providers"),e()(),n(6,"div",3)(7,"p")(8,"strong"),t(9,"Configuration Source:"),e(),t(10," Default values only"),e(),n(11,"p")(12,"strong"),t(13,"Precedence:"),e(),t(14," Uses hardcoded defaults (no global or component config)"),e()(),n(15,"div",4)(16,"h5"),t(17,"Active Configuration:"),e(),n(18,"pre")(19,"code"),t(20),e()()(),n(21,"div",5)(22,"label",6),t(23,"Date Picker (Default: en-US, Sunday first)"),e(),d(24,"ui-date-picker",7),e(),n(25,"div",8)(26,"h5"),t(27,"Component Setup:"),e(),n(28,"pre")(29,"code"),t(30,`@Component({
  selector: 'my-component',
  providers: [DatePickerConfigService] // No token provider
})
export class MyComponent { 
  // Uses default configuration:
  // - locale: 'en-US'
  // - firstDayOfWeek: 0 (Sunday)
}`),e()()()()),m&2&&(r(20),s(i.formatConfig()))},dependencies:[u],styles:[".config-demo-card[_ngcontent-%COMP%]{border:1px solid var(--cmp-border-color);border-radius:var(--cmp-radius);padding:1.5rem;background:var(--cmp-surface);margin-bottom:1rem}.config-demo-card[_ngcontent-%COMP%]   .config-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem;padding-bottom:.75rem;border-bottom:1px solid var(--cmp-border-color)}.config-demo-card[_ngcontent-%COMP%]   .config-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin:0;font-size:1.125rem;font-weight:600;color:var(--cmp-text-primary)}.config-demo-card[_ngcontent-%COMP%]   .config-header[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%]{padding:.25rem .75rem;border-radius:1rem;font-size:.75rem;font-weight:600;text-transform:uppercase}.config-demo-card[_ngcontent-%COMP%]   .config-header[_ngcontent-%COMP%]   .badge.badge-primary[_ngcontent-%COMP%]{background:var(--cmp-primary);color:var(--cmp-white)}.config-demo-card[_ngcontent-%COMP%]   .config-header[_ngcontent-%COMP%]   .badge.badge-warning[_ngcontent-%COMP%]{background:var(--cmp-warning);color:var(--cmp-white)}.config-demo-card[_ngcontent-%COMP%]   .config-header[_ngcontent-%COMP%]   .badge.badge-info[_ngcontent-%COMP%]{background:var(--cmp-info);color:var(--cmp-white)}.config-demo-card[_ngcontent-%COMP%]   .config-info[_ngcontent-%COMP%]{margin-bottom:1rem}.config-demo-card[_ngcontent-%COMP%]   .config-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:.25rem 0;font-size:.875rem;color:var(--cmp-text-secondary)}.config-demo-card[_ngcontent-%COMP%]   .config-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:var(--cmp-text-primary)}.config-demo-card[_ngcontent-%COMP%]   .config-display[_ngcontent-%COMP%]{margin-bottom:1.5rem}.config-demo-card[_ngcontent-%COMP%]   .config-display[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{margin:0 0 .5rem;font-size:.875rem;font-weight:600;color:var(--cmp-text-primary);text-transform:uppercase;letter-spacing:.5px}.config-demo-card[_ngcontent-%COMP%]   .config-display[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{background:var(--cmp-code-bg);border:1px solid var(--cmp-border-light);border-radius:var(--cmp-radius-sm);padding:var(--cmp-spacing-4);margin:0;overflow-x:auto}.config-demo-card[_ngcontent-%COMP%]   .config-display[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{font-family:Courier New,monospace;font-size:var(--cmp-font-sm);color:var(--cmp-gray-200)}.config-demo-card[_ngcontent-%COMP%]   .date-picker-demo[_ngcontent-%COMP%]{margin-bottom:1.5rem}.config-demo-card[_ngcontent-%COMP%]   .date-picker-demo[_ngcontent-%COMP%]   .cmp-form-label[_ngcontent-%COMP%]{display:block;margin-bottom:.5rem;font-weight:var(--cmp-font-medium);color:var(--cmp-text-primary)}.config-demo-card[_ngcontent-%COMP%]   .code-example[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{margin:0 0 .5rem;font-size:var(--cmp-font-sm);font-weight:var(--cmp-font-semibold);color:var(--cmp-text-primary);text-transform:uppercase;letter-spacing:.5px}.config-demo-card[_ngcontent-%COMP%]   .code-example[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{background:var(--cmp-code-bg);border:1px solid var(--cmp-border-light);border-radius:var(--cmp-radius-sm);padding:var(--cmp-spacing-4);margin:0;overflow-x:auto}.config-demo-card[_ngcontent-%COMP%]   .code-example[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{font-family:Courier New,monospace;font-size:var(--cmp-font-sm);color:var(--cmp-gray-200);line-height:1.5}"],changeDetection:0})}}return a})();var U=()=>["Form Control","Signal","i18n","Calendar"];function V(a,w){if(a&1&&(n(0,"div",16),t(1," Selected: "),n(2,"strong"),t(3),e()()),a&2){let o=h();r(3),s(o.selectedDate().toLocaleDateString())}}function j(a,w){if(a&1&&(n(0,"div",23),t(1," Bound Value: "),n(2,"strong"),t(3),e()()),a&2){let o=h();r(3),s(o.boundDate().toLocaleDateString())}}function J(a,w){if(a&1&&(n(0,"div",53),t(1),e()),a&2){let o=h();r(),T(" Bound Value: ",o.boundDate().toLocaleDateString()," ")}}var be=(()=>{class a{constructor(){this.configService=new p,this.snippets=W,this.globalConfig=f(()=>this.configService.getConfig()),this.modifiedGlobalLocale=_(C.EnglishUS),this.modifiedGlobalFirstDay=_(P.Monday),this.selectedDate=_(null),this.DatePickerSizeEnum=z,this.boundDate=_(null),this.minMaxConfig=I(new Date,new Date(new Date().setMonth(new Date().getMonth()+3))),this.disabledDatesConfig=F([new Date(2026,4,1),new Date(2026,4,15),new Date(2026,4,25)]),this.mondayFirstConfig={firstDayOfWeek:P.Monday},this.timezoneConfig={locale:C.EnglishUS,timeZone:y.NewYork},this.timezoneConfigTokyo={locale:C.Japanese,timeZone:y.Tokyo},this.timezoneConfigLondon={locale:C.EnglishGB,timeZone:y.London},this.datePickerProps=[{name:"placeholder",type:"string",default:"'Select date'",description:"Placeholder text for the input field."},{name:"size",type:"DatePickerSize ('sm' | 'md' | 'lg')",default:"'md'",description:"Size variant of the date picker."},{name:"disabled",type:"boolean",default:"false",description:"Whether the date picker is disabled."},{name:"value",type:"Date | null",default:"null",description:"Two-way bindable model signal for the selected date."}],this.datePickerOutputs=[{name:"dateChange",type:"OutputEmitterRef<Date | null>",description:"Emits when a date is selected or cleared."},{name:"valueChange",type:"OutputEmitterRef<Date | null>",description:"Emits when the model value changes (for two-way binding)."}],this.providerConfigProps=[{name:"DATE_PICKER_CONFIG_TOKEN",type:"InjectionToken<Partial<IDatePickerConfig>>",default:"undefined",description:"Injection token for providing date picker configuration at app or component level."},{name:"DatePickerConfigService",type:"Injectable",default:"N/A",description:"Service that merges configuration from multiple sources (Default \u2192 Global \u2192 Component)."}],this.configProps=[{name:"minDate",type:"Date",default:"undefined",description:"Minimum selectable date."},{name:"maxDate",type:"Date",default:"undefined",description:"Maximum selectable date."},{name:"disabledDates",type:"Date[]",default:"undefined",description:"Array of dates that should be disabled."},{name:"locale",type:"Locale (LocaleEnum | string)",default:"'en-US'",description:"BCP 47 locale identifier. Use LocaleEnum for common locales."},{name:"timeZone",type:"TimeZone (TimeZoneEnum | string)",default:"undefined",description:"IANA timezone identifier. Use TimeZoneEnum for common timezones."},{name:"firstDayOfWeek",type:"FirstDayOfWeek (0-6)",default:"0",description:"First day of the week. Use FirstDayOfWeekEnum for clarity."}]}onDateChange(o){this.selectedDate.set(o)}formatConfig(o){return JSON.stringify({locale:o.locale,firstDayOfWeek:o.firstDayOfWeek,timeZone:o.timeZone||"browser default",minDate:o.minDate?"set":"undefined",maxDate:o.maxDate?"set":"undefined",disabledDates:o.disabledDates?`${o.disabledDates.length} dates`:"undefined"},null,2)}updateGlobalLocale(o){this.modifiedGlobalLocale.set(o)}updateGlobalFirstDay(o){this.modifiedGlobalFirstDay.set(o)}static{this.\u0275fac=function(m){return new(m||a)}}static{this.\u0275cmp=g({type:a,selectors:[["playground-date-picker-demo"]],decls:186,vars:31,consts:[["title","Date Picker","description","A minimal, accessible date picker component with calendar dropdown, built with Angular 21 signals and Intl.DateTimeFormat",3,"tags","apiReference","examples"],["demo",""],[1,"cmp-mb-5"],[1,"cmp-mb-3"],[1,"cmp-alert","cmp-alert-info","cmp-mb-4"],[1,"config-precedence-visual","cmp-mb-4"],[1,"precedence-flow"],[1,"precedence-step"],[1,"step-number"],[1,"step-content"],[1,"precedence-arrow"],[1,"config-scenarios"],[1,"cmp-my-5"],[1,"cmp-d-flex","cmp-flex-column","cmp-gap-4"],[1,"cmp-form-label"],["placeholder","Select a date",3,"dateChange"],[1,"cmp-alert","cmp-alert-success","cmp-mt-2"],[1,"cmp-d-flex","cmp-gap-3"],[1,"cmp-flex-1"],["placeholder","Small",3,"size"],["placeholder","Medium",3,"size"],["placeholder","Large",3,"size"],["placeholder","Select date",3,"valueChange","value"],[1,"cmp-alert","cmp-alert-primary","cmp-mt-2"],["api",""],[1,"cmp-mb-4"],["title","Provider Configuration",3,"properties"],[1,"cmp-mb-4","cmp-mt-5"],["title","Date Picker Inputs",3,"properties"],["title","Date Picker Outputs",3,"properties"],["title","IDatePickerConfig Interface",3,"properties"],["examples",""],["title","Global Configuration (app.config.ts)","description","Set application-wide defaults for all date pickers",3,"code"],[1,"cmp-alert","cmp-alert-success"],["title","Component-Level Override","description","Override global configuration for specific components",3,"code"],[1,"cmp-alert","cmp-alert-warning"],["title","Route-Level Configuration","description","Apply configuration to all components within a route",3,"code"],[1,"cmp-alert","cmp-alert-info"],["title","Basic Usage","description","Simple date picker with default configuration",3,"code"],["title","Size Variants","description","Three size options: small, medium (default), and large",3,"code"],["title","Min/Max Date Restrictions","description","Restrict selectable dates to a specific range using provider configuration",3,"code"],[1,"cmp-alert","cmp-alert-warning","cmp-mb-3"],["placeholder","Next 3 months only"],[1,"cmp-text-muted","cmp-d-block","cmp-mt-2"],["title","Disabled Specific Dates","description","Disable specific dates (e.g., holidays, blackout dates) using provider configuration",3,"code"],["placeholder","Some dates disabled"],["title","First Day of Week","description","Configure calendar to start on Monday instead of Sunday using provider configuration",3,"code"],["placeholder","Week starts Monday"],["title","Timezone Support","description","Use IANA timezone identifiers for consistent date display across locations via provider configuration",3,"code"],[1,"cmp-d-flex","cmp-flex-column","cmp-gap-3"],["placeholder","Select date"],[1,"cmp-text-muted"],["title","Two-Way Binding","description","Use Angular 21's model signal for two-way binding",3,"code"],[1,"cmp-alert","cmp-alert-info","cmp-mt-2"],["title","Disabled State","description","Disable the date picker when needed",3,"code"],["placeholder","Disabled date picker",3,"disabled"]],template:function(m,i){m&1&&(n(0,"playground-demo-page-template",0)(1,"div",1)(2,"div",2)(3,"h3",3),t(4,"Provider-Based Configuration System"),e(),n(5,"div",4)(6,"strong"),t(7,"\u{1F3AF} Configuration Precedence:"),e(),t(8," Default \u2192 Global (app.config.ts) \u2192 Component (providers array) "),d(9,"br"),n(10,"small"),t(11,"The date picker uses Angular's dependency injection to manage configuration. Each level overrides the previous one."),e()(),n(12,"div",5)(13,"div",6)(14,"div",7)(15,"div",8),t(16,"1"),e(),n(17,"div",9)(18,"strong"),t(19,"Default Config"),e(),n(20,"small"),t(21,"en-US, Sunday first"),e()()(),n(22,"div",10),t(23,"\u2192"),e(),n(24,"div",7)(25,"div",8),t(26,"2"),e(),n(27,"div",9)(28,"strong"),t(29,"Global Config"),e(),n(30,"small"),t(31,"app.config.ts providers"),e()()(),n(32,"div",10),t(33,"\u2192"),e(),n(34,"div",7)(35,"div",8),t(36,"3"),e(),n(37,"div",9)(38,"strong"),t(39,"Component Config"),e(),n(40,"small"),t(41,"Component providers"),e()()()()(),n(42,"div",11)(43,"h4",3),t(44,"Configuration Scenarios"),e(),d(45,"playground-global-config-demo")(46,"playground-component-override-demo")(47,"playground-no-config-demo"),e()(),d(48,"hr",12),n(49,"div",4)(50,"strong"),t(51,"\u{1F4A1} Timezone Behavior:"),e(),t(52," When no timezone is specified, the date picker uses the user's local timezone automatically. Specify a timezone for consistent display across locations. "),e(),n(53,"div",13)(54,"div")(55,"label",14),t(56,"Basic Date Picker"),e(),n(57,"ui-date-picker",15),E("dateChange",function(l){return i.onDateChange(l)}),e(),O(58,V,4,1,"div",16),e(),n(59,"div",17)(60,"div",18)(61,"label",14),t(62,"Small Size"),e(),d(63,"ui-date-picker",19),e(),n(64,"div",18)(65,"label",14),t(66,"Medium (Default)"),e(),d(67,"ui-date-picker",20),e(),n(68,"div",18)(69,"label",14),t(70,"Large Size"),e(),d(71,"ui-date-picker",21),e()(),n(72,"div")(73,"label",14),t(74,"Two-Way Binding"),e(),n(75,"ui-date-picker",22),k("valueChange",function(l){return x(i.boundDate,l)||(i.boundDate=l),l}),e(),O(76,j,4,1,"div",23),e()()(),n(77,"div",24)(78,"h3",25),t(79,"Provider-Based Configuration API"),e(),n(80,"div",4)(81,"strong"),t(82,"\u{1F4CC} Migration Note:"),e(),t(83," The "),n(84,"code"),t(85,"@Input() config"),e(),t(86," property has been removed. Configuration is now managed through Angular's dependency injection system using providers. "),e(),d(87,"playground-api-table",26),n(88,"h3",27),t(89,"Component API"),e(),d(90,"playground-api-table",28)(91,"playground-api-table",29)(92,"playground-api-table",30),e(),n(93,"div",31)(94,"h3",25),t(95,"Provider-Based Configuration Examples"),e(),n(96,"playground-example-viewer",32)(97,"div",33)(98,"strong"),t(99,"\u2713 Best Practice:"),e(),t(100," Define global configuration in app.config.ts for consistent behavior across your application. "),e()(),n(101,"playground-example-viewer",34)(102,"div",35)(103,"strong"),t(104,"\u26A1 Component Providers:"),e(),t(105," Use component providers to customize date pickers for specific features or sections. "),e()(),n(106,"playground-example-viewer",36)(107,"div",37)(108,"strong"),t(109,"\u{1F3AF} Route Providers:"),e(),t(110," Perfect for multi-language applications or region-specific sections. "),e()(),d(111,"hr",12),n(112,"h3",25),t(113,"Component Usage Examples"),e(),n(114,"playground-example-viewer",38)(115,"ui-date-picker",15),E("dateChange",function(l){return i.onDateChange(l)}),e()(),n(116,"playground-example-viewer",39)(117,"div",17),d(118,"ui-date-picker",19)(119,"ui-date-picker",20)(120,"ui-date-picker",21),e()(),n(121,"playground-example-viewer",40)(122,"div",41)(123,"strong"),t(124,"\u26A0\uFE0F Note:"),e(),t(125," This example uses the legacy "),n(126,"code"),t(127,"@Input() config"),e(),t(128," pattern for demonstration. In production, use provider-based configuration as shown in the examples above. "),e(),d(129,"ui-date-picker",42),n(130,"small",43),t(131," Configure min/max dates via providers for production use. "),e()(),n(132,"playground-example-viewer",44)(133,"div",41)(134,"strong"),t(135,"\u26A0\uFE0F Note:"),e(),t(136," This example uses the legacy "),n(137,"code"),t(138,"@Input() config"),e(),t(139," pattern for demonstration. In production, use provider-based configuration as shown in the examples above. "),e(),d(140,"ui-date-picker",45),n(141,"small",43),t(142," Configure disabled dates via providers for production use. "),e()(),n(143,"playground-example-viewer",46)(144,"div",41)(145,"strong"),t(146,"\u26A0\uFE0F Note:"),e(),t(147," This example uses the legacy "),n(148,"code"),t(149,"@Input() config"),e(),t(150," pattern for demonstration. In production, use provider-based configuration as shown in the examples above. "),e(),d(151,"ui-date-picker",47),n(152,"small",43),t(153," Configure first day of week via providers for production use. "),e()(),n(154,"playground-example-viewer",48)(155,"div",41)(156,"strong"),t(157,"\u26A0\uFE0F Note:"),e(),t(158," This example uses the legacy "),n(159,"code"),t(160,"@Input() config"),e(),t(161," pattern for demonstration. In production, use provider-based configuration as shown in the examples above. "),e(),n(162,"div",49)(163,"div")(164,"label",14),t(165,"New York (America/New_York)"),e(),d(166,"ui-date-picker",50),n(167,"small",51),t(168,"Configure timezone via providers for production use."),e()(),n(169,"div")(170,"label",14),t(171,"Tokyo (Asia/Tokyo)"),e(),d(172,"ui-date-picker",50),n(173,"small",51),t(174,"Configure timezone via providers for production use."),e()(),n(175,"div")(176,"label",14),t(177,"London (Europe/London)"),e(),d(178,"ui-date-picker",50),n(179,"small",51),t(180,"Configure timezone via providers for production use."),e()()()(),n(181,"playground-example-viewer",52)(182,"ui-date-picker",22),k("valueChange",function(l){return x(i.boundDate,l)||(i.boundDate=l),l}),e(),O(183,J,2,1,"div",53),e(),n(184,"playground-example-viewer",54),d(185,"ui-date-picker",55),e()()()),m&2&&(c("tags",N(30,U))("apiReference",!0)("examples",!0),r(58),b(i.selectedDate()?58:-1),r(5),c("size",i.DatePickerSizeEnum.Small),r(4),c("size",i.DatePickerSizeEnum.Medium),r(4),c("size",i.DatePickerSizeEnum.Large),r(4),M("value",i.boundDate),r(),b(i.boundDate()?76:-1),r(11),c("properties",i.providerConfigProps),r(3),c("properties",i.datePickerProps),r(),c("properties",i.datePickerOutputs),r(),c("properties",i.configProps),r(4),c("code",i.snippets.providerGlobal),r(5),c("code",i.snippets.providerComponent),r(5),c("code",i.snippets.providerRoute),r(8),c("code",i.snippets.basic),r(2),c("code",i.snippets.sizes),r(2),c("size",i.DatePickerSizeEnum.Small),r(),c("size",i.DatePickerSizeEnum.Medium),r(),c("size",i.DatePickerSizeEnum.Large),r(),c("code",i.snippets.minMax),r(11),c("code",i.snippets.disabledDates),r(11),c("code",i.snippets.firstDayOfWeek),r(11),c("code",i.snippets.timezone),r(27),c("code",i.snippets.twoWayBinding),r(),M("value",i.boundDate),r(),b(i.boundDate()?183:-1),r(),c("code",i.snippets.disabled),r(),c("disabled",!0))},dependencies:[u,K,G,L,R,Z,B],styles:["[_nghost-%COMP%]{display:block}ui-date-picker[_ngcontent-%COMP%]{display:block;width:100%}.config-precedence-visual[_ngcontent-%COMP%]{background:var(--cmp-surface);border:1px solid var(--cmp-border-color);border-radius:var(--cmp-radius);padding:2rem}.config-precedence-visual[_ngcontent-%COMP%]   .precedence-flow[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;gap:1rem;flex-wrap:wrap}.config-precedence-visual[_ngcontent-%COMP%]   .precedence-flow[_ngcontent-%COMP%]   .precedence-step[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.75rem;padding:1rem 1.5rem;background:var(--cmp-white);border:2px solid var(--cmp-primary);border-radius:var(--cmp-radius);min-width:180px}.config-precedence-visual[_ngcontent-%COMP%]   .precedence-flow[_ngcontent-%COMP%]   .precedence-step[_ngcontent-%COMP%]   .step-number[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:2rem;height:2rem;background:var(--cmp-primary);color:var(--cmp-white);border-radius:50%;font-weight:700;font-size:1rem;flex-shrink:0}.config-precedence-visual[_ngcontent-%COMP%]   .precedence-flow[_ngcontent-%COMP%]   .precedence-step[_ngcontent-%COMP%]   .step-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.25rem}.config-precedence-visual[_ngcontent-%COMP%]   .precedence-flow[_ngcontent-%COMP%]   .precedence-step[_ngcontent-%COMP%]   .step-content[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:.875rem;color:var(--cmp-text-primary);font-weight:600}.config-precedence-visual[_ngcontent-%COMP%]   .precedence-flow[_ngcontent-%COMP%]   .precedence-step[_ngcontent-%COMP%]   .step-content[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:.75rem;color:var(--cmp-text-secondary)}.config-precedence-visual[_ngcontent-%COMP%]   .precedence-flow[_ngcontent-%COMP%]   .precedence-arrow[_ngcontent-%COMP%]{font-size:1.5rem;color:var(--cmp-primary);font-weight:700}.config-scenarios[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:1.25rem;font-weight:600;color:var(--cmp-text-primary);margin-bottom:1rem}"],changeDetection:0})}}return a})();export{be as DatePickerDemoComponent};
