console.log(data)

// 1: Show me how to calculate the average price of all items.
function question1() {
  let sum = 0
  for (var i = 0; i < data.length; i++) {
    sum += data[i].price
  }
  console.log(
    "The average price is" + " " + (sum / data.length).toFixed(2) + "."
  )
}

// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2() {
  for (var i = 0; i < data.length; i++) {
    if (data[i].price >= 14 && data[i].price <= 18) {
      console.log(data[i].title)
    }
  }
}

// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3() {
  for (var i = 0; i < data.length; i++) {
    if (data[i].currency_code === "GBP") {
      console.log(data[i].title + data[i].price)
    }
  }
}

// 4: Display a list of all items who are made of wood.
function question4() {
  for (var i = 0; i < data.length; i++) {
    if (data[i].materials.includes("wood")) {
      console.log(data[i].title)
    }
  }
}

// 5: Which items are made of eight or more materials?
//    Display the name, number of items and the items it is made of.
function question5() {
  for (var i = 0; i < data.length; i++) {
    if (data[i].materials.length >= 8) {
      console.log(
        data[i].title + " " + data[i].materials.length + " " + data[i].materials
      )
    }
  }
}

// 6: How many items were made by their sellers?
function question6() {
  for (var i = 0; i < data.length; i++) {
    if (data[i].who_made === "i_did") {
      console.log(data[i].who_made.length)
    }
  }
}
