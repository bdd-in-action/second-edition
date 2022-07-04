import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getStatus(): string {
    return 'Flying High Membership Service - BDD In Action 2nd Edition';
  }
}
