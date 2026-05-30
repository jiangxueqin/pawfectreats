import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ShoppingBag, Star, Truck, ShieldCheck, Heart, Award,
  Check, ArrowRight, Search, User, Menu, ChevronRight, Sparkles,
} from "lucide-react";
import logo from "@/assets/pawfectreats-logo.webp";
import logoTp from "@/assets/pawfectreats-logo-tp.png";
import heroPets from "@/assets/hero-pets.png";
import heroPets2 from "@/assets/hero-pets.webp";
import catFood from "@/assets/product-cat-food.webp";
import dogFood from "@/assets/product-dog-food.webp";
import kittenFood from "@/assets/product-kitten-food.webp";
import treats from "@/assets/product-treats.webp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pawfectreats — Premium Pet Food, Vet-Approved & Loved by Pets" },
      { name: "description", content: "Scientifically formulated pet food and supplements for healthy growth, energy, and longevity. Free shipping on orders over $50. 30-day money-back guarantee." },
      { property: "og:title", content: "Pawfectreats — Premium Pet Food" },
      { property: "og:description", content: "Vet-approved nutrition trusted by 250,000+ pet parents. Free shipping over $50." },
    ],
  }),
  component: Index,
});

const products = [
  { name: "Blue Buffalo Wilderness Pate Variety Pack Duck, Chicken & Salmon Grain-Free Cat Canned Food, 3-oz, case of 12", tag: "Bestseller", img: catFood, price: 9.85, old: 12.88, rating: 4.9, reviews: 2841 },
  { name: "Royal Canin Size Health Nutrition Small Indoor Puppy Dry Dog Food, 2.5-lb bag", tag: "New", img: dogFood, price: 14.29, old: 22.99, rating: 4.8, reviews: 1632 },
  { name: "Blue Buffalo Wilderness High Protein Natural Grain-Free Chicken Kitten Dry Cat Food, 5-lb bag", tag: "Top Rated", img: kittenFood, price: 6.00, old: 9.00, rating: 4.9, reviews: 3920 },
  { name: "Friskies Party Mix Natural Yums Complete & Balanced Salmon Crunchy Natural Cat Treats, 20-oz tub", tag: "Vet Pick", img: treats, price: 2.53, old: 3.89, rating: 4.7, reviews: 1284 },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnnouncementBar />
      <Header />
      <Hero />
      <TrustBar />
      <ValueProps />
      <FlashSale />
      <Bestsellers />
      <Guarantee />
      <Testimonials />
      <NewsletterCTA />
      <Footer />
    </div>
  );
}

