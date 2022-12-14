import { Question } from "../../models/Question";

export interface IQuestionRepository {
	store(id: string, userId: string, roomCode: string, question: string): Promise<Question>;
	getQuestion(id: string): Promise<Question>;
	getQuestions(roomCode: string): Promise<Question[]>;
	getUserQuestions(userId: string): Promise<Question[]>;
	destroy(questionId: string): Promise<void>;
}