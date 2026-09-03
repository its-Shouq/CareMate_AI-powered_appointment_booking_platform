import { createFileRoute } from "@tanstack/react-router";
import {
  Activity,
  AlertTriangle,
  Bot,
  CalendarCheck,
  CheckCircle2,
  ClipboardList,
  Clock,
  FileText,
  Gauge,
  HeartPulse,
  Lock,
  Mic,
  Printer,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Target,
  TrendingUp,
  Users,
  XCircle,
} from "lucide-react";
import heroImage from "@/assets/hero-care.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BRD | مسار رعايتي المستمرة لحجز المواعيد بالذكاء الاصطناعي" },
      {
        name: "description",
        content:
          "وثيقة متطلبات الأعمال لمشروع مسار رعايتي المستمرة: فرز ذكي، تأكيد تفاعلي للمواعيد، وملخص شكوى للطبيب داخل تطبيق صحتي.",
      },
      { property: "og:title", content: "وثيقة متطلبات الأعمال — مسار رعايتي المستمرة" },
      {
        property: "og:description",
        content:
          "حل ذكاء اصطناعي لتحسين رحلة مريض الأمراض المزمنة: تقليل عدم الحضور ورفع الالتزام بأربع زيارات وقائية سنوياً.",
      },
    ],
  }),
  component: Index,
});

const objectives = [
  {
    icon: TrendingUp,
    title: "زيادة معدل المتابعة الوقائية",
    body: "رفع نسبة التزام مرضى الأمراض المزمنة بالزيارات الدورية الأربع خلال العام.",
  },
  {
    icon: CalendarCheck,
    title: "تقليل نسبة عدم الحضور",
    body: "استغلال المواعيد المهدورة عبر أتمتة الإلغاء والتأكيد وإعادة التوجيه التلقائي لقوائم الانتظار.",
  },
  {
    icon: Clock,
    title: "رفع كفاءة وقت الطبيب",
    body: "تقليل وقت أخذ التاريخ المرضي داخل العيادة بنسبة 30% إلى 40% عبر ملخص الشكوى الذكي المسبق.",
  },
  {
    icon: Gauge,
    title: "الاستغلال الأمثل للطاقة الاستيعابية",
    body: "تحويل الحالات المستقرة للعيادات الافتراضية وتقليل الازدحام داخل المراكز الصحية الأولية.",
  },
];

const inScope = [
  {
    title: "واجهة المريض (تطبيق صحتي)",
    items: [
      "وحدة إدخال الشكوى والقراءات (نصي / صوتي عبر AI Chatbot).",
      "خوارزمية الفرز الذكي (حضوري مقابل افتراضي).",
      "نظام التذكير والتأكيد التفاعلي وتحديث المواعيد آلياً.",
    ],
  },
  {
    title: "واجهة الطبيب (نظام العيادات / الطب الاتصالي)",
    items: ["لوحة تحكم تُظهر «بطاقة ملخص الشكوى» قبل دخول المريض."],
  },
  {
    title: "إدارة قوائم الانتظار",
    items: [
      "إعادة إتاحة المواعيد المرفوضة أو الملغاة آلياً للمرضى المسجلين في قائمة الانتظار المستعجل.",
    ],
  },
];

const outScope = [
  "التشخيص الطبي النهائي أو صرف الأدوية دون مراجعة الطبيب البشرية.",
  "الحالات الطارئة الحادة (تُحوَّل فوراً لخدمات الإسعاف والطوارئ).",
];