function AnnouncementBar() {
  return (
    <div className="bg-primary-dark text-primary-foreground text-xs sm:text-sm">
      <div className="mx-auto max-w-7xl px-4 py-2 flex items-center justify-center gap-2">
        <Sparkles className="size-3.5" />
        <span className="font-medium">Free shipping on orders $50+ · 30-day money-back guarantee</span>
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 bg-background/90 backdrop-blur border-b border-border">
      <div className="mx-auto max-w-7xl px-4 h-16 flex items-center justify-between gap-4">
        <div className="flex items-center gap-8">
          <img src={logoTp} alt="Pawfectreats" className="h-8 w-auto" />
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
            <a href="#shop" className="hover:text-primary transition">Shop</a>
            <a href="#bestsellers" className="hover:text-primary transition">Bestsellers</a>
            <a href="#guarantee" className="hover:text-primary transition">Why Us</a>
            <a href="#reviews" className="hover:text-primary transition">Reviews</a>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <button aria-label="Search" className="p-2 hover:bg-muted rounded-full"><Search className="size-5" /></button>
          <button aria-label="Account" className="p-2 hover:bg-muted rounded-full hidden sm:inline-flex"><User className="size-5" /></button>
          <button aria-label="Cart" className="relative p-2 hover:bg-muted rounded-full">
            <ShoppingBag className="size-5" />
            <span className="absolute -top-0.5 -right-0.5 bg-primary text-primary-foreground text-[10px] font-bold rounded-full size-4 flex items-center justify-center">3</span>
          </button>
          <button aria-label="Menu" className="p-2 hover:bg-muted rounded-full lg:hidden"><Menu className="size-5" /></button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      <div className="mx-auto max-w-7xl px-4 py-12 lg:py-20 grid lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 bg-background/80 border border-border rounded-full px-3 py-1.5 text-xs font-semibold">
            <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} className="size-3 fill-warning text-warning" />)}</div>
            <span>Trusted by 250,000+ pet parents</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
            Nutrition your pet will <span className="text-primary">love</span> — and thrive on.
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl">
            Vet-formulated food and supplements that support healthy growth, energy, and longevity. Real ingredients. Real results — guaranteed.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#shop" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-primary-foreground shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-glow)] transition" style={{ background: "var(--gradient-cta)" }}>
              Shop Now — Save 20% <ArrowRight className="size-4" />
            </a>
            <a href="#guarantee" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition">
              Take the Pet Quiz
            </a>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground pt-2">
            <span className="inline-flex items-center gap-1.5"><Check className="size-4 text-success" /> Vet approved</span>
            <span className="inline-flex items-center gap-1.5"><Check className="size-4 text-success" /> Free shipping $50+</span>
            <span className="inline-flex items-center gap-1.5"><Check className="size-4 text-success" /> 30-day guarantee</span>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 rounded-full blur-3xl opacity-30" style={{ background: "var(--gradient-primary)" }} />
          <img src={heroPets} alt="Happy dog and cat" className="relative w-full max-w-lg mx-auto" width={1024} height={1024} />
          <div className="absolute top-6 -left-2 lg:left-6 bg-background rounded-2xl shadow-[var(--shadow-md)] p-3 flex items-center gap-2 animate-pulse">
            <div className="size-9 rounded-full bg-success/15 flex items-center justify-center"><Heart className="size-4 text-success" /></div>
            <div className="text-xs"><div className="font-bold">4.9/5</div><div className="text-muted-foreground">12,400 reviews</div></div>
          </div>
          <div className="absolute bottom-6 -right-2 lg:right-6 bg-background rounded-2xl shadow-[var(--shadow-md)] p-3 flex items-center gap-2">
            <div className="size-9 rounded-full bg-primary/10 flex items-center justify-center"><Award className="size-4 text-primary" /></div>
            <div className="text-xs"><div className="font-bold">Vet Certified</div><div className="text-muted-foreground">AAFCO compliant</div></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  const logos = ["VETERINARY DIGEST", "PET WORLD", "DOGSTER", "MODERN CAT", "PAWS WEEKLY"];
  return (
    <section className="border-y border-border bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 py-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
        <span className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">As featured in</span>
        {logos.map((l) => (
          <span key={l} className="text-sm font-bold tracking-wider text-muted-foreground/70">{l}</span>
        ))}
      </div>
    </section>
  );
}

function ValueProps() {
  const items = [
    { icon: Truck, title: "Free Shipping $50+", desc: "Fast 2-day delivery on every order" },
    { icon: ShieldCheck, title: "30-Day Guarantee", desc: "Love it or your money back" },
    { icon: Award, title: "Vet Formulated", desc: "Backed by board-certified nutritionists" },
    { icon: Heart, title: "1M+ Happy Pets", desc: "Real results, real reviews" },
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {items.map((i) => (
        <div key={i.title} className="flex items-start gap-3 p-5 rounded-2xl bg-card border border-border hover:shadow-[var(--shadow-md)] transition">
          <div className="size-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
            <i.icon className="size-5 text-primary" />
          </div>
          <div>
            <div className="font-semibold">{i.title}</div>
            <div className="text-sm text-muted-foreground">{i.desc}</div>
          </div>
        </div>
      ))}
    </section>
  );
}

