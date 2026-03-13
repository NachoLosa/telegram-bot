import { NextFunction } from "grammy";
import { MyContext } from "../types";

export async function authMiddleware(ctx: MyContext, next: NextFunction) {
  const text = ctx.message?.text ?? "";

  // permitir login y start interactivo siempre
  if (text.startsWith("/login") || text.startsWith("/start")) {
    await next();
    return;
  }

  if (!ctx.session.isAuthenticated) {
    await ctx.reply("No autorizado. Iniciá sesión con /login tu_clave");
    return;
  }

  await next();
}
