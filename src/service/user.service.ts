import { LoginInput, RegisterInput, User } from '@/generated/graphql';
import UserModel from '@/model/user.model';
import * as argon from 'argon2';
import { GraphQLError } from 'graphql/error';
import * as jwt from 'jsonwebtoken';

export default class UserService {
    async createUser(input: RegisterInput) {
        const hashed = await argon.hash(input.password);

        const user = new UserModel({ ...input, password: hashed });
        await user.save();
        const token = this.signToken({ user });

        return { user, token };
    }

    async login(input: LoginInput) {
        const user = await UserModel.findOne({ email: input.email }).exec();

        if (user && await argon.verify(user.password, input.password)) {
            return { user, token: this.signToken({ user }) };
        }

        throw new GraphQLError('Credentials are incorrect');
    }

    private signToken(payload: { user: User }) {
        const secret = process.env.JWT_SECRET!;
        return jwt.sign(payload, secret, { expiresIn: '1h' });
    }
}
