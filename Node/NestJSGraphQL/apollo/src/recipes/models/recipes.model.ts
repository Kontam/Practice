import {Directive, Field, ID, ObjectType} from "@nestjs/graphql";

@ObjectType({ description: 'recipe' })
export class Recipes {
  @Field(type => ID)
  id: string;

  @Directive('@upper')
  title: string;

  @Field()
  description?: string;

  @Field()
  creationDate: Date;

  @Field(type => [String])
  ingredients: string[];
}
