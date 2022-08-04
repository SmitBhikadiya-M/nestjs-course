import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';

@InputType()
export class BooksScalarWhereInput {

    @Field(() => [BooksScalarWhereInput], {nullable:true})
    AND?: Array<BooksScalarWhereInput>;

    @Field(() => [BooksScalarWhereInput], {nullable:true})
    OR?: Array<BooksScalarWhereInput>;

    @Field(() => [BooksScalarWhereInput], {nullable:true})
    NOT?: Array<BooksScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    authorId?: IntNullableFilter;
}
