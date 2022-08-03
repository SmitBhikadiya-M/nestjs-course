import { Args, Int, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Owner } from 'src/owners/entities/owner.entity';
import { CreatePet } from './dto/create-pet.dto';
import { Pet } from './pet.entity';
import { PetsService } from './pets.service';

@Resolver(of => Pet)
export class PetsResolver {
    constructor(private petsService: PetsService){}

    @Query(returns => Pet)
    async getPet(@Args('id', {type: () => Int}) id: number): Promise<Pet>{
        return await this.petsService.findOne(id);
    }

    @Query(returns => [Pet])
    async pets(): Promise<Pet[]>{
        return await this.petsService.findAll();
    }

    @Mutation(returns => Pet)
    async createPet(@Args('createPetInput') createPetInput: CreatePet): Promise<Pet>{
        return await this.petsService.create(createPetInput);
    }

    @ResolveField(returns => Owner)
    owner(@Parent() pet: Pet): Promise<Owner>{
        return this.petsService.getOwner(pet.ownerId);
    }
}
