import { BadRequestError } from "../../HttpErrors";

export function getCategoryID(searchParams: URLSearchParams) {
  const categoryIDParam = searchParams.get("categoryID");

  let categoryID: number | undefined = undefined;

  if (categoryIDParam !== null) {
    const parsed = Number(categoryIDParam);

    if (Number.isNaN(parsed) || parsed <= 0) {
      throw new BadRequestError("categoryID precisa ser um número maior que 0");
    }

    categoryID = parsed;
  }

  return categoryID;
}
