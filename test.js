// Define JSON payload
let games = {
    "items": [
        { "name": "Magicka", "price": 9.99 },
        { "name": "Dungeon Defenders", "price": 14.99 },
        { "name": "Goat Simulator", "price": 9.99 },
        { "name": "Helldivers 2", "price": 39.99 }
    ]
}

let jsonString = JSON.stringify(games);

games = JSON.parse(jsonString);

const table = document.getElementById("gamelist-items");

// Loop through all of the items in the JSON and extract the data and put it into a table 


for (i in games.items) {
    const row = document.createElement("tr");

    const cell1 = document.createElement("td")
    cell1.textContent = games.items[i].name
    row.appendChild(cell1);

    const cell2 = document.createElement("td")
    cell1.textContent = games.items[i].price
    row.appendChild(cell2);

    table.appendChild(row);




}