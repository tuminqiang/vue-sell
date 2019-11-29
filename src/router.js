import VueRouter from 'vue-router';
import Goods from './components/middle/goods';
import Comments from './components/middle/comments';
import Store from './components/middle/store';

var router = new VueRouter({
  routes: [
    {path: '/', redirect: '/goods'},
    {path: '/goods', component: Goods},
    {path: '/comments', component: Comments},
    {path: '/store', component: Store}
  ]
});
// 将router导出去
export default router;
