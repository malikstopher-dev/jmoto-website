export const galleryData: Record<string, string[]> = {
  electrical: [
    "/assets/05_gallery_enhanced_webp/01-jmoto-electrician-control-panel.webp",
    "/assets/05_gallery_enhanced_webp/09-distribution-board-electrical-work.webp",
    "/assets/05_gallery_enhanced_webp/10-distribution-board-wiring.webp",
    "/assets/05_gallery_enhanced_webp/11-distribution-board-connection.webp",
    "/assets/05_gallery_enhanced_webp/12-electrical-conduit-construction.webp",
    "/assets/05_gallery_enhanced_webp/13-electrical-conduit-roof-slab.webp",
  ],
  solar: [
    "/assets/05_gallery_enhanced_webp/05-solar-roof-mounting-rails.webp",
    "/assets/05_gallery_enhanced_webp/06-solar-panel-testing-rooftop.webp",
    "/assets/05_gallery_enhanced_webp/14-rooftop-solar-installation-team.webp",
  ],
  cctv: [],
  inverter: [
    "/assets/05_gallery_enhanced_webp/07-inverter-installation-conduit.webp",
    "/assets/05_gallery_enhanced_webp/08-inverter-installation-wall.webp",
  ],
  battery: [],
  training: [
    "/assets/05_gallery_enhanced_webp/02-training-classroom-instructor.webp",
    "/assets/05_gallery_enhanced_webp/03-training-classroom-computers.webp",
    "/assets/05_gallery_enhanced_webp/04-training-classroom-session.webp",
    "/assets/05_gallery_enhanced_webp/15-practical-technical-training.webp",
    "/assets/05_gallery_enhanced_webp/16-training-workshop-room-a.webp",
    "/assets/05_gallery_enhanced_webp/17-training-workshop-room-b.webp",
    "/assets/05_gallery_enhanced_webp/18-training-workshop-room-c.webp",
    "/assets/05_gallery_enhanced_webp/19-training-workshop-room-d.webp",
  ],
  electronicsSupply: [],
};

export const serviceToGalleryMap: Record<string, keyof typeof galleryData> = {
  electrical: "electrical",
  solar: "solar",
  cctv: "cctv",
  inverter: "inverter",
  battery: "battery",
  training: "training",
  electronicsSupply: "electronicsSupply",
};
