// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    target: "server",
    app: {
        head: {
            link: [
                { rel: 'stylesheet', type: 'text/css', href: '/style.css' },
                { rel: 'stylesheet', type: 'text/css', href: '/layout.css' },
            ],
            script: [
            ]
        },
    },
    css: [
        'bootstrap-icons/font/bootstrap-icons.css'
    ],
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/i18n',
        '@nuxt/content'
    ],
    i18n: {
        locales: ['en', 'de'],
        defaultLocale: 'en',
        strategy: 'prefix_except_default',
        detectBrowserLanguage: {
            fallbackLocale: 'en',
            useCookie: false,
            redirectOn: 'root',  // recommended
        },
        vueI18n: {
            legacy: false,
            fallbackLocale: 'en',
            messages: {
                en: {
                    'navbar.home': 'Home',
                    'navbar.about': 'About',
                    'navbar.projects': 'Projects',
                    'navbar.technologies': 'Technologies',
                    'navbar.contact': 'Contact',
                    'index.section.home.text-1': 'Hey, i am',
                    'index.section.home.text-3': 'a',
                    'index.section.home.contact': 'Contact me',
                    'index.section.about.title': 'About me',
                    'index.section.about.subtitle': 'who i am',
                    'index.section.about.header': "Hi! I'm Max.",
                    'index.section.about.p-1': "As a Software Developer with 7 jears of experience I'm passionate about building scalable and maintainable systems. In my spare time you can find me at the piano, in the gym, watching netflix, eating or sleeping. :D",
                    'index.section.about.p-2': 'I started my career developing plugins for the <a class="link" href="https://timolia.de" target="_blank">Timolia Minecraft Network</a> in 2015. In 2017 i started a dual study at <a class="link" href="https://hof-university.de/">Hof University</a> and training at <a class="link" href="https://guettlerlogistik.de/">Güttler Logistik GmbH</a>. With the bachelors degree in my pocket at Spring 2022 i continued working at Güttler Logistik as a Full Stack Developer.',
                    'index.section.about.cv': "See my CV at",
                    'index.section.technologies.text-1': 'As a full stack developer i am interested in different technologies in the areas of frontend and backend development, as well as databases and devops.',
                    'index.section.technologies.text-2': 'The listed technologies are sorted by passion descending.',
                    'index.section.contact.notification.success.message': 'Message successfully sent!',
                    'index.section.contact.notification.error.message': 'Error sending message! Please use mail directly!',
                },
                de: {
                    'navbar.home': 'Startseite',
                    'navbar.about': 'Über',
                    'navbar.projects': 'Projekte',
                    'navbar.technologies': 'Technologien',
                    'navbar.contact': 'Kontakt',
                    'index.section.home.text-1': 'Hey, ich bin',
                    'index.section.home.text-3': 'ein',
                    'index.section.home.contact': 'Schreib mir',
                    'index.section.about.title': 'Über mich',
                    'index.section.about.subtitle': 'wer ich bin',
                    'index.section.about.header': 'Hi! Ich bin Max.',
                    'index.section.about.p-1': "Als Software Entwickler mit 7 Jahren Erfahrung brenne ich für skallierbare und wartbare Software Systeme. In meiner Freizeit findet man mich am Klavier, im Fitnessstudio, vor Netflix, am Essen oder schlafen. :D",
                    'index.section.about.p-2': 'Ich begann meine Kariere im Jahr 2015 mit der Entwicklung von Java Plugins auf dem <a class="link" href="https://timolia.de" target="_blank">Timolia Minecraft Network</a>. 2017 startete mein Duales Studium an der <a class="link" href="https://hof-university.de/">Hof University</a> und die Ausbildung bei der <a class="link" href="https://guettlerlogistik.de/">Güttler Logistik GmbH</a>. Mit dem abgeschlossenen Bachelor of Science startete ich im Frühjahr 2022 als Full Stack Developer bei der Güttler Logistik GmbH.',
                    'index.section.about.cv': 'Siehe Lebenslauf auf',
                    'index.section.technologies.text-1': 'Als Full Stack Developer interessiere ich mich für verschiedene Technologien im Fronted- und Backendbereich, sowie Datenbanken und DevOps.',
                    'index.section.technologies.text-2': 'Die aufgelisteten Technologien sind sortiert nach meiner aktuellen Begeisterung.',
                    'index.section.contact.notification.success.message': 'Nachricht erfolgreich versendet!',
                    'index.section.contact.notification.error.message': 'Fehler beim versenden der Nachricht. Bitte direkt eine E-Mail schreiben!',

                }
            }
        }
    },
})
