// import { ApiProperty } from '@nestjs/swagger';

// export class CreateUserDto {
//   @ApiProperty()
//   email: string;
//   @ApiProperty()
//   password: string;
//   @ApiProperty({ required: false, nullable: true })
//   name?: string | null;
// }

export class CreateUserDto {
  email: string;
  password: string;
  name?: string | null;
}