import { myName } from "./func1";
import GlobalCounter from "./GlobalCounter";

describe('test setup and teardown', () => {
    let globalCounter: GlobalCounter;

    beforeAll(() => {
        globalCounter = new GlobalCounter();
    });

    beforeEach(() => {
        globalCounter.count = 0;
    });

    afterEach(() => {
        console.log(`globalCounter.count = ${globalCounter.count}`);
    });

    test("test function returns name", () => {
        globalCounter.increment();
        expect(myName().toLowerCase()).toContain('mutw');
    })

    it('should increment', () => {
        globalCounter.increment();
        expect(globalCounter.count).toEqual(1);
    })
})