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

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.post('/api/v1/users/login', [SessionController, 'login'])
router.get('/api/v1/users', [UsersController, 'index']).use(middleware.auth()) // TODO: borrar middleware.auth() no esta en la prueba
router.get('/api/v1/users/:id', [UsersController, 'show']).use(middleware.auth())
router.post('/api/v1/users', [UsersController, 'store']).use(middleware.auth())
router.put('/api/v1/users/:id', [UsersController, 'update']).use(middleware.auth())
router.delete('/api/v1/users/:id', [UsersController, 'destroy']).use(middleware.auth())
