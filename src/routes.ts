import { Router } from 'express'
import { config, parse } from 'dotenv'
import { AuthenticateUserController } from './controller/AuthenticateUserController'

const routes = Router()

routes.get('/github', (request, response) => {

  const clientId = config().parsed
  response.redirect(`http://github.com/login/oauth/authorize?client_id=${clientId.GITHUB_CLIENT_ID}`)
})


routes.get('/signin/callback', (request, response) => {
  const { code } = request.query

  return response.json(code)
  
})

routes.post('/authenticate', new AuthenticateUserController().handle)

export { routes }