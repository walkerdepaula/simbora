export default {

    getUser(state) {
        console.log('user getter:', state)
        return state.user;
    }
}