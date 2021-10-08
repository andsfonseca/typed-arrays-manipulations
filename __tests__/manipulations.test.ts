import { ArrayManipulations } from "../src/manipulations"
import { ArrayOperations } from "../src/operations";

describe('Array Manipulations', () => {
    test('FlipLR2D: Mirror a one-dimensional array', () => {
        let original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        let inverted = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        inverted.reverse()

        let array1 = Uint8Array.from(original)
        let array2 = Uint8Array.from(inverted)
        
        ArrayManipulations.fliplr2D(array1, 10, 1)
        expect(ArrayOperations.equals<Uint8Array>(array1, array2)).toBeTruthy();
    });
});