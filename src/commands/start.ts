import { MyContext } from "../types";

export async function startCommand(ctx: MyContext) {
  if (ctx.session.isAuthenticated) {
    await ctx.reply("¡Hola de nuevo! Ya estás autenticado 👋\nPuedes usar /menu para ver las opciones disponibles.");
  } else {
    await ctx.reply(
      "¡Hola! 👋 Bienvenido/a a nuestro bot.\n\nPara comenzar a usar mis funcionalidades, necesitas iniciar sesión.\nPor favor, usa el comando: `/login tu_contraseña`", 
      { parse_mode: "Markdown" }
    );
  }
}
