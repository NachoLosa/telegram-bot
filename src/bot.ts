import "dotenv/config";
import { Bot, session } from "grammy";
import { helpCommand } from "./commands/help";
import { loginCommand } from "./commands/login";
import { menuCommand } from "./commands/menu";
import { startCommand } from "./commands/start";
import { setupMenuCallbacks } from "./handlers/menuCallbacks";
import { setupMessageHandlers } from "./handlers/messageHandlers";
import { authMiddleware } from "./middleware/auth";
import { MyContext, SessionData } from "./types";
import { conversations, createConversation } from "@grammyjs/conversations";
import { searchProductConversation } from "./conversations/searchProduct";

const bot = new Bot<MyContext>(process.env.BOT_TOKEN!);

// 1. Session middleware
bot.use(
  session({
    initial: (): SessionData => ({
      isAuthenticated: false,
    }),
  }),
);

// 2. Comandos sin autenticación
bot.command("login", loginCommand);

// 3. Auth middleware global guard
bot.use(authMiddleware);

// 4. Conversations plugins
bot.use(conversations());
bot.use(createConversation(searchProductConversation));

// 5. Comandos autenticados
bot.command("start", startCommand);
bot.command("menu", menuCommand);
bot.command("cmd", helpCommand);

// 6. Callback queries
setupMenuCallbacks(bot);

// 7. Global Message handlers (fallback)
setupMessageHandlers(bot);

bot.start();
