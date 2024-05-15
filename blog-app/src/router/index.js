import Vue from 'vue';
import Router from 'vue-router';
import PostList from '../components/PostList.vue';
import PostDetail from '../components/PostDetail.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'PostList',
            component: PostList
        },
        {
            path: '/post/:id',
            name: 'PostDetail',
            component: PostDetail,
            props: true
        }
    ]
});
