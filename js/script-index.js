$(document).ready( function() {

	//oculta la flecha de menu
	$('.js-back').hide();
	//Llamo a la función que pinta en el elemento p 
	printNews();

	renderHighlightedRecipes(recipesArray);
	renderActivities(activities);

});


function printNews() {
	$(".callout-news p").text("NUEVAS RECETAS");
}

function renderHighlightedRecipes(recipesArray) {
	console.log('Recipes: ', recipesArray);
	//array
	for ( var i = 0; i < recipesArray.length; i++ ) {
		//guarda
		var recipe = recipesArray[i];
		//condicion 
		if( recipe.highlighted == true ) {
			renderRecipe(recipe);
		}
	}