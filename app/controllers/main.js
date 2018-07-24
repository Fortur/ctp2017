const pages = require('./../../pages.json').pages;

exports.getMainPage = (req, res) => {
    const lang = req.cookies.lang == undefined ? 'ru' : req.cookies.lang;
    const title = pages.index['title_' + lang];
    res.render(`${lang}/index.html`,{title});
}