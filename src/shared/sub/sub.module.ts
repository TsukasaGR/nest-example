import { Module } from '@nestjs/common';
import { SubService } from './sub.service';

@Module({
  providers: [SubService],
  exports: [SubService],
})
export class SubModule {}
