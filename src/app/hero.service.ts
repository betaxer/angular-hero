import {Injectable} from "@angular/core";
import {Hero} from "./hero";
import {HEROES} from "./mock.heroes";
/**
 * Created by vincent on 19/03/2017.
 */

@Injectable()
export class HeroService {
    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }

}
