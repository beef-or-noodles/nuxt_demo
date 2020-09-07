/**
 * Created by Administrator on 2020/8/27.
 */
import createPersistedState from 'vuex-persistedstate'

export default ({store}) => {
    createPersistedState({
        storage: localStorage,
    })(store)
}