import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import {FrequentFlyerModule} from "./frequent-flyer.module";
import {TokenModule} from "../token/token.module";
import {Status} from "./entities/status";

describe('Frequent Flyer Registration', () => {
    let app: INestApplication;

    beforeAll(async () => {
        const moduleRef = await Test.createTestingModule({
            imports: [FrequentFlyerModule, TokenModule],
        }).compile()

        app = moduleRef.createNestApplication();
        await app.init();
    });

    const newFrequentFlyer = {
        email: 'sarah-jane@smith.com',
        password: 'secret',
        firstName: 'Sarah-Jane',
        lastName: 'Smith',
        title: 'Ms',
        address: 'London',
        country: 'UK'
    }

    describe("When registering a new frequent flyer", () => {

        it(`should create a new pending frequent flyer account`, async() => {
            const response = await request(app.getHttpServer())
                .post('/api/frequent-flyer')
                .send(newFrequentFlyer)
                .expect(201);

            expect(response.body.status).toEqual(Status.Pending);
        });

        it(`should create a new email token for each new account`, async() => {
            // GIVEN
            const response = await request(app.getHttpServer())
                .post('/api/frequent-flyer')
                .send(newFrequentFlyer);
            const frequentFlyerNumber = response.body.frequentFlyerNumber;

            // WHEN
            const token = await request(app.getHttpServer())
                .get(`/api/tokens/frequent-flyer/${frequentFlyerNumber}`)
                .expect(200);

            console.log(token.body)

        });

    })

    afterAll(async () => {
        await app.close();
    });
});