import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
// import { NewPollComponent } from './new-poll/new-poll.component';
import { ResponsesComponent } from './responses/responses.component';
import { UseranswerComponent } from './useranswer/useranswer.component';
import { SubmissionComponent } from './submission/submission.component';
import { FusionChartsModule } from 'angular-fusioncharts';
import * as FusionCharts from 'fusioncharts';
import * as charts from 'fusioncharts/fusioncharts.charts';
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import { NewPollComponent } from './new-poll/new-poll.component';

// import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

FusionChartsModule.fcRoot(FusionCharts, charts, FusionTheme);



// Pass the fusioncharts library and chart module
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    // NewPollComponent,
    ResponsesComponent,
    UseranswerComponent,
    SubmissionComponent,
    AppComponent,
    NewPollComponent,


  ],
  entryComponents: [

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FusionChartsModule,
    ReactiveFormsModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class AppModule { }
