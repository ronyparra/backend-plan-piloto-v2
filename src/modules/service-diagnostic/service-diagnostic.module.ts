import { Module } from '@nestjs/common';
import { ServiceDiagnosticService } from './service-diagnostic.service';
import { ServiceDiagnosticController } from './service-diagnostic.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiceDiagnostic } from './entities/service-diagnostic.entity';
import { ServiceDiagnosticDetail } from './entities/service-diagnostic-detail.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ServiceDiagnostic, ServiceDiagnosticDetail]),
  ],
  controllers: [ServiceDiagnosticController],
  providers: [ServiceDiagnosticService],
})
export class ServiceDiagnosticModule {}
