export default class GlobalCounter {
    count: number = 0;

    increment(): void {
        this.count++;
    }
}