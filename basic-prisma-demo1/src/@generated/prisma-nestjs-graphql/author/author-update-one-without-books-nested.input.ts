import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthorCreateWithoutBooksInput } from './author-create-without-books.input';
import { Type } from 'class-transformer';
import { AuthorCreateOrConnectWithoutBooksInput } from './author-create-or-connect-without-books.input';
import { AuthorUpsertWithoutBooksInput } from './author-upsert-without-books.input';
import { AuthorWhereUniqueInput } from './author-where-unique.input';
import { AuthorUpdateWithoutBooksInput } from './author-update-without-books.input';

@InputType()
export class AuthorUpdateOneWithoutBooksNestedInput {

    @Field(() => AuthorCreateWithoutBooksInput, {nullable:true})
    @Type(() => AuthorCreateWithoutBooksInput)
    create?: AuthorCreateWithoutBooksInput;

    @Field(() => AuthorCreateOrConnectWithoutBooksInput, {nullable:true})
    @Type(() => AuthorCreateOrConnectWithoutBooksInput)
    connectOrCreate?: AuthorCreateOrConnectWithoutBooksInput;

    @Field(() => AuthorUpsertWithoutBooksInput, {nullable:true})
    @Type(() => AuthorUpsertWithoutBooksInput)
    upsert?: AuthorUpsertWithoutBooksInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => AuthorWhereUniqueInput, {nullable:true})
    @Type(() => AuthorWhereUniqueInput)
    connect?: AuthorWhereUniqueInput;

    @Field(() => AuthorUpdateWithoutBooksInput, {nullable:true})
    @Type(() => AuthorUpdateWithoutBooksInput)
    update?: AuthorUpdateWithoutBooksInput;
}
