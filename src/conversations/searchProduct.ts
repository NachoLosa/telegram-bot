import { MyContext, MyConversation } from "../types";
import { PRODUCTOS_MOCK } from "../mocks/productos";
import { InlineKeyboard } from "grammy";

export async function searchProductConversation(conversation: MyConversation, ctx: MyContext) {
  await ctx.reply("🔍 ¿Qué producto estás buscando? (Ej: cargador, iphone, camiseta)");

  // Esperar el siguiente mensaje del usuario
  const { message } = await conversation.wait();
  if (!message || !message.text) {
    await ctx.reply("Por favor, envía un texto válido para buscar.");
    return;
  }

  const termino = message.text.toLowerCase();
  
  // Buscar en los mocks y filtrar
  const resultados = PRODUCTOS_MOCK
    .filter(p => p.nombre.toLowerCase().includes(termino) || p.tipo.toLowerCase().includes(termino))
    .sort((a, b) => a.precio - b.precio)
    .slice(0, 3);

  if (resultados.length === 0) {
    await ctx.reply(`No encontramos productos que coincidan con "${message.text}". Intenta con otro término.`);
    return;
  }

  // Si hay resultados, armar el mensaje
  let mensaje = `🌟 *Top 3 Resultados para "${message.text}"* 🌟\n\n`;
  
  resultados.forEach((prod, index) => {
    const waNumber = prod.proveedor.telefono.replace(/\D/g, "");
    const waMsg = encodeURIComponent(`Hola, me interesa el producto: ${prod.nombre}`);
    const waLink = `https://wa.me/${waNumber}?text=${waMsg}`;

    mensaje += `${index + 1}. *${prod.nombre}*\n`;
    mensaje += `   💰 ${prod.moneda} ${prod.precio} | 📦 Stock: ${prod.stock}\n`;
    mensaje += `   🏢 ${prod.proveedor.nombre}\n`;
    mensaje += `   📲 [Comprar por WhatsApp](${waLink})\n\n`;
  });

  await ctx.reply(mensaje, { parse_mode: "Markdown" });
}
