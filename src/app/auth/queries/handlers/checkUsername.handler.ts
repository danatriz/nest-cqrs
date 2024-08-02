import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { CheckUsernameQuery } from "../impl/checkUsername.handler";
import { AuthRepository } from "../../repositories/auth.repository";

@QueryHandler(CheckUsernameQuery)
export class CheckUsernameHandler implements IQueryHandler<CheckUsernameQuery> {
    constructor(
        private readonly repository: AuthRepository
    ) {}

    async execute(query: CheckUsernameQuery) {
        return this.repository.checkUsername(query.username);
    }
}