$(document).ready(function() {

    var currentDate = new Date();

    function fetchData(callback) {
        $.getJSON(`https://cdn.jsdelivr.net/gh/BlueCalculator/meep@main/CDNs.json?v=${currentDate.getTime()}`, function(data) {
            callback(data);
        }).fail(function() {
            alert('Failed to load CDNs.json. Major failure. Abort. Sorry :(');
        });
    }

    function populateCDN(data) {
        const cdns = $('.cdns');

        $.each(data, function(index, item) {
            if (item.cdn.slice(-3) === "css") {
                if (!$(`link[href="${item.cdn}"]`).length) {
                    const cdnCSS = $('<link rel="stylesheet" href="' + item.cdn + "?v=" + currentDate.getTime() + '">');
                    $('head').append(cdnCSS);
                }
            } else {
                if (!$(`script[src="${item.cdn}"]`).length) {
                    const cdnsItem = $('<script src="' + item.cdn + "?v=" + currentDate.getTime() + '"></script>');
                    cdns.append(cdnsItem);
                }
            }
        });
    }

    fetchData(populateCDN);


});
