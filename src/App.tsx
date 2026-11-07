/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import {
  Copy,
  Check,
  Share2,
  Linkedin,
  Facebook,
  Instagram,
  ArrowUpRight,
  Mail,
  Phone,
  PhoneCall,
  Building2,
  Globe,
  MapPin,
  ExternalLink,
  Target,
  Zap,
  Rocket,
  BarChart3,
  Cpu,
  RotateCcw,
  QrCode,
  UserPlus,
  UserCheck,
  FileText,
  Scan,
  LucideIcon,
} from 'lucide-react';

// ============================================================================
// CLEAN VECTOR WHATSAPP ICON
// ============================================================================

function WhatsAppIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.004c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

// ============================================================================
// TYPES
// ============================================================================

export type Language = 'ar' | 'en';
export type EngineId = 'demand' | 'conversion' | 'expansion' | 'intelligence' | 'transformation';
export type QrMode = 'url' | 'vcard';

export interface AliaEngineItem {
  id: EngineId;
  number: string;
  icon: LucideIcon;
  image: string;
  ar: {
    name: string;
    title: string;
    summary: string;
    tags: string[];
  };
  en: {
    name: string;
    title: string;
    summary: string;
    tags: string[];
  };
}

// ============================================================================
// ASSETS & OFFICIAL DATA
// ============================================================================

const ASSETS = {
  avatar: '/assets/aistudio/FB_IMG_1793370589014_5bbdd65a.jpg',
  logo: '/assets/aistudio/logo_204f4ee0.webp',
  portfolioPdf: '/assets/aistudio/ALIA_Growth___Revenue_Portfolio___1__0593cd9d.pdf',
  headerCover: '/assets/images/alia_header_architecture_1793955692405.jpg',
};

const CONTACT = {
  personalPhone: '01121891913',
  personalWhatsapp: '201121891913',
  personalEmail: 'm.shaban@alia-bd.com',
  linkedinHandle: 'msalatmani',
  linkedinUrl: 'https://www.linkedin.com/in/msalatmani',
  companyPhone: '01140861767',
  companyEmail: 'Info@ALIA-BD.com',
  website: 'Alia-BD.com',
  mapsQuery: 'Hydepark business complex Building 8G Block 1258 Sheraton Housing Cairo Egypt',
  socials: {
    linkedin: 'https://www.linkedin.com/company/alia-strategic-consulting',
    facebook: 'https://www.facebook.com/ALIA.BD.EG',
    instagram: 'https://www.instagram.com/alia.strategic',
  },
};