const functional = [
  {
    id: "FR-01",
    icon: ClipboardList,
    name: "جمع الشكوى الذكي",
    desc: "تمكين المريض من كتابة أو تسجيل شكواه وقراءاته الحالية (ضغط / سكر) عبر المساعد الذكي عند طلب حجز موعد.",
  },
  {
    id: "FR-02",
    icon: Bot,
    name: "الفرز الآلي (Smart Triage)",
    desc: "تحليل البيانات المدخلة وتوجيه المريض تلقائياً بناءً على محددات طبية مسبقة إلى عيادة حضورية أو استشارة افتراضية.",
  },
  {
    id: "FR-03",
    icon: CalendarCheck,
    name: "التذكير والتأكيد التفاعلي",
    desc: "إرسال تنبيهات ومكالمات آلية ذكية قبل الموعد بـ 48 و24 ساعة تتطلب تأكيد الحضور أو الاعتذار.",
  },
  {
    id: "FR-04",
    icon: Users,
    name: "إدارة الهدر والشواغر",
    desc: "عند اعتذار المريض يقوم النظام فوراً بتحويل الموعد للمريض التالي في قائمة الانتظار وإعادة جدولة المعتذر.",
  },
  {
    id: "FR-05",
    icon: Stethoscope,
    name: "بطاقة ملخص الطبيب",
    desc: "توليد ملخص تنفيذي لشكوى المريض وقراءاته يُعرض للطبيب في شاشة الملف الطبي قبل بدء المعاينة.",
  },
  {
    id: "FR-06",
    icon: Mic,
    name: "خيارات الوصول السهل",
    desc: "توفير الإدخال الصوتي لدعم كبار السن، وتفعيل خيار «الراعي الأسري» لإدارة مواعيد الأقارب.",
  },
];

const nonFunctional = [
  {
    icon: Lock,
    title: "الأمان والخصوصية",
    body: "تشفير كافة البيانات الطبية والالتزام بضوابط الهيئة الوطنية للأمن السيبراني وقوانين حماية البيانات الشخصية.",
  },
  {
    icon: HeartPulse,
    title: "سهولة الاستخدام",
    body: "تصميم واجهة بسيطة وتفاعلية تتناسب مع كافة الفئات العمرية، خصوصاً كبار السن وأصحاب الأمراض المزمنة.",
  },
  {
    icon: Activity,
    title: "الأداء والاعتمادية",
    body: "استجابة المساعد الذكي خلال أقل من ثانيتين، وجاهزية النظام للعمل بنسبة 99.9%.",
  },
];

const risks = [
  {
    risk: "خطأ في الفرز الآلي للحالة",
    level: "مرتفع",
    tone: "high" as const,
    mitigation:
      "إبقاء خيار التعديل اليدوي، مع مراجعة سريعة من تمريض الفرز عند الحاجة قبل اعتماد الموعد.",
  },
  {
    risk: "صعوبة استخدام التقنية لكبار السن",
    level: "متوسط",
    tone: "mid" as const,
    mitigation: "دعم الإدخال الصوتي (Voice AI) وإتاحة ربط الحساب بـ «الراعي الأسري».",
  },
  {
    risk: "مقاومة التغيير من المراجعين",
    level: "منخفض",
    tone: "low" as const,
    mitigation:
      "إطلاق حملات توعوية وتأكيد أن الذكاء الاصطناعي أداة مساعدة لخدمة أفضل وليس بديلاً للرعاية البشرية.",
  },
];

const kpis = [
  { value: "80%", label: "معدل الالتزام", note: "من المرضى يكملون 4 زيارات دورية سنوياً" },
  { value: "-50%", label: "استغلال المواعيد", note: "خفض نسبة عدم الحضور (No-Show)" },
  { value: "5 دقائق", label: "زمن الزيارة", note: "توفير في استكشاف الشكوى لكل مريض" },
  { value: "90%", label: "رضا المستفيد", note: "عن تجربة حجز وإدارة المواعيد" },
];

const sections = [
  { id: "summary", label: "الملخص التنفيذي" },
  { id: "objectives", label: "الأهداف" },
  { id: "scope", label: "نطاق العمل" },
  { id: "functional", label: "المتطلبات الوظيفية" },
  { id: "nonfunctional", label: "غير الوظيفية" },
  { id: "risks", label: "المخاطر" },
  { id: "kpis", label: "مؤشرات الأداء" },
];

