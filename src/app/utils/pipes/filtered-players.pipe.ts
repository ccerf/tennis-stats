import { Pipe, PipeTransform } from "@angular/core";
import { IPlayer } from "src/app/modules/home/models/home.models";

@Pipe({
	name: "filteredPlayers",
})
export class FilteredPlayersPipe implements PipeTransform {
	transform(players: IPlayer[], value: string): IPlayer[] {
		return players.filter((player) => {
			const fullName = `${player.firstname} ${player.lastname}`;
			return fullName.toLowerCase().includes(value.toLowerCase());
		});
	}
}
