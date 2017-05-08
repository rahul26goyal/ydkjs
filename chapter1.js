
function x() {
    console.log("hello")
}

PHONE_PRICE = 50
ACCESSORIES_PRICE = 10

function purchase(money_available, threshold) {
    /*money_available = prompt("Total money:")
    console.log("money available:::", money_available)
    threshold = prompt("Limit money:")
    console.log("limit:::", threshold)
    */
    console.log(threshold, money_available)
    if (threshold > money_available){
        alert("Threshhold can not be greater then available money.")
        console.log("Threshhold can not be greater then available money.")
        return 0;
    }
    money_spent = 0
    phone_no = 0
    while((money_spent + PHONE_PRICE) < money_available){
        phone_no++;
        money_spent += PHONE_PRICE
        if(money_spent + ACCESSORIES_PRICE <= threshold) {
            money_spent += ACCESSORIES_PRICE
        }
    }
    tax = calculate_tax(money_spent)
    total = tax + money_spent
    if (total > money_available){
        alert("You have exceeded the available amount.")
    }
    else {
        var str = "You have purchased :" +  phone_no + " phones"
        alert(str)
    }
    console.log("Phone Purchased:::", phone_no)
    return phone_no
}

function calculate_tax(money_spent){
    return money_spent * 0.1;
}
