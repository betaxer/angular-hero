import {Routes, RouterModule} from "@angular/router";
import {DashboardComponent} from "./dashboard.component";
import {HeroesComponent} from "./heroes.component";
import {HeroDetailComponent} from "./hero-detail.component";
import {NgModule} from "@angular/core";
/**
 * Created by vincent on 19/03/2017.
 */
const routes: Routes = [
    {   path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    {   path: 'dashboard', component: DashboardComponent},
    {   path: 'heroes', component: HeroesComponent},
    {   path: 'detail/:id', component: HeroDetailComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}