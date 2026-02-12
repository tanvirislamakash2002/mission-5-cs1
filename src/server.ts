import app from "./app";
import { prisma } from "./lib/prisma";


const PORT = process.env.PORT;

async function server() {

    try {
        await prisma.$disconnect()

        app.listen(PORT, () => {
            console.log(`m5cs1 server is running on port ${PORT}`);
        })
    } catch (error) {
        console.error(error)
        await prisma.$disconnect()
        process.exit(1)
    }


}

server();