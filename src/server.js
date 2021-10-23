"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const PORT = 4000;
app_1.serverHttp.listen(process.env.PORT | PORT, () => console.log(`🚀 Server is running on port ${process.env.PORT}`));
