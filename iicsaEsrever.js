var iicsaEsrever = {};

// Note that this is 2^6. This length must remain constant for the program to work
iicsaEsrever.validChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890 .';

iicsaEsrever._charToBits = function(char) {
    var charCode = iicsaEsrever.validChars.indexOf(char);
    return (("000000" + charCode.toString(2)).slice(-6)).split('');
}

iicsaEsrever._bitsToChar = function(bits) {
    var charIdx = bits.reduce((acc, val) => {
        return (acc << 1) | val;
    });
    return iicsaEsrever.validChars[charIdx];
}

iicsaEsrever.encode = function(string) {
    // Encoding is a reversing operation, meaning that this function can also decode

    var result = '';
    for (var char of string) {
        if (iicsaEsrever.validChars.includes(char)) {
            var bits = iicsaEsrever._charToBits(char);
            bits.reverse();
            result += iicsaEsrever._bitsToChar(bits);
        }
        else {
            result += char;
        }
    }
    return result;
}