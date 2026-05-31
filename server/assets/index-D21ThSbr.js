import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { Sparkles, Search, User, ShoppingBag, Menu, Star, ArrowRight, Check, Heart, Award, Truck, ShieldCheck, ChevronRight } from "lucide-react";
const logo = "/assets/pawfectreats-logo-CkEjHFCh.webp";
const logoTp = "/assets/pawfectreats-logo-tp-CrzprmT3.png";
const heroPets = "/assets/hero-pets-CdEWvnXJ.png";
const heroPets2 = "/assets/hero-pets-C5oj1LMU.webp";
const catFood = "/assets/product-cat-food-DWiU5pQB.webp";
const dogFood = "/assets/product-dog-food-BgOwo2mu.webp";
const kittenFood = "/assets/product-kitten-food-B0CQ7ye8.webp";
const treats = "/assets/product-treats-CGOcbDJF.webp";
const products = [{
  name: "Blue Buffalo Wilderness Pate Variety Pack Duck, Chicken & Salmon Grain-Free Cat Canned Food, 3-oz, case of 12",
  tag: "Bestseller",
  img: catFood,
  price: 9.85,
  old: 12.88,
  rating: 4.9,
  reviews: 2841
}, {
  name: "Royal Canin Size Health Nutrition Small Indoor Puppy Dry Dog Food, 2.5-lb bag",
  tag: "New",
  img: dogFood,
  price: 14.29,
  old: 22.99,
  rating: 4.8,
  reviews: 1632
}, {
  name: "Blue Buffalo Wilderness High Protein Natural Grain-Free Chicken Kitten Dry Cat Food, 5-lb bag",
  tag: "Top Rated",
  img: kittenFood,
  price: 6,
  old: 9,
  rating: 4.9,
  reviews: 3920
}, {
  name: "Friskies Party Mix Natural Yums Complete & Balanced Salmon Crunchy Natural Cat Treats, 20-oz tub",
  tag: "Vet Pick",
  img: treats,
  price: 2.53,
  old: 3.89,
  rating: 4.7,
  reviews: 1284
}];
function Index() {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsx(AnnouncementBar, {}),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx(Hero, {}),
    /* @__PURE__ */ jsx(TrustBar, {}),
    /* @__PURE__ */ jsx(ValueProps, {}),
    /* @__PURE__ */ jsx(FlashSale, {}),
    /* @__PURE__ */ jsx(Bestsellers, {}),
    /* @__PURE__ */ jsx(Guarantee, {}),
    /* @__PURE__ */ jsx(Testimonials, {}),
    /* @__PURE__ */ jsx(NewsletterCTA, {}),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
function AnnouncementBar() {
  return /* @__PURE__ */ jsx("div", { className: "bg-primary-dark text-primary-foreground text-xs sm:text-sm", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 py-2 flex items-center justify-center gap-2", children: [
    /* @__PURE__ */ jsx(Sparkles, { className: "size-3.5" }),
    /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Free shipping on orders $50+ · 30-day money-back guarantee" })
  ] }) });
}
function Header() {
  return /* @__PURE__ */ jsx("header", { className: "sticky top-0 z-40 bg-background/90 backdrop-blur border-b border-border", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 h-16 flex items-center justify-between gap-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-8", children: [
      /* @__PURE__ */ jsx("img", { src: logoTp, alt: "Pawfectreats", className: "h-8 w-auto" }),
      /* @__PURE__ */ jsxs("nav", { className: "hidden lg:flex items-center gap-6 text-sm font-medium", children: [
        /* @__PURE__ */ jsx("a", { href: "#shop", className: "hover:text-primary transition", children: "Shop" }),
        /* @__PURE__ */ jsx("a", { href: "#bestsellers", className: "hover:text-primary transition", children: "Bestsellers" }),
        /* @__PURE__ */ jsx("a", { href: "#guarantee", className: "hover:text-primary transition", children: "Why Us" }),
        /* @__PURE__ */ jsx("a", { href: "#reviews", className: "hover:text-primary transition", children: "Reviews" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsx("button", { "aria-label": "Search", className: "p-2 hover:bg-muted rounded-full", children: /* @__PURE__ */ jsx(Search, { className: "size-5" }) }),
      /* @__PURE__ */ jsx("button", { "aria-label": "Account", className: "p-2 hover:bg-muted rounded-full hidden sm:inline-flex", children: /* @__PURE__ */ jsx(User, { className: "size-5" }) }),
      /* @__PURE__ */ jsxs("button", { "aria-label": "Cart", className: "relative p-2 hover:bg-muted rounded-full", children: [
        /* @__PURE__ */ jsx(ShoppingBag, { className: "size-5" }),
        /* @__PURE__ */ jsx("span", { className: "absolute -top-0.5 -right-0.5 bg-primary text-primary-foreground text-[10px] font-bold rounded-full size-4 flex items-center justify-center", children: "3" })
      ] }),
      /* @__PURE__ */ jsx("button", { "aria-label": "Menu", className: "p-2 hover:bg-muted rounded-full lg:hidden", children: /* @__PURE__ */ jsx(Menu, { className: "size-5" }) })
    ] })
  ] }) });
}
function Hero() {
  return /* @__PURE__ */ jsx("section", { className: "relative overflow-hidden", style: {
    background: "var(--gradient-hero)"
  }, children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 py-12 lg:py-20 grid lg:grid-cols-2 gap-10 items-center", children: [
    /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 bg-background/80 border border-border rounded-full px-3 py-1.5 text-xs font-semibold", children: [
        /* @__PURE__ */ jsx("div", { className: "flex", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsx(Star, { className: "size-3 fill-warning text-warning" }, i)) }),
        /* @__PURE__ */ jsx("span", { children: "Trusted by 250,000+ pet parents" })
      ] }),
      /* @__PURE__ */ jsxs("h1", { className: "text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight", children: [
        "Nutrition your pet will ",
        /* @__PURE__ */ jsx("span", { className: "text-primary", children: "love" }),
        " — and thrive on."
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground max-w-xl", children: "Vet-formulated food and supplements that support healthy growth, energy, and longevity. Real ingredients. Real results — guaranteed." }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-3", children: [
        /* @__PURE__ */ jsxs("a", { href: "#shop", className: "inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-primary-foreground shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-glow)] transition", style: {
          background: "var(--gradient-cta)"
        }, children: [
          "Shop Now — Save 20% ",
          /* @__PURE__ */ jsx(ArrowRight, { className: "size-4" })
        ] }),
        /* @__PURE__ */ jsx("a", { href: "#guarantee", className: "inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition", children: "Take the Pet Quiz" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground pt-2", children: [
        /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsx(Check, { className: "size-4 text-success" }),
          " Vet approved"
        ] }),
        /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsx(Check, { className: "size-4 text-success" }),
          " Free shipping $50+"
        ] }),
        /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsx(Check, { className: "size-4 text-success" }),
          " 30-day guarantee"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute -inset-6 rounded-full blur-3xl opacity-30", style: {
        background: "var(--gradient-primary)"
      } }),
      /* @__PURE__ */ jsx("img", { src: heroPets, alt: "Happy dog and cat", className: "relative w-full max-w-lg mx-auto", width: 1024, height: 1024 }),
      /* @__PURE__ */ jsxs("div", { className: "absolute top-6 -left-2 lg:left-6 bg-background rounded-2xl shadow-[var(--shadow-md)] p-3 flex items-center gap-2 animate-pulse", children: [
        /* @__PURE__ */ jsx("div", { className: "size-9 rounded-full bg-success/15 flex items-center justify-center", children: /* @__PURE__ */ jsx(Heart, { className: "size-4 text-success" }) }),
        /* @__PURE__ */ jsxs("div", { className: "text-xs", children: [
          /* @__PURE__ */ jsx("div", { className: "font-bold", children: "4.9/5" }),
          /* @__PURE__ */ jsx("div", { className: "text-muted-foreground", children: "12,400 reviews" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "absolute bottom-6 -right-2 lg:right-6 bg-background rounded-2xl shadow-[var(--shadow-md)] p-3 flex items-center gap-2", children: [
        /* @__PURE__ */ jsx("div", { className: "size-9 rounded-full bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsx(Award, { className: "size-4 text-primary" }) }),
        /* @__PURE__ */ jsxs("div", { className: "text-xs", children: [
          /* @__PURE__ */ jsx("div", { className: "font-bold", children: "Vet Certified" }),
          /* @__PURE__ */ jsx("div", { className: "text-muted-foreground", children: "AAFCO compliant" })
        ] })
      ] })
    ] })
  ] }) });
}
function TrustBar() {
  const logos = ["VETERINARY DIGEST", "PET WORLD", "DOGSTER", "MODERN CAT", "PAWS WEEKLY"];
  return /* @__PURE__ */ jsx("section", { className: "border-y border-border bg-muted/40", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 py-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-3", children: [
    /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold tracking-widest text-muted-foreground uppercase", children: "As featured in" }),
    logos.map((l) => /* @__PURE__ */ jsx("span", { className: "text-sm font-bold tracking-wider text-muted-foreground/70", children: l }, l))
  ] }) });
}
function ValueProps() {
  const items = [{
    icon: Truck,
    title: "Free Shipping $50+",
    desc: "Fast 2-day delivery on every order"
  }, {
    icon: ShieldCheck,
    title: "30-Day Guarantee",
    desc: "Love it or your money back"
  }, {
    icon: Award,
    title: "Vet Formulated",
    desc: "Backed by board-certified nutritionists"
  }, {
    icon: Heart,
    title: "1M+ Happy Pets",
    desc: "Real results, real reviews"
  }];
  return /* @__PURE__ */ jsx("section", { className: "mx-auto max-w-7xl px-4 py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4", children: items.map((i) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3 p-5 rounded-2xl bg-card border border-border hover:shadow-[var(--shadow-md)] transition", children: [
    /* @__PURE__ */ jsx("div", { className: "size-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsx(i.icon, { className: "size-5 text-primary" }) }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("div", { className: "font-semibold", children: i.title }),
      /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground", children: i.desc })
    ] })
  ] }, i.title)) });
}
function FlashSale() {
  const [time, setTime] = useState({
    h: 5,
    m: 42,
    s: 18
  });
  useEffect(() => {
    const id = setInterval(() => {
      setTime((t) => {
        let {
          h,
          m,
          s
        } = t;
        s--;
        if (s < 0) {
          s = 59;
          m--;
        }
        if (m < 0) {
          m = 59;
          h--;
        }
        if (h < 0) h = 0;
        return {
          h,
          m,
          s
        };
      });
    }, 1e3);
    return () => clearInterval(id);
  }, []);
  const pad = (n) => String(n).padStart(2, "0");
  return /* @__PURE__ */ jsx("section", { className: "mx-auto max-w-7xl px-4", children: /* @__PURE__ */ jsxs("div", { className: "rounded-3xl p-6 md:p-8 text-primary-foreground flex flex-col md:flex-row items-center justify-between gap-6 shadow-[var(--shadow-lg)]", style: {
    background: "var(--gradient-cta)"
  }, children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("div", { className: "text-xs font-bold uppercase tracking-widest opacity-90", children: "⚡ Flash Sale" }),
      /* @__PURE__ */ jsx("h3", { className: "text-2xl md:text-3xl font-bold mt-1", children: "Buy One, Get One 50% Off" }),
      /* @__PURE__ */ jsx("p", { className: "opacity-90 mt-1", children: "Mix & match across all bestsellers. Ends soon." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
      [["Hrs", pad(time.h)], ["Min", pad(time.m)], ["Sec", pad(time.s)]].map(([label, val]) => /* @__PURE__ */ jsxs("div", { className: "bg-background/15 backdrop-blur border border-background/20 rounded-xl px-3 py-2 text-center min-w-[64px]", children: [
        /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold tabular-nums", children: val }),
        /* @__PURE__ */ jsx("div", { className: "text-[10px] uppercase tracking-wider opacity-80", children: label })
      ] }, label)),
      /* @__PURE__ */ jsx("a", { href: "#shop", className: "ml-2 bg-background text-primary font-semibold px-5 py-3 rounded-full hover:bg-background/90 transition whitespace-nowrap", children: "Claim deal" })
    ] })
  ] }) });
}
function Bestsellers() {
  return /* @__PURE__ */ jsxs("section", { id: "bestsellers", className: "mx-auto max-w-7xl px-4 py-16", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-end justify-between mb-8", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "text-sm font-bold text-primary uppercase tracking-widest", children: "Bestsellers" }),
        /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold mt-2", children: "Loved by pets nationwide" })
      ] }),
      /* @__PURE__ */ jsxs("a", { href: "#shop", className: "hidden sm:inline-flex items-center gap-1 text-primary font-semibold hover:gap-2 transition-all", children: [
        "View all ",
        /* @__PURE__ */ jsx(ChevronRight, { className: "size-4" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { id: "shop", className: "grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6", children: products.map((p) => /* @__PURE__ */ jsxs("article", { className: "group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-[var(--shadow-lg)] hover:-translate-y-1 transition-all", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative aspect-square bg-muted overflow-hidden", children: [
        /* @__PURE__ */ jsx("span", { className: "absolute top-3 left-3 z-10 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full", children: p.tag }),
        /* @__PURE__ */ jsxs("span", { className: "absolute top-3 right-3 z-10 bg-destructive text-destructive-foreground text-[10px] font-bold px-2 py-1 rounded-full", children: [
          "-",
          Math.round((1 - p.price / p.old) * 100),
          "%"
        ] }),
        /* @__PURE__ */ jsx("img", { src: p.img, alt: p.name, loading: "lazy", width: 768, height: 768, className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "p-4 space-y-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1 text-xs", children: [
          /* @__PURE__ */ jsx(Star, { className: "size-3.5 fill-warning text-warning" }),
          /* @__PURE__ */ jsx("span", { className: "font-semibold", children: p.rating }),
          /* @__PURE__ */ jsxs("span", { className: "text-muted-foreground", children: [
            "(",
            p.reviews.toLocaleString(),
            ")"
          ] })
        ] }),
        /* @__PURE__ */ jsx("h3", { className: "font-semibold text-sm md:text-base line-clamp-2 min-h-[2.5rem]", children: p.name }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-baseline gap-2", children: [
          /* @__PURE__ */ jsxs("span", { className: "text-lg font-bold text-primary", children: [
            "$",
            p.price
          ] }),
          /* @__PURE__ */ jsxs("span", { className: "text-sm text-muted-foreground line-through", children: [
            "$",
            p.old
          ] })
        ] }),
        /* @__PURE__ */ jsxs("button", { className: "w-full mt-2 bg-primary text-primary-foreground font-semibold py-2.5 rounded-full hover:bg-primary-dark transition flex items-center justify-center gap-2", children: [
          /* @__PURE__ */ jsx(ShoppingBag, { className: "size-4" }),
          " Add to cart"
        ] })
      ] })
    ] }, p.name)) })
  ] });
}
function Guarantee() {
  return /* @__PURE__ */ jsx("section", { id: "guarantee", className: "bg-muted/40 border-y border-border", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 py-16 grid lg:grid-cols-2 gap-10 items-center", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsx("div", { className: "aspect-square max-w-md rounded-3xl overflow-hidden shadow-[var(--shadow-lg)]", children: /* @__PURE__ */ jsx("img", { src: heroPets2, alt: "Healthy pets", className: "w-full h-full object-cover", loading: "lazy" }) }),
      /* @__PURE__ */ jsxs("div", { className: "absolute -bottom-4 -right-4 bg-card rounded-2xl shadow-[var(--shadow-lg)] p-5 max-w-[200px]", children: [
        /* @__PURE__ */ jsx("div", { className: "text-4xl font-bold text-primary", children: "98%" }),
        /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground", children: "of pet parents see results in 30 days" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsx("div", { className: "text-sm font-bold text-primary uppercase tracking-widest", children: "Why Pawfectreats" }),
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold", children: "Science-backed nutrition, honest ingredients" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-lg", children: "Every recipe is formulated by veterinary nutritionists and made with real, traceable ingredients — no fillers, no by-products, no compromise." }),
      /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: ["Formulated by board-certified veterinarians", "Real protein as the #1 ingredient", "No artificial colors, flavors, or preservatives", "Sustainably sourced & made in the USA"].map((f) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
        /* @__PURE__ */ jsx("span", { className: "size-6 rounded-full bg-success/15 flex items-center justify-center shrink-0 mt-0.5", children: /* @__PURE__ */ jsx(Check, { className: "size-3.5 text-success" }) }),
        /* @__PURE__ */ jsx("span", { children: f })
      ] }, f)) }),
      /* @__PURE__ */ jsxs("a", { href: "#shop", className: "inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-primary-foreground shadow-[var(--shadow-md)] transition", style: {
        background: "var(--gradient-cta)"
      }, children: [
        "Try risk-free for 30 days ",
        /* @__PURE__ */ jsx(ArrowRight, { className: "size-4" })
      ] })
    ] })
  ] }) });
}
function Testimonials() {
  const reviews = [{
    name: "Lauren S.",
    pet: "Bella, Golden Retriever",
    text: "Bella's coat has never looked better. Within 3 weeks, her energy was through the roof — our vet noticed immediately.",
    rating: 5
  }, {
    name: "Michael A.",
    pet: "Oliver, Maine Coon",
    text: "We tried 5 brands before Pawfectreats. This is the only one Oliver actually finishes. Worth every penny.",
    rating: 5
  }, {
    name: "Emily J.",
    pet: "Max & Luna",
    text: "Eco-friendly packaging and ingredients I can pronounce. Free shipping is the cherry on top. Highly recommend!",
    rating: 5
  }];
  return /* @__PURE__ */ jsxs("section", { id: "reviews", className: "mx-auto max-w-7xl px-4 py-16", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-12 space-y-3", children: [
      /* @__PURE__ */ jsx("div", { className: "text-sm font-bold text-primary uppercase tracking-widest", children: "Reviews" }),
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold", children: "Pet parents love us. So do their pets." }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-2", children: [
        /* @__PURE__ */ jsx("div", { className: "flex", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsx(Star, { className: "size-5 fill-warning text-warning" }, i)) }),
        /* @__PURE__ */ jsx("span", { className: "font-bold", children: "4.9/5" }),
        /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "· 12,400+ verified reviews" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-6", children: reviews.map((r) => /* @__PURE__ */ jsxs("figure", { className: "bg-card border border-border rounded-2xl p-6 hover:shadow-[var(--shadow-md)] transition", children: [
      /* @__PURE__ */ jsx("div", { className: "flex mb-3", children: [...Array(r.rating)].map((_, i) => /* @__PURE__ */ jsx(Star, { className: "size-4 fill-warning text-warning" }, i)) }),
      /* @__PURE__ */ jsxs("blockquote", { className: "text-foreground/90 leading-relaxed", children: [
        '"',
        r.text,
        '"'
      ] }),
      /* @__PURE__ */ jsxs("figcaption", { className: "mt-5 pt-5 border-t border-border", children: [
        /* @__PURE__ */ jsx("div", { className: "font-semibold", children: r.name }),
        /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground", children: r.pet })
      ] })
    ] }, r.name)) })
  ] });
}
function NewsletterCTA() {
  return /* @__PURE__ */ jsx("section", { className: "mx-auto max-w-7xl px-4 pb-16", children: /* @__PURE__ */ jsxs("div", { className: "rounded-3xl p-8 md:p-12 text-center text-primary-foreground shadow-[var(--shadow-lg)]", style: {
    background: "var(--gradient-cta)"
  }, children: [
    /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold", children: "Get 15% off your first order" }),
    /* @__PURE__ */ jsx("p", { className: "mt-3 opacity-90 max-w-lg mx-auto", children: "Join 100,000+ pet parents getting nutrition tips, exclusive deals, and new product drops first." }),
    /* @__PURE__ */ jsxs("form", { className: "mt-6 max-w-md mx-auto flex gap-2", onSubmit: (e) => e.preventDefault(), children: [
      /* @__PURE__ */ jsx("input", { type: "email", required: true, placeholder: "your@email.com", className: "flex-1 px-5 py-3.5 rounded-full text-foreground bg-background outline-none focus:ring-2 focus:ring-background/40" }),
      /* @__PURE__ */ jsx("button", { className: "bg-primary-dark hover:bg-foreground transition px-6 py-3.5 rounded-full font-semibold whitespace-nowrap", children: "Claim 15%" })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "text-xs opacity-75 mt-3", children: "No spam. Unsubscribe anytime." })
  ] }) });
}
function Footer() {
  return /* @__PURE__ */ jsxs("footer", { className: "bg-primary-dark text-primary-foreground", children: [
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("img", { src: logo, alt: "Pawfectreats", className: "h-8 w-auto bg-background rounded-lg p-1.5" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm opacity-80 mt-4", children: "Premium pet food and supplements for the healthy growth of your pets." })
      ] }),
      [{
        title: "Shop",
        links: ["Dog Food", "Cat Food", "Treats", "Supplements"]
      }, {
        title: "Support",
        links: ["My Account", "Order Tracking", "FAQ", "Contact Us"]
      }, {
        title: "Company",
        links: ["About Us", "Our Vets", "Sustainability", "Reviews"]
      }].map((c) => /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "font-bold mb-3", children: c.title }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-2 text-sm opacity-80", children: c.links.map((l) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "hover:opacity-100 hover:underline", children: l }) }, l)) })
      ] }, c.title))
    ] }),
    /* @__PURE__ */ jsx("div", { className: "border-t border-background/15", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 py-5 flex flex-col sm:flex-row justify-between gap-2 text-xs opacity-75", children: [
      /* @__PURE__ */ jsx("div", { children: "© 2026 Pawfectreats. All rights reserved." }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
        /* @__PURE__ */ jsx("a", { href: "#", children: "Privacy" }),
        /* @__PURE__ */ jsx("a", { href: "#", children: "Terms" }),
        /* @__PURE__ */ jsx("a", { href: "#", children: "Shipping" })
      ] })
    ] }) })
  ] });
}
export {
  Index as component
};
