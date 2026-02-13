import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./prisma";
import { admin, twoFactor } from "better-auth/plugins"
import { Resend } from 'resend';
import { adminRole, userRole } from "./permission";

const resend = new Resend('re_4ZAcJ7SU_A7niP49oVm3PQ365kSnGCmfb');

export const auth = betterAuth({
    appName: "lab log",
    baseURL: process.env.BETTER_AUTH_URL,
    database: prismaAdapter(prisma, {
        provider: 'postgresql'
    }),

    trustedOrigins: [process.env.FRONTEND_URL!],

    emailAndPassword: {
        enabled: true,
        minPasswordLength: 3
    },

    socialProviders: {
        github: {
            clientId: process.env.GITHUB_CLIENT_ID as string,
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
            redirectURI: `${process.env.FRONTEND_URL}/api/auth/callback/github`
        }
    },
    plugins: [
        admin({
            adminRoles: ["admin", "user"],
            defaultRole: "user",
            roles: {
                admin: adminRole,
                user: userRole
            }
        }),
        twoFactor({
            otpOptions: {
                period: 1,
                async sendOTP({ user, otp }, ctx) {
                    console.log(user, otp);

                    await resend.emails.send({
                        from: 'LabLog <onboarding@resend.dev>',
                        to: user.email,
                        subject: 'Two factor authentication',
                        html: `<p>your otp is <b>${otp}</b>!</p>`,
                    });
                },
            },
        })
    ]
})