import { Component, Input } from "@angular/core";
import { IPlayer } from "../models/home.models";

@Component({
	selector: "app-card",
	templateUrl: "./card.component.html",
	styleUrls: ["./card.component.scss"],
})
export class CardComponent {
	@Input() player: IPlayer;
}
