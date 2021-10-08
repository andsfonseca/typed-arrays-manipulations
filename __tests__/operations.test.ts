import { ArrayOperations } from "../src/operations"

describe('Array Operations', () => {
    test('Equals: Uint8Array', () => {
        let original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

        let array1 = Int8Array.from(original)
        let array2 = Int8Array.from(original)

        expect(ArrayOperations.equals<Int8Array>(array1, array2)).toBeTruthy();
    });

    test('Not Equals: Uint8Array', () => {
        let original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        let inverted = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        inverted.reverse()
        
        let array1 = Int8Array.from(original)
        let array2 = Int8Array.from(inverted)

        expect(ArrayOperations.equals<Int8Array>(array1, array2)).toBeFalsy();
    });
});