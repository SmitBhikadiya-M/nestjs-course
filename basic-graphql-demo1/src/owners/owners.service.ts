import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOwnerInput } from './dto/create-owner.input';
import { UpdateOwnerInput } from './dto/update-owner.input';
import { Owner } from './entities/owner.entity';

@Injectable()
export class OwnersService {

  constructor(@InjectRepository(Owner) private ownerRepo:Repository<Owner>){}

  async create(createOwnerInput: CreateOwnerInput) : Promise<Owner>{
    const owner = await this.ownerRepo.create(createOwnerInput);
    await this.ownerRepo.save(owner);
    return owner;
  }

  async findAll() : Promise<Owner[]>{
    return await this.ownerRepo.find();
  }

  async findOne(id: number) : Promise<Owner> {
    return await this.ownerRepo.findOneOrFail({
      where:{
        id
      }
    });
  }

  async update(id: number, updateOwnerInput: UpdateOwnerInput) : Promise<Owner> {
    const owner = await this.findOne(id);
    owner.name = updateOwnerInput.name;
    return await this.ownerRepo.save(owner);
  }

  async remove(id: number) : Promise<Owner> {
    const user = await this.findOne(id);
    await this.ownerRepo.remove(user);
    return user;
  }
}
