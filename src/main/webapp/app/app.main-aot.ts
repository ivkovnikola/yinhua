import { platformBrowser } from '@angular/platform-browser';
import { ProdConfig } from './blocks/config/prod.config';
import { YinhuaAppModuleNgFactory } from '../../../../build/aot/src/main/webapp/app/app.module.ngfactory';

ProdConfig();

platformBrowser().bootstrapModuleFactory(YinhuaAppModuleNgFactory)
.then((success) => console.log(`Application started`))
.catch((err) => console.error(err));
