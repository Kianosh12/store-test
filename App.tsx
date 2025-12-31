import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  Search, 
  ShoppingBag, 
  User, 
  Sparkles, 
  MoveRight, 
  Zap, 
  ShieldCheck, 
  Wind,
  Instagram,
  Twitter,
  Linkedin
} from 'lucide-react';
import { Product } from './types';
import { ProductCard } from './components/ProductCard';
import { AiStylist } from './components/AiStylist';

const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "فانتوم رانر X1",
    price: "۳,۵۰۰,۰۰۰",
    category: "رانینگ حرفه‌ای",
    image: "https://picsum.photos/seed/shoe1/600/400",
    tag: "جدید"
  },
  {
    id: 2,
    name: "آرکان اسلاید",
    price: "۲,۸۰۰,۰۰۰",
    category: "روزمره / استایل",
    image: "https://picsum.photos/seed/shoe22/600/400",
    tag: "پرفروش"
  },
  {
    id: 3,
    name: "اسکای واکر پرو",
    price: "۴,۲۰۰,۰۰۰",
    category: "بسکتبال",
    image: "https://picsum.photos/seed/shoe8/600/400"
  },
  {
    id: 4,
    name: "ترا پالس",
    price: "۳,۱۰۰,۰۰۰",
    category: "طبیعت گردی",
    image: "https://picsum.photos/seed/shoe4/600/400",
    tag: "مقاوم"
  }
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAiOpen, setIsAiOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-white overflow-x-hidden selection:bg-purple-500 selection:text-white">
      
      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-40 transition-all duration-300 border-b ${isScrolled ? 'bg-zinc-950/80 backdrop-blur-md border-zinc-800 py-3' : 'bg-transparent border-transparent py-6'}`}>
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <button className="md:hidden p-2 text-white"><Menu size={24} /></button>
            <div className="text-2xl font-black tracking-tighter italic bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              AIRSTRIDE
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <a href="#" className="hover:text-white transition">مردانه</a>
            <a href="#" className="hover:text-white transition">زنانه</a>
            <a href="#" className="hover:text-white transition">کالکشن جدید</a>
            <a href="#" className="hover:text-white transition">تخفیف‌ها</a>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsAiOpen(true)}
              className="hidden md:flex items-center gap-2 bg-purple-600/20 hover:bg-purple-600 text-purple-400 hover:text-white px-3 py-1.5 rounded-full text-xs font-bold transition-all border border-purple-500/30"
            >
              <Sparkles size={14} />
              مشاور هوشمند
            </button>
            <button className="p-2 hover:bg-zinc-800 rounded-full transition"><Search size={20} /></button>
            <button className="p-2 hover:bg-zinc-800 rounded-full transition"><User size={20} /></button>
            <div className="relative">
              <button className="p-2 hover:bg-zinc-800 rounded-full transition"><ShoppingBag size={20} /></button>
              <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-purple-500 rounded-full border-2 border-zinc-950"></span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-zinc-950 to-zinc-950 -z-10" />
        
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 z-10 order-2 md:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs text-zinc-400">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              کالکشن تابستان ۲۰۲۵ موجود شد
            </div>
            <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tight">
              فراتر از <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-purple-500 to-blue-500">
                محدودیت‌ها
              </span> بدوید.
            </h1>
            <p className="text-zinc-400 text-lg md:text-xl max-w-lg leading-relaxed">
              تلفیقی از مهندسی دقیق و طراحی مدرن. کفش‌هایی که برای شکستن رکوردها و تسخیر خیابان‌ها ساخته شده‌اند.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-zinc-200 transition flex items-center justify-center gap-2">
                خرید کالکشن
                <MoveRight size={18} className="rotate-180" />
              </button>
              <button 
                onClick={() => setIsAiOpen(true)}
                className="bg-zinc-900/50 backdrop-blur border border-zinc-800 text-white px-8 py-4 rounded-full font-bold hover:bg-zinc-800 transition flex items-center justify-center gap-2"
              >
                <Sparkles size={18} className="text-purple-500" />
                کمک برای انتخاب
              </button>
            </div>
          </div>
          
          <div className="relative order-1 md:order-2">
             {/* Abstract background shapes */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-purple-600/10 blur-3xl rounded-full" />
            <img 
              src="https://picsum.photos/seed/hero-shoe-modern/800/800" 
              alt="Hero Shoe" 
              className="relative w-full z-10 drop-shadow-2xl hover:scale-105 transition duration-700 animate-[float_6s_ease-in-out_infinite]"
              style={{ borderRadius: '40px' }}
            />
          </div>
        </div>
      </section>

      {/* Features Stripe */}
      <div className="border-y border-zinc-900 bg-zinc-950/50 backdrop-blur">
        <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center gap-4 p-4 rounded-2xl hover:bg-zinc-900/50 transition">
            <div className="p-3 bg-zinc-900 rounded-xl text-purple-500"><Zap size={24} /></div>
            <div>
              <h4 className="font-bold text-lg">تکنولوژی فوم فعال</h4>
              <p className="text-zinc-500 text-sm">بازگشت انرژی در هر قدم</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 rounded-2xl hover:bg-zinc-900/50 transition">
            <div className="p-3 bg-zinc-900 rounded-xl text-blue-500"><Wind size={24} /></div>
            <div>
              <h4 className="font-bold text-lg">تهویه ۳۶۰ درجه</h4>
              <p className="text-zinc-500 text-sm">خنک ماندن پا در هر شرایطی</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 rounded-2xl hover:bg-zinc-900/50 transition">
            <div className="p-3 bg-zinc-900 rounded-xl text-green-500"><ShieldCheck size={24} /></div>
            <div>
              <h4 className="font-bold text-lg">گارانتی تعویض</h4>
              <p className="text-zinc-500 text-sm">تضمین کیفیت ۱۲ ماهه</p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <section className="py-24 px-4 container mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-5xl font-black mb-4">برگزیده‌های فصل</h2>
            <p className="text-zinc-400">بهترین انتخاب‌ها برای عملکرد بهتر</p>
          </div>
          <a href="#" className="hidden md:flex items-center gap-2 text-zinc-400 hover:text-white transition font-medium">
             مشاهده همه
             <MoveRight size={16} className="rotate-180" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <button className="text-zinc-400 hover:text-white text-sm font-bold border-b border-zinc-700 pb-1">
            مشاهده همه محصولات
          </button>
        </div>
      </section>

      {/* Big Banner */}
      <section className="py-12 px-4 container mx-auto">
        <div className="relative rounded-[3rem] overflow-hidden min-h-[500px] flex items-center bg-zinc-900">
           <img 
            src="https://picsum.photos/seed/runner/1920/1080" 
            alt="Runner" 
            className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay"
           />
           <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/60 to-transparent" />
           
           <div className="relative z-10 p-8 md:p-16 max-w-2xl">
             <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
               استایل خود را <br />
               <span className="text-purple-500">بازتعریف</span> کنید.
             </h2>
             <p className="text-zinc-300 text-lg mb-8 leading-relaxed">
               نسل جدید کتونی‌های خیابانی با طراحی ارگونومیک و متریال‌های بازیافتی. راحتی که تا به حال تجربه نکرده‌اید.
             </p>
             <button className="bg-white text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition duration-300">
               دیدن کالکشن جدید
             </button>
           </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 border-t border-zinc-900 bg-zinc-950">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">به باشگاه برندگان بپیوندید</h2>
          <p className="text-zinc-400 mb-8">
            برای دریافت آخرین اخبار، تخفیف‌های ویژه و دسترسی زودتر به محصولات جدید ایمیل خود را وارد کنید.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="ایمیل شما..." 
              className="flex-1 bg-zinc-900 border border-zinc-800 text-white rounded-full px-6 py-4 focus:outline-none focus:border-purple-500 transition"
            />
            <button className="bg-purple-600 hover:bg-purple-500 text-white px-8 py-4 rounded-full font-bold transition">
              عضویت
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-zinc-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-black italic mb-6 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">AIRSTRIDE</h3>
              <p className="text-zinc-500 text-sm leading-7">
                ما در AirStride به دنبال خلق بهترین تجربه قدم زدن برای شما هستیم. کیفیت، نوآوری و استایل، امضای کار ماست.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-6">دسترسی سریع</h4>
              <ul className="space-y-3 text-sm text-zinc-500">
                <li><a href="#" className="hover:text-purple-400 transition">درباره ما</a></li>
                <li><a href="#" className="hover:text-purple-400 transition">تماس با ما</a></li>
                <li><a href="#" className="hover:text-purple-400 transition">سوالات متداول</a></li>
                <li><a href="#" className="hover:text-purple-400 transition">رهگیری سفارش</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-6">محصولات</h4>
              <ul className="space-y-3 text-sm text-zinc-500">
                <li><a href="#" className="hover:text-purple-400 transition">مردانه</a></li>
                <li><a href="#" className="hover:text-purple-400 transition">زنانه</a></li>
                <li><a href="#" className="hover:text-purple-400 transition">بچگانه</a></li>
                <li><a href="#" className="hover:text-purple-400 transition">لوازم جانبی</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-6">شبکه‌های اجتماعی</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:bg-purple-600 hover:text-white transition"><Instagram size={18} /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:bg-blue-500 hover:text-white transition"><Twitter size={18} /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:bg-blue-700 hover:text-white transition"><Linkedin size={18} /></a>
              </div>
            </div>
          </div>
          <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-600 gap-4">
            <p>© ۲۰۲۵ تمامی حقوق برای AirStride محفوظ است.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-zinc-400">حریم خصوصی</a>
              <a href="#" className="hover:text-zinc-400">قوانین و مقررات</a>
            </div>
          </div>
        </div>
      </footer>

      {/* AI Stylist Modal */}
      <AiStylist isOpen={isAiOpen} onClose={() => setIsAiOpen(false)} />
      
      {/* Mobile Floating AI Button */}
      <button 
        onClick={() => setIsAiOpen(true)}
        className="md:hidden fixed bottom-6 right-6 z-40 bg-purple-600 text-white p-4 rounded-full shadow-2xl shadow-purple-900/50 hover:scale-110 transition"
      >
        <Sparkles size={24} />
      </button>
    </div>
  );
}