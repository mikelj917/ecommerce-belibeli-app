import { db } from "@/app/lib/db";
import { BadRequestError, HttpError } from "../../HttpErrors";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);

    const categoryID = getCategoryID(searchParams);

    const { limit = 100, offSet = 0 } = getPagination(searchParams);

    const products = await db.product.findMany({
      where: { categoryId: categoryID },
      skip: offSet,
      take: limit,
    });

    const count = await db.product.count({
      where: { categoryId: categoryID },
      take: limit,
    });

    return Response.json({ products, count });
  } catch (error) {
    if (error instanceof HttpError) {
      const { message, status } = error;
      return Response.json({ message }, { status });
    }
  }
}

function getCategoryID(searchParams: URLSearchParams) {
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

function getPagination(searchParams: URLSearchParams) {
  const limit = searchParams.get("limit") ? Number(searchParams.get("limit")) : undefined;
  const offSet = searchParams.get("offset") ? Number(searchParams.get("offset")) : undefined;

  return { limit, offSet };
}
