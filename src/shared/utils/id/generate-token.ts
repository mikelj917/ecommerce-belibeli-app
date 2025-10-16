export function generateToken(ID: number) {
  const partialToken =
    Math.floor(Math.random() * 100000).toString() + ID.toString();
  const token = Number(partialToken) * 20;
  return token.toString();
}
