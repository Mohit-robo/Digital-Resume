/* ============================================================
   PROJECT MODAL DATA + INTERACTIONS
   modals.js — loaded only on index.html
   ============================================================ */

const PROJECT_DATA = {
  sentinel: {
    index: 'Professional Project',
    title: 'Sentinel: Real-Time Traffic Monitoring Platform',
    problem: '100+ simultaneous RTSP streams required real-time detection of traffic violations, vehicle classification, ANPR, face recognition, and occupancy — all without frame-drop or alert delay at production scale.',
    approach: 'Built a distributed DeepStream + Triton pipeline decoupled via Kafka for event routing and Redis for low-latency state management. All models served at FP16/INT8 precision.',
    challenges: [
      'Scaling to 100 concurrent streams without GPU memory overflow → multi-process DeepStream bins with stream mux optimization',
      'Low-latency event delivery across analytics modules → Kafka partitioning with per-stream consumer groups',
      'Model serving for 5+ tasks per stream → Triton dynamic batching with per-model concurrency controls',
      'Real-time face matching across non-overlapping views → FAISS-backed feature vector store',
    ],
    outcomes: [
      { value: '100', label: 'RTSP Streams' },
      { value: '30 FPS', label: 'Maintained' },
      { value: '5+', label: 'Analytics Modules' },
      { value: '<500ms', label: 'Alert Latency' },
    ],
    tags: ['DeepStream', 'TensorRT', 'Triton', 'Kafka', 'Redis', 'FAISS', 'ANPR', 'Face Recognition'],
    caseStudyLink: 'case-studies.html#sentinel',
  },
  reid: {
    index: 'Professional Project',
    title: 'Multi-Camera Drive-Thru ReID',
    problem: 'Tracking individual vehicles across non-overlapping camera views in drive-thru lanes. Identity switches caused dwell-time analytics to be unreliable — impacting operations across 20+ QSR locations.',
    approach: 'Custom cross-camera ReID pipeline with single-camera tracker integration and iterative retraining using real-world failure cases as hard negatives.',
    challenges: [
      'Occlusion, lighting variation, and vehicle appearance similarity → robust feature extractors with cosine similarity matching',
      'Cross-camera view gap (non-overlapping FOV) → handoff logic with temporal smoothing and confidence thresholding',
      'Scale: 500+ live cameras across 20+ locations → distributed processing with per-location orchestration',
    ],
    outcomes: [
      { value: '2–5%', label: 'Mismatch (was 15%)' },
      { value: '500+', label: 'Live Cameras' },
      { value: '20+', label: 'Locations' },
    ],
    tags: ['ReID', 'ByteTrack', 'Multi-camera', 'Docker', 'MongoDB', 'Feature Extraction'],
    caseStudyLink: 'case-studies.html#reid',
  },
  bottle: {
    index: 'Professional Project',
    title: 'High-Speed Bottle Inspection',
    problem: 'Manual inspection bottleneck in high-speed manufacturing — could not keep pace with 200 units/minute production rate. High false-acceptance rate causing quality escapes downstream.',
    approach: 'Real-time anomaly detection pipeline with GPU-accelerated inference. Unsupervised + supervised hybrid approach to handle label-scarce manufacturing environment.',
    challenges: [
      'Maintaining inference latency under 200ms at 200 units/min → TensorRT optimization + async pipeline stages',
      'Low defect sample availability → unsupervised + semi-supervised anomaly detection methods',
      'Real-world lighting and surface variation → multi-condition augmentation during training',
    ],
    outcomes: [
      { value: '>95%', label: 'Accuracy' },
      { value: '<1.5%', label: 'False Accept Rate' },
      { value: '180ms', label: 'Inference Latency' },
      { value: '~90%', label: 'Manual Effort Reduced' },
    ],
    tags: ['Anomaly Detection', 'TensorRT', 'Real-time Inference', 'Semi-supervised'],
    caseStudyLink: 'case-studies.html#bottle',
  },
  watch: {
    index: 'Professional Project',
    title: 'Wrist-Watch Defect Detection',
    problem: 'Manual 360° visual inspection of wrist-watch cases taking 30 seconds per unit — creating a production bottleneck with inconsistent results across bezel, case back, lugs, and crystal surfaces.',
    approach: 'Dual-camera synchronized rig capturing all watch surfaces in a single pass. Hardware trigger synchronization eliminates frame drift. Per-surface specialized detection heads for different defect signatures.',
    challenges: [
      'Dual-camera synchronization without frame drift → hardware trigger with sub-millisecond sync tolerance',
      'Multiple surface types with different defect signatures → per-surface specialized model heads',
      'Cycle-time under 30s → parallel inference on both camera feeds with batched model execution',
      'High-gloss reflective surfaces → custom diffuse lighting rig to eliminate specular reflections',
    ],
    outcomes: [
      { value: '8s', label: 'Per Unit (was 30s)' },
      { value: '73%', label: 'Cycle-time Reduction' },
      { value: '360°', label: 'Surface Coverage' },
      { value: '5+', label: 'Defect Types' },
    ],
    tags: ['Defect Detection', 'Dual-camera', 'Pipeline Orchestration', 'Synchronized Capture'],
    caseStudyLink: 'case-studies.html#watch',
  },

  // ---- Personal Projects ----
  oneanomaly: {
    index: 'Personal Project',
    title: 'OneAnomaly',
    problem: 'Industrial anomaly detection models require large labelled defect datasets — which rarely exist in real manufacturing settings. Most tooling is cloud-only, adding latency and data privacy concerns.',
    approach: 'Hybrid cloud-edge architecture: FAISS-backed vector search runs locally on GPU for sub-millisecond similarity search, while a lightweight FastAPI service provides the cloud UI and remote monitoring layer.',
    challenges: [
      'Label scarcity → unsupervised anomaly detection using feature similarity rather than explicit defect labels',
      'Edge latency constraints → local FAISS index with GPU-accelerated embedding extraction',
      'Cloud-edge data sync → delta-sync protocol to keep cloud UI consistent without full uploads',
    ],
    outcomes: [
      { value: 'Local', label: 'GPU Inference' },
      { value: 'FAISS', label: 'Vector Search' },
      { value: '0-shot', label: 'No Defect Labels' },
    ],
    tags: ['FAISS', 'Vector Search', 'Anomaly Detection', 'FastAPI', 'Edge AI'],
    caseStudyLink: 'https://github.com/Mohit-robo/OneAnomaly',
    caseStudyLabel: 'GitHub Repo',
  },
  oneproductiq: {
    index: 'Personal Project',
    title: 'OneProductIQ',
    problem: 'E-commerce search is keyword-only — users cannot find products by describing them in natural language or uploading reference images, leading to poor discovery and lost conversions.',
    approach: 'Multimodal retrieval pipeline using Qwen3-VL for visual understanding, RAG for product context, and an agentic tool-calling layer to handle complex queries like "find me something similar to this but cheaper".',
    challenges: [
      'Multimodal query understanding (text + image) → Qwen3-VL for joint embedding and reasoning',
      'Real-time product recommendations → pre-built vector index with incremental updates',
      'Agent tool calling stability → structured output prompting with retry logic',
    ],
    outcomes: [
      { value: 'VLM', label: 'Powered Search' },
      { value: 'RAG', label: 'Product Context' },
      { value: 'Agentic', label: 'Tool Calling' },
    ],
    tags: ['VLM', 'Qwen3-VL', 'RAG', 'Prompt Engineering', 'Multimodal', 'LangChain'],
    caseStudyLink: 'https://github.com/Mohit-robo/OneProductIQ',
    caseStudyLabel: 'GitHub Repo',
  },
  oneeye: {
    index: 'Personal Project',
    title: 'OneEye',
    problem: 'Prototype exploration of scalable real-time monitoring architectures — targeting the challenge of processing multiple simultaneous video streams on resource-constrained edge hardware.',
    approach: 'Modular pipeline design with pluggable inference backends, focused on Jetson-class edge deployment and multi-stream RTSP processing with minimal resource overhead.',
    challenges: [
      'Multi-stream processing on edge GPU → async pipeline stages with shared model instances',
      'Memory constraints on Jetson → INT8 quantisation and model pruning',
      'Architecture modularity → plugin-style detector/tracker interfaces for swappable components',
    ],
    outcomes: [
      { value: 'Edge', label: 'Optimised' },
      { value: 'Multi-stream', label: 'RTSP Processing' },
      { value: 'Modular', label: 'Plugin Architecture' },
    ],
    tags: ['Computer Vision', 'Edge AI', 'Jetson', 'RTSP', 'Real-time'],
    caseStudyLink: 'https://github.com/Mohit-robo/OneEye',
    caseStudyLabel: 'GitHub Repo',
  },
};

