# Hive Community Bot
This is a bot designed to upvote posts on the Hive blockchain that contain the community tag defined in the configuration. This is project is based deeply on the work of @klye's Vooby STEEM Bot v0.0.2.

## Installation
$ git clone https://github.com/patrickulrich/communitybot.git<br>
$ cd communitybot<br>
$ npm install @hiveio/hive-js --save

## Configuration
First rename communitybot-example.js to communitybot.js

$ mv communitybot-example.js communitybot.js

Now open and configure the following fields within communitybot.js:

var votingAccount = 'XXXXX'; // Replace XXXXX with your voting account (no @)
var postingKey = 'XXXXXXXXXXXXX'; // Replace XXXXXXXXXXXXX with your voting account's posting key
var targetCommunity = "hive-101690"; // Replace hive-101690 with the community you want to vote for
var weight = 01000; // Set your voting weight (10000 = 100%)

## Run
$ node communitybot.js<br>

This will run the process in the foreground which is not recommended. We recommend using a tool such as PM2 to run the process in the background as well as providing many other great features.
