import { Injectable } from "@nestjs/common";
import { Recipes } from "./models/recipes.model";

@Injectable()
export class RecipesService {
  async findAll(data: any) {
    return [] as Recipes[];
  }
  async create(data: any) {
    return {};
  }
}
