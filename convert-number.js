function numberBaseValidation(numberBase)
{
    if (numberBase === null)
        throw new Error('Number base must not be NULL!')
    if (numberBase < 2 || numberBase > 36)
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