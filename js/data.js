export const HERO_STANDARDS = [
  {
    id: 'iso-9001',
    code: 'ISO 9001:2015',
    badge: { en: 'Quality Management', ms: 'Pengurusan Kualiti' },
    title: {
      en: 'ISO 9001:2015 Quality Management Systems (QMS)',
      ms: 'Sistem Pengurusan Kualiti ISO 9001:2015 (QMS)'
    },
    summary: {
      en: 'Streamline operational workflows, eliminate non-conformities, and achieve SIRIM-ready QMS certification.',
      ms: 'Perkemas aliran kerja operasi, kurangkan ketidakakuran, dan capai pensijilan QMS sedia audit SIRIM.'
    },
    outcome: {
      en: '3–5 Month Certification Track • HRD Corp Claimable',
      ms: 'Laluan Pensijilan 3–5 Bulan • Boleh Dituntut HRD Corp'
    },
    targetCategory: 'iso-9001'
  },
  {
    id: 'iso-27001',
    code: 'ISO/IEC 27001:2022',
    badge: { en: 'Information Security', ms: 'Keselamatan Maklumat' },
    title: {
      en: 'ISO/IEC 27001:2022 & ISO 27000 ISMS Series',
      ms: 'Siri ISMS ISO/IEC 27001:2022 & ISO 27000'
    },
    summary: {
      en: 'Master the 93 Annex A controls, risk treatment plans, and cyber resilience governance for enterprise data.',
      ms: 'Kuasai 93 kawalan Lampiran A, pelan rawatan risiko, dan tadbir urus daya tahan siber data korporat.'
    },
    outcome: {
      en: '93 Annex A Controls • NACSA & PDPA Aligned',
      ms: '93 Kawalan Lampiran A • Selaras NACSA & PDPA'
    },
    targetCategory: 'iso-27001'
  },
  {
    id: 'iso-22301',
    code: 'ISO 22301:2019',
    badge: { en: 'Business Continuity', ms: 'Kesinambungan Perniagaan' },
    title: {
      en: 'ISO 22301:2019 Business Continuity Management (BCMS)',
      ms: 'Pengurusan Kesinambungan Perniagaan ISO 22301:2019 (BCMS)'
    },
    summary: {
      en: 'Design BIA, RTO/RPO recovery targets, and crisis simulation drills to protect mission-critical operations.',
      ms: 'Reka BIA, sasaran pemulihan RTO/RPO, dan latihan simulasi krisis untuk melindungi operasi kritikal.'
    },
    outcome: {
      en: 'BNM RMiT & Critical Sector Compliant',
      ms: 'Mematuhi BNM RMiT & Sektor Kritikal'
    },
    targetCategory: 'iso-22301'
  },
  {
    id: 'iso-37001',
    code: 'ISO 37001:2016',
    badge: { en: 'Anti-Bribery & ESG', ms: 'Antirasuah & ESG' },
    title: {
      en: 'ISO 37001:2016 Anti-Bribery (ABMS) & Section 17A',
      ms: 'Sistem Pengurusan Antirasuah ISO 37001:2016 & Seksyen 17A'
    },
    summary: {
      en: 'Establish adequate procedures under MACC Act Section 17A with board-level integrity governance.',
      ms: 'Wujudkan tatacara mencukupi di bawah Seksyen 17A Akta SPRM dengan tadbir urus integriti lembaga.'
    },
    outcome: {
      en: 'MACC Section 17A Defense • GLC & Corporate Ready',
      ms: 'Perlindungan Seksyen 17A SPRM • Sedia GLC & Korporat'
    },
    targetCategory: 'governance'
  },
  {
    id: 'tech-gov',
    code: 'Cloud, AI & IT',
    badge: { en: 'Tech Governance', ms: 'Tadbir Urus Teknologi' },
    title: {
      en: 'ISO/IEC 20000, ISO/IEC 42001 (AI) & Cloud Security',
      ms: 'ISO/IEC 20000, ISO/IEC 42001 (AI) & Keselamatan Awan'
    },
    summary: {
      en: 'Bridge IT service management, DevSecOps controls, and responsible enterprise AI governance.',
      ms: 'Hubungkan pengurusan perkhidmatan IT, kawalan DevSecOps, dan tadbir urus AI perusahaan bertanggungjawab.'
    },
    outcome: {
      en: 'Hands-on Labs • Enterprise Architecture Focus',
      ms: 'Makmal Praktikal • Fokus Seni Bina Perusahaan'
    },
    targetCategory: 'tech'
  },
  {
    id: 'exec-mgmt',
    code: 'Management',
    badge: { en: 'Executive Leadership', ms: 'Kepimpinan Eksekutif' },
    title: {
      en: 'Strategic Project Management, Agile & Risk Leadership',
      ms: 'Pengurusan Projek Strategik, Agile & Kepimpinan Risiko'
    },
    summary: {
      en: 'Equip department heads and engineers with measurable KPI governance, lean execution, and stakeholder clarity.',
      ms: 'Lengkapkan ketua jabatan dan jurutera dengan tadbir urus KPI terukur, pelaksanaan lean, dan kejelasan pemegang taruh.'
    },
    outcome: {
      en: 'Customized Case Studies • Executive Toolkits',
      ms: 'Kajian Kes Khusus • Kit Alat Eksekutif'
    },
    targetCategory: 'management'
  }
];

