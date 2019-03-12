var message = "";
function messages(message) {
    document.getElementById("message").value = message;
    console.log(message);
    return message;
}

var currentMoney = 0;
var total = 0;
function addMoney(total) {
    currentMoney = total / 100;
    document.getElementById("addedMoney").value = "$" + currentMoney;
    console.log(total);
    return total;
}

function addDollar() {

    var dollars = document.getElementById("dollar").setAttribute = 100;
    console.log(dollars);
    total = total + dollars;
    addMoney(total);
}

function addQuarter() {
    var quarters = document.getElementById("quarter").setAttribute = 25;
    console.log(quarters);
    total = total + quarters;
    addMoney(total);
}

function addDime() {
    var dimes = document.getElementById("dime").setAttribute = 10
    console.log(dimes);
    total = total + dimes;
    addMoney(total);
}

function addNickel() {
    var nickels = document.getElementById("nickel").setAttribute = 5
    console.log(nickels);
    total = total + nickels;
    addMoney(total);
}

function loadItems() {
    $.ajax({
        type: "GET",
        url: "https://tsg-vending.herokuapp.com/items",

        success: function (itemData) {
            console.log("I GOT items");
            console.log(itemData);

            var itemsAsHtml = "";

            for (var i = 0; i < itemData.length; i++) {

                item = itemData[i];
                console.log(item);


                itemsAsHtml = itemsAsHtml +

                    '<div onClick="getId('+ item.id +')" id="itemTable" class="col-sm-4"><div  name="id" class="col-sm-12" style="text-align:left"> ID: '
                    + item.id + '</div><div class="col-sm-12">'
                    + item.name + '</div><div class="col-sm-12">$'
                    + item.price + '</div><div class="col-sm-12">Quantity: '
                    + item.quantity + '</div></div>'
                    console.log("#id");
            };

            document.getElementById("itemList").innerHTML = itemsAsHtml;
        },
        error: function () {
            console.log("Failure to load Items");
            message = "FAILURE";
            messages(message);
        }
    });
}

function getId(id) {
    console.log(id);
    $("#itemId").val(id);
}


function MakePurchase(id) {

    if (document.getElementById("itemId").value == "") {
        var itemChoice = -1;
    } else {
        var itemChoice = document.getElementById("itemId").value;
    }

    $.ajax({
        type: "GET",
        url: "http://tsg-vending.herokuapp.com/money/" + currentMoney + "/item/" + itemChoice,
        headers: {
            "Accept": "application/json"
        },

        success: function (change, status, stuff) {
            console.log("Made a purchase");
            console.log(change);
            console.log(status);
            console.log(stuff);
            message = "Thank You For Purchase!";
            messages(message);
            loadItems();
            return document.getElementById("change").value =
                "Quarters: " + change.quarters + " Dime: " + change.dimes + " Nickels: "
                + change.nickels + " Pennies: " + change.pennies;
        },

        error: function (data) {
            console.log(data);
            var error = data.responseJSON.message;
            console.log(error);
            $("#message").val(error);
        }
    });
}

function returnChange(returnChangeTotal) {
    if (total == 0) {

    } else {
        var changeAmount = currentMoney * 100;
        var quarters = (changeAmount - (changeAmount % 25)) / 25;
        var cA_MinusQ = changeAmount - (quarters * 25);

        var dimes = (cA_MinusQ - (cA_MinusQ % 10)) / 10;
        var cA_MinusD = cA_MinusQ - (dimes * 10);

        var nickels = (cA_MinusD - (cA_MinusD % 5)) / 5;
        var cA_minusN = cA_MinusD - (nickels * 5);

        var pennies = (cA_minusN - (cA_minusN % 1));

        var returnChangeTotal = 'Quarter: ' + quarters + ' Dimes: ' + dimes + ' Nickels: ' + nickels + ' Pennies: ' + pennies;

        console.log(returnChangeTotal);
        total = total - total
        addMoney(total);

        return document.getElementById("change").value = returnChangeTotal;
    }
}
