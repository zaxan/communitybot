# Hive Community Bot
This is a bot designed to upvote posts on the Hive blockchain that contain the community tag defined within the bot's configuration. This works by streaming blocks from the Hive blockchain and then voting for the posts that match the desired community tag. This project is based deeply on the work of @klye's Vooby STEEM Bot v0.0.2.

## Installation
$ git clone https://github.com/patrickulrich/communitybot.git<br>
$ cd communitybot<br>
$ npm install @hiveio/hive-js --save

## Configuration
First rename communitybot-example.js to communitybot.js

$ mv communitybot-example.js communitybot.js

Now open and configure the following fields within communitybot.js:

$ var votingAccount = 'XXXXX'; // Replace XXXXX with your voting account (no @)<br>
$ var postingKey = 'XXXXXXXXXXXXX'; // Replace XXXXXXXXXXXXX with your voting account's posting key<br>
$ var targetCommunity = "hive-101690"; // Replace hive-101690 with the community you want to vote for<br>
$ var weight = 01000; // Set your voting weight (10000 = 100%)<br>

## Run
$ node communitybot.js<br>

This will run the process in the foreground which is not recommended. I recommend using a tool such as PM2 to run the process in the background as well as providing many other great features.
