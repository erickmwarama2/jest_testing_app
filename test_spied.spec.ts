import { MySpiedClass } from "./MySpiedClass"

it("should call testSpiedfunction()", () => {
    let mySpiedClass = new MySpiedClass();
    const testFunctionSpy = jest.spyOn(
        mySpiedClass, 'testSpiedFunction'
    );
    mySpiedClass.testFunction();
    expect(testFunctionSpy).toHaveBeenCalled();
})