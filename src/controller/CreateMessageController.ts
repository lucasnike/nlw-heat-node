import { Request, Response } from 'express'
import { CreateMessageService } from '../services/CreateMessageService'



class CreateMessageController {
  async handle(request: Request, response: Response) {

    try {
      const { message } = request.body
      const service = new CreateMessageService()
      const result = await service.execute(message, request.user_id)
      return response.json(result)
    } catch (error) {
      response.json({
        message: error.message
      })
    }


  }
}

export { CreateMessageController }