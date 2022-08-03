import { Field, InputType, Int } from "@nestjs/graphql"
import { IsAlpha, IsString } from "class-validator"

@InputType()
export class CreatePet{
    @Field()
    @IsAlpha()
    name: string

    @Field({nullable: true})
    @IsString()
    type?: string

    @Field(type => Int)
    ownerId: number
}
