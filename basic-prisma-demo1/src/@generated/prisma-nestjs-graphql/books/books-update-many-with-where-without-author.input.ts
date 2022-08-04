import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BooksScalarWhereInput } from './books-scalar-where.input';
import { Type } from 'class-transformer';
import { BooksUpdateManyMutationInput } from './books-update-many-mutation.input';

@InputType()
export class BooksUpdateManyWithWhereWithoutAuthorInput {

    @Field(() => BooksScalarWhereInput, {nullable:false})
    @Type(() => BooksScalarWhereInput)
    where!: BooksScalarWhereInput;

    @Field(() => BooksUpdateManyMutationInput, {nullable:false})
    @Type(() => BooksUpdateManyMutationInput)
    data!: BooksUpdateManyMutationInput;
}
