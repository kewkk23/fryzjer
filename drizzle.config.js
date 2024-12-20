import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
    schema: "./db/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
        url: 'postgresql://ai-short-video-generator_owner:C1eJlkmhfoU7@ep-shiny-surf-a291iz1g.eu-central-1.aws.neon.tech/fryzjer?sslmode=require'
    },
});
