import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PrismaService } from '../../prisma/prisma.service';
import { Employee, EmployeeInput } from '../models/employee.model';

@Resolver(() => Employee)
export class EmployeeResolver {
  constructor(private prisma: PrismaService) {}

  @Query(() => [Employee])
  async employees() {
    return this.prisma.employee.findMany();
  }

  @Query(() => Employee)
  async employee(@Args('id') id: string) {
    return this.prisma.employee.findUnique({ where: { id } });
  }

  @Mutation(() => Employee)
  async createEmployee(@Args('input') input: EmployeeInput) {
    return this.prisma.employee.create({ data: input });
  }

  @Mutation(() => Employee)
  async updateEmployee(
    @Args('id') id: string,
    @Args('input') input: EmployeeInput,
  ) {
    return this.prisma.employee.update({ where: { id }, data: input });
  }

  @Mutation(() => Employee)
  async deleteEmployee(@Args('id') id: string) {
    return this.prisma.employee.delete({ where: { id } });
  }
}
