function saveFaveNum(from = 10, to = 2) //default value in casse there is no input
{
    if (from === null || to === null)
        throw new Error("None of the arguments to be saved can be NULL!");
    if (from < 2 || from > 36|| to < 2 || to >36)
        throw new Error("Numbers must be from the supported interval: [2-36]");
    document.cookie = "fromFave=" + from.toString() + ";SameSite=None" + ";expires=Sat, 18 May 2030 12:00:00 UTC; path=/";
    document.cookie = "toFave=" + to.toString() +";SameSite=None"   + ";expires=Sat, 18 May 2030 12:00:00 UTC; path=/";
}

function deleteAllCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}

function readFaveNums()
{
    let test = document.cookie;
    if (test != null)
    {
        let cookArr = test.split(";")
        for(var i = 0; i< cookArr.length; i++)
        {
            cookArr[i] = cookArr[i].trim();
        }

        let cookieNumbers = [];
        cookieNumbers[0] = cookArr[0].substr(9, cookArr[0].length);
        cookieNumbers[1] = cookArr[1].substr(7, cookArr[1].length);
        console.log(cookieNumbers);

        return cookieNumbers;
    }
}