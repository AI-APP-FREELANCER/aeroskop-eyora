export const WHATSAPP_NUMBER = "97377992203";
export const WHATSAPP_DISPLAY = "+973 7799 2203";

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const DEFAULT_WHATSAPP_MESSAGE =
  "Hi Eyora, I'd like to know more about your surveillance products.";
