import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BooksCreateInput } from './books-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneBooksArgs {

    @Field(() => BooksCreateInput, {nullable:false})
    @Type(() => BooksCreateInput)
    data!: BooksCreateInput;
}
