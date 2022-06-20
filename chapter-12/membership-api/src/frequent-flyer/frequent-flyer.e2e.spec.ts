import * as request from 'supertest';
import {Test} from '@nestjs/testing';
import {INestApplication} from '@nestjs/common';
import {FrequentFlyerModule} from "./frequent-flyer.module";

describe('Frequent Flyer Registration', () => {
    let app: INestApplication;

    beforeAll(async () => {
        const moduleRef = await Test.createTestingModule({
            imports: [FrequentFlyerModule],
        }).compile()

        app = moduleRef.createNestApplication();
        await app.init();
    });

    const newFrequentFlyer = {
        email: 'sarah-jane@example.org',
        password: 'secret',
        firstName: 'Sarah-Jane',
        lastName: 'Smith',
        title: 'Ms',
        address: 'London',
        country: 'UK'
    }

    const anotherFrequentFlyer = {
        email: 'rose@example.org',
        password: 'secret',
        firstName: 'Rose',
        lastName: 'Tyler',
        title: 'Ms',
        address: 'London',
        country: 'UK'
    }

    const aFrequentFlyerWithMissingInfo = {
        email: 'ace@example.org',
        password: 'secret',
        firstName: 'Ace',
        lastName: '',
        title: 'Ms',
        address: 'London',
        country: 'UK'
    }

    describe("When registering a new frequent flyer", () => {

        it(`should create a new pending frequent flyer account`, async () => {
            const response = await request(app.getHttpServer())
                .post('/api/frequent-flyer')
                .send(newFrequentFlyer)
                .expect(201);

            expect(response.body.isActivated).toBeFalsy();
        });

        it(`should create a new email token for each new account`, async () => {
            // GIVEN
            const response = await request(app.getHttpServer())
                .post('/api/frequent-flyer')
                .send(anotherFrequentFlyer)
                .expect(201);
            const frequentFlyerNumber = response.body.frequentFlyerNumber;

            // WHEN
            const token = await request(app.getHttpServer())
                .get(`/api/tokens/frequent-flyer/${frequentFlyerNumber}`)
                .expect(200);
        });
    })

    afterAll(async () => {
        await app.close();
    });
});
