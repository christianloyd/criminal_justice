const correctionsData = {
    institutions: [
        {
            id: 'bjmp',
            icon: 'fa-building',
            title: 'BJMP — City & Municipal Jails',
            tag: 'Corrections Facility',
            teaser: 'Manages city/municipal jails for detainees and those sentenced to 3 years or less.',
            body: `
        <p>The <strong class="text-parchment">Bureau of Jail Management and Penology (BJMP)</strong>, established under RA 6975 (1990), manages all city and municipal jails in the Philippines. It is a uniformed service under the DILG.</p>
        <div class="bg-white/5 rounded-lg p-4 border-l-4 border-gold mb-3">
          <p class="text-xs font-semibold text-gold uppercase tracking-wider mb-1">Jurisdiction Rule (3-Year Threshold)</p>
          <p>BJMP jails hold: (1) <strong>detainees</strong> — persons awaiting trial (presumed innocent); and (2) <strong>convicted prisoners</strong> with sentences of up to 3 years. Sentences exceeding 3 years are served in BuCor prisons.</p>
        </div>
        <p class="font-semibold text-parchment mb-2">BJMP Jails Include</p>
        <ul class="list-disc list-inside space-y-1">
          <li>Manila City Jail (MCJ) — one of the most congested jails in the world by population.</li>
          <li>Quezon City Jail — another persistently overcrowded facility.</li>
          <li>City Jails in every chartered city; Municipal Jails in municipalities with police stations.</li>
        </ul>
        <p class="font-semibold text-parchment mb-2 mt-3">BJMP Mandates</p>
        <ul class="list-disc list-inside space-y-1">
          <li>Safekeeping of all detainees/prisoners under its custody.</li>
          <li>Provision of rehabilitation, health, and education programs within resource constraints.</li>
          <li>Coordination with courts for detainee transfers and hearings.</li>
        </ul>`,
        },
        {
            id: 'bucor',
            icon: 'fa-lock',
            title: 'BuCor — National Prisons',
            tag: 'Corrections Facility',
            teaser: 'Manages national prisons for convicted prisoners serving sentences exceeding 3 years.',
            body: `
        <p>The <strong class="text-parchment">Bureau of Corrections (BuCor)</strong> is under the Department of Justice (DOJ). It manages national prisons for convicted prisoners serving sentences of more than 3 years. Its mandate was expanded by RA 10575 (2013, Bureau of Corrections Act).</p>
        <div class="bg-white/5 rounded-lg p-4 border-l-4 border-gold mb-3">
          <p class="text-xs font-semibold text-gold uppercase tracking-wider mb-1">Major BuCor Facilities</p>
          <p><strong>New Bilibid Prison (NBP)</strong>, Muntinlupa — the country's largest national penitentiary. Correctional Institution for Women (CIW), Mandaluyong. Sablayan Prison & Penal Farm, Occidental Mindoro. San Ramon Prison & Penal Farm, Zamboanga. Iwahig Prison & Penal Farm, Puerto Princesa, Palawan. Leyte Regional Prison.</p>
        </div>
        <ul class="list-disc list-inside space-y-1">
          <li>Provides rehabilitation programs: education, livelihood/vocational training, and spiritual formation.</li>
          <li>Coordinates with the Board of Pardons and Parole (BPP) for parole/conditional pardon applications.</li>
          <li>Under the Good Conduct Time Allowance law (RA 10592), prisoners earn time credits for good behavior.</li>
        </ul>`,
        },
    ],
    community: [
        {
            id: 'probation',
            icon: 'fa-file-contract',
            title: 'Probation',
            tag: 'Community Corrections',
            teaser: 'A community-based alternative to imprisonment for first-time offenders with short sentences.',
            body: `
        <p><strong class="text-parchment">Probation</strong> is governed by Presidential Decree 968 (Probation Law, 1976), as amended. It allows first-time offenders to serve their sentence in the community under the supervision of a Probation Officer, rather than in prison.</p>
        <div class="bg-white/5 rounded-lg p-4 border-l-4 border-gold mb-3">
          <p class="text-xs font-semibold text-gold uppercase tracking-wider mb-1">Eligibility</p>
          <p>Conviction with a sentence not exceeding 6 years. Must be a first-time offender (never been convicted of a crime before). Application must be made before serving sentence. Cannot be granted to those convicted of subversion, drug offenses (RA 9165 trafficker/dealer), or crimes against national security.</p>
        </div>
        <ul class="list-disc list-inside space-y-1">
          <li>Supervised by the Parole and Probation Administration (PPA) under DOJ.</li>
          <li>Conditions may include: regular reporting, community service, curfew, no travel restrictions, counseling.</li>
          <li>Violation of probation conditions results in revocation and imprisonment.</li>
        </ul>`,
        },
        {
            id: 'parole',
            icon: 'fa-door-open',
            title: 'Parole',
            tag: 'Community Corrections',
            teaser: 'Release of a prisoner before full sentence completion, with continued supervision.',
            body: `
        <p><strong class="text-parchment">Parole</strong> is the conditional release of a prisoner from prison to serve the remainder of their sentence in the community under supervision. Governed by the Indeterminate Sentence Law (Act 4103) and the Board of Pardons and Parole (BPP).</p>
        <div class="bg-white/5 rounded-lg p-4 border-l-4 border-gold mb-3">
          <p class="text-xs font-semibold text-gold uppercase tracking-wider mb-1">Eligibility</p>
          <p>Prisoner must have served the minimum sentence under the ISL. Must not have been convicted of offenses with life imprisonment or reclusion perpetua. BPP recommends parole; the President or BPP grants it based on the prisoner's conduct and rehabilitation progress.</p>
        </div>
        <ul class="list-disc list-inside space-y-1">
          <li>Supervised by Parole Officers under the Parole and Probation Administration (PPA).</li>
          <li>Conditions are similar to probation — regular reporting, no new offenses.</li>
          <li>Parole is NOT a pardon — the sentence remains, only its mode of service changes.</li>
        </ul>`,
        },
        {
            id: 'community-service',
            icon: 'fa-hands-helping',
            title: 'Community Service',
            tag: 'Community Corrections',
            teaser: 'Court-ordered unpaid work for the benefit of the community as an alternative to short imprisonment.',
            body: `
        <p><strong class="text-parchment">Community Service</strong> was institutionalized through RA 11362 (Community Service Act, 2019), amending the RPC to allow courts to order community service in lieu of imprisonment for light penalties.</p>
        <ul class="list-disc list-inside space-y-1 mt-2">
          <li>Applicable to offenses with penalties of arresto menor or arresto mayor (1 day–6 months).</li>
          <li>Community service may include: cleaning public areas, assistance in government offices, disaster response support.</li>
          <li>One day of community service = one day of imprisonment credit.</li>
          <li>Supervised by the court and coordinated with LGUs and community organizations.</li>
        </ul>`,
        },
        {
            id: 'reintegration',
            icon: 'fa-person-walking-arrow-right',
            title: 'Reintegration Programs',
            tag: 'Community Corrections',
            teaser: 'Programs designed to help released prisoners return to productive community life.',
            body: `
        <p><strong class="text-parchment">Reintegration Programs</strong> are multi-agency efforts coordinated by DOJ (through PPA and BuCor), DSWD, and LGUs to assist released offenders in rebuilding their lives and reducing recidivism.</p>
        <ul class="list-disc list-inside space-y-1 mt-2">
          <li>After-Care Program — monitoring of parolees and probationers post-release.</li>
          <li>Livelihood assistance — DOLE-funded skills training and employment linkage for released prisoners.</li>
          <li>DSWD's Sustainable Livelihood Program (SLP) extended to released offenders and families.</li>
          <li>Halfway Houses — transitional housing for prisoners completing their sentences.</li>
          <li>Mental health and trauma counseling for those with substance abuse history.</li>
        </ul>`,
        },
    ],
    rehabilitation: [
        {
            id: 'basic-education',
            icon: 'fa-book',
            title: 'Basic Education Program',
            tag: 'Rehabilitation Program',
            teaser: 'Literacy and formal schooling programs for inmates without educational qualifications.',
            body: `<p>BuCor and BJMP coordinate with DepEd and ALS (Alternative Learning System) to provide in-jail basic literacy and alternative education programs. Inmates can complete primary and secondary education equivalency while confined, improving their employment prospects upon release.</p>
        <ul class="list-disc list-inside space-y-1 mt-2"><li>Accreditation and Equivalency (A&E) tests administered in facilities.</li><li>Reading and writing programs for functionally illiterate detainees.</li><li>Children of women inmates provided early childhood care inside CIW.</li></ul>`,
        },
        {
            id: 'vocational-training',
            icon: 'fa-screwdriver-wrench',
            title: 'Vocational Training',
            tag: 'Rehabilitation Program',
            teaser: 'Skills training in trades and crafts to prepare inmates for employment after release.',
            body: `<p>TESDA and BuCor/BJMP run vocational training programs within correctional facilities. Inmates can earn TESDA National Certificates for skills such as welding, electrical installation, food processing, garment production, and handicrafts.</p>
        <ul class="list-disc list-inside space-y-1 mt-2"><li>TESDA-accredited assessments conducted inside prisons.</li><li>Prison industries (furniture, crafts) provide practical working experience.</li><li>Penal farm activities (Iwahig, Sablayan) provide agricultural skills training.</li></ul>`,
        },
        {
            id: 'drug-rehabilitation',
            icon: 'fa-capsules',
            title: 'Drug Rehabilitation',
            tag: 'Rehabilitation Program',
            teaser: 'Treatment and recovery programs for inmates with substance use disorders.',
            body: `<p>Many inmates in Philippine jails are detained for or history of drug-related offenses. BuCor, BJMP, and PDEA coordinate to provide drug rehabilitation modules that combine medical treatment, behavioral therapy, and group counseling.</p>
        <ul class="list-disc list-inside space-y-1 mt-2"><li>Therapeutic Community (TC) modality — peer-led, community-based recovery model.</li><li>Detoxification and medical withdrawal management with DOH oversight.</li><li>Urine drug testing within facilities to monitor recovery progress.</li><li>RA 9165 (Sec. 12) mandates drug rehabilitation courts as an alternative to imprisonment for users.</li></ul>`,
        },
        {
            id: 'mental-health',
            icon: 'fa-brain',
            title: 'Mental Health Services',
            tag: 'Rehabilitation Program',
            teaser: 'Psychological assessment and support for inmates with mental health conditions.',
            body: `<p>RA 11036 (Mental Health Act, 2018) requires that even persons deprived of liberty have access to mental health services. BuCor and BJMP deploy psychologists and social workers to assess and assist inmates with mental health conditions.</p>
        <ul class="list-disc list-inside space-y-1 mt-2"><li>Psychological assessment upon entry into the facility.</li><li>Individual and group counseling sessions.</li><li>Referral to DOH hospitals for severe psychiatric cases.</li><li>Crisis intervention and suicide prevention protocols.</li></ul>`,
        },
        {
            id: 'spiritual-formation',
            icon: 'fa-place-of-worship',
            title: 'Moral & Spiritual Formation',
            tag: 'Rehabilitation Program',
            teaser: 'Faith-based and values formation programs to promote moral rehabilitation.',
            body: `<p>Spiritual and values formation programs are conducted through chaplaincy services, volunteer religious organizations, and civic groups. These programs demonstrate strong recidivism-reduction outcomes when combined with other rehabilitation modalities.</p>
        <ul class="list-disc list-inside space-y-1 mt-2"><li>Multi-faith chaplaincy (Catholic, Protestant, Muslim, Iglesia ni Cristo) in BuCor and BJMP facilities.</li><li>Values formation sessions and moral recovery workshops.</li><li>Good Conduct Time Allowance (RA 10592) incentivizes participation in programs.</li><li>NGO-led livelihood and faith-based reintegration support post-release.</li></ul>`,
        },
    ],
};

if (typeof module !== 'undefined') module.exports = correctionsData;
