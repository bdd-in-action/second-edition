import {Body, Controller, HttpException, HttpStatus, Post} from '@nestjs/common';
import {ApiOperation, ApiResponse} from "@nestjs/swagger";
import {AuthenticationService} from "./authentication.service";
import {AuthenticateDto} from "./dto/authenticate.dto";

@Controller('api/users')
export class AuthenticationController {
    constructor(private readonly authenticationService: AuthenticationService) {}

    @Post('/authenticate')
    @ApiOperation({summary:'Authenticate a user trying to log in'})
    @ApiResponse({status: 404, description:'Invalid email or password'})
    @ApiResponse({status: 401, description:'Unconfirmed email address'})
    authenticate(@Body() emailAndPassword: AuthenticateDto) {
        const authenticatedUser = this.authenticationService.authenticate(emailAndPassword.email, emailAndPassword.password);
        if (authenticatedUser == undefined) {
            throw new HttpException('Invalid email or password', HttpStatus.NOT_FOUND)
        }
        if (!authenticatedUser.isActivated) {
            throw new HttpException('Please confirm your email address', HttpStatus.UNAUTHORIZED)
        }
        return authenticatedUser;
    }
}
