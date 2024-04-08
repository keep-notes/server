import DraftModel from '@/model/draft.model';

export default class DraftRepository {
    async userDraft(userId: string) {
        return DraftModel.findOne({ userId }).exec();
    }
}
