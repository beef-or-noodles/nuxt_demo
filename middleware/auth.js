/**
 * Created by Administrator on 2020/3/7.
 */
export default function ({route,store}) {
    console.log("执行中间件",store.state.user);
}