import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IPlayers } from "../models/home.models";

@Injectable({
	providedIn: "root",
})
export class HomeService {
	constructor(private http: HttpClient) {}

	public getPlayers(): Observable<any> {
		return this.http.get("https://data.latelier.co/training/tennis_stats/headtohead.json");
	}
}
