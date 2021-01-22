
//      https://github.com/simplysamiul/Assignment-3#assignment-3-1




// Soluation-01

function kilometerToMeter(kiloMeter){
    var meter = kiloMeter * 1000;
    return meter;
}


// Soluation - 02

function budgetCalculator(gori, mobile, computer){
    var watch = gori * 50;
    var phone = mobile * 100;
    var laptop = computer * 500;

    return watch + phone + laptop;
}


// soluation - 03

function hotelCost(day){
    var cost = 0;
    if(day <= 10){
        cost = day * 100;
    }
    else if(day <= 20){
        var firstStepCost = 10 * 100;
        var remaining = day - 10;
        var secondStepCost = remaining * 80;
        cost = firstStepCost + secondStepCost;
    }
    else{
        var firstStepCost = 10 * 100;
        var secondStepCost = 10 * 80;
        var remaing = day - 20;
        var thirdStepCost = remaining * 50;
        cost = firstStepCost + secondStepCost + thirdStepCost ;

    }
    return cost;
}


// Soluation - 04

function megaFriend(arr) {
    var longest = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length> longest.length) {
            longest = arr[i];
        }
    }
    return longest;
}