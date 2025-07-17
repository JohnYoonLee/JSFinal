const videogames = [
    { Name: "Devil May Cry", Price: 30 },
    { Name: "Final Fantasy 16", Price: 50 },
    { Name: "Mario Kart World", Price: 80 },
    { Name: "Monster Hunter Wilds", Price: 70 },
    { Name: "Furi", Price: 15 },
    { Name: "Castlevania", Price: 20 },
    { Name: "Left 4 Dead 2", Price: 10 },
    { Name: "Street Fighter 6", Price: 40 }
];

const CRUD = [
    { action: "Create a new item: C" },
    { action: "Read details for an item: R" },
    { action: "Update details for an item: U" },
    { action: "Delete an item: D" }
];

$("#readSelect").on("change", function () {
    const selected = $(this).val();
    const game = videogames.find(g => g.Name === selected);

    if (game) {
        $(".Read").text(`${game.Name} costs $${game.Price}`);
    } else {
 
    }
});


const populateGameDropdown = () => {
    const options = videogames.map(game => `<option value="${game.Name}">${game.Name}</option>`)
    .join("");
    $("#gameSelect, #readSelect, #deleteSelect").html(options);
};



$("#createBtn").on("click", function () {
    const name = $("#createName").val().trim();
    const price = parseFloat($("#createPrice").val());

    if (name && !isNaN(price)) {
        videogames.push({ Name: name, Price: price });
        listItems();
        alert("Game created!");
        $("#createName").val("");
        $("#createPrice").val("");
    } else {
 ;
    }
});


$("#updateBtn").on("click", function () {
    const selectedGameName = $("#gameSelect").val();
    const newName = $("#newName").val().trim();
    const newPrice = parseFloat($("#newPrice").val());

    let game = videogames.find(g => g.Name === selectedGameName);

    if (game && newName && !isNaN(newPrice)) {
        game.Name = newName;
        game.Price = newPrice;

        listItems();             
        populateGameDropdown();   
        alert("Game updated successfully!");
    } else {
   
    }
});

$("#deleteBtn").on("click", function () {
    const selected = $("#deleteSelect").val();
    const index = videogames.findIndex(g => g.Name === selected);

    if (index !== -1) {
        videogames.splice(index, 1);
        listItems();
        alert(`${selected} has been deleted.`);
    }
});

const listItems = () => {
    let videogamesDisplay = `<ol>`;
    videogames.forEach((item) => {
        videogamesDisplay += `<li>${item.Name}</li>`;
    });
    videogamesDisplay += `</ol>`;

    $(".videogamesArray").html(videogamesDisplay);
    populateGameDropdown();
};


$(".Itemlist").text("The current videogames list is:");
$(".Instructions").text("What would you like to do?");

let InstructionList = `<ol>`;
CRUD.forEach((item) => {
    InstructionList += `<li>${item.action}</li>`;
});


$(document).ready(() => {
    listItems();
});