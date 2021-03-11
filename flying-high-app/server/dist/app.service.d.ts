import { HttpService } from '@nestjs/common';
export declare class AppService {
    private http;
    constructor(http: HttpService);
    getCountryList(search: string): Promise<any>;
}
