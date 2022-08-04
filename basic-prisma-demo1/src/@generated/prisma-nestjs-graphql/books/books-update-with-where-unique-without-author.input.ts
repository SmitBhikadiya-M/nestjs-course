import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BooksWhereUniqueInput } from './books-where-unique.input';
import { Type } from 'class-transformer';
import { BooksUpdateWithoutAuthorInput } from './books-update-without-author.input';

@InputType()
export class BooksUpdateWithWhereUniqueWithoutAuthorInput {

    @Field(() => BooksWhereUniqueInput, {nullable:false})
    @Type(() => BooksWhereUniqueInput)
    where!: BooksWhereUniqueInput;

    @Field(() => BooksUpdateWithoutAuthorInput, {nullable:false})
    @Type(() => BooksUpdateWithoutAuthorInput)
    data!: BooksUpdateWithoutAuthorInput;
}
