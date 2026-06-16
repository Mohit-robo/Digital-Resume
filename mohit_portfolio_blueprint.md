# Mohit Gaikwad — Portfolio Website Blueprint
**Purpose:** Consulting client acquisition + credibility signal for senior roles  
**Stack:** Plain HTML / CSS / Vanilla JS — 3 pages, no frameworks required  
**Positioning:** Computer Vision Systems Engineer · Real-Time AI Consultant

---

## GLOBAL DESIGN DECISIONS

**Typography**
- Display: `Space Grotesk` (technical weight, not generic sans)
- Body: `Inter`
- Code / metric labels: `JetBrains Mono`

**Color Palette**
- Background: `#0D0F14` (near-black, not generic dark-grey)
- Surface: `#13161D`
- Border: `#1E2330`
- Accent: `#00C2A8` (teal — maps to vision / sensor tech)
- Text primary: `#E8ECF4`
- Text muted: `#6B7280`

**Signature element:** The interactive timeline nodes — clicking a node doesn't open a modal, it expands inline with a left-border pulse animation. Feels like a system log expanding. Appropriate for an AI systems engineer.

**Motion rule:** Scroll-triggered fade-up only. No parallax. No looping animations. Fast (200–300ms). Respects `prefers-reduced-motion`.

---

## PAGE 1 — HOME (`index.html`)

### SECTION 1: HERO

```
┌─────────────────────────────────────────────────────┐
│  MOHIT GAIKWAD                                       │
│  Computer Vision Engineer · Real-Time AI Consultant  │
│                                                      │
│  Building production-grade computer vision systems   │
│  for surveillance, industrial inspection,            │
│  and real-time analytics.                            │
│                                                      │
│  [Explore Projects] Page Linked [Book Consultation]  │
│                                                      │
└─────────────────────────────────────────────────────┘
```

**Content rules:**
- Name large, role below, one-line positioning statement
- Metrics row: only the 5 numbers above — pulled directly from resume. No invented stats.
- Two CTAs only: `Explore Projects` (scrolls to projects) · `Book Consultation` (mailto or Calendly)
- No photo here. Optional: abstract pipeline animation (SVG, subtle)

---

### SECTION 2: ABOUT ME

6–8 lines. Paragraph only. No bullets.

> Production-focused Computer Vision Engineer with 3.5+ years of experience designing and deploying real-time AI systems across video analytics, surveillance, industrial inspection, and robotics. Specialized in end-to-end vision pipelines, from model optimization using TensorRT, Triton, and DeepStream through to edge deployment on Jetson hardware. At Wobot.ai, built multi-camera ReID systems covering 500+ live cameras across 20+ restaurant locations. At Griffyn Robotech, currently engineering industrial inspection pipelines processing 200 units per minute with 95%+ accuracy. My work sits at the intersection of computer vision and systems engineering — writing code that ships, stays stable, and solves real operational problems.

---

### SECTION 3: PROFESSIONAL TIMELINE (Interactive)

Vertical timeline. Click any node → expands inline (no modal). Collapsed = role + company + year. Expanded = key work + tech used.

---

**Node 1 — Oct 2020 · SVR InfoTech, Pune**
- Collapsed: `Robotics Software Engineer · Embedded Systems & Factory Automation`
- Expanded:
  - Autonomous factory automation prototype (AI + Computer Vision)
  - Jetson Nano, Jetson Xavier NX, Raspberry Pi
  - Introduction to embedded AI deployment

---

**Node 2 — Jan 2022 · Schnell Labs (Remote)**
- Collapsed: `Computer Vision Intern · Traffic Surveillance & Edge AI`
- Expanded:
  - Smart traffic monitoring pipeline for edge devices
  - ANPR, object detection, detection → tracking → analytics workflow
  - Python, MySQL, Raspberry Pi

---

