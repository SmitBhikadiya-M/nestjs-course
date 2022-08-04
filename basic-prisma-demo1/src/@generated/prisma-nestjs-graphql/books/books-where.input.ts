import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { AuthorRelationFilter } from '../author/author-relation-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';

@InputType()
export class BooksWhereInput {

    @Field(() => [BooksWhereInput], {nullable:true})
    AND?: Array<BooksWhereInput>;

    @Field(() => [BooksWhereInput], {nullable:true})
    OR?: Array<BooksWhereInput>;

    @Field(() => [BooksWhereInput], {nullable:true})
    NOT?: Array<BooksWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => AuthorRelationFilter, {nullable:true})
    author?: AuthorRelationFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    authorId?: IntNullableFilter;
}
