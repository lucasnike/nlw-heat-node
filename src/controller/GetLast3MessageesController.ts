import { GetLast3MessagesService } from '../services/GetLast3MessagesService'
import { Request, Response } from 'express'

class GetLast3MessagesController {
  async handle(request: Request, response: Response) {
    const service = new GetLast3MessagesService()

    try {
      const messages = await service.execute()

      response.json(messages)
    } catch (error) {
      response.json({
        error: error.message
      })
    }
  }
}

export { GetLast3MessagesController };