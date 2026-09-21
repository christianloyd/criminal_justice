const contemporaryData = [
    {
        id: 'rational-choice',
        icon: 'fa-scale-balanced',
        family: 'contemporary',
        badge: 'Contemporary',
        title: 'Rational Choice Theory',
        teaser: 'A modern revival of classical thinking — crime is a decision based on calculating risks, effort, and rewards at a specific moment.',
        body: `
      <p><strong class="text-parchment">Rational Choice Theory (RCT)</strong> emerged in the 1980s (Cornish & Clarke) as a neo-classical revival. It shifts focus away from the "root causes" of crime (poverty, biology) and focuses entirely on the decision-making process of the offender at the moment the crime is committed.</p>
      <div class="highlight-box mt-3 mb-3">
        <p class="text-xs font-semibold" style="color:var(--contemporary);text-transform:uppercase;letter-spacing:0.08em;margin-bottom:0.25rem;">Core Assumption</p>
        <p>Offenders are rational decision-makers who evaluate the risk of apprehension, the effort required, and the expected reward before committing an act. Crime is purposive behavior designed to meet the offender's commonplace needs.</p>
      </div>
      <p class="font-semibold text-parchment mt-3 mb-1">Key Concepts</p>
      <ul class="list-disc list-inside space-y-1">
        <li><strong>Bounded rationality</strong> — offenders make rational choices, but their rationality is limited by time, cognitive ability, and available information (they don't always calculate perfectly).</li>
        <li><strong>Choice structuring properties</strong> — the specific features of a crime (e.g., stealing a car vs. burglary) that make it attractive to a particular offender.</li>
        <li><strong>Situational Crime Prevention (SCP)</strong> — policies aimed at altering the environment to make crime less rewarding and more risky (e.g., adding CCTV, steering locks).</li>
      </ul>
      <p class="font-semibold text-parchment mt-3 mb-1">Criticisms</p>
      <ul class="list-disc list-inside space-y-1">
        <li>Struggles to explain emotionally driven, impulsive, or violent crimes (crimes of passion).</li>
        <li>Overstates the degree of conscious calculation involved in routine offending.</li>
        <li>Ignores structural factors like poverty that limit choices in the first place.</li>
      </ul>`
    },
    {
        id: 'routine-activity',
        icon: 'fa-clock',
        family: 'contemporary',
        badge: 'Contemporary',
        title: 'Routine Activity Theory',
        teaser: 'Crime occurs when three elements converge in time and space: a motivated offender, a suitable target, and the absence of a capable guardian.',
        body: `
      <p><strong class="text-parchment">Routine Activity Theory</strong> (Cohen & Felson, 1979) was developed to explain why crime rates rose after WWII even as poverty decreased. They argued that changes in daily routines (more women working, more portable electronics) created more opportunities for crime.</p>
      <div class="highlight-box mt-3 mb-3">
        <p class="text-xs font-semibold" style="color:var(--contemporary);text-transform:uppercase;letter-spacing:0.08em;margin-bottom:0.25rem;">Core Assumption</p>
        <p>Crime is an event that requires three minimal elements to converge in space and time. If any one of these elements is removed, the crime cannot occur.</p>
      </div>
      <p class="font-semibold text-parchment mt-3 mb-1">The Crime Triangle</p>
      <ul class="list-disc list-inside space-y-1">
        <li><strong>Motivated offender</strong> — someone willing to commit a crime (the theory takes motivation as a given and doesn't try to explain <em>why</em> they are motivated).</li>
        <li><strong>Suitable target</strong> — an object (VIVA: Value, Inertia, Visibility, Access) or a vulnerable person.</li>
        <li><strong>Absence of a capable guardian</strong> — lack of police, security, or ordinary citizens capable of intervening or witnessing.</li>
      </ul>
      <p class="font-semibold text-parchment mt-3 mb-1">Real-World Application</p>
      <p>Target hardening (deadbolts, alarms, password protection against cybercrime) and environmental design (better lighting, natural surveillance) are direct applications. It asks "how do we prevent the event?" rather than "how do we cure the offender?"</p>
      <p class="font-semibold text-parchment mt-3 mb-1">Criticisms</p>
      <ul class="list-disc list-inside space-y-1">
        <li>Ignores the root causes of offender motivation.</li>
        <li>Can lead to victim-blaming ("why were you walking there at night?").</li>
        <li>Less effective at explaining crimes that do not require physical convergence (e.g., modern cybercrime).</li>
      </ul>`
    },
    {
        id: 'general-strain',
        icon: 'fa-bolt',
        family: 'contemporary',
        badge: 'Contemporary',
        title: 'General Strain Theory',
        teaser: 'Agnew broadened strain theory beyond blocked economic goals to include all sources of negative emotion and stress that can trigger offending.',
        body: `
      <p><strong class="text-parchment">General Strain Theory (GST)</strong> was proposed by <strong class="text-parchment">Robert Agnew</strong> (1992) to address the limitations of Merton's classic strain theory, which focused too heavily on lower-class economic failure. Agnew argued that strain is fundamentally about negative relationships and emotions.</p>
      <div class="highlight-box mt-3 mb-3">
        <p class="text-xs font-semibold" style="color:var(--contemporary);text-transform:uppercase;letter-spacing:0.08em;margin-bottom:0.25rem;">Core Assumption</p>
        <p>When individuals experience negative stress (strain), it generates negative emotions like anger and frustration. If they lack healthy coping mechanisms, they may use crime to escape the strain, seek revenge, or manage the emotion (e.g., drug use).</p>
      </div>
      <p class="font-semibold text-parchment mt-3 mb-1">Three Sources of Strain</p>
      <ul class="list-disc list-inside space-y-1">
        <li><strong>Failure to achieve positively valued goals</strong> — (similar to Merton) failing to get good grades, a job, or wealth.</li>
        <li><strong>Removal of positively valued stimuli</strong> — loss of a loved one, losing a job, or parents divorcing.</li>
        <li><strong>Presentation of negative stimuli</strong> — experiencing child abuse, bullying, or living in a high-crime neighborhood.</li>
      </ul>
      <p class="font-semibold text-parchment mt-3 mb-1">The Role of Anger</p>
      <p>Strain alone does not cause crime. Strain produces negative affect (especially anger). Crime is a coping mechanism for that anger. Those with high self-esteem, strong social support, and good problem-solving skills will cope non-criminally.</p>
      <p class="font-semibold text-parchment mt-3 mb-1">Criticisms</p>
      <ul class="list-disc list-inside space-y-1">
        <li>Extremely broad — almost any negative life event can be classified as a strain.</li>
        <li>Does not fully explain why one strained individual commits violence while another turns to drugs (retreatism).</li>
      </ul>`
    },
    {
        id: 'life-course',
        icon: 'fa-chart-area',
        family: 'contemporary',
        badge: 'Contemporary',
        title: 'Life-Course / Developmental Theory',
        teaser: 'Criminal behavior changes over the lifespan. "Turning points" like marriage or a stable job can cause even chronic offenders to desist from crime.',
        body: `
      <p><strong class="text-parchment">Life-Course Theories</strong> examine offending patterns over a person's entire lifetime rather than focusing on a single snapshot. Two major frameworks dominate this approach: <strong class="text-parchment">Sampson & Laub's</strong> Age-Graded Theory, and <strong class="text-parchment">Terrie Moffitt's</strong> Dual Taxonomy.</p>
      <div class="highlight-box mt-3 mb-3">
        <p class="text-xs font-semibold" style="color:var(--contemporary);text-transform:uppercase;letter-spacing:0.08em;margin-bottom:0.25rem;">Core Assumption</p>
        <p>Criminality is dynamic, not static. While early childhood experiences set trajectories, events occurring later in life can redirect paths toward or away from crime.</p>
      </div>
      <p class="font-semibold text-parchment mt-3 mb-1">Key Concepts</p>
      <ul class="list-disc list-inside space-y-1">
        <li><strong>Trajectories & Transitions</strong> (Sampson & Laub) — long-term pathways in life vs. sudden life events (graduating, joining military).</li>
        <li><strong>Turning points</strong> — transitions that create strong social bonds (e.g., a good marriage, stable employment) that cause chronic offenders to desist (stop offending).</li>
        <li><strong>Adolescence-Limited Offenders</strong> (Moffitt) — the majority of teens; they offend due to the maturity gap (biological adults but socially restricted) and peer influence, but "age out" by their 20s.</li>
        <li><strong>Life-Course-Persistent Offenders</strong> (Moffitt) — a small group who start offending early due to neurodevelopmental deficits (hyperactivity, low verbal skills) interacting with poor parenting, and continue offending throughout life.</li>
      </ul>
      <p class="font-semibold text-parchment mt-3 mb-1">Criticisms</p>
      <ul class="list-disc list-inside space-y-1">
        <li>Requires expensive, decades-long longitudinal studies to verify.</li>
        <li>Critics (like Gottfredson & Hirschi) argue that "turning points" are illusions — people self-select into good jobs/marriages <em>because</em> their criminality has already declined.</li>
      </ul>`
    },
    {
        id: 'integrated-theory',
        icon: 'fa-diagram-project',
        family: 'contemporary',
        badge: 'Contemporary',
        title: 'Integrated Theories',
        teaser: 'Combining insights from biology, psychology, and sociology to form a more complete picture of why crime occurs.',
        body: `
      <p><strong class="text-parchment">Integrated Theories</strong> emerged in response to the realization that no single theory accounts for all crime. Rather than viewing theories as competitors (e.g., biology vs. sociology), integrationists attempt to merge concepts from different schools to create a holistic model.</p>
      <div class="highlight-box mt-3 mb-3">
        <p class="text-xs font-semibold" style="color:var(--contemporary);text-transform:uppercase;letter-spacing:0.08em;margin-bottom:0.25rem;">Core Assumption</p>
        <p>Crime is a complex phenomenon with multiple interacting causes. Genetic/biological vulnerabilities interact with psychological traits, which are triggered or suppressed by social structures and environments.</p>
      </div>
      <p class="font-semibold text-parchment mt-3 mb-1">Key Concepts & Examples</p>
      <ul class="list-disc list-inside space-y-1">
        <li><strong>Biosocial Criminology</strong> — integrates genetics/neurobiology with environmental factors (e.g., a gene linked to aggression is only expressed if the child grows up in an abusive environment).</li>
        <li><strong>Interactional Theory (Thornberry)</strong> — integrates social control and social learning theories; weak social bonds lead to associating with delinquent peers, which further weakens social bonds in a reciprocal loop.</li>
        <li><strong>End-to-end integration</strong> — linking theories sequentially (e.g., Structural Poverty → leads to → Weak Family Bonds (Control Theory) → leads to → Delinquent Peers (Learning Theory) → Crime).</li>
      </ul>
      <p class="font-semibold text-parchment mt-3 mb-1">Criticisms</p>
      <ul class="list-disc list-inside space-y-1">
        <li>"Theoretical mush" — combining theories with fundamentally opposing assumptions (e.g., free will vs. determinism) creates logical inconsistencies.</li>
        <li>Models become too complex and unwieldy to test empirically.</li>
      </ul>`
    },
];

if (typeof module !== 'undefined') module.exports = contemporaryData;
