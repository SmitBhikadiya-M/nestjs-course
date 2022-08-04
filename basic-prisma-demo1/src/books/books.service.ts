import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { UpdateBookDto } from './dto/update-book.dto';

@Injectable()
export class BooksService {

  constructor(private prisma: PrismaService ) {}

  create(createBookDto: Prisma.BooksUncheckedCreateInput) {
    return this.prisma.books.create({ data: createBookDto });
  }

  findAll() {
    return this.prisma.books.findMany({
      include: {
        author: {
          select: {
            name: true
          }
        }
      }
    });
  }

  findOne(booksWhereUniqueInput: Prisma.BooksWhereUniqueInput) {
    return this.prisma.books.findUnique({
      where: booksWhereUniqueInput
    });
  }

  update(where: Prisma.BooksWhereUniqueInput, data: Prisma.BooksUpdateInput) {
    return this.prisma.books.update({
      where,
      data
    });
  }

  remove(where: Prisma.BooksWhereUniqueInput) {
    return this.prisma.books.delete({
      where
    });
  }
}
