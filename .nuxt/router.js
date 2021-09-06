import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0c348d6c = () => interopDefault(import('..\\pages\\Admins.vue' /* webpackChunkName: "pages/Admins" */))
const _dc975330 = () => interopDefault(import('..\\pages\\Centers.vue' /* webpackChunkName: "pages/Centers" */))
const _e0c939e2 = () => interopDefault(import('..\\pages\\Cities.vue' /* webpackChunkName: "pages/Cities" */))
const _cff4ea44 = () => interopDefault(import('..\\pages\\Countries.vue' /* webpackChunkName: "pages/Countries" */))
const _55d71613 = () => interopDefault(import('..\\pages\\Login.vue' /* webpackChunkName: "pages/Login" */))
const _d9364402 = () => interopDefault(import('..\\pages\\Registration.vue' /* webpackChunkName: "pages/Registration" */))
const _5d382932 = () => interopDefault(import('..\\pages\\Roles.vue' /* webpackChunkName: "pages/Roles" */))
const _74d9fa5e = () => interopDefault(import('..\\pages\\Students.vue' /* webpackChunkName: "pages/Students" */))
const _7145a117 = () => interopDefault(import('..\\pages\\Teachers.vue' /* webpackChunkName: "pages/Teachers" */))
const _14bd531c = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/Admins",
    component: _0c348d6c,
    name: "Admins"
  }, {
    path: "/Centers",
    component: _dc975330,
    name: "Centers"
  }, {
    path: "/Cities",
    component: _e0c939e2,
    name: "Cities"
  }, {
    path: "/Countries",
    component: _cff4ea44,
    name: "Countries"
  }, {
    path: "/Login",
    component: _55d71613,
    name: "Login"
  }, {
    path: "/Registration",
    component: _d9364402,
    name: "Registration"
  }, {
    path: "/Roles",
    component: _5d382932,
    name: "Roles"
  }, {
    path: "/Students",
    component: _74d9fa5e,
    name: "Students"
  }, {
    path: "/Teachers",
    component: _7145a117,
    name: "Teachers"
  }, {
    path: "/",
    component: _14bd531c,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
