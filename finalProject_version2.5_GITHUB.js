// Data structure: array of objects (restaurants)
const restaurantData = [
	{
		// test case to show functionality of searchByOpen
	"name": "Opens at 2230",
	"price": "$$",
	"hourOpen": "2230",
  "hourClose": "2330",
	"cuisine": "Japanese",
	"bar": "yes",
	"address": "170 Allen Street, New York",
	"review": "Superb. Excellent service. Fabulous food. Best ramen in the state. Go at off peak times.",
  "website": "",
		},
	{
		// test case to show functionality of searchByOpen
	"name": "Opens at 2130",
	"price": "$$",
	"hourOpen": "1830",
  "hourClose": "2130",
	"cuisine": "Japanese",
	"bar": "yes",
	"address": "170 Allen Street, New York",
	"review": "Superb. Excellent service. Fabulous food. Best ramen in the state. Go at off peak times.",
  "website": "",
	},
	{
	"name": "Mr. Taka",
	"price": "$$",
	"hourOpen": "1130",
  "hourClose": "2330",
	"cuisine": "japanese",
	"bar": "yes",
	"address": "170 Allen Street, New York",
	"review": "Superb. Excellent service. Fabulous food. Best ramen in the state. Go at off peak times.",
  "website": "https://mrtakaramen.webs.com/",
	},
	{
	"name": "Sushi Gen",
	"price": "$$$",
	"hourOpen": "1115",
	"hourClose": "2130",
	"cuisine": "japanese",
	"bar": "yes",
	"address": "422 E 2nd St, Los Angeles",
	"review": "One of the best sushi places here in LA!",
  "website": "http://www.sushigen-dtla.com/",
	},
	{
	"name": "Madame Vo",
	"price": "$$",
	"hourOpen": "1200",
	"hourClose": "2130",
	"cuisine": "vietnamese",
	"bar": "no",
	"address": "212 E 10th, New York",
	"review": "Fine location for Vietnamese food. Service is prompt even when they are busy.",
  "website": "https://www.madamevonyc.com/",
	},
	{
	"name": "Pho 79",
	"price": "$",
	"hourOpen": "0600",
	"hourClose": "2200",
	"cuisine": "vietnamese",
	"bar": "no",
	"address": "9941 Hazard Ave, Garden Grove",
	"review": "Damn good food!",
  "website": "http://www.pho79.com/",
	},
	{
	"name": "Tacombi",
	"price": "$$",
	"hourOpen": "1100",
	"hourClose": "2300",
	"cuisine": "mexican",
	"bar": "no",
	"address": "267 Elizabeth Street, New York",
	"review": "Amazing atmosphere, even more amazing food & drinks.",
  "website": "http://tacombi.com/",
	},
	{
	"name": "Te'Kila",
	"price": "$",
	"hourOpen": "1100",
	"hourClose": "0200",
	"cuisine": "mexican",
	"bar": "yes",
	"address": "6541 Hollywood Blvd, Los Angeles",
	"review": "This place has awesome guacamole!",
  "website": "http://tekilahollywood.com/",

	},
	{
	"name": "Lali",
	"price": "$",
	"hourOpen": "0700",
	"hourClose": "1600",
	"cuisine": "dominican",
	"bar": "no",
	"address": "630 10th Ave, New York",
	"review": "Specials are delicious and a great bang for your buck.",
  "website": "https://www.facebook.com/pages/Lalis-Restaurant/149207401766973",
	},
	{
	"name": "Puerto Viejo",
	"price": "$$",
	"hourOpen": "1030",
	"hourClose": "2300",
	"cuisine": "dominican",
	"bar": "yes",
	"address": "564 Grand Ave, New York",
	"review": "Yummy. Definitely satisfied my craving for Dominican food",
  "website": "http://www.puertoviejony.com/",
	},
	{
	"name": "Mighty Quinn's",
	"price": "$$",
	"hourOpen": "1130",
	"hourClose": "2300",
	"cuisine": "bbq",
	"bar": "yes",
	"address": "103 2nd Ave, New York",
	"review": "Highly reccomend. Try those corn fritters!",
  "website": "https://mightyquinnsbbq.com/",
	},
	{
	"name": "Bludso's Bar",
	"price": "$$",
	"hourOpen": "1200",
	"hourClose": "2200",
	"cuisine": "bbq",
	"bar": "yes",
	"address": "609 N La Brea Ave, Los Angeles",
	"review": "Everything you have heard about this place is true! The legendary BBQ is so good!",
  "website": "https://www.barandque.com/",
	}
];


