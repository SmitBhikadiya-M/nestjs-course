import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Books } from '../books/books.model';
import { AuthorCount } from './author-count.output';

@ObjectType()
export class Author {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => [Books], {nullable:true})
    books?: Array<Books>;

    @Field(() => AuthorCount, {nullable:false})
    _count?: AuthorCount;
}
