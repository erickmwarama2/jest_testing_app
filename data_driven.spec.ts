import { functionNoSpace } from "./functionNoSpace";

[1,2,3,4,5].forEach((value: number) => {
    it(`${value} should be less than 5`, () => {
        expect(value).toBeLessThanOrEqual(5);
    })
});

function testUsing<T> (values: T[], func: Function) {
    for (let value of values) {
        //console.log("value", value);
        func.call(Object, value);
    }
}

testUsing(
    [
        [undefined, false],
        [null, false],
        [" ", false],
        ["   ", false],
        [" a ", true]
    ],
    ([value, isValid]: [string, boolean]) => {
        it(`${value} functionNoSpace ? ${isValid}`, () => {
            isValid ?
            expect(functionNoSpace(value)).toBeTruthy() :
            expect(functionNoSpace(value)).toBeFalsy();
        })
    }
)