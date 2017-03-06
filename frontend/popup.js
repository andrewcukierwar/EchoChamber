function getScore() {
    chrome.tabs.query({active: true}, function(tabs) {
        var url = tabs[0].url;
        console.log("Getting score for url: " + url);

        var serviceUrl = "https://allenhao.me/article";
        var data = {"article": url};

        jQuery.post(serviceUrl, data, function(res) {
            res = JSON.parse(res);
            var score = res.score;
            console.log("Got score: " + score);

            $("#loading").hide();
            $("#score").text("Score: " + score);
        });
    });
}

document.addEventListener("DOMContentLoaded", function () {
    console.log("Getting score...");
    $("#loading").show();
    getScore();
});
