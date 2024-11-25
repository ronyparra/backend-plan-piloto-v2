import { Controller, Get, UseGuards, Res } from '@nestjs/common';
import { BackupService } from './backup.service';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '../auth/auth.guard';

@UseGuards(AuthGuard)
@ApiTags('backup')
@Controller('backup')
export class BackupController {
  constructor(private readonly backupService: BackupService) {}

  @Get('generate')
  async generateBackup(): Promise<{ message: string; filePath: string }> {
    const filePath = await this.backupService.generateBackup();
    return {
      message: 'Backup generado exitosamente',
      filePath,
    };
  }

  @Get('download')
  async downloadBackup(@Res() res): Promise<void> {
    try {
      const filePath = await this.backupService.generateBackup();
      const file = await this.backupService.getBackupFile(filePath);
      res.set({
        'Content-Type': 'application/sql',
        'Content-Disposition': `attachment; filename=${filePath.split('/').pop()}`,
      });
      res.send(file);
    } catch (error) {
      res.status(500).send({ message: 'Error al descargar el archivo' });
    }
  }
}
