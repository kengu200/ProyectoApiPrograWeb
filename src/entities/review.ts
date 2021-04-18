import {Entity, Column, PrimaryGeneratedColumn,BaseEntity, CreateDateColumn, ManyToOne} from 'typeorm';
import { Field, Int, ObjectType } from "type-graphql";
import {User} from "./user";

export enum State{
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE",
}
@ObjectType()
@Entity()
export class Review extends BaseEntity{
    @Field()
    @PrimaryGeneratedColumn()
    id!:number;

    @Field()
    @Column()
    description!:string;

    @Field(()=>Int)
    @Column("int",{default:0})
    rating!:number;

    @Column()
    @ManyToOne(() => User, (user: any) => user.reviews)
    creatorUser!: User;
    
    @Field(() => State)
    @Column()
    state!: State;
    
    @Field(()=> String)
    @CreateDateColumn({type:'timestamp'})
    createdAt!:string;

    @Field(()=> String)
    @CreateDateColumn({type:'timestamp'})
    updatedAt!:string;

}



