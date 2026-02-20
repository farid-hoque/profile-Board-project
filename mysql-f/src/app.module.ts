import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DeveloperModule } from './developer/developer.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [DeveloperModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
