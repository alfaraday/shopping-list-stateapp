//State object
var state = {
	items: [],
  checked: []
};


//Modify state
var addItem = function(state, item) {
	state.items.push(item);
};

var deleteItem = function(state, item) {
  var index = state.items.indexOf(item);
  if (index > -1) {
    state.items.splice(index, 1);
  };
};

var checkItem = function(state, item) {
  state.checked.push(item);
};

var uncheckItem = function(state, item) {
  var index = state.checked.indexOf(item);
  if (index > -1) {
    state.checked.splice(index, 1);
  };
};

//Render state
var renderList = function(state, element) {
	var itemsHTML = state.items.map(function(item){
		return '<li>' +
        '<span class="shopping-item">'+item+'</span>'
        '<div class="shopping-item-controls">' +
          '<button class="shopping-item-toggle">' +
            '<span class="button-label">check</span>' +
          '</button>' +
          '<button class="shopping-item-delete">' +
            '<span class="button-label">delete</span>' +
          '</button>'+
        '</div>' +
    '</li>'
	});
	element.html(itemsHTML);
};

var renderChecks = function(state, element) {
  state.checked.forEach(function(){
    return element.addClass('shopping-item__checked');
  });
}

//Event listeners
$('.js-shopping-list-form').submit(function(event) {
    event.preventDefault();
    addItem(state, $('#shopping-list-entry').val());
    renderList(state, $('.shopping-list'));
});



$('.shopping-item-toggle').on('click', function(event) {
  event.preventDefault();
  if (event.currentTarget.hasClass('shopping-item__checked') === true) {
    uncheckItem(state, $('.shopping-item'))
  };
});







