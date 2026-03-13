import { InlineKeyboard } from "grammy";

export function mainMenu() {
  return new InlineKeyboard()
    .text("📦 Stock", "menu:stock")
    .row()
    .text("🛒 Productos", "menu:products")
    .row()
    .text("🔍 Buscar Producto", "menu:search_product")
    .row()
    .text("📢 Difusión", "menu:broadcast")
    .row()
    .text("❓ Ayuda", "menu:help");
}
