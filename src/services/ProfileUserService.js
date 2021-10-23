"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileUserService = void 0;
const index_1 = __importDefault(require("../prisma/index"));
class ProfileUserService {
    async execute(user_id) {
        const user = await index_1.default.user.findFirst({
            where: {
                id: user_id
            }
        });
        return user;
    }
}
exports.ProfileUserService = ProfileUserService;
