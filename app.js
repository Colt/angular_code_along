var app = angular.module("blogApp", []);

app.controller("commentsController", function(){
	this.addComment = function(post){
		post.comments.push(this.newComment);
		this.newComment = {};
	};
});

app.directive("sayHello", function(){
	return {
		restrict: "AE",
		replace: true,
		template: "<h1>HI CLASS!</h1>"
	}
});

app.controller("blogController", function(){

	this.addPost = function(){
		this.newPost.date = Date.now();
		this.newPost.votes= 0;
		this.newPost.comments = [];
		this.posts.push(this.newPost);
		this.newPost = {};
	};

	this.addVote = function(post){
		post.votes++;
	};

	this.posts = [
		{title: "My Dog, Rusty",
			url: "http://i.imgur.com/RhGpHfE.jpg?1",
			date:  Date.now(),
			votes: 0,
			comments: [
				{text: "He sucks", author: "Sally"},
				{text: "You post too many pictures of your dog", author: "Bill"}
			]
		},
		{title: "Rusty Again",
			url: "http://i.imgur.com/RhGpHfE.jpg?1",
			date:  Date.now(),
			votes: 0,
			comments: [
				{text: "AAWWWWWW", author: "Tom3000"},
				{text: "UGLY", author: "Jack"}
			]
		}
	];
});