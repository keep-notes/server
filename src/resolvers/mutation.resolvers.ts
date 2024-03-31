import { MutationResolvers } from '@/generated/graphql';
import NoteService from '@/service/note.service';
import UserService from '@/service/user.service';

const userService = new UserService();
const noteService = new NoteService();

export const mutationResolvers: MutationResolvers = {
    async register(_, args) {
        return userService.createUser(args.user);
    },
    async login(_, args) {
        return userService.login(args.credentials);
    },
    async addNote(_, args) {
        return noteService.addNote(args.note);
    },
    async editNote(_, args) {
        return noteService.editNote(args.noteId, args.edit);
    },
    async deleteNote(_, args) {
        return noteService.deleteNote(args.noteId);
    },
};
