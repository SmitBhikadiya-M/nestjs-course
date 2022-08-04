import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { AuthorUpdateOneWithoutBooksNestedInput } from '../author/author-update-one-without-books-nested.input';

@InputType()
export class BooksUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => AuthorUpdateOneWithoutBooksNestedInput, {nullable:true})
    author?: AuthorUpdateOneWithoutBooksNestedInput;
}
