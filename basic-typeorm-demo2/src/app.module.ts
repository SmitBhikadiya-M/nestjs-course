import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactInfo } from './db/contact-info.entity';
import { Employee } from './db/employee.entity';
import { Meeting } from './db/meetings.entity';
import { Task } from './db/task.entity';

@Module({
  imports: [ TypeOrmModule.forRoot({
    type: 'sqlite',
    database: 'db',
    entities: ['dist/src/**/*.entity.js'],
    synchronize: true,
    logging: true
  }), TypeOrmModule.forFeature([Employee, ContactInfo, Meeting, Task]) ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
