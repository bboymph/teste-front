import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ListCharacters from '@/components/ListCharacters'

import 'semantic-ui-css/semantic.min.css';

// Your public key MARVEL f8115ab0021c8124fcfc3d79197cbeed

// Your private key MARVEL a3422b795b04653bbb006d6c911f24fc8ccb9ded

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children: [
        {
          // UserProfile will be rendered inside User's <router-view>
          // when /user/:id/profile is matched
          path: 'personagens',
          component: ListCharacters
        }
      ]
    }
  ]
})
