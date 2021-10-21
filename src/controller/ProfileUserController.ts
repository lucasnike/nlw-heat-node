import { Request, Response } from 'express'
import { ProfileUserService } from '../services/ProfileUserService'


class ProfileUserController {
  async handle(request: Request, response: Response) {

    try {

      const service = new ProfileUserService()
      const result = await service.execute(request.user_id)

      response.json(result)

    } catch (error) {
      response.json({
        message: error.message
      })
    }

  }
}

export { ProfileUserController }