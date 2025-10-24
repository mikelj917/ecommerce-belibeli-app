import { db } from "@/shared/lib/db";
import { HttpError } from "../../HttpErrors";
import { getCategoryID } from "./getCategoryID";
import { getPagination } from "./getPagination";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);

    const categoryID = getCategoryID(searchParams);

    const { limit = 100, offSet = 0 } = getPagination(searchParams);

    const products = await db.product.findMany({
      where: { categoryId: categoryID },
      include: {
        category: { select: { name: true } },
        ProductOption: { include: { values: true } },
      },
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
