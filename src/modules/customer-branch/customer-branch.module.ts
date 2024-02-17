import { Module } from '@nestjs/common';
import { CustomerBranchService } from './customer-branch.service';
import { CustomerBranchController } from './customer-branch.controller';
import { CustomerBranch } from './entities/customer-branch.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([CustomerBranch])],
  controllers: [CustomerBranchController],
  providers: [CustomerBranchService],
})
export class CustomerBranchModule {}
