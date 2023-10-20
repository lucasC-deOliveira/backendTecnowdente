import { Body, Controller, Logger, Post, Res } from '@nestjs/common';
import { BaseController } from 'src/domain/base/baseController/BaseController';
import { Response } from 'express';
import { AuthenticateUserUseCaseNesjts } from 'src/infra/core/nestjs/modules/account/useCases/authenticate/AuthenticateUseCaseNestjs';
import { AuthenticateUserUseCaseInputClassValidator } from 'src/infra/core/nestjs/pipes/account/authenticate/AuthenticateUserUseCaseInputClassValidator';

@Controller('/sessions')
export class AuthenticateController extends BaseController {
  constructor(
    private readonly authenticateUserUseCaseNesjts: AuthenticateUserUseCaseNesjts,
  ) {
    super();
  }
  @Post('/')
  async handle(
    @Body() data: AuthenticateUserUseCaseInputClassValidator,
    @Res() response: Response,
  ): Promise<Response> {
    const { email, password } = data;

    try {
      const { refresh_token, token, user } =
        await this.authenticateUserUseCaseNesjts.execute({
          email,
          password,
        });

      return response.status(200).json({
        error: false,
        status: 200,
        message: 'Usuario autenticado com sucesso!',
        data: [
          {
            refresh_token,
            user,
            token,
          },
        ],
      });
    } catch (e) {
      Logger.error(
        `Error no controlador ${AuthenticateController.name} error: ${e.message}`,
      );
      if (e.message.includes('Email or password incorrect')) {
        return response.status(400).json({
          error: true,
          status: 400,
          message: 'Email ou senha incorreto!',
          data: [],
        });
      }
      return response.status(500).json({
        error: true,
        status: 500,
        message: 'Erro interno do servidor!',
        data: [],
      });
    }
  }
}
