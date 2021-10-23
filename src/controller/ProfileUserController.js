"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileUserController = void 0;
const ProfileUserService_1 = require("../services/ProfileUserService");
class ProfileUserController {
    async handle(request, response) {
        try {
            const service = new ProfileUserService_1.ProfileUserService();
            const result = await service.execute(request.user_id);
            response.json(result);
        }
        catch (error) {
            response.json({
                message: error.message
            });
        }
    }
}
exports.ProfileUserController = ProfileUserController;
