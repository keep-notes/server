import { Note } from '@/generated/graphql';
import NoteModel from '@/note/note.model';
import UserModel from '@/user/user.model';

export default class NoteRepository {
  async userNotes(userId: string) {
    return NoteModel.find({ userId }).exec();
  }

  async user(note: Note) {
    return UserModel.findById(note.userId).exec();
  }
}
