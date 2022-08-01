import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id:number

    @ApiProperty()
    @Column()
    firstname: string

    @ApiProperty()
    @Column()
    lastname: string

}
