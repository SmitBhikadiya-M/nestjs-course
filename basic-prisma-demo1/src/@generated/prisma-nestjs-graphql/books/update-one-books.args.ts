import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BooksUpdateInput } from './books-update.input';
import { Type } from 'class-transformer';
import { BooksWhereUniqueInput } from './books-where-unique.input';

@ArgsType()
export class UpdateOneBooksArgs {

    @Field(() => BooksUpdateInput, {nullable:false})
    @Type(() => BooksUpdateInput)
    data!: BooksUpdateInput;

    @Field(() => BooksWhereUniqueInput, {nullable:false})
    @Type(() => BooksWhereUniqueInput)
    where!: BooksWhereUniqueInput;
}
