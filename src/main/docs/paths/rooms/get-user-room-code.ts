import { badRequestError, notFoundError, unauthorizedError, internalServerError } from "@/main/docs/components";
import { authorizationHeaderSchema } from "@/main/docs/schemas";

export const getUserRoomCode = {
	tags: [ "Sala" ],
	summary: "Faz o retorno do código da sala do usuário",
	parameters: [
		authorizationHeaderSchema,
	],
	
	responses: {
		200: {
			description: "Sucesso no retorno do código da sala do usuário",
			schema: {
				type: "string"
			}
		},

		400: badRequestError,

		401: unauthorizedError,

		404: notFoundError,

		500: internalServerError
	}
};