// filter restaurantData for stores open
// return array of objects that are currently open
// find current real time
// return object into new array if current time is between hourOpen and hourClose
function isOpen() {
	const arrOfOpenRestaurants = restaurantData.filter((el) => {
	// get current time in military format
	const today = new Date();
	const currentTime = parseInt(`${today.getHours()}${today.getMinutes()}`);

	if(currentTime > parseInt(el.hourOpen) && currentTime < parseInt(el.hourClose)){
		return el;
	}
});
console.log(`-> Here are restaurants that are open: \n`);
return arrOfOpenRestaurants;
}

// allows user to search by cuisine
function searchByCuisine() {
	/** edge case unresolved **/
	// one of the multiple keywords has no match
	// notify user of keyword with no match?

  let favFood = prompt("What are you in the mood for? \n Ex. Vietnamese, Mexican");
	// split string into an arr using regex as delimiter ', ' comma space delimiter or space or comma
	// italian pizza
	// italian, pizza
	// italian,pizza
	// [italian, pizza]
	const arrOfKeywords = favFood.toLowerCase().split(/, | |,/);
	console.log(`-> Here are your matches for '${favFood}': \n`);

	// only works because each element has only one cuisine
  const arrMatches = restaurantData.filter((el) => arrOfKeywords.includes(el.cuisine));

	if (arrMatches.length === 0) {
		// handles input edge cases too!
		return "Sorry, no matches!";
	} else {
		return arrMatches;
	}
}


// allows user to create a new restaurant
function createNewRestaurant(){
	// prompt user for input
	// match variable with associated key in object
	// check that user actually inputs data

	alert("Note: if you don't know the information, please type 'unknown'.");

  let name = prompt("What is the restaurant's name?");
		if (name === null || name === ""){
			return "Sorry, you did not input a name.";
		}

  let price = prompt("What is the price range per person? \n $ = $0-10 \n $$ = $11-30 \n $$$ = $31-60 \n $$$$ = above $61");
		if (price === null || price === ""){
			return "Sorry, you did not input a price.";
		}

  let hourOpen = prompt(`What time does ${name} open? (Note: Please use military time format.`);
	// conditional checks to make sure that user input is a number, and is military time
	if(hourOpen === null || hourOpen === "" || hourOpen.length !== 4 || isNaN(parseInt(hourOpen))){
		return "Sorry, you did not correctly input an opening time.";
	}

  let hourClose = prompt(`What time does ${name} close? (Note: Please use military time format.)`);
	// conditional checks to make sure that user input is a number, and is military time
	if(hourClose === null || hourClose === "" || hourClose.length !== 4 || isNaN(parseInt(hourClose))){
		return "Sorry, you did not correctly input a closing time.";
	}

  let cuisine = prompt("What is the cuisine? What kind of food do they serve? (Note: Please only add one type of cuisine)");
	// can enter multiple cuisine like 'mexican, pizza'
	// handle numbers
	// 11
	cuisine = cuisine.toLowerCase();
		if (cuisine === null || cuisine === "" || !isNaN(parseInt(cuisine))){
			return "Sorry, you did not correctly input a cuisine.";
		}

  let bar = prompt("Do they have a bar? (Yes or No)");
		if (bar === null || bar === "" || (bar.toLowerCase() !== 'no' && bar.toLowerCase() !== 'yes')){
			return "Sorry, you did not correctly input a bar.";
		}

  let address = prompt(`What is the address for ${name}?`);
	if (address === null || address === ""){
			return "Sorry, you did not input an address.";
		}

  let review = prompt(`Write a review! What did you think of ${name}?`);
	if (review === null || review === ""){
			return "Sorry, you did not input a review.";
		}

	let website = prompt('Insert the website link to the restaurant below.');
	if (website === null || website === ""){
			return "Sorry, you did not input a website.";
		}
	console.log(`-> View the restaurant you added: \n`);
	restaurantData.push({
    "name": name,
    "price": price,
    "hourOpen": hourOpen,
    "hourClose": hourClose,
    "cuisine": cuisine,
    "bar": bar,
    "address": address,
    "review": review,
		"website": website,
  });

	return restaurantData.slice(restaurantData.length-1);
}

// searchByBudget()
// prompts for budget
// parse budget into $
// filter for restaurants with prices up to and including targetPrice
// return that array
// restaurant prices are in strings

function searchByBudget() {
	let targetPrice = prompt('What is your budget for tonight? \n Ex. if $20 enter 20 into the text box');

	// convert to $, $$, $$$, or $$$$
	// edge case
	// if (isNaN(parseInt(targetPrice))){
	// 	return '-> Sorry, incorrect input.'
	// }
	if (targetPrice < 0){
		return ' -> Yea jk, nothing is within budget. \n Instant Ramen?';
	}else if(targetPrice > 0 && targetPrice < 11){
		targetPrice = '$';
	}else if(targetPrice < 31){
		targetPrice = '$$';
	}else if(targetPrice < 61){
		targetPrice = '$$$';
	}else if(targetPrice >= 61){
		targetPrice = '$$$$';
	}
	// filter for matching price of restaurants
	const arrWithinBudget = restaurantData.filter((el) => el.price === targetPrice
);
	console.log(`-> Here are the restaurants that match your budget: \n`);
	return arrWithinBudget;
}

