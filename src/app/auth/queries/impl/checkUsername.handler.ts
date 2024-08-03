import { UserCheckReq } from "../../dtos/user.req";

export class CheckUsernameQuery {
    constructor(public readonly req: UserCheckReq) {}
}