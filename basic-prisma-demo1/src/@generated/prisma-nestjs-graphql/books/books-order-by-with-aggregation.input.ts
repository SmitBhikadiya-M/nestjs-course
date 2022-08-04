import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { BooksCountOrderByAggregateInput } from './books-count-order-by-aggregate.input';
import { BooksAvgOrderByAggregateInput } from './books-avg-order-by-aggregate.input';
import { BooksMaxOrderByAggregateInput } from './books-max-order-by-aggregate.input';
import { BooksMinOrderByAggregateInput } from './books-min-order-by-aggregate.input';
import { BooksSumOrderByAggregateInput } from './books-sum-order-by-aggregate.input';

@InputType()
export class BooksOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    authorId?: keyof typeof SortOrder;

    @Field(() => BooksCountOrderByAggregateInput, {nullable:true})
    _count?: BooksCountOrderByAggregateInput;

    @Field(() => BooksAvgOrderByAggregateInput, {nullable:true})
    _avg?: BooksAvgOrderByAggregateInput;

    @Field(() => BooksMaxOrderByAggregateInput, {nullable:true})
    _max?: BooksMaxOrderByAggregateInput;

    @Field(() => BooksMinOrderByAggregateInput, {nullable:true})
    _min?: BooksMinOrderByAggregateInput;

    @Field(() => BooksSumOrderByAggregateInput, {nullable:true})
    _sum?: BooksSumOrderByAggregateInput;
}
