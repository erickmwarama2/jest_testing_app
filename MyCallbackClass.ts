export class MyCallbackClass {
    executeCallback(value: string, callbackFn: (value: string) => null) {
        console.log(`executeCallback invoking callbackFn`);
        callbackFn(value);
    }
}