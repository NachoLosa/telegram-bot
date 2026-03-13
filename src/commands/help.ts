import { MyContext } from "../types";

export async function helpCommand(ctx: MyContext) {
  await ctx.reply("Los comandos disponibles son:\n- /login\n- /menu\n- /start");
}
