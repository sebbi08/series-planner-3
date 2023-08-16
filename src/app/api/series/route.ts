import { NextApiRequest } from "next";
import { getToken } from "next-auth/jwt";
import { connectToDB } from "../../../../utils/database";
import Series from "../../../../models/series";


export const GET = async (req: NextApiRequest) => {

    const token = await getToken({ req })
    if (!token) {
        return new Response("Not Authorized", { status: 401 });
    }
    await connectToDB();
    return new Response(JSON.stringify(await Series.find({ user: token?.name })))
}