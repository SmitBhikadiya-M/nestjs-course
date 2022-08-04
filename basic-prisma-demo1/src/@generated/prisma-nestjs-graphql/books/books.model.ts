import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Author } from '../author/author.model';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Books {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => Author, {nullable:true})
    author?: Author | null;

    @Field(() => Int, {nullable:true})
    authorId!: number | null;
}
