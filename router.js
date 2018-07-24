let express = require('express'),
    router = express.Router(),

    mainController = require('./app/controllers/main'),
    pageController = require('./app/controllers/page'),
    searchController = require('./app/controllers/searchPage');


//поиск
router.get('/search/:userReq', searchController.getSearchPage);
router.get('/search', searchController.getSearchPage);
router.post('/searching', searchController.searching);

router.get('/lang',pageController.swapLang);

router.get('/', mainController.getMainPage);
router.get('/:alias', pageController.getPage);


module.exports = router;