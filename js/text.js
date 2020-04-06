var $text = (function () {
  var $box = $('#note');
  var $area = $('<div id="text" class="text"></div>');
  var $context = $('<textarea spellcheck="false"></textarea>');

  function init() {
    $area.css('height', window.innerHeight - 27);
    $area.append($context);
    $box.append($area);
  }

  return {
    init: init
  };
}());