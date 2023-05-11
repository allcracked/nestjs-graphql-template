import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class PingArgs {
  @Field({
    description: 'determines if it includes a message back',
    nullable: true,
  })
  withMessage?: boolean;
}
