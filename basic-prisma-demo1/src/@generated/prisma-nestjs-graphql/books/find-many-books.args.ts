import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BooksWhereInput } from './books-where.input';
import { Type } from 'class-transformer';
import { BooksOrderByWithRelationInput } from './books-order-by-with-relation.input';
import { BooksWhereUniqueInput } from './books-where-unique.input';
import { Int } from '@nestjs/graphql';
import { BooksScalarFieldEnum } from './books-scalar-field.enum';

@ArgsType()
export class FindManyBooksArgs {

    @Field(() => BooksWhereInput, {nullable:true})
    @Type(() => BooksWhereInput)
    where?: BooksWhereInput;

    @Field(() => [BooksOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<BooksOrderByWithRelationInput>;

    @Field(() => BooksWhereUniqueInput, {nullable:true})
    cursor?: BooksWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [BooksScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof BooksScalarFieldEnum>;
}
