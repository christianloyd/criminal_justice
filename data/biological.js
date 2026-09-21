const biologicalData = [
    {
        id: 'atavism',
        icon: 'fa-dna',
        family: 'biological',
        badge: 'Biological / Positivist',
        title: "Lombroso's Atavism",
        teaser: 'The "born criminal" — Lombroso argued that certain individuals are biological throwbacks to a more primitive human type, identifiable by physical stigmata.',
        body: `
      <p><strong class="text-parchment">Cesare Lombroso</strong> (1835–1909), an Italian physician and army doctor, is considered the "father of scientific criminology." In his seminal work <em>L'Uomo Delinquente</em> (The Criminal Man, 1876), he proposed that criminals were biological throwbacks — <em>atavists</em> — to an earlier, more primitive stage of human evolution.</p>
      <div class="highlight-box mt-3 mb-3">
        <p class="text-xs font-semibold" style="color:var(--biological);text-transform:uppercase;letter-spacing:0.08em;margin-bottom:0.25rem;">Core Assumption</p>
        <p>Some individuals are born criminals, distinguished from law-abiding citizens by measurable physical anomalies (<em>stigmata</em>) such as large jaws, high cheekbones, insensitivity to pain, and abnormal skull shapes.</p>
      </div>
      <p class="font-semibold text-parchment mt-3 mb-1">Key Concepts</p>
      <ul class="list-disc list-inside space-y-1">
        <li><strong>Atavism</strong> — reversion to primitive evolutionary traits.</li>
        <li><strong>Physical stigmata</strong> — measurable bodily characteristics supposedly linked to criminality.</li>
        <li><strong>Born criminal</strong> — a class of individuals predetermined to offend by biology.</li>
        <li><strong>Positivism</strong> — Lombroso applied scientific measurement to the study of crime, founding the Positivist School.</li>
      </ul>
      <p class="font-semibold text-parchment mt-3 mb-1">Historical Significance</p>
      <p>Despite being thoroughly discredited, Lombroso shifted criminology from purely moral/philosophical discussions of free will to empirical scientific investigation of offenders. He is the founding figure of the Positivist School.</p>
      <p class="font-semibold text-parchment mt-3 mb-1">Criticisms</p>
      <ul class="list-disc list-inside space-y-1">
        <li>Charles Goring's 1913 study found no significant physical differences between prisoners and non-prisoners.</li>
        <li>Methodologically flawed — lacked proper control groups.</li>
        <li>Rooted in 19th-century racial science — deeply problematic by modern standards.</li>
        <li>Deterministic — denies free will and ignores social causes of crime entirely.</li>
        <li>Stigmata he identified are found equally in non-criminal populations.</li>
      </ul>`
    },
    {
        id: 'body-type',
        icon: 'fa-person',
        family: 'biological',
        badge: 'Biological / Positivist',
        title: 'Constitutional / Body Type Theory',
        teaser: "William Sheldon's somatotype theory linked body build (endomorph, mesomorph, ectomorph) to personality and criminal tendency.",
        body: `
      <p><strong class="text-parchment">William H. Sheldon</strong> (1898–1977), an American psychologist, proposed that human body types (<em>somatotypes</em>) are associated with distinct temperaments and, by extension, behavioral tendencies including criminality.</p>
      <div class="highlight-box mt-3 mb-3">
        <p class="text-xs font-semibold" style="color:var(--biological);text-transform:uppercase;letter-spacing:0.08em;margin-bottom:0.25rem;">Core Assumption</p>
        <p>A person's physique reflects their underlying biological constitution, which shapes temperament and, indirectly, the likelihood of criminal behavior. Mesomorphs (muscular builds) are over-represented in delinquent populations.</p>
      </div>
      <p class="font-semibold text-parchment mt-3 mb-1">Key Concepts — The Three Somatotypes</p>
      <ul class="list-disc list-inside space-y-1">
        <li><strong>Endomorph</strong> — soft, round physique; associated with sociable, relaxed temperament.</li>
        <li><strong>Mesomorph</strong> — muscular, athletic build; associated with assertive, aggressive, adventurous temperament — most linked to delinquency in Sheldon's studies.</li>
        <li><strong>Ectomorph</strong> — thin, fragile build; associated with introverted, restrained temperament.</li>
      </ul>
      <p class="font-semibold text-parchment mt-3 mb-1">Real-World Application</p>
      <p>Sheldon studied photographs of delinquent youth and found a higher proportion of mesomorphic builds. Glueck & Glueck (1950) reported similar findings comparing delinquent and non-delinquent boys. These findings influenced some early classification and rehabilitation thinking.</p>
      <p class="font-semibold text-parchment mt-3 mb-1">Criticisms</p>
      <ul class="list-disc list-inside space-y-1">
        <li>Correlation, not causation — muscular builds may attract certain social roles (sports, military, gangs) rather than directly causing crime.</li>
        <li>Sampling bias — studied institutionalized youth rather than general populations.</li>
        <li>Does not explain why most mesomorphs never commit crimes.</li>
        <li>Largely abandoned by modern criminology due to weak empirical support.</li>
      </ul>`
    },
    {
        id: 'genetic-twin',
        icon: 'fa-microscope',
        family: 'biological',
        badge: 'Biological / Positivist',
        title: 'Genetic & Twin/Adoption Studies',
        teaser: 'Research on twins and adoptees explored whether criminal tendencies are heritable, with the XYY chromosome theory among the most debated claims.',
        body: `
      <p><strong class="text-parchment">Genetic theories</strong> of criminality examine whether criminal behavior has a heritable component, using twin studies and adoption studies as natural experiments to separate genetic from environmental influences.</p>
      <div class="highlight-box mt-3 mb-3">
        <p class="text-xs font-semibold" style="color:var(--biological);text-transform:uppercase;letter-spacing:0.08em;margin-bottom:0.25rem;">Core Assumption</p>
        <p>Genetic inheritance contributes to traits (impulsivity, low arousal, aggression) that increase the probability of criminal behavior. This does not mean crime is fully determined by genes — environment still matters significantly.</p>
      </div>
      <p class="font-semibold text-parchment mt-3 mb-1">Key Research Methods & Findings</p>
      <ul class="list-disc list-inside space-y-1">
        <li><strong>Twin studies</strong> — compare concordance rates for criminality between identical (MZ) and fraternal (DZ) twins. MZ twins consistently show higher concordance, suggesting genetic influences.</li>
        <li><strong>Adoption studies</strong> — when adopted children show criminal behavior more similar to their biological parents than their adoptive ones, genetic factors are implicated (Mednick et al., 1984).</li>
        <li><strong>XYY Chromosome Theory</strong> — men with an extra Y chromosome were hypothesized to be more aggressive and prone to crime. Initial studies in maximum-security facilities showed XYY over-representation, but subsequent research found XYY men are not significantly more violent than XY men. Largely debunked as deterministic.</li>
      </ul>
      <p class="font-semibold text-parchment mt-3 mb-1">Criticisms</p>
      <ul class="list-disc list-inside space-y-1">
        <li>Genes do not directly "cause" crime — they influence traits that interact with environments.</li>
        <li>Twin studies cannot fully separate genetic from shared-environment effects.</li>
        <li>XYY research suffered from biased sampling.</li>
        <li>Raises ethical concerns about genetic determinism and stigma.</li>
      </ul>`
    },
    {
        id: 'neurochemical',
        icon: 'fa-brain',
        family: 'biological',
        badge: 'Biological / Trait',
        title: 'Neurochemical & Brain-Based Theories',
        teaser: 'Brain structure and neurochemical imbalances — particularly serotonin and dopamine abnormalities — may predispose individuals to aggressive or impulsive behavior.',
        body: `
      <p><strong class="text-parchment">Neurochemical and brain-based theories</strong> represent the most modern branch of biological criminology. Advances in neuroscience have identified brain structures and chemical systems whose dysfunction correlates with impulsivity, aggression, and reduced empathy — traits associated with repeated offending.</p>
      <div class="highlight-box mt-3 mb-3">
        <p class="text-xs font-semibold" style="color:var(--biological);text-transform:uppercase;letter-spacing:0.08em;margin-bottom:0.25rem;">Core Assumption</p>
        <p>Biological factors — particularly frontal lobe dysfunction, neurotransmitter imbalances, and early brain injury — can reduce an individual's capacity for impulse control, empathy, and long-term decision-making, increasing criminal risk.</p>
      </div>
      <p class="font-semibold text-parchment mt-3 mb-1">Key Concepts</p>
      <ul class="list-disc list-inside space-y-1">
        <li><strong>Frontal lobe dysfunction</strong> — the prefrontal cortex regulates impulse control and decision-making; damage or underdevelopment here is associated with impulsive aggression.</li>
        <li><strong>Serotonin</strong> — low serotonin levels linked to impulsive aggression, irritability, and poor behavioral inhibition.</li>
        <li><strong>Dopamine</strong> — dysregulation associated with risk-taking, reward-seeking, and addiction.</li>
        <li><strong>Testosterone</strong> — higher levels associated with dominant and aggressive behaviors, though causation is complex and bidirectional.</li>
        <li><strong>Lead exposure</strong> — environmental neurotoxins (e.g., lead) during childhood development impair brain development and have been linked to elevated violence rates in affected communities.</li>
      </ul>
      <p class="font-semibold text-parchment mt-3 mb-1">Criticisms</p>
      <ul class="list-disc list-inside space-y-1">
        <li>Biological predispositions are probabilistic, not deterministic — most people with these traits do not commit crimes.</li>
        <li>Brain abnormalities may result from environmental factors (trauma, poverty, drugs) rather than cause crime directly.</li>
        <li>Risk of biological reductionism — ignoring social structures, poverty, and inequality.</li>
        <li>Ethical implications for criminal responsibility if "born with" a predisposition.</li>
      </ul>`
    },
];

if (typeof module !== 'undefined') module.exports = biologicalData;
