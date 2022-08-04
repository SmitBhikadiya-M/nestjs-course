import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthorCreateNestedOneWithoutBooksInput } from '../author/author-create-nested-one-without-books.input';

@InputType()
export class BooksCreateInput {

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => AuthorCreateNestedOneWithoutBooksInput, {nullable:true})
    author?: AuthorCreateNestedOneWithoutBooksInput;
}
