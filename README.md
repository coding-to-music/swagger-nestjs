# Setup Swagger to generate an OpenApi documentation for your REST endpoints using NestJS.

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```java
$ npm install
```

## Running the app

```java
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
# Setup Swagger to generate an OpenApi documentation for your REST endpoints using NestJS.

By Marc Stammerjohann https://notiz.dev/authors/marc-stammerjohann
August 26, 2021

This allows you to directly test file upload in your Swagger documentation and is perfect for client generation tools to pick up the correct input values for file(s).

https://notiz.dev/blog/openapi-in-nestjs


```java
nest new swagger-nestjs
```

```java
⚡  We will scaffold your app in a few seconds..

CREATE swagger-nestjs/.eslintrc.js (631 bytes)
CREATE swagger-nestjs/.prettierrc (51 bytes)
CREATE swagger-nestjs/README.md (3339 bytes)
CREATE swagger-nestjs/nest-cli.json (64 bytes)
CREATE swagger-nestjs/package.json (2003 bytes)
CREATE swagger-nestjs/tsconfig.build.json (97 bytes)
CREATE swagger-nestjs/tsconfig.json (546 bytes)
CREATE swagger-nestjs/src/app.controller.spec.ts (617 bytes)
CREATE swagger-nestjs/src/app.controller.ts (274 bytes)
CREATE swagger-nestjs/src/app.module.ts (249 bytes)
CREATE swagger-nestjs/src/app.service.ts (142 bytes)
CREATE swagger-nestjs/src/main.ts (208 bytes)
CREATE swagger-nestjs/test/app.e2e-spec.ts (630 bytes)
CREATE swagger-nestjs/test/jest-e2e.json (183 bytes)

? Which package manager would you ❤️  to use? npm
✔ Installation in progress... ☕

🚀  Successfully created project swagger-nestjs
👉  Get started with the following commands:

$ cd swagger-nestjs
$ npm run start

                                  
                    Thanks for installing Nest 🙏
           Please consider donating to our open collective
                  to help us maintain this package.
                                                                
    
         🍷  Donate: https://opencollective.com/nest
```

# OpenApi for your REST APIs in NestJS
Setup Swagger to generate an OpenApi documentation for your REST endpoints.

Authors
Marc Stammerjohann
Published at 28 July 2021

The OpenApi documentation is a useful API playground for you to test or to share with other developers and for client generation tools (e.g ng-openapi-gen for Angular).

You'll find the source code in this repo.

https://github.com/notiz-dev/nestjs-swagger

## Setup Swagger

Start with installing the Swagger dependencies.

```java
# express
npm install --save @nestjs/swagger swagger-ui-express class-transformer class-validator

