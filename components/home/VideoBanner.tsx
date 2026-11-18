"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Play, Pause, Volume2, VolumeX, Shield, Sparkles } from "lucide-react";

export const VideoBanner: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  return (
    <section className="relative w-full min-h-[580px] lg:min-h-[640px] bg-brand-dark overflow-hidden flex items-center justify-center text-white">
      {/* Vidéo de fond haute technologie */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className={`w-full h-full object-cover transition-opacity duration-700 ${
            isPlaying ? "opacity-45" : "opacity-25"
          }`}
          poster="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1920&q=80"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-circuit-board-details-and-components-43180-large.mp4"
            type="video/mp4"
          />
        </video>

        {/* Dégradés d'ambiance */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-brand-dark/70" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent to-brand-dark/90" />
      </div>

      {/* Contenu Foreground */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center flex flex-col items-center">
        {/* Pastille */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-red/90 text-white text-xs font-bold tracking-widest uppercase mb-6 shadow-sm">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Vision RSE & Développement Durable</span>
        </div>

        {/* Slogan officiel demandé */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight max-w-4xl">
          Créer un avenir durable grâce aux technologies avancées
        </h2>

        {/* Sous-titre */}
        <p className="mt-6 text-base sm:text-lg text-gray-300 font-light max-w-2xl leading-relaxed">
          Grâce à des algorithmes AIoT à faible consommation, une production industrielle décarbonée et des systèmes solaires autonomes, nous concevons une sécurité intelligente respectueuse de l'environnement.
        </p>

        {/* Boutons d'action */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-brand-red hover:bg-brand-red-hover text-white text-sm font-bold uppercase tracking-wider transition-all duration-200 shadow-card hover:scale-105"
          >
            <span>En Savoir Plus</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/solutions/smart-city"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm font-bold tracking-wider transition duration-200"
          >
            <span>Rapport RSE 2025</span>
          </Link>
        </div>

        {/* Contrôles flottants */}
        <div className="mt-12 flex items-center gap-3 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-xs text-gray-300">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            aria-label={isPlaying ? "Mettre en pause la vidéo" : "Reprendre la vidéo"}
            className="flex items-center gap-1.5 hover:text-white transition"
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            <span>{isPlaying ? "Pause" : "Lecture"}</span>
          </button>
          <span className="text-gray-600">|</span>
          <button
            onClick={() => setIsMuted(!isMuted)}
            aria-label={isMuted ? "Activer le son" : "Couper le son"}
            className="flex items-center gap-1.5 hover:text-white transition"
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            <span>{isMuted ? "Son Coupé" : "Son Actif"}</span>
          </button>
        </div>

        {/* Rangée de chiffres clés */}
        <div className="mt-16 w-full pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl sm:text-4xl font-black text-brand-red font-mono">180+</div>
            <div className="text-xs text-gray-400 mt-1 uppercase tracking-wider">Pays Desservis</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-black text-white font-mono">23 000+</div>
            <div className="text-xs text-gray-400 mt-1 uppercase tracking-wider">Collaborateurs</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-black text-brand-red font-mono">50 %+</div>
            <div className="text-xs text-gray-400 mt-1 uppercase tracking-wider">Ingénieurs R&D</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-black text-white font-mono">6 000+</div>
            <div className="text-xs text-gray-400 mt-1 uppercase tracking-wider">Brevets Déposés</div>
          </div>
        </div>
      </div>
    </section>
  );
};
