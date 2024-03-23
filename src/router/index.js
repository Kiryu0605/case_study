import { createRouter, createWebHashHistory } from 'vue-router'
import TaskList from '@/views/TaskList.vue'
import Task from '@/views/Task.vue'

const routes = [
  {
    path: '/',
    name: 'tasklist',
    component: TaskList
  },
  {
    path: '/task',
    name: 'task',
    component: Task
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
