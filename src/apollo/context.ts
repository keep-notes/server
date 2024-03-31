import { IncomingMessage } from 'http';
import * as jwt from 'jsonwebtoken';

interface Args {
    req: IncomingMessage;
}

export default async function ({ req }: Args) {
    let user = null;
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];

    if (token) {
        jwt.verify(
            token,
            process.env.JWT_SECRET!,
            (_, decoded: any) => user = decoded?.user
        );
    }

    return { auth: user };
}
