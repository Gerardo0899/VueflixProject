import { createRouter, createWebHistory } from 'vue-router'
import ExploreView from '@/views/ExploreView.vue'
import MyShowsView from '@/views/MyShowsView.vue'
import CalendarView from '@/views/CalendarView.vue'
import NotificationsView from '@/views/NotificationsView.vue'

const routes = [
  { path: '/', component: ExploreView },
  { path: '/my-shows', component: MyShowsView },
  { path: '/calendar', component: CalendarView },
  { path: '/notifications', component: NotificationsView },
]

export default createRouter({
  history: createWebHistory(),
  routes
})
