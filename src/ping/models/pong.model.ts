// Purpose: Pong model for the ping module.
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'Pong model' })
export class Pong {
  @Field({ description: 'The message of the pong' })
  message: string;
}
