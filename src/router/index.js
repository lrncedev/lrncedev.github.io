import { createWebHistory, createRouter } from "vue-router";

/* Views directory */
import Home from '@/views/HomePage.vue';
import Project from '@/views/ProjectsView.vue';
import Achievements from '@/views/AchievementsView.vue';
import Contact from '@/views/ContactList.vue';

const routes = [
  { 
    path: '/', 
    component: Home 
  },
  { 
    path: '/projects', 
    component: Project 
  },
  { 
    path: '/achievements', 
    component: Achievements 
  },
  { 
    path: '/contact', 
    component: Contact 
  },
]


const router = createRouter( {
  history: createWebHistory(),
  routes
}) 

export default router;