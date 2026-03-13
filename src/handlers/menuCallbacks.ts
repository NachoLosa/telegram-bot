import { Bot } from "grammy";
import { MyContext } from "../types";
import { PRODUCTOS_MOCK } from "../mocks/productos";

export function setupMenuCallbacks(bot: Bot<MyContext>) {
  bot.callbackQuery("menu:stock", async (ctx) => {
    await ctx.answerCallbackQuery();
    await ctx.reply("Entraste a Stock");
  });

  bot.callbackQuery("menu:products", async (ctx) => {
    await ctx.answerCallbackQuery();
    
    // Filtramos para asegurar evitar errores, ordenamos por precio ascendente y tomamos los top 5
    const top5Productos = [...PRODUCTOS_MOCK]
      .sort((a, b) => a.precio - b.precio)
      .slice(0, 5);

    let mensaje = "🌟 *Top 5 Destacados (Mejor Precio)* 🌟\n\n";
    top5Productos.forEach((prod, index) => {
      const waNumber = prod.proveedor.telefono.replace(/\D/g, "");
      const waMsg = encodeURIComponent(`Hola, me interesa el producto: ${prod.nombre}`);
      const waLink = `https://wa.me/${waNumber}?text=${waMsg}`;

      mensaje += `${index + 1}. *${prod.nombre}*\n`;
      mensaje += `   💰 ${prod.moneda} ${prod.precio} | 📦 Stock: ${prod.stock}\n`;
      mensaje += `   🏢 ${prod.proveedor.nombre}\n`;
      mensaje += `   📲 [Comprar por WhatsApp](${waLink})\n\n`;
    });

    await ctx.reply(mensaje, { parse_mode: "Markdown" });
  });

  bot.callbackQuery("menu:search_product", async (ctx: MyContext) => {
    await ctx.answerCallbackQuery();
    await ctx.conversation.enter("searchProductConversation");
  });

  bot.callbackQuery("menu:broadcast", async (ctx) => {
    await ctx.answerCallbackQuery();
    await ctx.reply("Entraste a Difusión");
  });

  bot.callbackQuery("menu:help", async (ctx) => {
    await ctx.answerCallbackQuery();
    await ctx.reply("Entraste a Ayuda");
  });
}
