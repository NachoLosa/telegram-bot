import { MyContext } from "../types";

export async function loginCommand(ctx: MyContext) {
  const LOGIN_PASSWORD = process.env.BOT_LOGIN_PASSWORD!;
  const text = ctx.message?.text ?? "";
  const parts = text.split(" ");
  const password = parts[1];

  if (!password) {
    await ctx.reply("Usá: /login tu_clave");
    return;
  }

  if (password !== LOGIN_PASSWORD) {
    await ctx.reply("Clave incorrecta.");
    return;
  }

  ctx.session.isAuthenticated = true;
  await ctx.reply("Login correcto ✅");
}