# fastify
npm install --save @nestjs/swagger fastify-swagger class-transformer class-validator
```

content_copy
Now setup the initialization of Swagger in your main.ts file.

main.ts
```java
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('NestJS Swagger')
    .setDescription('API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
```

content_copy
The setup is complete, start your Nest application npm run start:dev and visit the Swagger endpoint localhost:3000/api.

https://notiz.dev/assets/img/blog/openapi-in-nestjs/optimized/swagger-api.png

Swagger API after initial setup

Swagger API after initial setup
lightbulb

Swagger API will be available at the path you provide in SwaggerModule.setup('api',...) at http://localhost:3000/api. Access the JSON file by opening http://localhost:3000/api-json for express and http://localhost:3000/api/json for fastify.

Generate in the next step CRUD endpoints for a resource like users or products and add type definitions for Swagger.

Generate REST resource
Use the Nest CLI to generate the boilerplate the resource for users.

```java
nest generate resource
# short
nest g res

# CLI prompts
? What name would you like to use for this resource (plural, e.g., "users")? users
? What transport layer do you use? REST API
? Would you like to generate CRUD entry points? (Y/n) y
```

content_copy
You'll find a new users directory under src containing all the boilerplates for your REST endpoints - module, controller, service, entity and dto files.

Start again the Nest application and you should see the new users endpoints in the Swagger API.

users-crud-api.png

Users endpoints in the Swagger API

Users endpoints in the Swagger API

## Api decorators
Apply available decorators prefixed with Api to expose the properties for .dto.ts and .entity.ts files and the responses for your CRUD endpoints.

Tags
Group your endpoints together by using @ApiTags(...tags) at the controller level.

users.controller.ts
```java
import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller('users')
@ApiTags('users') // 👈 apply tags
export class UsersController {
  ...
}
```

[Group endpoints with tags](https://github.com/coding-to-music/swagger-nestjs/blob/main/images/users-api-tags.png?raw=true)

Group endpoints with tags

## Property
Let's add the following properties name, email, password to the CreateProductDto and mark name as optional.

create-user.dto.ts
```java
export class CreateUserDto {
  email: string;
  password: string;
  name?: string | null;
}
```

content_copy
To expose those properties to the Swagger API use @ApiProperty(options) at the property level and pass options like required, default, description and more.

create-user.dto.ts
```java
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  email: string;
  @ApiProperty()
  password: string;
  @ApiProperty({ required: false, nullable: true })
  name?: string | null;
}
```

content_copy
Refresh the Swagger API and you should see the properties for the CreateProductDto.

createuserdto-properties.png


[CreateProductDto properties with name optional](https://github.com/coding-to-music/swagger-nestjs/blob/main/images/createuserdto-properties.png?raw=true)

CreateProductDto properties with name optional
Also have a look at the UpdateProductDto schema in Swagger. The same properties are shown but all of them are marked as optional. This is because of PartialType also called Mapped types provided by Nest.

update-user.dto.ts
```java
import { PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {}
```

content_copy
PartialType applies the same properties from CreateUserDto but set to optional.

## Response
Add the same properties as before to the user.entity.ts and only expose name and email to Swagger.

user.entity.ts
```java
import { ApiProperty } from '@nestjs/swagger';

export class User {
  @ApiProperty()
  email: string;
  password: string;
  @ApiProperty({ required: false, nullable: true })
  name?: string | null;
}
```

content_copy
Additionally, Swagger needs help to pick up the response type. Annotate your REST endpoints with the custom @ApiResponse() specifying the status code and the response type or choose a [short-hand API response](https://docs.nestjs.com/openapi/operations#responses) (e.g. @ApiOkResponse(), @ApiCreatedResponse(), ...).

- `@ApiOkResponse`: `GET` and `DELETE`
- `@ApiCreatedResponse`: `POST` and `PATCH`
- `@ApiForbiddenResponse`: endpoint might throw forbidden (`403`) exception

user.entity.ts
```java
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { User } from './entities/user.entity';

@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiCreatedResponse({ type: User })
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @ApiOkResponse({ type: [User] }) // 👈 array notation
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: User })
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: User })
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: User })
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
```

content_copy
lightbulb
When the response type is an array, you must indicate it using the array bracket notation ([ ]) around the type or set isArray to true. GET /users response is an array of User annotation looks like this:

```java
@ApiOkResponse({ type: [User] })

@ApiOkResponse({ type: User, isArray: true })
```

You'll see the endpoints with the new response type of User.

[CreateProductDto properties with name optional](https://github.com/coding-to-music/swagger-nestjs/blob/main/images/users-crud-responses.png?raw=true)

CreateProductDto properties with name optional

## Swagger CLI Plugin
Exposing the properties and responses to Swagger results in additional boilerplate. Nest commes with a Swagger CLI Plugin to reduce boilerplate in your .dto.ts and .entity.ts files. Enable the plugin in your nest-cli.json file.

```java
nest-cli.json
{
  "collection": "@nestjs/schematics",
  "sourceRoot": "src",
  "compilerOptions": {
    "plugins": ["@nestjs/swagger"]
  }
}
```

content_copy
Before: User entity, CreateUserDto and UsersController with boilerplate.

user.entity.ts
```java
create-user.dto.ts
users.controller.ts
export class User {
  @ApiProperty()
  email: string;
  password: string;
  @ApiProperty({ required: false, nullable: true })
  name?: string | null;
}
```

content_copy
After: CLI plugin enabled and without boilerplate. You need to add @ApiHideProperty otherwise the plugin will also expose the password property.

user.entity.ts
```java
create-user.dto.ts
users.controller.ts
import { ApiHideProperty } from '@nestjs/swagger';

export class User {
  email: string;
  @ApiHideProperty()
  password: string;
  name?: string | null;
}
```

