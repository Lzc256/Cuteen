
(function($){$.fn.preloader=function(params){var options=$.extend({selector:"#preloader",type:"document",removeType:"fade",fadeDuration:300,delay:0},params);var element=null;function init(){element=$(options.selector)}function run(){switch(options.type){case"document":default:setTimeout(function(){enforceRemove()},options.delay);break}}function enforceRemove(){switch(options.removeType){case"fade":fadeOut();break;case"remove":default:remove();break}}function remove(){return element.remove()}function fadeOut(){return element.fadeOut(options.fadeDuration,afterCallback())}function afterCallback(){return function(){element.remove()}}init();return this.ready(function(){$(this).trigger("preloader:before");run();$(this).trigger("preloader:after")})}}(jQuery));