**Node 3 — Sep 2022 · Wobot.ai, Delhi**
- Collapsed: `Computer Vision Engineer · Large-Scale Multi-Camera Intelligence`
- Expanded:
  - Drive-thru analytics: Multi camera vehicle ReID across 500+ cameras, 20+ QSR locations
  - Reduced identity mismatch from 12–15% → 2–5%
  - Staff-assisted checkout detection system (>20 checkouts/hour)
  - Zero-shot object detection & classification
  - Automated training + evaluation pipelines (Docker, CI/CD, MongoDB, MLOps)
  - Multi-object tracking: BoTSort, ByteTrack, Hybrid Sort

---

**Node 4 — Nov 2024 · Griffyn Robotech (Current)**
- Collapsed: `Computer Vision Engineer · Industrial Inspection Systems and Video Analytics`
- Expanded:
  - Sentinel: 100 RTSP stream traffic platform (DeepStream + Redis + Kafka) with face recognition, ANPR, vehicle classification, occupancy detection and Traffic Signal Violations 
  - High-speed bottle inspection: 200 bottles/min, 95%+ accuracy, <1.5% false acceptance rate. 90% manual effort reduction. Multi camera Inspection System
  - Wrist-watch defect detection: 73% cycle-time reduction (30s → 8s)
  - Supervised and Unsupervised anomaly detection. 

---

### SECTION 4: FEATURED PROJECTS

4 cards — work projects (metrics-driven) + 3 personal projects (architecture + status)

**Card format:**
```
[Project Name]
[2–3 line description]
[Key metrics or status badge]
[Tech tags]
[→ Case Study link (Page 3) or GitHub link]
```

**Card 1 — Sentinel: Traffic Monitoring**
- 100 RTSP streams · 30 FPS · DeepStream + Triton + Redis + Kafka
- Pipeline: Detection → Occupancy classification/ Traffic Signal Violations → ANPR → Vehicle Classification. Face Recognition across multiple views  
- Tags: `DeepStream` `TensorRT` `Triton` `Kafka` `Redis`

**Card 2 — Multi-Camera Drive-Thru ReID**
- 500+ cameras · 20+ locations · mismatch reduced from 12–15% → 2–5%
- Tags: `ReID` `Multi-camera` `ByteTrack` `Docker` `MongoDB`
- → Link: Case Study (Page 3)

**Card 3 — High-Speed Bottle Inspection**
- 200 bottles/min · >95% accuracy · <1.5% false acceptance · ~90% manual effort reduced
- Tags: `Anomaly Detection` `TensorRT` `Real-time Inference`
- → Link: Case Study (Page 3)

**Card 4 — Wrist-Watch Defect Detection**
- 73% inspection cycle-time reduction (30s → 8s/unit)
- Dual-camera sync, 360° surface coverage
- Tags: `Defect Detection` `Dual-camera` `Pipeline Orchestration`
- → Link: Case Study (Page 3)

**Card 5 — OneAnomaly** *(Personal Project)*
- Hybrid cloud-edge anomaly detection software
- FAISS vector search · Local GPU inference · Cloud UI
- Tags: `FAISS` `Vector Search` `Anomaly Detection` `FastAPI`
- → GitHub: github.com/Mohit-robo/OneAnomaly · [Embed video from Drive]

**Card 6 — OneProductIQ** *(Personal Project)*
- Ai Powered E-commerce website using llms, vlms, RAG and basic Agents tool calling
- Tags: `VLM` `Qwen3-VL` `Prompt Engineering` `Multimodal`
- → GitHub: github.com/Mohit-robo/OneProductIQ - refer for details · [Embed video from Drive]

**Card 7 — OneEye** *(Personal Project)*
- [Add your description here — mention the project concept briefly]
- → GitHub: github.com/Mohit-robo/OneEye - refer for details · [Embed video from Drive]

---

### SECTION 5: CONSULTING AREAS

4 boxes. No paragraphs. Headline + 3 bullets each.

