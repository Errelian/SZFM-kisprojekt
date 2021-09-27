function numberBaseValidation(numberBase)
{
    if (numberBase === null)
        throw new Error('Number base must not be NULL!')
    if (parseInt(numberBase) < 2 || parseInt(numberBase) > 36)
        throw new Error('Invalid source number base: ' + origBase + ' out of permitted range: 2 - 36')
}

function convertBaseHandler(sender){
    const origNumElement = document.getElementById("inputAmount");
    const inputBaseElement = document.getElementById("inputBase");
    const outputBaseElement = document.getElementById("outputBase");

    console.log("Original Number Value and Text ",origNumElement.value, origNumElement.textContent)

    const convertedNumberString = convertBase(origNumElement.value, inputBaseElement.value, outputBaseElement.value);
    const outputAmountHtmlElement = document.getElementById("outputAmount");
    outputAmountHtmlElement.value = convertedNumberString;
}

function convertBase(origNumStr, origBase, newBase) {
    numberBaseValidation(origBase);
    numberBaseValidation(newBase);

    console.log("Original base: " + origBase + " New Base: " + newBase)
    console.log("Original Number: " + origNumStr)

    const decNum = parseInt(origNumStr, origBase);
    console.log("Decimal Number: " + decNum);

    const convertedNum = decNum.toString(newBase);
    console.log("Converted Number: " + convertedNum);

    return convertedNum;
}

//console.log(convertBase("256", "10", "2"));