import NoteModel from '@/model/note.model';

class NoteRepository {
    async userNotes(userId: string) {
        const notes = await Promise.all([
            this.userPinnedNotes(userId),
            this.userUnpinnedNotes(userId),
        ]);
        return notes.flat();
    }

    private async userPinnedNotes(userId: string) {
        return NoteModel.find({ userId, isPinned: true })
            .sort({ createdAt: -1 })
            .exec();
    }

    private async userUnpinnedNotes(userId: string) {
        return NoteModel.find({ userId, isPinned: false })
            .sort({ createdAt: -1 })
            .exec();
    }
}

export const noteRepository = new NoteRepository();