export const COURSES = [
  {
    id: 'cs-27001-li',
    code: 'CS-27001-LI',
    standard: 'ISO/IEC 27001:2022',
    category: 'iso-27001',
    level: 'lead-implementer',
    levelLabel: { en: 'Lead Implementer', ms: 'Pelaksana Utama' },
    duration: { en: '4 Days (28 Hours)', ms: '4 Hari (28 Jam)' },
    mode: { en: 'In-House / Corporate Workshop', ms: 'Dalaman / Bengkel Korporat' },
    hrdCorp: true,
    nextDate: { en: '14–17 Dec 2026 • KL', ms: '14–17 Dis 2026 • KL' },
    title: {
      en: 'ISO/IEC 27001:2022 Information Security Management System (ISMS) Lead Implementer',
      ms: 'Pelaksana Utama Sistem Pengurusan Keselamatan Maklumat (ISMS) ISO/IEC 27001:2022'
    },
    summary: {
      en: 'End-to-end blueprint to architect, implement, and certify an ISO/IEC 27001:2022 ISMS including all 93 updated Annex A controls and Statement of Applicability (SoA).',
      ms: 'Pelan induk menyeluruh untuk membina, melaksana, dan mengesahkan ISMS ISO/IEC 27001:2022 termasuk kesemua 93 kawalan Lampiran A baharu dan Penyata Kebolehgunaan (SoA).'
    },
    audience: {
      en: 'CISOs, IT Managers, InfoSec Officers, Compliance Leads, Risk Managers',
      ms: 'CISO, Pengurus IT, Pegawai Keselamatan Maklumat, Ketua Pematuhan, Pengurus Risiko'
    },
    outcomes: {
      en: [
        'Conduct ISO 27005-aligned asset & threat risk assessments',
        'Map Organisational, People, Physical & Technological Annex A controls',
        'Draft an audit-ready Statement of Applicability (SoA) & ISMS Scope',
        'Prepare leadership for Stage 1 & Stage 2 Certification Audits'
      ],
      ms: [
        'Melaksanakan penilaian risiko aset & ancaman selaras ISO 27005',
        'Memetakan kawalan Organisasi, Manusia, Fizikal & Teknologi Lampiran A',
        'Menyediakan Penyata Kebolehgunaan (SoA) & Skop ISMS sedia audit',
        'Menyediakan pihak pengurusan untuk Audit Pensijilan Peringkat 1 & 2'
      ]
    },
    syllabus: {
      en: [
        'Day 1: ISO/IEC 27000 Vocabulary, 27001:2022 Clauses 4–10 & ISMS Scoping',
        'Day 2: Information Security Risk Assessment, Risk Treatment Plan & SoA Workshop',
        'Day 3: Deep Dive into 93 Annex A Controls (ISO/IEC 27002:2022) & Tech Safeguards',
        'Day 4: Performance Monitoring, Internal Audit Readiness & Certification Simulation'
      ],
      ms: [
        'Hari 1: Terminologi ISO/IEC 27000, Klausa 4–10 ISO 27001:2022 & Penentuan Skop ISMS',
        'Hari 2: Penilaian Risiko Keselamatan Maklumat, Pelan Rawatan Risiko & Bengkel SoA',
        'Hari 3: Pendalaman 93 Kawalan Lampiran A (ISO/IEC 27002:2022) & Kawalan Teknologi',
        'Hari 4: Pemantauan Prestasi, Kesediaan Audit Dalaman & Simulasi Audit Pensijilan'
      ]
    }
  },
  {
    id: 'cs-27000-ia',
    code: 'CS-27000-IA',
    standard: 'ISO 27000 / 27001',
    category: 'iso-27001',
    level: 'internal-auditor',
    levelLabel: { en: 'Internal Auditor', ms: 'Juruaudit Dalaman' },
    duration: { en: '2 Days (14 Hours)', ms: '2 Hari (14 Jam)' },
    mode: { en: 'In-House / Corporate Workshop', ms: 'Dalaman / Bengkel Korporat' },
    hrdCorp: true,
    nextDate: { en: '24–25 Nov 2026 • Penang', ms: '24–25 Nov 2026 • Pulau Pinang' },
    title: {
      en: 'ISO/IEC 27000 Series & 27001:2022 Internal Auditor Certification',
      ms: 'Pensijilan Juruaudit Dalaman Siri ISO/IEC 27000 & 27001:2022'
    },
    summary: {
      en: 'Practical auditing techniques based on ISO 19011 to verify ISMS effectiveness, evidence sampling, and Non-Conformity Report (NCR) root-cause closure.',
      ms: 'Teknik pengauditan praktikal berpandukan ISO 19011 bagi mengesahkan keberkesanan ISMS, pensampelan bukti, dan penutupan punca Laporan Ketidakakuran (NCR).'
    },
    audience: {
      en: 'Internal Auditors, IT Governance Teams, QA Engineers, System Administrators',
      ms: 'Juruaudit Dalaman, Pasukan Tadbir Urus IT, Jurutera QA, Pentadbir Sistem'
    },
    outcomes: {
      en: [
        'Interpret ISO 27000 family terminology & 27001:2022 transition deltas',
        'Plan audit checklists & interview technical and non-technical stakeholders',
        'Write objective Major vs Minor Non-Conformity Reports (NCRs)',
        'Evaluate corrective action effectiveness prior to external audits'
      ],
      ms: [
        'Mentafsir terminologi keluarga ISO 27000 & perubahan peralihan 27001:2022',
        'Merancang senarai semak audit & temu bual pemegang taruh teknikal dan bukan teknikal',
        'Menulis Laporan Ketidakakuran (NCR) Major vs Minor secara objektif',
        'Menilai keberkesanan tindakan pembetulan sebelum audit luaran'
      ]
    },
    syllabus: {
      en: [
        'Day 1: ISO 27000 Architecture, Audit Principles (ISO 19011) & Clause Verification',
        'Day 2: Technical Evidence Sampling, Mock Audit Roleplay & NCR Writing Lab'
      ],
      ms: [
        'Hari 1: Seni Bina ISO 27000, Prinsip Audit (ISO 19011) & Pengesahan Klausa',
        'Hari 2: Pensampelan Bukti Teknikal, Main Peranan Audit & Makmal Penulisan NCR'
      ]
    }
  },
  {
    id: 'cs-9001-ia',
    code: 'CS-9001-IA',
    standard: 'ISO 9001:2015',
    category: 'iso-9001',
    level: 'internal-auditor',
    levelLabel: { en: 'Internal Auditor', ms: 'Juruaudit Dalaman' },
    duration: { en: '2 Days (14 Hours)', ms: '2 Hari (14 Jam)' },
    mode: { en: 'In-House / Corporate Workshop', ms: 'Dalaman / Bengkel Korporat' },
    hrdCorp: true,
    nextDate: { en: '18–19 Nov 2026 • KL', ms: '18–19 Nov 2026 • KL' },
    title: {
      en: 'ISO 9001:2015 Quality Management System (QMS) Process-Based Internal Auditor',
      ms: 'Juruaudit Dalaman Berasaskan Proses Sistem Pengurusan Kualiti (QMS) ISO 9001:2015'
    },
    summary: {
      en: 'Move beyond checklist auditing. Learn risk-based process auditing using turtle diagrams, KPI traceability, and continuous improvement verification.',
      ms: 'Melangkaui audit senarai semak. Pelajari pengauditan proses berasaskan risiko menggunakan rajah penyu, kebolehkesanan KPI, dan pengesahan penambahbaikan berterusan.'
    },
    audience: {
      en: 'Corporate Employees, Management Teams, QA Executives & Final-Year Engineering/IT Students',
      ms: 'Pekerja Korporat, Pasukan Pengurusan, Eksekutif QA & Pelajar Tahun Akhir Kejuruteraan/IT'
    },
    outcomes: {
      en: [
        'Apply the PDCA & Risk-Based Thinking mindset across business processes',
        'Construct audit trails using Turtle Diagrams & Process Approach',
        'Conduct confident opening/closing audit meetings with department heads',
        'Verify Corrective Action Request (CAR) root-cause analysis (5-Why / Fishbone)'
      ],
      ms: [
        'Mengaplikasikan pemikiran PDCA & Berasaskan Risiko merentasi proses perniagaan',
        'Membina jejak audit menggunakan Rajah Penyu & Pendekatan Proses',
        'Mengendalikan mesyuarat pembukaan & penutupan audit dengan yakin',
        'Mengesahkan analisis punca CAR (5-Why / Tulang Ikan)'
      ]
    },
    syllabus: {
      en: [
        'Day 1: High-Level Structure (Annex SL), Clauses 4–10 & Risk-Based Process Mapping',
        'Day 2: Live Audit Simulation, NCR Classification & Root-Cause Verification'
      ],
      ms: [
        'Hari 1: Struktur Tahap Tinggi (Annex SL), Klausa 4–10 & Pemetaan Proses Berasaskan Risiko',
        'Hari 2: Simulasi Audit Langsung, Pengelasan NCR & Pengesahan Punca Akar'
      ]
    }
  },
  {
    id: 'cs-9001-imp',
    code: 'CS-9001-IMP',
    standard: 'ISO 9001:2015',
    category: 'iso-9001',
    level: 'lead-implementer',
    levelLabel: { en: 'Lead Implementer', ms: 'Pelaksana Utama' },
    duration: { en: '3 Days (21 Hours)', ms: '3 Hari (21 Jam)' },
    mode: { en: 'In-House / Corporate Workshop', ms: 'Dalaman / Bengkel Korporat' },
    hrdCorp: true,
    nextDate: { en: '2–4 Dec 2026 • Penang', ms: '2–4 Dis 2026 • Pulau Pinang' },
    title: {
      en: 'ISO 9001:2015 QMS Documentation, Risk Matrix & Implementation Workshop',
      ms: 'Bengkel Dokumentasi, Matriks Risiko & Pelaksanaan QMS ISO 9001:2015'
    },
    summary: {
      en: 'Hands-on implementation bootcamp with customizable SOP templates, context-of-organization matrices, and Management Review frameworks.',
      ms: 'Latihan pelaksanaan praktikal lengkap dengan templat SOP boleh ubah suai, matriks konteks organisasi, dan rangka kerja Semakan Pengurusan.'
    },
    audience: {
      en: 'Management Representatives (MR), Document Controllers, Operations Managers',
      ms: 'Wakil Pengurusan (MR), Pengawal Dokumen, Pengurus Operasi'
    },
    outcomes: {
      en: [
        'Define Context of Organization (SWOT/PESTLE) & Interested Parties matrix',
        'Streamline lean SOPs without bureaucratic paperwork bloat',
        'Establish measurable Quality Objectives & Operational Risk Registers',
        'Run compliant Management Review Meetings (Clause 9.3)'
      ],
      ms: [
        'Menentukan Konteks Organisasi (SWOT/PESTLE) & matriks Pihak Berkepentingan',
        'Menyelaraskan SOP yang ringkas tanpa birokrasi dokumen berlebihan',
        'Mewujudkan Objektif Kualiti terukur & Daftar Risiko Operasi',
        'Mengendalikan Mesyuarat Semakan Pengurusan yang patuh (Klausa 9.3)'
      ]
    },
    syllabus: {
      en: [
        'Day 1: Clauses 4–6 — Context, Leadership, Quality Policy & Risk/Opportunity Registers',
        'Day 2: Clauses 7–8 — Competency, Document Control & Operational Execution',
        'Day 3: Clauses 9–10 — Customer Satisfaction, Internal Audit & Management Review'
      ],
      ms: [
        'Hari 1: Klausa 4–6 — Konteks, Kepimpinan, Dasar Kualiti & Daftar Risiko/Peluang',
        'Hari 2: Klausa 7–8 — Kompetensi, Kawalan Dokumen & Pelaksanaan Operasi',
        'Hari 3: Klausa 9–10 — Kepuasan Pelanggan, Audit Dalaman & Semakan Pengurusan'
      ]
    }
  },
  {
    id: 'cs-22301-li',
    code: 'CS-22301-LI',
    standard: 'ISO 22301:2019',
    category: 'iso-22301',
    level: 'lead-implementer',
    levelLabel: { en: 'Lead Implementer', ms: 'Pelaksana Utama' },
    duration: { en: '3 Days (21 Hours)', ms: '3 Hari (21 Jam)' },
    mode: { en: 'In-House / Corporate Workshop', ms: 'Dalaman / Bengkel Korporat' },
    hrdCorp: true,
    nextDate: { en: '8–10 Dec 2026 • KL', ms: '8–10 Dis 2026 • KL' },
    title: {
      en: 'ISO 22301:2019 Business Continuity Management System (BCMS) & Crisis Simulation',
      ms: 'Sistem Pengurusan Kesinambungan Perniagaan (BCMS) ISO 22301:2019 & Simulasi Krisis'
    },
    summary: {
      en: 'Build resilient continuity plans covering Business Impact Analysis (BIA), Recovery Time Objectives (RTO/RPO), IT Disaster Recovery integration, and tabletop crisis exercises.',
      ms: 'Bina pelan kesinambungan berdaya tahan merangkumi Analisis Impak Perniagaan (BIA), Objektif Masa Pemulihan (RTO/RPO), integrasi Pemulihan Bencana IT, dan latihan krisis.'
    },
    audience: {
      en: 'BCM Managers, Risk & Resilience Teams, IT DR Leads, Facility & Operations Heads',
      ms: 'Pengurus BCM, Pasukan Risiko & Daya Tahan, Ketua Pemulihan IT, Ketua Operasi'
    },
    outcomes: {
      en: [
        'Calculate Maximum Tolerable Period of Disruption (MTPD), RTO & RPO',
        'Execute end-to-end Business Impact Analysis (BIA) across critical units',
        'Draft actionable Business Continuity Plans (BCP) & Incident Response playbooks',
        'Facilitate Tabletop, Call-Tree & Live Switchover BCMS exercises'
      ],
      ms: [
        'Mengira Tempoh Gangguan Maksimum Diterima (MTPD), RTO & RPO',
        'Melaksanakan Analisis Impak Perniagaan (BIA) merentasi unit kritikal',
        'Menyediakan Pelan Kesinambungan Perniagaan (BCP) & buku panduan Tindak Balas Insiden',
        'Mengendalikan latihan meja, pokok panggilan & simulasi pemulihan BCMS'
      ]
    },
    syllabus: {
      en: [
        'Day 1: ISO 22301:2019 Framework, Governance & Business Impact Analysis (BIA) Lab',
        'Day 2: Continuity Strategies, IT DRP Alignment & BCP Plan Architecture',
        'Day 3: Crisis Tabletop Simulation, Audit Readiness & Continual Improvement'
      ],
      ms: [
        'Hari 1: Rangka Kerja ISO 22301:2019, Tadbir Urus & Makmal Analisis Impak Perniagaan (BIA)',
        'Hari 2: Strategi Kesinambungan, Penjajaran IT DRP & Seni Bina Pelan BCP',
        'Hari 3: Simulasi Krisis Atas Meja, Kesediaan Audit & Penambahbaikan Berterusan'
      ]
    }
  },
  {
    id: 'cs-22301-ia',
    code: 'CS-22301-IA',
    standard: 'ISO 22301:2019',
    category: 'iso-22301',
    level: 'internal-auditor',
    levelLabel: { en: 'Internal Auditor', ms: 'Juruaudit Dalaman' },
    duration: { en: '2 Days (14 Hours)', ms: '2 Hari (14 Jam)' },
    mode: { en: 'In-House / Corporate Workshop', ms: 'Dalaman / Bengkel Korporat' },
    hrdCorp: true,
    nextDate: { en: '5–6 Dec 2026 • Johor Bahru', ms: '5–6 Dis 2026 • Johor Bahru' },
    title: {
      en: 'ISO 22301:2019 BCMS Internal Auditor & Exercise Evaluation',
      ms: 'Juruaudit Dalaman BCMS ISO 22301:2019 & Penilaian Latihan Simulasi'
    },
    summary: {
      en: 'Audit BIA assumptions, test-exercise evidence, and supplier continuity resilience with precision.',
      ms: 'Audit andaian BIA, bukti ujian latihan pemulihan, dan daya tahan kesinambungan pembekal dengan tepat.'
    },
    audience: {
      en: 'Internal Auditors, Risk Compliance Officers, Banking & Telco Resilience Teams',
      ms: 'Juruaudit Dalaman, Pegawai Pematuhan Risiko, Pasukan Daya Tahan Perbankan & Telco'
    },
    outcomes: {
      en: [
        'Verify BIA accuracy against real operational dependencies',
        'Assess post-exercise reports & corrective action logs',
        'Audit third-party / cloud vendor continuity SLAs'
      ],
      ms: [
        'Mengesahkan ketepatan BIA berbanding kebergantungan operasi sebenar',
        'Menilai laporan pasca-latihan & log tindakan pembetulan',
        'Mengaudit SLA kesinambungan vendor pihak ketiga / awan'
      ]
    },
    syllabus: {
      en: [
        'Day 1: BCMS Clause Audit Criteria & BIA / Risk Assessment Verification',
        'Day 2: Auditing BCP Exercises, Supply Chain Resilience & NCR Reporting'
      ],
      ms: [
        'Hari 1: Kriteria Audit Klausa BCMS & Pengesahan BIA / Penilaian Risiko',
        'Hari 2: Mengaudit Latihan BCP, Daya Tahan Rantaian Bekalan & Pelaporan NCR'
      ]
    }
  },
  {
    id: 'cs-37001-abms',
    code: 'CS-37001-LI',
    standard: 'ISO 37001:2016',
    category: 'governance',
    level: 'lead-implementer',
    levelLabel: { en: 'Lead Implementer', ms: 'Pelaksana Utama' },
    duration: { en: '2 Days (14 Hours)', ms: '2 Hari (14 Jam)' },
    mode: { en: 'In-House / Corporate Workshop', ms: 'Dalaman / Bengkel Korporat' },
    hrdCorp: true,
    nextDate: { en: '26–27 Nov 2026 • KL', ms: '26–27 Nov 2026 • KL' },
    title: {
      en: 'ISO 37001:2016 Anti-Bribery Management System (ABMS) & MACC Section 17A',
      ms: 'Sistem Pengurusan Antirasuah (ABMS) ISO 37001:2016 & Seksyen 17A SPRM'
    },
    summary: {
      en: 'Build a defensible "Adequate Procedures" T.R.U.S.T. framework protecting Directors and C-Suite against Corporate Liability.',
      ms: 'Bina rangka kerja "Tatacara Mencukupi" T.R.U.S.T. bagi melindungi Pengarah dan Pengurusan Tertinggi daripada Liabiliti Korporat.'
    },
    audience: {
      en: 'Integrity Officers, Legal & Compliance, Procurement Heads, Board Audit Committee',
      ms: 'Pegawai Integriti, Perundangan & Pematuhan, Ketua Perolehan, Jawatankuasa Audit'
    },
    outcomes: {
      en: [
        'Align ISO 37001 Clauses with Prime Minister’s Department T.R.U.S.T. Guidelines',
        'Conduct Corruption Risk Assessments (CRA) & Vendor Due Diligence',
        'Design Gift, Hospitality & Whistleblowing controls'
      ],
      ms: [
        'Menjajarkan Klausa ISO 37001 dengan Garis Panduan T.R.U.S.T. JPM',
        'Melaksanakan Penilaian Risiko Rasuah (CRA) & Usaha Wajar Vendor',
        'Mereka bentuk kawalan Hadiah, Hospitaliti & Pemberi Maklumat'
      ]
    },
    syllabus: {
      en: [
        'Day 1: Corporate Liability Sec 17A, ISO 37001 Clauses & Bribery Risk Assessment',
        'Day 2: Due Diligence, Financial/Non-Financial Controls & Internal Audit'
      ],
      ms: [
        'Hari 1: Liabiliti Korporat Sek 17A, Klausa ISO 37001 & Penilaian Risiko Rasuah',
        'Hari 2: Usaha Wajar, Kawalan Kewangan/Bukan Kewangan & Audit Dalaman'
      ]
    }
  },
  {
    id: 'cs-ehs-ims',
    code: 'CS-IMS-1445',
    standard: 'ISO 14001 & 45001',
    category: 'governance',
    level: 'internal-auditor',
    levelLabel: { en: 'Internal Auditor', ms: 'Juruaudit Dalaman' },
    duration: { en: '3 Days (21 Hours)', ms: '3 Hari (21 Jam)' },
    mode: { en: 'In-House / Corporate Workshop', ms: 'Dalaman / Bengkel Korporat' },
    hrdCorp: true,
    nextDate: { en: '9–11 Dec 2026 • Johor Bahru', ms: '9–11 Dis 2026 • Johor Bahru' },
    title: {
      en: 'Integrated Management System (ISO 9001 + 14001 + 45001) Internal Auditor',
      ms: 'Juruaudit Dalaman Sistem Pengurusan Bersepadu (ISO 9001 + 14001 + 45001)'
    },
    summary: {
      en: 'Audit Quality, Environmental (EMS) and Occupational Health & Safety (OH&S) simultaneously using Annex SL harmonized clauses.',
      ms: 'Mengaudit Kualiti, Alam Sekitar (EMS) dan Kesihatan & Keselamatan Pekerjaan (OH&S) secara serentak menggunakan struktur harmoni Annex SL.'
    },
    audience: {
      en: 'HSE Officers, Plant Managers, QA Leads, ESG Compliance Coordinators',
      ms: 'Pegawai HSE, Pengurus Kilang, Ketua QA, Penyelaras Pematuhan ESG'
    },
    outcomes: {
      en: [
        'Harmonize QMS, EMS & OH&S audits to reduce audit fatigue by 40%',
        'Verify HIRARC, Aspect-Impact registers & DOSH / DOE legal compliance',
        'Drive ESG readiness across manufacturing & engineering facilities'
      ],
      ms: [
        'Mengharmonikan audit QMS, EMS & OH&S untuk kurangkan beban audit sebanyak 40%',
        'Mengesahkan HIRARC, daftar Aspek-Impak & pematuhan undang-undang JKKP / JAS',
        'Memacu kesediaan ESG merentasi fasiliti pembuatan & kejuruteraan'
      ]
    },
    syllabus: {
      en: [
        'Day 1: Annex SL Integration (9001, 14001, 45001) & Legal Compliance Evaluation',
        'Day 2: HIRARC, Environmental Aspect/Impact & Operational Control Auditing',
        'Day 3: Integrated Site Audit Simulation & Consolidated NCR Closure'
      ],
      ms: [
        'Hari 1: Integrasi Annex SL (9001, 14001, 45001) & Penilaian Pematuhan Perundangan',
        'Hari 2: Pengauditan HIRARC, Aspek/Impak Alam Sekitar & Kawalan Operasi',
        'Hari 3: Simulasi Audit Tapak Bersepadu & Penutupan NCR Bersepadu'
      ]
    }
  },
  {
    id: 'cs-42001-ai',
    code: 'CS-42001-AI',
    standard: 'ISO/IEC 42001:2023',
    category: 'tech',
    level: 'foundation',
    levelLabel: { en: 'Foundation / Governance', ms: 'Asas / Tadbir Urus' },
    duration: { en: '2 Days (14 Hours)', ms: '2 Hari (14 Jam)' },
    mode: { en: 'In-House / Corporate Workshop', ms: 'Dalaman / Bengkel Korporat' },
    hrdCorp: true,
    nextDate: { en: '15–16 Dec 2026 • KL', ms: '15–16 Dis 2026 • KL' },
    title: {
      en: 'ISO/IEC 42001 Artificial Intelligence Management System (AIMS) & Cyber Governance',
      ms: 'Sistem Pengurusan Kecerdasan Buatan (AIMS) ISO/IEC 42001 & Tadbir Urus Siber'
    },
    summary: {
      en: 'Establish enterprise AI risk governance, model transparency, data privacy safeguards, and alignment with ISO/IEC 27001 controls.',
      ms: 'Wujudkan tadbir urus risiko AI perusahaan, ketelusan model, perlindungan privasi data, serta penjajaran bersama kawalan ISO/IEC 27001.'
    },
    audience: {
      en: 'Management Teams, Corporate Tech Employees & Final-Year CS/AI Students',
      ms: 'Pasukan Pengurusan, Pekerja Teknologi Korporat & Pelajar Tahun Akhir Sains Komputer/AI'
    },
    outcomes: {
      en: [
        'Implement AI Impact Assessments & bias/hallucination risk controls',
        'Map ISO/IEC 42001 Annex A controls onto existing ISO 27001 ISMS',
        'Establish GenAI Acceptable Use Policies for corporate workforces'
      ],
      ms: [
        'Melaksanakan Penilaian Impak AI & kawalan risiko bias/halusinasi',
        'Memetakan kawalan Lampiran A ISO/IEC 42001 ke atas ISMS ISO 27001 sedia ada',
        'Membentuk Dasar Penggunaan GenAI yang Selamat untuk tenaga kerja korporat'
      ]
    },
    syllabus: {
      en: [
        'Day 1: AI Governance Landscape, ISO/IEC 42001 Clauses & AI Risk Assessment',
        'Day 2: Annex A AI Controls, Third-Party LLM Governance & Compliance Roadmap'
      ],
      ms: [
        'Hari 1: Landskap Tadbir Urus AI, Klausa ISO/IEC 42001 & Penilaian Risiko AI',
        'Hari 2: Kawalan AI Lampiran A, Tadbir Urus LLM Pihak Ketiga & Pelan Pematuhan'
      ]
    }
  },
  {
    id: 'cs-20000-itsm',
    code: 'CS-20000-IT',
    standard: 'ISO/IEC 20000-1',
    category: 'tech',
    level: 'lead-implementer',
    levelLabel: { en: 'Lead Implementer', ms: 'Pelaksana Utama' },
    duration: { en: '3 Days (21 Hours)', ms: '3 Hari (21 Jam)' },
    mode: { en: 'In-House / Corporate Workshop', ms: 'Dalaman / Bengkel Korporat' },
    hrdCorp: true,
    nextDate: { en: '21–23 Dec 2026 • KL', ms: '21–23 Dis 2026 • KL' },
    title: {
      en: 'ISO/IEC 20000-1 IT Service Management (SMS) & Cloud Security Operations',
      ms: 'Pengurusan Perkhidmatan IT (SMS) ISO/IEC 20000-1 & Operasi Keselamatan Awan'
    },
    summary: {
      en: 'Integrate ITIL-aligned SLA management, incident/change control, and ISO 27017 cloud security controls for IT service desks and managed service providers.',
      ms: 'Integrasikan pengurusan SLA selaras ITIL, kawalan insiden/perubahan, dan kawalan keselamatan awan ISO 27017 untuk meja perkhidmatan IT dan MSP.'
    },
    audience: {
      en: 'Corporate IT Employees, Service Managers, Cloud Engineers & Final-Year IT Students',
      ms: 'Pekerja IT Korporat, Pengurus Perkhidmatan, Jurutera Awan & Pelajar Tahun Akhir IT'
    },
    outcomes: {
      en: [
        'Design measurable SLAs, OLAs, and Underpinning Contracts',
        'Streamline Change, Release & Problem Management with zero audit gaps',
        'Embed Cloud Security (ISO 27017) into daily DevOps & ITIL workflows'
      ],
      ms: [
        'Mereka bentuk SLA, OLA dan Kontrak Sokongan yang terukur',
        'Menyelaraskan Pengurusan Perubahan, Pelepasan & Masalah tanpa jurang audit',
        'Memasukkan Keselamatan Awan (ISO 27017) ke dalam aliran kerja DevOps & ITIL'
      ]
    },
    syllabus: {
      en: [
        'Day 1: ISO/IEC 20000-1 Architecture, Service Portfolio & SLA Governance',
        'Day 2: Incident, Problem, Change & Configuration Management Controls',
        'Day 3: Cloud Operations Security (ISO 27017) & Audit Readiness Review'
      ],
      ms: [
        'Hari 1: Seni Bina ISO/IEC 20000-1, Portfolio Perkhidmatan & Tadbir Urus SLA',
        'Hari 2: Kawalan Pengurusan Insiden, Masalah, Perubahan & Konfigurasi',
        'Hari 3: Keselamatan Operasi Awan (ISO 27017) & Semakan Kesediaan Audit'
      ]
    }
  },
  {
    id: 'cs-pm-agile',
    code: 'CS-MGT-AGL',
    standard: 'Tech Management',
    category: 'management',
    level: 'executive',
    levelLabel: { en: 'Executive Masterclass', ms: 'Kelas Induk Eksekutif' },
    duration: { en: '2 Days (14 Hours)', ms: '2 Hari (14 Jam)' },
    mode: { en: 'In-House / Corporate Workshop', ms: 'Dalaman / Bengkel Korporat' },
    hrdCorp: true,
    nextDate: { en: '3–4 Dec 2026 • KL', ms: '3–4 Dis 2026 • KL' },
    title: {
      en: 'Strategic IT & ISO Project Management: Agile Delivery Meets Governance',
      ms: 'Pengurusan Projek IT & ISO Strategik: Penyampaian Agile Bertemu Tadbir Urus'
    },
    summary: {
      en: 'Equip technical leads and managers to deliver complex transformation projects on time, within budget, and fully compliant with ISO audit trails.',
      ms: 'Lengkapkan ketua teknikal dan pengurus untuk menyampaikan projek transformasi kompleks mengikut masa, bajet, dan patuh jejak audit ISO.'
    },
    audience: {
      en: 'Management Teams, Project Leads, Corporate Employees & Final-Year University Cohorts',
      ms: 'Pasukan Pengurusan, Ketua Projek, Pekerja Korporat & Kohort Universiti Tahun Akhir'
    },
    outcomes: {
      en: [
        'Combine Waterfall Governance Milestones with Agile Sprint Execution',
        'Manage cross-functional risk registers & executive stakeholder reporting',
        'Build high-velocity engineering and compliance delivery teams'
      ],
      ms: [
        'Gabungkan Pencapaian Tadbir Urus Waterfall bersama Pelaksanaan Pecutan Agile',
        'Mengurus daftar risiko rentas fungsi & pelaporan pemegang taruh eksekutif',
        'Membina pasukan penyampaian kejuruteraan dan pematuhan berprestasi tinggi'
      ]
    },
    syllabus: {
      en: [
        'Day 1: Hybrid PMO Governance, Scope Control & Stakeholder Alignment',
        'Day 2: Agile Cadence, Risk Burndown & Executive KPI Dashboards'
      ],
      ms: [
        'Hari 1: Tadbir Urus PMO Hibrid, Kawalan Skop & Penjajaran Pemegang Taruh',
        'Hari 2: Irama Agile, Pengurangan Risiko & Papan Pemuka KPI Eksekutif'
      ]
    }
  },
  {
    id: 'cs-exec-iso',
    code: 'CS-EXEC-GOV',
    standard: 'C-Suite Briefing',
    category: 'management',
    level: 'executive',
    levelLabel: { en: 'Executive Masterclass', ms: 'Kelas Induk Eksekutif' },
    duration: { en: '1 Day (7 Hours)', ms: '1 Hari (7 Jam)' },
    mode: { en: 'In-House / Management Boardroom', ms: 'Dalaman / Bilik Lembaga Pengurusan' },
    hrdCorp: true,
    nextDate: { en: 'Boardroom Private Booking', ms: 'Tempahan Khas Bilik Lembaga' },
    title: {
      en: 'Board & C-Suite Briefing: ISO Risk Leadership, Cyber Resilience & Governance',
      ms: 'Taklimat Lembaga & Pengurusan Tertinggi: Kepimpinan Risiko ISO & Daya Tahan Siber'
    },
    summary: {
      en: 'Focused half-day or full-day executive briefing on Clause 5 Leadership accountability, cybersecurity oversight, and strategic compliance ROI.',
      ms: 'Taklimat eksekutif separuh hari atau sehari penuh mengenai akauntabiliti Kepimpinan Klausa 5, pemantauan keselamatan siber, dan ROI pematuhan strategik.'
    },
    audience: {
      en: 'CEOs, Managing Directors, Board Risk Committees, Senior Vice Presidents',
      ms: 'CEO, Pengarah Urusan, Jawatankuasa Risiko Lembaga, Naib Presiden Kanan'
    },
    outcomes: {
      en: [
        'Understand personal & board governance duties across ISO 27001, 22301 & 37001',
        'Evaluate compliance investments through risk reduction & tender eligibility ROI',
        'Lead effective Clause 9.3 Management Reviews in 60 minutes'
      ],
      ms: [
        'Memahami tanggungjawab tadbir urus peribadi & lembaga merentasi ISO 27001, 22301 & 37001',
        'Menilai pelaburan pematuhan melalui pengurangan risiko & ROI kelayakan tender',
        'Memimpin Semakan Pengurusan Klausa 9.3 yang berkesan dalam 60 minit'
      ]
    },
    syllabus: {
      en: [
        'Session 1: Regulatory & ISO Accountability for Directors (9001, 27001, 22301, 37001)',
        'Session 2: Cyber Incident Crisis Simulation & Strategic Management Review KPIs'
      ],
      ms: [
        'Sesi 1: Akauntabiliti Kawal Selia & ISO untuk Pengarah (9001, 27001, 22301, 37001)',
        'Sesi 2: Simulasi Krisis Insiden Siber & KPI Semakan Pengurusan Strategik'
      ]
    }
  }
];

