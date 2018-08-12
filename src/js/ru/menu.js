$('.menu').prepend('' +
    '<a href="/about_rrs" class="menu-item"><div class="tri"></div><img src="../images/menu/info.png" alt="">Информация о деятельности РРС</a>' +
    '<a href="/lead" class="menu-item"><div class="tri"></div><img src="../images/menu/person.png" alt="">Обращение руководителя</a>' +
    '<a href="/about" class="menu-item "><div class="tri"></div><img src="../images/menu/kolba.png" alt="">Об исследовании</a>' +
    '<div class="submenu"> ' +
        '<a href="/about" id="common" class="submenu-item ">Общая информация</a> ' +
        '<a href="/steps" id ="steps" class="submenu-item">Положение об исследовании</a> ' +
        '<a href="/experts" id = "experts" class="submenu-item">Состав экспертного совета</a> ' +
    '</div>' +
    '<a href="/conclusions" class="menu-item"><div class="tri"></div><img src="../images/menu/graph.png" alt="">Основные выводы исследования</a>' +
    '<a href="/state" class="menu-item"><div class="tri"></div><img src="../images/menu/eye.png" alt="">Состояние корпоративной прозрачности</a>' +
    '<div class="submenu"> ' +
        '<a href="/state" id="state" class="submenu-item ">Общее состояние корпоративной прозрачности крупнейших российских компаний</a> ' +
        '<a href="/features" id="features" class="submenu-item">Особенности раскрытия отчетной информации компаниями I-IV уровня корпоративной прозрачности</a> ' +
        '<a href="/transp_with_difference" id="transp-with-difference" class="submenu-item">Прозрачность компаний с различной организационно-правовой формой</a> ' +
        '<a href="/transp_sectors" id="transp-sectors" class="submenu-item ">Корпоративная прозрачность различных секторов экономики РФ</a> ' +
        '<a href="/corp_transp" id="corp-transp" class="submenu-item">Корпоративная прозрачность и инвестиционная привлекательность крупнейших российских компаний\t</a> ' +
        '<a href="/system" id="system" class="submenu-item">Прозрачность системообразующих организаций РФ</a> ' +
        '<a href="/corp_transp_list" id="corp_transp_list" class="submenu-item">Корпоративная прозрачность крупнейших листингующихся компаний</a> ' +
    '</div>' +
    '<a href="/mechs" class="menu-item"><div class="tri"></div><img src="../images/menu/mech.png" alt="">Механизмы раскрытия информации</a>' +
    '<div class="submenu">' +
        '<a href="/int" id="int" class="submenu-item">Следование международным стандартам</a>' +
        '<a href="/system_way" id="system-way" class="submenu-item">Системный подход к публичной отчетности</a>' +
        '<a href="/zaver" id ="zaver2" class="submenu-item">Заверение отчетной информации</a>' +
        '<a href="/easyment" id="easyment" class="submenu-item">Удобство использования отчетности и каналов оперативной коммуникации с заинтересованными сторонами</a>' +
        '<a href="/iii" id="iii" class="submenu-item">Раскрытие информации о механизмах прозрачности компаниями III уровня прозрачности</a>' +
    '</div>' +
    '<a href="/keys_transp" class="menu-item"><div class="tri"></div><img src="../images/menu/key.png" alt="">Ключевые показатели прозрачности</a>' +
    //'<a href="/keys_report" class="menu-item"><div class="tri"></div><img src="../images/menu/dia.png" alt="">Ключевые показатели отчетности</a>' +
    '<a href="/aspects" class="menu-item"><div class="tri"></div><img src="../images/menu/list.png" alt="">Аспекты раскрытия информации</a>' +
    '<div class="submenu">' +
        '<a href="/disclosure" id="disclosure" class="submenu-item">Раскрытие информации о стратегии и ее реализации</a>' +
        '<a href="/business_model" id="business-model" class="submenu-item">Раскрытие информации о бизнес модели</a>' +
        '<a href="/corp" id="corp" class="submenu-item">Раскрытие информации о корпоративном управлении</a>' +
        '<a href="/report_period" id="report-period" class="submenu-item">Раскрытие информации о деятельности организации в отчетном периоде</a>' +
        '<a href="/development" id="development" class="submenu-item">Раскрытие информации о деятельности в области устойчивого развития </a>' +
        '<a href="/corrup" id="corrup" class="submenu-item">Раскрытие информации о деятельности в области противодействия коррупции</a>' +
        '<a href="/purchase" id="purchase" class="submenu-item">Раскрытие информации о закупочной деятельности</a>' +
        '<a href="/iii2" id="iii2" class="submenu-item">Раскрытие информации по аспектам компаниями III уровня прозрачности</a>' +
    '</div>' +
    //'<a href="/" class="menu-item"><div class="tri"></div><img src="../images/menu/file.png" alt="">Существенные темы доклада</a>' +
    '<a href="http://corptransparency.ru/rate/" class="menu-item" target="_blank"><div class="tri"></div><img src="../images/menu/chemodan.png" alt="">Итоговый рейтинг</a>' +
    '<a href="/subs" class="menu-item"><div class="tri"></div><img src="../images/menu/apply.png" alt="">Субрейтинги и субренкинги</a>' +
    '<a href="/apply" class="menu-item"><div class="tri"></div><img src="../images/menu/file.png" alt="">Приложения</a>' +
    '<a href="/#top" class="upper"></a>');

$('.menu-item').each(function () {
    if ($(this).text() === $('title').text()){
        $(this).addClass('active')
    }

})
$('.submenu-item').each(function () {
    if ($('#sub').val() == undefined) return
    console.log($(this).attr('id'))
    if ($(this).attr('id') === $('#sub').val()){
        $(this).addClass('active')
    }

})
if ($('.active').next().hasClass('submenu')){
    $('.active').next().css('display', 'flex');
}