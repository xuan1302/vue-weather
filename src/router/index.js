import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
const Dashboard = () => import("../views/Dashboard.vue");
// import TodoList from "../views/TodoList.vue";
import SubmitForm from "../views/SubmitForm";
// lazy-loaded
// const Profile = () => import("./components/Profile.vue")

const routes = [
  {
    path: "/",
    name: "home",
    component: Dashboard,
  },
  // {
  //   path: "/todo-list",
  //   name: "todoList",
  //   component: TodoList,
  // },
  // {
  //   path: "/submit-form",
  //   name: "SubmitForm",
  //   component: SubmitForm,
  // },
  // {
  //   path: "/detail-post/:id",
  //   name: "DetailPost",
  //   component: SubmitForm,
  // },
  // {
  //   path: "/test",
  //   name: "Test",
  //   redirect: SubmitForm,
  // },
  // {
  //   path: "/pathMatch(.*)*",
  //   name: "404",
  //   component: 404,
  // },
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
