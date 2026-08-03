import {N}from'./chunk-BgqfbpE3.js';import {P}from'./chunk-BGLIRIT3.js';import {h}from'./chunk-B-KMdjOY.js';import {r as rn}from'./chunk-CCYOOI3R.js';import {aO as Rr,f as Tt,H as He,aP as eo,aQ as to,aR as Ar,aS as ft,aT as Ax,aU as Rx,aV as Fu,G as GE,aW as qx,as as Rk,N as Ni,m as mT,X as Xc,Y as Yp,n as nh,K as vD,av as Ah,aw as wT,Z as Zp,ad as kT,h as hI,S as ID,ax as xh,i as Ch,aX as RT,aY as Ks,a1 as FD,A as ol}from'./main-ZIE2MMIM.js';var B={providerGlobal:`// app.config.ts - Global configuration for all date pickers
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
/>`};var Z=(()=>{class r{constructor(){this.configService=new Rr,this.activeConfig=Tt(()=>this.configService.getConfig());}formatConfig(){let i=this.activeConfig();return JSON.stringify({locale:i.locale,firstDayOfWeek:i.firstDayOfWeek,timeZone:i.timeZone||"browser default"},null,2)}static{this.\u0275fac=function(l){return new(l||r)};}static{this.\u0275cmp=GE({type:r,selectors:[["playground-global-config-demo"]],features:[RT([Rr])],decls:31,vars:1,consts:[[1,"config-demo-card"],[1,"config-header"],[1,"badge","badge-primary"],[1,"config-info"],[1,"config-display"],[1,"date-picker-demo"],[1,"cmp-form-label"],["placeholder","Select a date"],[1,"code-example"]],template:function(l,o){l&1&&(Ni(0,"div",0)(1,"div",1)(2,"h4"),mT(3,"Global Configuration"),Xc(),Ni(4,"span",2),mT(5,"App-Level Providers"),Xc()(),Ni(6,"div",3)(7,"p")(8,"strong"),mT(9,"Configuration Source:"),Xc(),mT(10," app.config.ts providers"),Xc(),Ni(11,"p")(12,"strong"),mT(13,"Precedence:"),Xc(),mT(14," Overrides default configuration"),Xc()(),Ni(15,"div",4)(16,"h5"),mT(17,"Active Configuration:"),Xc(),Ni(18,"pre")(19,"code"),mT(20),Xc()()(),Ni(21,"div",5)(22,"label",6),mT(23,"Date Picker (Global: en-US, Monday first)"),Xc(),Yp(24,"ui-date-picker",7),Xc(),Ni(25,"div",8)(26,"h5"),mT(27,"Global Configuration (app.config.ts):"),Xc(),Ni(28,"pre")(29,"code"),mT(30,`// app.config.ts
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
};`),Xc()()()()),l&2&&(hI(20),Ch(o.formatConfig()));},dependencies:[qx],styles:[".config-demo-card[_ngcontent-%COMP%]{border:1px solid var(--cmp-border-color);border-radius:var(--cmp-radius);padding:1.5rem;background:var(--cmp-surface);margin-bottom:1rem}.config-demo-card[_ngcontent-%COMP%]   .config-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem;padding-bottom:.75rem;border-bottom:1px solid var(--cmp-border-color)}.config-demo-card[_ngcontent-%COMP%]   .config-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin:0;font-size:1.125rem;font-weight:600;color:var(--cmp-text-primary)}.config-demo-card[_ngcontent-%COMP%]   .config-header[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%]{padding:.25rem .75rem;border-radius:1rem;font-size:.75rem;font-weight:600;text-transform:uppercase}.config-demo-card[_ngcontent-%COMP%]   .config-header[_ngcontent-%COMP%]   .badge.badge-primary[_ngcontent-%COMP%]{background:var(--cmp-primary);color:var(--cmp-white)}.config-demo-card[_ngcontent-%COMP%]   .config-header[_ngcontent-%COMP%]   .badge.badge-warning[_ngcontent-%COMP%]{background:var(--cmp-warning);color:var(--cmp-white)}.config-demo-card[_ngcontent-%COMP%]   .config-header[_ngcontent-%COMP%]   .badge.badge-info[_ngcontent-%COMP%]{background:var(--cmp-info);color:var(--cmp-white)}.config-demo-card[_ngcontent-%COMP%]   .config-info[_ngcontent-%COMP%]{margin-bottom:1rem}.config-demo-card[_ngcontent-%COMP%]   .config-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:.25rem 0;font-size:.875rem;color:var(--cmp-text-secondary)}.config-demo-card[_ngcontent-%COMP%]   .config-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:var(--cmp-text-primary)}.config-demo-card[_ngcontent-%COMP%]   .config-display[_ngcontent-%COMP%]{margin-bottom:1.5rem}.config-demo-card[_ngcontent-%COMP%]   .config-display[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{margin:0 0 .5rem;font-size:.875rem;font-weight:600;color:var(--cmp-text-primary);text-transform:uppercase;letter-spacing:.5px}.config-demo-card[_ngcontent-%COMP%]   .config-display[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{background:var(--cmp-code-bg);border:1px solid var(--cmp-border-light);border-radius:var(--cmp-radius-sm);padding:var(--cmp-spacing-4);margin:0;overflow-x:auto}.config-demo-card[_ngcontent-%COMP%]   .config-display[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{font-family:Courier New,monospace;font-size:var(--cmp-font-sm);color:var(--cmp-gray-200)}.config-demo-card[_ngcontent-%COMP%]   .date-picker-demo[_ngcontent-%COMP%]{margin-bottom:1.5rem}.config-demo-card[_ngcontent-%COMP%]   .date-picker-demo[_ngcontent-%COMP%]   .cmp-form-label[_ngcontent-%COMP%]{display:block;margin-bottom:.5rem;font-weight:var(--cmp-font-medium);color:var(--cmp-text-primary)}.config-demo-card[_ngcontent-%COMP%]   .code-example[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{margin:0 0 .5rem;font-size:var(--cmp-font-sm);font-weight:var(--cmp-font-semibold);color:var(--cmp-text-primary);text-transform:uppercase;letter-spacing:.5px}.config-demo-card[_ngcontent-%COMP%]   .code-example[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{background:var(--cmp-code-bg);border:1px solid var(--cmp-border-light);border-radius:var(--cmp-radius-sm);padding:var(--cmp-spacing-4);margin:0;overflow-x:auto}.config-demo-card[_ngcontent-%COMP%]   .code-example[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{font-family:Courier New,monospace;font-size:var(--cmp-font-sm);color:var(--cmp-gray-200);line-height:1.5}"]});}}return r})();var U=(()=>{class r{constructor(){this.configService=new Rr,this.activeConfig=Tt(()=>this.configService.getConfig());}formatConfig(){let i=this.activeConfig();return JSON.stringify({locale:i.locale,firstDayOfWeek:i.firstDayOfWeek,timeZone:i.timeZone||"browser default"},null,2)}static{this.\u0275fac=function(l){return new(l||r)};}static{this.\u0275cmp=GE({type:r,selectors:[["playground-component-override-demo"]],features:[RT([Rr,{provide:Ks,useValue:{locale:eo.French,firstDayOfWeek:to.Monday}}])],decls:31,vars:1,consts:[[1,"config-demo-card"],[1,"config-header"],[1,"badge","badge-warning"],[1,"config-info"],[1,"config-display"],[1,"date-picker-demo"],[1,"cmp-form-label"],["placeholder","S\xE9lectionner une date"],[1,"code-example"]],template:function(l,o){l&1&&(Ni(0,"div",0)(1,"div",1)(2,"h4"),mT(3,"Component-Level Override"),Xc(),Ni(4,"span",2),mT(5,"Component Providers"),Xc()(),Ni(6,"div",3)(7,"p")(8,"strong"),mT(9,"Configuration Source:"),Xc(),mT(10," Component providers array"),Xc(),Ni(11,"p")(12,"strong"),mT(13,"Precedence:"),Xc(),mT(14," Overrides global configuration"),Xc()(),Ni(15,"div",4)(16,"h5"),mT(17,"Active Configuration:"),Xc(),Ni(18,"pre")(19,"code"),mT(20),Xc()()(),Ni(21,"div",5)(22,"label",6),mT(23,"Date Picker (French locale, Monday first)"),Xc(),Yp(24,"ui-date-picker",7),Xc(),Ni(25,"div",8)(26,"h5"),mT(27,"Provider Configuration:"),Xc(),Ni(28,"pre")(29,"code"),mT(30,`@Component({
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
export class MyComponent { }`),Xc()()()()),l&2&&(hI(20),Ch(o.formatConfig()));},dependencies:[qx],styles:[".config-demo-card[_ngcontent-%COMP%]{border:1px solid var(--cmp-border-color);border-radius:var(--cmp-radius);padding:1.5rem;background:var(--cmp-surface);margin-bottom:1rem}.config-demo-card[_ngcontent-%COMP%]   .config-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem;padding-bottom:.75rem;border-bottom:1px solid var(--cmp-border-color)}.config-demo-card[_ngcontent-%COMP%]   .config-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin:0;font-size:1.125rem;font-weight:600;color:var(--cmp-text-primary)}.config-demo-card[_ngcontent-%COMP%]   .config-header[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%]{padding:.25rem .75rem;border-radius:1rem;font-size:.75rem;font-weight:600;text-transform:uppercase}.config-demo-card[_ngcontent-%COMP%]   .config-header[_ngcontent-%COMP%]   .badge.badge-primary[_ngcontent-%COMP%]{background:var(--cmp-primary);color:var(--cmp-white)}.config-demo-card[_ngcontent-%COMP%]   .config-header[_ngcontent-%COMP%]   .badge.badge-warning[_ngcontent-%COMP%]{background:var(--cmp-warning);color:var(--cmp-white)}.config-demo-card[_ngcontent-%COMP%]   .config-header[_ngcontent-%COMP%]   .badge.badge-info[_ngcontent-%COMP%]{background:var(--cmp-info);color:var(--cmp-white)}.config-demo-card[_ngcontent-%COMP%]   .config-info[_ngcontent-%COMP%]{margin-bottom:1rem}.config-demo-card[_ngcontent-%COMP%]   .config-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:.25rem 0;font-size:.875rem;color:var(--cmp-text-secondary)}.config-demo-card[_ngcontent-%COMP%]   .config-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:var(--cmp-text-primary)}.config-demo-card[_ngcontent-%COMP%]   .config-display[_ngcontent-%COMP%]{margin-bottom:1.5rem}.config-demo-card[_ngcontent-%COMP%]   .config-display[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{margin:0 0 .5rem;font-size:.875rem;font-weight:600;color:var(--cmp-text-primary);text-transform:uppercase;letter-spacing:.5px}.config-demo-card[_ngcontent-%COMP%]   .config-display[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{background:var(--cmp-code-bg);border:1px solid var(--cmp-border-light);border-radius:var(--cmp-radius-sm);padding:var(--cmp-spacing-4);margin:0;overflow-x:auto}.config-demo-card[_ngcontent-%COMP%]   .config-display[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{font-family:Courier New,monospace;font-size:var(--cmp-font-sm);color:var(--cmp-gray-200)}.config-demo-card[_ngcontent-%COMP%]   .date-picker-demo[_ngcontent-%COMP%]{margin-bottom:1.5rem}.config-demo-card[_ngcontent-%COMP%]   .date-picker-demo[_ngcontent-%COMP%]   .cmp-form-label[_ngcontent-%COMP%]{display:block;margin-bottom:.5rem;font-weight:var(--cmp-font-medium);color:var(--cmp-text-primary)}.config-demo-card[_ngcontent-%COMP%]   .code-example[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{margin:0 0 .5rem;font-size:var(--cmp-font-sm);font-weight:var(--cmp-font-semibold);color:var(--cmp-text-primary);text-transform:uppercase;letter-spacing:.5px}.config-demo-card[_ngcontent-%COMP%]   .code-example[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{background:var(--cmp-code-bg);border:1px solid var(--cmp-border-light);border-radius:var(--cmp-radius-sm);padding:var(--cmp-spacing-4);margin:0;overflow-x:auto}.config-demo-card[_ngcontent-%COMP%]   .code-example[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{font-family:Courier New,monospace;font-size:var(--cmp-font-sm);color:var(--cmp-gray-200);line-height:1.5}"]});}}return r})();var j=(()=>{class r{constructor(){this.configService=new Rr,this.activeConfig=Tt(()=>this.configService.getConfig());}formatConfig(){let i=this.activeConfig();return JSON.stringify({locale:i.locale,firstDayOfWeek:i.firstDayOfWeek,timeZone:i.timeZone||"browser default"},null,2)}static{this.\u0275fac=function(l){return new(l||r)};}static{this.\u0275cmp=GE({type:r,selectors:[["playground-no-config-demo"]],features:[RT([Rr])],decls:31,vars:1,consts:[[1,"config-demo-card"],[1,"config-header"],[1,"badge","badge-info"],[1,"config-info"],[1,"config-display"],[1,"date-picker-demo"],[1,"cmp-form-label"],["placeholder","Select a date"],[1,"code-example"]],template:function(l,o){l&1&&(Ni(0,"div",0)(1,"div",1)(2,"h4"),mT(3,"Default Configuration Only"),Xc(),Ni(4,"span",2),mT(5,"No Providers"),Xc()(),Ni(6,"div",3)(7,"p")(8,"strong"),mT(9,"Configuration Source:"),Xc(),mT(10," Default values only"),Xc(),Ni(11,"p")(12,"strong"),mT(13,"Precedence:"),Xc(),mT(14," Uses hardcoded defaults (no global or component config)"),Xc()(),Ni(15,"div",4)(16,"h5"),mT(17,"Active Configuration:"),Xc(),Ni(18,"pre")(19,"code"),mT(20),Xc()()(),Ni(21,"div",5)(22,"label",6),mT(23,"Date Picker (Default: en-US, Sunday first)"),Xc(),Yp(24,"ui-date-picker",7),Xc(),Ni(25,"div",8)(26,"h5"),mT(27,"Component Setup:"),Xc(),Ni(28,"pre")(29,"code"),mT(30,`@Component({
  selector: 'my-component',
  providers: [DatePickerConfigService] // No token provider
})
export class MyComponent { 
  // Uses default configuration:
  // - locale: 'en-US'
  // - firstDayOfWeek: 0 (Sunday)
}`),Xc()()()()),l&2&&(hI(20),Ch(o.formatConfig()));},dependencies:[qx],styles:[".config-demo-card[_ngcontent-%COMP%]{border:1px solid var(--cmp-border-color);border-radius:var(--cmp-radius);padding:1.5rem;background:var(--cmp-surface);margin-bottom:1rem}.config-demo-card[_ngcontent-%COMP%]   .config-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem;padding-bottom:.75rem;border-bottom:1px solid var(--cmp-border-color)}.config-demo-card[_ngcontent-%COMP%]   .config-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin:0;font-size:1.125rem;font-weight:600;color:var(--cmp-text-primary)}.config-demo-card[_ngcontent-%COMP%]   .config-header[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%]{padding:.25rem .75rem;border-radius:1rem;font-size:.75rem;font-weight:600;text-transform:uppercase}.config-demo-card[_ngcontent-%COMP%]   .config-header[_ngcontent-%COMP%]   .badge.badge-primary[_ngcontent-%COMP%]{background:var(--cmp-primary);color:var(--cmp-white)}.config-demo-card[_ngcontent-%COMP%]   .config-header[_ngcontent-%COMP%]   .badge.badge-warning[_ngcontent-%COMP%]{background:var(--cmp-warning);color:var(--cmp-white)}.config-demo-card[_ngcontent-%COMP%]   .config-header[_ngcontent-%COMP%]   .badge.badge-info[_ngcontent-%COMP%]{background:var(--cmp-info);color:var(--cmp-white)}.config-demo-card[_ngcontent-%COMP%]   .config-info[_ngcontent-%COMP%]{margin-bottom:1rem}.config-demo-card[_ngcontent-%COMP%]   .config-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:.25rem 0;font-size:.875rem;color:var(--cmp-text-secondary)}.config-demo-card[_ngcontent-%COMP%]   .config-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:var(--cmp-text-primary)}.config-demo-card[_ngcontent-%COMP%]   .config-display[_ngcontent-%COMP%]{margin-bottom:1.5rem}.config-demo-card[_ngcontent-%COMP%]   .config-display[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{margin:0 0 .5rem;font-size:.875rem;font-weight:600;color:var(--cmp-text-primary);text-transform:uppercase;letter-spacing:.5px}.config-demo-card[_ngcontent-%COMP%]   .config-display[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{background:var(--cmp-code-bg);border:1px solid var(--cmp-border-light);border-radius:var(--cmp-radius-sm);padding:var(--cmp-spacing-4);margin:0;overflow-x:auto}.config-demo-card[_ngcontent-%COMP%]   .config-display[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{font-family:Courier New,monospace;font-size:var(--cmp-font-sm);color:var(--cmp-gray-200)}.config-demo-card[_ngcontent-%COMP%]   .date-picker-demo[_ngcontent-%COMP%]{margin-bottom:1.5rem}.config-demo-card[_ngcontent-%COMP%]   .date-picker-demo[_ngcontent-%COMP%]   .cmp-form-label[_ngcontent-%COMP%]{display:block;margin-bottom:.5rem;font-weight:var(--cmp-font-medium);color:var(--cmp-text-primary)}.config-demo-card[_ngcontent-%COMP%]   .code-example[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{margin:0 0 .5rem;font-size:var(--cmp-font-sm);font-weight:var(--cmp-font-semibold);color:var(--cmp-text-primary);text-transform:uppercase;letter-spacing:.5px}.config-demo-card[_ngcontent-%COMP%]   .code-example[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{background:var(--cmp-code-bg);border:1px solid var(--cmp-border-light);border-radius:var(--cmp-radius-sm);padding:var(--cmp-spacing-4);margin:0;overflow-x:auto}.config-demo-card[_ngcontent-%COMP%]   .code-example[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{font-family:Courier New,monospace;font-size:var(--cmp-font-sm);color:var(--cmp-gray-200);line-height:1.5}"]});}}return r})();var J=()=>["Form Control","Signal","i18n","Calendar"];function Y(r,P){if(r&1&&(Ni(0,"ui-alert",17),mT(1," Selected: "),Ni(2,"strong"),mT(3),Xc()()),r&2){let i=FD();hI(3),Ch(i.selectedDate().toLocaleDateString());}}function X(r,P){if(r&1&&(mT(0," to "),Ni(1,"strong"),mT(2),Xc()),r&2){let i=FD(2);hI(2),Ch(i.selectedRange().end.toLocaleDateString());}}function q(r,P){if(r&1&&(Ni(0,"ui-alert",17),mT(1," Selected Range: "),Ni(2,"strong"),mT(3),Xc(),vD(4,X,3,1),Xc()),r&2){let i=FD();hI(3),Ch(i.selectedRange().start.toLocaleDateString()),hI(),ID(i.selectedRange()?.end?4:-1);}}function H(r,P){if(r&1&&(Ni(0,"ui-alert",25),mT(1," Bound Value: "),Ni(2,"strong"),mT(3),Xc()()),r&2){let i=FD();hI(3),Ch(i.boundDate().toLocaleDateString());}}function Q(r,P){if(r&1&&(Ni(0,"ui-alert",56),mT(1),Xc()),r&2){let i=FD();hI(),ol(" Bound Value: ",i.boundDate().toLocaleDateString()," ");}}function $(r,P){if(r&1&&(mT(0," - Range End: "),Ni(1,"strong"),mT(2),Xc()),r&2){let i=FD(2);hI(2),Ch(i.selectedRange().end.toLocaleDateString());}}function ee(r,P){if(r&1&&(Ni(0,"ui-alert",17),mT(1," Range Start: "),Ni(2,"strong"),mT(3),Xc(),vD(4,$,3,1),Xc()),r&2){let i=FD();hI(3),Ch(i.selectedRange().start.toLocaleDateString()),hI(),ID(i.selectedRange()?.end?4:-1);}}var Me=(()=>{class r{constructor(){this.configService=new Rr,this.snippets=B,this.globalConfig=Tt(()=>this.configService.getConfig()),this.modifiedGlobalLocale=He(eo.EnglishUS),this.modifiedGlobalFirstDay=He(to.Monday),this.selectedDate=He(null),this.DatePickerSizeEnum=Ar,this.DatePickerSelectionModeEnum=ft,this.boundDate=He(null),this.selectedRange=He({start:new Date,end:new Date(new Date().setDate(new Date().getDate()+5))}),this.minMaxConfig=Ax(new Date,new Date(new Date().setMonth(new Date().getMonth()+3))),this.disabledDatesConfig=Rx([new Date(2026,4,1),new Date(2026,4,15),new Date(2026,4,25)]),this.mondayFirstConfig={firstDayOfWeek:to.Monday},this.timezoneConfig={locale:eo.EnglishUS,timeZone:Fu.NewYork},this.timezoneConfigTokyo={locale:eo.Japanese,timeZone:Fu.Tokyo},this.timezoneConfigLondon={locale:eo.EnglishGB,timeZone:Fu.London},this.datePickerProps=[{name:"placeholder",type:"string",default:"'Select date'",description:"Placeholder text for the input field."},{name:"size",type:"DatePickerSize ('sm' | 'md' | 'lg')",default:"'md'",description:"Size variant of the date picker."},{name:"disabled",type:"boolean",default:"false",description:"Whether the date picker is disabled."},{name:"value",type:"Date | null",default:"null",description:"Two-way bindable model signal for the selected date."}],this.datePickerOutputs=[{name:"dateChange",type:"OutputEmitterRef<Date | null>",description:"Emits when a date is selected or cleared."},{name:"valueChange",type:"OutputEmitterRef<Date | null>",description:"Emits when the model value changes (for two-way binding)."}],this.providerConfigProps=[{name:"DATE_PICKER_CONFIG_TOKEN",type:"InjectionToken<Partial<IDatePickerConfig>>",default:"undefined",description:"Injection token for providing date picker configuration at app or component level."},{name:"DatePickerConfigService",type:"Injectable",default:"N/A",description:"Service that merges configuration from multiple sources (Default \u2192 Global \u2192 Component)."}],this.configProps=[{name:"minDate",type:"Date",default:"undefined",description:"Minimum selectable date."},{name:"maxDate",type:"Date",default:"undefined",description:"Maximum selectable date."},{name:"disabledDates",type:"Date[]",default:"undefined",description:"Array of dates that should be disabled."},{name:"locale",type:"Locale (LocaleEnum | string)",default:"'en-US'",description:"BCP 47 locale identifier. Use LocaleEnum for common locales."},{name:"timeZone",type:"TimeZone (TimeZoneEnum | string)",default:"undefined",description:"IANA timezone identifier. Use TimeZoneEnum for common timezones."},{name:"firstDayOfWeek",type:"FirstDayOfWeek (0-6)",default:"0",description:"First day of the week. Use FirstDayOfWeekEnum for clarity."}],this.datePickerTokens=[{localVar:"--ui-datepicker-bg",mapsTo:"var(--cmp-white)",description:"Main picker input container background color",type:"color"},{localVar:"--ui-datepicker-border-color",mapsTo:"var(--cmp-gray-300)",description:"Border color for input container",type:"color"},{localVar:"--ui-datepicker-border-radius",mapsTo:"var(--cmp-radius)",description:"Corner radius for input container",type:"radius"},{localVar:"--ui-datepicker-focus-border-color",mapsTo:"var(--cmp-primary)",description:"Input container border color when focused",type:"color"},{localVar:"--ui-datepicker-focus-shadow",mapsTo:"0 0 0 3px var(--cmp-primary-soft)",description:"Box shadow for focused state",type:"value"},{localVar:"--ui-datepicker-disabled-bg",mapsTo:"var(--cmp-gray-50)",description:"Background color when disabled",type:"color"},{localVar:"--ui-datepicker-text-color",mapsTo:"var(--cmp-gray-900)",description:"Text color inside the date picker",type:"color"},{localVar:"--ui-datepicker-dropdown-bg",mapsTo:"var(--cmp-white)",description:"Calendar dropdown background color",type:"color"},{localVar:"--ui-datepicker-dropdown-radius",mapsTo:"var(--cmp-radius-md)",description:"Dropdown corner radius",type:"radius"},{localVar:"--ui-datepicker-dropdown-shadow",mapsTo:"var(--cmp-shadow-lg)",description:"Dropdown box shadow",type:"value"},{localVar:"--ui-datepicker-day-selected-bg",mapsTo:"var(--cmp-primary)",description:"Background color of selected day cell",type:"color"},{localVar:"--ui-datepicker-day-selected-color",mapsTo:"var(--cmp-white)",description:"Text color of selected day cell",type:"color"},{localVar:"--ui-datepicker-day-today-color",mapsTo:"var(--cmp-primary)",description:"Text color of current/today day cell",type:"color"},{localVar:"--ui-datepicker-day-in-range-bg",mapsTo:"var(--cmp-primary-soft)",description:"Background of days in selected range",type:"color"}],this.datePickerOverrideSnippet=`// Custom styling for Date Picker
ui-date-picker {
  --ui-datepicker-border-radius: var(--cmp-radius-lg);
  --ui-datepicker-focus-border-color: var(--cmp-secondary);
  --ui-datepicker-day-selected-bg: var(--cmp-secondary);
  --ui-datepicker-day-in-range-bg: var(--cmp-secondary-soft);
}`;}onDateChange(i){this.selectedDate.set(i);}formatConfig(i){return JSON.stringify({locale:i.locale,firstDayOfWeek:i.firstDayOfWeek,timeZone:i.timeZone||"browser default",minDate:i.minDate?"set":"undefined",maxDate:i.maxDate?"set":"undefined",disabledDates:i.disabledDates?`${i.disabledDates.length} dates`:"undefined"},null,2)}updateGlobalLocale(i){this.modifiedGlobalLocale.set(i);}updateGlobalFirstDay(i){this.modifiedGlobalFirstDay.set(i);}static{this.\u0275fac=function(l){return new(l||r)};}static{this.\u0275cmp=GE({type:r,selectors:[["playground-date-picker-demo"]],decls:176,vars:41,consts:[["title","Date Picker","description","A minimal, accessible date picker component with calendar dropdown, built with Angular 21 signals and Intl.DateTimeFormat",3,"tags","apiReference","examples","theming"],["demo",""],[1,"cmp-mb-5"],[1,"cmp-mb-3"],["variant","info","title","Configuration Precedence",1,"cmp-mb-4"],[1,"config-precedence-visual","cmp-mb-4"],[1,"precedence-flow"],[1,"precedence-step"],[1,"step-number"],[1,"step-content"],[1,"precedence-arrow"],[1,"config-scenarios"],[1,"cmp-my-5"],["variant","info","title","Timezone Behavior",1,"cmp-mb-4"],[1,"cmp-d-flex","cmp-flex-column","cmp-gap-4"],[1,"cmp-form-label"],["placeholder","Select a date",3,"dateChange"],["variant","success",1,"cmp-mt-2"],["placeholder","Select date range",3,"rangeValueChange","selectionMode","rangeValue"],[1,"cmp-d-flex","cmp-gap-3"],[1,"cmp-flex-1"],["placeholder","Small",3,"size"],["placeholder","Medium",3,"size"],["placeholder","Large",3,"size"],["placeholder","Select date",3,"valueChange","value"],["variant","primary",1,"cmp-mt-2"],["api",""],[1,"cmp-mb-4"],["variant","info","title","Migration Note",1,"cmp-mb-4"],["title","Provider Configuration",3,"properties"],[1,"cmp-mb-4","cmp-mt-5"],["title","Date Picker Inputs",3,"properties"],["title","Date Picker Outputs",3,"properties"],["title","IDatePickerConfig Interface",3,"properties"],["examples",""],["title","Global Configuration (app.config.ts)","description","Set application-wide defaults for all date pickers",3,"code"],["variant","success","title","Best Practice"],["title","Component-Level Override","description","Override global configuration for specific components",3,"code"],["variant","warning","title","Component Providers"],["title","Route-Level Configuration","description","Apply configuration to all components within a route",3,"code"],["variant","info","title","Route Providers"],["title","Basic Usage","description","Simple date picker with default configuration",3,"code"],["title","Size Variants","description","Three size options: small, medium (default), and large",3,"code"],["title","Min/Max Date Restrictions","description","Restrict selectable dates to a specific range using provider configuration",3,"code"],["variant","warning","title","Note",1,"cmp-mb-3"],["placeholder","Next 3 months only"],[1,"cmp-text-muted","cmp-d-block","cmp-mt-2"],["title","Disabled Specific Dates","description","Disable specific dates (e.g., holidays, blackout dates) using provider configuration",3,"code"],["placeholder","Some dates disabled"],["title","First Day of Week","description","Configure calendar to start on Monday instead of Sunday using provider configuration",3,"code"],["placeholder","Week starts Monday"],["title","Timezone Support","description","Use IANA timezone identifiers for consistent date display across locations via provider configuration",3,"code"],[1,"cmp-d-flex","cmp-flex-column","cmp-gap-3"],["placeholder","Select date"],[1,"cmp-text-muted"],["title","Two-Way Binding","description","Use Angular 21's model signal for two-way binding",3,"code"],["variant","info",1,"cmp-mt-2"],["title","Date Range Picker","description","Enable date range selection (start and end date) with interactive highlights",3,"code"],["title","Disabled State","description","Disable the date picker when needed",3,"code"],["placeholder","Disabled date picker",3,"disabled"],["theming",""],["title","Date Picker CSS Custom Properties",3,"tokens","overrideSnippet"]],template:function(l,o){l&1&&(Ni(0,"playground-demo-page-template",0)(1,"div",1)(2,"div",2)(3,"h3",3),mT(4,"Provider-Based Configuration System"),Xc(),Ni(5,"ui-alert",4),mT(6," Default \u2192 Global (app.config.ts) \u2192 Component (providers array) "),Yp(7,"br"),Ni(8,"small"),mT(9,"The date picker uses Angular's dependency injection to manage configuration. Each level overrides the previous one."),Xc()(),Ni(10,"div",5)(11,"div",6)(12,"div",7)(13,"div",8),mT(14,"1"),Xc(),Ni(15,"div",9)(16,"strong"),mT(17,"Default Config"),Xc(),Ni(18,"small"),mT(19,"en-US, Sunday first"),Xc()()(),Ni(20,"div",10),mT(21,"\u2192"),Xc(),Ni(22,"div",7)(23,"div",8),mT(24,"2"),Xc(),Ni(25,"div",9)(26,"strong"),mT(27,"Global Config"),Xc(),Ni(28,"small"),mT(29,"app.config.ts providers"),Xc()()(),Ni(30,"div",10),mT(31,"\u2192"),Xc(),Ni(32,"div",7)(33,"div",8),mT(34,"3"),Xc(),Ni(35,"div",9)(36,"strong"),mT(37,"Component Config"),Xc(),Ni(38,"small"),mT(39,"Component providers"),Xc()()()()(),Ni(40,"div",11)(41,"h4",3),mT(42,"Configuration Scenarios"),Xc(),Yp(43,"playground-global-config-demo")(44,"playground-component-override-demo")(45,"playground-no-config-demo"),Xc()(),Yp(46,"hr",12),Ni(47,"ui-alert",13),mT(48," When no timezone is specified, the date picker uses the user's local timezone automatically. Specify a timezone for consistent display across locations. "),Xc(),Ni(49,"div",14)(50,"div")(51,"label",15),mT(52,"Basic Date Picker"),Xc(),Ni(53,"ui-date-picker",16),nh("dateChange",function(m){return o.onDateChange(m)}),Xc(),vD(54,Y,4,1,"ui-alert",17),Xc(),Ni(55,"div")(56,"label",15),mT(57,"Date Range Picker"),Xc(),Ni(58,"ui-date-picker",18),Ah("rangeValueChange",function(m){return wT(o.selectedRange,m)||(o.selectedRange=m),m}),Xc(),vD(59,q,5,2,"ui-alert",17),Xc(),Ni(60,"div",19)(61,"div",20)(62,"label",15),mT(63,"Small Size"),Xc(),Yp(64,"ui-date-picker",21),Xc(),Ni(65,"div",20)(66,"label",15),mT(67,"Medium (Default)"),Xc(),Yp(68,"ui-date-picker",22),Xc(),Ni(69,"div",20)(70,"label",15),mT(71,"Large Size"),Xc(),Yp(72,"ui-date-picker",23),Xc()(),Ni(73,"div")(74,"label",15),mT(75,"Two-Way Binding"),Xc(),Ni(76,"ui-date-picker",24),Ah("valueChange",function(m){return wT(o.boundDate,m)||(o.boundDate=m),m}),Xc(),vD(77,H,4,1,"ui-alert",25),Xc()()(),Ni(78,"div",26)(79,"h3",27),mT(80,"Provider-Based Configuration API"),Xc(),Ni(81,"ui-alert",28),mT(82," The "),Ni(83,"code"),mT(84,"@Input() config"),Xc(),mT(85," property has been removed. Configuration is now managed through Angular's dependency injection system using providers. "),Xc(),Yp(86,"playground-api-table",29),Ni(87,"h3",30),mT(88,"Component API"),Xc(),Yp(89,"playground-api-table",31)(90,"playground-api-table",32)(91,"playground-api-table",33),Xc(),Ni(92,"div",34)(93,"h3",27),mT(94,"Provider-Based Configuration Examples"),Xc(),Ni(95,"playground-example-viewer",35)(96,"ui-alert",36),mT(97," Define global configuration in app.config.ts for consistent behavior across your application. "),Xc()(),Ni(98,"playground-example-viewer",37)(99,"ui-alert",38),mT(100," Use component providers to customize date pickers for specific features or sections. "),Xc()(),Ni(101,"playground-example-viewer",39)(102,"ui-alert",40),mT(103," Perfect for multi-language applications or region-specific sections. "),Xc()(),Yp(104,"hr",12),Ni(105,"h3",27),mT(106,"Component Usage Examples"),Xc(),Ni(107,"playground-example-viewer",41)(108,"ui-date-picker",16),nh("dateChange",function(m){return o.onDateChange(m)}),Xc()(),Ni(109,"playground-example-viewer",42)(110,"div",19),Yp(111,"ui-date-picker",21)(112,"ui-date-picker",22)(113,"ui-date-picker",23),Xc()(),Ni(114,"playground-example-viewer",43)(115,"ui-alert",44),mT(116," This example uses the legacy "),Ni(117,"code"),mT(118,"@Input() config"),Xc(),mT(119," pattern for demonstration. In production, use provider-based configuration as shown in the examples above. "),Xc(),Yp(120,"ui-date-picker",45),Ni(121,"small",46),mT(122," Configure min/max dates via providers for production use. "),Xc()(),Ni(123,"playground-example-viewer",47)(124,"ui-alert",44),mT(125," This example uses the legacy "),Ni(126,"code"),mT(127,"@Input() config"),Xc(),mT(128," pattern for demonstration. In production, use provider-based configuration as shown in the examples above. "),Xc(),Yp(129,"ui-date-picker",48),Ni(130,"small",46),mT(131," Configure disabled dates via providers for production use. "),Xc()(),Ni(132,"playground-example-viewer",49)(133,"ui-alert",44),mT(134," This example uses the legacy "),Ni(135,"code"),mT(136,"@Input() config"),Xc(),mT(137," pattern for demonstration. In production, use provider-based configuration as shown in the examples above. "),Xc(),Yp(138,"ui-date-picker",50),Ni(139,"small",46),mT(140," Configure first day of week via providers for production use. "),Xc()(),Ni(141,"playground-example-viewer",51)(142,"ui-alert",44),mT(143," This example uses the legacy "),Ni(144,"code"),mT(145,"@Input() config"),Xc(),mT(146," pattern for demonstration. In production, use provider-based configuration as shown in the examples above. "),Xc(),Ni(147,"div",52)(148,"div")(149,"label",15),mT(150,"New York (America/New_York)"),Xc(),Yp(151,"ui-date-picker",53),Ni(152,"small",54),mT(153,"Configure timezone via providers for production use."),Xc()(),Ni(154,"div")(155,"label",15),mT(156,"Tokyo (Asia/Tokyo)"),Xc(),Yp(157,"ui-date-picker",53),Ni(158,"small",54),mT(159,"Configure timezone via providers for production use."),Xc()(),Ni(160,"div")(161,"label",15),mT(162,"London (Europe/London)"),Xc(),Yp(163,"ui-date-picker",53),Ni(164,"small",54),mT(165,"Configure timezone via providers for production use."),Xc()()()(),Ni(166,"playground-example-viewer",55)(167,"ui-date-picker",24),Ah("valueChange",function(m){return wT(o.boundDate,m)||(o.boundDate=m),m}),Xc(),vD(168,Q,2,1,"ui-alert",56),Xc(),Ni(169,"playground-example-viewer",57)(170,"ui-date-picker",18),Ah("rangeValueChange",function(m){return wT(o.selectedRange,m)||(o.selectedRange=m),m}),Xc(),vD(171,ee,5,2,"ui-alert",17),Xc(),Ni(172,"playground-example-viewer",58),Yp(173,"ui-date-picker",59),Xc()(),Ni(174,"div",60),Yp(175,"playground-token-table",61),Xc()()),l&2&&(Zp("tags",kT(40,J))("apiReference",true)("examples",true)("theming",true),hI(54),ID(o.selectedDate()?54:-1),hI(4),Zp("selectionMode",o.DatePickerSelectionModeEnum.Range),xh("rangeValue",o.selectedRange),hI(),ID(o.selectedRange()?.start?59:-1),hI(5),Zp("size",o.DatePickerSizeEnum.Small),hI(4),Zp("size",o.DatePickerSizeEnum.Medium),hI(4),Zp("size",o.DatePickerSizeEnum.Large),hI(4),xh("value",o.boundDate),hI(),ID(o.boundDate()?77:-1),hI(9),Zp("properties",o.providerConfigProps),hI(3),Zp("properties",o.datePickerProps),hI(),Zp("properties",o.datePickerOutputs),hI(),Zp("properties",o.configProps),hI(4),Zp("code",o.snippets.providerGlobal),hI(3),Zp("code",o.snippets.providerComponent),hI(3),Zp("code",o.snippets.providerRoute),hI(6),Zp("code",o.snippets.basic),hI(2),Zp("code",o.snippets.sizes),hI(2),Zp("size",o.DatePickerSizeEnum.Small),hI(),Zp("size",o.DatePickerSizeEnum.Medium),hI(),Zp("size",o.DatePickerSizeEnum.Large),hI(),Zp("code",o.snippets.minMax),hI(9),Zp("code",o.snippets.disabledDates),hI(9),Zp("code",o.snippets.firstDayOfWeek),hI(9),Zp("code",o.snippets.timezone),hI(25),Zp("code",o.snippets.twoWayBinding),hI(),xh("value",o.boundDate),hI(),ID(o.boundDate()?168:-1),hI(),Zp("code",o.snippets.range||""),hI(),Zp("selectionMode",o.DatePickerSelectionModeEnum.Range),xh("rangeValue",o.selectedRange),hI(),ID(o.selectedRange()?.start?171:-1),hI(),Zp("code",o.snippets.disabled),hI(),Zp("disabled",true),hI(2),Zp("tokens",o.datePickerTokens)("overrideSnippet",o.datePickerOverrideSnippet));},dependencies:[qx,rn,P,h,Z,U,j,Rk,N],styles:["[_nghost-%COMP%]{display:block}ui-date-picker[_ngcontent-%COMP%]{display:block;width:100%}.config-precedence-visual[_ngcontent-%COMP%]{background:var(--cmp-surface);border:1px solid var(--cmp-border-color);border-radius:var(--cmp-radius);padding:2rem}.config-precedence-visual[_ngcontent-%COMP%]   .precedence-flow[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;gap:1rem;flex-wrap:wrap}.config-precedence-visual[_ngcontent-%COMP%]   .precedence-flow[_ngcontent-%COMP%]   .precedence-step[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.75rem;padding:1rem 1.5rem;background:var(--cmp-white);border:2px solid var(--cmp-primary);border-radius:var(--cmp-radius);min-width:180px}.config-precedence-visual[_ngcontent-%COMP%]   .precedence-flow[_ngcontent-%COMP%]   .precedence-step[_ngcontent-%COMP%]   .step-number[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:2rem;height:2rem;background:var(--cmp-primary);color:var(--cmp-white);border-radius:50%;font-weight:700;font-size:1rem;flex-shrink:0}.config-precedence-visual[_ngcontent-%COMP%]   .precedence-flow[_ngcontent-%COMP%]   .precedence-step[_ngcontent-%COMP%]   .step-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.25rem}.config-precedence-visual[_ngcontent-%COMP%]   .precedence-flow[_ngcontent-%COMP%]   .precedence-step[_ngcontent-%COMP%]   .step-content[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:.875rem;color:var(--cmp-text-primary);font-weight:600}.config-precedence-visual[_ngcontent-%COMP%]   .precedence-flow[_ngcontent-%COMP%]   .precedence-step[_ngcontent-%COMP%]   .step-content[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:.75rem;color:var(--cmp-text-secondary)}.config-precedence-visual[_ngcontent-%COMP%]   .precedence-flow[_ngcontent-%COMP%]   .precedence-arrow[_ngcontent-%COMP%]{font-size:1.5rem;color:var(--cmp-primary);font-weight:700}.config-scenarios[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:1.25rem;font-weight:600;color:var(--cmp-text-primary);margin-bottom:1rem}"]});}}return r})();export{Me as DatePickerDemoComponent};