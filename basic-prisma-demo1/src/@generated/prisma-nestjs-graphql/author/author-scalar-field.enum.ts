import { registerEnumType } from '@nestjs/graphql';

export enum AuthorScalarFieldEnum {
    id = "id",
    name = "name"
}


registerEnumType(AuthorScalarFieldEnum, { name: 'AuthorScalarFieldEnum', description: undefined })
