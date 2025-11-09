import Link from "next/link";
import {
  BarChart3,
  Bot,
  CheckCircle2,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";

const heroHighlights = [
  "دقة كشف تتجاوز ٩٨٪",
  "تكامل سريع عبر واجهة API مرنة",
  "تقارير فورية وواجهة عربية بالكامل",
];

const featureCards = [
  {
    title: "ذكاء اصطناعي متعدد الطبقات",
    description:
      "نماذج تعلم آلي مُدرّبة على أكثر من ٢٥ مليون رسالة تتيح لك تمييز الأنماط المشبوهة في ثوانٍ.",
    icon: Sparkles,
  },
  {
    title: "حماية فورية قابلة للتخصيص",
    description:
      "أنشئ سياساتك الخاصة، حدّد العتبات، واضبط حساسية المرشّح لكل قناة تواصل دون كتابة سطر كود إضافي.",
    icon: ShieldCheck,
  },
  {
    title: "لوحة تحكم موحّدة",
    description:
      "تابع نشاط الرسائل، الأداء اللحظي، ومؤشرات الجودة من شاشة واحدة مصممة خصيصاً لفِرق خدمة العملاء.",
    icon: BarChart3,
  },
];

const workflow = [
  {
    step: "اربط مصادر الرسائل",
    detail:
      "تكامل مباشر مع البريد الإلكتروني، منصات الدردشة الحية، وتطبيقات الدعم السحابي من خلال موصلات جاهزة.",
    icon: Workflow,
  },
  {
    step: "دع الذكاء الاصطناعي يعمل",
    detail:
      "تحليل سياقي، فهم للغة العربية، واكتشاف للهجمات المبنية على الروابط والصور في الوقت الفعلي.",
    icon: Bot,
  },
  {
    step: "استفد من التوصيات",
    detail:
      "توصيات آلية لإعادة التدريب، اقتراح ردود ذكية، وأتمتة لمسارات التصعيد بناءً على مستوى التهديد.",
    icon: Zap,
  },
];

const testimonials = [
  {
    name: "نهى العصيمي",
    role: "مديرة تجربة العملاء - منصة مدار",
    quote:
      "بعد اعتماد سبام انخفضت الرسائل المزعجة بنسبة ٨٧٪ خلال شهر واحد فقط، وأصبح الفريق يركّز على القضايا الحقيقية.",
  },
  {
    name: "علي السهلي",
    role: "رئيس التحول الرقمي - بنك الأفق",
    quote:
      "أفضل ما في سبام هو المرونة في بناء القواعد والقدرة على تدريب النموذج ببياناتنا الداخلية دون تعقيد.",
  },
];

const pricingPlans = [
  {
    name: "الأساسي",
    tagline: "لفرق دعم صغيرة تريد حماية فورية",
    price: "٣٩٩",
    benefits: [
      "٥٠ ألف رسالة شهرية",
      "واجهات API قياسية",
      "لوحة مؤشرات فورية",
      "تنبيهات عبر البريد",
    ],
    cta: "ابدأ التجربة المجانية",
  },
  {
    name: "المحترف",
    tagline: "للشركات المتنامية وفرق الأمان المتقدمة",
    price: "٩٧٩",
    benefits: [
      "٢٠٠ ألف رسالة شهرية",
      "نماذج مخصصة حسب القطاع",
      "دعم مباشر على مدار الساعة",
      "تكامل مع أدوات SIEM",
    ],
    highlighted: true,
    cta: "احجز جلسة إطلاق",
  },
  {
    name: "المؤسسات",
    tagline: "حلول قابلة للتوسّع مع الامتثال الكامل",
    price: "تواصل معنا",
    benefits: [
      "رسائل غير محدودة",
      "استضافة خاصة أو هجينة",
      "مدير نجاح مخصص",
      "تدريب ميداني للفريق",
    ],
    cta: "تحدث مع خبير",
  },
];

const faqs = [
  {
    question: "هل يدعم سبام اللغة العربية بالكامل؟",
    answer:
      "نعم، تم تدريب محرك التحليل اللغوي على لهجات عربية مختلفة مع دعم للغة الإنجليزية لتدفقات العمل المختلطة.",
  },
  {
    question: "كيف يمكنني دمج سبام مع أنظمة CRM الحالية؟",
    answer:
      "نوفر موصلات جاهزة لـ Zendesk وFreshdesk وSalesforce إضافة إلى واجهات REST وWebhooks لتكامل مخصص.",
  },
  {
    question: "هل يمكنني تدريب النموذج على بياناتي الخاصة؟",
    answer:
      "بالتأكيد، يدعم سبام استيراد مجموعات البيانات المجهولة لتكييف النموذج مع سياق عملك مع أدوات لإدارة الإصدارات.",
  },
  {
    question: "ما هي معايير الأمان والامتثال المتبعة؟",
    answer:
      "تم بناء المنصة وفق معايير ISO 27001 وتلتزم بضوابط SOC 2، مع تشفير للبيانات أثناء النقل والتخزين.",
  },
];

export default function Home() {
  return (
    <main className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-24 px-6 pb-24 pt-16 md:px-12 lg:px-20">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute right-0 top-36 h-72 w-72 rounded-full bg-pink-500/30 blur-3xl" />
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute bottom-16 left-12 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl" />
      </div>

      <header className="rounded-[36px] border border-white/10 bg-surface/80 p-10 shadow-[0_40px_80px_-40px_rgba(0,0,0,0.65)] backdrop-blur-xl md:p-16">
        <div className="flex flex-col gap-10 text-right">
          <span className="inline-block w-fit self-end rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-indigo-200 shadow-[0_20px_50px_-40px_rgba(99,102,241,0.9)]">
            سبام · الجيل الجديد من تصفية الرسائل
          </span>
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl font-semibold leading-snug text-white md:text-5xl lg:text-6xl">
              أوقف الرسائل المزعجة قبل أن تصل إلى عملائك
            </h1>
            <p className="text-lg leading-8 text-indigo-100 md:text-xl">
              سبام منصة ذكية تستخدم نماذج تعلم عميق مهيأة للغة العربية للكشف
              عن الرسائل غير المرغوب فيها في القنوات الرقمية المختلفة، مع
              تحكم كامل في السياسات وواجهة عربية سهلة.
            </p>
          </div>
          <div className="flex flex-col items-stretch gap-4 text-sm sm:flex-row sm:justify-end">
            <Link
              href="#pricing"
              className="inline-flex items-center justify-center rounded-full bg-indigo-500 px-6 py-3 font-medium text-white transition hover:bg-indigo-400"
            >
              اطلع على الباقات
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 font-medium text-white transition hover:border-indigo-300 hover:text-indigo-100"
            >
              شاهد جولة المنصة
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {heroHighlights.map((highlight) => (
              <div
                key={highlight}
                className="rounded-3xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-indigo-50 shadow-[0_20px_50px_-45px_rgba(99,102,241,0.9)]"
              >
                {highlight}
              </div>
            ))}
          </div>
        </div>
      </header>

      <section className="grid gap-6 md:grid-cols-3" id="features">
        {featureCards.map(({ title, description, icon: Icon }) => (
          <article
            key={title}
            className="group flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-surface/70 p-8 shadow-[0_30px_50px_-40px_rgba(15,23,42,0.75)] transition hover:-translate-y-1 hover:border-indigo-300/60"
          >
            <div className="flex flex-col gap-5">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-400/70 to-fuchsia-400/70 text-white shadow-lg">
                <Icon size={28} />
              </div>
              <h3 className="text-2xl font-semibold text-white">{title}</h3>
              <p className="text-sm leading-7 text-indigo-100/90">
                {description}
              </p>
            </div>
            <span className="mt-8 inline-flex items-center gap-2 text-xs font-medium text-indigo-200 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
              <CheckCircle2 size={16} />
              جاهز للتفعيل خلال دقائق
            </span>
          </article>
        ))}
      </section>

      <section className="grid gap-10 rounded-[32px] border border-white/10 bg-surface/50 p-10 shadow-[0_30px_60px_-45px_rgba(99,102,241,0.6)] backdrop-blur-xl md:grid-cols-[1.2fr_1fr] md:p-14">
        <div className="flex flex-col gap-6 text-right">
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            منهجية متكاملة للحماية الذكية
          </h2>
          <p className="text-base leading-8 text-indigo-100">
            صُممت سبام ليتم نشرها بسرعة في بيئات مختلفة، بدءاً من الشركات
            الناشئة وحتى المؤسسات المالية المعقدة. تتبع المنصة دورة عمل واضحة
            تمنحك رؤية كاملة على كل رسالة تمر عبر قنواتك.
          </p>
          <dl className="flex flex-col gap-6">
            {workflow.map(({ step, detail, icon: Icon }, index) => (
              <div
                key={step}
                className="flex gap-4 rounded-3xl border border-white/5 bg-white/5 p-5 shadow-[0_20px_45px_-40px_rgba(148,163,184,0.7)]"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-white shadow-lg">
                  <Icon size={22} />
                </div>
                <div className="flex flex-col gap-2 text-right">
                  <dt className="text-sm font-semibold text-white">
                    الخطوة {index + 1}: {step}
                  </dt>
                  <dd className="text-sm leading-7 text-indigo-100/90">
                    {detail}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
        <div className="flex flex-col justify-between gap-6 rounded-[28px] border border-indigo-400/40 bg-gradient-to-br from-indigo-600/40 to-fuchsia-500/30 p-8 text-white shadow-[0_50px_80px_-60px_rgba(168,85,247,0.8)]">
          <div>
            <h3 className="text-xl font-semibold">رؤى فورية قابلة للتنفيذ</h3>
            <p className="mt-4 text-sm leading-7 text-indigo-50/90">
              لوحة مراقبة تفاعلية تعرض مستوى التهديد لكل قناة، أسباب التصنيف،
              ونسب الدقة اليومية مع توصيات للتحسين الذاتي للنموذج.
            </p>
          </div>
          <div className="flex flex-col gap-4 text-sm text-indigo-50/90">
            <div className="flex justify-between rounded-2xl border border-white/10 bg-white/10 px-4 py-3">
              <span>مؤشر الهجمات المحظورة</span>
              <span className="font-semibold text-lime-200">+٢١٪</span>
            </div>
            <div className="flex justify-between rounded-2xl border border-white/10 bg-white/10 px-4 py-3">
              <span>الرسائل المصنفة بدقة</span>
              <span className="font-semibold text-lime-200">٩٨٫٤٪</span>
            </div>
            <div className="flex justify-between rounded-2xl border border-white/10 bg-white/10 px-4 py-3">
              <span>متوسط زمن الكشف</span>
              <span className="font-semibold text-lime-200">١٫٨ ثانية</span>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-8 md:grid-cols-2">
        {testimonials.map(({ name, role, quote }) => (
          <figure
            key={name}
            className="flex h-full flex-col justify-between gap-6 rounded-[28px] border border-white/10 bg-surface/70 p-8 shadow-[0_30px_55px_-50px_rgba(12,74,110,0.9)]"
          >
            <blockquote className="text-lg leading-9 text-indigo-100">
              “{quote}”
            </blockquote>
            <figcaption className="text-sm text-indigo-200">
              <div className="font-semibold text-white">{name}</div>
              <div>{role}</div>
            </figcaption>
          </figure>
        ))}
      </section>

      <section id="pricing" className="flex flex-col gap-10">
        <div className="text-right">
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            خطط تسعير مرنة تلائم حجم فريقك
          </h2>
          <p className="mt-4 text-base text-indigo-100">
            اختر الخطة المناسبة أو تواصل معنا للحصول على عرض مخصص مع التزام
            بعقود مستوى الخدمة وامتثال كامل للقطاعات الحساسة.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {pricingPlans.map(
            ({ name, tagline, price, benefits, cta, highlighted }) => (
              <article
                key={name}
                className={`flex h-full flex-col gap-6 rounded-[28px] border border-white/10 bg-surface/70 p-8 shadow-[0_30px_60px_-45px_rgba(49,46,129,0.8)] transition ${
                  highlighted
                    ? "border-indigo-300/70 bg-gradient-to-br from-indigo-500/30 to-slate-900/80 text-white"
                    : ""
                }`}
              >
                <div className="flex flex-col gap-3 text-right">
                  <h3 className="text-2xl font-semibold">{name}</h3>
                  <p className="text-sm text-indigo-100/80">{tagline}</p>
                </div>
                <div className="text-right text-3xl font-semibold text-white">
                  {price === "تواصل معنا" ? (
                    <span className="text-2xl">{price}</span>
                  ) : (
                    <>
                      <span>{price}</span>
                      <span className="text-base text-indigo-200">
                        {" "}
                        ريال / شهر
                      </span>
                    </>
                  )}
                </div>
                <ul className="flex flex-1 flex-col gap-4 text-sm text-indigo-100/90">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2">
                      <CheckCircle2
                        className="mt-1 shrink-0 text-lime-200"
                        size={18}
                      />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="#contact"
                  className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition ${
                    highlighted
                      ? "bg-white text-indigo-600 hover:bg-indigo-100"
                      : "border border-white/15 text-white hover:border-indigo-300/60 hover:text-indigo-100"
                  }`}
                >
                  {cta}
                </Link>
              </article>
            )
          )}
        </div>
      </section>

      <section
        id="faq"
        className="grid gap-8 rounded-[30px] border border-white/10 bg-surface/60 p-10 shadow-[0_30px_60px_-45px_rgba(56,189,248,0.6)] md:grid-cols-[1.1fr_1fr]"
      >
        <div className="flex flex-col gap-4 text-right">
          <h2 className="text-3xl font-semibold text-white">أسئلة متكررة</h2>
          <p className="text-base text-indigo-100">
            اكتشف المزيد حول كيفية عمل سبام، خيارات التكامل، ومعايير الأمان
            المدعومة في المنصة.
          </p>
          <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-indigo-100/90">
            <div className="mb-3 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <MessageCircle size={18} className="text-indigo-200" />
                <span className="font-medium text-white">
                  دعم مخصص للإطلاق
                </span>
              </div>
              <span className="rounded-full bg-indigo-600/40 px-3 py-1 text-xs text-indigo-50">
                ٢٤/٧
              </span>
            </div>
            <p>
              فريق خبراء الأمن السيبراني يساعدك على إعداد السياسات وتشغيل
              التكاملات الحرجة خلال أقل من أسبوع.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 text-right">
          {faqs.map(({ question, answer }) => (
            <details
              key={question}
              className="group rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-indigo-300/60"
            >
              <summary className="cursor-pointer list-none text-lg font-semibold text-white transition group-open:text-indigo-200">
                {question}
              </summary>
              <p className="mt-3 text-sm leading-7 text-indigo-100/90">
                {answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-indigo-600/40 via-indigo-500/30 to-fuchsia-500/30 p-12 text-right shadow-[0_40px_80px_-50px_rgba(99,102,241,0.8)]"
      >
        <div className="flex flex-col gap-6 text-white md:max-w-2xl md:self-end">
          <h2 className="text-3xl font-semibold md:text-4xl">
            جاهز لإيقاف السبام؟ دعنا نبدأ اليوم.
          </h2>
          <p className="text-base text-indigo-50">
            شاركنا بيانات الاتصال الأساسية وسيتواصل معك أحد خبراء سبام خلال ٢٤
            ساعة لتخصيص الحل بما يناسب بيئتك الحالية.
          </p>
          <form className="grid gap-4 md:grid-cols-2">
            <input
              type="text"
              name="name"
              placeholder="الاسم الكامل"
              className="rounded-2xl border border-white/30 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-indigo-100/60 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/40 md:col-span-1"
            />
            <input
              type="email"
              name="email"
              placeholder="البريد الإلكتروني المهني"
              className="rounded-2xl border border-white/30 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-indigo-100/60 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/40 md:col-span-1"
            />
            <input
              type="text"
              name="company"
              placeholder="اسم الشركة"
              className="md:col-span-1 rounded-2xl border border-white/30 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-indigo-100/60 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/40"
            />
            <input
              type="number"
              name="volume"
              placeholder="متوسط عدد الرسائل الشهري"
              className="md:col-span-1 rounded-2xl border border-white/30 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-indigo-100/60 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/40"
            />
            <textarea
              name="message"
              placeholder="اذكر التحديات الحالية أو الأنظمة المستخدمة"
              className="md:col-span-2 h-32 rounded-2xl border border-white/30 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-indigo-100/60 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/40"
            />
            <button
              type="submit"
              className="md:col-span-2 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-indigo-700 transition hover:bg-indigo-100"
            >
              حجز جلسة تعريفية
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
