import { Resolver, Query } from '@nestjs/graphql';
import { Pong } from './models/pong.model';

@Resolver((of) => Pong)
export class PingResolver {
  @Query((returns) => Pong)
  ping(): Pong {
    return { message: 'pong' };
  }
}
