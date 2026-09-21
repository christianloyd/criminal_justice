const courtsData = {
    courts: [
        {
            id: 'supreme-court',
            icon: 'fa-building-columns',
            title: 'Supreme Court',
            tag: 'Court Level',
            teaser: 'The highest court; final arbiter of all legal questions in the Philippines.',
            body: `
        <p>The <strong class="text-parchment">Supreme Court (SC)</strong> is the highest judicial authority in the Philippines, composed of a Chief Justice and fourteen Associate Justices (total: 15). It has both original and appellate jurisdiction.</p>
        <div class="bg-white/5 rounded-lg p-4 border-l-4 border-gold mb-3">
          <p class="text-xs font-semibold text-gold uppercase tracking-wider mb-1">Composition</p>
          <p>15 Justices. Quorum: Majority (8). Decisions require concurrence of a majority of members who actually took part. En banc decisions require concurrence of majority of all 15 members for constitutional questions.</p>
        </div>
        <p class="font-semibold text-parchment mb-2">Original Jurisdiction (cases commenced here)</p>
        <ul class="list-disc list-inside space-y-1">
          <li>Certiorari, prohibition, mandamus, quo warranto, habeas corpus vs. constitutional commissions, COMELEC, COA.</li>
          <li>All cases involving the constitutionality of a treaty, international agreement, or executive agreement.</li>
        </ul>
        <p class="font-semibold text-parchment mb-2 mt-3">Appellate Jurisdiction</p>
        <ul class="list-disc list-inside space-y-1">
          <li>Appeals from Court of Appeals, Sandiganbayan, RTC on questions of law.</li>
          <li>Death penalty / reclusion perpetua cases come automatically on review.</li>
        </ul>`,
        },
        {
            id: 'court-of-appeals',
            icon: 'fa-gavel',
            title: 'Court of Appeals (CA)',
            tag: 'Court Level',
            teaser: 'Intermediate appellate court that reviews decisions of Regional Trial Courts and quasi-judicial bodies.',
            body: `
        <p>The <strong class="text-parchment">Court of Appeals (CA)</strong> is based in Manila with divisions sitting in Cebu and Cagayan de Oro. It is composed of a Presiding Justice and 68 Associate Justices, organized into 23 divisions of three justices each.</p>
        <div class="bg-white/5 rounded-lg p-4 border-l-4 border-gold mb-3">
          <p class="text-xs font-semibold text-gold uppercase tracking-wider mb-1">Jurisdiction Summary</p>
          <p>Appellate: Reviews decisions of RTCs in criminal cases (except those directly appealable to the SC). Original: Certiorari, prohibition, mandamus, habeas corpus, quo warranto.</p>
        </div>
        <ul class="list-disc list-inside space-y-1">
          <li>Appeal path INTO CA: From RTC convictions via Notice of Appeal (Rule 122).</li>
          <li>Appeal path OUT of CA: Petition for Review on Certiorari to Supreme Court (Rule 45).</li>
          <li>Decisions rendered by divisions of 3; unanimous vote needed, or referred to a Special Division of 5.</li>
        </ul>`,
        },
        {
            id: 'rtc',
            icon: 'fa-landmark',
            title: 'Regional Trial Courts (RTC)',
            tag: 'Court Level',
            teaser: 'Trial courts of general jurisdiction — handles most serious criminal cases.',
            body: `
        <p>The <strong class="text-parchment">Regional Trial Courts (RTCs)</strong> are the main trial courts of general jurisdiction, organized in judicial regions mirroring the country's administrative regions. There are 13+ judicial regions with hundreds of branches nationwide.</p>
        <div class="bg-white/5 rounded-lg p-4 border-l-4 border-gold mb-3">
          <p class="text-xs font-semibold text-gold uppercase tracking-wider mb-1">Criminal Jurisdiction (BP 129, as amended)</p>
          <p>Original exclusive jurisdiction over all criminal cases not within exclusive jurisdiction of lower courts. Generally: offenses with penalties exceeding 6 years imprisonment. Also has exclusive appellate jurisdiction over MTC/MTCC decisions.</p>
        </div>
        <ul class="list-disc list-inside space-y-1">
          <li>Handles serious crimes: murder, homicide, rape, robbery, drug cases (RA 9165).</li>
          <li>Family Courts (designated RTCs under RA 8369) have exclusive jurisdiction over child abuse, VAWC, and CICL cases.</li>
          <li>Environmental Courts (designated RTCs under SC rules) handle environmental crimes.</li>
        </ul>`,
        },
        {
            id: 'sandiganbayan',
            icon: 'fa-balance-scale',
            title: 'Sandiganbayan',
            tag: 'Specialized Court',
            teaser: 'The anti-graft court with exclusive jurisdiction over public officers charged with offenses under RA 3019.',
            body: `
        <p>The <strong class="text-parchment">Sandiganbayan</strong> is a special collegiate court with exclusive original jurisdiction over government officials with salary grade 27 or higher charged with violations of RA 3019 (Anti-Graft Act), RA 1379 (Forfeiture), and other offenses "in relation to their office."</p>
        <div class="bg-white/5 rounded-lg p-4 border-l-4 border-gold mb-3">
          <p class="text-xs font-semibold text-gold uppercase tracking-wider mb-1">Composition & Structure</p>
          <p>Presiding Justice + 20 Associate Justices; sits in 7 Divisions of 3 justices each. Decisions by majority of the division. Unanimous decisions are final; split decisions are referred to a Special Division of 5.</p>
        </div>
        <ul class="list-disc list-inside space-y-1">
          <li>Plunder cases (RA 7080): Sandiganbayan has exclusive jurisdiction.</li>
          <li>Cases involving SG-26 and below: filed with proper RTC.</li>
          <li>Appeals from Sandiganbayan go directly to the Supreme Court.</li>
        </ul>`,
        },
        {
            id: 'mtc',
            icon: 'fa-scale-balanced',
            title: 'Metropolitan / Municipal Trial Courts',
            tag: 'Court Level',
            teaser: 'First-level courts handling minor criminal offenses and preliminary investigations.',
            body: `
        <p>The first-level courts comprise: Metropolitan Trial Courts (MeTC, in Metro Manila); Municipal Trial Courts in Cities (MTCC); Municipal Trial Courts (MTC, in municipalities); and Municipal Circuit Trial Courts (MCTC, covering multiple municipalities).</p>
        <div class="bg-white/5 rounded-lg p-4 border-l-4 border-gold mb-3">
          <p class="text-xs font-semibold text-gold uppercase tracking-wider mb-1">Criminal Jurisdiction</p>
          <p>Violations of city/municipal ordinances. Offenses punishable by imprisonment not exceeding 6 years. Exclusive jurisdiction over offenses with penalties of imprisonment not exceeding 6 years (regardless of fine). Preliminary investigation for non-RTC offenses.</p>
        </div>
        <ul class="list-disc list-inside space-y-1">
          <li>Handles estafa (small amounts), theft, vandalism, traffic violations, and similar offenses.</li>
          <li>Conducts preliminary examination for arrest warrant applications.</li>
          <li>Appeals from MTC go to RTC, then to Court of Appeals.</li>
        </ul>`,
        },
        {
            id: 'specialized-courts',
            icon: 'fa-building',
            title: 'Specialized Courts',
            tag: 'Court Level',
            teaser: 'Courts designated for specific subject matters — Family, Commercial, Environmental, and Tax courts.',
            body: `
        <p>Philippine law designates certain RTC branches as <strong class="text-parchment">Specialized Courts</strong> to concentrate expertise and improve speed of adjudication in technical fields.</p>
        <ul class="space-y-2 mt-3">
          <li><strong class="text-parchment">Family Courts (RA 8369)</strong> — Exclusive jurisdiction over child abuse, VAWC, CICL, adoption, custody, support cases.</li>
          <li><strong class="text-parchment">Commercial Courts</strong> — Handle intra-corporate disputes, rehabilitation, insolvency under the FRIA.</li>
          <li><strong class="text-parchment">Environmental Courts (SC A.M. 09-6-8-SC)</strong> — Handle violations of environmental laws and the Writ of Kalikasan.</li>
          <li><strong class="text-parchment">Court of Tax Appeals (CTA)</strong> — A special collegiate court with appellate jurisdiction over tax and customs cases.</li>
          <li><strong class="text-parchment">Shari'a Courts</strong> — Apply the Code of Muslim Personal Laws in the Bangsamoro region for personal and family matters of Muslim Filipinos.</li>
        </ul>`,
        },
    ],
    trialSteps: [
        {
            step: 1,
            title: 'Investigation',
            icon: 'fa-magnifying-glass',
            summary: 'Police gather evidence and identify suspects.',
            body: `
        <p><strong class="text-parchment">Investigation</strong> is the initial phase where law enforcement officers respond to complaints, gather evidence, interview witnesses, and identify probable suspects. This may involve scene-of-the-crime operations (SOCO), surveillance, and forensic analysis.</p>
        <div class="bg-white/5 rounded-lg p-4 border-l-4 border-gold">
          <p class="text-xs font-semibold text-gold uppercase tracking-wider mb-1">Applicable Rules / Law</p>
          <p>Rule 112 (Preliminary Investigation) · RA 7438 (Rights During Custodial Investigation) · Rule 126 (Search and Seizure)</p>
        </div>
        <p class="mt-3 text-xs text-slate">Typical Timeline: Days to weeks, depending on case complexity. SOCO teams ideally respond within hours of a crime report.</p>`,
        },
        {
            step: 2,
            title: 'Arrest & Custody',
            icon: 'fa-handcuffs',
            summary: 'Suspect taken into custody — with or without a warrant.',
            body: `
        <p>An arrest may be made with a <strong class="text-parchment">warrant</strong> issued by a judge upon probable cause, or <strong class="text-parchment">without a warrant</strong> under the three exceptions in Rule 113, Sec. 5: in flagrante delicto, hot pursuit, and escaped prisoners. Upon arrest, Miranda-equivalent rights must be read.</p>
        <div class="bg-white/5 rounded-lg p-4 border-l-4 border-gold">
          <p class="text-xs font-semibold text-gold uppercase tracking-wider mb-1">Custody Time Limits (Art. 125, RPC)</p>
          <p>Light offenses: 12 hours. Less grave offenses: 18 hours. Grave offenses: 36 hours. Beyond this, detention is illegal unless a warrant or inquest charge is filed.</p>
        </div>`,
        },
        {
            step: 3,
            title: 'Preliminary Investigation',
            icon: 'fa-file-circle-question',
            summary: 'Prosecutor determines if probable cause exists to charge the accused.',
            body: `
        <p>A <strong class="text-parchment">Preliminary Investigation (PI)</strong> is conducted by a prosecutor to determine whether there is sufficient ground to engender a well-founded belief that a crime has been committed and that the respondent is probably guilty. This is required for offenses punishable by at least 4 years, 2 months, and 1 day of imprisonment.</p>
        <div class="bg-white/5 rounded-lg p-4 border-l-4 border-gold">
          <p class="text-xs font-semibold text-gold uppercase tracking-wider mb-1">Applicable Rule / Timelines</p>
          <p>Rule 112 · Prosecutor must act within 10 days of submission for resolution. Total PI: ideally within 60 days. For cases filed directly via inquest (warrantless arrest), a regular PI may be requested by the respondent within 5 days of filing.</p>
        </div>`,
        },
        {
            step: 4,
            title: 'Filing of Information',
            icon: 'fa-file-signature',
            summary: 'Prosecutor files a formal charge (Information) in court.',
            body: `
        <p>If the PI finds probable cause, the prosecutor files an <strong class="text-parchment">Information</strong> — the formal document charging the accused with a specific offense. The Information must contain: the name of the accused, the designation of the offense, the acts or omissions constituting the offense, the approximate time and date, and the place of commission.</p>
        <div class="bg-white/5 rounded-lg p-4 border-l-4 border-gold">
          <p class="text-xs font-semibold text-gold uppercase tracking-wider mb-1">Applicable Rule</p>
          <p>Rule 110 · The Information is filed with the court of proper jurisdiction. A defective Information may be quashed by the accused via a Motion to Quash (Rule 117) before arraignment.</p>
        </div>`,
        },
        {
            step: 5,
            title: 'Initial Appearance / Bail',
            icon: 'fa-door-open',
            summary: 'Court advises the accused of their rights and determines bail eligibility.',
            body: `
        <p>Upon filing of the Information and issuance of a warrant of arrest, the accused appears before the court. The judge advises the accused of charges and rights. <strong class="text-parchment">Bail</strong> (Rule 114) may be applied for — all persons have the right to bail except those charged with offenses punishable by reclusion perpetua when evidence of guilt is strong.</p>
        <div class="bg-white/5 rounded-lg p-4 border-l-4 border-gold">
          <p class="text-xs font-semibold text-gold uppercase tracking-wider mb-1">Bail Options</p>
          <p>Corporate surety (bondsman) · Property bond · Cash deposit · Recognizance (for indigents, RA 10389)</p>
        </div>`,
        },
        {
            step: 6,
            title: 'Arraignment',
            icon: 'fa-comment-dots',
            summary: 'The accused is formally read the charge and enters a plea.',
            body: `
        <p><strong class="text-parchment">Arraignment</strong> (Rule 116) is the formal act of charging the accused in open court. The Information is read in a language known to the accused, and the accused enters a plea: Guilty or Not Guilty. If the accused refuses to plead, a plea of Not Guilty is entered.</p>
        <div class="bg-white/5 rounded-lg p-4 border-l-4 border-gold">
          <p class="text-xs font-semibold text-gold uppercase tracking-wider mb-1">Plea Bargaining</p>
          <p>Before arraignment (or at any time with approval), the accused and prosecution may agree on a lesser offense or reduced penalty. Supreme Court Circulars govern allowable plea bargains in drug cases (RA 9165).</p>
        </div>
        <p class="mt-3 text-xs text-slate">Typical Timeline: Arraignment must be held within 30 days from court's receipt of the case (Speedy Trial Act, RA 8493).</p>`,
        },
        {
            step: 7,
            title: 'Pre-Trial Conference',
            icon: 'fa-handshake',
            summary: 'Parties meet to define issues, mark evidence, and explore plea/mediation options.',
            body: `
        <p>The <strong class="text-parchment">Pre-Trial Conference</strong> (Rule 118) is held after arraignment. Both parties meet before the judge to: mark documentary evidence, stipulate facts not in dispute, identify witnesses, resolve preliminary matters, and explore possible plea bargaining or mediation.</p>
        <div class="bg-white/5 rounded-lg p-4 border-l-4 border-gold">
          <p class="text-xs font-semibold text-gold uppercase tracking-wider mb-1">Pre-Trial Order</p>
          <p>The court issues a Pre-Trial Order containing all stipulations and matters agreed upon. This order controls the subsequent trial — facts admitted at pre-trial need not be proven at trial.</p>
        </div>`,
        },
        {
            step: 8,
            title: 'Trial',
            icon: 'fa-gavel',
            summary: 'Presentation of evidence by prosecution and defense before the court.',
            body: `
        <p><strong class="text-parchment">Trial</strong> (Rules 119, 132) follows the adversarial model: the prosecution presents its evidence first (direct examination, then cross-examination by defense). The defense then presents its own evidence. Rebuttals and sur-rebuttals may follow.</p>
        <div class="bg-white/5 rounded-lg p-4 border-l-4 border-gold">
          <p class="text-xs font-semibold text-gold uppercase tracking-wider mb-1">Standards & Burden</p>
          <p>Prosecution: bears the burden of proving guilt <em>beyond reasonable doubt</em>. All trial proceedings are recorded. The Judicial Affidavit Rule (AM 12-8-8-SC) allows witnesses to submit affidavits in lieu of direct examination to speed up proceedings.</p>
        </div>`,
        },
        {
            step: 9,
            title: 'Judgment / Decision',
            icon: 'fa-scroll',
            summary: 'The court renders a verdict of guilty or not guilty based on evidence.',
            body: `
        <p>The <strong class="text-parchment">Judgment</strong> (Rule 120) is the decision of the court on the merits of the case. It must be written, personally prepared by the judge, and signed by the judge. A judgment of conviction must state: facts proved, the law applicable, and the penalty imposed. Acquittal is immediately final and executory — no appeal by the prosecution is allowed.</p>
        <div class="bg-white/5 rounded-lg p-4 border-l-4 border-gold">
          <p class="text-xs font-semibold text-gold uppercase tracking-wider mb-1">Applicable Rule</p>
          <p>Rule 120 · Judgment must be promulgated within 90 days from submission for decision (Const., Art. VIII, Sec. 15). Civil liability for the offended party is included in the judgment.</p>
        </div>`,
        },
        {
            step: 10,
            title: 'Sentencing',
            icon: 'fa-weight-scale',
            summary: 'The penalty is determined, applying mitigating or aggravating circumstances.',
            body: `
        <p>If the accused is convicted, the court determines the <strong class="text-parchment">penalty</strong> by applying the RPC's system of penalty graduation. The prescribed penalty is adjusted based on mitigating circumstances (e.g., voluntary surrender, plea of guilty) which reduce the penalty and aggravating circumstances (e.g., use of a weapon, treachery) which increase it.</p>
        <div class="bg-white/5 rounded-lg p-4 border-l-4 border-gold">
          <p class="text-xs font-semibold text-gold uppercase tracking-wider mb-1">Indeterminate Sentence Law (Act 4103)</p>
          <p>For most crimes, the ISL requires the court to impose a minimum and maximum term. The Board of Pardons and Parole determines when the prisoner may be released after serving the minimum.</p>
        </div>`,
        },
        {
            step: 11,
            title: 'Appeals',
            icon: 'fa-arrow-up-right-from-square',
            summary: 'The convicted person may seek review of the decision by a higher court.',
            body: `
        <p>A convicted person has the right to <strong class="text-parchment">appeal</strong> a judgment. The appeal stays execution of the sentence (except for probation-eligible cases). Only the accused may appeal an acquittal; the prosecution cannot (double jeopardy bars re-prosecution after acquittal).</p>
        <div class="bg-white/5 rounded-lg p-4 border-l-4 border-gold">
          <p class="text-xs font-semibold text-gold uppercase tracking-wider mb-1">Appeal Modes & Periods</p>
          <p>MTC → RTC: Notice of Appeal within 15 days. RTC → Court of Appeals: Notice of Appeal (Rule 122) within 15 days. RTC conviction of reclusion perpetua or death (now life): Automatic review by CA then SC. CA → SC: Petition for Review on Certiorari (Rule 45) within 15 days from CA decision.</p>
        </div>`,
        },
    ],
    personnel: [
        {
            id: 'judges',
            icon: 'fa-gavel',
            title: 'Judges & Justices',
            tag: 'Court Personnel',
            teaser: 'Adjudicators who preside over cases and render binding decisions.',
            body: `
        <p><strong class="text-parchment">Judges and Justices</strong> are the adjudicators in Philippine courts. They preside over hearings, rule on motions, evaluate evidence, and render enforceable decisions. They must act impartially and are bound by the Code of Judicial Conduct.</p>
        <p class="mt-2 font-semibold text-parchment">Qualifications (SC Justices)</p>
        <ul class="list-disc list-inside space-y-1">
          <li>Natural-born Filipino citizen.</li>
          <li>At least 40 years old.</li>
          <li>At least 15 years of legal practice, or held public office requiring bar membership for same period.</li>
          <li>Of proven competence, integrity, probity, and independence.</li>
        </ul>`,
        },
        {
            id: 'prosecutors',
            icon: 'fa-user-shield',
            title: 'Prosecutors',
            tag: 'Court Personnel',
            teaser: 'State attorneys who represent the People of the Philippines in criminal proceedings.',
            body: `
        <p><strong class="text-parchment">Prosecutors</strong> (also called Fiscal) are under the Department of Justice and represent the State in criminal cases. Their primary duty is not to convict, but to ensure that justice is done — meaning they should not suppress evidence favorable to the accused.</p>
        <ul class="list-disc list-inside space-y-1 mt-2">
          <li>City/Provincial Prosecutors conduct preliminary investigations and file informations in trial courts.</li>
          <li>Regional/National Prosecutors handle appeals and special assignments.</li>
          <li>State Prosecutors handle cases in specialized courts (Sandiganbayan, CTA) and high-profile cases.</li>
        </ul>`,
        },
        {
            id: 'defense-counsel',
            icon: 'fa-user-tie',
            title: 'Defense Attorneys / PAO',
            tag: 'Court Personnel',
            teaser: 'Lawyers who represent accused persons and protect their constitutional rights.',
            body: `
        <p>Every accused has the right to be represented by a <strong class="text-parchment">defense lawyer</strong>. Private attorneys may be retained, or the <strong class="text-parchment">Public Attorney's Office (PAO)</strong> provides free legal assistance to indigents and persons who cannot afford counsel.</p>
        <ul class="list-disc list-inside space-y-1 mt-2">
          <li>PAO is mandated under RA 9406 (2007 PAO Act) to provide free legal services.</li>
          <li>PAO Lawyers are present in all courts and jails for custodial investigation.</li>
          <li>Defense counsel's duty is to uphold the rights of the accused while maintaining candor toward the tribunal.</li>
        </ul>`,
        },
        {
            id: 'court-officials',
            icon: 'fa-briefcase',
            title: 'Court Officials & Staff',
            tag: 'Court Personnel',
            teaser: 'Clerks of court, interpreters, sheriffs, and other personnel who support court operations.',
            body: `
        <p>Courts function through a complement of administrative and quasi-judicial officials whose work is essential to the judicial process.</p>
        <ul class="list-disc list-inside space-y-1 mt-2">
          <li><strong>Clerk of Court:</strong> Manages court records, docket, and calendar; receives evidence for safekeeping.</li>
          <li><strong>Court Interpreter:</strong> Interprets proceedings for non-English/Filipino speakers or hearing-impaired parties.</li>
          <li><strong>Sheriff:</strong> Enforces court orders, serves summons and processes, and executes judgments (e.g., arrests on warrant, civil executions).</li>
          <li><strong>Court Stenographer:</strong> Records all proceedings verbatim for the official transcript.</li>
          <li><strong>Branch Clerk of Court:</strong> Assists the judge in administrative matters specific to the branch.</li>
        </ul>`,
        },
    ],
};

if (typeof module !== 'undefined') module.exports = courtsData;
