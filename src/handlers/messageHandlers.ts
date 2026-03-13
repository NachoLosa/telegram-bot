import { Bot } from "grammy";
import { MyContext } from "../types";

export function setupMessageHandlers(bot: Bot<MyContext>) {
  bot.on("message:text", async (ctx) => {
    await ctx.reply(`Recibí: ${ctx.message.text}`);
  });
}
