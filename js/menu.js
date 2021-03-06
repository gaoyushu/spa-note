/* exported $menu */
/* global $font: true */
var $menu = (function () {
  var $box = $('#note');
  var $bar = $('<div id="menu" class="menu"></div>');

  var data = [
    {
      title: '文件',
      items: [
        {
          title: '新建',
        },
        {
          title: '打开',
        },
        {
          title: '保存',
        },
        {
          title: '|ू･ω･` )',
        },
      ],
    },
    {
      title: '编辑',
      items: [
        {
          title: '剪切',
        },
        {
          title: '复制',
        },
        {
          title: '粘贴',
        },
        {
          title: '删除',
        },
      ],
    },
    {
      title: '格式',
      items: [
        {
          title: '字体',
        },
      ],
    },
    {
      title: '查看',
      items: [
        {
          title: '看了个寂寞',
        },
      ],
    },
    {
      title: '帮助',
      items: [
        {
          title: '关于',
        },
      ],
    },
  ];

  var active = -1;

  function initTitle() {
    var $titles = $('<ul class="menu-title"></ul>');

    for (var i = 0; i < data.length; i++) {
      var $title = $('<li class="menu-title-items"></li>');

      $title.html(data[i].title);
      $title.attr('menu-title', i);
      $titles.append($title);
      $bar.append($titles);

      $title.click(function (e) {
        active = $(this).attr('menu-title');
        showItems();
        e.stopPropagation();
      });

      $title.hover(function () {
        if (active !== -1) {
          active = $(this).attr('menu-title');
          showItems();
        }
      });
    }
  }

  function initItems() {
    // 可以在data中定义每个选项的调用函数 在这里遍历时直接click事件函数即可 这样代码更简洁复用
    for (var i = 0; i < data.length; i++) {
      var items = '';
      for(var j = 0; j<data[i].items.length; j++){
        items += '<li class="menu-items-items" menu-items=' + i + '-' + j + '>' + data[i].items[j].title + '</li>';
      }
      var $items = $('<ul class="menu-items">' + items + '</ul>');
      $items.css('left', i * 54);
      $bar.append($items);
    }
    active = -1;
    $font.init();
    $bar.find('[menu-items=\'2-0\']').click(function(){
      $font.show();
    });
  }

  function showItems() {
    var $items = $('.menu-items');
    $items.css('display', 'none');
    if (active != -1) {
      $items.eq(active).css('display', 'inline-block');
    }
  }

  function hideItems() {
    active = -1;
    showItems();
  }

  function init() {
    initTitle();
    initItems();
    $box.append($bar);
  }

  return {
    init: init,
    hideItems: hideItems,
  };
})();
