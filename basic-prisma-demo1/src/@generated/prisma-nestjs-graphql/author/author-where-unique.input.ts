import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class AuthorWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;
}
