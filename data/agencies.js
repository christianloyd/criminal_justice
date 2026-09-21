const agenciesData = {
    agencies: [
        {
            id: 'pnp',
            icon: 'fa-shield-halved',
            title: 'Philippine National Police (PNP)',
            tag: 'Law Enforcement Agency',
            teaser: 'The primary civilian law enforcement agency responsible for internal security, law enforcement, and public safety.',
            body: `
        <p>The <strong class="text-parchment">Philippine National Police (PNP)</strong> was established under RA 6975 (1990), replacing the former Philippine Constabulary/Integrated National Police (PC/INP). It is a civilian agency under the Department of the Interior and Local Government (DILG), supervised by the National Police Commission (NAPOLCOM).</p>
        <div class="bg-white/5 rounded-lg p-4 border-l-4 border-gold mb-4">
          <p class="text-xs font-semibold text-gold uppercase tracking-wider mb-1">Legal Basis</p>
          <p>RA 6975 (DILG Act, 1990) · RA 8551 (PNP Reform & Reorganization Act, 1998) · RA 9708 (2009 Amendments)</p>
        </div>
        <p class="font-semibold text-parchment mb-2">Organizational Structure</p>
        <ul class="space-y-1 list-disc list-inside mb-4">
          <li><strong>NAPOLCOM</strong> → oversight and administration</li>
          <li><strong>PNP National Headquarters</strong> (Camp Crame, Quezon City)</li>
          <li><strong>Regional Police Offices (RPOs)</strong> — 17 regions</li>
          <li><strong>Provincial Police Offices (PPOs)</strong></li>
          <li><strong>City/Municipal Police Stations</strong></li>
          <li><strong>Barangay-level Police Posts</strong></li>
        </ul>
        <p class="font-semibold text-parchment mb-2">Key Specialized Units</p>
        <ul class="space-y-1 list-disc list-inside">
          <li><strong>CIDG</strong> — Criminal Investigation and Detection Group</li>
          <li><strong>HPG</strong> — Highway Patrol Group</li>
          <li><strong>WCPC</strong> — Women and Children Protection Center</li>
          <li><strong>Anti-Cybercrime Group (ACG)</strong></li>
          <li><strong>Maritime Group</strong></li>
          <li><strong>Aviation Security Group</strong></li>
          <li><strong>TMG</strong> — Traffic Management Group</li>
          <li><strong>SAF</strong> — Special Action Force (high-risk operations)</li>
        </ul>`,
        },
        {
            id: 'nbi',
            icon: 'fa-magnifying-glass',
            title: 'National Bureau of Investigation (NBI)',
            tag: 'Law Enforcement Agency',
            teaser: 'The premier investigative agency under the DOJ, handling complex national and high-profile cases.',
            body: `
        <p>The <strong class="text-parchment">National Bureau of Investigation (NBI)</strong> is the Philippines' equivalent of an investigative bureau — focused on cases that require national-level expertise and resources, similar in function to the US FBI. It operates under the Department of Justice (DOJ).</p>
        <div class="bg-white/5 rounded-lg p-4 border-l-4 border-gold mb-4">
          <p class="text-xs font-semibold text-gold uppercase tracking-wider mb-1">Legal Basis</p>
          <p>RA 157 (NBI Act, 1947) as amended · Under the DOJ organizational structure</p>
        </div>
        <p class="font-semibold text-parchment mb-2">Jurisdiction & Functions</p>
        <ul class="space-y-1 list-disc list-inside">
          <li>Investigates crimes of a complex, national, or transnational character.</li>
          <li>Conducts forensic examinations (fingerprints, questioned documents, DNA).</li>
          <li>Provides technical assistance to local law enforcement.</li>
          <li>Screens and clears persons applying for government positions (NBI Clearance).</li>
          <li>Conducts anti-trafficking, cybercrime, and anti-corruption investigations.</li>
          <li>Serves as the Philippine INTERPOL liaison for international cases.</li>
        </ul>`,
        },
        {
            id: 'bfp',
            icon: 'fa-fire-flame-curved',
            title: 'Bureau of Fire Protection (BFP)',
            tag: 'Law Enforcement Agency',
            teaser: 'Responsible for fire prevention, suppression, investigation of arson, and fire safety enforcement.',
            body: `
        <p>The <strong class="text-parchment">Bureau of Fire Protection (BFP)</strong> is a uniformed civilian agency under the DILG, created by RA 6975. It has primary jurisdiction over matters relating to fire protection — including suppression, prevention, investigation, and fire safety enforcement.</p>
        <div class="bg-white/5 rounded-lg p-4 border-l-4 border-gold mb-4">
          <p class="text-xs font-semibold text-gold uppercase tracking-wider mb-1">Legal Basis</p>
          <p>RA 6975 (1990) · RA 9514 (Revised Fire Code of the Philippines, 2008)</p>
        </div>
        <ul class="space-y-1 list-disc list-inside">
          <li>Arson investigation — the BFP has original investigative jurisdiction over fire incidents.</li>
          <li>Fire safety inspection and issuance of Fire Safety Evaluation Clearance (FSEC) for buildings.</li>
          <li>Fire Safety Inspection Certificate (FSIC) required annually for businesses.</li>
          <li>Operates fire stations in every city and municipality in the Philippines.</li>
        </ul>`,
        },
        {
            id: 'coast-guard',
            icon: 'fa-anchor',
            title: 'Philippine Coast Guard (PCG)',
            tag: 'Law Enforcement Agency',
            teaser: 'Enforces maritime laws, conducts search and rescue operations, and ensures maritime safety.',
            body: `
        <p>The <strong class="text-parchment">Philippine Coast Guard (PCG)</strong> is a uniformed service under the Department of Transportation (DOTr). It is distinct from the Philippine Navy (military) and functions as a civilian maritime law enforcement and safety agency.</p>
        <div class="bg-white/5 rounded-lg p-4 border-l-4 border-gold mb-4">
          <p class="text-xs font-semibold text-gold uppercase tracking-wider mb-1">Legal Basis</p>
          <p>Presidential Decree 601 (1974) · RA 9993 (Philippine Coast Guard Law, 2010)</p>
        </div>
        <ul class="space-y-1 list-disc list-inside">
          <li>Enforces maritime, immigration, fisheries, environmental, and customs laws at sea.</li>
          <li>Conducts search and rescue (SAR) operations in Philippine waters.</li>
          <li>Investigates maritime accidents, collisions, and sinkings.</li>
          <li>Counters maritime crimes: piracy, illegal fishing, drug smuggling by sea.</li>
          <li>Enforces environmental regulations — oil spill response.</li>
        </ul>`,
        },
    ],
    functions: [
        {
            id: 'crime-prevention',
            icon: 'fa-shield-halved',
            title: 'Crime Prevention',
            tag: 'Law Enforcement Function',
            teaser: 'Proactive measures to deter criminal activity before it occurs.',
            body: `
        <p><strong class="text-parchment">Crime Prevention</strong> encompasses all measures taken by law enforcement agencies to reduce the opportunity and motivation for criminal acts. It is the first line of defense in the criminal justice system.</p>
        <ul class="space-y-1 list-disc list-inside mt-3">
          <li>Community policing programs — building relationships between police and communities.</li>
          <li>Patrol operations — visible police presence as a deterrent.</li>
          <li>Information campaigns (drug awareness, cybercrime prevention).</li>
          <li>Barangay-level anti-crime committees and tanod coordination.</li>
          <li>School-based crime prevention programs (DARE-equivalent).</li>
        </ul>`,
        },
        {
            id: 'investigation',
            icon: 'fa-magnifying-glass',
            title: 'Criminal Investigation',
            tag: 'Law Enforcement Function',
            teaser: 'Gathering evidence and identifying perpetrators after a crime is committed.',
            body: `
        <p><strong class="text-parchment">Criminal Investigation</strong> is the systematic process of collecting and preserving evidence, identifying suspects, and building a case for prosecution. Investigators must strictly follow the chain of custody rules to ensure evidence admissibility.</p>
        <ul class="space-y-1 list-disc list-inside mt-3">
          <li>Scene of the crime operations (SOCO) — securing and processing crime scenes.</li>
          <li>Interview of witnesses and suspects (with Miranda rights advisory for custodial investigation).</li>
          <li>Forensic analysis — fingerprints, DNA, digital forensics, ballistics.</li>
          <li>Surveillance and intelligence gathering.</li>
          <li>Inquest proceedings — after warrantless arrest, brought to prosecutor within 36 hours (minor) or 12 hours (serious).</li>
        </ul>`,
        },
        {
            id: 'apprehension',
            icon: 'fa-handcuffs',
            title: 'Apprehension / Arrest',
            tag: 'Law Enforcement Function',
            teaser: 'The legal process of taking a person into custody for a crime.',
            body: `
        <p><strong class="text-parchment">Apprehension</strong> (arrest) is the physical taking of a person into custody to answer for an offense. Philippine law strictly governs arrest to protect constitutional rights. Rule 113 of the Rules of Court governs arrest.</p>
        <div class="bg-white/5 rounded-lg p-4 border-l-4 border-gold mb-3">
          <p class="text-xs font-semibold text-gold uppercase tracking-wider mb-1">Lawful Arrest Without Warrant (Rule 113, Sec. 5)</p>
          <p>1. <em>In flagrante delicto</em> — the person is caught committing, attempting, or having just committed an offense. 2. <em>Hot pursuit</em> — an offense has just been committed and the officer has personal knowledge of facts indicating the suspect committed it. 3. <em>Escaped prisoner</em> — the person has escaped from a sentence or temporary detention.</p>
        </div>
        <ul class="space-y-1 list-disc list-inside">
          <li>Arrests must be made with reasonable force — excessive force is unlawful.</li>
          <li>The person arrested must be informed of the cause of arrest and their rights.</li>
          <li>Failure to follow arrest rules can result in illegal detention charges against the officer.</li>
        </ul>`,
        },
        {
            id: 'evidence-handling',
            icon: 'fa-box-archive',
            title: 'Evidence Handling',
            tag: 'Law Enforcement Function',
            teaser: 'The proper collection, preservation, and documentation of evidence for court proceedings.',
            body: `
        <p><strong class="text-parchment">Evidence Handling</strong> (chain of custody) is critical because improperly handled evidence may be declared inadmissible, resulting in acquittal even if the accused is factually guilty. Philippine courts strictly require an unbroken chain of custody, especially in drug cases (RA 9165, Sec. 21).</p>
        <ul class="space-y-1 list-disc list-inside mt-3">
          <li>Each person who takes possession of evidence must be documented (markings, inventory).</li>
          <li>Drug evidence must be inventoried and photographed at the scene with required witnesses (media, DOJ rep, elected official).</li>
          <li>Digital evidence must be acquired forensically (bit-by-bit copy) to avoid tampering allegations.</li>
          <li>Custody receipts issued at each transfer of evidence.</li>
          <li>Crime laboratory maintains secure storage for physical evidence until trial.</li>
        </ul>`,
        },
        {
            id: 'community-relations',
            icon: 'fa-people-group',
            title: 'Community Relations',
            tag: 'Law Enforcement Function',
            teaser: 'Building trust and cooperation between law enforcement agencies and the communities they serve.',
            body: `
        <p><strong class="text-parchment">Community Relations</strong> (historically called "civic action") is now formalized as community policing. The PNP's Community Affairs and Development Group (CADG) oversees national-level community engagement programs.</p>
        <ul class="space-y-1 list-disc list-inside mt-3">
          <li>Pulis sa Barangay — dedicated officer per barangay to build community rapport.</li>
          <li>Oplan Serbisyo sa Barangay — regular law enforcement service caravans.</li>
          <li>Partnership with BADAC (Barangay Anti-Drug Abuse Council).</li>
          <li>Assistance to firefighting, disaster response, and medical missions.</li>
          <li>Cooperation with LGUs on local ordinance enforcement.</li>
        </ul>`,
        },
    ],
};

if (typeof module !== 'undefined') module.exports = agenciesData;
