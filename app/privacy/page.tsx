import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Shield, Lock, Eye, Server, FileCheck, Mail } from "lucide-react";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Politique de Confidentialité & Conformité RGPD | BRAND Sécurité AIoT",
  description:
    "Découvrez les engagements de BRAND en matière de protection des données, conformité RGPD (UE 2016/679), chiffrement des flux vidéo et respect de la vie privée.",
  alternates: {
    canonical: "https://brand-aiot.com/privacy",
  },
  openGraph: {
    title: "Politique de Confidentialité & Protection des Données | BRAND",
    description: "Conformité RGPD, cybersécurité des caméras IP et protection de la vie privée.",
    url: "https://brand-aiot.com/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", item: "https://brand-aiot.com" },
          { name: "Politique de Confidentialité", item: "https://brand-aiot.com/privacy" },
        ]}
      />

      <div className="bg-brand-light min-h-screen">
        {/* Banner */}
        <div className="bg-brand-dark text-white py-16 px-6">
          <div className="max-w-4xl mx-auto space-y-4">
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <Link href="/" className="hover:text-white transition">Accueil</Link>
              <ChevronRight className="w-3.5 h-3.5 text-gray-600" />
              <span className="text-brand-red font-medium">Vie Privée & RGPD</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
              Politique de Confidentialité & Protection des Données
            </h1>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Dernière mise à jour : 1er Février 2026. Chez BRAND Corporation, la sécurité de vos données et le respect de la vie privée sont au cœur de l'ingénierie de nos solutions AIoT.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-6 py-12 space-y-10 text-gray-700 leading-relaxed text-sm sm:text-base">
          {/* Section 1 */}
          <div className="bg-white p-8 rounded-3xl border border-gray-200/90 shadow-soft space-y-4">
            <div className="flex items-center gap-3 text-brand-dark">
              <Shield className="w-6 h-6 text-brand-red flex-shrink-0" />
              <h2 className="text-xl sm:text-2xl font-bold">1. Cadre Réglementaire & Engagement</h2>
            </div>
            <p>
              BRAND Corporation conçoit ses matériels (caméras IP, enregistreurs NVR, lecteurs biométriques) et ses solutions logicielles dans le strict respect du <strong>Règlement Général sur la Protection des Données (RGPD - Règlement UE 2016/679)</strong> ainsi que des directives de la <strong>CNIL</strong> et des autorités européennes de contrôle.
            </p>
            <p>
              Nos dispositifs intègrent par défaut le principe de <em>Privacy by Design</em> et de <em>Privacy by Default</em> afin de minimiser la collecte de données nominatives et de garantir leur intégrité face aux cybermenaces.
            </p>
          </div>

          {/* Section 2 */}
          <div className="bg-white p-8 rounded-3xl border border-gray-200/90 shadow-soft space-y-4">
            <div className="flex items-center gap-3 text-brand-dark">
              <Eye className="w-6 h-6 text-brand-red flex-shrink-0" />
              <h2 className="text-xl sm:text-2xl font-bold">2. Données Traitées par les Équipements AIoT</h2>
            </div>
            <p>
              Dans le cadre de l'exploitation de systèmes de vidéoprotection et de contrôle d'accès, les équipements BRAND peuvent traiter :
            </p>
            <ul className="list-disc pl-6 space-y-2 text-xs sm:text-sm text-gray-600">
              <li><strong>Flux vidéo bruts et séquences enregistrées :</strong> captures visuelles horodatées stockées localement sur les disques durs des NVR du client ou sur son infrastructure cloud privée.</li>
              <li><strong>Métadonnées d'analyse IA :</strong> classifications d'objets (piétons, deux-roues, véhicules légers), plaques d'immatriculation (LAPI) et données d'analyse de flux sans identification directe.</li>
              <li><strong>Gabarits biométriques chiffrés :</strong> représentations mathématiques irréversibles de visages ou d'empreintes digitales, chiffrées selon la norme AES-256 au sein de la mémoire sécurisée du terminal de contrôle d'accès.</li>
              <li><strong>Données de télémétrie système :</strong> adresses IP locales, versions de firmware et journaux d'événements réseau pour la maintenance préventive.</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="bg-white p-8 rounded-3xl border border-gray-200/90 shadow-soft space-y-4">
            <div className="flex items-center gap-3 text-brand-dark">
              <Lock className="w-6 h-6 text-brand-red flex-shrink-0" />
              <h2 className="text-xl sm:text-2xl font-bold">3. Mesures de Sécurité & Chiffrement</h2>
            </div>
            <p>
              Tous nos produits intègrent des fonctionnalités de pointe pour préserver la confidentialité :
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-gray-50 rounded-2xl border border-gray-200 space-y-1">
                <h4 className="font-bold text-brand-dark text-sm">Masquage Dynamique de Confidentialité</h4>
                <p className="text-xs text-gray-500">
                  Définition de polygones opaques masquant automatiquement les fenêtres d'immeubles ou l'espace public dans le champ de la caméra.
                </p>
              </div>
              <div className="p-4 bg-gray-50 rounded-2xl border border-gray-200 space-y-1">
                <h4 className="font-bold text-brand-dark text-sm">Floutage Automatique des Visages IA</h4>
                <p className="text-xs text-gray-500">
                  Anonymisation en temps réel des visages des passants avec possibilité de défloutage sécurisé sous double mot de passe OPJ.
                </p>
              </div>
              <div className="p-4 bg-gray-50 rounded-2xl border border-gray-200 space-y-1">
                <h4 className="font-bold text-brand-dark text-sm">Chiffrement de Bout en Bout</h4>
                <p className="text-xs text-gray-500">
                  Flux vidéo transportés via HTTPS / TLS 1.3 et SRTP, protégés par des certificats X.509 et clés de chiffrement client inviolables.
                </p>
              </div>
              <div className="p-4 bg-gray-50 rounded-2xl border border-gray-200 space-y-1">
                <h4 className="font-bold text-brand-dark text-sm">Filigrane Numérique Anti-Altération</h4>
                <p className="text-xs text-gray-500">
                  Signature cryptographique infalsifiable sur chaque image garantissant l'admissibilité des preuves vidéo en justice.
                </p>
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <div className="bg-white p-8 rounded-3xl border border-gray-200/90 shadow-soft space-y-4">
            <div className="flex items-center gap-3 text-brand-dark">
              <Server className="w-6 h-6 text-brand-red flex-shrink-0" />
              <h2 className="text-xl sm:text-2xl font-bold">4. Hébergement Européen & Souveraineté</h2>
            </div>
            <p>
              Les services cloud BRAND (gestion de flotte P2P, alertes push mobiles, mises à jour OTA) pour nos clients européens sont hébergés au sein de <strong>centres de données situés dans l'Union Européenne (Francfort et Paris)</strong> certifiés ISO/IEC 27001, ISO 27701 et SOC 2 Type II.
            </p>
            <p>
              BRAND Corporation n'effectue aucun transfert de données vers des pays tiers sans garanties contractuelles appropriées (Clauses Contractuelles Types de la Commission Européenne).
            </p>
          </div>

          {/* Section 5 */}
          <div className="bg-white p-8 rounded-3xl border border-gray-200/90 shadow-soft space-y-4">
            <div className="flex items-center gap-3 text-brand-dark">
              <FileCheck className="w-6 h-6 text-brand-red flex-shrink-0" />
              <h2 className="text-xl sm:text-2xl font-bold">5. Exercice des Droits & Contact DPO</h2>
            </div>
            <p>
              Conformément aux articles 15 à 22 du RGPD, vous disposez d'un droit d'accès, de rectification, d'effacement et de limitation du traitement de vos données personnelles.
            </p>
            <p>
              Pour toute question relative à la protection de la vie privée ou pour exercer vos droits, vous pouvez contacter notre Délégué à la Protection des Données (DPO) :
            </p>
            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-200 space-y-1 text-xs sm:text-sm">
              <p><strong>Délégué à la Protection des Données (DPO) :</strong> BRAND Sécurité Europe SAS</p>
              <p><strong>Adresse postale :</strong> 25 Rue des Technologies, 93290 Tremblay-en-France, France</p>
              <p className="flex items-center gap-2 text-brand-red font-semibold pt-1">
                <Mail className="w-4 h-4" />
                <span>dpo-europe@brand-aiot.com</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
