import { Module } from '@nestjs/common';
import { DeveloperController } from './developer.controller';
import { DeveloperService } from './developer.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [DeveloperController],
  providers: [DeveloperService],
  imports: [PrismaModule],
})
export class DeveloperModule {}
