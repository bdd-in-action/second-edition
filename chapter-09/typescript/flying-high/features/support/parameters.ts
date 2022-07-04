import { defineParameterType } from 'cucumber';
import { CabinClass, FrequentFlyerMember } from '../../src/entities';
import { FrequentFlyerStatus } from '../../src/entities/FrequentFlyerStatus';

defineParameterType({
    regexp: /(Standard|Bronze|Silver|Gold) Frequent Flyer member/,
    transformer(value): FrequentFlyerMember {
        return new FrequentFlyerMember({
            name: 'A Frequent Flyer Member',
            status: FrequentFlyerStatus[value],
        });
    },
    name: 'frequentFlyer',
});

defineParameterType({
    regexp: /Economy|Business|First/,
    transformer(value) {
        return CabinClass[value];
    },
    name: 'cabinClass',
});

defineParameterType({
    regexp: /(\d{4}-\d{2}-\d{2})/,
    transformer(value) {
        return new Date(Date.parse(value));
    },
    name: 'ISO-date',
});

defineParameterType({
    regexp: /(.*)/,
    transformer(value) {
        return value.split(',').map(item => item.trim());
    },
    name: 'string-values',
});

defineParameterType({
    regexp: /(.*)/,
    transformer(name): FrequentFlyerMember {
        return new FrequentFlyerMember({
            name,
            status: FrequentFlyerStatus.Standard,
        });
    },
    name: 'member',
});
