import { TypeOrmModuleOptions } from "@nestjs/typeorm"
require('dotenv').config()

export class OrmConfig {
    // Config TypeOrm
    getConfig() {
        const ormConfig: TypeOrmModuleOptions = {
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: process.env.POSTGRESQL_USER || 'postgres',
            password: process.env.POSTGRESQL_PASSWORD || 'postgres',
            database: process.env.POSTGRESQL_DB,
            entities: ['dist/**/*{.model.js,.model.ts}'],
            synchronize: false,
            migrationsRun: true,
            logging: false,
            logger: 'file',
            migrations: [
                'dist/typeorm/database/migrations/**/*{.js, .ts}'
            ],
            cli: {
                migrationsDir: "typeorm/database/migrations"
            }
        }

        return ormConfig
    }
}

export default new OrmConfig().getConfig()