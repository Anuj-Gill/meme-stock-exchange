import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { SentryModule } from '@sentry/nestjs/setup';
import { OAuthController } from './apis/oauth/oauth.controller';
import { OAuthService } from './apis/oauth/oauth.service';
import { SupabaseService } from './services/supabase.service';
import { SentryGlobalFilter } from '@sentry/nestjs/setup';
import { APP_FILTER } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from './services/prisma.service';

@Module({
  imports: [
    SentryModule.forRoot(),
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
    }),
  ],
  controllers: [AppController, OAuthController],
  providers: [
    {
      provide: APP_FILTER,
      useClass: SentryGlobalFilter,
    },
    AppService,
    SupabaseService,
    OAuthService,
    JwtService,
    PrismaService
  ],
})
export class AppModule {}
