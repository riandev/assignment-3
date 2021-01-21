// Start Kilometer to Meter Converter
function kilometerToMeter(kilometer) {
    var meter = kilometer * 1000;
    return meter;
}
// End Kilometer to Meter Converter

// Start Budget Calculator

function budgetCalculator(watchPurchaseQuantity, phonePurchaseQuantity, laptopPurchaseQuantity) {
    var watchPrice = 50 * watchPurchaseQuantity;
    var phonePrice = 100 * phonePurchaseQuantity;
    var laptopPrice = 500 * laptopPurchaseQuantity;
    var totolBudget = watchPrice + phonePrice + laptopPrice;
    return totolBudget;
}
// End Budget Calculator


// Start Hotel Cost Calculator

function hotelCost(hotelDayCount) {
    var totalHotelBill = 0;
    if (hotelDayCount <= 10) {
        totalHotelBill = hotelDayCount * 100;
    } else if (hotelDayCount <= 20) {
        var HotelRegularBill = 10 * 100;
        var remainingDay = hotelDayCount - 10;
        var discountPackageA = remainingDay * 80;
        totalHotelBill = HotelRegularBill + discountPackageA;
    } else {
        var HotelRegularBill = 10 * 100;
        var discountPackageA = 10 * 80;
        var remainingDay = hotelDayCount - 20;
        var discountPackageB = remainingDay * 50;
        totalHotelBill = HotelRegularBill + discountPackageA + discountPackageB;
    }
    return totalHotelBill;
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