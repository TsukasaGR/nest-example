import { Injectable } from '@nestjs/common';

@Injectable()
export class SubService {
  subMethod1(): string {
    return 'sub method';
  }
}
