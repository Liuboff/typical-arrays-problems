exports.min = function min (array) {
    if (!(min.arguments.length == 0 || array.length == 0)) {
        let min = 0;
        for (let i = 0; i < array.length; i++) {
            if ( array[i] < min ){
                min = array[i];
            }
        }
        return min;
    } else {
        return 0;
    }
}

exports.max = function max (array) {
    if (!(max.arguments.length == 0 || array.length == 0)) {
        let max = 0;
        for (let i = 0; i < array.length; i++) {
            if ( array[i] > max ){
                max = array[i];
            }
        }
        return max;
    } else {
        return 0;
    }
}

exports.avg = function avg (array) {
    if (!(avg.arguments.length == 0 || array.length == 0)) {
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            sum += array[i];
            // num++;
        }
        return sum / (array.length);
    } else {
        return 0;
    }
}
