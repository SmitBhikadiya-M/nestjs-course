import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { BooksUncheckedCreateNestedManyWithoutAuthorInput } from '../books/books-unchecked-create-nested-many-without-author.input';

@InputType()
export class AuthorUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    @Validator.MinLength(3)
    name!: string;

    @Field(() => BooksUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    books?: BooksUncheckedCreateNestedManyWithoutAuthorInput;
}
