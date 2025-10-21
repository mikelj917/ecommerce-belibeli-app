export function getPagination(searchParams: URLSearchParams) {
  const limit = searchParams.get("limit") ? Number(searchParams.get("limit")) : undefined;
  const offSet = searchParams.get("offset") ? Number(searchParams.get("offset")) : undefined;

  return { limit, offSet };
}
