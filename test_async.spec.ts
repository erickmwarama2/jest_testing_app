import { MockAsync } from "./MockAsync";

describe("failing async tests", () => {
    it("should wait for callback to complete", () => {
        let mockAsync = new MockAsync();

        console.log(`1. calling executeSlowfunction`);

        let returnedValue !: string;

        mockAsync.executeSlowFunction((value: string) => {
            console.log(`2. complete called`);
            returnedValue = value;
        })

        console.log(`3. checking return value`);
        expect(returnedValue).toBe("completed");
    })
})

describe("async test with done", () => {
    let returnedValue!: string;

    beforeEach((done: jest.DoneCallback) => {
        let mockAsync = new MockAsync();
        console.log(`1. calling executeSlowFunction`);

        mockAsync.executeSlowFunction((value: string) => {
            console.log(`2. executeSlowFunction returned`);
            returnedValue = value;
            done();
        });
    })

    it("should return value after 1 second", () => {
        console.log(`3. checking returnedValue`);
        expect(returnedValue).toEqual("completed");
    })
})