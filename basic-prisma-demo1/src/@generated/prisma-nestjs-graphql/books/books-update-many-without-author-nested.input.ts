import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BooksCreateWithoutAuthorInput } from './books-create-without-author.input';
import { Type } from 'class-transformer';
import { BooksCreateOrConnectWithoutAuthorInput } from './books-create-or-connect-without-author.input';
import { BooksUpsertWithWhereUniqueWithoutAuthorInput } from './books-upsert-with-where-unique-without-author.input';
import { BooksWhereUniqueInput } from './books-where-unique.input';
import { BooksUpdateWithWhereUniqueWithoutAuthorInput } from './books-update-with-where-unique-without-author.input';
import { BooksUpdateManyWithWhereWithoutAuthorInput } from './books-update-many-with-where-without-author.input';
import { BooksScalarWhereInput } from './books-scalar-where.input';

@InputType()
export class BooksUpdateManyWithoutAuthorNestedInput {

    @Field(() => [BooksCreateWithoutAuthorInput], {nullable:true})
    @Type(() => BooksCreateWithoutAuthorInput)
    create?: Array<BooksCreateWithoutAuthorInput>;

    @Field(() => [BooksCreateOrConnectWithoutAuthorInput], {nullable:true})
    @Type(() => BooksCreateOrConnectWithoutAuthorInput)
    connectOrCreate?: Array<BooksCreateOrConnectWithoutAuthorInput>;

    @Field(() => [BooksUpsertWithWhereUniqueWithoutAuthorInput], {nullable:true})
    @Type(() => BooksUpsertWithWhereUniqueWithoutAuthorInput)
    upsert?: Array<BooksUpsertWithWhereUniqueWithoutAuthorInput>;

    @Field(() => [BooksWhereUniqueInput], {nullable:true})
    @Type(() => BooksWhereUniqueInput)
    set?: Array<BooksWhereUniqueInput>;

    @Field(() => [BooksWhereUniqueInput], {nullable:true})
    @Type(() => BooksWhereUniqueInput)
    disconnect?: Array<BooksWhereUniqueInput>;

    @Field(() => [BooksWhereUniqueInput], {nullable:true})
    @Type(() => BooksWhereUniqueInput)
    delete?: Array<BooksWhereUniqueInput>;

    @Field(() => [BooksWhereUniqueInput], {nullable:true})
    @Type(() => BooksWhereUniqueInput)
    connect?: Array<BooksWhereUniqueInput>;

    @Field(() => [BooksUpdateWithWhereUniqueWithoutAuthorInput], {nullable:true})
    @Type(() => BooksUpdateWithWhereUniqueWithoutAuthorInput)
    update?: Array<BooksUpdateWithWhereUniqueWithoutAuthorInput>;

    @Field(() => [BooksUpdateManyWithWhereWithoutAuthorInput], {nullable:true})
    @Type(() => BooksUpdateManyWithWhereWithoutAuthorInput)
    updateMany?: Array<BooksUpdateManyWithWhereWithoutAuthorInput>;

    @Field(() => [BooksScalarWhereInput], {nullable:true})
    @Type(() => BooksScalarWhereInput)
    deleteMany?: Array<BooksScalarWhereInput>;
}
