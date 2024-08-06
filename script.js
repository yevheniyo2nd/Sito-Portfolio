//mode
// Ждем, пока вся страница загрузится
document.addEventListener('DOMContentLoaded', () => {
    // Находим кнопку переключения темы по ID
    const btnMode = document.getElementById('btn_mode');

    // Добавляем обработчик события "click" для кнопки
    btnMode.addEventListener('click', () => {
        // Переключаем класс 'dark-mode' у элемента body
        document.body.classList.toggle('dark-mode');
    });
});


//lang
// Ждем, пока вся страница загрузится
document.addEventListener('DOMContentLoaded', () => {
    // Находим элементы управления языком и меню навигации
    const languageMenu = document.querySelector('.language-menu');
    const navMenu = document.getElementById('nav-menu');
    const btnLeng = document.getElementById('btn_leng');
    const btnLengText = btnLeng.querySelector('.btn_leng_text');

    // Объект с переводами для каждого языка
    const translations = {
        it: {
            logo: 'Portfolio',
            about: 'Chi sono',
            skills: 'Capacità',
            projects: 'Progetti',
            hobbies: 'Hobby',

            aboutHeading: "Chi sono",
            saluto: 'Ciao, sono',
            nome: 'Pelykh Yevheniy',
            proffessione: 'web/game svilupattore',
            p: 'Sono nato in Ucraina, ma vivo in Italia fin dall`infanzia. Fin da piccola mi piaceva programmare e finalmente, dopo 8 anni di lavoro in un ufficio come artista tecnico, ho lasciato il mio lavoro e ho deciso di iniziare seriamente a imparare per intraprendere questa professione. Ho seguito corsi per sviluppatore web e web designer e ho realizzato alcuni progetti per dimostrare ciò che ho imparato. Ho anche creato il mio gioco per dispositivi mobili in GML e ora sto lavorando a un nuovo progetto. In futuro ho intenzione di imparare i framework e di trovare lavoro come sviluppatore junior.',
            downloadCv: 'Scarica Cv',

            skillsHeading: "Capacità",

            projectsHeading: "Progetti",
            project1Name: "Gioco Carta sasso forbice",
            project2Name: "Calcolatrice",
            project3Name: "Gioco Puzzle colori",
            project4Name: "Gioco Battaglia pokemon",
            project5Name: "JSON + Lista Todo",
            project6Name: "Sito Palestra'",
            project7Name: "Sito Negozio di mattoncini",
            project8Name: "Gioco per mobile 'Space Story'",
            project9Name: "Sito Portfolio",

            hobbiesHeading: "Hobby",
            programming: "Programmazione",
            reading: "Leggere",
            travel: "Viaggiare",
            sport: "Sport",
            boxe: "Boxe",
            moto: "Moto",
        },
        eng: {
            logo: 'Portfile',
            about: 'About',
            skills: 'Skills',
            projects: 'Projects',
            hobbies: 'Hobbies',

            aboutHeading: "About",
            saluto: 'Hi, im',
            nome: 'Pelykh Yevheniy',
            proffessione: 'web/game developer',
            p: 'I`m originally from Ukraine, but I`ve been living in Italy since my childhood. From a small age I liked programming, and finally after 8 years of working in an office as a technical artist I quit my job and decided to seriously start learning to get into this profession. I took courses for web developer and web designer and made and made some projects to demonstrate what I learned. I also created my own game for mobile devices in GML and am currently working on a new project. In the future I plan to learn frameworks and get a job as a Junior developer.',
            downloadCv: 'Download Cv',

            skillsHeading: "Skills",

            projectsHeading: "Projects",
            project1Name: "Game Paper rock scissors",
            project2Name: "Calculator",
            project3Name: "Gioco Puzzle colors",
            project4Name: "Gioco Pokemon battle",
            project5Name: "JSON + Todo list",
            project6Name: "Gym Website",
            project7Name: "Brick store Website",
            project8Name: "Mobile game 'Space Story'",
            project9Name: "Portfolio Website",

            hobbiesHeading: "Hobbies",
            programming: "Programming",
            reading: "Reading",
            travel: "Travel",
            sport: "Sport",
            boxe: "Boxe",
            moto: "Moto",
        },
        ru: {
            logo: 'Портфолио',
            about: 'Обо мне',
            skills: 'Навыки',
            projects: 'Проекты',
            hobbies: 'Хобби',

            aboutHeading: "Обо мне",
            saluto: 'Привет, я',
            nome: 'Пелых Евгений',
            proffessione: 'Веб/гейм разработчик',
            p: 'Я родом из Украины, но с детства живу в Италии. С малого возраста мне нравилось программирование, и наконец после 8 лет работы в офисе как технический художник я уволился и решил серьезно начать обучение, чтоб попасть в  эту профессию. Я прошел курсы на веб разработчика и веб дизайнера и сделал и сделал несколько проектов, чтобы продемонстрировать чему я научился. Также я создал свою игру под мобильные устройства на языке GML и сейчас работаю над новым проектом. В дальнейшем планирую изучать фреймворки и получить работу как Junior разработчик.',
            downloadCv: 'Скачать Cv',

            skillsHeading: "Навыки",

            projectsHeading: "Проекты",
            project1Name: "Игра Камень ножници бумага",
            project2Name: "Калькулятор",
            project3Name: "Игра Пазл Цветов",
            project4Name: "Игра Битва покемонов",
            project5Name: "JSON + список дел",
            project6Name: "Сайт Спортзала",
            project7Name: "Сайт Магазин конструктора",
            project8Name: "Игра на телефон 'Space Story'",
            project9Name: "Сайт Портфолио",

            hobbiesHeading: "Хобби",
            programming: "Програмирование",
            reading: "Читать",
            travel: "Путешествия",
            sport: "Спорт",
            boxe: "Бокс",
            moto: "Мото",
        },
    };

    // Объект с изображениями для каждого языка
    const languageImages = {
        it: './img/it.png',
        eng: './img/eng.png',
        ru: './img/ru.png',
    };

    // Добавляем обработчик события "click" для меню языков
    languageMenu.addEventListener('click', (event) => {
        // Определяем, на какой язык нажал пользователь
        const lang = event.target.closest('.language-option')?.dataset.lang;

        if (lang) {
            // Обновляем текст и изображения на странице
            updateTextContent(lang);
        }
    });

    // Функция для обновления текста на странице в зависимости от выбранного языка
    function updateTextContent(lang) {
        const links = navMenu.querySelectorAll('a');
        links.forEach(link => {
            const key = link.getAttribute('data-key');
            link.textContent = translations[lang][key];
        });

        // Обновляем заголовки разделов
        document.querySelector('.logo').textContent = translations[lang].logo;
        document.querySelector('.about h2').textContent = translations[lang].aboutHeading;
        document.querySelector('.saluto').textContent = translations[lang].saluto;
        document.querySelector('.nome').textContent = translations[lang].nome;
        document.querySelector('.proffessione').textContent = translations[lang].proffessione;
        document.querySelector('.about__profile p').textContent = translations[lang].p;
        document.querySelector('.download-cv').textContent = translations[lang].downloadCv;

        document.querySelector('.skills h2').textContent = translations[lang].skillsHeading;

        document.querySelector('.projects h2').textContent = translations[lang].projectsHeading;
        document.querySelector('.project1Name').textContent = translations[lang].project1Name;
        document.querySelector('.project2Name').textContent = translations[lang].project2Name;
        document.querySelector('.project3Name').textContent = translations[lang].project3Name;
        document.querySelector('.project4Name').textContent = translations[lang].project4Name;
        document.querySelector('.project5Name').textContent = translations[lang].project5Name;
        document.querySelector('.project6Name').textContent = translations[lang].project6Name;
        document.querySelector('.project7Name').textContent = translations[lang].project7Name;
        document.querySelector('.project8Name').textContent = translations[lang].project8Name;
        document.querySelector('.project9Name').textContent = translations[lang].project9Name;

        document.querySelector('.hobbies h2').textContent = translations[lang].hobbiesHeading;
        document.querySelector('.programming').textContent = translations[lang].programming;
        document.querySelector('.reading').textContent = translations[lang].reading;
        document.querySelector('.travel').textContent = translations[lang].travel;
        document.querySelector('.sport').textContent = translations[lang].sport;
        document.querySelector('.boxe').textContent = translations[lang].boxe;
        document.querySelector('.moto').textContent = translations[lang].moto;

        // Обновляем текст и изображение кнопки выбора языка
        const currentLangOption = languageMenu.querySelector(`.language-option[data-lang="${lang}"]`);
        if (currentLangOption) {
            btnLengText.textContent = currentLangOption.textContent.trim();
            btnLeng.style.backgroundImage = `url('${languageImages[lang]}')`;
        }
    }

    // Устанавливаем начальный язык и изображение кнопки
    btnLeng.style.backgroundImage = `url('${languageImages.it}')`;
});


//projects
// Wait for the entire page to load
document.addEventListener('DOMContentLoaded', function() {
    // Find all project cards and the details image element
    const projectCards = document.querySelectorAll('.projects__card img');
    const detailsImage = document.querySelector('.projects__details img');

    // Array with project details
    const projectDetails = [
        { imgSrc: './img/progects/calculator.gif'  },
        { imgSrc: './img/progects/sasso.gif' },
        { imgSrc: './img/progects/colors.gif'  },
        { imgSrc: './img/progects/api.gif'  },
        { imgSrc: './img/progects/todo.gif'  },
        { imgSrc: './img/progects/sito.png'  },
        { imgSrc: './img/progects/space.gif'  },
        { imgSrc: './img/progects/gym.png'  },
        { imgSrc: './img/progects/brick.png'  },
    ];

    // Add a click event listener to each project card
    projectCards.forEach((card, index) => {
        card.addEventListener('click', function() {
            console.log('Project card clicked:', card.id);
            const details = projectDetails[index];
            if (details) {
                detailsImage.src = details.imgSrc;
            } else {
                console.log('No details found for index:', index);
            }
        });
    });
});