function FlashSale() {
  const [time, setTime] = useState({ h: 5, m: 42, s: 18 });
  useEffect(() => {
    const id = setInterval(() => {
      setTime((t) => {
        let { h, m, s } = t;
        s--; if (s < 0) { s = 59; m--; } if (m < 0) { m = 59; h--; } if (h < 0) h = 0;
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(id);
  }, []);
  const pad = (n: number) => String(n).padStart(2, "0");
  return (
    <section className="mx-auto max-w-7xl px-4">
      <div className="rounded-3xl p-6 md:p-8 text-primary-foreground flex flex-col md:flex-row items-center justify-between gap-6 shadow-[var(--shadow-lg)]" style={{ background: "var(--gradient-cta)" }}>
        <div>
          <div className="text-xs font-bold uppercase tracking-widest opacity-90">⚡ Flash Sale</div>
          <h3 className="text-2xl md:text-3xl font-bold mt-1">Buy One, Get One 50% Off</h3>
          <p className="opacity-90 mt-1">Mix & match across all bestsellers. Ends soon.</p>
        </div>
        <div className="flex items-center gap-3">
          {[["Hrs", pad(time.h)], ["Min", pad(time.m)], ["Sec", pad(time.s)]].map(([label, val]) => (
            <div key={label} className="bg-background/15 backdrop-blur border border-background/20 rounded-xl px-3 py-2 text-center min-w-[64px]">
              <div className="text-2xl font-bold tabular-nums">{val}</div>
              <div className="text-[10px] uppercase tracking-wider opacity-80">{label}</div>
            </div>
          ))}
          <a href="#shop" className="ml-2 bg-background text-primary font-semibold px-5 py-3 rounded-full hover:bg-background/90 transition whitespace-nowrap">Claim deal</a>
        </div>
      </div>
    </section>
  );
}

function Bestsellers() {
  return (
    <section id="bestsellers" className="mx-auto max-w-7xl px-4 py-16">
      <div className="flex items-end justify-between mb-8">
        <div>
          <div className="text-sm font-bold text-primary uppercase tracking-widest">Bestsellers</div>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Loved by pets nationwide</h2>
        </div>
        <a href="#shop" className="hidden sm:inline-flex items-center gap-1 text-primary font-semibold hover:gap-2 transition-all">View all <ChevronRight className="size-4" /></a>
      </div>
      <div id="shop" className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {products.map((p) => (
          <article key={p.name} className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-[var(--shadow-lg)] hover:-translate-y-1 transition-all">
            <div className="relative aspect-square bg-muted overflow-hidden">
              <span className="absolute top-3 left-3 z-10 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full">{p.tag}</span>
              <span className="absolute top-3 right-3 z-10 bg-destructive text-destructive-foreground text-[10px] font-bold px-2 py-1 rounded-full">-{Math.round((1 - p.price / p.old) * 100)}%</span>
              <img src={p.img} alt={p.name} loading="lazy" width={768} height={768} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-4 space-y-2">
              <div className="flex items-center gap-1 text-xs">
                <Star className="size-3.5 fill-warning text-warning" />
                <span className="font-semibold">{p.rating}</span>
                <span className="text-muted-foreground">({p.reviews.toLocaleString()})</span>
              </div>
              <h3 className="font-semibold text-sm md:text-base line-clamp-2 min-h-[2.5rem]">{p.name}</h3>
              <div className="flex items-baseline gap-2">
                <span className="text-lg font-bold text-primary">${p.price}</span>
                <span className="text-sm text-muted-foreground line-through">${p.old}</span>
              </div>
              <button className="w-full mt-2 bg-primary text-primary-foreground font-semibold py-2.5 rounded-full hover:bg-primary-dark transition flex items-center justify-center gap-2">
                <ShoppingBag className="size-4" /> Add to cart
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Guarantee() {
  return (
    <section id="guarantee" className="bg-muted/40 border-y border-border">
      <div className="mx-auto max-w-7xl px-4 py-16 grid lg:grid-cols-2 gap-10 items-center">
        <div className="relative">
          <div className="aspect-square max-w-md rounded-3xl overflow-hidden shadow-[var(--shadow-lg)]">
            <img src={heroPets2} alt="Healthy pets" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="absolute -bottom-4 -right-4 bg-card rounded-2xl shadow-[var(--shadow-lg)] p-5 max-w-[200px]">
            <div className="text-4xl font-bold text-primary">98%</div>
            <div className="text-sm text-muted-foreground">of pet parents see results in 30 days</div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="text-sm font-bold text-primary uppercase tracking-widest">Why Pawfectreats</div>
          <h2 className="text-3xl md:text-4xl font-bold">Science-backed nutrition, honest ingredients</h2>
          <p className="text-muted-foreground text-lg">Every recipe is formulated by veterinary nutritionists and made with real, traceable ingredients — no fillers, no by-products, no compromise.</p>
          <ul className="space-y-3">
            {[
              "Formulated by board-certified veterinarians",
              "Real protein as the #1 ingredient",
              "No artificial colors, flavors, or preservatives",
              "Sustainably sourced & made in the USA",
            ].map((f) => (
              <li key={f} className="flex items-start gap-3">
                <span className="size-6 rounded-full bg-success/15 flex items-center justify-center shrink-0 mt-0.5"><Check className="size-3.5 text-success" /></span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a href="#shop" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-primary-foreground shadow-[var(--shadow-md)] transition" style={{ background: "var(--gradient-cta)" }}>
            Try risk-free for 30 days <ArrowRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const reviews = [
    { name: "Lauren S.", pet: "Bella, Golden Retriever", text: "Bella's coat has never looked better. Within 3 weeks, her energy was through the roof — our vet noticed immediately.", rating: 5 },
    { name: "Michael A.", pet: "Oliver, Maine Coon", text: "We tried 5 brands before Pawfectreats. This is the only one Oliver actually finishes. Worth every penny.", rating: 5 },
    { name: "Emily J.", pet: "Max & Luna", text: "Eco-friendly packaging and ingredients I can pronounce. Free shipping is the cherry on top. Highly recommend!", rating: 5 },
  ];
  return (
    <section id="reviews" className="mx-auto max-w-7xl px-4 py-16">
      <div className="text-center mb-12 space-y-3">
        <div className="text-sm font-bold text-primary uppercase tracking-widest">Reviews</div>
        <h2 className="text-3xl md:text-4xl font-bold">Pet parents love us. So do their pets.</h2>
        <div className="flex items-center justify-center gap-2">
          <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} className="size-5 fill-warning text-warning" />)}</div>
          <span className="font-bold">4.9/5</span>
          <span className="text-muted-foreground">· 12,400+ verified reviews</span>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {reviews.map((r) => (
          <figure key={r.name} className="bg-card border border-border rounded-2xl p-6 hover:shadow-[var(--shadow-md)] transition">
            <div className="flex mb-3">{[...Array(r.rating)].map((_, i) => <Star key={i} className="size-4 fill-warning text-warning" />)}</div>
            <blockquote className="text-foreground/90 leading-relaxed">"{r.text}"</blockquote>
            <figcaption className="mt-5 pt-5 border-t border-border">
              <div className="font-semibold">{r.name}</div>
              <div className="text-sm text-muted-foreground">{r.pet}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function NewsletterCTA() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-16">
      <div className="rounded-3xl p-8 md:p-12 text-center text-primary-foreground shadow-[var(--shadow-lg)]" style={{ background: "var(--gradient-cta)" }}>
        <h2 className="text-3xl md:text-4xl font-bold">Get 15% off your first order</h2>
        <p className="mt-3 opacity-90 max-w-lg mx-auto">Join 100,000+ pet parents getting nutrition tips, exclusive deals, and new product drops first.</p>
        <form className="mt-6 max-w-md mx-auto flex gap-2" onSubmit={(e) => e.preventDefault()}>
          <input type="email" required placeholder="your@email.com" className="flex-1 px-5 py-3.5 rounded-full text-foreground bg-background outline-none focus:ring-2 focus:ring-background/40" />
          <button className="bg-primary-dark hover:bg-foreground transition px-6 py-3.5 rounded-full font-semibold whitespace-nowrap">Claim 15%</button>
        </form>
        <p className="text-xs opacity-75 mt-3">No spam. Unsubscribe anytime.</p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-primary-dark text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <img src={logo} alt="Pawfectreats" className="h-8 w-auto bg-background rounded-lg p-1.5" />
          <p className="text-sm opacity-80 mt-4">Premium pet food and supplements for the healthy growth of your pets.</p>
        </div>
        {[
          { title: "Shop", links: ["Dog Food", "Cat Food", "Treats", "Supplements"] },
          { title: "Support", links: ["My Account", "Order Tracking", "FAQ", "Contact Us"] },
          { title: "Company", links: ["About Us", "Our Vets", "Sustainability", "Reviews"] },
        ].map((c) => (
          <div key={c.title}>
            <div className="font-bold mb-3">{c.title}</div>
            <ul className="space-y-2 text-sm opacity-80">
              {c.links.map((l) => <li key={l}><a href="#" className="hover:opacity-100 hover:underline">{l}</a></li>)}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-background/15">
        <div className="mx-auto max-w-7xl px-4 py-5 flex flex-col sm:flex-row justify-between gap-2 text-xs opacity-75">
          <div>© 2026 Pawfectreats. All rights reserved.</div>
          <div className="flex gap-4"><a href="#">Privacy</a><a href="#">Terms</a><a href="#">Shipping</a></div>
        </div>
      </div>
    </footer>
  );
}
