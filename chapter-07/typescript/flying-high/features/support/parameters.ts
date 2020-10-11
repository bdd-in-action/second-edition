import { defineParameterType } from 'cucumber';

defineParameterType({
    regexp: /(Standard|Bronze|Silver|Gold) Frequent Flyer member/,
    transformer(value) {
        // FrequentFlyerStatus status = FrequentFlyerStatus.valueOf(statusName);
        // return FrequentFlyerMember.newMember().withStatus(status);
        return null
    },
    name: 'statusName'
})

defineParameterType({
    regexp: /Economy|Business|First/,
    transformer(value) {
        // return CabinClass.valueOf(cabinClass);
        return null
    },
    name: 'cabinClass'
})

defineParameterType({
    regexp: /(\d{4}-\d{2}-\d{2})/,
    transformer(value) {
        return new Date(Date.parse(value));
    },
    name: 'ISO-date'
})

defineParameterType({
    regexp: /(.*)/,
    transformer(value) {
        return value.split(',').map(item => item.trim());
    },
    name: 'string-values'
})

defineParameterType({
    regexp: /(.*)/,
    transformer(value) {
        // return FrequentFlyerMember.newMember().named(name);
        return null;
    },
    name: 'member'
})

defineParameterType({
    regexp: /(Standard|Bronze|Silver|Gold|) Frequent Flyer member/,
    transformer(value) {
        return null;
    },
    name: 'frequentFlyer'
})
