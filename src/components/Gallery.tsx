import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
    "/WhatsApp Image 2026-02-19 at 2.31.33 PM (1).jpeg",
    "/WhatsApp Image 2026-02-19 at 2.31.33 PM.jpeg",
    "/WhatsApp Image 2026-02-19 at 2.31.34 PM (1).jpeg",
    "/WhatsApp Image 2026-02-19 at 2.31.34 PM.jpeg",
    "/WhatsApp Image 2026-02-19 at 2.31.36 PM (1).jpeg",
    "/WhatsApp Image 2026-02-19 at 2.31.36 PM.jpeg",
    "/WhatsApp Image 2026-02-19 at 2.31.39 PM (1).jpeg",
    "/WhatsApp Image 2026-02-19 at 2.31.39 PM.jpeg",
    "/WhatsApp Image 2026-02-19 at 2.31.42 PM (1).jpeg",
    "/WhatsApp Image 2026-02-19 at 2.31.42 PM.jpeg",
    "/WhatsApp Image 2026-02-19 at 2.31.43 PM (1).jpeg",
    "/WhatsApp Image 2026-02-19 at 2.31.43 PM.jpeg",
    "/WhatsApp Image 2026-02-19 at 2.31.45 PM (1).jpeg",
    "/WhatsApp Image 2026-02-19 at 2.31.45 PM.jpeg",
    "/WhatsApp Image 2026-02-19 at 2.31.46 PM.jpeg",
    "/WhatsApp Image 2026-02-19 at 2.31.51 PM.jpeg",
    "/WhatsApp Image 2026-02-19 at 2.31.52 PM (1).jpeg",
    "/WhatsApp Image 2026-02-19 at 2.31.52 PM.jpeg",
];

const Gallery = () => {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const openLightbox = (index: number) => setSelectedIndex(index);
    const closeLightbox = () => setSelectedIndex(null);

    const goNext = () => {
        if (selectedIndex !== null) {
            setSelectedIndex((selectedIndex + 1) % galleryImages.length);
        }
    };

    const goPrev = () => {
        if (selectedIndex !== null) {
            setSelectedIndex(
                (selectedIndex - 1 + galleryImages.length) % galleryImages.length
            );
        }
    };

    return (
        <section id="gallery" className="py-20 gradient-section">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-14 animate-fade-up">
                    <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-3">
                        Gallery
                    </p>
                    <h2 className="font-heading font-black text-3xl md:text-4xl text-foreground mb-4 leading-tight">
                        Our Work <span className="text-gradient-brand">In Action</span>
                    </h2>
                    <p className="text-muted-foreground max-w-xl mx-auto">
                        A glimpse into our operations, team, and the trust we build every
                        day.
                    </p>
                </div>

                {/* Masonry-style Grid */}
                <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4">
                    {galleryImages.map((src, index) => (
                        <div
                            key={index}
                            className="break-inside-avoid group cursor-pointer"
                            onClick={() => openLightbox(index)}
                        >
                            <div className="relative rounded-xl overflow-hidden shadow-card-custom hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
                                <img
                                    src={src}
                                    alt={`Gallery image ${index + 1}`}
                                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                                    loading="lazy"
                                />
                                {/* Hover overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                    <span className="text-white text-sm font-medium font-heading">
                                        View Photo
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedIndex !== null && (
                <div
                    className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
                    onClick={closeLightbox}
                >
                    {/* Close button */}
                    <button
                        onClick={closeLightbox}
                        className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors z-50"
                    >
                        <X className="w-8 h-8" />
                    </button>

                    {/* Previous button */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            goPrev();
                        }}
                        className="absolute left-4 md:left-8 text-white/70 hover:text-white transition-colors z-50 bg-white/10 hover:bg-white/20 rounded-full p-2 backdrop-blur-sm"
                    >
                        <ChevronLeft className="w-8 h-8" />
                    </button>

                    {/* Image */}
                    <img
                        src={galleryImages[selectedIndex]}
                        alt={`Gallery image ${selectedIndex + 1}`}
                        className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    />

                    {/* Next button */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            goNext();
                        }}
                        className="absolute right-4 md:right-8 text-white/70 hover:text-white transition-colors z-50 bg-white/10 hover:bg-white/20 rounded-full p-2 backdrop-blur-sm"
                    >
                        <ChevronRight className="w-8 h-8" />
                    </button>

                    {/* Counter */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm font-heading font-medium bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                        {selectedIndex + 1} / {galleryImages.length}
                    </div>
                </div>
            )}
        </section>
    );
};

export default Gallery;
