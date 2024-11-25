import { Injectable, Logger } from '@nestjs/common';
import { exec } from 'child_process';
import { promisify } from 'util';
import * as path from 'path';
import * as fs from 'fs';
import configuration from 'src/config/configuration';

const execAsync = promisify(exec);

@Injectable()
export class BackupService {
  private readonly logger = new Logger(BackupService.name);

  async generateBackup(): Promise<string> {
    try {
      // Ruta del archivo de backup
      const backupPath = path.join(__dirname, '..', '..', 'backups');
      if (!fs.existsSync(backupPath)) {
        fs.mkdirSync(backupPath);
      }

      const fileName = `backup_${new Date().toISOString().replace(/[:.]/g, '-')}.sql`;
      const filePath = path.join(backupPath, fileName);

      // Comando para generar el backup (ajusta para tu base de datos)
      const { database } = configuration();
      const command = `PGPASSWORD="${database.password}" pg_dump -U ${database.username} -h ${database.host} -p ${database.port} ${configuration().database.name} > ${filePath}`;
      await execAsync(command);

      this.logger.log(`Backup creado: ${filePath}`);
      return filePath;
    } catch (error) {
      this.logger.error('Error al generar el backup', error);
      throw new Error('No se pudo generar el backup');
    }
  }

  async getBackupFile(filePath: string): Promise<Buffer> {
    if (!fs.existsSync(filePath)) {
      throw new Error('El archivo no existe');
    }
    return fs.promises.readFile(filePath);
  }
}
