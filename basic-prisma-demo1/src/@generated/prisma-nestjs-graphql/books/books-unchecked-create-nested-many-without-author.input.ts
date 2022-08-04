import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BooksCreateWithoutAuthorInput } from './books-create-without-author.input';
import { Type } from 'class-transformer';
import { BooksCreateOrConnectWithoutAuthorInput } from './books-create-or-connect-without-author.input';
import { BooksWhereUniqueInput } from './books-where-unique.input';

@InputType()
export class BooksUncheckedCreateNestedManyWithoutAuthorInput {

    @Field(() => [BooksCreateWithoutAuthorInput], {nullable:true})
    @Type(() => BooksCreateWithoutAuthorInput)
    create?: Array<BooksCreateWithoutAuthorInput>;

    @Field(() => [BooksCreateOrConnectWithoutAuthorInput], {nullable:true})
    @Type(() => BooksCreateOrConnectWithoutAuthorInput)
    connectOrCreate?: Array<BooksCreateOrConnectWithoutAuthorInput>;

    @Field(() => [BooksWhereUniqueInput], {nullable:true})
    @Type(() => BooksWhereUniqueInput)
    connect?: Array<BooksWhereUniqueInput>;
}
