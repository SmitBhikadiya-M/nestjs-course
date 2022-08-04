import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BooksWhereUniqueInput } from './books-where-unique.input';
import { Type } from 'class-transformer';
import { BooksCreateInput } from './books-create.input';
import { BooksUpdateInput } from './books-update.input';

@ArgsType()
export class UpsertOneBooksArgs {

    @Field(() => BooksWhereUniqueInput, {nullable:false})
    @Type(() => BooksWhereUniqueInput)
    where!: BooksWhereUniqueInput;

    @Field(() => BooksCreateInput, {nullable:false})
    @Type(() => BooksCreateInput)
    create!: BooksCreateInput;

    @Field(() => BooksUpdateInput, {nullable:false})
    @Type(() => BooksUpdateInput)
    update!: BooksUpdateInput;
}
