import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { BooksCountAggregate } from './books-count-aggregate.output';
import { BooksAvgAggregate } from './books-avg-aggregate.output';
import { BooksSumAggregate } from './books-sum-aggregate.output';
import { BooksMinAggregate } from './books-min-aggregate.output';
import { BooksMaxAggregate } from './books-max-aggregate.output';

@ObjectType()
export class AggregateBooks {

    @Field(() => BooksCountAggregate, {nullable:true})
    _count?: BooksCountAggregate;

    @Field(() => BooksAvgAggregate, {nullable:true})
    _avg?: BooksAvgAggregate;

    @Field(() => BooksSumAggregate, {nullable:true})
    _sum?: BooksSumAggregate;

    @Field(() => BooksMinAggregate, {nullable:true})
    _min?: BooksMinAggregate;

    @Field(() => BooksMaxAggregate, {nullable:true})
    _max?: BooksMaxAggregate;
}
