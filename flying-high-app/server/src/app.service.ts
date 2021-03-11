import { forwardRef, HttpService, Injectable } from '@nestjs/common';
import { map } from 'rxjs/operators';

@Injectable()
export class AppService {

    constructor(
        private http: HttpService
    ) { }

    async getCountryList(search: string) {
        try {
            const result: any = (await this.http.get(
                `https://restcountries.eu/rest/v2/name/${search}`
            ).toPromise()).data.map((res: any) => {
                return ({ name: res.name, flag: res.flag })
            });
            return result;
        } catch (e) {
            // no such country found
            if (e.response.data.status === 404) {
                return [{name: 'no country found', flag: ''}];
            }
        }
    }
}
