import { Module , NestModule, MiddlewareConsumer } from '@nestjs/common';
import { HelloController } from './application/controllers/hello.controller';
import { UserService } from './domain/services/user.service';
import { DatabaseModule } from './infrastructure/database/database.module';
import { modelProviders } from './infrastructure/models';
import { UserRepository } from './infrastructure/repository/user.repository';
import { LoggerMiddleware } from './application/middlewere/logger.middleware';
import { TerminusModule } from '@nestjs/terminus';
import { HttpModule } from '@nestjs/axios';
import { TerminusOptionsService } from './infrastructure/health/terminus-options.check';
import { PrometheusModule } from '@willsoto/nestjs-prometheus';

@Module({
  imports: [
    DatabaseModule,
    TerminusModule,
    HttpModule,
    PrometheusModule.register(),
  ],
  controllers: [HelloController],
  providers: [
    UserService,
    UserRepository,
    TerminusOptionsService,
    ...modelProviders,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes(HelloController);
  }
}