const ENGINES: AliaEngineItem[] = [
  {
    id: 'demand',
    number: '01',
    icon: Target,
    image: '/assets/images/engine_demand_visual_1793956562897.jpg',
    ar: {
      name: 'الطلب',
      title: 'بناء الطلب والاستحواذ',
      summary: 'جذب العملاء المؤهلين وتحويل الاهتمام إلى فرص بيعية مستدامة.',
      tags: ['تحليل السوق ICP', 'التمركز التنافسي', 'قنوات الاستحواذ'],
    },
    en: {
      name: 'Demand',
      title: 'Demand & Acquisition',
      summary: 'Capturing qualified attention and turning it into an active pipeline.',
      tags: ['Market ICP', 'Positioning', 'Acquisition Channels'],
    },
  },
  {
    id: 'conversion',
    number: '02',
    icon: Zap,
    image: '/assets/images/engine_conversion_visual_1793956565185.jpg',
    ar: {
      name: 'التحويل',
      title: 'أنظمة تحويل المبيعات',
      summary: 'بناء مسارات بيع ذكية تربط التسويق بالمبيعات لإغلاق الصفقات.',
      tags: ['هندسة العروض', 'مسارات التحويل', 'مواءمة المبيعات'],
    },
    en: {
      name: 'Conversion',
      title: 'Revenue Conversion',
      summary: 'Structured sales funnels that turn leads into paying clients.',
      tags: ['Offer Design', 'Funnels', 'RevOps Alignment'],
    },
  },
  {
    id: 'expansion',
    number: '03',
    icon: Rocket,
    image: '/assets/images/engine_expansion_visual_1793956567260.jpg',
    ar: {
      name: 'التوسع',
      title: 'تطوير الأعمال والتوسع',
      summary: 'فتح أسواق جديدة وبناء شراكات تضاعف حجم الأعمال والقيمة السوقية.',
      tags: ['استراتيجيات التوسع', 'الشراكات النوعية', 'النمو المستدام'],
    },
    en: {
      name: 'Expansion',
      title: 'Growth & Expansion',
      summary: 'Scaling into new markets through repeatable growth systems.',
      tags: ['Go-To-Market', 'Strategic Partnerships', 'Scaling'],
    },
  },
  {
    id: 'intelligence',
    number: '04',
    icon: BarChart3,
    image: '/assets/images/alia_revenue_system_diagram_1793955694770.jpg',
    ar: {
      name: 'البيانات',
      title: 'ذكاء الأعمال والتحليلات',
      summary: 'لوحات بيانات لحظية لقياس الأداء ومتابعة العائد واتخاذ قرارات دقيقة.',
      tags: ['لوحات القياس الآنية', 'تتبع عائد الاستثمار ROI', 'التحليلات التنبؤية'],
    },
    en: {
      name: 'Data',
      title: 'Data & Intelligence',
      summary: 'Real-time revenue telemetry replacing guesswork with data-driven clarity.',
      tags: ['Dashboards', 'ROI Attribution', 'Analytics'],
    },
  },
  {
    id: 'transformation',
    number: '05',
    icon: Cpu,
    image: '/assets/images/engine_ai_transformation_visual_1793956568887.jpg',
    ar: {
      name: 'الذكاء',
      title: 'الذكاء الاصطناعي والتحول الرقمي',
      summary: 'بناء وكلاء ذكاء اصطناعي وأتمتة شاملة وربط أنظمة CRM و ERP.',
      tags: ['وكلاء الذكاء الاصطناعي', 'الأتمتة الشاملة', 'تكامل CRM / ERP'],
    },
    en: {
      name: 'AI',
      title: 'AI & Digital Transformation',
      summary: 'Building autonomous AI workflows and enterprise CRM/ERP integrations.',
      tags: ['AI Agents', 'Automation', 'CRM / ERP Integration'],
    },
  },
];

// ============================================================================
// REAL ISO-COMPLIANT SCANNABLE QR CODE (REED-SOLOMON LEVEL H)
// ============================================================================

function ScannableBrandedQrCode({
  value,
  logoUrl,
  size = 216,
}: {
  value: string;
  logoUrl: string;
  size?: number;
}) {
  return (
    <div className="p-2.5 rounded-[28px] glass-panel inline-flex items-center justify-center">
      <div className="relative inline-flex items-center justify-center rounded-2xl bg-white p-4 shadow-xl">
        <QRCodeSVG
          value={value}
          size={size}
          bgColor="#FFFFFF"
          fgColor="#18181B"
          level="H"
          marginSize={1}
          imageSettings={{
            src: logoUrl,
            height: 40,
            width: 40,
            excavate: true,
          }}
        />
      </div>
    </div>
  );
}

// ============================================================================
// MAIN PRODUCTION SMART BUSINESS CARD
// ============================================================================

