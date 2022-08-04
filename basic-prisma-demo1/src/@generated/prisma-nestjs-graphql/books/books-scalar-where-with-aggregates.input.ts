import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';

@InputType()
export class BooksScalarWhereWithAggregatesInput {

    @Field(() => [BooksScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<BooksScalarWhereWithAggregatesInput>;

    @Field(() => [BooksScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<BooksScalarWhereWithAggregatesInput>;

    @Field(() => [BooksScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<BooksScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    title?: StringWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    authorId?: IntNullableWithAggregatesFilter;
}
