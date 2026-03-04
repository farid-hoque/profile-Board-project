import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DeveloperModule } from './developer/developer.module';
import { PrismaModule } from './prisma/prisma.module';
import { PostModule } from './post/post.module';

@Module({
  imports: [DeveloperModule, PrismaModule, PostModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
