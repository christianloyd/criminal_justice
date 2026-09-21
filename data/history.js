const historyData = [
    {
        id: 'pre-colonial',
        era: 'Pre-Colonial',
        period: 'Before 1565',
        icon: 'fa-people-group',
        teaser: 'Datu-administered customary law governed communities through barangay-based adjudication.',
        tag: 'Historical Era',
        body: `
      <p>Before Spanish colonization, the Philippines was composed of independent barangays — small, kinship-based communities typically of 30 to 100 households, each led by a <strong class="text-parchment">Datu</strong> (chieftain). Justice was fundamentally communal and restorative in nature.</p>
      <p>Disputes were resolved through the Datu acting as arbiter, applying customary laws passed down orally through generations. There was no formal written legal code binding all communities.</p>
      <div class="bg-white/5 rounded-lg p-4 border-l-4 border-gold">
        <p class="text-xs font-semibold text-gold uppercase tracking-wider mb-1">Historical Note — The "Code of Kalantiaw"</p>
        <p>The so-called "Code of Kalantiaw" (1433) was long cited in Philippine history books as the earliest legal code. However, modern historians have largely concluded it was a <strong class="text-parchment">20th-century fabrication</strong> by José Marco (c. 1913). It should be treated as a historical myth, not a genuine pre-colonial legal document.</p>
      </div>
      <ul class="space-y-1 list-disc list-inside">
        <li>Justice was restorative — disputes resolved through <em>compensation</em> (bugay/ayaw) rather than punitive imprisonment.</li>
        <li>Community elders and the Datu exercised judicial authority collectively.</li>
        <li>Offenses against community harmony (theft, violence, debt default) were adjudicated publicly.</li>
        <li>No separation of legislative, executive, and judicial functions — all vested in the Datu.</li>
      </ul>`,
    },
    {
        id: 'spanish-colonial',
        era: 'Spanish Colonial',
        period: '1565 – 1898',
        icon: 'fa-landmark',
        teaser: 'Spanish legal codes and Church influence introduced a formal, written justice system rooted in the civil law tradition.',
        tag: 'Historical Era',
        body: `
      <p>The Spanish colonization of the Philippines (1565–1898) fundamentally transformed the justice system by introducing the <strong class="text-parchment">Roman-based civil law tradition</strong>, written codified laws, and the Catholic Church as a moral authority intertwined with governance.</p>
      <p>The <strong class="text-parchment">Codigo Penal</strong> (Spanish Penal Code, adapted in the 1870s for the Philippines) became the basis of criminal law — the same Spanish Código Penal that later evolved into the Revised Penal Code (RPC) of 1930 still in use today.</p>
      <div class="bg-white/5 rounded-lg p-4 border-l-4 border-gold">
        <p class="text-xs font-semibold text-gold uppercase tracking-wider mb-1">Legal Basis</p>
        <p>The Spanish Código Penal (c. 1870) — adapted for the Philippines and applied from the late 19th century.</p>
      </div>
      <ul class="space-y-1 list-disc list-inside">
        <li>Introduction of the Audiencia (colonial court) as the highest judicial body.</li>
        <li>Alcalde Mayor administered local justice in provinces.</li>
        <li>The Guardia Civil (1868) was established as the first professional police force.</li>
        <li>Inquisitorial procedure influenced — accused had limited procedural rights.</li>
        <li>Church courts held jurisdiction over certain offenses, especially moral and religious crimes.</li>
      </ul>`,
    },
    {
        id: 'american-colonial',
        era: 'American Colonial',
        period: '1898 – 1946',
        icon: 'fa-flag',
        teaser: 'Common law elements and modern policing were introduced, blending with the existing civil law tradition.',
        tag: 'Historical Era',
        body: `
      <p>The American colonial period brought an unprecedented restructuring of Philippine governance, grafting <strong class="text-parchment">American common law elements</strong> onto the existing Spanish civil law foundation — creating the unique hybrid legal system the Philippines uses today.</p>
      <p>The <strong class="text-parchment">Philippine Constabulary</strong> (established 1901) became the first American-era police institution, later reorganized under the Insular Government. The <strong class="text-parchment">1935 Commonwealth Constitution</strong> introduced a bill of rights and a three-branch government on the American model.</p>
      <div class="bg-white/5 rounded-lg p-4 border-l-4 border-gold">
        <p class="text-xs font-semibold text-gold uppercase tracking-wider mb-1">Key Legal Instruments</p>
        <p>1935 Commonwealth Constitution · Revised Penal Code (Act 3815, 1930) · Rules of Court (1940)</p>
      </div>
      <ul class="space-y-1 list-disc list-inside">
        <li>Adversarial-influenced procedure introduced (accused given the right to confront witnesses).</li>
        <li>Supreme Court of the Philippines established in its modern form.</li>
        <li>Revised Penal Code (1930) codified criminal offenses and penalties, replacing Spanish codes.</li>
        <li>National Bureau of Investigation precursors established.</li>
        <li>Jury system attempted briefly but ultimately NOT adopted permanently.</li>
      </ul>`,
    },
    {
        id: 'post-independence',
        era: 'Post-Independence',
        period: '1946 – 1972',
        icon: 'fa-sun',
        teaser: 'The independent Republic expanded its judiciary and developed national law enforcement institutions.',
        tag: 'Historical Era',
        body: `
      <p>Following independence in 1946, the Philippine Republic continued operating under the 1935 Constitution and focused on expanding and professionalizing national institutions, including the judiciary, prosecution service, and law enforcement.</p>
      <p>This era saw the growth of the <strong class="text-parchment">Department of Justice (DOJ)</strong> and the formal establishment of the <strong class="text-parchment">National Bureau of Investigation (NBI)</strong> in its current form under Republic Act 157 (1947).</p>
      <div class="bg-white/5 rounded-lg p-4 border-l-4 border-gold">
        <p class="text-xs font-semibold text-gold uppercase tracking-wider mb-1">Key Milestones</p>
        <p>RA 157 (NBI Act, 1947) · Judiciary Act of 1948 · RPC amendments and special laws passed by Congress.</p>
      </div>
      <ul class="space-y-1 list-disc list-inside">
        <li>Judiciary Act of 1948 (RA 296) organized the court system comprehensively.</li>
        <li>Parole and Probation Board established for rehabilitative correctional programs.</li>
        <li>Expansion of special courts (Court of Industrial Relations, Court of Tax Appeals).</li>
        <li>Progressive growth of the prosecutor service under the DOJ.</li>
      </ul>`,
    },
    {
        id: 'martial-law',
        era: 'Martial Law Era',
        period: '1972 – 1981',
        icon: 'fa-triangle-exclamation',
        teaser: 'The 1973 Constitution and expanded executive power through Presidential Decrees reshaped the justice system, raising human rights concerns.',
        tag: 'Historical Era',
        body: `
      <p>President Ferdinand Marcos declared Martial Law on September 21, 1972, suspending the legislature and ruling by <strong class="text-parchment">Presidential Decree (PD)</strong>. The 1973 Constitution concentrated power in the executive and weakened judicial independence.</p>
      <p>This era is critically noted for serious <strong class="text-parchment">human rights concerns</strong>: arbitrary detention, the establishment of military tribunals to try civilians, reports of torture, enforced disappearances, and the suspension of the Writ of Habeas Corpus for extended periods.</p>
      <div class="bg-white/5 rounded-lg p-4 border-l-4 border-red-600">
        <p class="text-xs font-semibold text-red-400 uppercase tracking-wider mb-1">Human Rights Context</p>
        <p>Various human rights organizations documented thousands of arbitrary detentions, extrajudicial killings, and torture cases during this period. These events later shaped the strong Bill of Rights provisions in the 1987 Constitution.</p>
      </div>
      <ul class="space-y-1 list-disc list-inside">
        <li>Over 1,800 Presidential Decrees issued — many still in force today as "PD" citations in law.</li>
        <li>Military Commission No. 2 held trials of civilians, raising due process concerns.</li>
        <li>Habeas corpus suspended for those detained for national security offenses.</li>
        <li>Philippine Constabulary integrated into the Armed Forces of the Philippines (AFP).</li>
      </ul>`,
    },
    {
        id: 'modern-democratic',
        era: 'Modern Democratic Era',
        period: '1987 – Present',
        icon: 'fa-scale-balanced',
        teaser: 'The 1987 Constitution restored democratic institutions, strengthened the Bill of Rights, and spurred landmark criminal justice reforms.',
        tag: 'Historical Era',
        body: `
      <p>The EDSA People Power Revolution (February 1986) ended the Marcos regime. The <strong class="text-parchment">1987 Constitution</strong> was ratified and remains the supreme law of the land. It features the most comprehensive Bill of Rights in Philippine constitutional history and restored an independent judiciary.</p>
      <p>Key reform legislation followed: <strong class="text-parchment">RA 6975 (1990)</strong> created the Philippine National Police (PNP), separating law enforcement from the military. Subsequent decades brought waves of special penal legislation addressing cybercrime, trafficking, terrorism, and juvenile justice.</p>
      <div class="bg-white/5 rounded-lg p-4 border-l-4 border-gold">
        <p class="text-xs font-semibold text-gold uppercase tracking-wider mb-1">Key Legal Instruments</p>
        <p>1987 Constitution · RA 6975 (PNP Act, 1990) · RA 8551 (PNP Reform Act, 1998) · RA 9344 (Juvenile Justice, 2006) · RA 10175 (Cybercrime, 2012) · RA 11479 (Anti-Terrorism, 2020)</p>
      </div>
      <ul class="space-y-1 list-disc list-inside">
        <li>Supreme Court regained full independence and judicial review powers.</li>
        <li>Commission on Human Rights established as a constitutional body.</li>
        <li>Bureau of Jail Management and Penology (BJMP) created (1991) to manage city/municipal jails.</li>
        <li>Ongoing modernization of the PNP, BFP, NBI, and court administration under the Judiciary Development Fund.</li>
        <li>E-court and case management system modernization projects implemented in the 2010s–2020s.</li>
      </ul>`,
    },
];

if (typeof module !== 'undefined') module.exports = historyData;
