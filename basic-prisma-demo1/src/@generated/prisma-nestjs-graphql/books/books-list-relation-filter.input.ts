import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BooksWhereInput } from './books-where.input';

@InputType()
export class BooksListRelationFilter {

    @Field(() => BooksWhereInput, {nullable:true})
    every?: BooksWhereInput;

    @Field(() => BooksWhereInput, {nullable:true})
    some?: BooksWhereInput;

    @Field(() => BooksWhereInput, {nullable:true})
    none?: BooksWhereInput;
}
