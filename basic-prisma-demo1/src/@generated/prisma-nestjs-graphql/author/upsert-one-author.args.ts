import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AuthorWhereUniqueInput } from './author-where-unique.input';
import { Type } from 'class-transformer';
import { AuthorCreateInput } from './author-create.input';
import { AuthorUpdateInput } from './author-update.input';

@ArgsType()
export class UpsertOneAuthorArgs {

    @Field(() => AuthorWhereUniqueInput, {nullable:false})
    @Type(() => AuthorWhereUniqueInput)
    where!: AuthorWhereUniqueInput;

    @Field(() => AuthorCreateInput, {nullable:false})
    @Type(() => AuthorCreateInput)
    create!: AuthorCreateInput;

    @Field(() => AuthorUpdateInput, {nullable:false})
    @Type(() => AuthorUpdateInput)
    update!: AuthorUpdateInput;
}
