import {Args, Query, Resolver} from "@nestjs/graphql";
import {Recipes} from "src/recipes/models/recipes.model";
import {RecipesService} from "src/recipes/recipes.service";

@Resolver(of => Recipes)
export class RecipesResolver {
  constructor(
    private readonly recipesService: RecipesService;
  ){}

  @Query(returns => Recipe)
  async recipes(@Args() recipesArgs: any): Promise<Recipes[]> {
    return this.recipesService.findAll(recipesArgs);
  }
}
