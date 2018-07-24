var exports = module.exports = {};

exports.getContext = function (inputText) {
    var inputText = inputText;
    var returnText = "" + inputText;
    let start = returnText.indexOf("<div id=\"Context\">");
    if (start + 1) {
        returnText = returnText.substr(start + 19, 200) + "...";
    } else {
        returnText = " ";
    }
    //-- return
    return (returnText)
}

exports.convertHtmlToText = function (inputText) {
    var inputText = inputText;
    var returnText = "" + inputText;

    returnText = returnText.replace(/<head.*?>[\w\W]*<\/head>/gi, "");
    returnText = returnText.replace(/<button.*?>[\w\W]*?<\/button>/gi, "");
    returnText = returnText.replace(/\{\{[\w\W]*?\}\}/gi, "");
    returnText = returnText.replace(/\{%[\w\W]*?%\}/gi, "");
    //-- remove BR tags and replace them with line break
    returnText = returnText.replace(/<br>/gi, "\n");
    returnText = returnText.replace(/<br\s\/>/gi, "\n");
    returnText = returnText.replace(/<br\/>/gi, "\n");

    //-- remove P and A tags but preserve what inside of them
    //returnText=returnText.replace(/<p.*>/gi, "\n");    //с ним удаляется всё что в тэге <p>
    returnText = returnText.replace(/<a.*href="(.*?)".*>(.*?)<\/a>/gi, "");

    //-- remove all inside SCRIPT and STYLE tags
    returnText = returnText.replace(/<script.*?>[\w\W]*?<\/script>/gi, "");
    returnText = returnText.replace(/<style.*?>[\w\W]*?<\/style>/gi, "");
    //returnText = returnText.replace(/<style.*>[\w\W]{1,}(.*?)[\w\W]{1,}<\/style>/gi, "");
    //-- remove all else
    returnText = returnText.replace(/<(?:.|\s)*?>/g, "");

    //-- get rid of more than 2 multiple line breaks:
    returnText = returnText.replace(/(?:(?:\r\n|\r|\n)\s*){2,}/gim, "\n\n");

    //-- get rid of more than 2 spaces:
    returnText = returnText.replace(/ +(?= )/g, '');

    //-- get rid of html-encoded characters:
    returnText = returnText.replace(/&nbsp;/gi, " ");
    returnText = returnText.replace(/&amp;/gi, "&");
    returnText = returnText.replace(/&quot;/gi, '"');
    returnText = returnText.replace(/&lt;/gi, '<');
    returnText = returnText.replace(/&gt;/gi, '>');

    //-- return
    return (returnText)
}