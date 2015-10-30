var viewerApp = viewerApp || {};
viewerApp.models = viewerApp.models || {};
viewerApp.controllers = viewerApp.controllers || {};
viewerApp.views = viewerApp.views || {};

viewerApp.models.queue = queue(1); //1 is to run tasks synchronously

$(function () {
    viewerApp.views.welcomeName = $('#screen #welcomeName');
    $('button').click(function () {
      viewerApp.controllers.toggle(this);
    });
});


viewerApp.controllers = {
    toggle: function (button) {
      $(button).toggleClass('on');

      if ($(button).hasClass('on')) {
        var q = viewerApp.models.queue;
        q.defer(viewerApp.controllers.welcomePerson, button);
      }
    },

    welcomePerson: function (button, callback) {
      if (!$(button).hasClass('on')) {return callback(null);}

      var welcomeName = viewerApp.views.welcomeName;
      var person = $(button).text();
      welcomeName.text('Welcome ' + person);
      welcomeName.fadeIn(300).delay(2400).fadeOut(300, function() {
        $(button).removeClass('on');
        callback(null);
      });
  }
};