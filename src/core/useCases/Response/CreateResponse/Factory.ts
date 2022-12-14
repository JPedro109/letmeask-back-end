import { questionRepository } from "../../../../data/repositories/QuestionRepository";
import { responseRepository } from "../../../../data/repositories/ResponseRepository";
import { roomRepository } from "../../../../data/repositories/RoomRepository";
import { Rules as CreateResponse } from "./Rules";

export const createResponse = new CreateResponse(responseRepository, questionRepository, roomRepository);