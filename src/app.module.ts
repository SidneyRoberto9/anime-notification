import { DatabaseModule } from "@infra/database/database.module";
import { HttpsModule } from "@infra/http/https.module";
import { Module } from "@nestjs/common";

@Module({
  imports: [HttpsModule, DatabaseModule],
})
export class AppModule {}
