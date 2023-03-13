import { Field, Float, InputType, ObjectType } from '@nestjs/graphql';

@InputType()
export class EmployeeInput {
  @Field(() => String)
  username: string;

  @Field(() => String)
  fullname: string;

  @Field(() => Float)
  salary: number;
}

@ObjectType()
export class Employee {
  @Field(() => String)
  id: string;

  @Field(() => String)
  username: string;

  @Field(() => String)
  fullname: string;

  @Field(() => Float)
  salary: number;
}
