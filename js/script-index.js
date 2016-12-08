$(document).ready( function() {

	//oculta la flecha de menu
	$('.js-back').hide();
	 
	printNews();
	renderHighlightedRecipes(recipesArray);
	renderActivities(activities);

});

function printNews() {
	$(".callout-news p").text("NUEVAS RECETAS");
}

function renderHighlightedRecipes(recipesArray) {
	console.log('Recipes: ', recipesArray);
	for ( var i = 0; i < recipesArray.length; i++ ) {
		//guarda en una variable
		var recipe = recipesArray[i];
		if( recipe.highlighted == true ) {
			renderRecipe(recipe);
		}
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

	
	aItem.append(spanAttr);
	spanAttr.append(spanTitle);
	spanAttr.append(spanMeta);
	spanMeta.append(spanAuthor);
	spanMeta.append(spanBook);
	spanBook.append(spanIcon);
	aItem.append(imgUrl);

	
	$('.list-recipes').append(aItem);
}

function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);
	
	for ( var i = 0; i < activitiesArray.length; i++ ) {	
		renderActivity(activitiesArray[i]);
	}
	if( activitiesArray.length > 0 ) {	
		$('div.wrapper-message').hide();	
	}
}

function renderActivity(activity) {
	console.log('Voy a pintar la actividad: ', activity);

	var template = '<a href="#" class="item-activity">' +
		'<span class="attribution">' +
			'<span class="avatar">' +
				'<img src="<%= userAvatar %>" class="image-avatar">' +
			'</span>' +
			'<span class="meta">' +
				'<span class="author"> <%= userName %> </span> made' +
				'<span class="recipe"> <%= recipeName %> </span>: ' +  
				'<span class="location"> <%= place %> </span>' +
			'</span>' +
		'</span>' +
		'<div class="bg-image" style="background-image: url(&quot;<%= image %>&quot;)"></div>' +
	'</a>';

	var compiled = _.template(template);

	var a = compiled(activity);
	console.log(template);

	var elemento = $(a);
	$('.list-activities').append(elemento);
}