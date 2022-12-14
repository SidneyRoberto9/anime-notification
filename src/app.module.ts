import { Module } from '@nestjs/common';

import { DatabaseModule } from './infra/database/database.module';
import { HttpsModule } from './infra/http/https.module';

@Module({
  imports: [HttpsModule, DatabaseModule],
})
export class AppModule {}