export default function App() {
  const [lang, setLang] = useState<Language>('ar');
  const isAr = lang === 'ar';

  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [qrMode, setQrMode] = useState<QrMode>('url');
  const [selectedEngineId, setSelectedEngineId] = useState<EngineId>('transformation');

  const [avatarError, setAvatarError] = useState<boolean>(false);
  const [coverError, setCoverError] = useState<boolean>(false);

  const [toast, setToast] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Standard vCard 3.0 payload
  const vcardPayload = useMemo(() => {
    return [
      'BEGIN:VCARD',
      'VERSION:3.0',
      'N:Shaban;Mohamed;;Eng.;',
      'FN:Eng. Mohamed Shaban',
      'ORG:ALIA Strategic Consulting',
      'TITLE:AI Solutions Engineer',
      `TEL;TYPE=CELL,VOICE,PREF:+20${CONTACT.personalPhone.replace(/^0/, '')}`,
      `TEL;TYPE=WORK,VOICE:+20${CONTACT.companyPhone.replace(/^0/, '')}`,
      `EMAIL;TYPE=PREF,WORK,INTERNET:${CONTACT.personalEmail}`,
      `EMAIL;TYPE=WORK,INTERNET:${CONTACT.companyEmail}`,
      `URL:https://${CONTACT.website}`,
      'ADR;TYPE=WORK:;;Hydepark Complex Building 8G Block 1258 Sheraton;Cairo;;11799;Egypt',
      'END:VCARD',
    ].join('\n');
  }, []);

  const qrValue = useMemo(() => {
    if (qrMode === 'vcard') {
      return vcardPayload;
    }
    if (typeof window !== 'undefined' && window.location.href) {
      return window.location.href;
    }
    return `https://${CONTACT.website}`;
  }, [qrMode, vcardPayload]);

  // Clean, professional, emoji-free copy
  const t = useMemo(
    () =>
      isAr
        ? {
            name: 'م. محمد شعبان',
            title: 'مهندس حلول الذكاء الاصطناعي',
            slogan: 'نبني أنظمة إيرادات متكاملة، لا مجرد تسويق.',
            flipBtn: 'QR',
            backBtn: 'رجوع',
            saveContact: 'حفظ جهة الاتصال',
            whatsapp: 'واتساب',
            portfolio: 'سابقة الأعمال',
            address: 'هايد بارك بيزنس كومبلكس – مبنى 8G، شيراتون',
            qrModeUrl: 'رابط الكارت',
            qrModeVcard: 'جهة اتصال vCard',
            qrHint: 'وجّه كاميرا الهاتف لمسح الرمز مباشرة',
            copyLink: 'نسخ الرابط',
            footerGroup: 'ALIA Strategic Consulting · Amer Vision Group',
            copiedMsg: 'تم النسخ إلى الحافظة',
            vcfSavedMsg: 'تم حفظ جهة الاتصال بنجاح',
            emailLabel: 'البريد',
            phoneLabel: 'الهاتف',
          }
        : {
            name: 'Eng. Mohamed Shaban',
            title: 'AI Solutions Engineer',
            slogan: 'We build scalable revenue systems, not just marketing.',
            flipBtn: 'QR Pass',
            backBtn: 'Back',
            saveContact: 'Save Contact',
            whatsapp: 'WhatsApp',
            portfolio: 'Portfolio',
            address: 'Hydepark Complex – Bldg 8G, Sheraton, Cairo',
            qrModeUrl: 'Card Link',
            qrModeVcard: 'vCard Contact',
            qrHint: 'Point phone camera to scan instantly',
            copyLink: 'Copy Link',
            footerGroup: 'ALIA Strategic Consulting · Amer Vision Group',
            copiedMsg: 'Copied to clipboard',
            vcfSavedMsg: 'Contact saved successfully',
            emailLabel: 'Email',
            phoneLabel: 'Mobile',
          },
    [isAr]
  );

  const handleFlipToggle = (targetState: boolean) => {
    setIsFlipped(targetState);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const triggerToast = (message: string) => {
    setToast(message);
    window.clearTimeout((window as unknown as { __aliaTimer?: number }).__aliaTimer);
    (window as unknown as { __aliaTimer?: number }).__aliaTimer = window.setTimeout(() => {
      setToast(null);
    }, 2200);
  };

  const handleCopy = async (value: string, id: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedId(id);
      triggerToast(t.copiedMsg);
      setTimeout(() => setCopiedId(null), 1800);
    } catch {
      triggerToast(value);
    }
  };

  const handleSaveVcf = () => {
    const blob = new Blob([vcardPayload.replace(/\n/g, '\r\n')], {
      type: 'text/vcard;charset=utf-8;',
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Eng_Mohamed_Shaban_ALIA.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    triggerToast(t.vcfSavedMsg);
  };

  const handleShare = async () => {
    const shareData = {
      title: `${t.name}`,
      text: `${t.name} | ${t.title} — ALIA Strategic Consulting`,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch {
        // Fallback to copy
      }
    }
    handleCopy(window.location.href, 'share-url');
  };

  const selectedEngine = useMemo(
    () => ENGINES.find((e) => e.id === selectedEngineId) || ENGINES[4],
    [selectedEngineId]
  );

  const engineCopy = isAr ? selectedEngine.ar : selectedEngine.en;
  const SelectedIcon = selectedEngine.icon;

  const whatsappUrl = `https://wa.me/${CONTACT.personalWhatsapp}?text=${encodeURIComponent(
    isAr
      ? 'مرحباً م. محمد شعبان، تواصلت معك عبر كارت العمل الرقمي.'
      : 'Hello Eng. Mohamed Shaban, reaching out via your digital business card.'
  )}`;

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    CONTACT.mapsQuery
  )}`;

  return (
    <div
      dir={isAr ? 'rtl' : 'ltr'}
      className={`relative min-h-screen w-full bg-[#09090B] text-white py-3 sm:py-8 px-2.5 sm:px-4 flex flex-col items-center justify-start sm:justify-center overflow-x-hidden ${
        isAr ? 'font-cairo' : 'font-sans'
      }`}
    >
      {/* AMBIENT LIQUID LIGHT ORBS & ARCHITECTURAL BACKDROP */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        {!coverError && (
          <img
            src={ASSETS.headerCover}
            alt=""
            referrerPolicy="no-referrer"
            onError={() => setCoverError(true)}
            className="w-full h-full object-cover opacity-25 scale-105"
          />
        )}
        <div
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-35 blur-3xl"
          style={{
            background: 'radial-gradient(circle, #E06D2B 0%, rgba(224,109,43,0) 70%)',
          }}
        />
        <div
          className="absolute top-1/3 -left-28 w-80 h-80 rounded-full opacity-25 blur-3xl"
          style={{
            background: 'radial-gradient(circle, #F39C3D 0%, rgba(243,156,61,0) 70%)',
          }}
        />
        <div
          className="absolute -bottom-24 right-1/4 w-96 h-96 rounded-full opacity-25 blur-3xl"
          style={{
            background: 'radial-gradient(circle, #E06D2B 0%, rgba(224,109,43,0) 70%)',
          }}
        />
      </div>

      {/* TOAST FEEDBACK */}
      {toast && (
        <div
          role="status"
          aria-live="polite"
          className="fixed top-4 left-1/2 -translate-x-1/2 z-50 glass-shell text-white px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap flex items-center gap-2 shadow-2xl border border-white/20"
        >
          <Check className="w-4 h-4 text-[#F39C3D] shrink-0" />
          <span>{toast}</span>
        </div>
      )}

      {/* ===================================================================
          3D GLASSMORPHISM SMART BUSINESS CARD
      =================================================================== */}
      <main className="relative z-10 w-full max-w-[420px] mx-auto perspective-stage">
        <div className={`flip-card-inner relative w-full ${isFlipped ? 'is-flipped' : ''}`}>
          {/* ===============================================================
              FRONT FACE OF GLASS CARD
          =============================================================== */}
          <article
            aria-hidden={isFlipped}
            className={`card-face w-full glass-shell rounded-[32px] overflow-hidden transition-opacity duration-300 ${
              isFlipped
                ? 'opacity-0 pointer-events-none h-0 overflow-hidden'
                : 'opacity-100 pointer-events-auto'
            }`}
          >
            {/* -------------------------------------------------------------
                1. GLASS HERO HEADER
            ------------------------------------------------------------- */}
            <div className="relative px-5 pt-5 pb-5 border-b border-white/10">
              <div
                className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none"
                aria-hidden="true"
              />

              {/* Top Bar: Official Logo + [Lang Switch & Pulsing 3D Flip] */}
              <div className="flex items-center justify-between gap-2">
                <div className="bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/40 shadow-sm inline-flex items-center">
                  <img
                    src={ASSETS.logo}
                    alt="ALIA Strategic Consulting"
                    referrerPolicy="no-referrer"
                    className="h-7 w-auto object-contain"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setLang((prev) => (prev === 'ar' ? 'en' : 'ar'))}
                    className="glass-pill-btn hover:bg-white/15 min-h-[38px] px-3 py-1.5 rounded-xl text-xs font-bold text-white transition-colors cursor-pointer"
                  >
                    {isAr ? 'EN' : 'عربي'}
                  </button>

                  <button
                    type="button"
                    onClick={() => handleFlipToggle(true)}
                    className="animate-flip-pulse glass-orange-cta min-h-[38px] px-3.5 py-1.5 rounded-xl text-white text-xs font-bold inline-flex items-center gap-1.5 transition-all cursor-pointer"
                  >
                    <QrCode className="w-3.5 h-3.5 shrink-0" />
                    <span>{t.flipBtn}</span>
                  </button>
                </div>
              </div>

              {/* Portrait + Executive Identity */}
              <div className="mt-5 flex items-center gap-4">
                <div className="relative w-20 h-20 rounded-2xl p-0.5 bg-gradient-to-br from-[#F39C3D] via-[#E06D2B] to-white/20 shrink-0 shadow-xl">
                  <div className="w-full h-full rounded-[14px] overflow-hidden bg-zinc-900">
                    {!avatarError ? (
                      <img
                        src={ASSETS.avatar}
                        alt={t.name}
                        referrerPolicy="no-referrer"
                        onError={() => setAvatarError(true)}
                        className="w-full h-full object-cover object-top"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center font-display text-xl font-extrabold text-white">
                        MS
                      </div>
                    )}
                  </div>
                </div>

                <div className="min-w-0 flex-1">
                  <h1 className="text-xl font-extrabold tracking-tight text-white leading-snug">
                    {t.name}
                  </h1>
                  <p className="text-sm font-bold text-[#F39C3D] mt-1">{t.title}</p>
                  <p className="text-xs font-medium text-zinc-300 mt-1.5 leading-snug">
                    {t.slogan}
                  </p>
                </div>
              </div>
            </div>

            {/* -------------------------------------------------------------
                2. PRIMARY GLASS CTA BAR
            ------------------------------------------------------------- */}
            <div className="px-5 py-3.5 border-b border-white/10 bg-white/[0.02]">
              <div className="grid grid-cols-12 gap-2">
                <button
                  type="button"
                  onClick={handleSaveVcf}
                  className="animate-cta-pulse glass-orange-cta col-span-6 min-h-[46px] px-3 py-2.5 rounded-2xl active:scale-[0.98] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer whitespace-nowrap"
                >
                  <UserPlus className="w-4 h-4 shrink-0" />
                  <span>{t.saveContact}</span>
                </button>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-panel glass-panel-hover col-span-4 min-h-[46px] px-3 py-2.5 rounded-2xl active:scale-[0.98] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all whitespace-nowrap hover:text-[#25D366]"
                >
                  <WhatsAppIcon className="w-4 h-4 shrink-0 text-[#25D366]" />
                  <span>{t.whatsapp}</span>
                </a>

                <button
                  type="button"
                  onClick={handleShare}
                  className="glass-panel glass-panel-hover col-span-2 min-h-[46px] rounded-2xl active:scale-[0.98] text-white flex items-center justify-center transition-all cursor-pointer hover:text-[#F39C3D]"
                  aria-label="Share"
                >
                  <Share2 className="w-4 h-4 text-zinc-200" />
                </button>
              </div>
            </div>

            {/* -------------------------------------------------------------
                3. PROFESSIONAL DIRECT CHANNELS (CLEAN VECTOR ICONS)
            ------------------------------------------------------------- */}
            <div className="px-5 pt-4 pb-3 space-y-2">
              {/* Direct Work Email: m.shaban@alia-bd.com */}
              <div className="glass-panel glass-panel-hover rounded-2xl px-3.5 py-2.5 flex items-center justify-between gap-2 transition-all group">
                <a
                  href={`mailto:${CONTACT.personalEmail}`}
                  className="flex items-center gap-3 min-w-0 flex-1 min-h-[38px]"
                >
                  <div className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-[#F39C3D] group-hover:bg-[#F39C3D]/10 transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span
                    dir="ltr"
                    className="text-sm font-bold font-mono-tabular text-white truncate group-hover:text-[#F39C3D] transition-colors"
                  >
                    {CONTACT.personalEmail}
                  </span>
                </a>
                <button
                  type="button"
                  onClick={() => handleCopy(CONTACT.personalEmail, 'direct-email')}
                  className="w-8 h-8 rounded-xl text-zinc-400 hover:text-white hover:bg-white/10 flex items-center justify-center transition-colors cursor-pointer shrink-0"
                  aria-label="Copy Email"
                >
                  {copiedId === 'direct-email' ? (
                    <Check className="w-4 h-4 text-[#F39C3D]" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {/* Direct Mobile + Personal LinkedIn in 2 Columns */}
              <div className="grid grid-cols-2 gap-2">
                {/* 01121891913 */}
                <div className="glass-panel glass-panel-hover rounded-2xl px-3 py-2.5 flex items-center justify-between gap-1.5 transition-all group">
                  <a
                    href={`tel:+20${CONTACT.personalPhone.replace(/^0/, '')}`}
                    className="flex items-center gap-2.5 min-w-0 flex-1 min-h-[38px]"
                  >
                    <div className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-[#F39C3D] group-hover:bg-[#F39C3D]/10 transition-colors">
                      <Phone className="w-3.5 h-3.5" />
                    </div>
                    <span
                      dir="ltr"
                      className="text-xs sm:text-sm font-bold font-mono-tabular text-white truncate group-hover:text-[#F39C3D] transition-colors"
                    >
                      {CONTACT.personalPhone}
                    </span>
                  </a>
                  <button
                    type="button"
                    onClick={() => handleCopy(CONTACT.personalPhone, 'direct-phone')}
                    className="w-7 h-7 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 flex items-center justify-center transition-colors cursor-pointer shrink-0"
                    aria-label="Copy Phone"
                  >
                    {copiedId === 'direct-phone' ? (
                      <Check className="w-3.5 h-3.5 text-[#F39C3D]" />
                    ) : (
                      <Copy className="w-3 h-3" />
                    )}
                  </button>
                </div>

                {/* LinkedIn: msalatmani */}
                <a
                  href={CONTACT.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-panel glass-panel-hover rounded-2xl px-3 py-2.5 flex items-center justify-between gap-1.5 min-h-[38px] transition-all group"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-[#0A66C2] group-hover:bg-[#0A66C2]/15 transition-colors">
                      <Linkedin className="w-3.5 h-3.5" />
                    </div>
                    <span dir="ltr" className="text-xs sm:text-sm font-bold text-white truncate group-hover:text-[#F39C3D] transition-colors">
                      in/{CONTACT.linkedinHandle}
                    </span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#F39C3D] shrink-0" />
                </a>
              </div>
            </div>

            {/* -------------------------------------------------------------
                4. COMPACT COMPANY CHANNELS & SOCIALS
            ------------------------------------------------------------- */}
            <div className="px-5 py-3.5 border-t border-white/10 space-y-2">
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`tel:+20${CONTACT.companyPhone.replace(/^0/, '')}`}
                  className="glass-panel glass-panel-hover rounded-2xl px-3 py-2.5 flex items-center gap-2.5 transition-all group"
                >
                  <div className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-[#F39C3D]">
                    <PhoneCall className="w-3.5 h-3.5" />
                  </div>
                  <span dir="ltr" className="text-xs font-bold font-mono-tabular text-white group-hover:text-[#F39C3D] transition-colors">
                    {CONTACT.companyPhone}
                  </span>
                </a>

                <a
                  href={`mailto:${CONTACT.companyEmail}`}
                  className="glass-panel glass-panel-hover rounded-2xl px-3 py-2.5 flex items-center gap-2.5 transition-all group"
                >
                  <div className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-[#F39C3D]">
                    <Building2 className="w-3.5 h-3.5" />
                  </div>
                  <span dir="ltr" className="text-xs font-bold text-white truncate group-hover:text-[#F39C3D] transition-colors">
                    {CONTACT.companyEmail}
                  </span>
                </a>
              </div>

              {/* Website + Portfolio PDF + Socials */}
              <div className="glass-panel rounded-2xl px-3 py-2.5 flex items-center justify-between gap-2">
                <div className="flex items-center gap-3 min-w-0">
                  <a
                    href={`https://${CONTACT.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-[#F39C3D] transition-colors"
                  >
                    <Globe className="w-3.5 h-3.5 text-[#F39C3D] shrink-0" />
                    <span dir="ltr">{CONTACT.website}</span>
                  </a>

                  <span className="text-white/20" aria-hidden="true">
                    |
                  </span>

                  <a
                    href={ASSETS.portfolioPdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#F39C3D] hover:underline whitespace-nowrap"
                  >
                    <FileText className="w-3.5 h-3.5 shrink-0" />
                    <span>{t.portfolio}</span>
                  </a>
                </div>

                <div className="flex items-center gap-1 shrink-0">
                  <a
                    href={CONTACT.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-7 h-7 rounded-lg glass-pill-btn hover:border-[#F39C3D] text-zinc-200 hover:text-[#F39C3D] flex items-center justify-center transition-colors"
                    aria-label="ALIA LinkedIn"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={CONTACT.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-7 h-7 rounded-lg glass-pill-btn hover:border-[#F39C3D] text-zinc-200 hover:text-[#F39C3D] flex items-center justify-center transition-colors"
                    aria-label="ALIA Facebook"
                  >
                    <Facebook className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={CONTACT.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-7 h-7 rounded-lg glass-pill-btn hover:border-[#F39C3D] text-zinc-200 hover:text-[#F39C3D] flex items-center justify-center transition-colors"
                    aria-label="ALIA Instagram"
                  >
                    <Instagram className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Cairo Location */}
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block glass-panel glass-panel-hover rounded-2xl px-3.5 py-2.5 transition-all group"
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-[#F39C3D]">
                      <MapPin className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs font-bold text-zinc-200 truncate group-hover:text-[#F39C3D] transition-colors">
                      {t.address}
                    </span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-zinc-400 group-hover:text-[#F39C3D] transition-colors shrink-0" />
                </div>
              </a>
            </div>

            {/* -------------------------------------------------------------
                5. THE 5 ENGINES (VECTOR TABS + 3D VISUAL CARD)
            ------------------------------------------------------------- */}
            <div className="px-5 pt-3.5 pb-5 border-t border-white/10 bg-black/20">
              <div className="grid grid-cols-5 gap-1.5" role="tablist">
                {ENGINES.map((eng) => {
                  const active = selectedEngineId === eng.id;
                  const label = isAr ? eng.ar.name : eng.en.name;
                  const EngineTabIcon = eng.icon;

                  return (
                    <button
                      key={eng.id}
                      type="button"
                      role="tab"
                      aria-selected={active}
                      onClick={() => setSelectedEngineId(eng.id)}
                      className={`min-h-[56px] py-1.5 px-1 rounded-2xl flex flex-col items-center justify-center gap-1.5 transition-all cursor-pointer ${
                        active
                          ? 'glass-orange-cta text-white shadow-lg'
                          : 'glass-panel text-zinc-400 hover:text-white'
                      }`}
                    >
                      <EngineTabIcon
                        className={`w-4 h-4 shrink-0 ${active ? 'text-white' : 'text-[#F39C3D]'}`}
                      />
                      <span className="text-[10px] font-bold tracking-tight truncate max-w-full px-0.5">
                        {label}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Visual Engine Glass Card */}
              <div className="mt-2.5 rounded-2xl glass-panel overflow-hidden">
                <div className="relative h-32 w-full bg-zinc-950 overflow-hidden">
                  <img
                    key={selectedEngine.image}
                    src={selectedEngine.image}
                    alt={engineCopy.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-end justify-between p-3">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-lg bg-black/60 border border-white/20 backdrop-blur-md flex items-center justify-center text-[#F39C3D]">
                        <SelectedIcon className="w-3.5 h-3.5" />
                      </div>
                      <h3 className="text-xs sm:text-sm font-extrabold text-white">
                        {engineCopy.title}
                      </h3>
                    </div>
                    <span className="text-[11px] font-mono-tabular font-bold text-[#F39C3D] px-2 py-0.5 rounded-md bg-black/50 border border-[#F39C3D]/30">
                      {selectedEngine.number}
                    </span>
                  </div>
                </div>

                <div className="p-3.5">
                  <p className="text-xs text-zinc-300 font-medium leading-relaxed">
                    {engineCopy.summary}
                  </p>

                  <div className="mt-2.5 pt-2 border-t border-white/10 flex flex-wrap items-center gap-1.5 text-[11px] font-bold">
                    {engineCopy.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg bg-white/5 border border-white/10 text-[#F39C3D] text-[10px]"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E06D2B]" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Single Quiet Group Footer Line */}
              <div className="mt-4 text-center text-[10px] font-semibold text-zinc-500">
                {t.footerGroup}
              </div>
            </div>
          </article>

          {/* ===============================================================
              BACK FACE OF GLASS CARD (CLEAN PRODUCTION QR PASS)
          =============================================================== */}
          <article
            aria-hidden={!isFlipped}
            className={`card-face card-face-back w-full glass-shell rounded-[32px] overflow-hidden transition-opacity duration-300 ${
              isFlipped
                ? 'opacity-100 pointer-events-auto'
                : 'opacity-0 pointer-events-none h-0 overflow-hidden'
            }`}
          >
            <div className="px-5 pt-5 pb-6 text-center relative">
              {/* Top Bar on Back Face */}
              <div className="relative z-10 flex items-center justify-between mb-5">
                <div className="bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/40 shadow-sm inline-flex items-center">
                  <img
                    src={ASSETS.logo}
                    alt="ALIA"
                    referrerPolicy="no-referrer"
                    className="h-7 w-auto object-contain"
                  />
                </div>

                <button
                  type="button"
                  onClick={() => handleFlipToggle(false)}
                  className="animate-flip-pulse glass-orange-cta min-h-[38px] px-3.5 py-1.5 rounded-xl text-white text-xs font-bold inline-flex items-center gap-1.5 transition-all cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>{t.backBtn}</span>
                </button>
              </div>

              {/* QR Mode Segmented Switcher */}
              <div className="inline-flex items-center gap-1 p-1 rounded-xl glass-panel mb-4">
                <button
                  type="button"
                  onClick={() => setQrMode('url')}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    qrMode === 'url'
                      ? 'bg-[#E06D2B] text-white shadow-xs'
                      : 'text-zinc-300 hover:text-white'
                  }`}
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>{t.qrModeUrl}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setQrMode('vcard')}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    qrMode === 'vcard'
                      ? 'bg-[#E06D2B] text-white shadow-xs'
                      : 'text-zinc-300 hover:text-white'
                  }`}
                >
                  <UserCheck className="w-3.5 h-3.5" />
                  <span>{t.qrModeVcard}</span>
                </button>
              </div>

              {/* Scannable QR Code */}
              <div className="py-1 flex flex-col items-center">
                <ScannableBrandedQrCode
                  value={qrValue}
                  logoUrl={ASSETS.logo}
                  size={216}
                />
                <h2 className="text-lg font-extrabold text-white mt-4">{t.name}</h2>
                <p className="text-xs font-bold text-[#F39C3D] mt-0.5">{t.title}</p>
                <div className="inline-flex items-center gap-1.5 text-xs text-zinc-400 mt-1.5">
                  <Scan className="w-3.5 h-3.5 text-zinc-400" />
                  <span>{t.qrHint}</span>
                </div>
              </div>

              {/* Compact Vector Credentials Recap */}
              <div className="mt-5 rounded-2xl glass-panel p-3.5 space-y-2 text-xs">
                <div className="flex items-center justify-between py-1 border-b border-white/10">
                  <div className="flex items-center gap-2 text-zinc-400">
                    <Mail className="w-3.5 h-3.5 text-[#F39C3D]" />
                    <span>{t.emailLabel}</span>
                  </div>
                  <span dir="ltr" className="font-mono-tabular font-bold text-white">
                    {CONTACT.personalEmail}
                  </span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-white/10">
                  <div className="flex items-center gap-2 text-zinc-400">
                    <Phone className="w-3.5 h-3.5 text-[#F39C3D]" />
                    <span>{t.phoneLabel}</span>
                  </div>
                  <span dir="ltr" className="font-mono-tabular font-bold text-white">
                    {CONTACT.personalPhone}
                  </span>
                </div>
                <div className="flex items-center justify-between py-1">
                  <div className="flex items-center gap-2 text-zinc-400">
                    <Linkedin className="w-3.5 h-3.5 text-[#0A66C2]" />
                    <span>LinkedIn</span>
                  </div>
                  <span dir="ltr" className="font-mono-tabular font-bold text-[#F39C3D]">
                    in/{CONTACT.linkedinHandle}
                  </span>
                </div>
              </div>

              {/* Clean Action Buttons */}
              <div className="mt-4 grid grid-cols-2 gap-2.5">
                <button
                  type="button"
                  onClick={handleSaveVcf}
                  className="animate-cta-pulse glass-orange-cta min-h-[46px] px-4 py-2.5 rounded-2xl text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <UserPlus className="w-4 h-4" />
                  <span>{t.saveContact}</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleCopy(window.location.href, 'back-copy')}
                  className="glass-panel glass-panel-hover min-h-[46px] px-4 py-2.5 rounded-2xl text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <Copy className="w-4 h-4" />
                  <span>{t.copyLink}</span>
                </button>
              </div>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
}
