export const couple = {
  bride: "Helena",
  groom: "Rafael",
  brideFull: "Helena Duarte",
  groomFull: "Rafael Mendes",
}

export const event = {
  iso: "2027-04-18T16:00:00-03:00",
  date: "18 de abril de 2027",
  weekday: "sábado",
  ceremonyTime: "16h",
  receptionTime: "18h",
  city: "Tiradentes, Minas Gerais",
  venue: "Capela da Fazenda Santa Clara",
  reception: "Jardim das Oliveiras",
  address: "Estrada do Serrote, s/n — Tiradentes, MG",
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=Tiradentes%2C%20Minas%20Gerais",
  rsvpBy: "18 de março de 2027",
}

export const contact = {
  whatsapp: "5531999990000",
  rsvpMessage:
    "Olá! Quero confirmar presença no casamento de Helena e Rafael, em 18 de abril de 2027.",
  email: "helena.e.rafael@example.com",
  pix: "helena.rafael@example.com",
}

export function whatsappHref(message = contact.rsvpMessage) {
  return `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(message)}`
}

export const calendarUrl =
  "https://calendar.google.com/calendar/render?action=TEMPLATE" +
  `&text=${encodeURIComponent("Casamento Helena & Rafael")}` +
  "&dates=20270418T190000Z/20270419T040000Z" +
  `&location=${encodeURIComponent("Capela da Fazenda Santa Clara, Tiradentes - MG")}` +
  `&details=${encodeURIComponent("Cerimônia às 16h. Recepção no Jardim das Oliveiras.")}`

export function photo(file: string) {
  return `${import.meta.env.BASE_URL}photos/${file}`
}

export const nav = [
  { href: "#historia", label: "História" },
  { href: "#o-dia", label: "O dia" },
  { href: "#traje", label: "Traje" },
  { href: "#hospedagem", label: "Hospedagem" },
  { href: "#presentes", label: "Presentes" },
] as const

export const story = [
  {
    year: "2019",
    title: "A mesma prateleira",
    text: "Numa livraria de Belo Horizonte, os dois esticaram a mão para o mesmo livro de poesia. A conversa saiu da loja e só terminou quando o café da esquina fechou.",
    image: "story-bookstore.jpg",
    alt: "Helena e Rafael folheando um livro juntos numa livraria iluminada pelo sol",
  },
  {
    year: "2022",
    title: "Ouro Preto sem pressa",
    text: "Um fim de semana virou o jeito deles de viajar: ruas de pedra, almoço longo e a decisão silenciosa de que a vida ficava melhor lado a lado.",
    image: "story-travel.jpg",
    alt: "Helena e Rafael caminhando de mãos dadas por uma rua de pedra em Ouro Preto",
  },
  {
    year: "2025",
    title: "O pedido, antes do sol esquentar",
    text: "No alto da serra, com Tiradentes ainda coberta de névoa, Rafael pediu Helena em casamento. O sim veio baixo, e ficou.",
    image: "story-proposal.jpg",
    alt: "Rafael ajoelhado pedindo Helena em casamento num morro ao amanhecer",
  },
] as const

export const schedule = [
  {
    time: "16h",
    title: "Cerimônia",
    place: "Capela da Fazenda Santa Clara",
    note: "A capela é pequena — chegar 20 minutos antes ajuda todo mundo a sentar com calma.",
    icon: "church",
  },
  {
    time: "17h30",
    title: "Brinde ao pôr do sol",
    place: "Gramado da capela",
    note: "Espumante gelado e fotos com a luz dourada da serra.",
    icon: "glass",
  },
  {
    time: "18h30",
    title: "Jantar",
    place: "Jardim das Oliveiras",
    note: "Mesa longa ao ar livre. Se esfriar, haverá mantas nos bancos.",
    icon: "utensils",
  },
  {
    time: "21h",
    title: "Pista",
    place: "Celeiro da fazenda",
    note: "Dança até tarde. Sapato baixo é mais que bem-vindo.",
    icon: "music",
  },
] as const

export const tips = [
  {
    title: "Chegando",
    text: "Confins fica a 3h30 de carro. Uma van sai de São João del-Rei às 15h — avisem no RSVP.",
    icon: "car",
  },
  {
    title: "Clima",
    text: "Abril tem dias amenos e noites de 14°C. Levem um casaco leve para depois do jantar.",
    icon: "sun",
  },
] as const

export const giftIdeas = [
  { label: "Um jantar à beira-mar", value: "R$ 250" },
  { label: "Passeio de barco em Paraty", value: "R$ 180" },
  { label: "Uma noite na pousada", value: "R$ 420" },
] as const

export const stays = [
  {
    name: "Pousada das Oliveiras",
    detail: "A oito minutos a pé da capela. Quartos com jardim e café servido cedo — ideal para quem quer chegar a pé na cerimônia.",
    query: "Tiradentes pousada",
  },
  {
    name: "Casa do Largo",
    detail: "No centro histórico, para quem chega na sexta e prefere caminhar entre as igrejas antes do sábado.",
    query: "Tiradentes centro historico",
  },
] as const

export const palette = [
  { name: "Sálvia", hex: "#7d8b74" },
  { name: "Linho", hex: "#e4d6bd" },
  { name: "Areia", hex: "#d9c7a6" },
  { name: "Dourado", hex: "#c4a36a" },
] as const
