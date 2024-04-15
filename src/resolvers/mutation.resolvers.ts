import { MutationResolvers } from '@/generated/graphql';
import { draftService } from '@/service/draft.service';
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
    async pinNote(_, args) {
        return noteService.updatePinStatus(args.noteId, true);
    },
    async unpinNote(_, args) {
        return noteService.updatePinStatus(args.noteId, false);
    },
    async editNote(_, args) {
        return noteService.editNote(args.noteId, args.edit);
    },
    async deleteNote(_, args) {
        return noteService.deleteNote(args.noteId);
    },
    async updateDraft(_, args) {
        return draftService.updateDraft(args.draft);
    },
};
