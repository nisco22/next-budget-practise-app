import { currentUser } from "@clerk/nextjs/server";
import { db } from "./db";

export const checkUser = async () => {
    const user = await currentUser();
    // console.log(user);

    if (!user) {
        return null;
    }
    const existingUser = await db.user.findUnique({
        where: {
            clerkuserid: user.id,
        },
    });

    if (!existingUser) {
        const newUser = await db.user.create({
            data: {
                clerkuserid: user.id,
                name: `${user.firstName} - ${user.lastName}`,
                email: user.emailAddresses[0].emailAddress,
                imageurl: user.imageUrl,
            },
        });
        return newUser;
    }
    return existingUser;
}