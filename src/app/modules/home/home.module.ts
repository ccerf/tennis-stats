import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { HomeComponent } from "./home/home.component";
import { HomeService } from "./services/home.service";
import { PlayerDetailComponent } from "./player-detail/player-detail.component";
import { CardComponent } from "./card/card.component";
import { FormsModule } from "@angular/forms";
import { FilteredPlayersPipe } from "src/app/utils/pipes/filtered-players.pipe";

@NgModule({
	declarations: [HomeComponent, CardComponent, PlayerDetailComponent, FilteredPlayersPipe],
	imports: [CommonModule, HttpClientModule, FormsModule],
	exports: [],
	providers: [HomeService],
})
export class HomeModule {}
