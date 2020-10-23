import Vue from 'vue'
import VueGtm from 'vue-gtm'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      // описание meta-тегов для каждой страницы
      title: 'ip65.by — Новогодняя иллюминация',
      metaTags: [
        {
          name: 'description',
          content:
            'Продукция испытана в аккредитованных лабораториях и соответствует техническим регламентам Таможенного cоюза.'
        },
        {
          name: 'keywords',
          content: '3D фигуры, 2D фигуры'
        },
        {
          property: 'og:title',
          content: 'ip65.by'
        },
        {
          property: 'og:description',
          content:
            'Приятные бонусы для наших клиентов. Доставка в любую точку страны'
        },
        {
          property: 'og:type',
          content: 'text/javascript'
        },
        {
          property: 'og:image',
          content: '/img/logo.png'
        }
      ]
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/catalog',
    name: 'Catalog',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Catalog.vue'),
    meta: {
      // описание meta-тегов для каждой страницы
      title: 'ip65.by — Наша продукция',
      metaTags: [
        {
          name: 'description',
          content:
            'Мы следим за качеством импортной продукции от начала производства до момента погрузки и отправки.'
        },
        {
          name: 'keywords',
          content: '3D фигуры, 2D фигуры'
        },
        {
          property: 'og:title',
          content: 'ip65.by'
        },
        {
          property: 'og:description',
          content:
            'Приятные бонусы для наших клиентов. Доставка в любую точку страны'
        },
        {
          property: 'og:type',
          content: 'text/javascript'
        },
        {
          property: 'og:image',
          content: '/img/logo.png'
        }
      ]
    }
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Contacts.vue'),
    meta: {
      // описание meta-тегов для каждой страницы
      title: 'ip65.by — Контакты',
      metaTags: [
        {
          name: 'description',
          content: 'Напишите нам'
        },
        {
          name: 'keywords',
          content: ''
        },
        {
          property: 'og:title',
          content: 'ip65.by'
        },
        {
          property: 'og:description',
          content: 'Напишите нам'
        },
        {
          property: 'og:type',
          content: 'text/javascript'
        },
        {
          property: 'og:image',
          content: '/img/logo.png'
        }
      ]
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

Vue.use(VueGtm, {
  id: 'GTM-KBQNXSQ', // Your GTM single container ID or array of container ids ['GTM-xxxxxx', 'GTM-yyyyyy']
  defer: false, // defaults to false. Script can be set to `defer` to increase page-load-time at the cost of less accurate results (in case visitor leaves before script is loaded, which is unlikely but possible)
  enabled: true, // defaults to true. Plugin can be disabled by setting this to false for Ex: enabled: !!GDPR_Cookie (optional)
  debug: true, // Whether or not display console logs debugs (optional)
  loadScript: true, // Whether or not to load the GTM Script (Helpful if you are including GTM manually, but need the dataLayer functionality in your components) (optional)
  vueRouter: router, // Pass the router instance to automatically sync with router (optional)
  ignoredViews: ['homepage'], // Don't trigger events for specified router names (case insensitive) (optional)
  trackOnNextTick: false // Whether or not call trackView in Vue.nextTick
})

// функция которая встроит meta-теги в нужные места сайта
// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // eg. if we have /some/deep/nested/route and /some, /deep, and /nested have titles, nested's will be chosen.
  const nearestWithTitle = to.matched
    .slice()
    .reverse()
    .find(r => r.meta && r.meta.title)

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched
    .slice()
    .reverse()
    .find(r => r.meta && r.meta.metaTags)
  const previousNearestWithMeta = from.matched
    .slice()
    .reverse()
    .find(r => r.meta && r.meta.metaTags)

  // If a route with a title was found, set the document (page) title to that value.
  if (nearestWithTitle) {
    document.title = nearestWithTitle.meta.title
  } else {
    document.title = previousNearestWithMeta.meta.title
  }

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(
    el => el.parentNode.removeChild(el)
  )

  // Skip rendering meta tags if there are none.
  if (!nearestWithMeta) return next()

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags
    .map(tagDef => {
      const tag = document.createElement('meta')

      Object.keys(tagDef).forEach(key => {
        tag.setAttribute(key, tagDef[key])
      })

      // We use this to track which meta tags we create, so we don't interfere with other ones.
      tag.setAttribute('data-vue-router-controlled', '')

      return tag
    })
    // Add the meta tags to the document head.
    .forEach(tag => document.head.appendChild(tag))

  next()
})

export default router
