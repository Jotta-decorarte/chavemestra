export const site = {
  name: "Chave Mestra Consultoria",
  title: "Chave Mestra | Consultoria Financeira e Empresarial",
  description: "Consultoria administrativa e financeira para empresas que buscam mais controle, organização, planejamento e clareza para tomar decisões.",
  whatsapp: "5521996763141",
  phone: "(21) 99676-3141",
  instagram: "https://www.instagram.com/chavemestraconsultoria/",
  message: "Olá, Renata! Conheci a Chave Mestra pelo site e gostaria de entender melhor como funciona a consultoria administrativa e financeira.",
};

export const whatsappUrl = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.message)}`;
export const navigation = [
  ["Início", "#inicio"], ["Consultoria", "#consultoria"],
  ["Como funciona", "#como-funciona"], ["Sobre", "#sobre"], ["FAQ", "#faq"],
] as const;

export function getSiteUrl(): URL | undefined {
  const value = process.env.NEXT_PUBLIC_SITE_URL;
  if (!value) return undefined;
  const url = new URL(value);
  if (!['https:', 'http:'].includes(url.protocol)) throw new Error('NEXT_PUBLIC_SITE_URL deve ser uma URL HTTP(S).');
  return url;
}
