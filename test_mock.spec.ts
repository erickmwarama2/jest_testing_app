import { MyCallbackClass } from "./MyCallbackClass";

it("should mock call to callbackfn", () => {
    let mock = jest.fn();
    let myCallbackObj = new MyCallbackClass();
    myCallbackObj.executeCallback('testing 1 2 3', mock);
    expect(mock).toHaveBeenCalled();
})