import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddTodo from '../views/AddTodo.vue'
import EditTodo from '../views/EditTodo.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/add',
    name: 'AddTodo',
    component: AddTodo
  },
  {
    path: '/todos/:id',
    name: 'EditTodo',
    component: EditTodo,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