export const SERVICES = [
  {
    id: 'turnkey-iso',
    tag: { en: 'Turnkey Implementation', ms: 'Pelaksanaan Menyeluruh' },
    title: {
      en: 'End-to-End ISO Certification Consultancy',
      ms: 'Perundingan Pensijilan ISO Hujung-ke-Hujung'
    },
    standards: ['ISO 9001', 'ISO/IEC 27001', 'ISO 22301', 'ISO 37001', 'ISO 14001 / 45001'],
    summary: {
      en: 'Structured, milestone-driven guidance from initial gap assessment and policy architecture through to successful Certification Body (SIRIM / BSI / SGS / TUV) audit sign-off.',
      ms: 'Bimbingan berstruktur mengikut fasa daripada penilaian jurang awal dan seni bina polisi sehingga kelulusan audit Badan Pensijilan (SIRIM / BSI / SGS / TUV).'
    },
    deliverables: {
      en: [
        'Comprehensive Clause-by-Clause Gap Analysis Report',
        'Tailored SOPs, Risk Registers & Statement of Applicability (SoA)',
        'Hands-on Staff Coaching & Pre-Certification Mock Audit',
        'Stage 1 & Stage 2 External Audit Liaison & NCR Closure Support'
      ],
      ms: [
        'Laporan Analisis Jurang Klausa demi Klausa yang Menyeluruh',
        'SOP Tersuai, Daftar Risiko & Penyata Kebolehgunaan (SoA)',
        'Bimbingan Kakitangan & Pra-Audit Simulasi Pensijilan',
        'Sokongan Audit Luaran Peringkat 1 & 2 serta Penutupan NCR'
      ]
    }
  },
  {
    id: 'cyber-isms',
    tag: { en: 'Cyber & Tech Advisory', ms: 'Penasihat Siber & Teknologi' },
    title: {
      en: 'ISMS, Cloud Security & Technical Risk Governance',
      ms: 'ISMS, Keselamatan Awan & Tadbir Urus Risiko Teknikal'
    },
    standards: ['ISO/IEC 27001:2022', 'ISO/IEC 27002', 'ISO/IEC 27017', 'PDPA / NACSA'],
    summary: {
      en: 'Bridge policy and engineering reality. Our technical consultants align your cloud infrastructure, IAM, endpoint controls, and incident playbooks with international security standards.',
      ms: 'Rapatkan jurang antara dasar dan realiti kejuruteraan. Perunding teknikal kami menyelaraskan infrastruktur awan, IAM, kawalan titik akhir, dan buku panduan insiden dengan standard antarabangsa.'
    },
    deliverables: {
      en: [
        'ISO 27001:2022 Transition & 93 Annex A Controls Mapping',
        'Information Asset Inventory & Threat Vulnerability Risk Assessment',
        'Cloud & Vendor Third-Party Security Governance Framework',
        'Cyber Incident Response & Disaster Recovery Tabletop Drills'
      ],
      ms: [
        'Peralihan ISO 27001:2022 & Pemetaan 93 Kawalan Lampiran A',
        'Inventori Aset Maklumat & Penilaian Risiko Ancaman dan Kerentanan',
        'Rangka Kerja Tadbir Urus Keselamatan Awan & Vendor Pihak Ketiga',
        'Latihan Meja Tindak Balas Insiden Siber & Pemulihan Bencana'
      ]
    }
  },
  {
    id: 'independent-audit',
    tag: { en: 'Assurance & Mock Audits', ms: 'Jaminan & Audit Simulasi' },
    title: {
      en: 'Independent Internal & Pre-Surveillance Audits',
      ms: 'Audit Dalaman Bebas & Pra-Pengawasan'
    },
    standards: ['ISO 19011', 'All ISO Standards', 'Surveillance Readiness'],
    summary: {
      en: 'Eliminate audit-day surprises. Our certified Principal Lead Auditors conduct objective, independent internal audits and verify corrective action effectiveness before your CB arrives.',
      ms: 'Elakkan kejutan pada hari audit. Juruaudit Utama bertauliah kami melaksanakan audit dalaman bebas dan mengesahkan keberkesanan tindakan pembetulan sebelum Badan Pensijilan tiba.'
    },
    deliverables: {
      en: [
        'Independent Annual Internal Audit Execution & Executive Report',
        'Clause & Evidence Traceability Sampling Across Departments',
        'Root-Cause Analysis Workshops for Open Non-Conformities',
        'Management Review Pack Preparation for Board Sign-Off'
      ],
      ms: [
        'Pelaksanaan Audit Dalaman Tahunan Bebas & Laporan Eksekutif',
        'Pensampelan Kebolehkesanan Klausa & Bukti Merentasi Jabatan',
        'Bengkel Analisis Punca Akar untuk Ketidakakuran Terbuka',
        'Penyediaan Pek Semakan Pengurusan untuk Pengesahan Lembaga'
      ]
    }
  },
  {
    id: 'digital-qms',
    tag: { en: 'Digital Transformation', ms: 'Transformasi Digital' },
    title: {
      en: 'Digital Compliance & PDCA Workflow Architecture',
      ms: 'Seni Bina Pematuhan Digital & Aliran Kerja PDCA'
    },
    standards: ['Paperless QMS/ISMS', 'Automated KPIs', 'Audit Trail'],
    summary: {
      en: 'Transition away from dusty physical binders and scattered spreadsheets. We structure cloud-ready document control, training matrices, CAPA tracking, and live risk dashboards.',
      ms: 'Beralih daripada fail fizikal dan hamparan berselerak. Kami menstruktur kawalan dokumen sedia awan, matriks latihan, penjejakan CAPA, dan papan pemuka risiko masa nyata.'
    },
    deliverables: {
      en: [
        'Digital Document Control & Version Governance Architecture',
        'Automated Training Needs Analysis (TNA) & Competency Matrix',
        'Centralized Corrective Action (CAPA) & Audit Finding Tracker',
        'Executive KPI & Compliance Readiness Dashboard Design'
      ],
      ms: [
        'Seni Bina Kawalan Dokumen Digital & Tadbir Urus Versi',
        'Analisis Keperluan Latihan (TNA) & Matriks Kompetensi Automatik',
        'Penjejak Tindakan Pembetulan (CAPA) & Penemuan Audit Berpusat',
        'Reka Bentuk Papan Pemuka KPI Eksekutif & Kesediaan Pematuhan'
      ]
    }
  }
];

