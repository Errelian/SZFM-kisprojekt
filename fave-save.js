function saveFaveNumHandler() {
    const inputBaseElement = document.getElementById("inputBase");
    const outputBaseElement = document.getElementById("outputBase");

    //console.log(+inputBaseElement.value, +outputBaseElement.value);

    saveFaveNum(+inputBaseElement.value, +outputBaseElement.value);
}

function saveFaveNum(from = 10, to = 2) //default value in case there is no input
{
    if (from === null || to === null)
        throw new Error("None of the arguments to be saved can be NULL!");
    if (from < 2 || from > 36 || to < 2 || to > 36)
        throw new Error("Numbers must be from the supported interval: [2-36]");
    document.cookie = "fromFave=" + from.toString() + ";SameSite=None" + ";expires=Sat, 18 May 2030 12:00:00 UTC; path=/";
    document.cookie = "toFave=" + to.toString() + ";SameSite=None" + ";expires=Sat, 18 May 2030 12:00:00 UTC; path=/";
}

function debugDeleteAllCookies() {
    let cookies = document.cookie.split(";");

    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i];
        let eqPos = cookie.indexOf("=");
        let name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}

function readFaveNumsHandler() {
    const faveNums = readFaveNums();
    const inputBaseHtmlElement = document.getElementById("inputBase");
    inputBaseHtmlElement.value = faveNums[0];
    const outputBaseHtmlElement = document.getElementById("outputBase");
    outputBaseHtmlElement.value = faveNums[1];
}

function readFaveNums() {
    const test = document.cookie;
    //console.log(test);
    if (!test)
        return ["10", "2"];

    let cookArr = test.split(";")
    for (let i = 0; i < cookArr.length; i++) {
        cookArr[i] = cookArr[i].trim();
    }

    if (cookArr.length < 2)
        return ["10", "2"];

    console.log(cookArr)

    let cookieNumbers = [];
    cookieNumbers[0] = cookArr[0].split('=')[1];
    cookieNumbers[1] = cookArr[1].split('=')[1];

    console.log("Cookie numbers: ", cookieNumbers[0], cookieNumbers[1])

    return cookieNumbers;

}