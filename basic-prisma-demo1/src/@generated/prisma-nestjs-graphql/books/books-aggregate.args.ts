import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BooksWhereInput } from './books-where.input';
import { Type } from 'class-transformer';
import { BooksOrderByWithRelationInput } from './books-order-by-with-relation.input';
import { BooksWhereUniqueInput } from './books-where-unique.input';
import { Int } from '@nestjs/graphql';
import { BooksCountAggregateInput } from './books-count-aggregate.input';
import { BooksAvgAggregateInput } from './books-avg-aggregate.input';
import { BooksSumAggregateInput } from './books-sum-aggregate.input';
import { BooksMinAggregateInput } from './books-min-aggregate.input';
import { BooksMaxAggregateInput } from './books-max-aggregate.input';

@ArgsType()
export class BooksAggregateArgs {

    @Field(() => BooksWhereInput, {nullable:true})
    @Type(() => BooksWhereInput)
    where?: BooksWhereInput;

    @Field(() => [BooksOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<BooksOrderByWithRelationInput>;

    @Field(() => BooksWhereUniqueInput, {nullable:true})
    cursor?: BooksWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => BooksCountAggregateInput, {nullable:true})
    _count?: BooksCountAggregateInput;

    @Field(() => BooksAvgAggregateInput, {nullable:true})
    _avg?: BooksAvgAggregateInput;

    @Field(() => BooksSumAggregateInput, {nullable:true})
    _sum?: BooksSumAggregateInput;

    @Field(() => BooksMinAggregateInput, {nullable:true})
    _min?: BooksMinAggregateInput;

    @Field(() => BooksMaxAggregateInput, {nullable:true})
    _max?: BooksMaxAggregateInput;
}
