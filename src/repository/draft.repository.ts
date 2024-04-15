import DraftModel from '@/model/draft.model';

class DraftRepository {
    async userDraft(userId: string) {
        return DraftModel.findOne({ userId }).exec();
    }
}

export const draftRepository = new DraftRepository();
