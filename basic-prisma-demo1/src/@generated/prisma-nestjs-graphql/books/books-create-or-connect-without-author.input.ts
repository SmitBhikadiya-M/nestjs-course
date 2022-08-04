import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BooksWhereUniqueInput } from './books-where-unique.input';
import { Type } from 'class-transformer';
import { BooksCreateWithoutAuthorInput } from './books-create-without-author.input';

@InputType()
export class BooksCreateOrConnectWithoutAuthorInput {

    @Field(() => BooksWhereUniqueInput, {nullable:false})
    @Type(() => BooksWhereUniqueInput)
    where!: BooksWhereUniqueInput;

    @Field(() => BooksCreateWithoutAuthorInput, {nullable:false})
    @Type(() => BooksCreateWithoutAuthorInput)
    create!: BooksCreateWithoutAuthorInput;
}
