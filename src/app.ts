import express from "express"
import cors from "cors"
import routes from "./routes"
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth";

const app = express()
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
}))

// better auth router
app.all("/api/auth/*splat", toNodeHandler(auth));

app.use(express.json())

async function createAdmin() {
    await auth.api.createUser({
        body: {
            name: "Tanvir",
            email: "tanvirislamakash2002@gmail.com",
            password: "123456",
            role: "admin"
        }
    })
}
// createAdmin()

app.use('/api/v1', routes)

export default app;