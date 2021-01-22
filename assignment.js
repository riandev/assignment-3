// https://github.com/riandev/assignment-3
// Start Kilometer to Meter Converter
function kilometerToMeter(kilometer) {
    if (kilometer >= 1) {
        var meter = kilometer * 1000;
    } else if (kilometer <= 0 || kilometer <= -1) {
        var meter = 'Please Input Valid Kilometer';
    }
    return meter;
}
// End Kilometer to Meter Converter

// Start Budget Calculator

function budgetCalculator(watchPurchaseQuantity, phonePurchaseQuantity, laptopPurchaseQuantity) {
    if (watchPurchaseQuantity, phonePurchaseQuantity, laptopPurchaseQuantity >= 1) {
        var watchPrice = 50 * watchPurchaseQuantity;
        var phonePrice = 100 * phonePurchaseQuantity;
        var laptopPrice = 500 * laptopPurchaseQuantity;
        var totolBudget = watchPrice + phonePrice + laptopPrice;
    } else {
        var totalInvalidBudget = 'Please Input Valid Quantity'; // In Case, If user Not Put Valid Quantity
    }
    return totolBudget, totalInvalidBudget; // returning two value, One for Valid Quantity, Another for Invalid Quantity
}

// End Budget Calculator


// Start Hotel Cost Calculator

function hotelCost(hotelDayCount) {
    var totalHotelBill = 0;
    if (hotelDayCount <= 10) {
        totalHotelBill = hotelDayCount * 100;
    } else if (hotelDayCount <= 20) {
        var hotelRegularBill = 10 * 100;
        var remainingDay = hotelDayCount - 10;
        var discountPackageA = remainingDay * 80;
        totalHotelBill = hotelRegularBill + discountPackageA;
    } else if (hotelDayCount >= 21) {
        var hotelRegularBill = 10 * 100;
        var discountPackageA = 10 * 80;
        var remainingDay = hotelDayCount - 20;
        var discountPackageB = remainingDay * 50;
        totalHotelBill = hotelRegularBill + discountPackageA + discountPackageB;
    } else {
        var totalHotelBillInvalid = 'Please Input Valid Day Count';
        //Instead of minus output now it will undefine.
    }
    return totalHotelBill, totalHotelBillInvalid;
}

// End Hotel Cost Calculator


// Start-megaFriend

function megaFriend(friendsName) {
    var longestName = '';
    for (var i = 0; i < friendsName.length; i++) {
        if (friendsName[i].length > longestName.length)
            longestName = friendsName[i];
    }
    return longestName;
}

// End-megaFriend