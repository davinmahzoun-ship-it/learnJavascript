// CSV stands for command separated values
const csv = `id,name,quantity,price
101,Wireless Mouse,2,15.99
102,USB-C Cable,5,8.50
103,Notebook,3,4.25`;



// Find the price of the Wireless Mouse



function priceOf(product) {
    const lines = csv.split("\n");
    const header = lines.splice(0, 1)
    console.log(lines);

    product
}

priceOf('Wireless Mouse')

/*
[
  '101,Wireless Mouse,2,15.99',
  '102,USB-C Cable,5,8.50',
  '103,Notebook,3,4.25'
]
  */