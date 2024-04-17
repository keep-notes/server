import { AddNoteInput, EditNoteInput, Note } from '@/generated/graphql';
import NoteModel from '@/model/note.model';
import { GraphQLError } from 'graphql/error';

class NoteService {
    async addNote(input: AddNoteInput) {
        const note = new NoteModel(input);
        await note.save();
        return note;
    }

    async editNote(noteId: string, input: Partial<Note> | EditNoteInput) {
        const note = await NoteModel.findByIdAndUpdate(noteId, input, {
            new: true
        }).exec();
        if (!note) throw new GraphQLError('Note not found');
        return note;
    }
}

export const noteService = new NoteService();
