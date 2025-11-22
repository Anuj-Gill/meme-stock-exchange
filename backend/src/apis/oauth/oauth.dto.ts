import { IsEmail, IsNotEmpty, IsOptional, IsString, IsUrl, IsUUID } from 'class-validator';

export class OAuthRegisterDTO {
  @IsNotEmpty()
  @IsString()
  refreshToken: string;

  @IsNotEmpty()
  @IsString()
  accessToken: string;
}