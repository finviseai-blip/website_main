 "use client";

import Header from '@/components/header';
import Footer from '@/components/footer';
import { PlayCircle, ImageIcon, Clock } from 'lucide-react';
import Image from "next/image";
import { useState } from "react";
const screenshots = [
  "/images/ss1.jpeg",
  "/images/ss2.jpeg",
  "/images/ss3.jpeg",
  "/images/ss4.jpeg",
  "/images/ss5.jpeg",
  "/images/ss6.jpeg",
];


export default function Preview() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">

        {/* Hero */}
        <section className="relative w-full h-screen min-h-[650px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-black/80 z-10" />
          <div
            className="absolute inset-0 blur-sm"
            style={{
              backgroundImage: 'url(/image3.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />

          <div className="relative z-20 text-center px-6 max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-2">
              <Clock className="text-accent" size={18} />
              <span className="text-sm font-medium text-accent uppercase tracking-wide">
                Preview Section
              </span>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold text-white mb-8">
              App Preview <span className="text-accent">Coming Soon</span>
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed">
              We are preparing a full visual walkthrough of the platform.
              Demo videos and live interface previews will be available here shortly.
            </p>
          </div>
        </section>



{/* Video Preview Section */}
<section className="px-6 py-24 border-b-2 border-accent/40">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold mb-12 animate-float-up">
      Demo Walkthrough
    </h2>

    <div className="flex justify-center">
      {/* Phone Container */}
      <div className="relative w-full max-w-sm rounded-2xl border-2 border-accent/40 bg-black p-4 shadow-xl">

        {/* 9:16 Mobile Video Frame */}
        <div className="relative aspect-[9/16] overflow-hidden rounded-xl bg-secondary">

          {/* ▶️ Video (loads after click) */}
          <video
            src="/demo.mp4"   // 🔁 your video path
            controls
            playsInline
            className="absolute inset-0 w-full h-full object-contain"
          />

          {/* ▶️ Click Overlay */}
          <div
            className="absolute inset-0 z-20 flex cursor-pointer flex-col items-center justify-center bg-black/60 backdrop-blur-md transition-opacity hover:bg-black/70"
            onClick={(e) => {
              const video = e.currentTarget
                .previousElementSibling as HTMLVideoElement;
              video.play();
              e.currentTarget.classList.add("hidden");
            }}
          >
            <PlayCircle size={72} className="text-accent mb-4 animate-pulse" />
            <p className="text-xl font-semibold text-white">
              Tap to Play Demo
            </p>
            <p className="text-gray-400 mt-2 text-sm">
              Mobile walkthrough video
            </p>
          </div>

        </div>
      </div>
    </div>
  </div>
</section>


        {/* Screenshots Placeholder Grid */}
        <section className="px-6 py-24 bg-secondary border-b-2 border-accent/40">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-16 text-center animate-float-up">
              Interface Previews
            </h2>

            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
              {screenshots.map((src, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border-2 border-accent/40 bg-black p-4 shadow-lg"
                >
                  {/* Phone-like container */}
                  <div className="relative w-full aspect-[9/16] overflow-hidden rounded-xl bg-black">
                    <Image
                      src={src}
                      alt={`Screenshot ${idx + 1}`}
                      fill
                      priority={idx === 0}
                      className="object-contain"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* Status Section */}
        <section className="px-6 py-24 text-center">
          <div className="max-w-3xl mx-auto animate-float-up">
            <Clock className="mx-auto text-accent mb-6" size={48} />
            <h2 className="text-4xl font-bold mb-6">
              Preview Assets In Progress
            </h2>
            <p className="text-xl text-foreground/70 leading-relaxed">
              Our team is currently recording walkthrough videos and capturing
              high-quality interface previews. This section will update automatically
              once assets are ready.
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
