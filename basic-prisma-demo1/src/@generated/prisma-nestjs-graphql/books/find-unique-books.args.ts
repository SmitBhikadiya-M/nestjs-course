import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BooksWhereUniqueInput } from './books-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueBooksArgs {

    @Field(() => BooksWhereUniqueInput, {nullable:false})
    @Type(() => BooksWhereUniqueInput)
    where!: BooksWhereUniqueInput;
}
