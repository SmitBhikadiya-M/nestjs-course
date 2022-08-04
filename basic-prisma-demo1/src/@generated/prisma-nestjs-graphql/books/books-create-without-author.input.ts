import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class BooksCreateWithoutAuthorInput {

    @Field(() => String, {nullable:false})
    title!: string;
}
