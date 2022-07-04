import {MembershipTier} from "./MembershipTier";

export class FrequentFlyer {
    frequentFlyerNumber: number;
    firstName: string;
    lastName: string;
    title: string;
    email: string;
    password: string;
    address: string;
    country: string;
    isActivated: boolean = false;
    tier: MembershipTier = MembershipTier.Standard;
    statusPoints: number = 0;
}
