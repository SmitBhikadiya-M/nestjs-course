import { BadRequestException } from '@nestjs/common';
import { Resolver, Query, Mutation, Args, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { DonationCreateInput } from 'src/@generated/donation/donation-create.input';
import { OrderByParams } from '../../src/graphql';
import { DonationsService } from './donations.service';

const pubsub = new PubSub();

@Resolver('Donation')
export class DonationsResolver {
  constructor(private readonly donationsService: DonationsService) {}

  @Mutation('createDonation')
  async create(@Args('createDonationInput') createDonationInput: DonationCreateInput) {
    const created = await this.donationsService.create(createDonationInput);
    const total = await this.donationsService.totalDonation();
    pubsub.publish('totalUpdate', { totalUpdated: { total } });
    return created;
  }

  @Query('donations')
  async findAll(@Args('orderBy') orderBy?: OrderByParams) {
    try{
      return await this.donationsService.findAll(orderBy);
    }catch(e){
      throw new BadRequestException();
    }
  }

  @Query('totalDonation')
  async totalDonation() {
    return await this.donationsService.totalDonation();
  }

  @Query('donation')
  findOne(@Args('id') id: number) {
    return this.donationsService.findOne({id: +id});
  }

  @Subscription()
  totalUpdated(){
    return pubsub.asyncIterator('totalUpdate');
  }
}
