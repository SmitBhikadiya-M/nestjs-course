import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { BooksUncheckedUpdateManyWithoutAuthorNestedInput } from '../books/books-unchecked-update-many-without-author-nested.input';

@InputType()
export class AuthorUncheckedUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => BooksUncheckedUpdateManyWithoutAuthorNestedInput, {nullable:true})
    books?: BooksUncheckedUpdateManyWithoutAuthorNestedInput;
}
