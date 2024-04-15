import { Draft, Note, User } from '@/generated/graphql';
import UserModel from '@/model/user.model';

class UserRepository {
    async findByNote(note: Note): Promise<User> {
        const user = await UserModel.findById(note.userId).exec();
        return user!;
    }

    async findByDraft(draft: Draft): Promise<User> {
        const user = await UserModel.findById(draft.userId).exec();
        return user!;
    }
}

export const userRepository = new UserRepository();
