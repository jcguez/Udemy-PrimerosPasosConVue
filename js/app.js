const app = new Vue({
    el: '#app',
    data: {
        message: 'Hello vue',
        sum: 3 + 6,
        value: 5,
        isVisible: false,
        people: ['Juan', 'Pedro', 'Benito', 'José', 'Arturo'],
        content_html: '<h1>Hola Mundo!</h1>',
        src: 'https://images.latamautos.com/thumbs/w/990x540xC/ptx_migration_mexico/2272019/2604380/o_o/pt_2604380_29115788.jpg',
        alt: 'Alternative text for nissan truck'
    },
    computed: {
        // a computed getter
        reversedMessage: function () {
            // 'this' points to the VM instance
            return this.message.split('').reverse().join('')
        }
    },
    methods: {
        // 
        calculateSum(value1, value2){
            return value1 + value2
        }
    }
})