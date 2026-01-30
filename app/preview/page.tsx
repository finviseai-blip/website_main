import Header from '@/components/header';
import Footer from '@/components/footer';
import { PlayCircle, ImageIcon, Clock } from 'lucide-react';

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

        {/* Video Preview Placeholder */}
        <section className="px-6 py-24 border-b-2 border-accent/40">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 animate-float-up">
              Demo Walkthrough
            </h2>

            <div className="relative rounded-xl border-2 border-accent/40 bg-secondary h-[450px] overflow-hidden group">
              
              {/* Blur Layer */}
              <div className="absolute inset-0 backdrop-blur-md bg-black/40 z-10" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20">
                <PlayCircle size={64} className="text-accent mb-4 animate-pulse" />
                <p className="text-2xl font-semibold text-white">
                  Demo Video Coming Soon
                </p>
                <p className="text-gray-400 mt-2">
                  Interactive product tour will be available here
                </p>
              </div>

              {/* Fake blurred background grid */}
              <div className="grid grid-cols-3 gap-4 p-8 blur-md opacity-40">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="h-32 bg-accent/30 rounded-lg" />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Screenshots Placeholder Grid */}
        <section className="px-6 py-24 bg-secondary border-b-2 border-accent/40">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-16 text-center animate-float-up">
              Interface Screenshots
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {Array.from({ length: 6 }).map((_, idx) => (
                <div
                  key={idx}
                  className="relative h-64 rounded-lg border-2 border-accent/40 overflow-hidden group"
                >
                  {/* blurred mock */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-accent/5 blur-md" />

                  {/* overlay */}
                  <div className="absolute inset-0 backdrop-blur-sm bg-black/50 flex flex-col items-center justify-center text-center">
                    <ImageIcon className="text-accent mb-3" size={36} />
                    <p className="text-white font-semibold">
                      Screenshot Coming Soon
                    </p>
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
