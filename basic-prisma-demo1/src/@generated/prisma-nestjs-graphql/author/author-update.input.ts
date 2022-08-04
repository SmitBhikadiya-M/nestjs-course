import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { BooksUpdateManyWithoutAuthorNestedInput } from '../books/books-update-many-without-author-nested.input';

@InputType()
export class AuthorUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => BooksUpdateManyWithoutAuthorNestedInput, {nullable:true})
    books?: BooksUpdateManyWithoutAuthorNestedInput;
}