export const PDCA_ROADMAP = [
  {
    step: '01',
    phase: { en: 'PLAN • Month 1', ms: 'RANCANG • Bulan 1' },
    title: {
      en: 'Diagnostic Gap Analysis & Executive Charter',
      ms: 'Analisis Jurang Diagnostik & Piagam Eksekutif'
    },
    summary: {
      en: 'We benchmark your current operations, IT infrastructure, and policies against exact ISO clauses, establishing a clear project scope, risk appetite, and certification timeline.',
      ms: 'Kami menanda aras operasi semasa, infrastruktur IT, dan polisi anda berbanding klausa ISO yang tepat, menetapkan skop projek dan garis masa pensijilan yang jelas.'
    },
    deliverables: {
      en: ['Baseline Gap Matrix', 'ISMS/QMS Scope Statement', 'Executive Steering Kickoff'],
      ms: ['Matriks Jurang Asas', 'Penyata Skop ISMS/QMS', 'Pelancaran Jawatankuasa Pemandu']
    }
  },
  {
    step: '02',
    phase: { en: 'DO • Months 2–3', ms: 'LAKSANAKAN • Bulan 2–3' },
    title: {
      en: 'Capability Training & System Architecture',
      ms: 'Latihan Keupayaan & Seni Bina Sistem'
    },
    summary: {
      en: 'Your internal champions complete accredited awareness and implementer workshops while we co-develop lean SOPs, risk treatment plans, and technical safeguards.',
      ms: 'Pasukan dalaman anda melengkapkan bengkel kesedaran dan pelaksana bertauliah sementara kami membangunkan SOP ringkas, pelan rawatan risiko, dan kawalan teknikal.'
    },
    deliverables: {
      en: ['HRD Corp Accredited Workshops', 'SOPs & Control Policies', 'Risk Register & SoA'],
      ms: ['Bengkel Bertauliah HRD Corp', 'SOP & Polisi Kawalan', 'Daftar Risiko & SoA']
    }
  },
  {
    step: '03',
    phase: { en: 'CHECK • Month 4', ms: 'SEMAK • Bulan 4' },
    title: {
      en: 'Internal Audit, Stress Testing & Management Review',
      ms: 'Audit Dalaman, Ujian Tekanan & Semakan Pengurusan'
    },
    summary: {
      en: 'We train your internal auditors and run a full pre-certification mock audit—stress-testing evidence logs, BCMS drills, and cybersecurity controls before external assessors arrive.',
      ms: 'Kami melatih juruaudit dalaman anda dan menjalankan audit simulasi pra-pensijilan penuh—menguji log bukti, latihan BCMS, dan kawalan siber sebelum penilai luaran tiba.'
    },
    deliverables: {
      en: ['Internal Audit Report', 'Root-Cause NCR Closure', 'Clause 9.3 Management Review'],
      ms: ['Laporan Audit Dalaman', 'Penutupan Punca Akar NCR', 'Semakan Pengurusan Klausa 9.3']
    }
  },
  {
    step: '04',
    phase: { en: 'ACT • Month 5+', ms: 'TINDAKAN • Bulan 5+' },
    title: {
      en: 'External Certification Audit & Continuous Mastery',
      ms: 'Audit Pensijilan Luaran & Penguasaan Berterusan'
    },
    summary: {
      en: 'Full advisory support during Stage 1 & Stage 2 Certification Body audits, followed by annual surveillance readiness and continuous workforce upskilling.',
      ms: 'Sokongan nasihat penuh semasa audit Badan Pensijilan Peringkat 1 & 2, diikuti kesediaan pengawasan tahunan dan peningkatan kemahiran tenaga kerja berterusan.'
    },
    deliverables: {
      en: ['Stage 1 & 2 Audit Support', 'ISO Certificate Attainment', 'Annual Surveillance Roadmap'],
      ms: ['Sokongan Audit Peringkat 1 & 2', 'Pencapaian Sijil ISO', 'Pelan Pengawasan Tahunan']
    }
  }
];

