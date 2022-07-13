Vue.config.devtools = true;

const root = new Vue({
    el: '#root',
    data: {
        figures: [
            {
                url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
                title: 'Svezia',
                description: "La Svezia, ufficialmente chiamata Regno di Svezia, è uno Stato membro dell'Unione Europea, situato nella penisola scandinava.",
            },

            {
                url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
                title: 'Perù',
                description: "Il Perù, ufficialmente Repubblica del Perù, è uno Stato dell'America meridionale.",
            },

            {
                url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
                title: 'Cile',
                description: "Il Cile è uno Stato situato nell'estremo sudovest del continente americano. Il suo nome ufficiale è Repubblica del Cile con capitale Santiago del Cile.",
            },
            {
                url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
                title: 'Argentina',
                description: "L'Argentina, ufficialmente Repubblica Argentina, è una repubblica federale, situata nella parte meridionale del Sud America.",
            },
            {
                url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
                title: 'Colombia',
                description: "La Colombia, formalmente Repubblica di Colombia , è uno Stato della regione nord-occidentale dell'America Meridionale, la cui superficie è di 1 141 748 km².",
            },
        ],
        currentActiveIndex: 0,
        isAutoplay: true,
    },
    methods: {
        prevFigure() {
            this.currentActiveIndex--;
            if (this.currentActiveIndex < 0) this.currentActiveIndex = this.figures.length - 1;
        },
        nextFigure() {
            this.currentActiveIndex++;
            if (this.currentActiveIndex === this.figures.length) this.currentActiveIndex = 0;
        },
        thisFigure(index) {
            this.currentActiveIndex = index;
        },
        autoplay() {
            setInterval(() => {
                this.isAutoplay ? this.nextFigure() : clearInterval(autoplay);
            }, 3000);
        },
    },
    mounted() {
        this.autoplay();
    },
});
