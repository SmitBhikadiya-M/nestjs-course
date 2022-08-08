import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { DonationCreateInput } from 'src/@generated/donation/donation-create.input';
import { DonationWhereUniqueInput } from 'src/@generated/donation/donation-where-unique.input';

@Injectable()
export class DonationsService {

  constructor(private prisma: PrismaService){}

  async create(createDonationInput: DonationCreateInput) {
    return this.prisma.donation.create({
      data: createDonationInput
    });
  }

  findAll(orderBy?: { field?: string; direction?: string }) {
    const {field = 'createdAt', direction = 'desc'} = orderBy || {};
    return this.prisma.donation.findMany({
      orderBy: {
        [field]: direction
      }
    });
  }

  findOne(donationWhereUniqueInput: DonationWhereUniqueInput) {
    return this.prisma.donation.findUnique({
      where: donationWhereUniqueInput
    });
  }

  async totalDonation(){
    const res = await this.prisma.donation.aggregate({
      _sum: {
        count: true
      }
    })
    return res._sum.count;
  }
}
