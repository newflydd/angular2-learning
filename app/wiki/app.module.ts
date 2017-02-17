import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule} from '@angular/http';

import { WikiComponent } from './component/wiki.component';

import './rxjs-operators.import';

@NgModule({
    imports :   [
        BrowserModule, HttpModule, JsonpModule
    ],
    declarations    :   [
        WikiComponent
    ],
    bootstrap   :   [
        WikiComponent
    ]
})
export class AppModule{}