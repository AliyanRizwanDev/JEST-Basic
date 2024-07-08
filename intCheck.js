function intCheck(a) {
    if (typeof a !== "number") {
        throw new Error("It's not a number");
    }
}

module.exports = intCheck;
