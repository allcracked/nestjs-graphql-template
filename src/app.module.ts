import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { ConfigModule } from '@nestjs/config';
import { CommonModule } from './common/common.module';
import { PingModule } from './ping/ping.module';
import { SentryInterceptor } from './common/interceptors/sentry.interceptor';

@Module({
  imports: [
    PingModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: false,
      autoSchemaFile: true,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
    ConfigModule.forRoot(),
    CommonModule,
  ],
  providers: [
    {
      provide: 'APP_INTERCEPTOR',
      useClass: SentryInterceptor,
    },
  ],
})
export class AppModule {}
