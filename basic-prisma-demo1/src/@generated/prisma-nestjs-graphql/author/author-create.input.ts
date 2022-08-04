import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { BooksCreateNestedManyWithoutAuthorInput } from '../books/books-create-nested-many-without-author.input';

@InputType()
export class AuthorCreateInput {

    @Field(() => String, {nullable:false})
    @Validator.MinLength(3)
    name!: string;

    @Field(() => BooksCreateNestedManyWithoutAuthorInput, {nullable:true})
    books?: BooksCreateNestedManyWithoutAuthorInput;
}
