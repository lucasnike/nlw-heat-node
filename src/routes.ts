import { Router } from 'express'
import { config, parse } from 'dotenv'
import { AuthenticateUserController } from './controller/AuthenticateUserController'
import { CreateMessageController } from './controller/CreateMessageController'
import { ensureAuthenticated } from './services/middlewares/ensureAuthenticated'

const routes = Router()

routes.get('/github', (request, response) => {

  const clientId = config().parsed
  response.redirect(`http://github.com/login/oauth/authorize?client_id=${clientId.GITHUB_CLIENT_ID}`)
})

routes.get('/signin/callback', (request, response) => {
  const { code } = request.query

  return response.json(code)

})

routes.get('/working', (requent, response) => {
  response.json({
    status: 'Everything working fine'
  })
})

routes.post('/authenticate', new AuthenticateUserController().handle)

routes.post('/messages', ensureAuthenticated, new CreateMessageController().handle)

export { routes }