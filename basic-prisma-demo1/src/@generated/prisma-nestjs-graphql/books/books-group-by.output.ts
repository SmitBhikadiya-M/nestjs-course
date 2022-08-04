import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { BooksCountAggregate } from './books-count-aggregate.output';
import { BooksAvgAggregate } from './books-avg-aggregate.output';
import { BooksSumAggregate } from './books-sum-aggregate.output';
import { BooksMinAggregate } from './books-min-aggregate.output';
import { BooksMaxAggregate } from './books-max-aggregate.output';

@ObjectType()
export class BooksGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => Int, {nullable:true})
    authorId?: number;

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
