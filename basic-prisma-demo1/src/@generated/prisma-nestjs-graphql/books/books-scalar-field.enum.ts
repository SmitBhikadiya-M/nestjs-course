import { registerEnumType } from '@nestjs/graphql';

export enum BooksScalarFieldEnum {
    id = "id",
    title = "title",
    authorId = "authorId"
}


registerEnumType(BooksScalarFieldEnum, { name: 'BooksScalarFieldEnum', description: undefined })
