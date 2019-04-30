$(function() {

	$('#to-do').on('submit', function() {

		$('#empty').remove();

		createItem();

		$('.item-title-text').last().text($('#to-do-title').val());
		$('.item-text').last().text($('#to-do-decription').val());
		$('.close').html('<i class="fa fa-sort-down"></i>');
		$('.remove').html('<i class="fa fa-times"></i>');

		$('#to-do')[0].reset();
		return false;
	});
	
	$(document).on('click', '.remove', function() {
		$(this).parent().parent().remove();
		if(!($('#list').children().length > 1)) {
			$('#list').append('<div id="empty">Список пуст...</div>');
			$('#empty').css({
				'color': '#8993AD',
				'margin-top': '80px'
			});
		}
		return false;
	});

	$(document).on('click', '.close', function() {
		$(this).parent().parent().toggleClass('closed-text item');
		
		if($(this).parent().next().css('display') == 'none') {
			$(this).parent().next().css({'display': 'block'});
			$(this).parent().parent().animate({'min-height': '135px'}, 100);
			$(this).css({'transform': 'scale(-1, 1)'}, 1000);
		}
		else {
			$(this).parent().next().css({'display': 'none'});
			$(this).parent().parent().animate({'min-height': '59'}, 100);
			$(this).css({'transform': 'scale(1, -1)'}, 1000);
		}
		return false; // убирает прокрутку в начало
	});	
});

function createItem() {
	var Item = $('<div class="item"></div>');
	var itemTitle = $('<div class="item-title"></div>');

	itemTitle.append('<div class="item-title-text"></div>');
	itemTitle.append('<a href="#" class="remove"></a>');
	itemTitle.append('<a href="#" class="close"></a>');

	Item.append(itemTitle);
	Item.append('<div class="item-text"></div>');

	$('#list').append(Item);
		
	$('.item').css({
		'background-color': '#FFFFFF',
		'min-height': '135px',
		'margin-bottom': '20px'
	});

	$('.item-title').css({
		'padding': '20px',
		'border-bottom': '1px solid #F7F7F7'
	});

	$('.item-title-text').css({
		'margin': '0',
		'font-size': '16px',
		'max-width': '350px',
		'display': 'inline-block'
	});

	$('.item-title a').css({
		'text-decoration': 'none'
	});

	$('.remove').css({
		'margin': '0 20px',
		'color': '#D80027',
		'vertical-align': 'top'
	});

	$('.close').css({
		'position': 'absolute',
		'right': '0',
		'color': 'black',
		'margin': '0 20px'
	});

	$('.item-text').css({
		'padding': '20px',
		'color': '#8996AD'
	});

	$('.item-title-text, .remove, .close').css({
		'display': 'inline-block'
	});
};