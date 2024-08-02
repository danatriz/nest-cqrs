import { Injectable } from "@nestjs/common";
import { PostgresqlConnection } from "src/config/databases/postgre.connection";

@Injectable()
export class AuthRepository {
    constructor(
        private readonly db: PostgresqlConnection
    ){}
    async checkUsername(username: string) {
        const result = await this.db.client.query(
            'SELECT t.* FROM public."USER" t WHERE t."username" = $1 ORDER BY t."username" LIMIT 501',
            [username] 
          );
        console.log(result.rows);
        return result.rows;
    }
    
}