```
┌──────────────────────┐  ┌──────────────────────┐
│ Surveillance Systems │  │ Industrial Inspection │
│ • ANPR / LPR         │  │ • Defect detection    │
│ • Multi-camera ReID  │  │ • Anomaly detection   │
│ • Traffic analytics  │  │ • High-speed QA       │
└──────────────────────┘  └──────────────────────┘
┌──────────────────────┐  ┌──────────────────────┐
│ Real-Time Deployment │  │ Edge AI Systems       │
│ • TensorRT pipelines │  │ • Jetson deployment   │
│ • Triton serving     │  │ • RTSP pipelines      │
│ • DeepStream setup   │  │ • Multi-stream proc.  │
└──────────────────────┘  └──────────────────────┘
```

CTA at bottom: `Let's Discuss Your Project → [Book Call]`

---

### SECTION 6: FOOTER

- GitHub · LinkedIn · Medium · Email
- No copyright year hardcoded (will go stale)

---

## PAGE 2 — TECHNICAL EXPERTISE (`expertise.html`)

### SECTION 1: PAGE HEADER

```
Technical Expertise
Tools and systems I have deployed in production.
```

No star ratings. No progress bars. Grouped by capability domain.

---

### SECTION 2: CAPABILITY GROUPS

Each group = heading + tag cloud of actual tools used

---

**Computer Vision**
`Object Detection` `Image Segmentation` `Multi-Object Tracking` `Multi-Camera ReID` `OCR / ANPR` `Anomaly Detection` `Zero-Shot Detection` `Video Analytics` `Feature Extraction` `Face Recognition` `Image Classification` `Image Retrieval` `Feature extraction`

**Models**:
`YOLO` `U-Net` `DINO` `SAM` `D-Fine` `CRAFT` `ParSeq` `Swin-T` `CLIP` 

**Tracking algorithms**:
`ByteTrack` `BoTSort` `DeepSort` `HybridSort` `OC-SORT`

---

**Inference Optimization & Deployment**
`TensorRT` `Triton Inference Server` `DeepStream` `ONNX` `GStreamer` `Quantization (INT8/FP16)` `Model Graph Surgery` `Knowledge Distillation` `Transfer Learning`

---

**Edge & Real-Time Systems**
`NVIDIA Jetson Xavier NX` `Jetson Nano` `Hailo Accelerators` `Raspberry Pi` `RTSP Streaming` `Multi-stream Processing`

---

**ML Systems & Pipelines**
`Docker` `CI/CD` `MLflow` `DVC` `Automated Training Pipelines` `Model Evaluation Pipelines` `Experiment Tracking` `Production Debugging`

---

**Backend & Infrastructure**
`FastAPI` `REST APIs` `Kafka` `Redis` `MongoDB` `WebSocket / MQTT` `AWS (exposure)`

---

**Vector Search & AI Infrastructure**
`FAISS` `ChromaDB` `Qdrant` `Similarity Search`

---

**Languages**
`Python` `SQL`

---

**Current Exploration**
`VLMs` `Prompt Engineering` `LangChain` `RAG Pipelines` `Agentic Systems`

---

### SECTION 3: PROFESSIONAL EVOLUTION (Visual flow — this page only)

Compact horizontal or vertical flow. Not a timeline — a capability progression.

```
Embedded Systems (2020)
        ↓
Computer Vision Foundations (2021)
        ↓
Traffic Surveillance & Edge AI (2022)
        ↓
Production Multi-Camera Systems (2023–2024)
        ↓
Real-Time Industrial Vision (2024–Present)
```

Render as SVG or CSS-drawn flow. No images needed.

---

## PAGE 3 — CASE STUDIES (`case-studies.html`)

**Purpose:** Win consulting clients. Deep technical proof, not marketing copy.

Each case study uses the same template:

```
Problem
Approach
Architecture (diagram or pipeline flow)
Challenges & Solutions
Outcome (metrics only)
```

---

### Case Study 1 — High-Speed Bottle Inspection

