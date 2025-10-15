export function generateToken(ID: number) {
  const partialToken =
    Math.floor(Math.random() * 100000).toString() + ID.toString();
  const token = Number(partialToken) * 20000;
  return token.toString();
}
