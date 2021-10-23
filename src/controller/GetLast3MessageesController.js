"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetLast3MessagesController = void 0;
const GetLast3MessagesService_1 = require("../services/GetLast3MessagesService");
class GetLast3MessagesController {
    async handle(request, response) {
        const service = new GetLast3MessagesService_1.GetLast3MessagesService();
        try {
            const messages = await service.execute();
            response.json(messages);
        }
        catch (error) {
            response.json({
                error: error.message
            });
        }
    }
}
exports.GetLast3MessagesController = GetLast3MessagesController;