function buildModalHTML(data) {
  const challengesHTML = data.challenges.map(c =>
    `<div class="modal-item">${c}</div>`
  ).join('');

  const outcomesHTML = data.outcomes.map(o =>
    `<div class="modal-outcome"><div class="modal-outcome-value">${o.value}</div><div class="modal-outcome-label">${o.label}</div></div>`
  ).join('');

  const tagsHTML = data.tags.map(t =>
    `<span class="tag">${t}</span>`
  ).join('');

  const caseStudyLabel = data.caseStudyLabel || 'Read Full Case Study';
  return `
    <div class="modal-index">${data.index}</div>
    <h2 class="modal-title">${data.title}</h2>

    <div class="modal-section">
      <div class="modal-label">Problem</div>
      <p class="modal-text">${data.problem}</p>
    </div>

    <div class="modal-section">
      <div class="modal-label">Approach</div>
      <p class="modal-text">${data.approach}</p>
    </div>

    <div class="modal-section">
      <div class="modal-label">Key Challenges</div>
      <div class="modal-items">${challengesHTML}</div>
    </div>

    <div class="modal-section">
      <div class="modal-label">Outcome</div>
      <div class="modal-outcomes">${outcomesHTML}</div>
    </div>

    <div class="modal-section">
      <div class="modal-label">Tech Stack</div>
      <div class="modal-tags">${tagsHTML}</div>
    </div>

    <a href="${data.caseStudyLink}" class="modal-link" target="${data.caseStudyLink.startsWith('http') ? '_blank' : '_self'}" rel="noopener noreferrer">${caseStudyLabel} &rarr;</a>
  `;
}

(function initModals() {
  const overlay = document.getElementById('project-modal');
  const content = document.getElementById('modal-content');
  const closeBtn = document.getElementById('modal-close');

  if (!overlay) return;

  // Open modal on pro-card click (but NOT on case study link click)
  document.querySelectorAll('.pro-card').forEach(card => {
    card.addEventListener('click', (e) => {
      // Don't open modal if user clicked the case study link or video area
      if (e.target.closest('.project-card__link')) return;
      if (e.target.closest('.project-card__video')) return;

      const key = card.dataset.modal;
      const data = PROJECT_DATA[key];
      if (!data) return;

      content.innerHTML = buildModalHTML(data);
      overlay.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeModal() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  closeBtn.addEventListener('click', closeModal);

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
})();
