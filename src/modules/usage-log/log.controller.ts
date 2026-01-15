import { RequestHandler } from "express";
import { prisma } from "../../lib/prisma";

const createUsageLog: RequestHandler = async (req, res) => {
    try {
        const payload = req.body;
        const log = await prisma.usageLog.create({ data: payload })

        res.send({ message: "log added", data: log })
    } catch (error) {
        res.send({ message: 'log creation error', error })
    }
}

const getUsageLogs: RequestHandler = async (req, res) => {
    try {
        const log = await prisma.usageLog.findMany()

        res.send({ message: "logs", data: log })
    } catch (error) {
        res.send({ message: 'log creation error', error })
    }
}