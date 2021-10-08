export module ArrayOperations {

    export function equals<T extends Int8Array | Uint8Array | Uint8ClampedArray | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array | Float64Array> (array1: T, array2: T) {
        
        if (array1.byteLength != array2.byteLength) return false;

        for (var i = 0; i != array1.byteLength; i++) {
            if (array1[i] != array2[i]) return false;
        }
        return true;
    }
}