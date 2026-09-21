const constitutionData = {
    provisions: [
        {
            id: 'judiciary',
            icon: 'fa-building-columns',
            title: 'Article VIII — The Judiciary',
            tag: 'Constitutional Provision',
            teaser: 'Establishes an independent Supreme Court and lower courts vested with judicial power.',
            body: `
        <p><strong class="text-parchment">Article VIII</strong> of the 1987 Constitution vests judicial power in the Supreme Court and in such lower courts as may be established by law. The Supreme Court is composed of a Chief Justice and fourteen Associate Justices — a total of fifteen.</p>
        <p>The provision enshrines <strong class="text-parchment">judicial independence</strong> through security of tenure (Supreme Court Justices serve until age 70), a constitutionally protected salary, and insulation from political pressure.</p>
        <div class="bg-white/5 rounded-lg p-4 border-l-4 border-gold">
          <p class="text-xs font-semibold text-gold uppercase tracking-wider mb-1">Key Sections</p>
          <p>Sec. 1 — Judicial power defined (duty to settle actual controversies and determine grave abuse of discretion). Sec. 5 — Original jurisdiction of the Supreme Court. Sec. 7 — Qualifications and tenure of justices.</p>
        </div>
        <ul class="space-y-1 list-disc list-inside">
          <li>Supreme Court has original and appellate jurisdiction over specific cases.</li>
          <li>"Grave abuse of discretion" clause gives courts broad review powers over government acts.</li>
          <li>Judicial and Bar Council (JBC) nominates candidates for judicial positions.</li>
          <li>Congress cannot reduce the roster of justices or reorganize the court to influence decisions.</li>
        </ul>`,
        },
        {
            id: 'bill-of-rights',
            icon: 'fa-book-open',
            title: 'Article III — Bill of Rights',
            tag: 'Constitutional Provision',
            teaser: 'Guarantees fundamental civil liberties and procedural protections for all persons.',
            body: `
        <p><strong class="text-parchment">Article III</strong> is the most directly impactful provision on the criminal justice system. It enumerates fundamental rights that cannot be suspended or abridged by ordinary legislation — they can only be limited through due process and within strict constitutional limits.</p>
        <p>The Bill of Rights was deliberately lengthened in the 1987 Constitution relative to its predecessors, as a direct response to the documented human rights abuses during the Martial Law era.</p>
        <div class="bg-white/5 rounded-lg p-4 border-l-4 border-gold">
          <p class="text-xs font-semibold text-gold uppercase tracking-wider mb-1">Core Rights Established</p>
          <p>Due process (Sec. 1) · Equal protection (Sec. 1) · Search and seizure (Sec. 2) · Right to counsel (Sec. 12) · Right to bail (Sec. 13) · Speedy trial (Sec. 14) · Presumption of innocence (Sec. 14) · Privilege against self-incrimination (Sec. 17)</p>
        </div>
        <ul class="space-y-1 list-disc list-inside">
          <li>Applies to all persons within Philippine jurisdiction, not just citizens.</li>
          <li>Evidence obtained in violation of Sections 2 and 12 is inadmissible (exclusionary rule).</li>
          <li>No ex post facto laws or bills of attainder shall be passed (Sec. 22).</li>
          <li>Involuntary servitude, except as punishment for crime, is prohibited (Sec. 18).</li>
        </ul>`,
        },
        {
            id: 'police-power',
            icon: 'fa-shield-halved',
            title: 'State Police Power & General Welfare',
            tag: 'Constitutional Provision',
            teaser: 'The inherent power of the state to enact laws promoting public order, safety, health, and morals.',
            body: `
        <p><strong class="text-parchment">Police Power</strong> is the inherent authority of the sovereign to enact legislation to promote public health, morals, safety, and general welfare. While not explicitly labeled "police power" in one article, it underlies the legislative power in Article VI and the social justice provisions in Articles II and XIII.</p>
        <p>In the criminal justice context, police power justifies the enactment of penal laws. However, it is limited by the Bill of Rights — penal laws must not be oppressive, must serve a legitimate state interest, and must use means reasonably related to that interest.</p>
        <div class="bg-white/5 rounded-lg p-4 border-l-4 border-gold">
          <p class="text-xs font-semibold text-gold uppercase tracking-wider mb-1">Constitutional Basis</p>
          <p>Art. II, Sec. 5 (maintenance of peace and order) · Art. VI (legislative power to enact penal laws) · Art. XIII, Sec. 1 (social justice).</p>
        </div>
        <ul class="space-y-1 list-disc list-inside">
          <li>Police power is the broadest, most essential, and most indefinite of government powers.</li>
          <li>Limited by due process — laws must be fair, reasonable, and not arbitrary.</li>
          <li>Equal protection clause prevents discriminatory application of penal laws.</li>
          <li>The state may impose penalties, but punishment must not be cruel, degrading, or inhuman (Art. III, Sec. 19).</li>
        </ul>`,
        },
    ],
    rights: [
        {
            id: 'due-process',
            right: 'Due Process',
            citation: 'Art. III, Sec. 1',
            icon: 'fa-balance-scale',
            tag: 'Constitutional Right',
            teaser: 'No person shall be deprived of life, liberty, or property without due process of law.',
            body: `
        <p><strong class="text-parchment">Due Process</strong> under Section 1 of the Bill of Rights has two components: <em>substantive</em> due process (the law itself must be fair, reasonable, and just) and <em>procedural</em> due process (the manner of enforcing the law must follow fair procedures).</p>
        <p>In criminal proceedings, procedural due process requires: notice of the charge, an opportunity to be heard, judgment by a competent, impartial tribunal, and a decision based on evidence.</p>
        <div class="bg-white/5 rounded-lg p-4 border-l-4 border-gold">
          <p class="text-xs font-semibold text-gold uppercase tracking-wider mb-1">If Violated</p>
          <p>A conviction obtained without due process is void. The accused may file a petition for <em>certiorari</em> or <em>habeas corpus</em> to challenge the detention or conviction.</p>
        </div>`,
        },
        {
            id: 'search-seizure',
            right: 'Protection Against Unreasonable Searches & Seizures',
            citation: 'Art. III, Sec. 2',
            icon: 'fa-magnifying-glass',
            tag: 'Constitutional Right',
            teaser: 'The right of the people to be secure in their persons, houses, papers, and effects.',
            body: `
        <p>Section 2 protects individuals from unreasonable government intrusions. A <strong class="text-parchment">search warrant</strong> must be obtained from a judge upon probable cause, supported by oath or affirmation, and must particularly describe the place to be searched and the items to be seized.</p>
        <p>Exceptions to the warrant requirement include: in flagrante delicto arrests, hot pursuit, stop-and-frisk (Terry doctrine), searches of moving vehicles, and plain view seizures — each with strict legal requirements.</p>
        <div class="bg-white/5 rounded-lg p-4 border-l-4 border-gold">
          <p class="text-xs font-semibold text-gold uppercase tracking-wider mb-1">If Violated (Exclusionary Rule — Art. III, Sec. 3(2))</p>
          <p>Any evidence obtained through an unlawful search is "the fruit of the poisonous tree" — inadmissible in any proceeding. This is the Philippine equivalent of the US exclusionary rule.</p>
        </div>`,
        },
        {
            id: 'self-incrimination',
            right: 'Privilege Against Self-Incrimination',
            citation: 'Art. III, Sec. 17',
            icon: 'fa-comment-slash',
            tag: 'Constitutional Right',
            teaser: 'No person shall be compelled to be a witness against himself.',
            body: `
        <p>The privilege against self-incrimination protects an individual from being forced to provide testimony that could be used against them in a criminal prosecution. It covers testimonial, communicative evidence — <strong class="text-parchment">not physical evidence</strong> (blood samples, handwriting exemplars, and DNA have been held not to be "testimonial").</p>
        <p>The right must be claimed at the moment the incriminating question is asked. A witness in a non-criminal case may also invoke it for specific questions, not for the entire proceeding.</p>
        <div class="bg-white/5 rounded-lg p-4 border-l-4 border-gold">
          <p class="text-xs font-semibold text-gold uppercase tracking-wider mb-1">If Violated</p>
          <p>Any confession or admission obtained through compulsion, torture, or in violation of the custodial investigation rights (RA 7438) is inadmissible and exposes the responsible officers to criminal and civil liability.</p>
        </div>`,
        },
        {
            id: 'right-to-counsel',
            right: 'Right to Counsel',
            citation: 'Art. III, Sec. 12',
            icon: 'fa-user-tie',
            tag: 'Constitutional Right',
            teaser: 'Any person under investigation has the right to have competent and independent counsel, preferably of his own choice.',
            body: `
        <p>The right to counsel attaches from the moment a person is placed under custodial investigation (i.e., when the investigation focuses on a particular suspect who is no longer free to leave). A waiver of this right must be made <strong class="text-parchment">in writing</strong> and <strong class="text-parchment">in the presence of counsel</strong>.</p>
        <p>If the accused cannot afford a lawyer, the state must provide one through the <strong class="text-parchment">Public Attorney's Office (PAO)</strong>. RA 7438 operationalizes this right during custodial investigation, requiring police to immediately inform accused persons of all Miranda-equivalent rights in a language they understand.</p>
        <div class="bg-white/5 rounded-lg p-4 border-l-4 border-gold">
          <p class="text-xs font-semibold text-gold uppercase tracking-wider mb-1">If Violated</p>
          <p>Any statement or confession obtained without counsel present (and without a valid written waiver) is inadmissible. Officers who conduct violations may face RA 7438 criminal liability.</p>
        </div>`,
        },
        {
            id: 'speedy-trial',
            right: 'Right to Speedy, Impartial, and Public Trial',
            citation: 'Art. III, Sec. 14(2)',
            icon: 'fa-hourglass-half',
            tag: 'Constitutional Right',
            teaser: 'All accused shall enjoy the right to a speedy, impartial, and public trial.',
            body: `
        <p>The right to a speedy trial protects the accused from indefinite prosecution and the anxiety it causes. The <strong class="text-parchment">Speedy Trial Act (RA 8493)</strong> operationalizes this right, requiring that arraignment commence within 30 days of filing the information and that trial begin within 30 days from arraignment.</p>
        <p>The <em>public</em> trial requirement means the press and interested members of the public may attend — judges may limit attendance only for compelling reasons (witness protection, child victims, classified evidence).</p>
        <div class="bg-white/5 rounded-lg p-4 border-l-4 border-gold">
          <p class="text-xs font-semibold text-gold uppercase tracking-wider mb-1">If Violated</p>
          <p>Violation of the right to speedy trial results in <strong>dismissal of the case</strong> — a permanent bar to reprosecution (equivalent to double jeopardy) under the Speedy Trial Act.</p>
        </div>`,
        },
        {
            id: 'presumption-of-innocence',
            right: 'Presumption of Innocence',
            citation: 'Art. III, Sec. 14(2)',
            icon: 'fa-scale-balanced',
            tag: 'Constitutional Right',
            teaser: 'In all criminal prosecutions, the accused shall be presumed innocent until the contrary is proved.',
            body: `
        <p>The <strong class="text-parchment">presumption of innocence</strong> places the entire burden of proof on the prosecution. The accused need not prove anything — it is the state that must establish guilt <em>beyond reasonable doubt</em>, the highest standard of proof in the Philippine legal system.</p>
        <p>"Reasonable doubt" is not mere possible doubt, but the kind of doubt in the mind of a reasonable person based on a rational consideration of the evidence. If reasonable doubt remains after all evidence is heard, the accused must be acquitted.</p>
        <div class="bg-white/5 rounded-lg p-4 border-l-4 border-gold">
          <p class="text-xs font-semibold text-gold uppercase tracking-wider mb-1">Practical Effect</p>
          <p>An acquittal, even if the judge privately suspects guilt, must be entered if the prosecution fails to prove guilt beyond reasonable doubt. Convictions based on mere suspicion are reversible error.</p>
        </div>`,
        },
    ],
};

if (typeof module !== 'undefined') module.exports = constitutionData;
