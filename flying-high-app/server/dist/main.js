"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const options = new swagger_1.DocumentBuilder()
        .addBearerAuth()
        .setTitle('Demo flight app API documentation')
        .setDescription(`
      Please first scroll to the bottom and read through Schemas.
      Then you need to generate the token by using the first endpoint to get full access to the API.
      Default email is 'admin@flyinghigh.com', pasword is 'admin'
      After you got the token, apply it by clicking the lock icon button.
    `)
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('api_doc', app, document);
    app.enableCors();
    await app.listen(process.env.PORT || 3000);
}
bootstrap();
//# sourceMappingURL=main.js.map