var a = 1;
function x() {
    var b = 2;
    function y() {
        var c = 3;
        //First question: anywhere inside the function y()
        console.log(c);
        function z() {
            var d = 4;
        }
        z();
    }
    y();

}
x();


//Second question:
function rollDice(nofroll) {
    var ran1 = Math.floor(Math.random() * 6) + 1;
    var ran2 = Math.floor(Math.random() * 6) + 1;
    var sum = ran1 + ran2;
    return "Random 1=" + ran1 + " Random 2=" + ran2 + " The sum is: " + sum
}
rollDice(3);


//Third question:
function currencyConverter(currency, amount) {
    if (currency == "USD") {
        var conusd = amount * 3.75;
        return "the convert to R:" + conusd
    }
    else if (currency == "GBP") {
        var congbp = amount * 5.03;
        return "the convert to R:" + congbp
    }
    else if (currency == "EGP") {
        var conegp = amount * 0.24;
        return "the convert to R:" + conegp
    }
    else if (currency == "BD") {
        var conbd = amount * 9.95;
        return "the convert to R:" + conbd
    }
    else { return "try another currency of USD GBP EGP BD" }

}
currencyConverter("USD", 10);


//Fourth question:
function isCharacterAVowel(letter) {

    var vowels = (['a', 'A', 'E', 'e', 'I,', 'i', 'O', 'o', 'U', 'u']);

    for (var i = 0; i <= vowels.length; i++) {
        if (letter == vowels[i]) {
            continue;
        }
        return true;
    }
    return false;
}

isCharacterAVowel('E');


//Fifth question:
function summation(num) {
    var sum = 0;
    for (var i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
}

summation(5);


//Sixth question:
function summationEven(suar) {
    var sum = 0;
    for (var i = 0; i <= suar; i++) {
        if (i % 2 === 0) {
            sum = sum + i;
        }
    }
    return sum;
}
summationEven(5);


//7th question:
function Aletter(le) {
    var wordsWithA = ['cat', 'rabbit', 'dog', 'frog'];
    for (let i = 1; i <= wordsWithA.length; i++) {
        if (wordsWithA[i].search('a') >= 0) {
            return wordsWithA[i]
        }
    }
}

Aletter('a');


//8th question:
function reverse(string) {
    var spString = string.split("");
    var reverseArr = spString.reverse();
    var joinArr = reverseArr.join("");
    return joinArr

}
reverse("caterpillar");


//9th question:
function addDashes(arrr) {
    //  var a = [ 1, 2, 3, 4, 5, 6 ];  
    console.log(arrr.join('-'));
}
var arrrr = ['test1', 'test2', 'test3'];
addDashes(arrrr);


