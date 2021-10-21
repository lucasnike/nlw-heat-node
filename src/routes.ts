import { Router } from 'express'
import { config, parse } from 'dotenv'
import { AuthenticateUserController } from './controller/AuthenticateUserController'
import { CreateMessageController } from './controller/CreateMessageController'
import { GetLast3MessagesController } from './controller/GetLast3MessageesController'
import { ensureAuthenticated } from './middlewares/ensureAuthenticated'
import { ProfileUserController } from './controller/ProfileUserController'

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

routes.get('/messages/last3', new GetLast3MessagesController().handle)

routes.get('/profile', ensureAuthenticated, new ProfileUserController().handle)

export { routes }