export interface BebidasInterface {
  drinks: Drink[] | null;
}

export interface Drink {
  strDrink: string;
  strDrinkThumb: string;
  idDrink: string;
  strCategory?: string;
  strInstructions?: string;
  [key: `strIngredient${number}`]: string | null;
  [key: `strMeasure${number}`]: string | null;
}

export interface IngredientMeasure {
  ingredient: string;
  measure: string;
}
