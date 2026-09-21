const lawsData = {
    foundational: [
        {
            id: 'rpc',
            icon: 'fa-book',
            title: 'Revised Penal Code',
            tag: 'Foundational Law',
            teaser: 'The primary criminal code of the Philippines, defining felonies and prescribing penalties.',
            ra: 'Act No. 3815',
            year: '1930',
            category: 'foundational',
            body: `
        <p>The <strong class="text-parchment">Revised Penal Code (RPC)</strong>, enacted as Act No. 3815 on December 8, 1930, is the primary criminal statute of the Philippines. It is largely based on the Spanish Código Penal of 1870 and defines the general principles of criminal law as well as specific felonies.</p>
        <p>The RPC is divided into two books: <em>Book I</em> covers general principles (felonies, circumstances affecting liability, penalties, extinction of criminal liability) and <em>Book II</em> enumerates specific crimes and their penalties.</p>
        <div class="bg-white/5 rounded-lg p-4 border-l-4 border-gold">
          <p class="text-xs font-semibold text-gold uppercase tracking-wider mb-1">Key Amendment</p>
          <p><strong>RA 10951 (2017)</strong> significantly updated the fine amounts and penalty thresholds in the RPC to reflect present-day economic conditions, since many original fines dated to 1930 values.</p>
        </div>
        <ul class="space-y-1 list-disc list-inside">
          <li>Classifies felonies as graves, less grave, or light — each with corresponding penalty ranges.</li>
          <li>Employs a complex "penalty graduation" system with mitigating and aggravating circumstances.</li>
          <li>Prescribes penalties in terms of periods (minimum, medium, maximum).</li>
          <li>Covers crimes against national security, public order, persons, property, chastity, and civil status.</li>
        </ul>`,
        },
        {
            id: 'rules-of-court',
            icon: 'fa-gavel',
            title: 'Rules of Court',
            tag: 'Foundational Law',
            teaser: 'Governs the procedure in Philippine courts — the "how" of criminal prosecution.',
            ra: 'Supreme Court Rules (as amended)',
            year: '1940 / 2019',
            category: 'foundational',
            body: `
        <p>The <strong class="text-parchment">Rules of Court</strong> are promulgated by the Supreme Court under its constitutional rule-making power (Article VIII). They govern all procedure in Philippine courts — from the filing of a complaint to the execution of judgment.</p>
        <p>For criminal proceedings, the most important rules are <strong>Rules 110–127</strong> (institution of criminal actions, prosecution, bail, arraignment, trial, judgment, new trial and reconsideration, and search and seizure).</p>
        <div class="bg-white/5 rounded-lg p-4 border-l-4 border-gold">
          <p class="text-xs font-semibold text-gold uppercase tracking-wider mb-1">Key Updates</p>
          <p>The <strong>2019 Amendments to the Rules of Criminal Procedure</strong> introduced significant changes to continuous trial, judicial affidavit rule, and case management to address court congestion.</p>
        </div>
        <ul class="space-y-1 list-disc list-inside">
          <li>Rule 110: Institution of criminal actions — complaint vs. information.</li>
          <li>Rule 114: Bail — right to bail, conditions, and forfeiture.</li>
          <li>Rule 115: Rights of the accused at trial.</li>
          <li>Rule 126: Search and seizure — warrant requirements and exceptions.</li>
        </ul>`,
        },
        {
            id: 'constitution-1987',
            icon: 'fa-landmark',
            title: '1987 Philippine Constitution',
            tag: 'Foundational Law',
            teaser: 'The supreme law of the land — all criminal legislation and procedure must conform to it.',
            ra: 'Ratified February 2, 1987',
            year: '1987',
            category: 'foundational',
            body: `
        <p>The <strong class="text-parchment">1987 Philippine Constitution</strong> is the supreme law. All legislation, including every penal law, must conform to its provisions. Any law, executive order, or court ruling inconsistent with the Constitution is void.</p>
        <p>For the criminal justice system, the most critical articles are <strong>Article III (Bill of Rights)</strong>, <strong>Article VIII (Judicial Department)</strong>, and <strong>Article XIV (Education, Science and Technology)</strong> insofar as it affects BJMP and DOJ-run education programs.</p>
        <div class="bg-white/5 rounded-lg p-4 border-l-4 border-gold">
          <p class="text-xs font-semibold text-gold uppercase tracking-wider mb-1">Constitutional Supremacy</p>
          <p>Any violation of an accused person's constitutional rights produces consequences — inadmissibility of evidence, void proceedings, civil/criminal liability for erring officers.</p>
        </div>`,
        },
    ],
    specialized: [
        {
            id: 'ra9208',
            icon: 'fa-people-group',
            title: 'Anti-Trafficking in Persons Act',
            ra: 'RA 9208',
            year: '2003 (amended by RA 10364, 2012)',
            category: 'trafficking',
            tag: 'Special Penal Law',
            teaser: 'Criminalizes all forms of trafficking in persons, especially women and children.',
            penalty: 'Imprisonment of 20 years to life; fines up to ₱5 million.',
            agency: 'Inter-Agency Council Against Trafficking (IACAT), PNP-WCPC, NBI',
            body: `
        <p><strong class="text-parchment">RA 9208</strong>, as expanded by RA 10364 (Expanded Anti-Trafficking in Persons Act of 2012), is the Philippines' primary statute against human trafficking. It criminalizes recruitment, transportation, harboring, and receipt of persons by means of force, fraud, deception, or abuse of power for exploitation.</p>
        <p>"Exploitation" includes sexual exploitation, forced labor, slavery, servitude, and organ removal. The law applies even if the victim consents, if any of the prohibited means were used.</p>
        <div class="bg-white/5 rounded-lg p-4 border-l-4 border-gold">
          <p class="text-xs font-semibold text-gold uppercase tracking-wider mb-1">Penalty Range</p>
          <p>Trafficking: 20 years to life imprisonment + fine of ₱1M–₱2M. Qualified Trafficking (victim is a child; trafficking within a crisis situation): Life imprisonment + fine up to ₱5M.</p>
        </div>
        <ul class="space-y-1 list-disc list-inside">
          <li>The Philippines is a source, transit, and destination country for trafficking.</li>
          <li>Online Sexual Exploitation of Children (OSEC) is a major prosecuted category.</li>
          <li>IACAT coordinates all government anti-trafficking efforts.</li>
          <li>Victims are entitled to legal assistance, shelter, and rehabilitation.</li>
        </ul>`,
        },
        {
            id: 'ra9165',
            icon: 'fa-capsules',
            title: 'Comprehensive Dangerous Drugs Act',
            ra: 'RA 9165',
            year: '2002',
            category: 'drugs',
            tag: 'Special Penal Law',
            teaser: 'Governs the use, sale, manufacture, and import/export of dangerous drugs.',
            penalty: 'Ranges from 12 years imprisonment to life imprisonment and death (now life imprisonment under RA 9346); fines up to ₱10 million.',
            agency: 'Philippine Drug Enforcement Agency (PDEA), PNP, NBI',
            body: `
        <p><strong class="text-parchment">RA 9165</strong> is the comprehensive law on dangerous drugs in the Philippines. It repealed the prior Dangerous Drugs Act (RA 6425) and established the Philippine Drug Enforcement Agency (PDEA) as the lead government agency.</p>
        <p>The law categorizes controlled substances (Schedule I and II), criminalizes possession, use, sale, manufacture, importation, and exportation of dangerous drugs, and provides for rehabilitation programs for drug users.</p>
        <div class="bg-white/5 rounded-lg p-4 border-l-4 border-gold">
          <p class="text-xs font-semibold text-gold uppercase tracking-wider mb-1">Penalty Range</p>
          <p>Possession (5g+: shabu; 10g+: marijuana): Life imprisonment + fine up to ₱10M. Sale, manufacture, importation: Life imprisonment + fine up to ₱10M. Sec. 15 (use): 6 months minimum-medium of rehabilitation.</p>
        </div>
        <ul class="space-y-1 list-disc list-inside">
          <li>Chain of custody rule — strict requirements for handling drug evidence to prevent planting.</li>
          <li>Court-supervised drug treatment and rehabilitation for first-time offenders using.</li>
          <li>Extensive amendments proposed/pending due to prison overcrowding issues.</li>
          <li>Mandatory drug testing for certain government positions, students, and employees.</li>
        </ul>`,
        },
        {
            id: 'ra10175',
            icon: 'fa-computer',
            title: 'Cybercrime Prevention Act',
            ra: 'RA 10175',
            year: '2012',
            category: 'cybercrime',
            tag: 'Special Penal Law',
            teaser: 'Addresses crimes committed through computer systems and the internet.',
            penalty: 'Generally one degree higher than the RPC equivalent; imprisonment of 6 years to 12 years for specific cyber offenses.',
            agency: 'PNP Anti-Cybercrime Group (ACG), NBI Cybercrime Division, Department of Justice Office of Cybercrime',
            body: `
        <p><strong class="text-parchment">RA 10175</strong> was the Philippines' first comprehensive cybercrime law. It criminalizes offenses against the confidentiality, integrity, and availability of computer data and systems, as well as computer-related and content-related offenses.</p>
        <div class="bg-white/5 rounded-lg p-4 border-l-4 border-gold">
          <p class="text-xs font-semibold text-gold uppercase tracking-wider mb-1">Penalty Range</p>
          <p>Cybercrimes defined under the law carry a penalty one degree higher than the RPC analog. Cybersex: 6–12 years + fines. Child pornography (online): penalties under RA 9775 apply plus one degree higher.</p>
        </div>
        <ul class="space-y-1 list-disc list-inside">
          <li>Covers: illegal access, data interference, system interference, cybersquatting, cybersex, child pornography, unsolicited commercial communications (spam), libel.</li>
          <li>Online libel provision (Sec. 4(c)(4)) was controversial; upheld by Supreme Court but with limitations.</li>
          <li>Prescribes real-time collection of traffic data with court authorization.</li>
          <li>DOJ Office of Cybercrime coordinates all law enforcement efforts on cybercrime.</li>
        </ul>`,
        },
        {
            id: 'ra9262',
            icon: 'fa-venus',
            title: 'Anti-Violence Against Women & Children Act',
            ra: 'RA 9262',
            year: '2004',
            category: 'gender',
            tag: 'Special Penal Law',
            teaser: 'Defines and criminalizes violence against women and their children in intimate relationships.',
            penalty: 'imprisonment of 1 month to 20 years, depending on the act; mandatory protection order.',
            agency: 'PNP Women and Children Protection Center (WCPC), DOJ, DSWD',
            body: `
        <p><strong class="text-parchment">RA 9262</strong> protects women and their children from physical, sexual, psychological, and economic abuse perpetrated by intimate partners (husband, former husband, live-in partner, boyfriend/girlfriend, or any person with whom the woman has a child).</p>
        <p>It introduced the <strong class="text-parchment">Barangay Protection Order (BPO)</strong>, which can be issued by barangay officials within 24 hours. Courts issue Temporary (TPO) and Permanent Protection Orders (PPO).</p>
        <div class="bg-white/5 rounded-lg p-4 border-l-4 border-gold">
          <p class="text-xs font-semibold text-gold uppercase tracking-wider mb-1">Penalty Range</p>
          <p>Physical violence: 1 month–6 years; Sexual violence: 6–12 years; Psychological violence: 6–12 years; Economic abuse: 1 month–1 year. Protection orders are available to victims regardless of criminal prosecution status.</p>
        </div>
        <ul class="space-y-1 list-disc list-inside">
          <li>Violations are public offenses — prosecution does not require private complaint.</li>
          <li>Psychological violence (emotional manipulation, verbal abuse) is explicitly criminalized.</li>
          <li>Economic violence (withholding support, sabotaging livelihood) is covered.</li>
          <li>Dedicated "VAWC desks" exist in all barangays and PNP stations.</li>
        </ul>`,
        },
        {
            id: 'ra8049',
            icon: 'fa-user-graduate',
            title: 'Anti-Hazing Act',
            ra: 'RA 8049 (amended by RA 11053, 2018)',
            year: '1995 / 2018',
            category: 'gender',
            tag: 'Special Penal Law',
            teaser: 'Regulates initiation rites and prohibits hazing in schools, fraternities, and organizations.',
            penalty: 'Reclusion perpetua if hazing results in death; 10–20 years if serious physical injuries result.',
            agency: 'PNP, Commission on Higher Education (CHED), Department of Education (DepEd)',
            body: `
        <p><strong class="text-parchment">RA 11053</strong> (Expanded Anti-Hazing Act) expanded the original RA 8049 (1995), tightening definitions and increasing penalties. "Hazing" is defined as any act that results in physical or psychological suffering as a prerequisite to joining a club/organization, regardless of the victim's consent.</p>
        <div class="bg-white/5 rounded-lg p-4 border-l-4 border-gold">
          <p class="text-xs font-semibold text-gold uppercase tracking-wider mb-1">Penalty Range</p>
          <p>If death: Reclusion perpetua (life). Serious physical injuries: Reclusion temporal (12–20 years). Slight/less serious injuries: Arresto mayor (1–6 months). Officers/advisers present: same criminal liability as participants.</p>
        </div>
        <ul class="space-y-1 list-disc list-inside">
          <li>Even non-participants who are present and failed to prevent hazing may be held liable.</li>
          <li>School officials who approved the initiation may also face liability.</li>
          <li>Prior written notice to school authorities does not exempt organizers from liability.</li>
        </ul>`,
        },
        {
            id: 'ra11479',
            icon: 'fa-bomb',
            title: 'Anti-Terrorism Act',
            ra: 'RA 11479',
            year: '2020',
            category: 'terrorism',
            tag: 'Special Penal Law',
            teaser: 'Defines and penalizes terrorism and related acts; establishes the Anti-Terrorism Council.',
            penalty: 'Life imprisonment without parole for the act of terrorism; 12 years for other offenses.',
            agency: 'Anti-Terrorism Council (ATC), NTF-ELCAC, PNP, NBI, AFP',
            body: `
        <p><strong class="text-parchment">RA 11479</strong> replaced the Human Security Act of 2007. It defines "terrorism" as acts intended to cause death or serious bodily injury to persons, endanger lives, or create an atmosphere of fear to compel the government or public to do something — coupled with the intent to intimidate the government or the public, destabilize fundamental political/economic/social structures, or create a public emergency.</p>
        <div class="bg-white/5 rounded-lg p-4 border-l-4 border-gold">
          <p class="text-xs font-semibold text-gold uppercase tracking-wider mb-1">Penalty Range</p>
          <p>Terrorism: Life imprisonment without parole. Threatening to commit terrorism: 12 years. Financing terrorism: Life imprisonment + fine. Recruitment: Life imprisonment.</p>
        </div>
        <ul class="space-y-1 list-disc list-inside">
          <li>Anti-Terrorism Council (ATC) can designate individuals/groups as terrorists.</li>
          <li>Allows detention without warrant for up to 14 days (extendable to 24 days) under strict conditions.</li>
          <li>Law faces ongoing constitutional challenges before the Supreme Court related to free speech and due process.</li>
          <li>Proscription process — courts may declare a group as a terrorist organization.</li>
        </ul>`,
        },
        {
            id: 'ra3019',
            icon: 'fa-handshake-slash',
            title: 'Anti-Graft and Corrupt Practices Act',
            ra: 'RA 3019',
            year: '1960',
            category: 'corruption',
            tag: 'Special Penal Law',
            teaser: 'Prohibits corrupt practices of public officers, including bribery and undue injury to the government.',
            penalty: 'Imprisonment of 6 to 15 years; perpetual disqualification from public office.',
            agency: 'Office of the Ombudsman, Sandiganbayan, COA',
            body: `
        <p><strong class="text-parchment">RA 3019</strong>, together with RA 6713 (Code of Conduct for Public Officials, 1989), forms the backbone of Philippine anti-corruption law. RA 3019 targets public officers who engage in corrupt acts including: persuading government for unwarranted benefits, causing undue injury to the government, receiving gifts/commissions, and having manifestly disproportionate personal property to income (unexplained wealth).</p>
        <div class="bg-white/5 rounded-lg p-4 border-l-4 border-gold">
          <p class="text-xs font-semibold text-gold uppercase tracking-wider mb-1">Penalty Range</p>
          <p>Imprisonment of 6 years and 1 month to 15 years. Perpetual disqualification from holding public office. Forfeiture of ill-gotten wealth. Cases tried by the Sandiganbayan (anti-graft court).</p>
        </div>
        <ul class="space-y-1 list-disc list-inside">
          <li>Office of the Ombudsman (Tanodbayan) is the primary prosecuting authority.</li>
          <li>Sandiganbayan has exclusive original jurisdiction over public officers with salary grade 27+.</li>
          <li>Plunder (RA 7080) — a related law for accumulation of ill-gotten wealth of ₱50M or more.</li>
          <li>SALN (Statement of Assets, Liabilities, and Net Worth) filing is mandatory and reviewed annually.</li>
        </ul>`,
        },
        {
            id: 'ra9344',
            icon: 'fa-child',
            title: 'Juvenile Justice and Welfare Act',
            ra: 'RA 9344 (amended by RA 10630, 2013)',
            year: '2006 / 2013',
            category: 'foundational',
            tag: 'Special Penal Law',
            teaser: 'Establishes a child-sensitive justice system for children in conflict with the law.',
            penalty: 'Children 15 and below: exempt from criminal liability; intervention program. Ages 15–18: diversion if minor crime. Ages 18+: regular criminal law applies.',
            agency: 'DSWD, Local Councils for the Protection of Children (LCPC), Bahay Pag-asa (youth centers)',
            body: `
        <p><strong class="text-parchment">RA 9344</strong> as amended by RA 10630 established the Juvenile Justice and Welfare System. It raised the age of criminal responsibility from 9 to 15 years old, imposed diversion programs for minor offenders aged 15–18, and established Bahay Pag-asa youth care facilities.</p>
        <div class="bg-white/5 rounded-lg p-4 border-l-4 border-gold">
          <p class="text-xs font-semibold text-gold uppercase tracking-wider mb-1">Age Thresholds</p>
          <p>15 and below: Absolute exemption from criminal liability — referred to DSWD. 15–18 acting without discernment: Exempt; diversion programs. 15–18 acting with discernment: Diversion for offenses with penalty below 12 years; otherwise, criminal proceedings in Family Court with child-sensitive procedures.</p>
        </div>
        <ul class="space-y-1 list-disc list-inside">
          <li>No child below 15 may be detained in a regular jail.</li>
          <li>Diversion programs focus on counseling, community service, and education.</li>
          <li>Family Courts have exclusive jurisdiction over CICL cases.</li>
          <li>Records of children's cases are confidential and sealed upon reaching adulthood.</li>
        </ul>`,
        },
    ],
};

if (typeof module !== 'undefined') module.exports = lawsData;