function SectionHeading({
  number,
  title,
  subtitle,
}: {
  number: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-8 flex items-start gap-4">
      <span className="mt-1 flex size-11 shrink-0 items-center justify-center rounded-2xl bg-brand text-lg font-bold text-brand-foreground shadow-[var(--shadow-glow)]">
        {number}
      </span>
      <div>
        <h2 className="text-2xl font-bold text-foreground sm:text-3xl">{title}</h2>
        {subtitle ? <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p> : null}
      </div>
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md print:hidden">
        <div className="mx-auto flex max-w-6xl items-center gap-4 px-5 py-3">
          <div className="flex items-center gap-2">
            <span className="flex size-9 items-center justify-center rounded-xl hero-gradient text-brand-foreground">
              <HeartPulse className="size-5" />
            </span>
            <span className="text-sm font-bold text-foreground">رعايتي المستمرة</span>
          </div>
          <nav className="hidden flex-1 items-center justify-center gap-1 lg:flex">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="rounded-lg px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                {s.label}
              </a>
            ))}
          </nav>
          <button
            onClick={() => window.print()}
            className="me-0 ms-auto inline-flex items-center gap-2 rounded-xl border border-border bg-card px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent lg:ms-0"
          >
            <Printer className="size-4" />
            طباعة الوثيقة
          </button>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden hero-gradient">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-foreground/25 bg-brand-foreground/10 px-4 py-1.5 text-xs font-medium text-brand-foreground">
                <FileText className="size-3.5" />
                وثيقة متطلبات الأعمال (BRD)
              </span>
              <h1 className="mt-6 text-3xl font-extrabold leading-[1.25] text-brand-foreground sm:text-5xl">
                مسار <span className="text-gradient-gold">«رعايتي المستمرة»</span>
                <br />
                لتطوير حجز المواعيد بالذكاء الاصطناعي
              </h1>
              <p className="mt-5 max-w-xl text-base leading-8 text-brand-foreground/85">
                إعادة صياغة رحلة مريض الأمراض المزمنة في المراكز الصحية الأولية عبر دمج خوارزميات
                الذكاء الاصطناعي في تطبيق «صحتي».
              </p>
              <dl className="mt-8 grid max-w-xl grid-cols-2 gap-x-6 gap-y-4 text-brand-foreground/90 sm:grid-cols-3">
                <div>
                  <dt className="text-xs text-brand-foreground/60">الجهة المبتكرة</dt>
                  <dd className="mt-1 text-sm font-semibold">فريق تحدي الابتكار الصحي</dd>
                </div>
                <div>
                  <dt className="text-xs text-brand-foreground/60">الجهة المستهدفة</dt>
                  <dd className="mt-1 text-sm font-semibold">
                    مركز التأمين الصحي الوطني / وزارة الصحة
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-brand-foreground/60">التاريخ</dt>
                  <dd className="mt-1 text-sm font-semibold">سبتمبر 2026</dd>
                </div>
              </dl>
            </div>
            <div className="relative">
              <div className="overflow-hidden rounded-[2rem] border border-brand-foreground/20 shadow-[var(--shadow-glow)]">
                <img
                  src={heroImage}
                  width={1600}
                  height={1104}
                  alt="مريض من كبار السن يستخدم تطبيق صحتي لحجز موعد بمساعدة الذكاء الاصطناعي"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 start-4 rounded-2xl bg-card px-5 py-3 shadow-[var(--shadow-card)]">
                <p className="text-xs text-muted-foreground">الهدف الوطني 2030</p>
                <p className="text-lg font-bold text-brand">4 زيارات وقائية سنوياً</p>
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-6xl space-y-20 px-5 py-20">
          {/* 1 Executive summary */}
          <section id="summary" className="scroll-mt-24">
            <SectionHeading number="1" title="الملخص التنفيذي" subtitle="Executive Summary" />
            <div className="surface-card p-7 sm:p-9">
              <p className="text-base leading-9 text-foreground/90">
                يهدف هذا المشروع إلى إعادة صياغة رحلة مريض الأمراض المزمنة في المراكز الصحية
                الأولية عبر دمج خوارزميات الذكاء الاصطناعي في تطبيق «صحتي». يعمل النظام على تحليل
                شكوى المريض عند حجز الموعد، وفرز الحالة تلقائياً إلى (حضور فعلي أو عيادة افتراضية)،
                والتأكيد التفاعلي للمواعيد، ونقل ملخص حالة المريض للطبيب المعالج قبل الزيارة. يهدف
                هذا الحل إلى تحسين تجربة المستفيد، وتقليل المواعيد المهدرة، والوصول بمتوسط زيارات
                مريض الأمراض المزمنة إلى 4 زيارات وقائية سنوياً بحلول عام 2030.
              </p>
              <div className="mt-7 grid gap-3 sm:grid-cols-4">
                {[
                  { icon: Mic, t: "تحليل الشكوى" },
                  { icon: Bot, t: "فرز ذكي" },
                  { icon: CalendarCheck, t: "تأكيد تفاعلي" },
                  { icon: Stethoscope, t: "ملخص للطبيب" },
                ].map((s, i) => (
                  <div
                    key={s.t}
                    className="flex items-center gap-3 rounded-xl bg-brand-soft px-4 py-3"
                  >
                    <s.icon className="size-5 shrink-0 text-brand" />
                    <span className="text-sm font-semibold text-brand">
                      {i + 1}. {s.t}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 2 Objectives */}
          <section id="objectives" className="scroll-mt-24">
            <SectionHeading
              number="2"
              title="دوافع المشروع والأهداف التشغيلية"
              subtitle="Business Objectives"
            />
            <div className="grid gap-5 md:grid-cols-2">
              {objectives.map((o) => (
                <article key={o.title} className="surface-card p-6 transition-shadow hover:shadow-[var(--shadow-glow)]">
                  <span className="mb-4 flex size-11 items-center justify-center rounded-xl bg-brand-soft text-brand">
                    <o.icon className="size-5" />
                  </span>
                  <h3 className="text-lg font-bold text-foreground">{o.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">{o.body}</p>
                </article>
              ))}
            </div>
          </section>

          {/* 3 Scope */}
          <section id="scope" className="scroll-mt-24">
            <SectionHeading number="3" title="نطاق العمل" subtitle="Project Scope" />
            <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
              <div className="surface-card p-7">
                <h3 className="flex items-center gap-2 text-lg font-bold text-brand">
                  <CheckCircle2 className="size-5" /> أ. ما يغطيه المشروع (In-Scope)
                </h3>
                <div className="mt-6 space-y-6">
                  {inScope.map((g) => (
                    <div key={g.title} className="border-s-2 border-brand/25 ps-4">
                      <h4 className="text-base font-semibold text-foreground">{g.title}</h4>
                      <ul className="mt-2 space-y-2">
                        {g.items.map((it) => (
                          <li
                            key={it}
                            className="flex gap-2 text-sm leading-7 text-muted-foreground"
                          >
                            <span className="mt-3 size-1.5 shrink-0 rounded-full bg-brand" />
                            {it}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
              <div className="surface-card border-destructive/25 bg-destructive/[0.03] p-7">
                <h3 className="flex items-center gap-2 text-lg font-bold text-destructive">
                  <XCircle className="size-5" /> ب. ما لا يغطيه المشروع
                </h3>
                <ul className="mt-6 space-y-4">
                  {outScope.map((o) => (
                    <li key={o} className="flex gap-2 text-sm leading-7 text-foreground/80">
                      <span className="mt-3 size-1.5 shrink-0 rounded-full bg-destructive" />
                      {o}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* 4 Functional */}
          <section id="functional" className="scroll-mt-24">
            <SectionHeading
              number="4"
              title="متطلبات الأعمال والوظائف الرئيسية"
              subtitle="Functional Requirements"
            />
            <div className="grid gap-4 md:grid-cols-2">
              {functional.map((f) => (
                <article key={f.id} className="surface-card flex gap-4 p-6">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl hero-gradient text-brand-foreground">
                    <f.icon className="size-5" />
                  </span>
                  <div>
                    <span className="inline-block rounded-md bg-gold/20 px-2 py-0.5 font-mono text-[11px] font-bold tracking-wide text-gold-foreground">
                      {f.id}
                    </span>
                    <h3 className="mt-2 text-base font-bold text-foreground">{f.name}</h3>
                    <p className="mt-1.5 text-sm leading-7 text-muted-foreground">{f.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* 5 Non functional */}
          <section id="nonfunctional" className="scroll-mt-24">
            <SectionHeading
              number="5"
              title="المتطلبات غير الوظيفية"
              subtitle="Non-Functional Requirements"
            />
            <div className="grid gap-5 md:grid-cols-3">
              {nonFunctional.map((n) => (
                <article key={n.title} className="surface-card p-6">
                  <span className="mb-4 flex size-11 items-center justify-center rounded-xl bg-brand text-brand-foreground">
                    <n.icon className="size-5" />
                  </span>
                  <h3 className="text-base font-bold text-foreground">{n.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">{n.body}</p>
                </article>
              ))}
            </div>
          </section>

          {/* 6 Risks */}
          <section id="risks" className="scroll-mt-24">
            <SectionHeading
              number="6"
              title="تقييم المخاطر وحلول التخفيف"
              subtitle="Risk Management"
            />
            <div className="surface-card overflow-hidden">
              <div className="hidden grid-cols-[1.2fr_0.5fr_2fr] gap-4 border-b border-border bg-brand-soft px-6 py-4 text-sm font-bold text-brand md:grid">
                <span>الخطر المتوقع</span>
                <span>مستوى التأثير</span>
                <span>استراتيجية التخفيف</span>
              </div>
              {risks.map((r) => (
                <div
                  key={r.risk}
                  className="grid gap-3 border-b border-border/70 px-6 py-5 last:border-0 md:grid-cols-[1.2fr_0.5fr_2fr] md:items-center md:gap-4"
                >
                  <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                    <AlertTriangle className="size-4 shrink-0 text-gold" />
                    {r.risk}
                  </div>
                  <div>
                    <span
                      className={
                        "inline-block rounded-full px-3 py-1 text-xs font-bold " +
                        (r.tone === "high"
                          ? "bg-destructive/12 text-destructive"
                          : r.tone === "mid"
                            ? "bg-gold/25 text-gold-foreground"
                            : "bg-brand-soft text-brand")
                      }
                    >
                      {r.level}
                    </span>
                  </div>
                  <p className="text-sm leading-7 text-muted-foreground">{r.mitigation}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 7 KPIs */}
          <section id="kpis" className="scroll-mt-24">
            <SectionHeading
              number="7"
              title="مؤشرات قياس الأداء والنجاح"
              subtitle="Key Performance Indicators"
            />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {kpis.map((k) => (
                <article key={k.label} className="surface-card hero-gradient p-6 text-brand-foreground">
                  <Target className="size-5 text-gold" />
                  <p className="mt-4 text-3xl font-extrabold text-gradient-gold">{k.value}</p>
                  <p className="mt-2 text-sm font-bold">{k.label}</p>
                  <p className="mt-1 text-xs leading-6 text-brand-foreground/70">{k.note}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="surface-card flex flex-col items-center gap-4 p-10 text-center">
            <Sparkles className="size-7 text-gold" />
            <h2 className="text-2xl font-bold text-foreground">رعاية مستمرة، لا مواعيد مهدرة</h2>
            <p className="max-w-2xl text-sm leading-8 text-muted-foreground">
              الذكاء الاصطناعي هنا أداة مساعدة لتمكين الفريق الصحي ورفع جودة الرعاية الأولية — وليس
              بديلاً عن القرار الطبي البشري.
            </p>
            <div className="mt-2 flex items-center gap-2 rounded-full bg-brand-soft px-4 py-2 text-xs font-semibold text-brand">
              <ShieldCheck className="size-4" />
              متوافق مع ضوابط الهيئة الوطنية للأمن السيبراني
            </div>
          </section>
        </div>
      </main>

      <footer className="border-t border-border bg-card py-8">
        <div className="mx-auto max-w-6xl px-5 text-center text-xs text-muted-foreground">
          وثيقة متطلبات الأعمال (BRD) — مسار «رعايتي المستمرة» · فريق تحدي الابتكار الصحي · سبتمبر
          2026
        </div>
      </footer>
    </div>
  );
}
