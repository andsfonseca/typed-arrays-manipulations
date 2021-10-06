export module ArrayManipulations {

    export function fliplr2D(array : Uint8Array | Uint8ClampedArray, width: number, height: number, depth: number = 1) {
        
        for (let i = 0; i < height; i++) {
            for (let j = 0; j < width/2; j++) {
                var index = (i * depth) * width + (j * depth );
                var mirror = ((i + 1) * depth) * width - ((j + 1) * depth);
                for (let p = 0; p < depth; p++) {
                    var temp = array[index + p];
                    array[index + p] = array[mirror + p];
                    array[mirror + p] = temp;
                }
            }
        }
    }
}