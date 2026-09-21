const challengesData = [
    {
        id: 'overcrowding',
        icon: 'fa-users',
        title: 'Prison & Jail Overcrowding',
        tag: 'Systemic Challenge',
        teaser: 'Philippine detention facilities are severely overcrowded, operating at 200–600%+ of designed capacity.',
        body: `
      <p>Philippine jails and prisons are among the most overcrowded in the world. City jails in Metro Manila regularly operate at <strong class="text-parchment">400–600% of their designed capacity</strong>, creating inhumane conditions that violate the dignity and rights of detainees — most of whom are still presumed innocent.</p>
      <div class="bg-red-900/20 rounded-lg p-4 border-l-4 border-red-600 mb-3">
        <p class="text-xs font-semibold text-red-400 uppercase tracking-wider mb-1">Scale of the Problem</p>
        <p>The Philippines has one of the highest pre-trial detention rates in Southeast Asia. A significant proportion of jail populations consists of detainees — people who have not been convicted — due to slow case resolution and inability to post bail.</p>
      </div>
      <p class="font-semibold text-parchment mb-2">Root Causes</p>
      <ul class="list-disc list-inside space-y-1">
        <li>Mass arrests during anti-drug campaigns (Oplan Tokhang era).</li>
        <li>Slow court proceedings delay resolution of cases, prolonging pre-trial detention.</li>
        <li>High bail amounts effectively detain poor individuals who cannot afford bail.</li>
        <li>Insufficient prison construction despite rising population.</li>
      </ul>
      <p class="font-semibold text-parchment mb-2 mt-3">Reform Proposals</p>
      <ul class="list-disc list-inside space-y-1">
        <li>Expansion of the recognizance program (RA 10389) for indigent detainees.</li>
        <li>Decongestion programs — early parole review, presidential clemency.</li>
        <li>Accelerated court proceedings through continuous trial guidelines.</li>
        <li>New prison facility construction under BuCor modernization plan.</li>
      </ul>`,
    },
    {
        id: 'recidivism',
        icon: 'fa-rotate-left',
        title: 'High Recidivism Rate',
        tag: 'Systemic Challenge',
        teaser: 'A significant proportion of released offenders return to criminal activity, indicating gaps in rehabilitation.',
        body: `
      <p><strong class="text-parchment">Recidivism</strong> — the rate at which offenders re-offend after release — remains a persistent challenge. When offenders leave prison without education, employment prospects, stable housing, or professional support, re-offending becomes highly likely.</p>
      <div class="bg-red-900/20 rounded-lg p-4 border-l-4 border-red-600 mb-3">
        <p class="text-xs font-semibold text-red-400 uppercase tracking-wider mb-1">Contributing Factors</p>
        <p>Overcrowded jails cannot provide adequate rehabilitation. Released prisoners face social stigma that limits employment. Lack of halfway houses and post-release support. Drug use relapse without sustained treatment.</p>
      </div>
      <p class="font-semibold text-parchment mb-2">Reform Proposals</p>
      <ul class="list-disc list-inside space-y-1">
        <li>Strengthening PPA's After-Care Program with multi-agency coordination.</li>
        <li>DOLE–BuCor MOAs linking pre-release training to post-release employment.</li>
        <li>Mandatory post-release monitoring for high-risk offenders.</li>
        <li>Expansion of Therapeutic Community programs inside all detention facilities.</li>
      </ul>`,
    },
    {
        id: 'case-backlogs',
        icon: 'fa-layer-group',
        title: 'Case Backlogs',
        tag: 'Systemic Challenge',
        teaser: 'Philippine courts carry a massive backlog of pending cases, with some dating back decades.',
        body: `
      <p>The Philippine court system regularly carries hundreds of thousands of pending cases across all levels. This backlog means that victims wait years for justice, and accused persons (particularly detainees) may be held for periods approaching or even exceeding the sentence they might receive if convicted.</p>
      <div class="bg-red-900/20 rounded-lg p-4 border-l-4 border-red-600 mb-3">
        <p class="text-xs font-semibold text-red-400 uppercase tracking-wider mb-1">Root Causes</p>
        <p>Insufficient number of judges and courts relative to the population. Frequent continuances and postponements by both parties. Complex procedural requirements. Insufficient court infrastructure (lack of courtrooms, staff). High volume of cases from mass arrest operations.</p>
      </div>
      <p class="font-semibold text-parchment mb-2">Reform Proposals</p>
      <ul class="list-disc list-inside space-y-1">
        <li>Continuous Trial Guidelines (AM 15-06-10-SC) — limiting postponements and setting strict case timelines.</li>
        <li>Judicial Affidavit Rule — reducing in-court examination time.</li>
        <li>Expansion of Alternative Dispute Resolution (RA 9285) for eligible offenses.</li>
        <li>Increased judicial appointments and expansion of the number of RTC branches.</li>
      </ul>`,
    },
    {
        id: 'judicial-delays',
        icon: 'fa-hourglass-end',
        title: 'Judicial Delays',
        tag: 'Systemic Challenge',
        teaser: 'Cases take on average several years to resolve, undermining justice and deterrence.',
        body: `
      <p><strong class="text-parchment">Judicial delay</strong> is distinct from case backlogs — it refers to the pace of individual cases moving through the system. Filipino complainants often speak of cases "dying of postponements." The right to speedy trial (RA 8493) is frequently undermined in practice.</p>
      <div class="bg-red-900/20 rounded-lg p-4 border-l-4 border-red-600 mb-3">
        <p class="text-xs font-semibold text-red-400 uppercase tracking-wider mb-1">Common Delay Points</p>
        <p>Slow preliminary investigation at the prosecutor level. Delayed issuance of arrest warrants. Multiple postponements of hearing dates. Slow promulgation of decisions beyond the 90-day constitutional limit. Appeal pendency at the CA and SC level.</p>
      </div>
      <p class="font-semibold text-parchment mb-2">Reform Initiatives</p>
      <ul class="list-disc list-inside space-y-1">
        <li>E-court / Case Monitoring System — electronic tracking of case status.</li>
        <li>SC Performance Audit — quarterly monitoring of judges who exceed decision timelines.</li>
        <li>DOJ KPI monitoring for prosecutors' preliminary investigation resolution timelines.</li>
      </ul>`,
    },
    {
        id: 'inequitable-justice',
        icon: 'fa-scale-unbalanced',
        title: 'Inequitable Access to Justice',
        tag: 'Systemic Challenge',
        teaser: 'Wealth and social status significantly affect access to legal representation and case outcomes.',
        body: `
      <p>The quality of justice a person receives in the Philippines is too often determined by their economic resources. Wealthy accused can afford skilled private counsel, post bail, and pursue appeals for years. Poor accused rely on overworked PAO lawyers, cannot post bail, and languish in overcrowded jails.</p>
      <div class="bg-red-900/20 rounded-lg p-4 border-l-4 border-red-600 mb-3">
        <p class="text-xs font-semibold text-red-400 uppercase tracking-wider mb-1">Documented Disparities</p>
        <p>High-profile corruption cases involving politicians frequently experience years-long delays before Sandiganbayan while the accused remain free on bail. Ordinary theft or drug cases involving the poor move faster to conviction. High acquittal rates in some categories, low in others, track with representation quality.</p>
      </div>
      <p class="font-semibold text-parchment mb-2">Reform Proposals</p>
      <ul class="list-disc list-inside space-y-1">
        <li>Strengthening PAO — additional funding, lawyers, and paralegal support.</li>
        <li>Expanding legal aid clinics in law schools (mandatory legal aid, RA 9999).</li>
        <li>Bail reform — risk-based bail assessment instead of fixed monetary bail.</li>
        <li>Community-based legal aid programs at the barangay level.</li>
      </ul>`,
    },
    {
        id: 'wrongful-convictions',
        icon: 'fa-person-circle-xmark',
        title: 'Wrongful Convictions',
        tag: 'Systemic Challenge',
        teaser: 'Innocent persons have been convicted, highlighting systemic evidentiary and procedural weaknesses.',
        body: `
      <p><strong class="text-parchment">Wrongful convictions</strong> — convictions of factually innocent persons — have been documented in the Philippines, often coming to light decades later through post-conviction DNA testing, recanted testimonies, or investigative journalism.</p>
      <div class="bg-red-900/20 rounded-lg p-4 border-l-4 border-red-600 mb-3">
        <p class="text-xs font-semibold text-red-400 uppercase tracking-wider mb-1">Contributing Factors</p>
        <p>Eyewitness misidentification. False confessions obtained under coercive interrogation. Inadequate legal representation at trial. Police and prosecutorial tunnel vision. Planted or mishandled evidence.</p>
      </div>
      <p class="font-semibold text-parchment mb-2">Reform Proposals</p>
      <ul class="list-disc list-inside space-y-1">
        <li>Expanded use of DNA evidence (RA 10867 — DNA Act); DNA Identification System in NBI.</li>
        <li>Mandatory recording of custodial investigations (RA 11235 in practice).</li>
        <li>Innocence review mechanisms — systematic post-conviction review processes.</li>
        <li>Compensation framework for wrongfully convicted persons.</li>
      </ul>`,
    },
    {
        id: 'drug-war-concerns',
        icon: 'fa-triangle-exclamation',
        title: 'Drug War & Human Rights Concerns',
        tag: 'Systemic Challenge',
        teaser: 'The Oplan Tokhang anti-drug campaign raised significant human rights and due process concerns.',
        body: `
      <p>The government's anti-drug campaign, particularly from 2016 onward under Oplan Tokhang, resulted in a significant number of deaths in drug-law enforcement operations. Human rights organizations, the Commission on Human Rights (CHR), and the United Nations raised serious concerns about extrajudicial killings, due process violations, and lack of accountability.</p>
      <div class="bg-red-900/20 rounded-lg p-4 border-l-4 border-red-600 mb-3">
        <p class="text-xs font-semibold text-red-400 uppercase tracking-wider mb-1">International Scrutiny</p>
        <p>The International Criminal Court (ICC) opened a preliminary examination into the Philippines' drug war. The Philippines withdrew from the Rome Statute in 2019. ICC proceedings continued despite withdrawal. The CHR documented thousands of cases of alleged extrajudicial killings.</p>
      </div>
      <p class="font-semibold text-parchment mb-2">Critical Issues</p>
      <ul class="list-disc list-inside space-y-1">
        <li>Due process for drug suspects — right to life, liberty, and presumption of innocence.</li>
        <li>Accountability mechanisms for law enforcement officers involved in lethal operations.</li>
        <li>Independent investigation — CHR's mandate vs. executive interference concerns.</li>
        <li>Balancing effective drug enforcement with constitutional rights protections.</li>
      </ul>`,
    },
    {
        id: 'inadequate-resources',
        icon: 'fa-sack-xmark',
        title: 'Inadequate Resources',
        tag: 'Systemic Challenge',
        teaser: 'Chronic underfunding affects courts, jails, and law enforcement capabilities.',
        body: `
      <p><strong class="text-parchment">Inadequate resource allocation</strong> is a root cause of many other systemic challenges. Courts lack courtrooms and staff; jails lack facilities for rehabilitation programs; law enforcement agencies lack equipment and training; the PAO lacks lawyers relative to caseload.</p>
      <div class="bg-red-900/20 rounded-lg p-4 border-l-4 border-red-600 mb-3">
        <p class="text-xs font-semibold text-red-400 uppercase tracking-wider mb-1">Key Resource Gaps</p>
        <p>Judges-to-population ratio significantly below international norms. BJMP and BuCor medical, educational, and recreational facilities grossly inadequate for population sizes. PNP criminal investigation equipment (forensics, digital) unevenly distributed across regions. Remote municipalities without prosecutors or PAO lawyers.</p>
      </div>
      <p class="font-semibold text-parchment mb-2">Reform Proposals</p>
      <ul class="list-disc list-inside space-y-1">
        <li>Increased DOJ and Supreme Court budgets for infrastructure and human resources.</li>
        <li>Judiciary Development Fund (JDF) — earmarked fund from court filing fees for court improvements.</li>
        <li>PNP Modernization Act — professionalization and equipment upgrade program.</li>
        <li>UNDP, USAID, and EU technical assistance programs for justice sector reform.</li>
      </ul>`,
    },
];

if (typeof module !== 'undefined') module.exports = challengesData;
