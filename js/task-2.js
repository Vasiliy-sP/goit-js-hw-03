function makeArray(firstArray, secondArray, maxLength) {
    if (Array.isArray(secondArray)) {
        throw new TypeError(`firsttArray and secondArray must be arrays`);
    }
    if (typeof maxLength !== `number` || !Number.isFinite(maxLength)) {
        throw new TypeError(`maxLength must be a finite number`);
    }
    if (maxLength <= 0) {
        return [];
    }
    const combined = [...firstArray, ...secondArray];
    if (combined.length > maxLength) {
        return combined.slice(0, maxLength);
    }
    return combined;
}


console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []
