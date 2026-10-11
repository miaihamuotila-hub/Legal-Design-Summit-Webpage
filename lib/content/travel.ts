// Travel & Venue content. Directions, transit, and hotel proximity are real,
// sourced facts from design-handoff/source-package/LDS_Source_Content.md
// (travel.html) — they hold because the venue is confirmed unchanged from
// 2025. The weather note is corrected for the actual confirmed month
// (September, not the old site's "late autumn" text, which the AI brief
// flagged as wrong for a September event). Hotel listings are informational,
// not partnerships — see the brief's instruction not to imply either.

export const mapUrl = "https://www.google.com/maps/search/?api=1&query=5+Aleksanterinkatu%2C+Helsinki";

export const venueDetail = {
  area: "in the heart of the city centre, next to Senate Square and the Helsinki Cathedral",
  access: "A fully accessible entrance is on Aleksanterinkatu, leading to the Great Hall (Juhlasali) inside.",
  transit: "Tram 2, 4 or 7 stops right around the corner (Senaatintori). Helsinki Central Station is a 7-minute walk away.",
};

export const gettingThere = [
  {
    method: "From the airport",
    text: "Helsinki Airport (HEL) is about 30 minutes from the city centre. Take the I or P train directly to Helsinki Central Station, then walk or take tram 2, 4 or 7 to the venue. Taxis and airport buses also run from outside the terminal.",
  },
  {
    method: "By train",
    text: "Long-distance trains arrive at Helsinki Central Station. From there it's a short walk along Keskuskatu to Aleksanterinkatu, or take the trams above.",
  },
  {
    method: "By bus / tram",
    text: "The HSL network covers the whole Helsinki region — buy day tickets via the HSL app. Tram lines 2 and 4 stop at Senate Square near the venue.",
  },
];

export const accommodation = [
  {
    tier: "Mid-range",
    name: "Hotel Haven",
    address: "Unioninkatu 17",
    walk: "5 min walk",
    description: "Elegant boutique hotel overlooking the harbour; breakfast included.",
    url: "https://www.hotelhaven.fi/en",
  },
  {
    tier: "Mid-range",
    name: "Scandic Kaisaniemi",
    address: "Kaisaniemenkatu 7",
    walk: "8 min walk",
    description: "Comfortable rooms and sauna, close to the central station and metro.",
    url: "https://www.scandichotels.com/hotels/finland/helsinki/scandic-kaisaniemi",
  },
  {
    tier: "Premium",
    name: "Hotel Fabian",
    address: "Fabianinkatu 7",
    walk: "6 min walk",
    description: "Stylish, eco-friendly hotel with spacious rooms and a quiet courtyard.",
    url: "https://www.hotelfabian.com/",
  },
  {
    tier: "Budget",
    name: "Omena Hotel Yrjönkatu",
    address: "Yrjönkatu 30",
    walk: "10 min walk",
    description: "Self-service budget hotel with basic amenities in the city centre.",
    url: "https://www.omenahotels.com/en/helsinki/yrjonkatu/",
  },
];

export const explore = [
  {
    name: "Helsinki Cathedral & Senate Square",
    description: "The neoclassical cathedral is one of Finland's most photographed landmarks, right next to the venue.",
  },
  {
    name: "Suomenlinna Sea Fortress",
    description: "A UNESCO World Heritage site, a 15-minute ferry ride from Market Square — historic fortifications and seaside views.",
  },
  {
    name: "Oodi Central Library",
    description: "A modern architectural landmark opposite the Parliament House. Coffee, books, and a wave-like wooden design worth seeing.",
  },
  {
    name: "Design District & Market Square",
    description: "Boutique shops and galleries in the Design District, then local food stalls at the Market Square.",
  },
];

export const tips = [
  { label: "Weather", text: "Early September in Helsinki is typically mild in the day and cool in the evening — pack a layer." },
  { label: "Currency", text: "Finland uses the Euro (€). Cards and contactless payment are widely accepted." },
  { label: "Language", text: "Finnish and Swedish are the official languages; English is widely spoken, especially in the city centre." },
  { label: "Emergency number", text: "Dial 112 for police, fire or medical emergencies." },
  { label: "Public transport", text: "Use the HSL app for real-time tram, bus and metro timetables, and to buy tickets." },
];
