import { Injectable } from '@nestjs/common';
import { AuthorCreateInput } from 'src/@generated/prisma-nestjs-graphql/author/author-create.input';
import { PrismaService } from 'src/prisma.service';
import { UpdateAuthorDto } from './dto/update-author.dto';

@Injectable()
export class AuthorsService {

  constructor( private prisma: PrismaService ){}

  create(createAuthorDto: AuthorCreateInput) {
    return this.prisma.author.create({ data: createAuthorDto });
  }

  findAll() {
    return this.prisma.author.findMany({
      include: {
        books: true
      }
    })
  }

  findOne(id: number) {
    return `This action returns a #${id} author`;
  }

  update(id: number, updateAuthorDto: UpdateAuthorDto) {
    return `This action updates a #${id} author`;
  }

  remove(id: number) {
    return `This action removes a #${id} author`;
  }
}
