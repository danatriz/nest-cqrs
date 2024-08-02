import { IsDefined, IsString } from "class-validator";

export class UserCheckReq {
    @IsDefined({ message: 'Username is required' })
    @IsString({ message: 'Username must be a string' })
    Username: string;  
  }