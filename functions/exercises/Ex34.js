// 34) Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
// todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras

function checkStrings(str1, str2) {
    str1 = str1.toUpperCase();
    str2 = str2.toUpperCase();
    let isContained = true;

    for (let i = 0; i < str1.length; i++) {
        for (let j = 0; j < str2.length; j++) {
            let charStr1 = str1.charAt(i).toLowerCase();
            let charStr2 = str2.charAt(j).toLowerCase();
            if (charStr1 == charStr2) {
                isContained = true
                break
            }
            else {
                isContained = false;
            }
        }
        if (!isContained)
            return isContained;
    }
    return isContained;
}

console.log(checkStrings("aBc", "cba"))