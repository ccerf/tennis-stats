import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
	title = "tennis-stats";

	constructor(private router: Router) {}

	ngOnInit(): void {
		void this.router.navigate(["/home"]);
	}
}
