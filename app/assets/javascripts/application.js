// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require angular
//= require_tree .


var blogApp = angular.module('blogApp', ['ngSanitize']);

// Fix angular loading bug with turbolinks
$(document).on('turbolinks:load', function() {
  return angular.bootstrap(document.body, ['blogApp']);
});

blogApp.controller("articlesController", function ($scope, $http, $window) {

  // Fetch articles from articles.json
  $scope.getArticles = function () {
    $http.get('/js_articles.json')
    .success(function (data) {
        $scope.articles = data;
    })
    .error(function () {
    });
  };

  $scope.getArticles();

  var getArticleElement = function(element) {
    var articleElem = "article-" + element.article.id;
    return document.querySelector("#" + articleElem + " .more");
  }

  var getArticleContent = function(element) {
    var articleContent = "article-" + element.article.id;
    return document.querySelector("#" + articleContent + " p");
  }

  $scope.readMore = function() {  
    var articleElement = getArticleElement(this);
    var articleContent = getArticleContent(this);

    // Remove truncating
    articleContent.classList.remove("ellipsis");
    // Remove 'Read more' button
    articleElement.style.display="none";
  }
});

blogApp.filter('markdown', function() {
  var converter = new Showdown.converter();
  return converter.makeHtml;
});