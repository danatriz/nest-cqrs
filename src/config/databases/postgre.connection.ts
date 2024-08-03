import { Injectable, OnModuleInit, Logger } from '@nestjs/common';
import { Client } from 'pg';
// import { drizzle } from 'drizzle-orm/node-postgres';
// import * as schema from '../../databases/postgresql/schema';

@Injectable()
export class PostgresqlConnection implements OnModuleInit {
  public client: Client;
  public drizzleClient: any;
  private readonly logger = new Logger(PostgresqlConnection.name);

  constructor() {
    this.client = new Client({
      host: 'localhost',
      port: 5432,
      user: '123',
      password: '123',
      database: 'test',
    });
  }

  async onModuleInit() {
    try {
      await this.client.connect();
      // this.drizzleClient = drizzle(this.client, { schema });
      this.logger.debug('Connected to PostgreSQL');
    } catch (error) {
      this.logger.error('Failed connect to PostgreSQL');
    }
  }
}
