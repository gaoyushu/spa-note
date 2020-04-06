$(function(){
    $menu.init();
    $text.init();
    var $body = $('body');
    $body.click(function(){
        $menu.hideItems();
    })
})