export const CERTIFICATES = [
  {
    certNo: 'CSD-2026-88412',
    holder: 'Nurul Huda binti Razak',
    organization: 'Aegis FinTech Malaysia Sdn Bhd',
    audienceType: { en: 'Corporate Employee', ms: 'Pekerja Korporat' },
    courseCode: 'CS-27001-LI',
    courseTitle: {
      en: 'ISO/IEC 27001:2022 ISMS Lead Implementer Workshop',
      ms: 'Bengkel Pelaksana Utama ISMS ISO/IEC 27001:2022'
    },
    hours: { en: '28 Training Hours', ms: '28 Jam Latihan' },
    issueDate: { en: '16 Oct 2026', ms: '16 Okt 2026' },
    status: { en: 'Verified Active', ms: 'Disahkan Aktif' }
  },
  {
    certNo: 'CSD-2026-88419',
    holder: 'Daniel Tan Wei Ming',
    organization: 'Meridian Precision Manufacturing Bhd',
    audienceType: { en: 'Management Team', ms: 'Pasukan Pengurusan' },
    courseCode: 'CS-9001-IA',
    courseTitle: {
      en: 'ISO 9001:2015 QMS Process-Based Internal Auditor',
      ms: 'Juruaudit Dalaman Berasaskan Proses QMS ISO 9001:2015'
    },
    hours: { en: '14 Training Hours', ms: '14 Jam Latihan' },
    issueDate: { en: '23 Oct 2026', ms: '23 Okt 2026' },
    status: { en: 'Verified Active', ms: 'Disahkan Aktif' }
  },
  {
    certNo: 'CSD-2026-88504',
    holder: 'Aina Sofea binti Kamaruddin',
    organization: 'Universiti Teknologi Malaysia (Final-Year Cohort)',
    audienceType: { en: 'Final-Year Student', ms: 'Pelajar Tahun Akhir' },
    courseCode: 'CS-42001-AI',
    courseTitle: {
      en: 'ISO/IEC 42001 AI & Cyber Governance Readiness Workshop',
      ms: 'Bengkel Kesediaan Tadbir Urus AI & Siber ISO/IEC 42001'
    },
    hours: { en: '14 Training Hours', ms: '14 Jam Latihan' },
    issueDate: { en: '04 Nov 2026', ms: '04 Nov 2026' },
    status: { en: 'Verified Active', ms: 'Disahkan Aktif' }
  },
  {
    certNo: 'CSD-2026-88601',
    holder: 'Arvindran s/o Subramaniam',
    organization: 'Klang Valley Logistics & Energy Group',
    audienceType: { en: 'Management Team', ms: 'Pasukan Pengurusan' },
    courseCode: 'CS-22301-LI',
    courseTitle: {
      en: 'ISO 22301:2019 BCMS & Crisis Simulation Workshop',
      ms: 'Bengkel BCMS ISO 22301:2019 & Simulasi Krisis'
    },
    hours: { en: '21 Training Hours', ms: '21 Jam Latihan' },
    issueDate: { en: '11 Nov 2026', ms: '11 Nov 2026' },
    status: { en: 'Verified Active', ms: 'Disahkan Aktif' }
  }
];
//export const bullentins = [what does it do ]
export const BULLETINS = [
  {
    id: 'bul-2026-11-kl',
    date: { en: '12 Nov 2026', ms: '12 Nov 2026' },
    category: 'in-house',
    categoryLabel: { en: 'In-House Training', ms: 'Latihan Dalaman' },
    hoursLogged: { en: '+420 Training Hours Logged', ms: '+420 Jam Latihan Direkodkan' },
    title: {
      en: 'In-House ISO/IEC 27001:2022 Cohort Completed for Kuala Lumpur FinTech Group',
      ms: 'Kohort Latihan Dalaman ISO/IEC 27001:2022 Selesai untuk Kumpulan FinTech Kuala Lumpur'
    },
    summary: {
      en: '15 corporate employees and IT security leads completed 28 hours of hands-on SoA mapping using Core Synergy provided slide decks, with all participants receiving tracked completion certificates.',
      ms: '15 pekerja korporat dan ketua keselamatan IT melengkapkan 28 jam pemetaan SoA praktikal menggunakan slaid latihan Core Synergy, bersama sijil penjejakan rasmi.'
    },
    ctaText: { en: 'Request In-House Cohort', ms: 'Mohon Kohort Dalaman' },
    ctaHref: 'contact.html?course=ISO%2FIEC%2027001%3A2022#corporate-enquiry-form'
  },
  {
    id: 'bul-2026-11-student',
    date: { en: '06 Nov 2026', ms: '06 Nov 2026' },
    category: 'student',
    categoryLabel: { en: 'Final-Year Students', ms: 'Pelajar Tahun Akhir' },
    hoursLogged: { en: '+630 Training Hours Logged', ms: '+630 Jam Latihan Direkodkan' },
    title: {
      en: 'Final-Year Engineering & IT Career Readiness Workshop Across Johor Bahru Campuses',
      ms: 'Bengkel Kesediaan Kerjaya Pelajar Tahun Akhir Kejuruteraan & IT di Kampus Johor Bahru'
    },
    summary: {
      en: '45 final-year students completed our industry ISO 9001 & AI governance workshop with complete take-home slide decks and verified tracking certificate numbers (CSD-2026-885xx).',
      ms: '45 pelajar tahun akhir melengkapkan bengkel industri ISO 9001 & tadbir urus AI lengkap dengan slaid rujukan dan nombor penjejakan sijil disahkan.'
    },
    ctaText: { en: 'Book Campus Workshop', ms: 'Tempah Bengkel Kampus' },
    ctaHref: 'contact.html?course=Final-Year+Student+Workshop#corporate-enquiry-form'
  },
  {
    id: 'bul-2026-10-workshop',
    date: { en: '28 Oct 2026', ms: '28 Okt 2026' },
    category: 'workshop',
    categoryLabel: { en: 'Corporate Workshop', ms: 'Bengkel Korporat' },
    hoursLogged: { en: '+350 Training Hours Logged', ms: '+350 Jam Latihan Direkodkan' },
    title: {
      en: 'Penang & KL Executive Management Workshop: Clause 5 Leadership & Risk Governance',
      ms: 'Bengkel Pengurusan Eksekutif Pulau Pinang & KL: Kepimpinan Klausa 5 & Tadbir Urus Risiko'
    },
    summary: {
      en: '25 department heads and management team members completed our 14-hour corporate workshop covering Management Review KPIs, MACC Section 17A, and practical audit defense.',
      ms: '25 ketua jabatan dan pasukan pengurusan melengkapkan bengkel korporat 14 jam merangkumi KPI Semakan Pengurusan, Seksyen 17A SPRM, dan pertahanan audit.'
    },
    ctaText: { en: 'Fill Out Inquiry Form', ms: 'Isi Borang Pertanyaan' },
    ctaHref: 'contact.html#corporate-enquiry-form'
  },
  {
    id: 'bul-2026-10-cert',
    date: { en: '18 Oct 2026', ms: '18 Okt 2026' },
    category: 'certificate',
    categoryLabel: { en: 'Certificate Registry', ms: 'Pendaftaran Sijil' },
    hoursLogged: { en: '14,800+ Cumulative Hours', ms: '14,800+ Jam Kumulatif' },
    title: {
      en: 'Q4 2026 Certificate Tracking Batch Published & Slide Deck Edition 4.2 Released',
      ms: 'Kumpulan Penjejakan Sijil Suku 4 2026 Diterbitkan & Slaid Latihan Edisi 4.2 Dilancarkan'
    },
    summary: {
      en: 'All Q4 corporate workshop and in-house graduates can now verify their CSD-2026 tracking certificate numbers online. Updated printed & digital slide decks are included for upcoming cohorts.',
      ms: 'Semua peserta bengkel korporat dan dalaman Suku 4 kini boleh menyemak nombor sijil CSD-2026 secara dalam talian. Slaid latihan terkini disertakan untuk kohort seterusnya.'
    },
    ctaText: { en: 'Verify Certificate Number', ms: 'Semak Nombor Sijil' },
    ctaHref: '#certificate-tracker'
  },
  {
    id: 'bul-2026-09-bcms',
    date: { en: '22 Sep 2026', ms: '22 Sep 2026' },
    category: 'in-house',
    categoryLabel: { en: 'In-House Training', ms: 'Latihan Dalaman' },
    hoursLogged: { en: '+378 Training Hours Logged', ms: '+378 Jam Latihan Direkodkan' },
    title: {
      en: 'Logistics & Energy Crisis Simulation In-House Training Surpasses 99% Audit Readiness',
      ms: 'Latihan Dalaman Simulasi Krisis Logistik & Tenaga Mencapai 99% Kesediaan Audit'
    },
    summary: {
      en: '18 management and operations employees completed 21 hours of ISO 22301 Business Continuity tabletop drills on-site with tailored slide playbooks.',
      ms: '18 pekerja operasi dan pengurusan melengkapkan 21 jam latihan meja Kesinambungan Perniagaan ISO 22301 di premis bersama buku panduan slaid khusus.'
    },
    ctaText: { en: 'Inquire for Your Team', ms: 'Mohon Untuk Pasukan Anda' },
    ctaHref: 'contact.html?course=ISO%2022301%3A2019#corporate-enquiry-form'
  },
  {
    id: 'bul-2026-09-roadmap',
    date: { en: '10 Sep 2026', ms: '10 Sep 2026' },
    category: 'workshop',
    categoryLabel: { en: '2026 Schedule & Advisory', ms: 'Jadual 2026 & Penasihat' },
    hoursLogged: { en: 'Direct Corporate Booking', ms: 'Tempahan Korporat Terus' },
    title: {
      en: '2026 In-House & Corporate Workshop Slots Open — Direct Inquiry Desk Active',
      ms: 'Slot Latihan Dalaman & Bengkel Korporat 2026 Dibuka — Meja Pertanyaan Terus Aktif'
    },
    summary: {
      en: 'While self-serve online course checkout is currently in planning, organizations and universities can reserve all 2026 cohorts directly through our corporate inquiry form.',
      ms: 'Sementara pembelian kursus dalam talian sedang dalam perancangan, organisasi dan universiti boleh menempah kesemua kohort 2026 terus melalui borang pertanyaan kami.'
    },
    ctaText: { en: 'Go to Inquiry Form', ms: 'Ke Borang Pertanyaan' },
    ctaHref: 'contact.html#corporate-enquiry-form'
  }
];

