try{new Morris.Bar({
    element:"nums",
    data:[
        {x:"Описание стратегии",y: 48,y1:52 },
        {x:"Описание положения в отрасли/на рынке (конкурентная среда, доля рынка, прогнозные данные и др.)",y:46 ,y1:50 },
        {x:"Описание макроэкономического контекста",y:44 ,y1: 43},
        {x:"Описание стратегических целей, имеющих отношение к теме устойчивого развития",y:41 ,y1:45 },
        {x:"Качественное и количественное описание вклада",y: 39,y1: 45},
        {x:"Описание стратегических целей (или их части) в количественном выражении",y:36 ,y1:41 },
        {x:"Описание других контекстов деятельности (политический, экологический, социальный, правовой и др.)",y: 36,y1:35 },
        {x:"Описание конкурентных преимуществ компании",y:36 ,y1:35 },
        {x:"Описание ресурсов, необходимых для реализации стратегии",y: 23,y1:22 },
        {x:"Качественное описание вклада",y:8 ,y1:4 },
    ],
    xkey: 'x',
    ykeys: ['y','y1'],
    labels: ['2017','2016'],
    resize:true,
    axes:false

});
}catch(e){} try{new Morris.Bar({
    element:"nums-business",
    data:[
        {x:"Графическое (схематическое) изображение бизнес-модели",y:43 ,y1:45 },
        {x:"Перечень основных продуктов и услуг, которые производит и предоставляет организация в рамках реализации бизнес-модели",y:38 ,y1:44 },
        {x:"Текстовое описание бизнес-модели",y:35 ,y1:36 },
        {x:"Описание взаимосвязи между стратегическими целями и бизнес-моделью",y: 30,y1:29 },
        {x:"Перечень капиталов",y:27 ,y1: 26},
        {x:"Описание капиталов",y: 23,y1:24 },
        {x:"Описание влияния на цепочку создания стоимости внешней среды и сопутствующих рисков и возможностей",y:23 ,y1:16 },
        {x:"Описание прироста/убыли/трансформации капиталов на конец отчетного период",y: 19,y1: 19},
        {x:"Разделение капиталов на собственные (внутренние) и находящиеся в совместном пользовании с другими участниками (внешние) ",y:9 ,y1:9 },
        {x:"Разделение прироста/убыли/трансформации капиталов на внутренние (для организации) и на внешние (для ее заинтересованных сторон) на конец отчетного периода",y:6 ,y1:8 },
    ],
    xkey: 'x',
    ykeys: ['y','y1'],
    labels: ['2017','2016'],
    resize:true,
    axes:false
});
}catch(e){} try{new Morris.Bar({
    element:"nums-korp",
    data:[
        {x:"Описание планируемых работ по совершенствованию системы корпоративного управления",y:32 ,y1:26 },
        {x:"Описание работ по совершенствованию системы корпоративного управления в отчетном периоде",y:35 ,y1:37 },
        {x:"Описание работы комитетов в отчетном периоде",y:40 ,y1: 42},
        {x:"Описание основных принципов корпоративного управления",y: 41,y1: 43},
        {x:"Ссылки на российские и международные стандарты корпоративного управления",y:43 ,y1:48 },
        {x:"Указание основных внутренних документов, регулирующих деятельность системы корпоративного управления",y:45 ,y1:49 },
        {x:"Сведения о наличии, функциях и основных результатах работы службы внутреннего аудита и контроля",y:45 ,y1:47 },
        {x:"Перечень и состав комитетов",y: 45,y1: 49},
        {x:"Описание системы корпоративного управления (структура и взаимодействие органов управления)",y: 48,y1:50 },
    ],
    xkey: 'x',
    ykeys: ['y','y1'],
    labels: ['2017','2016'],
    resize:true,
    axes:false
});
}catch(e){} try{new Morris.Bar({
    element:"rewards",
    data:[
        {x:"Описание политики вознаграждения (подход/принципы)",y:47 ,y1:45 },
        {x:"Раскрытие информации о структуре вознаграждения генерального директора/президента/председателя правления",y:42 ,y1:34 },
        {x:"Раскрытие информации о размере вознаграждения членов Совета директоров",y:40 ,y1:43 },
        {x:"Раскрытие информации о структуре вознаграждения членов Совета директоров",y:39 ,y1:43 },
        {x:"Раскрытие информации о связи вознаграждения и результатов деятельности/КПЭ генерального директора/президента/председателя правления",y:38 ,y1:38 },
        {x:"Раскрытие информации о связи вознаграждения и результатов деятельности/КПЭ членов Совета директоров",y:26 ,y1:23 },
    ],
    xkey: 'x',
    ykeys: ['y','y1'],
    labels: ['2017','2016'],
    resize:true,
    axes:false
});
}catch(e){} try{new Morris.Bar({
    element:"divident",
    data:[
        {x:"Описание дивидендной политики (подход)",y: 40},
        {x:"Раскрытие информации о размере дивидендов на акцию",y: 40},
        {x:"Дивидендная история (динамика дивидендных выплат как минимум за последние 3 года)",y: 40},
    ],
    xkey: 'x',
    ykeys: ['y','y1'],
    labels: ['Количество'],
    resize:true,
    axes:false
});
}catch(e){} try{new Morris.Bar({
    element:"otchet",
    data:[
        {x:"Наличие краткой информации об основных показателях результативности за отчетный период",y: 48,y1: 50},
        {x:"Показатели даны в динамике как минимум за последние 3 года",y:42 ,y1:40 },
        {x:"Наличие краткой информации о ключевых корпоративных событиях за отчетный период",y:39 ,y1: 47},
        {x:"Наличие комментариев, поясняющих динамику изменений",y: 35,y1: 29},
        {x:"Текстовое описание цепочки поставок ",y:31 ,y1:28 },
        {x:"Дано целевое и фактическое значение показателей за отчетный период",y:24 ,y1: 18},
        {x:"Дано целевое значение показателей на следующий отчетный период",y:20 ,y1:13 },
        {x:"Графическое (схематическое) изображение цепочки поставок",y: 19,y1:18 },

    ],
    xkey: 'x',
    ykeys: ['y','y1'],
    labels: ['2017','2016'],
    resize:true,
    axes:false
});
}catch(e){} try{new Morris.Bar({
    element:"korp-soc",
    data:[
        {x:"Раскрытие информации о стратегических приоритетах в области устойчивого развития",y:44 ,y1:49 },
        {x:"Перечисление сторонних экономических, экологических и социальных хартий, этических принципов или других инициатив, к которым организация присоединилась ",y:41 ,y1:47 },
        {x:"Включение в ключевые показатели деятельности компании показателей, имеющих отношение к устойчивому развитию",y: 39,y1: 41},
        {x:"Основные задачи/планы реализации стратегии/политики  в области устойчивого развития на следующий отчетный год",y:33 ,y1:41 },
        {x:"Раскрытие информации о ключевых проблемах, имеющих отношение к устойчивому развитию",y: 30,y1:40 },
        {x:"Закрепление ответственности за деятельность в области УР (за членом/членами совета директоров/комитетами при совете директоров, исполнительным директором, топ-менеджментом)",y:20 ,y1:23 },
        {x:"Указание связи КПЭ высшего органа управления и топ-менеджмента с целями в области УР",y:19 ,y1: 23},
    ],
    xkey: 'x',
    ykeys: ['y','y1'],
    labels: ['2017','2016'],
    resize:true,
    axes:false
});
}catch(e){} try{new Morris.Bar({
    element:"leads",
    data:[
        {x:"Наличие карты заинтересованных сторон",y:19 ,y1:24 },
        {x:"Описание механизмов взаимодействия с заинтересованными сторонами",y: 39,y1:48 },
        {x:"Описание основных работ и мероприятий по взаимодействию со стейкхолдерами в отчетном году",y: 38,y1:49 },
        {x:"Указание на документы, регламентирующие взаимодействие с заинтересованными сторонами",y:25 ,y1:26 },
        {x:"Описание вовлеченности заинтересованных сторон в процесс корпоративного управления (наличие Общественного Совета или иных органов управления с участием заинтересованных сторон)",y:13 ,y1:10 },
    ],
    xkey: 'x',
    ykeys: ['y','y1'],
    labels: ['2017','2016'],
    resize:true,
    axes:false
});
}catch(e){} try{new Morris.Bar({
    element:"korrup",
    data:[
        {x:"Наличие у компании публичной позиции в области противодействия коррупции",y:48 },
        {x:"Описание принципов, правил, процедур, направленных на предотвращение коррупции во всех сферах деятельности компании",y: 45},
        {x:"Закрепление ответственности за реализацию антикоррупционной политики компании",y:36 },
        {x:"Результаты реализации антикоррупционных программ",y:36 },
        {x:"Наличие специальных конфиденциальных каналов, по которым сотрудник (или сторонний человек) может заявить о факте коррупции",y: 43},
    ],
    xkey: 'x',
    ykeys: ['y'],
    labels: ['Количество'],
    resize:true,
    axes:false
});
}catch(e){} try{new Morris.Bar({
    element:"zakup",
    data:[
        {x:"Наличие информации о закупочной деятельности заказчика на официальном сайте ",y:48 ,y1:48 },
        {x:"Раскрытие информации о результатах закупочной деятельности за отчетный период ",y:46 ,y1:45 },
        {x:"Наличие положения/регламента/стандарта закупочной деятельности на официальном сайте организации",y: 43,y1:44 },
        {x:"Наличие системы внутреннего контроля за закупками",y: 38,y1:44 },
        {x:"Раскрытие информации о планах закупочной деятельности ",y: 35,y1:41 },
    ],
    xkey: 'x',
    ykeys: ['y','y1'],
    labels: ['2017','2016'],
    resize:true,
    axes:false
});
}catch(e){} try{new Morris.Bar({
    element:"strateg",
    data:[
        {x:"Описание системы управления рисками",y:113 ,y1:104 },
        {x:"Описание стратегических целей (или их части) в количественном выражении",y: 48,y1: 50},
        {x:"Наличие оценки рисков в части указания вероятности наступления рискового события",y:25 ,y1:48 },
        {x:"Графическое (схематическое) изображение бизнес-модели",y:21 ,y1:23 },
        {x:"Текстовое описание бизнес-модели",y:20 ,y1:20 },
    ],
    xkey: 'x',
    ykeys: ['y','y1'],
    labels: ['2017','2016'],
    resize:true,
    axes:false
});
}catch(e){} try{new Morris.Bar({
    element:"korp-uprav",
    data:[
        {x:"Наличие таблицы с информацией о соблюдении/несоблюдении принципов и рекомендаций Кодекса корпоративного управления, одобренного ЦБ РФ",y:97 ,y1:89 },
        {x:"Раскрытие информации о структуре вознаграждения членов Совета директоров",y:88 ,y1:90 },
        {x:"Раскрытие информации о структуре вознаграждения генерального директора/президента/председателя правления",y: 82,y1:54 },
        {x:"Дивидендная история (динамика дивидендных выплат как минимум за последние 3 года)",y:74 ,y1:66 },
        {x:"Информация о персональной посещаемости заседаний Совета директоров (аналогичного органа управления) его членами",y:64 ,y1: 61},
        {x:"Описание работ по совершенствованию системы корпоративного управления в отчетном периоде",y:43 ,y1:39 },
        {x:"Описание планируемых работ по совершенствованию системы корпоративного управления",y: 37,y1:27 },
    ],
    xkey: 'x',
    ykeys: ['y','y1'],
    labels: ['2017','2016'],
    resize:true,
    axes:false
});
}catch(e){} try{new Morris.Bar({
    element:"nums-iii",
    data:[
        {x:"Показатели даны в динамике как минимум за последние 3 года - операционные показатели",y: 59,y1:53 },
        {x:"Наличие комментариев, поясняющих динамику изменений - операционные показатели",y: 52,y1:47 },
        {x:"Показатели даны в динамике как минимум за последние 3 года - финансовые показатели",y:84 ,y1: 73},
        {x:"Наличие комментариев, поясняющих динамику изменений - финансовые показатели",y:77 ,y1:55 },
    ],
    xkey: 'x',
    ykeys: ['y','y1'],
    labels: ['2017','2016'],
    resize:true,
    axes:false
});
}catch(e){} try{new Morris.Bar({
    element:"razvitie",
    data:[
        {x:"Наличие информации о результатах деятельности в области устойчивого развития в отчетном периоде",y: 135,y1:129 },
        {x:"Раскрытие информации о стратегических приоритетах в области устойчивого развития",y:76 ,y1:76 },
        {x:"Раскрытие информации о ключевых проблемах, имеющих отношение к устойчивому развитию",y:32 ,y1:47 },
        {x:"Закрепление ответственности за деятельность в области УР (за членом/членами совета директоров/комитетами при совете директоров, исполнительным директором, топ-менеджментом)",y: 8,y1:5 },
        {x:"Описание основных работ и мероприятий по взаимодействию со стейкхолдерами в отчетном году",y: 45,y1:39 },
    ],
    xkey: 'x',
    ykeys: ['y','y1'],
    labels: ['2017','2016'],
    resize:true,
    axes:false
});
}catch(e){} try{new Morris.Bar({
    element:"iii-korrup",
    data:[
        {x:"Описание принципов, правил, процедур, направленных на предотвращение коррупции во всех сферах деятельности компании",y:51 ,y1:53 },
        {x:"Наличие информации о закупочной деятельности заказчика на официальном сайте ",y:101 ,y1: 94},
    ],
    xkey: 'x',
    ykeys: ['y','y1'],
    labels: ['2017','2016'],
    resize:true,
    axes:false
});}catch (error){}
/*}catch(e){} try{new Morris.Bar({
    element:"",
    data:[
        {x:"",y: ,y1: },
    ],
    xkey: 'x',
    ykeys: ['y','y1'],
    labels: ['2017','2016'],
    resize:true,
});*/