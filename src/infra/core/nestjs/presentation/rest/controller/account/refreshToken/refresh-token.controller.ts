import { Body, Controller, Logger, Post, Res } from '@nestjs/common';
import { BaseController } from 'src/domain/base/baseController/BaseController';
import { Response } from 'express';
import { RefreshTokenUseCaseNestjs } from 'src/infra/core/nestjs/modules/account/useCases/refreshToken/RefreshTokenUseCaseNestjs';
import { RefreshTokenUseCaseClassValidator } from 'src/infra/core/nestjs/pipes/account/refreshToken/RefreshTokentUseCaseClassValidator';

@Controller('/refresh-token')
export class RefreshTokenController extends BaseController {
  constructor(
    private readonly refreshTokenUseCaseNestjs: RefreshTokenUseCaseNestjs,
  ) {
    super();
  }
  @Post('/')
  async handle(
    @Body() data: RefreshTokenUseCaseClassValidator,
    @Res() response: Response,
  ): Promise<Response> {
    const { token } = data;

    try {
      const newTokenResponse =
        await this.refreshTokenUseCaseNestjs.execute(token);

      return response.status(200).json({
        error: false,
        status: 200,
        message: 'Token autualizado com sucesso!',
        data: [
          {
            ...newTokenResponse,
          },
        ],
      });
    } catch (e) {
      Logger.error(
        `Error no controlador ${RefreshTokenController.name} error: ${e.message}`,
      );
      if (e.message.includes('jwt malformed')) {
        return response.status(400).json({
          error: true,
          status: 400,
          message: 'Token invalido',
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