export const FAQS = [
  {
    q: {
      en: 'How do participants access training notes, slides, and materials?',
      ms: 'Bagaimanakah peserta mengakses nota, slaid dan bahan latihan?'
    },
    a: {
      en: 'No external LMS or student portal login is required. Core Synergy provides curated presentation slide decks, audit checklists, and practical workshop templates directly to every participant during the in-house training or corporate workshop.',
      ms: 'Tiada log masuk LMS atau portal pelajar diperlukan. Core Synergy menyediakan slaid pembentangan tersusun, senarai semak audit, dan templat bengkel praktikal secara terus kepada setiap peserta semasa latihan dalaman atau bengkel korporat.'
    }
  },
  {
    q: {
      en: 'Do participants receive a certificate and how can the certificate number be tracked?',
      ms: 'Adakah peserta menerima sijil dan bagaimanakah nombor sijil boleh dijejaki?'
    },
    a: {
      en: 'Yes. Every graduate of our in-house trainings and corporate or final-year student workshops receives an official completion certificate bearing a unique Tracking Certificate Number (e.g., CSD-2026-88412) and logged training hours, verifiable on our Certificate Tracker.',
      ms: 'Ya. Setiap graduan latihan dalaman serta bengkel korporat atau pelajar tahun akhir menerima sijil tamat latihan rasmi dengan Nombor Penjejakan Sijil unik (cth. CSD-2026-88412) dan jumlah jam latihan yang boleh disahkan melalui Penjejak Sijil kami.'
    }
  },
  {
    q: {
      en: 'Can we book training online directly, or do we submit an inquiry form?',
      ms: 'Bolehkah kami membeli kursus terus secara dalam talian atau melalui borang pertanyaan?'
    },
    a: {
      en: 'Direct online e-commerce checkout is in planning for future rollout. Currently, all corporate employee cohorts, management workshops, and final-year student programs are scheduled through our quick Corporate Inquiry Form—with quotations and HRD Corp SBL-Khas documentation sent within 4 business hours.',
      ms: 'Pembelian dalam talian secara terus sedang dalam perancangan masa hadapan. Buat masa ini, semua kohort pekerja korporat, bengkel pengurusan, dan program pelajar tahun akhir ditempah melalui Borang Pertanyaan kami—dengan sebut harga dan dokumentasi HRD Corp SBL-Khas dihantar dalam 4 jam bekerja.'
    }
  },
  {
    q: {
      en: 'Who are your programs designed for—corporate staff, management, or final-year students?',
      ms: 'Untuk siapakah program latihan anda direka—pekerja korporat, pengurusan atau pelajar tahun akhir?'
    },
    a: {
      en: 'We tailor each session across three core groups: Corporate Employees (operational SOPs, QA, cybersecurity & internal audit), Management Teams (ISO leadership, risk & Section 17A governance), and Final-Year Students (industry-ready ISO, quality & AI career transition workshops).',
      ms: 'Kami menyesuaikan setiap sesi untuk tiga kumpulan utama: Pekerja Korporat (SOP operasi, QA, keselamatan siber & audit dalaman), Pasukan Pengurusan (kepimpinan ISO, risiko & tadbir urus Seksyen 17A), serta Pelajar Tahun Akhir (bengkel kesediaan kerjaya ISO, kualiti & AI).'
    }
  }
];

