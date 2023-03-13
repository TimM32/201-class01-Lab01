let userName = prompt("What is your name?");
console.log("user name: ", userName);
let confirmMessage = confirm("Do you want to continue?");
console.log("confirm message: ", confirmMessage);

let response = getFavoriteSport();

function getFavoriteSport() {
    let userSport = prompt("what's your favorite Sport?");
    userSport = userSport.toLowerCase();
    let response;

    if (userSport === "baseball") {
        response = "Awesome!";
    } else if (userSport === "football") {
        response = "Best Sport All-time!!";
    } else if (userSport === "basketball") {
        response = "Ah a classic!";
    } else {
        response = "Great Choice!";
    }
    console.log("response", response);
    return response;
}
document.write(response);