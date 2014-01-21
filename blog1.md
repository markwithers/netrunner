Writing the Netrunner tournament app

Intro
=====

I play netrunner (desription, link).
I want to run tournaments, but I don't want to do maths, or write things down on paper.
As a web developer, my instinct is to write a web site. This seems fine. Let's do this!

Tech
====
At work, I use coffeescript everywhere.
I use node and mongo on the server side.
I use brunch as a build tool and client side module system.
I use Backbone as an MVC framework
Finally I use Handlebars for templating, JQuery for dom manipulation, and d3 for graphs

I like all these technologies, but lets shake it up a bit

I'm gonna go with Javascript. Coffeescript is Javascript evolved, but I don't want to lose my roots, and I wouldn't mind some contributions to my project, so I'll use the ugly original, rather than the pretty newcomer.
I'll use node on the server side. Not sure which databse I'll pick, but I know I can defer the decision until a little later, right?
I'll go with browserify for my client side module builder. This seems lighter and easier than the alternatives.
I'm going to try bower for the first time, to manage my vendor javascript packages, because I've heard it's cool. I don't have mouch more than that right now.
I'm going to try Riot.js for my single page framework. It's like Backbone, but smaller and faster. Or that's what they say. It also has a very small surface area, so less to learn, and more to invent, which seems like a good thing.
Riot has it's own built-in templating. I'm happy with that.
And finally, I'll stick with JQuery for dom manipulation, because I don't want to rock boats for the sake of it.

Plan
====

I'm going to write this when I feel like it. I might finish it in time for Saturday (Which is when I need it) or I might not. I'm cool with that.
I want this software to let me add a list of players
I want it to matchmake them randomly
I want to enter the scores for the round
I want it to matchmake round 2 based on the netrunner tournament rules, so I don't have to think
I want the app to tell me how many rounds to run
I want to optionally cut to a top 8, 4, or 2 after the rounds, or simply declare a winner
I want to persist the tournament somewhere, and have a public facing web site to show previous results
I want to.. actually, that's it for now.
I'd quite like to be able to give this software to other Netrunner TOs
I think I'd like this to be an app too, so I'll look at phonegap quite seriously once I'm otherwise finished.
I think that's about it.

Ok, that's my blog post. Tune in next time when I will have written some bit of my app. Not sure which.
