/**
* this plugin adds the missing callback to jQuery class manipulation.
* it further allows sending the callback after a desired time.
* supported events are:
*   .addClass();
*   .removeClass();
*   .toggleClass();
*
* @license
* Copyright (c) 2012 Gregor Adams
* licensed under the MIT (MIT-LICENSE.txt)
*
* Version: 0.1.1
* Date: 2012-08-09
*
**/

(function($) {
  "use strict";
  $.fn.addClass = (function(addClass) {
      return function(className, callback, duration) {
        var result = addClass.call(this, className);
        setTimeout(callback, duration);
      return result;
    };
  })($.fn.addClass);

  $.fn.removeClass = (function(removeClass) {
      return function(className, callback, duration) {
        var result = removeClass.call(this, className);
        setTimeout(callback, duration);
      return result;
    };
  })($.fn.removeClass);

  $.fn.toggleClass = (function(toggleClass) {
      return function(className, callback, duration) {
        var result = toggleClass.call(this, className);
        setTimeout(callback, duration);
      return result;
    };
  })($.fn.toggleClass);

})(jQuery);




