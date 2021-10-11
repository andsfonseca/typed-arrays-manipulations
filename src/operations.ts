/**
 * Module for array operations 
 */
export module ArrayOperations {

    /**
     * Check if two arrays are equal 
     * @param array1 array to be checked 
     * @param array2 array to be checked 
     * @returns True if equals, otherwise False
     */
    export function equals<T extends Int8Array | Uint8Array | Uint8ClampedArray | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array | Float64Array> (array1: T, array2: T) {
        
        if (array1.byteLength != array2.byteLength) return false;

        for (var i = 0; i != array1.byteLength; i++) {
            if (array1[i] != array2[i]) return false;
        }
        return true;
    }
}