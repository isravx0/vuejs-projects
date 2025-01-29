const app = Vue.createApp({
    data() {
        return {
            showBooks: true,
            books: [
                { title: 'Name of the Wind', author: 'Patrick Rothfuss'},
                { title: 'The Final Empire', author: 'Brandon Sanderson'},
                { title: 'The Hero of Ages', author: 'Brandon Sanderson'}
            ]
        }

    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
            },
        
        },
})

app.mount('#app')