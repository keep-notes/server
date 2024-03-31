import NoteModel from '@/model/note.model';

export default class NoteRepository {
    async userNotes(userId: string) {
        return NoteModel.find({ userId }).exec();
    }
}
