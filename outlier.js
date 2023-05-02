const outlier = (arr) => {
    const par = (i) => { return i & 1; }

    let parity = par(arr[0]);
    if (parity != par(arr[1])) {
        if (parity == par(arr[2])) {
            return arr[i];
        }
        return arr[0];
    }
    return arr.find((i) => par(i) != parity)
}

let arr = [160, 3, 1719, 19, 11, 13, -21] 

console.log(outlier(arr));