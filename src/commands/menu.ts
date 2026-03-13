import { MyContext } from "../types";
import { mainMenu } from "../keyboards/mainMenu";

export async function menuCommand(ctx: MyContext) {
  await ctx.reply("Panel principal", { reply_markup: mainMenu() });
}
