import { Component, OnInit } from "@angular/core";
import { HomeService } from "../services/home.service";
import { tap } from "rxjs";
import { IPlayer, IPlayers } from "../models/home.models";

@Component({
	selector: "app-home",
	templateUrl: "./home.component.html",
	styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
	public isDetailDisplayed = false;
	public players: IPlayer[];
	public searchString: string = "";
	public selectedPlayer: IPlayer;

	constructor(private homeService: HomeService) {}

	ngOnInit(): void {
		this.getPlayersList();
	}

	public openDetail(player: IPlayer): void {
		this.isDetailDisplayed = true;
		this.selectedPlayer = player;
	}

	public closeDialog(): void {
		this.isDetailDisplayed = false;
	}

	private getPlayersList(): void {
		this.homeService
			.getPlayers()
			.pipe(
				tap((result) => {
					this.players = result.players;
				})
			)
			.subscribe();
	}
}
