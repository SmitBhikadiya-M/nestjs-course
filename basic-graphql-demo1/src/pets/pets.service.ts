import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Owner } from 'src/owners/entities/owner.entity';
import { OwnersService } from 'src/owners/owners.service';
import { Repository } from 'typeorm';
import { CreatePet } from './dto/create-pet.dto';
import { Pet } from './pet.entity';

@Injectable()
export class PetsService {

    constructor(@InjectRepository(Pet) private petRepo: Repository<Pet>, private ownerService: OwnersService){}

    async create(pet: CreatePet): Promise<Pet>{
        const newpet = this.petRepo.create(pet);
        return this.petRepo.save(newpet);
    }

    async findAll(): Promise<Pet[]>{
        return this.petRepo.find();
    }

    async findOne(id: number): Promise<Pet>{
        return this.petRepo.findOneOrFail({where: {id:id}});
    }

    async getOwner(ownerId: number): Promise<Owner>{
        return this.ownerService.findOne(ownerId)
      }
}
