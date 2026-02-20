import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';
import { PrismaClient } from '@prisma/client';
import * as dotenv from 'dotenv';
import { url } from 'inspector';
dotenv.config();
@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    const adapter = new PrismaMariaDb({
      host: "localhost",
      user: "jueab",
      password: "faridlearner",
      database: "jueab",
      connectionLimit:5
    })
    super({adapter})
  }
  async onModuleInit() {
    return await this.$connect();
  }
  async onModuleDestroy() {
    return await this.$disconnect();
  }
}


/**
 * for showing error now we used addapter prisma-addapter mariadb
 * npm install @prisma/adapter-mariadb
 * Instantiate Prisma Client using the driver adapter
 */