// contact Us validation

function validateForm() {
    var name = document.getElementById('name').value;
    if (name == "") {
        document.querySelector('.status').innerHTML = "Name cannot be empty";
        return false;
    }
    else {
        var inputEmail = document.getElementById("name");
        localStorage.setItem("name", inputEmail.value);

    }

}

var subject = document.getElementById('subject').value;
if (subject == "") {
    document.querySelector('.status').innerHTML = "Subject cannot be empty";
    return false;
}
else {
    var inputEmail = document.getElementById("subject");
    localStorage.setItem("subject", inputEmail.value);

}

var message = document.getElementById('message').value;
if (message == "") {
    document.querySelector('.status').innerHTML = "Message cannot be empty";
    return false;
}
else {
    var inputEmail = document.getElementById("message");
    localStorage.setItem("message", inputEmail.value);

}
document.querySelector('.status').innerHTML = "Sent";
}


// form local storage

function save() {

    if (localStorage.getItem("orders") === null) {
        orders = [];
    }
    else {
        orders = [];
        orders = JSON.parse(localStorage.getItem("orders"));
    }


    let buyer_name = document.getElementById("buyerFirstName").value + " " + document.getElementById("buyerLastName").value;
    let address = document.getElementById("street").value + "\n" + document.getElementById("city").value + "\n" +
        document.getElementById("state").value + "\n" + document.getElementById("country").value + "\n" + document.getElementById("pincode").value;
    let city = document.getElementById("city").value;
    let cost = document.getElementById("giftRamount").value + "." + document.getElementById("giftPamount").value;
    let phone = document.getElementById("countryCode").value +
        document.getElementById("p1").value +
        document.getElementById("p2").value +
        document.getElementById("p3").value +
        document.getElementById("p4").value +
        document.getElementById("p5").value +
        document.getElementById("p6").value +
        document.getElementById("p7").value +
        document.getElementById("p8").value +
        document.getElementById("p9").value +
        document.getElementById("p10").value;

    console.log(buyer_name)
    console.log(address)
    console.log(city)
    console.log(cost)
    console.log(phone)

    let obj = {
        "bname": buyer_name,
        "shipaddr": address,
        "shipcity": city,
        "giftcost": cost,
        "mobile": phone
    }
    console.log(obj);
    orders.push(obj);
    localStorage.setItem("orders", JSON.stringify(orders));

    alert("Your Order is Placed Successfully")

}
function get() {
    var orders = [];
    orders = JSON.parse(localStorage.getItem("orders"));
    console.log(orders)
    var table = document.getElementById("mybody");
    for (let i = 0; i < orders.length; i++) {
        var row = '<tr> <td>' + orders[i].bname + '</td> <td>' + orders[i].shipaddr + ' </td><td>' + orders[i].shipcity + '</td><td>' + orders[i].giftcost + '</td><td>' + orders[i].mobile + ' </td></tr>';
        table.innerHTML += row;
    }

}