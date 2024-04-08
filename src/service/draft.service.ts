import { UpdateDraftInput } from '@/generated/graphql';
import DraftModel from '@/model/draft.model';

export default class DraftService {
    async updateDraft(input: UpdateDraftInput) {
        return DraftModel.findOneAndUpdate({ userId: input.userId }, input, {
            new: true,
            upsert: true,
        }).exec();
    }
}
