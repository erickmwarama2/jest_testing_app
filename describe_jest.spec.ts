import { myName } from "./func1";

describe('a group of tests', () => {
    test('first test', () => {
        expect('string value').toEqual('string value')
    })

    it('second test', () => {
        expect('abc').not.toEqual('def')
    })

    test.only('third test', () => {
        expect('string value').toBeTruthy()
    })

    xit('fourth test', () => {
        expect('string value').not.toBeFalsy()
    })
})

fdescribe('second group of tests', () => {
    test.skip('first test in second group', () => {
        expect(true).not.toBeFalsy()
    })

    test('test object equality', () => {
        let objA = {id: 5};
        let objB = {id: 5};

        expect(objA).toStrictEqual(objB);
    })

    test('function returns name', () => {
        expect(myName()).toContain('ick');
    })

    test('should contain an array item', () => {
        let objC = {id: 3};
        let objArray = [
            {id: 1},
            {id: 2},
            objC
        ];

        expect(objArray).toContainEqual({id: 2});
        expect(objArray).toContain(objC);
    })

    it('second test in second group', () => {
        expect('this value').not.toEqual('that value')
    })
})