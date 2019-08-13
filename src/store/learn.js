export default {
    namespaced: true,
    state: {
        name: 'javaScript',
        price: 10
    },
    getters: {
        coursePrice (state) {
            return '￥' + state.price
        }
    },
    mutations: {
        changePrice (state, {price}) {
            state.price = price;
        }
    },
    actions: {}
}