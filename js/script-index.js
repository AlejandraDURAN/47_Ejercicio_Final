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
	function renderRecipe(recipe) {
	console.log('Voy a pintar la receta: ', recipe);
	
	
	var aItem = $('<a class="item-recipe" href="#"></a>');

	var spanAttr = $('<span class="attribution"></span>');
	
	var spanTitle = $('<span class="title-recipe"></span>');
	
	spanTitle.text(recipe.title);
	
	var spanMeta = $('<span class="metadata-recipe"></span>');
	
	var spanAuthor = $('<span class="author-recipe"></span>');
	spanAuthor.text(recipe.source.name);
	
	var spanBook = $('<span class="bookmarks-recipe"></span>');
	
	var spanIcon = $('<span class="icon-bookmark"></span>');
	spanIcon.text(recipe.cookTime);
	
	var imgUrl = $('<img/>');
	
	imgUrl.attr('src', 'img/recipes/320x350/' + recipe.name + '.jpg');

	///pinta en pantalla las etiquetas
	aItem.append(spanAttr);
	spanAttr.append(spanTitle);
	spanAttr.append(spanMeta);
	spanMeta.append(spanAuthor);
	spanMeta.append(spanBook);
	spanBook.append(spanIcon);
	aItem.append(imgUrl);

	//div con los elementos
	$('.list-recipes').append(aItem);
}
