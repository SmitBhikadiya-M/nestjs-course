import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BooksWhereInput } from './books-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyBooksArgs {

    @Field(() => BooksWhereInput, {nullable:true})
    @Type(() => BooksWhereInput)
    where?: BooksWhereInput;
}
