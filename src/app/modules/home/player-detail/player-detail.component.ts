import { Component, EventEmitter, Input, Output } from "@angular/core";
import { IPlayer } from "../models/home.models";

@Component({
	selector: "app-player-detail",
	templateUrl: "./player-detail.component.html",
	styleUrls: ["./player-detail.component.scss"],
})
export class PlayerDetailComponent {
	@Input() player: IPlayer;
	@Output() closeEvent = new EventEmitter();

	public closeDialog(): void {
		this.closeEvent.emit();
	}
}
