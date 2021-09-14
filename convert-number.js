function numberBaseValidation(numberBase)
{
    if (origBase < 2 || origBase > 36)
        throw new Error('Invalid source number base: ' + origBase + ' out of permitted range: 2 - 36')
}

function convertBase(origNumStr, origBase, newBase) {
    numberBaseValidation(origBase)
    numberBaseValidation(newBase)
    if (origBase == newBase)
        return origNumStr
    if (origBase != 10)
        decimalNumStr = parseInt(origNumStr, origBase)
    else
        decimalNumStr = origNumStr
    if (newBase == 10)
        return decimalNumStr;
    else
        return parseInt(decimalNumStr).toString(newBase)
}

num = "256"

console.log(convertBase(num, 10, 2))