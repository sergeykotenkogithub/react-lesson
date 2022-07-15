const validateValue = (value) => {
    return value.map(e => {
        if(Number.isInteger(e)) {
            return e + 1
        } else {
            return e
        }
    });
}

module.exports = validateValue;