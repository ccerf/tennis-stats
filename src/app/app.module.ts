import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { HomeModule } from "./modules/home/home.module";

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, AppRoutingModule, HttpClientModule, CommonModule, HomeModule],
	providers: [],
	bootstrap: [AppComponent],
	exports: [],
})
export class AppModule {}