// takes array of objects
// create arrFormattedRestaurants
// for each object, push into arrFormattedRestaurants the current input array element's key value pairs nicely formatted
// return arrFormattedRestaurants
function addDashes(array){
	if (!Array.isArray(array)) return "Not found";
	const arrFormattedRestaurants = [];
	array.forEach(function(el){
		let dash = '-';
		dash = dash.repeat(el.name.length + 8);
		arrFormattedRestaurants.push(`${dash} \n--- ${el.name} ---\n${dash}\n Price: ${el.price}\n Opens at: ${el.hourOpen}\n Closes at: ${el.hourClose}\n Cuisine: ${el.cuisine}\n Bar: ${el.bar}\n Address: ${el.address}\n Review: \n    ${el.review}\n Website: ${el.website}\n
		`);
	});
	return arrFormattedRestaurants;
}

//instead of typing in exit, can have them press cancel instead?

function initializeMenu(){
	let userInput = prompt("Welcome to JBG Restaurant Reviewer! \nWhat would you like to do? \nPlease enter only the number in the text box below. \n (1) Add A Restaurant \n (2) Search by Cuisine \n (3) Check what restaurants are currently open \n (4) Search by Budget \n \nPress [Cancel] to Exit");

	if (userInput === null){
		alert("bye felicia");
		return 'Program is finished';
	}
	// addressing input edge cases
	switch (userInput.toLowerCase()){
	case "1":
		// console.log('View the restaurant you added: \n');
		const resultOfRestaurantCreated = createNewRestaurant();

		if (Array.isArray(resultOfRestaurantCreated)){
			// alert user for successful input
			alert("Huzzah! All your base are belong to us! (Translation: You successfully added a restaurant. Thanks for your entry!)");
			// console.log(addDashes(resultOfRestaurantCreated))
			const newRestaurantFormatted = addDashes(resultOfRestaurantCreated);
				for(element of newRestaurantFormatted){
					console.log(element);
			}
		} else{
			// resultOfRestaurantCreated is a string, because user input was incorrect.
			console.log(resultOfRestaurantCreated);
		}
		break;

	case "2":
		const cuisineFormatted = addDashes(searchByCuisine());
		if(cuisineFormatted !== "Not found"){
			for(element of cuisineFormatted){
			console.log(element);
			}
			}else console.log("-> Sorry, no matches.");

		break;

	case "3":
		const openRestaurantsFormatted = addDashes(isOpen());
		for (element of openRestaurantsFormatted){
			console.log(element);
		}
		break;

	case "4":
		const withinBudgetFormatted = addDashes(searchByBudget());
		if(withinBudgetFormatted !== "Not found"){
			for(element of withinBudgetFormatted){
			console.log(element);
			}
			}else console.log('-> Yea jk, nothing is within budget. \nInstant Ramen?');
		break;

	//we can get rid of exit if we say "press cancel to "
	// case "exit":
	// alert("bye felicia")
	// 	return 'program is finished';
	// 	break;

	default:
	console.log("Sorry, invalid input.");
}

// utilize cancel functionality to present user with two options.
let userAnswer = prompt('Press [Cancel] to see result in the terminal \nPress [OK] to return to menu')
		if(userAnswer === null) return 'Program is finished running.';
		initializeMenu();

}
// initial call to initializeMenu
initializeMenu();

/**Extra Edge Cases **/
// createNewRestaurant()
		// inputting italian12 into cuisine
		// user adding multiple cuisines for cuisine key
// searchByCuisine()
		// one of the multiple keywords has no match
		// notify user of keyword with no match?

/*** ToDos ***/
// have search by cuisine work for multiple key words
// work on presentation
// clean code
// comment where helpful, erase what's not helpful


/** Possible Concerns **/
// Q: Why does the user have to press cancel to see results?
// A: It was the only way we get to work since nothing will log to the console while the thread of execution is still active

/** If we had more time (Stretch cases) **/
// cuisine key would store an object of keywords rather than single keyword so user can search for one of multiple keywords
// database with added restaurant (if not limited to native JS)
// return data sorted by price least to greatest
// return individual names && reviews
// Optimize for time complexity

/** What is the problem we are solving? **/
// searching for restaurant information
// what options do I have tonight? what's open?
// add a new restaurant not in your matches
// keep a log of restaurants and your reviews

/** Challenges **/
// handling edge cases while testing our program (EX. userInput or lack there of)
// discovering how to correctly prompt and alert users via native JS
// tracking typeof inputs, and parsing it correctly to run  operations on
// implementing switch cases
//
