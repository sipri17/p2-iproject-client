import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import MangaDetail from '../views/MangaDetail.vue'
import FindManga from '../views/FindManga.vue'
import WantToRead from '../views/WantToRead.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component : Login
    },
    {
      path: '/register',
      name: 'register',
      component : Register
    },
    {
      path: '/findManga',
      name: 'findManga',
      component : FindManga
    },
    {
      path: '/wantToRead',
      name: 'wantToRead',
      component : WantToRead
    },
    {
      path: '/mangas/:id',
      name: 'mangaDetail',
      component : MangaDetail
    }
  ]
})

router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.access_token
  if ((to.name == 'login' || to.name == 'register') && loggedIn) {
    next({ name: 'Home' })
  }
  else if(to.name == 'wantToRead' && !loggedIn){
    next({name : 'login'})
  }
  else {next()}
})

export default router
