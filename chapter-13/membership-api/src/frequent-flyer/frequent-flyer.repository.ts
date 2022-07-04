import { Injectable } from '@nestjs/common';
import {FrequentFlyer} from "./entities/frequent-flyer.entity";

@Injectable()
export class FrequentFlyerRepository {

    frequentFlyers = []

    save(frequentFlyer: FrequentFlyer) {
        this.frequentFlyers.push(frequentFlyer);
    }

    findAll() {
        return this.frequentFlyers;
    }

    clear() {
        this.frequentFlyers = []
    }

    findByFrequentFlyerNumber(frequentFlyerNumber: number) {
        return this.frequentFlyers.find( frequentFlyer => frequentFlyer.frequentFlyerNumber == frequentFlyerNumber)
    }

    findByEmail(email: string) {
        return this.frequentFlyers.find( frequentFlyer => frequentFlyer.email == email)
    }

    removeByFrequentFlyerNumber(frequentFlyerNumber: number) {
        this.frequentFlyers = this.frequentFlyers.filter( element => element.frequentFlyerNumber != frequentFlyerNumber);
    }
}
