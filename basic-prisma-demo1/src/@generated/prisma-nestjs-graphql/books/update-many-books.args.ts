import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BooksUpdateManyMutationInput } from './books-update-many-mutation.input';
import { Type } from 'class-transformer';
import { BooksWhereInput } from './books-where.input';

@ArgsType()
export class UpdateManyBooksArgs {

    @Field(() => BooksUpdateManyMutationInput, {nullable:false})
    @Type(() => BooksUpdateManyMutationInput)
    data!: BooksUpdateManyMutationInput;

    @Field(() => BooksWhereInput, {nullable:true})
    @Type(() => BooksWhereInput)
    where?: BooksWhereInput;
}
