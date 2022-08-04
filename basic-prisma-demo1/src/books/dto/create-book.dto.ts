import { IsNotEmpty, IsOptional } from "class-validator";

export class CreateBookDto {

    @IsOptional()
    authorId?: number | null

    @IsNotEmpty()
    title: string
}
