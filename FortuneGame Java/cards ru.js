const cards = [
    // Хорошие карты (40)
    {
        icon: 'fas fa-heart',
        title: 'Любовь',
        message: 'В вашей жизни появится глубокая и значимая связь. Будьте открыты новым возможностям.',
        color: 'bg-pink-500',
        type: 'good'
    },
    {
        icon: 'fas fa-briefcase',
        title: 'Карьера',
        message: 'Ваш профессиональный путь совпадет с истинным предназначением. Ожидайте признания и продвижения.',
        color: 'bg-blue-500',
        type: 'good'
    },
    {
        icon: 'fas fa-money-bill-wave',
        title: 'Богатство',
        message: 'Финансовое изобилие направляется к вам. Будьте готовы принять его и распорядиться мудро.',
        color: 'bg-green-500',
        type: 'good'
    },
    {
        icon: 'fas fa-graduation-cap',
        title: 'Мудрость',
        message: 'Вы обретете глубокое понимание, которое будет направлять ваши решения на годы вперед.',
        color: 'bg-purple-500',
        type: 'good'
    },
    {
        icon: 'fas fa-users',
        title: 'Дружба',
        message: 'В вашу жизнь войдет родственная душа, принося радость, поддержку и взаимный рост.',
        color: 'bg-indigo-500',
        type: 'good'
    },
    {
        icon: 'fas fa-home',
        title: 'Дом',
        message: 'Ваше жилое пространство станет оазисом покоя и позитивной энергии.',
        color: 'bg-yellow-500',
        type: 'good'
    },
    {
        icon: 'fas fa-plane',
        title: 'Путешествие',
        message: 'Увлекательное путешествие расширит ваши горизонты и познакомит с новыми культурами.',
        color: 'bg-teal-500',
        type: 'good'
    },
    {
        icon: 'fas fa-lightbulb',
        title: 'Вдохновение',
        message: 'Вас ждут творческие озарения. Ваши идеи расцветут и найдут отклик.',
        color: 'bg-orange-500',
        type: 'good'
    },
    {
        icon: 'fas fa-shield-alt',
        title: 'Защита',
        message: 'Высшие силы оберегают вас. Двигайтесь вперед с уверенностью и смелостью.',
        color: 'bg-amber-500',
        type: 'good'
    },
    {
        icon: 'fas fa-balance-scale',
        title: 'Баланс',
        message: 'Гармония восстановится во всех сферах вашей жизни. Придут мир и стабильность.',
        color: 'bg-gray-500',
        type: 'good'
    },
    {
        icon: 'fas fa-star',
        title: 'Успех',
        message: 'Ваша преданность будет вознаграждена сверх ожиданий. Отпразднуйте свои достижения.',
        color: 'bg-cyan-500',
        type: 'good'
    },
    {
        icon: 'fas fa-seedling',
        title: 'Рост',
        message: 'Личная трансформация ускоряется. Примите перемены и доверьтесь процессу.',
        color: 'bg-lime-500',
        type: 'good'
    },
    {
        icon: 'fas fa-gem',
        title: 'Сокровище',
        message: 'Вы обнаружите что-то ценное - материальное или духовное - что было скрыто от глаз.',
        color: 'bg-rose-500',
        type: 'good'
    },
    {
        icon: 'fas fa-music',
        title: 'Гармония',
        message: 'Ваша жизнь обретет идеальный ритм. Все будет течь в прекрасной синхронности.',
        color: 'bg-violet-500',
        type: 'good'
    },
    {
        icon: 'fas fa-book',
        title: 'Знание',
        message: 'Откроется важная информация, которая даст ответы на давние вопросы.',
        color: 'bg-sky-500',
        type: 'good'
    },
    {
        icon: 'fas fa-child',
        title: 'Невинность',
        message: 'Вы вновь откроете для себя простые радости жизни через детское восприятие.',
        color: 'bg-fuchsia-500',
        type: 'good'
    },
    {
        icon: 'fas fa-utensils',
        title: 'Питание',
        message: 'Ваше тело и душа получат именно то, что нужно для процветания и здоровья.',
        color: 'bg-emerald-500',
        type: 'good'
    },
    {
        icon: 'fas fa-paw',
        title: 'Животное-проводник',
        message: 'Дух животного проявит себя, предлагая вам мудрость и защиту.',
        color: 'bg-amber-500',
        type: 'good'
    },
    {
        icon: 'fas fa-tree',
        title: 'Корни',
        message: 'Вы свяжетесь со своим наследием значимым образом, обретая силу предков.',
        color: 'bg-green-700',
        type: 'good'
    },
    {
        icon: 'fas fa-cloud-sun',
        title: 'Ясность',
        message: 'Туман рассеется, открывая четкие пути в казавшихся запутанными ситуациях.',
        color: 'bg-blue-300',
        type: 'good'
    },
    {
        icon: 'fas fa-hands-helping',
        title: 'Поддержка',
        message: 'Неожиданная помощь придет именно тогда, когда она больше всего нужна. Примите ее с благодарностью.',
        color: 'bg-teal-400',
        type: 'good'
    },
    {
        icon: 'fas fa-infinity',
        title: 'Бесконечные возможности',
        message: 'Ограничения исчезнут, открывая безграничные возможности для роста и радости.',
        color: 'bg-purple-400',
        type: 'good'
    },
    {
        icon: 'fas fa-laugh',
        title: 'Радость',
        message: 'Смех и легкость вернутся в вашу жизнь, естественным образом поднимая настроение.',
        color: 'bg-yellow-400',
        type: 'good'
    },
    {
        icon: 'fas fa-magic',
        title: 'Магия',
        message: 'Произойдут чудесные совпадения, напоминая о прекрасных тайнах жизни.',
        color: 'bg-indigo-400',
        type: 'good'
    },
    {
        icon: 'fas fa-medal',
        title: 'Достижение',
        message: 'Ваши усилия будут признаны и оценены по достоинству важными для вас людьми.',
        color: 'bg-amber-400',
        type: 'good'
    },
    {
        icon: 'fas fa-moon',
        title: 'Интуиция',
        message: 'Ваша внутренняя мудрость усилится. Доверяйте предчувствиям - они вас не подведут.',
        color: 'bg-blue-800',
        type: 'good'
    },
    {
        icon: 'fas fa-paint-brush',
        title: 'Творчество',
        message: 'Вас посетит художественное вдохновение. Выражайте себя свободно и без ограничений.',
        color: 'bg-red-400',
        type: 'good'
    },
    {
        icon: 'fas fa-peace',
        title: 'Покой',
        message: 'Внутреннее спокойствие окутает вас, принося передышку от суеты и тревог.',
        color: 'bg-white text-gray-800',
        type: 'good'
    },
    {
        icon: 'fas fa-question',
        title: 'Тайна',
        message: 'В вашу жизнь войдет увлекательная загадка, стимулируя любопытство и интеллект.',
        color: 'bg-gray-400',
        type: 'good'
    },
    {
        icon: 'fas fa-rainbow',
        title: 'Надежда',
        message: 'После трудностей придет обновление. Более светлые дни определенно ждут вас.',
        color: 'bg-gradient-to-r from-red-500 to-purple-500',
        type: 'good'
    },
    {
        icon: 'fas fa-rocket',
        title: 'Старт',
        message: 'Проект или идея, которые вы взращивали, великолепно взлетят. Готовьтесь к запуску!',
        color: 'bg-orange-600',
        type: 'good'
    },
    {
        icon: 'fas fa-seedling',
        title: 'Новые начала',
        message: 'В вашей жизни прорастает нечто прекрасное. Взращивайте это с терпением и заботой.',
        color: 'bg-green-300',
        type: 'good'
    },
    {
        icon: 'fas fa-smile',
        title: 'Счастье',
        message: 'Простые удовольствия принесут глубокое удовлетворение. Цените маленькие радости жизни.',
        color: 'bg-yellow-300',
        type: 'good'
    },
    {
        icon: 'fas fa-spa',
        title: 'Исцеление',
        message: 'Физические, эмоциональные или духовные раны прекрасно затянутся со временем.',
        color: 'bg-pink-300',
        type: 'good'
    },
    {
        icon: 'fas fa-star-and-crescent',
        title: 'Мистическое пробуждение',
        message: 'Ваши духовные чувства обостряются. Обращайте внимание на сны и знаки.',
        color: 'bg-indigo-800',
        type: 'good'
    },
    {
        icon: 'fas fa-theater-masks',
        title: 'Трансформация',
        message: 'Вы сбрасываете старые роли и вступаете в более подлинную версию себя.',
        color: 'bg-purple-300',
        type: 'good'
    },
    {
        icon: 'fas fa-umbrella-beach',
        title: 'Отдых',
        message: 'Приходит период заслуженного отдыха и восстановления. Наслаждайтесь каждым моментом.',
        color: 'bg-blue-200',
        type: 'good'
    },
    
    // Плохие карты (10)
    {
        icon: 'fas fa-skull',
        title: 'Завершение',
        message: 'Что-то в вашей жизни должно завершиться, чтобы освободить место для нового роста. Отпускайте с благодарностью.',
        color: 'bg-gray-800',
        type: 'bad'
    },
    {
        icon: 'fas fa-bolt',
        title: 'Конфликт',
        message: 'Возникнут напряжения, проверяя ваше терпение. Отвечайте мудростью, а не реакцией.',
        color: 'bg-yellow-600',
        type: 'bad'
    },
    {
        icon: 'fas fa-exclamation-triangle',
        title: 'Предупреждение',
        message: 'Будьте осторожны в решениях. Смотрите прежде чем прыгать, чтобы избежать ненужных трудностей.',
        color: 'bg-red-600',
        type: 'bad'
    },
    {
        icon: 'fas fa-hourglass-end',
        title: 'Задержка',
        message: 'Планы могут неожиданно застопориться. Используйте это время для подготовки, а не разочарования.',
        color: 'bg-amber-800',
        type: 'bad'
    },
    {
        icon: 'fas fa-mask',
        title: 'Обман',
        message: 'Не все имеют в виду ваши лучшие интересы. Будьте разборчивы в доверии.',
        color: 'bg-gray-700',
        type: 'bad'
    },
    {
        icon: 'fas fa-poop',
        title: 'Неудача',
        message: 'Наступает полоса невезения, но она быстро пройдет. Сохраняйте чувство юмора.',
        color: 'bg-brown-500',
        type: 'bad'
    },
    {
        icon: 'fas fa-sad-tear',
        title: 'Печаль',
        message: 'Вас может накрыть период меланхолии. Позвольте себе чувствовать, затем отпустите.',
        color: 'bg-blue-600',
        type: 'bad'
    },
    {
        icon: 'fas fa-thermometer-empty',
        title: 'Истощение',
        message: 'Ваши энергетические запасы на исходе. Сделайте отдых и заботу о себе приоритетом.',
        color: 'bg-blue-700',
        type: 'bad'
    },
    {
        icon: 'fas fa-traffic-cone',
        title: 'Препятствие',
        message: 'Появятся неожиданные барьеры. Будьте гибкими и изобретательными в поиске решений.',
        color: 'bg-orange-700',
        type: 'bad'
    },
    
    // Нейтральные карты (2)
    {
        icon: 'fas fa-eye',
        title: 'Наблюдение',
        message: 'Сейчас время наблюдать и учиться, а не действовать. Терпеливо собирайте информацию.',
        color: 'bg-gray-300',
        type: 'neutral'
    },
    {
        icon: 'fas fa-pause',
        title: 'Ожидание',
        message: 'Сейчас неподходящее время для действий. Практикуйте терпение, пока развиваются обстоятельства.',
        color: 'bg-gray-200',
        type: 'neutral'
    }
];