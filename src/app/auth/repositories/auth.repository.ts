import { Injectable } from "@nestjs/common";
import { TarantoolConfig } from "src/config/databases/tarantool.connection";
import { UserCheckReq } from "../dtos/user.req";

@Injectable()
export class AuthRepository {
    private readonly tarantool: TarantoolConfig;

    constructor() {
        this.tarantool = TarantoolConfig.instance();
    }

    async checkUsername(req: UserCheckReq) {
        // Pastikan req.username adalah string dan formatkan dengan benar
        const luaScript = `
            return box.space.users.index.username:select('ruben.moreno22@salman-alfarisi.com', {iterator='EQ'})
        `;

        try {
            console.log('Executing Lua script:', luaScript);
            const result = await this.tarantool.eval(luaScript);
            console.log('Result from eval:', result);

            // Periksa jika hasilnya didefinisikan dan merupakan array
            if (Array.isArray(result) && result.length > 0) {
                console.log('Current user is:', result[0]);
                return result[0]; // Atau proses sesuai kebutuhan
            } else {
                console.warn('No results or result is not an array.');
                return null; // Atau tangani sesuai kebutuhan
            }
        } catch (error) {
            console.error('Error during eval:', error);
            throw error;
        }
    }
}
