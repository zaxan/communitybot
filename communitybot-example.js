// ***CONFIG*** 
var votingAccount = 'XXXXX'; // Replace XXXXX with your voting account (no @)
var postingKey = 'XXXXXXXXXXXXX'; // Replace XXXXXXXXXXXXX with your voting account's posting key
var targetCommunity = "hive-101690"; // Replace hive-101690 with the community you want to vote for
var weight = 01000; // Set your voting weight (10000 = 100%)

// DO NOT MODIFY BELOW THIS LINE!

var hive = require('@hiveio/hive-js');
var totalvote = 0;
var metadatascan;
var json_metadata;
var op;

console.log("===================================================================");
console.log("-------------------------------------------------------------------");
console.log("------------- Hive Community Bot - Listening on Hive --------------");
console.log("-------------------------------------------------------------------");
console.log("===================================================================");

//----- Grab Current Hive Block
hive.api.streamBlockNumber(function (err1, newestblock) {
    console.log("Scanning Block #" + newestblock + " For New #" + targetCommunity + " Posts - Posts Voted: " + totalvote);
});

//----- See if Post is for our target community ----
var process_post = function (op) {
    if (op["author"] != "") {
        console.log(targetCommunity + " Post Has Been Detected! Upvoting!");
        hive.broadcast.vote(
            postingKey,
            votingAccount,
            op["author"],
            op["permlink"],
            weight,
            function (downerr, result) {
                if (downerr) {
                    var error = JSON.stringify(downerr);
                    if (error.toLowerCase().indexOf("You have already voted in a similar way.\n") >= 0) {
                        console.log("Hive Community Bot tried to vote for a post it already voted on!");
                    }
                }
                if (result) {
                    totalvote++;
                    console.log("Successfully voted #" + targetCommunity + " post!");
                }
            }
        );
    }
};
//----- Streeming Latest Block Operations
hive.api.streamOperations(function (err2, blockops) {
    // get 1st item in blockops an apply to operationType variable to check type later
    var opType = blockops[0];
    // get 2nd item in blockops and store it later to be parsed if it's our specified type of operation
    var op = blockops[1];
    if (op["json_metadata"] != undefined) {

        metadatascan = op["json_metadata"];
        if (metadatascan != '') {
            var tags = JSON.parse(metadatascan);
            var actualtags = tags["tags"];
            if (actualtags != undefined) {
                var tagtag = String(actualtags);

                if (op["parent_author"] === '') {
                    if (tagtag.toLowerCase().indexOf(targetCommunity) >= 0) {
                        process_post(op);
                    }
                }
            }

        }
    }
});