import { AddNoteInput, EditNoteInput } from '@/generated/graphql';
import NoteModel from '@/model/note.model';
import { GraphQLError } from 'graphql/error';

class NoteService {
    async addNote(input: AddNoteInput) {
        const note = new NoteModel(input);
        await note.save();
        return note;
    }

    async updatePinStatus(noteId: string, isPinned: boolean) {
        const note = await NoteModel.findByIdAndUpdate(
            noteId,
            { isPinned },
            { new: true }
        ).exec();
        if (!note) throw new GraphQLError('Note not found');
        return note;
    }

    async editNote(noteId: string, input: EditNoteInput) {
        const note = await NoteModel.findByIdAndUpdate(noteId, input, {
            new: true
        }).exec();
        if (!note) throw new GraphQLError('Note not found');
        return note;
    }

    async deleteNote(noteId: string) {
        const note = await NoteModel.findByIdAndDelete(noteId).exec();
        if (!note) throw new GraphQLError('Nothing to delete');
        return NoteModel.find({ userId: note.userId }).exec();
    }
}

export const noteService = new NoteService();
