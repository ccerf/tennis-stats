import { Pipe, PipeTransform } from "@angular/core";
import { IPlayer } from "src/app/modules/home/models/home.models";

@Pipe({
	name: "filteredPlayers",
})
export class FilteredPlayersPipe implements PipeTransform {
	transform(players: IPlayer[], value: string): IPlayer[] {
		value = value.toLowerCase();

		return players.filter((player) => {
			return player.firstname.toLowerCase().includes(value) || player.lastname.toLowerCase().includes(value);
		});
	}
}
