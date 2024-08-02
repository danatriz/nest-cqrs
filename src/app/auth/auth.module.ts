import { Module } from "@nestjs/common";
import { CqrsModule } from "@nestjs/cqrs";
import { AppController } from "./auth.controller";
import { CheckUsernameHandler } from "./queries/handlers/checkUsername.handler";
import { AuthRepository } from "./repositories/auth.repository";
import { PostgresqlConnection } from "src/config/databases/postgre.connection";

@Module({
    imports: [CqrsModule],
    providers: [
        AuthRepository,
        CheckUsernameHandler,
        PostgresqlConnection
    ],
    controllers: [AppController]
})
export class AuthModule {}