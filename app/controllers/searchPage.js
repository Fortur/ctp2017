const pages = require('../../pages.json').pages;
const convert = require('../utils/convertHtmlToText');
const fs = require("fs");

exports.getSearchPage = (req, res) => {
    const lang = req.cookies.lang == undefined ? 'ru' : req.cookies.lang;
    let userReq = req.params.userReq;
    if ((userReq != undefined) && (userReq != null)) {
        userReq=userReq.trim();
        let inread, //назначаем стартовую страницу для поиска
            userReqArr = userReq.split(' '), //разбить весь текст на строки
            base = new Map();
        for (let i = 0; i < Object.keys(pages).length; i++) {
            inread = Object.keys(pages)[i];
            let fileContent = fs.readFileSync(`src/view/${lang}/${inread}.html`, "utf8"), //считываем файл
                clearString = convert.convertHtmlToText(fileContent); //удаляем тэги
            for (let j = 0; j < userReqArr.length; j++) {
                if (clearString.toLowerCase().indexOf(userReqArr[j].toLowerCase()) + 1) {
                    let context = convert.getContext(fileContent);
                    base.set(inread, context);
                }
            }
        }
        let outArr = new Array(base.size);

        let k = 0;
        base.forEach((value, key, map) => {
            outArr[k] = new Array(3);
            outArr[k][0] = key;
            outArr[k][1] = value;
            if (lang == 'ru') {
                outArr[k][2] = pages[key].title_ru;
            } else {
                outArr[k][2] = pages[key].title_en;
            }
            k++;
        });

        if (k == 0) {
            if (lang == 'ru') {
                var badsearch = `По запросу: "${req.params.userReq}" ничего не найдено`;
            }
            else {
                var badsearch = `Nothing found for "${req.params.userReq}"`;
            }
            res.render('ru/search_page.html', { badsearch: badsearch });
        } else {
            if (lang == 'ru') {
                var goodsearch = `По запросу "${req.params.userReq}" найдено ${base.size} совпадений:`;
            }
            else {
                var goodsearch = `${base.size} matches found on request "${req.params.userReq}"`;
            }
            res.render('ru/search_page.html', {
                search: outArr,
                goodsearch: goodsearch
            });
        }
    }
    else {
        if (lang == 'ru') {
            var badsearch = 'Пустой поисковый запрос';
        }
        else {
            var badsearch = 'Empty search query';
        }
        res.render('ru/search_page.html', { badsearch: badsearch });
    }
}


exports.searching = (req, res) => {
    let userReq = req.body.userReq;
    res.redirect(`/search/${userReq}`);
}