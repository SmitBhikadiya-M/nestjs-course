import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ContactInfo } from './db/contact-info.entity';
import { Employee } from './db/employee.entity';
import { Meeting } from './db/meetings.entity';
import { Task } from './db/task.entity';

@Injectable()
export class AppService {

  constructor(
    @InjectRepository(Employee) private employeeRepo: Repository<Employee>,
    @InjectRepository(Meeting) private meetingRepo: Repository<Meeting>,
    @InjectRepository(ContactInfo) private contactRepo: Repository<ContactInfo>,
    @InjectRepository(Task) private taskRepo: Repository<Task>,
  ){}

  async seed(){
    
    // Employee1
    const ceo = this.employeeRepo.create( { name: 'Mr. CEO' } );
    await this.employeeRepo.save(ceo);

    // Employee1 Contact Information
    const ceoContactInfo = this.contactRepo.create( { email: 'email@email.com', employee: ceo } );
    await this.contactRepo.save(ceoContactInfo);

    // Employee2
    const manager = this.employeeRepo.create( { name: 'Mr. Manger1', manager: ceo } );
    await this.employeeRepo.save(manager);

    // Employee2 tasks list
    const task1 = this.taskRepo.create({name: 'Hire People'});
    await this.taskRepo.save(task1)
    const task2 = this.taskRepo.create({name: 'Present to CEO'});
    await this.taskRepo.save(task2)
    manager.tasks = [task1, task2]
    await this.employeeRepo.save(manager);

    // Create Meeting For Employees
    const meeting1 = this.meetingRepo.create({zoomUrl: 'meeting.com'});
    meeting1.attendees = [ceo, manager]
    await this.meetingRepo.save(meeting1);

    // if manager wants to join by himself
    // manager.meetings = [meeting1]
    // await this.employeeRepo.save(manager);

  }

  async getEmployeeById(id:number){
    //return await this.employeeRepo.findOne({ where: {id} ,relations: ['manager', 'directReports', 'tasks', 'contactInfo', 'meetings'] })
    return this.employeeRepo.createQueryBuilder('employee')
      .leftJoinAndSelect('employee.manager', 'manager')
      .leftJoinAndSelect('employee.directReports', 'directReports')
      .leftJoinAndSelect('employee.meetings', 'meetings')
      .leftJoinAndSelect('employee.tasks', 'tasks')
      .where('employee.id = :employeeId', {employeeId: id})
      .getOne();
  }

  async deleteEmployeee(id:number){
    return await this.employeeRepo.delete(id);
  }

  getHello(): string {
    return 'Hello World!';
  }
}
