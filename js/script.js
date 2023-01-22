console.log('HI, I am java and I am working fine');

const { createApp } = Vue;

createApp({
    data() {
        return {
            title: 'One Piece',
            picture: 'img/1p.png',
            colorStyle: 'red',
            textStyle: 'center', 
            imgStyle: 'box-pic',
            pic: 'photo'
        }
    },
    methods: {
        sottoTitolo: function () {
            return  'Red - Il film';
        },
        
    }
}).mount('#app');