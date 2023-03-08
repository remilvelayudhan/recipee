import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ResultsComponent } from './components/results/results.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailsComponent } from './components/details/details.component';
@NgModule({
  declarations: [
    AppComponent,

    HomeComponent,
     ResultsComponent,
     DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
