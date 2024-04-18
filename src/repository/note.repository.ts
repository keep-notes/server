import NoteModel from '@/model/note.model';

class NoteRepository {
    async userActiveNotes(userId: string) {
        return NoteModel.find({ userId, isArchived: false, isTrashed: false })
            .sort({ createdAt: -1 })
            .exec();
    }

    async userArchivedNotes(userId: string) {
        return NoteModel.find({ userId, isArchived: true, isTrashed: false })
            .sort({ createdAt: -1 })
            .exec();
    }

    async userTrashedNotes(userId: string) {
        return NoteModel.find({ userId, isTrashed: true })
            .sort({ createdAt: -1 })
            .exec();
    }

    async search(query: string) {
        return NoteModel.aggregate([
            {
                $search: {
                    text: {
                        query,
                        path: 'content',
                    }
                }
            }
        ]).exec();
    }
}

export const noteRepository = new NoteRepository();
