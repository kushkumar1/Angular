import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MyNewComponentComponent } from './my-new-component/my-new-component.component';
import { NgForTestComponent } from './ng-for-test/ng-for-test.component';
import { NgIfTestComponent } from './ng-if-test/ng-if-test.component';
import { ProperybindingComponent } from './properybinding/properybinding.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { CssCheckComponent } from './css-check/css-check.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { DataService } from './data.service';


@NgModule({
  declarations: [
    AppComponent,
    MyNewComponentComponent,
    NgForTestComponent,
    NgIfTestComponent,
    ProperybindingComponent,
    EventbindingComponent,
    CssCheckComponent,
    ClassBindingComponent,
    StyleBindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