**Problem:** Manual inspection bottleneck in high-speed manufacturing — could not keep pace with 200 units/minute production rate. High false-acceptance rate causing quality escapes.

**Approach:** Real-time anomaly detection pipeline with GPU-accelerated inference. Unsupervised + supervised hybrid approach to handle label-scarce manufacturing environment.

**Architecture:**
```
Camera Feed → Preprocessing → Anomaly Detection Model (TensorRT)
           → Defect Classification → Accept / Reject Signal
           → Production line trigger
```

**Challenges:**
- Maintaining inference latency under 200ms at 200 units/min
- Low defect sample availability → used unsupervised + semi-supervised methods
- Real-world lighting and surface variation

**Outcome:**
- >95% inspection accuracy
- <1.5% false acceptance rate
- 180–200ms inference latency maintained
- ~90% reduction in manual inspection effort

---

### Case Study 2 — Multi-Camera Drive-Thru ReID (Wobot.ai)

**Problem:** Tracking individual vehicles across non-overlapping camera views in drive-thru lanes to measure dwell time and wait-time patterns. Identity switches caused analytics to be unreliable.

**Approach:** Custom multi-camera ReID pipeline with tracker integration and iterative retraining on real-world failure cases.

**Architecture:**
```
Camera 1..N (RTSP) → Detection → Single-camera Tracker
                   → Feature Extraction → ReID Matching Engine
                   → Cross-camera Identity Graph
                   → Analytics / Dwell Time Calculation
```

**Challenges:**
- Occlusion, lighting variation, vehicle appearance similarity
- Cross-camera view gap (non-overlapping FOV)
- Scale: 500+ live cameras across 20+ locations

**Outcome:**
- Identity mismatch reduced from 12–15% → 2–5%
- 500+ live cameras, 20+ QSR locations in production
- Operational analytics pipeline running in production

---

### Case Study 3 — Wrist-Watch Defect Detection

**Problem:** Manual 360° visual inspection of wrist-watch cases taking 30 seconds per unit — creating production bottleneck and inconsistent results.

**Approach:** Dual-camera synchronized capture covering all surfaces + automated defect classification pipeline.

**Architecture:**
```
Dual Camera Rig (synchronized) → Frame Capture
                              → Surface Alignment
                              → Defect Detection Model
                              → Per-surface Defect Map
                              → Pass / Fail Decision
```

**Challenges:**
- Dual-camera synchronization without frame drift
- Multiple surface types with different defect signatures
- Cycle-time constraint (must be faster than manual)

**Outcome:**
- Inspection time reduced from 30s → 8s per unit (73% reduction)
- Consistent automated defect detection across all surface types

---

## NAVIGATION (All pages)

```
[Mohit Gaikwad]    Home · Expertise · Case Studies · [Book Call →]
```

- Sticky top nav
- Mobile: hamburger → full-screen overlay
- Active page highlighted with accent color underline

---

## WHAT TO DEFER (Build these later)

- Contact form (use mailto for now)
- Blog / Medium feed embed
- Dark/light toggle (stay dark for consulting positioning)
- Animations beyond scroll-reveal

---


2. Google Drive video links for 
  
  OneAnomaly: https://docs.google.com/videos/d/1aQLCH0MGjEYcVEbAO3Co3S7AdbysuhcO0NsBz_ZqcAY/play
  
  OneProductIQ https://drive.google.com/file/d/1p_Q4UMxs6cwAH6eFBvM9XaSNTryGsFqA/view?usp=sharing
  
  OneEye https://drive.google.com/file/d/19tzTw2nXWbsfilAGK9BaxfdkZVoHF_cT/view?usp=sharing

3. Preferred contact method for "Book Consultation" 
    [EMAIL_ADDRESS] - mohitgaikwad2804@gmail.com

4. LinkedInMedium URLs (for footer)
  https://www.linkedin.com/in/mohit-gaikwad-688479193/
  https://medium.com/@mohit_gaikwad
  
---