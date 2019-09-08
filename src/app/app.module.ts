import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';
import { TimeComponent } from './time/time.component';
import { TempleteDrivenFormComponent } from './templete-driven-form/templete-driven-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TimeComponent,
    TempleteDrivenFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
