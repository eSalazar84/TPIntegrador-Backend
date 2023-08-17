import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InventaryController } from './inventary/inventary.controller';
import { InventaryService } from './inventary/inventary.service';

@Module({
  imports: [],
  controllers: [AppController, InventaryController],
  providers: [AppService, InventaryService],
})
export class AppModule {}
