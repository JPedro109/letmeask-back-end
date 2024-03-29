import { AuthenticationProtocol, UnauthorizedError } from "@/layers/use-cases";
import { HttpProtocol, HttpRequest, HttpResponse, noBody, unauthorized } from "@/layers/presentation";

export class AuthUserMiddleware implements HttpProtocol {

	constructor(private readonly jsonWebToken: AuthenticationProtocol) { }

	async http(request: HttpRequest): Promise<HttpResponse> {
		const { authorization } = request.headers;

		if (!authorization) return unauthorized(new UnauthorizedError("Você não está logado"));
    
		const [bearer, token] = authorization.split(" ");

		if(bearer !== "Bearer") return unauthorized(new UnauthorizedError("Código inválido"));
    
		const decode = this.jsonWebToken.verifyJsonWebToken(token);

		if(decode instanceof Error) return unauthorized(decode);

		request.userId = decode.id as string;

		return noBody();
	}
}