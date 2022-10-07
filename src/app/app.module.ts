import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { NgSelectModule } from "@ng-select/ng-select";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { Select2Component } from "./select/select2/select2.component";

@NgModule({
  declarations: [AppComponent, Select2Component],
  imports: [BrowserModule, AppRoutingModule, FormsModule, NgSelectModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
