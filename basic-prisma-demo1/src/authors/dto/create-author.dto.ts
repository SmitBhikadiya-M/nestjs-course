import { IsAlpha } from "class-validator";

export class CreateAuthorDto {
    @IsAlpha()
    name: string
}
