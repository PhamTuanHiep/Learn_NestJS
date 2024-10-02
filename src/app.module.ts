import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { UserModule } from './modules/users/user.module';
import { UsersEntity } from './enities/users.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ProductModule } from './modules/products/product.module';
import { ProductEntity } from './enities/product.entity';

// @Module({
//   imports: [
//     ConfigModule.forRoot(),
//     TypeOrmModule.forRootAsync({
//       imports: [ConfigModule],
//       useFactory: (configService: ConfigService) => ({
//         type: 'mysql',
//         host: configService.get('DB_HOST'),
//         port: +configService.get('DB_PORT'),
//         username: configService.get('DB_USERNAME'),
//         password: configService.get('DB_PASSWORD'),
//         database: configService.get('DB_NAME'),
//         // 'nestjs-api-v1',
//         entities: [UsersEntity],
//         synchronize: true,
//       }),
//       inject: [ConfigService],
//     }),
//     // UserModule,
//   ],
//   controllers: [AppController],
//   providers: [AppService],
// })

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'nestjs-api-v1',
      entities: [ProductEntity],
      synchronize: true,
    }),
    ProductModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {
    console.log('----------------------------------');
  }
}
