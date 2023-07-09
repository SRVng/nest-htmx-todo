import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    TodoModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../ui'),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
