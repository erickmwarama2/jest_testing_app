export class MySpiedClass {
    testFunction() {
        console.log(`testFunction() called`);
        this.testSpiedFunction();
    }

    testSpiedFunction() {
        console.log(`testSpiedFunction called`);
    }
}