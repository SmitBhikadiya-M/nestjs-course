import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { BooksOrderByRelationAggregateInput } from '../books/books-order-by-relation-aggregate.input';

@InputType()
export class AuthorOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => BooksOrderByRelationAggregateInput, {nullable:true})
    books?: BooksOrderByRelationAggregateInput;
}
