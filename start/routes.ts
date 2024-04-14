/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import UsersController from '#controllers/users_controller'
import SessionController from '#controllers/session_controller'
import { middleware } from './kernel.js'

router.post('/api/v1/users/login', [SessionController, 'login'])

router
  .group(() => {
    router.get('/users', [UsersController, 'index'])
    router.get('/users/:id', [UsersController, 'show']).where('id', router.matchers.number())
    router.post('/users', [UsersController, 'store'])
    router.put('/users/:id', [UsersController, 'update']).where('id', router.matchers.number())
    router.delete('/users/:id', [UsersController, 'destroy']).where('id', router.matchers.number())
  })
  .prefix('/api/v1')
  .use(middleware.auth())
