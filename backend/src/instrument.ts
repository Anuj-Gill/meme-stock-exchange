import * as dotenv from 'dotenv';
dotenv.config();

import * as Sentry from "@sentry/nestjs"
import { nodeProfilingIntegration } from "@sentry/profiling-node";

Sentry.init({
    dsn: process.env.SENTRY_DSN,
    environment: process.env.ENVIRONMENT || 'development',
    integrations: [
      nodeProfilingIntegration(),
    ],
    maxValueLength: 1024, // Default is 250
    debug: false, // Enable debug mode to see Sentry logs in console
  });