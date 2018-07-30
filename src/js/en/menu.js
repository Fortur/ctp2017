$('.menu').prepend('' +
    '<a href="/about_rrs" class="menu-item"><div class="tri"></div><img src="images/menu/info.png" alt="">Information about the activities of RRN</a>' +
    '<a href="/lead" class="menu-item"><div class="tri"></div><img src="images/menu/person.png" alt="">Address of the RRN Lead</a>' +
    '<a href="/about" class="menu-item "><div class="tri"></div><img src="images/menu/kolba.png" alt="">About the Research</a>' +
    '<div class="submenu"> ' +
        '<a href="/about" id="common" class="submenu-item ">General Information</a> ' +
        '<a href="/steps" id ="steps" class="submenu-item">The situation about the research</a> ' +
        '<a href="/experts" id = "experts" class="submenu-item">Members of the expert council</a> ' +
    '</div>' +
    '<a href="/conclusions" class="menu-item"><div class="tri"></div><img src="images/menu/graph.png" alt="">Main Conclusions</a>' +
    '<a href="/state" class="menu-item"><div class="tri"></div><img src="images/menu/eye.png" alt="">State of Corporate Transparency</a>' +
    '<div class="submenu"> ' +
        '<a href="/state" id="state" class="submenu-item ">Overall State of Corporate Transparency of the Largest Russian Companies</a> ' +
        '<a href="/features" id="features" class="submenu-item">Specifics of Disclosure of Reporting Information by Companies of I-IV Levels of\n' +
    '            Corporate Transparency</a> ' +
        '<a href="/transp_with_difference" id="transp-with-difference" class="submenu-item">Transparency of Companies with Different Forms of Incorporations</a> ' +
        '<a href="/transp_sectors" id="transp-sectors" class="submenu-item ">Corporate Transparency of Various Sectors of the Russian Economy</a> ' +
        '<a href="/corp_transp" id="corp-transp" class="submenu-item">Corporate Transparency and Investment Attractiveness of Major Russian Companies\t</a> ' +
        '<a href="/system" id="system" class="submenu-item">Transparency of Systemically Important Companies in the Russian Federation </a> ' +
        '<a href="/corp_transp_list" id="corp_transp_list" class="submenu-item">Corporate Transparency of the Major Listed Companies</a> ' +
    '</div>' +
    '<a href="/mechs" class="menu-item"><div class="tri"></div><img src="images/menu/mech.png" alt="">Transparency Mechanisms</a>' +
    '<div class="submenu">' +
        '<a href="/int" id="int" class="submenu-item">Compliance with International Standards</a>' +
        '<a href="/system_way" id="system-way" class="submenu-item">Systemic Approach to Public Reporting</a>' +
        '<a href="/zaver" id ="zaver2" class="submenu-item">Reported information assurance</a>' +
        '<a href="/easyment" id="easyment" class="submenu-item">Usability of Reporting and Efficient Communication Channels with Stakeholders</a>' +
        '<a href="/iii" id="iii" class="submenu-item">The methods of the disclosure of the information by companies at the third level of transparency</a>' +
    '</div>' +
    '<a href="/keys_transp" class="menu-item"><div class="tri"></div><img src="images/menu/key.png" alt="">Key indicators</a>' +
    //'<a href="/keys_report" class="menu-item"><div class="tri"></div><img src="images/menu/dia.png" alt="">Ключевые показатели отчетности</a>' +
    '<a href="/aspects" class="menu-item"><div class="tri"></div><img src="images/menu/list.png" alt="">Transparency aspects</a>' +
    '<div class="submenu">' +
        '<a href="/disclosure" id="disclosure" class="submenu-item">Disclosure of the strategy and its implementation</a>' +
        '<a href="/business_model" id="business-model" class="submenu-item">Disclosure of business model </a>' +
        '<a href="/corp" id="corp" class="submenu-item">Description of Corporate Governance System </a>' +
        '<a href="/report_period" id="report-period" class="submenu-item">Subsection Disclosure of company activities in the reporting period</a>' +
        '<a href="/development" id="development" class="submenu-item">Disclosure of information on the activities in the sphere of sustainable development</a>' +
        '<a href="/corrup" id="corrup" class="submenu-item">Subsection Disclosure of Anti-Corruption Activitiesи</a>' +
        '<a href="/purchase" id="purchase" class="submenu-item">Disclosure of Procurement Activities</a>' +
        '<a href="/iii2" id="iii2" class="submenu-item">Subsection Disclosure of Transparency Aspects by Level III Companies</a>' +
    '</div>' +
    //'<a href="/" class="menu-item"><div class="tri"></div><img src="images/menu/file.png" alt="">Существенные темы доклада</a>' +
    '<a href="http://corptransparency.ru/rate/" class="menu-item" target="_blank"><div class="tri"></div><img src="images/menu/chemodan.png" alt="">Итоговый рейтинг</a>' +
    '<a href="/subs" class="menu-item"><div class="tri"></div><img src="images/menu/apply.png" alt="">Subratings and subrankings</a>' +
    '<a href="/apply" class="menu-item"><div class="tri"></div><img src="images/menu/file.png" alt="">Annex</a>' +
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