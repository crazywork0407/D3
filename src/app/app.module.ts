import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { NgxSliderModule } from '@angular-slider/ngx-slider';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MatTableModule,
    NgxSliderModule,
    AgmCoreModule.forRoot({
      apiKey: ''
    }),
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
