import { registerValidate } from "./validate";
import { registerService } from "./service";
import { HttpError } from "../../HttpErrors";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const validatedData = registerValidate(data);

    const user = await registerService(validatedData);

    return Response.json(user);
  } catch (error) {
    if (error instanceof HttpError) {
      return Response.json({ message: error.message }, { status: error.status });
    }
    return Response.json({ message: "Erro ao criar usuário." }, { status: 500 });
  }
}
