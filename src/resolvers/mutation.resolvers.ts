import { MutationResolvers } from '@/generated/graphql';
import { noteService } from '@/service/note.service';
import { userService } from '@/service/user.service';

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
        return noteService.editNote(args.noteId, { isTrashed: true });
    },
    async restoreNote(_, args) {
        return noteService.editNote(args.noteId, { isTrashed: false });
    },
};
