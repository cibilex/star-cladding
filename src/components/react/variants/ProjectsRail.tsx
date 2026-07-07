import { useEffect, useRef, useState } from "react";
import {
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "motion/react";
import { ArrowLeft, ArrowRight, Building2, MapPin } from "lucide-react";
import type { Project } from "@/data/site";

/**
 * V1 "Cinematic Rail" — draggable, snapping horizontal rail of tall project
 * cards. Hydrated with client:visible from ProjectsV1.astro (heading stays
 * static in the .astro file). Rendered on a navy (bg-primary) section.
 * `image` arrives as an already-optimized URL string (built with getImage()
 * in the .astro), or null for the gradient placeholder.
 */

type RailProject = Omit<Project, "image"> & { image?: string | null };

interface Props {
  projects: RailProject[];
}

/** gap between cards — keep in sync with the `gap-6` class on the track */
const GAP = 24;

/** subtle gradient variation per card index (literal strings so Tailwind sees them) */
const GRADIENTS = [
  "from-graphite via-primary to-steel-blue",
  "from-steel-blue via-graphite to-vibrant-steel-blue",
  "from-vibrant-steel-blue via-primary to-graphite",
  "from-primary via-steel-blue to-graphite",
];

export default function ProjectsRail({ projects }: Props) {
  const reduce = useReducedMotion();
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const [maxDrag, setMaxDrag] = useState(0);
  const x = useMotionValue(0);
  /** initial offset that centers the middle card; snap positions are relative to it */
  const baseX = useRef(0);
  const centeredOnce = useRef(false);

  // how far the track can translate left (drag range)
  useEffect(() => {
    const measure = () => {
      const viewport = viewportRef.current;
      const track = trackRef.current;
      if (!viewport || !track) return;
      const max = Math.max(0, track.scrollWidth - viewport.offsetWidth);
      setMaxDrag(max);

      // Start centered: the middle card sits at the viewport center with its
      // neighbours peeking in from both edges (only on first measure).
      if (!centeredOnce.current && max > 0) {
        const card = track.firstElementChild as HTMLElement | null;
        if (card) {
          const step = card.offsetWidth + GAP;
          const mid = Math.floor((projects.length - 1) / 2);
          const padLeft = parseFloat(getComputedStyle(track).paddingLeft) || 0;
          const target =
            viewport.offsetWidth / 2 -
            padLeft -
            mid * step -
            card.offsetWidth / 2;
          baseX.current = Math.min(0, Math.max(-max, target));
          x.set(baseX.current);
          centeredOnce.current = true;
        }
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const progress = useTransform(x, (v) =>
    maxDrag > 0 ? Math.min(1, Math.max(0, -v / maxDrag)) : 0,
  );

  const cardStep = () => {
    const card = trackRef.current?.firstElementChild as HTMLElement | null;
    return card ? card.offsetWidth + GAP : 400;
  };

  const clamp = (v: number) => Math.min(0, Math.max(-maxDrag, v));

  const settle = (target: number) => {
    animate(x, clamp(target), {
      type: "spring",
      stiffness: 260,
      damping: 34,
    });
  };

  // nearest snap position on the grid anchored at the centered start offset
  const snapGrid = (v: number) => {
    const step = cardStep();
    return baseX.current + Math.round((v - baseX.current) / step) * step;
  };

  // snap to the nearest card position after a drag
  const snap = () => settle(snapGrid(x.get()));

  const shift = (dir: 1 | -1) => settle(snapGrid(x.get() - dir * cardStep()));

  return (
    <div>
      <div ref={viewportRef} className="overflow-hidden">
        <motion.div
          ref={trackRef}
          drag="x"
          dragConstraints={{ left: -maxDrag, right: 0 }}
          dragElastic={0.12}
          dragMomentum={false}
          style={{ x }}
          onDragStart={() => {
            dragging.current = true;
          }}
          onDragEnd={() => {
            snap();
            setTimeout(() => {
              dragging.current = false;
            }, 60);
          }}
          className="flex cursor-grab gap-6 px-margin-mobile pb-3 active:cursor-grabbing md:px-margin-desktop"
        >
          {projects.map((project, i) => (
            <motion.a
              key={project.slug}
              href={`/projeler/${project.slug}`}
              draggable={false}
              onClick={(e) => {
                if (dragging.current) e.preventDefault();
              }}
              initial={reduce ? undefined : { opacity: 0, y: 48 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: "easeOut" }}
              className="group relative h-[70svh] max-h-[620px] min-h-[440px] w-[85vw] shrink-0 select-none sm:w-[420px] lg:w-[460px]"
            >
              {/* offset outline frame behind the photo; eases toward it on hover */}
              <div
                className="absolute inset-0 translate-x-3 translate-y-3 border border-white/30 transition-transform duration-500 group-hover:translate-x-1.5 group-hover:translate-y-1.5"
                aria-hidden="true"
              />

              <div className="absolute inset-0 overflow-hidden">
                {project.image ? (
                  <>
                    <img
                      src={project.image}
                      alt={`${project.title} — ${project.category}`}
                      loading="lazy"
                      decoding="async"
                      draggable={false}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                    />
                    {/* navy scrim so the chip stays readable over the photo */}
                    <div
                      className="absolute inset-0 bg-gradient-to-b from-primary/50 via-primary/10 to-transparent"
                      aria-hidden="true"
                    />
                  </>
                ) : (
                  <>
                    {/* gradient placeholder for imageless projects */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${GRADIENTS[i % GRADIENTS.length]} transition-transform duration-700 ease-out group-hover:scale-[1.05]`}
                    />
                    <Building2
                      className="absolute left-1/2 top-1/2 size-20 -translate-x-1/2 -translate-y-1/2 text-white/10"
                      aria-hidden="true"
                    />
                  </>
                )}

                {/* category badge chip */}
                <span className="absolute left-5 top-5 border border-white/25 bg-white/10 px-3 py-1.5 text-label uppercase tracking-widest text-white backdrop-blur-sm">
                  {project.category}
                </span>

                {/* bottom copy */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/35 to-transparent p-6 pt-16">
                  <h3 className="font-display text-2xl font-bold text-white">
                    {project.title}
                  </h3>
                  <p className="mt-1 flex items-center gap-1.5 text-label uppercase tracking-widest text-white/70">
                    <MapPin className="size-3.5" aria-hidden="true" />
                    {project.location} · {project.year}
                  </p>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/80">
                    {project.summary}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* progress bar + desktop arrows */}
      <div className="mt-10 flex items-center gap-6 px-margin-mobile md:px-margin-desktop">
        <div className="h-0.5 flex-1 bg-white/15">
          <motion.div
            style={{ scaleX: progress }}
            className="h-full origin-left bg-vibrant-steel-blue"
          />
        </div>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => shift(-1)}
            aria-label="Önceki proje"
            className="flex size-10 items-center justify-center border border-white/25 text-white transition-colors hover:border-white hover:bg-white/10 md:size-11"
          >
            <ArrowLeft className="size-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => shift(1)}
            aria-label="Sonraki proje"
            className="flex size-10 items-center justify-center border border-white/25 text-white transition-colors hover:border-white hover:bg-white/10 md:size-11"
          >
            <ArrowRight className="size-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
