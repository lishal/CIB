// import { ApplicationConfig, InjectionToken } from '@angular/core';
// import{provideHttpClient} from '@angular/common/http'

// export let CIB_BASE_URL = new InjectionToken<string>('CIB_BASE_URL');

// export const AppConfig: ApplicationConfig = {
//     providers:[{
//         provide:CIB_BASE_URL,useValue:'https://services.odata.org/V4/OData/OData.svc/',
//     },
//     provideHttpClient(),
//   ]
// };

import { NgModule,InjectionToken } from '@angular/core';
import{provideHttpClient} from '@angular/common/http'

export let CIB_BASE_URL = new InjectionToken<string>('CIB_BASE_URL');
@NgModule({
  providers: [
    {
      provide: CIB_BASE_URL,
      useValue: 'https://services.odata.org/V4/OData/OData.svc'
    },
    provideHttpClient(),
  ],
})
export class AppConfigModule {}