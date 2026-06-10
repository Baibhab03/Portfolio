// "use client";

// import { motion } from "framer-motion";
// import { Star } from "lucide-react";
// import TiltCard from "@/components/ui/TiltCard";

// const reviews = [
//   {
//     name: "Sarah Chen",
//     role: "E-commerce Founder",
//     initials: "SC",
//     color: "from-[#00e5ff] to-cyan-400",
//     text: "Baibhab delivered a stunning Shopify redesign ahead of schedule. The attention to responsive design was incredible — our mobile conversions went up 30% in the first week. Communication was seamless throughout.",
//   },
//   {
//     name: "James Okoye",
//     role: "SaaS Product Manager",
//     initials: "JO",
//     color: "from-[#39ff14] to-emerald-400",
//     text: "One of the best frontend developers I've hired on Fiverr. He translated our complex Figma prototypes into pixel-perfect React components with smooth animations. Fast delivery and zero revisions needed.",
//   },
//   {
//     name: "Priya Sharma",
//     role: "Startup CEO",
//     initials: "PS",
//     color: "from-violet-500 to-[#00e5ff]",
//     text: "Baibhab built our entire landing page from scratch — the design quality is agency-level. He proactively suggested UI improvements that we hadn't even thought of. Highly recommend for any frontend work.",
//   },
//   {
//     name: "Marcus Reed",
//     role: "Digital Agency Owner",
//     initials: "MR",
//     color: "from-amber-400 to-orange-500",
//     text: "We outsource our frontend builds to Baibhab regularly. Every delivery is clean, responsive, and production-ready. He understands design systems deeply and writes maintainable code. A true professional.",
//   },
//   {
//     name: "Leila Nakamura",
//     role: "Mobile App Founder",
//     initials: "LN",
//     color: "from-pink-500 to-rose-400",
//     text: "The Flutter app Baibhab designed and developed for us feels completely native. Smooth animations, intuitive navigation, and he nailed the branding. Our users love it and so do we.",
//   },
// ];


// function ReviewCard({ r }: { r: (typeof reviews)[0] }) {
//   return (
//     <TiltCard className="w-[340px] sm:w-[380px] h-full flex-shrink-0 rounded-2xl border border-zinc-800/60 bg-white/[0.02] backdrop-blur-sm p-6 flex flex-col gap-4 overflow-hidden">
//       {/* Stars */}
//       <div className="flex gap-0.5">
//         {[...Array(5)].map((_, j) => (
//           <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
//         ))}
//       </div>

//       <p className="text-zinc-300 text-sm leading-relaxed flex-grow italic">
//         &ldquo;{r.text}&rdquo;
//       </p>

//       {/* Author */}
//       <div className="flex items-center gap-3 pt-3 border-t border-zinc-800/60">
//         <div
//           className={`w-9 h-9 rounded-full bg-gradient-to-br ${r.color} flex items-center justify-center text-xs font-bold text-white shrink-0`}
//         >
//           {r.initials}
//         </div>
//         <div>
//           <p className="text-sm font-semibold leading-tight">{r.name}</p>
//           <p className="text-xs text-zinc-500">{r.role}</p>
//         </div>
//       </div>
//     </TiltCard>
//   );
// }

// export default function Reviews() {
//   return (
//     <section className="py-24 overflow-hidden" id="reviews">
//       <div className="max-w-6xl mx-auto px-5 mb-14">
//         <motion.div
//           className="text-center"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//         >
//           <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
//             Client{" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-[#39ff14]">
//               Reviews
//             </span>
//           </h2>
//           <p className="mt-4 text-zinc-400 max-w-md mx-auto">
//             What people say about working with me.
//           </p>
//         </motion.div>
//       </div>

//       {/* Marquee container */}
//       <div className="relative">
//         {/* Edge fades */}
//         <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-zinc-950 to-transparent" />
//         <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-zinc-950 to-transparent" />

//         {/* Scrolling row */}
//         <motion.div
//           className="flex flex-nowrap w-max py-1"
//           animate={{ x: ["0%", "-50%"] }}
//           transition={{
//             duration: 30,
//             repeat: Infinity,
//             ease: "linear",
//             repeatType: "loop",
//           }}
//         >
//           {/* Group 1 */}
//           <div className="flex gap-5 pr-5">
//             {reviews.map((r, i) => (
//               <ReviewCard key={i} r={r} />
//             ))}
//           </div>
//           {/* Group 2 */}
//           <div className="flex gap-5 pr-5">
//             {reviews.map((r, i) => (
//               <ReviewCard key={`dup-${i}`} r={r} />
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
