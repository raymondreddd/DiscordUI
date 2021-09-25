
//only the admin can alter this categories array
var categories = ['home appliances', 'electronics', 'office tools', 'software', 'miscellaneous']

//input taken from form in website
const category_input; 
const type_of_item;
const quantity;
const price;

//if user entered category not defined inside our system
if(!categories.includes(category_input))
{
    alert("Please select from given category and if not present use miscellaneous")
    return;
}

//then we check if the item is of the said category if not we redirect
if(!category_input.includes(type_of_item)){
    alert("You have choosen the wrong category please select right category for this item");
    return;

}

//we check if barter is possible by comparing total cost of both parties
const total_cost_of_buyer=quantity*price_of_item;

//price_of_item is taken from the admin of barter system, it cannot be manipulated by any parties, only suggestion for price can be taken

if(!total_cost_of_buyer === total_cost_of_seller){
    alert("not possible, you as buyer has given less value")
}

else{
    alert("Item can be bought are you sure ypu want to buy")
}