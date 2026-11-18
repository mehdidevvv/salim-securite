import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, FileText, CheckCircle2, RotateCcw, Scale, ShieldAlert, Award } from "lucide-react";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Conditions Générales & Politique de Garantie RMA | BRAND Sécurité AIoT",
  description:
    "Conditions d'utilisation, conditions générales de vente B2B, politique de garantie constructeur 3-5 ans et procédure de retour SAV / RMA de BRAND Corporation.",
  alternates: {
    canonical: "https://brand-aiot.com/terms",
  },
  openGraph: {
    title: "Conditions Générales & Garantie Constructeur | BRAND",
    description: "Conditions de vente professionnelles et procédure de retour SAV pour intégrateurs et distributeurs.",
    url: "https://brand-aiot.com/terms",
  },
};

export default function TermsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", item: "https://brand-aiot.com" },
          { name: "Conditions Générales & RMA", item: "https://brand-aiot.com/terms" },
        ]}
      />

      <div className="bg-brand-light min-h-screen">
        {/* Banner */}
        <div className="bg-brand-dark text-white py-16 px-6">
          <div className="max-w-4xl mx-auto space-y-4">
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <Link href="/" className="hover:text-white transition">Accueil</Link>
              <ChevronRight className="w-3.5 h-3.5 text-gray-600" />
              <span className="text-brand-red font-medium">Cadre Légal & Vente</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
              Conditions Générales & Politique de Garantie RMA
            </h1>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Dernière révision : Janvier 2026. Conditions régissant l'utilisation des plateformes BRAND, la distribution B2B de nos équipements matériels et l'exécution du service après-vente constructeur.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-6 py-12 space-y-10 text-gray-700 leading-relaxed text-sm sm:text-base">
          {/* Section 1 */}
          <div className="bg-white p-8 rounded-3xl border border-gray-200/90 shadow-soft space-y-4">
            <div className="flex items-center gap-3 text-brand-dark">
              <FileText className="w-6 h-6 text-brand-red flex-shrink-0" />
              <h2 className="text-xl sm:text-2xl font-bold">1. Champ d'Application & Distribution B2B</h2>
            </div>
            <p>
              Les présentes Conditions Générales s'appliquent à l'ensemble des ventes de matériels électroniques de sécurité, logiciels et prestations d'assistance technique conclues par <strong>BRAND Corporation</strong> avec son réseau de distributeurs agréés, intégrateurs de systèmes de sécurité et clients institutionnels.
            </p>
            <p>
              Toute commande passée implique l'adhésion entière et sans réserve du client professionnel aux présentes conditions, lesquelles prévalent sur tout document contradictoire.
            </p>
          </div>

          {/* Section 2 */}
          <div className="bg-white p-8 rounded-3xl border border-gray-200/90 shadow-soft space-y-4">
            <div className="flex items-center gap-3 text-brand-dark">
              <Award className="w-6 h-6 text-brand-red flex-shrink-0" />
              <h2 className="text-xl sm:text-2xl font-bold">2. Politique de Garantie Constructeur (3 à 5 Ans)</h2>
            </div>
            <p>
              BRAND Corporation garantit que tous les produits matériels sont exempts de défauts de fabrication et de vices de matière dans des conditions d'utilisation et d'installation normales :
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 bg-gray-50 rounded-2xl border border-gray-200 space-y-1">
                <span className="text-[10px] font-bold uppercase text-brand-red">Gamme Entreprise</span>
                <h4 className="font-bold text-brand-dark text-sm">Garantie 5 Ans</h4>
                <p className="text-xs text-gray-500">
                  Caméras WizMind Série 5/7, Enregistreurs NVR Série 5/6, Serveurs IA et Switchs industriels durcis.
                </p>
              </div>
              <div className="p-4 bg-gray-50 rounded-2xl border border-gray-200 space-y-1">
                <span className="text-[10px] font-bold uppercase text-brand-red">Gamme Professionnelle</span>
                <h4 className="font-bold text-brand-dark text-sm">Garantie 3 Ans</h4>
                <p className="text-xs text-gray-500">
                  Caméras WizSense Série 2/3, Terminaux de Contrôle d'accès, Interphones vidéo IP et centrales d'alarme.
                </p>
              </div>
              <div className="p-4 bg-gray-50 rounded-2xl border border-gray-200 space-y-1">
                <span className="text-[10px] font-bold uppercase text-brand-red">Accessoires & Consommables</span>
                <h4 className="font-bold text-brand-dark text-sm">Garantie 2 Ans</h4>
                <p className="text-xs text-gray-500">
                  Alimentations déportées, supports de fixation murale/poteau, badges RFID et cartes mémoires industrielles.
                </p>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="bg-white p-8 rounded-3xl border border-gray-200/90 shadow-soft space-y-4">
            <div className="flex items-center gap-3 text-brand-dark">
              <RotateCcw className="w-6 h-6 text-brand-red flex-shrink-0" />
              <h2 className="text-xl sm:text-2xl font-bold">3. Procédure de Retour SAV & RMA (Return Merchandise Authorization)</h2>
            </div>
            <p>
              Tout retour de matériel défectueux nécessite l'obtention préalable d'un numéro d'autorisation <strong>RMA officiel</strong> :
            </p>
            <ol className="list-decimal pl-6 space-y-2 text-xs sm:text-sm text-gray-600">
              <li><strong>Création de la demande :</strong> Ouverture d'un ticket en ligne sur notre portail <Link href="/support" className="text-brand-red font-semibold hover:underline">Support & RMA</Link> avec mention du numéro de série et descriptif du symptôme constaté.</li>
              <li><strong>Diagnostic distant :</strong> Validation préliminaire par un ingénieur support sous 24 heures pour écarter un simple problème de configuration ou de firmware.</li>
              <li><strong>Expédition :</strong> Envoi du produit dans un emballage antistatique sécurisé avec mention visible du numéro RMA sur le colis.</li>
              <li><strong>Délais de traitement :</strong> Réparation ou remplacement à neuf sous <strong>5 jours ouvrés</strong> à compter de la réception au centre technique régional.</li>
            </ol>
          </div>

          {/* Section 4 */}
          <div className="bg-white p-8 rounded-3xl border border-gray-200/90 shadow-soft space-y-4">
            <div className="flex items-center gap-3 text-brand-dark">
              <ShieldAlert className="w-6 h-6 text-brand-red flex-shrink-0" />
              <h2 className="text-xl sm:text-2xl font-bold">4. Responsabilité & Conformité Légale des Installations</h2>
            </div>
            <p>
              L'acquéreur ou l'exploitant du système est seul responsable de la conformité de l'installation de vidéosurveillance avec la législation applicable dans le pays d'exploitation (déclarations préfectorales, signalétique d'information du public, respect des zones d'exclusion privatives).
            </p>
            <p>
              BRAND Corporation décline toute responsabilité en cas de détournement d'usage des fonctionnalités d'enregistrement vidéo ou d'analyse comportementale à des fins illicites ou portant atteinte aux libertés individuelles.
            </p>
          </div>

          {/* Section 5 */}
          <div className="bg-white p-8 rounded-3xl border border-gray-200/90 shadow-soft space-y-4">
            <div className="flex items-center gap-3 text-brand-dark">
              <Scale className="w-6 h-6 text-brand-red flex-shrink-0" />
              <h2 className="text-xl sm:text-2xl font-bold">5. Droit Applicable & Résolution des Litiges</h2>
            </div>
            <p>
              Les présentes conditions sont soumises au droit français. En cas de différend relatif à l'interprétation ou à l'exécution d'un contrat de vente entre professionnels n'ayant pu trouver d'accord amiable, compétence expresse est attribuée au <strong>Tribunal de Commerce de Paris</strong>.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
