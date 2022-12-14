import { toolkit } from "./toolkit";

export const {
	UnauthorizedError,
	ForbiddenError,
	MissingParamError,
	InvalidParamError,
	EmailInvalidError,
	PasswordInvalidError,
	NotFoundError
} = toolkit.error;