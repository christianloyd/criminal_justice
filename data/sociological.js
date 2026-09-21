const sociologicalData = {
    structure: [
        {
            id: 'social-disorganization',
            icon: 'fa-city',
            family: 'sociological',
            badge: 'Social Structure',
            title: 'Social Disorganization Theory',
            teaser: 'Crime clusters in neighborhoods with weak social institutions, high turnover, and poverty — regardless of who lives there.',
            body: `
        <p><strong class="text-parchment">Social Disorganization Theory</strong> was developed by <strong class="text-parchment">Clifford Shaw & Henry McKay</strong> (1942) at the University of Chicago. Drawing on the Chicago School's <em>concentric zone model</em> (Ernest Burgess), they mapped juvenile delinquency rates across Chicago's neighborhoods and found that crime was concentrated in specific zones — particularly the "zone of transition" near the city center — regardless of which ethnic group lived there over time.</p>
        <div class="highlight-box mt-3 mb-3">
          <p class="text-xs font-semibold" style="color:var(--sociological);text-transform:uppercase;letter-spacing:0.08em;margin-bottom:0.25rem;">Core Assumption</p>
          <p>Crime is a product of <em>place</em>, not people. Socially disorganized communities — characterized by poverty, residential instability, and ethnic heterogeneity — lack the informal social controls needed to regulate behavior.</p>
        </div>
        <p class="font-semibold text-parchment mt-3 mb-1">Key Concepts</p>
        <ul class="list-disc list-inside space-y-1">
          <li><strong>Concentric zone model</strong> — city expands in rings; the inner zones near industry show the most social instability and highest crime.</li>
          <li><strong>Zone of transition</strong> — high population turnover, deteriorating housing, mixed land use; historically the highest-crime zone.</li>
          <li><strong>Three characteristics of disorganized neighborhoods:</strong> poverty, residential instability, and ethnic heterogeneity.</li>
          <li><strong>Collective efficacy</strong> (Robert Sampson, 1997) — the modern extension: crime rates reflect a community's willingness to intervene on behalf of the common good (social cohesion + willingness to act).</li>
        </ul>
        <p class="font-semibold text-parchment mt-3 mb-1">Real-World Application</p>
        <p>Community policing, neighborhood watch programs, urban renewal initiatives, and investments in schools and community centers in high-crime areas all draw from Social Disorganization logic: fix the community environment, reduce crime — regardless of individual residents.</p>
        <p class="font-semibold text-parchment mt-3 mb-1">Criticisms</p>
        <ul class="list-disc list-inside space-y-1">
          <li>Oversimplifies — does not explain why some disorganized neighborhoods have low crime (Kornhauser).</li>
          <li>Early versions relied on official crime data which reflects policing patterns, not true crime rates.</li>
          <li>Does not fully account for structural causes of neighborhood deterioration (racial discrimination, disinvestment).</li>
        </ul>`
        },
        {
            id: 'strain-anomie',
            icon: 'fa-chart-line',
            family: 'sociological',
            badge: 'Social Structure',
            title: 'Strain Theory (Anomie)',
            teaser: "Merton argued that crime results when society promotes universal success goals but denies many people legitimate means to achieve them.",
            body: `
        <p><strong class="text-parchment">Robert K. Merton</strong> (1910–2003) adapted the concept of <em>anomie</em> (normlessness) from Durkheim and applied it to the American social structure in his 1938 essay "Social Structure and Anomie." He argued that American culture places excessive emphasis on material success but provides unequal access to the legitimate means of achieving it.</p>
        <div class="highlight-box mt-3 mb-3">
          <p class="text-xs font-semibold" style="color:var(--sociological);text-transform:uppercase;letter-spacing:0.08em;margin-bottom:0.25rem;">Core Assumption</p>
          <p>Crime is a symptom of a disjunction between culturally approved goals (wealth, success) and legitimate institutionalized means (education, hard work) to achieve them — particularly for those in lower social strata.</p>
        </div>
        <p class="font-semibold text-parchment mt-3 mb-1">Merton's Five Modes of Adaptation</p>
        <ul class="list-disc list-inside space-y-1">
          <li><strong>Conformity</strong> — accepts both goals and legitimate means (the majority; non-deviant).</li>
          <li><strong>Innovation</strong> — accepts goals, rejects legitimate means; uses illegal means to achieve success (most common criminal mode).</li>
          <li><strong>Ritualism</strong> — abandons the goal, but rigidly follows the means (e.g., the bureaucrat who follows rules for their own sake).</li>
          <li><strong>Retreatism</strong> — rejects both goals and means; withdraws (e.g., chronic drug users, chronic homeless).</li>
          <li><strong>Rebellion</strong> — rejects current goals/means and substitutes new ones; seeks to change the social structure (e.g., revolutionary).</li>
        </ul>
        <p class="font-semibold text-parchment mt-3 mb-1">Real-World Application</p>
        <p>Social programs that expand legitimate opportunity — vocational training, access to higher education, poverty reduction — address strain by narrowing the gap between cultural goals and legitimate means.</p>
        <p class="font-semibold text-parchment mt-3 mb-1">Criticisms</p>
        <ul class="list-disc list-inside space-y-1">
          <li>Does not explain non-utilitarian crimes (vandalism, violence for respect) well.</li>
          <li>Assumes everyone shares the same "success goals" (culturally specific to American context).</li>
          <li>Does not explain middle-class crime or crimes of the powerful.</li>
        </ul>`
        },
        {
            id: 'subculture',
            icon: 'fa-users',
            family: 'sociological',
            badge: 'Social Structure',
            title: 'Subculture Theory',
            teaser: "Working-class youth who fail in middle-class institutions form delinquent subcultures with inverted values — crime becomes a source of status.",
            body: `
        <p><strong class="text-parchment">Subculture theories</strong> build on Merton's strain but focus on how groups of people collectively respond to blocked opportunity by developing alternative value systems. Two major versions dominate:</p>
        <p class="mt-2"><strong class="text-parchment">Albert Cohen</strong> (1955) — <em>Delinquent Boys</em>: Working-class boys experience "status frustration" when they cannot meet middle-class standards in schools (status degradation). They react by inverting middle-class values through "reaction formation," forming delinquent subcultures where theft, destruction, and violence earn status.</p>
        <p class="mt-2"><strong class="text-parchment">Cloward & Ohlin</strong> (1960) — <em>Differential Opportunity</em>: Youth experience both legitimate and illegitimate opportunity blockages. Three subculture types emerge based on what <em>illegal</em> opportunities are available locally:</p>
        <div class="highlight-box mt-3 mb-3">
          <p class="font-semibold" style="color:var(--parchment);">Cloward & Ohlin's Three Subcultures</p>
          <ul class="list-disc list-inside space-y-1 mt-1">
            <li><strong>Criminal subculture</strong> — stable criminal network exists (organized crime); youth can apprentice into property crime.</li>
            <li><strong>Conflict subculture</strong> — no stable criminal organization; violence and "rep" (reputation) dominate as the path to status.</li>
            <li><strong>Retreatist subculture</strong> — double failure (blocked both legitimately and illegitimately); withdrawal into drug use.</li>
          </ul>
        </div>
        <p class="font-semibold text-parchment mt-3 mb-1">Criticisms</p>
        <ul class="list-disc list-inside space-y-1">
          <li>Cohen's theory is hard to test — how do we measure "status frustration" or "reaction formation"?</li>
          <li>Assumes all delinquent youth share a coherent, unified value system — actual gang culture is more fluid.</li>
          <li>Primarily explains gang-related crime; poorly explains white-collar or individual crime.</li>
        </ul>`
        }
    ],
    process: [
        {
            id: 'differential-association',
            icon: 'fa-arrows-left-right',
            family: 'sociological',
            badge: 'Social Process',
            title: 'Differential Association Theory',
            teaser: "Sutherland proposed that criminal behavior is learned through intimate personal groups — it is taught, not inherited or invented.",
            body: `
        <p><strong class="text-parchment">Edwin H. Sutherland</strong> (1883–1950), in <em>Principles of Criminology</em> (1939, 1947), developed Differential Association Theory — one of the most influential and elegant theories in criminology. He rejected biological and individual psychological explanations in favor of a fully social learning model.</p>
        <div class="highlight-box mt-3 mb-3">
          <p class="text-xs font-semibold" style="color:var(--sociological);text-transform:uppercase;letter-spacing:0.08em;margin-bottom:0.25rem;">Core Assumption</p>
          <p>Criminal behavior is learned in the same way that any other behavior is learned — through communication with others in intimate personal groups. A person becomes criminal when definitions favorable to law violation exceed definitions unfavorable to law violation.</p>
        </div>
        <p class="font-semibold text-parchment mt-3 mb-1">Sutherland's 9 Propositions (summarized)</p>
        <ol class="list-decimal list-inside space-y-1">
          <li>Criminal behavior is <strong>learned</strong> — not inherited.</li>
          <li>It is learned in interaction with other persons in a process of communication.</li>
          <li>The principal part of the learning occurs within <strong>intimate personal groups</strong>.</li>
          <li>Learning criminal behavior includes <strong>techniques</strong> of committing crime and <strong>motives, drives, rationalizations, and attitudes</strong>.</li>
          <li>The direction of motives is learned from <strong>definitions</strong> of the legal code as favorable or unfavorable.</li>
          <li>A person becomes delinquent because of an excess of definitions <strong>favorable to violation</strong> over those unfavorable.</li>
          <li>Differential associations vary in <strong>frequency, duration, priority, and intensity</strong>.</li>
          <li>The process of learning criminal behavior involves all mechanisms of any other learning.</li>
          <li>Criminal behavior is an expression of <strong>general needs and values</strong> — but so is non-criminal behavior, so general needs don't explain crime alone.</li>
        </ol>
        <p class="font-semibold text-parchment mt-3 mb-1">Criticisms</p>
        <ul class="list-disc list-inside space-y-1">
          <li>Difficult to operationalize or measure "excess of definitions" empirically.</li>
          <li>Does not explain crimes committed by isolated individuals with no criminal peers.</li>
          <li>Does not address why some people resist criminal definitions even when surrounded by criminal peers.</li>
        </ul>`
        },
        {
            id: 'social-learning',
            icon: 'fa-chalkboard-user',
            family: 'sociological',
            badge: 'Social Process',
            title: 'Social Learning Theory',
            teaser: "Ronald Akers extended Sutherland's theory by adding behavioral reinforcement, modeling, and imitation as mechanisms of criminal learning.",
            body: `
        <p><strong class="text-parchment">Ronald Akers</strong> (1939–2019), building on Sutherland and Bandura's social learning psychology, developed <em>Social Learning Theory</em> of crime (1973, with Robert Burgess). He refined differential association by specifying the <em>mechanisms</em> through which criminal behavior is learned.</p>
        <div class="highlight-box mt-3 mb-3">
          <p class="text-xs font-semibold" style="color:var(--sociological);text-transform:uppercase;letter-spacing:0.08em;margin-bottom:0.25rem;">Core Assumption</p>
          <p>Criminal behavior is learned through four interlocking mechanisms: differential association, definitions (attitudes), differential reinforcement (rewards vs. punishment), and imitation. The relative balance of these determines whether someone offends.</p>
        </div>
        <p class="font-semibold text-parchment mt-3 mb-1">Key Concepts</p>
        <ul class="list-disc list-inside space-y-1">
          <li><strong>Differential association</strong> (from Sutherland) — exposure to pro-criminal vs. anti-criminal attitudes and peers.</li>
          <li><strong>Definitions</strong> — personal attitudes and rationalizations that define behavior as good, bad, or excusable.</li>
          <li><strong>Differential reinforcement</strong> — the balance of actual or anticipated rewards vs. costs of criminal behavior; social rewards (peer approval), material rewards, and avoidance of negative stimuli all reinforce crime.</li>
          <li><strong>Imitation / Modeling</strong> (from Bandura) — observing others' behavior and its consequences; media, peers, and family members serve as models.</li>
        </ul>
        <p class="font-semibold text-parchment mt-3 mb-1">Real-World Application</p>
        <p>Anti-gang programs targeting peer associations, media literacy programs addressing media modeling of violence, and group-based CBT programs that change criminal definitions all apply social learning principles.</p>
        <p class="font-semibold text-parchment mt-3 mb-1">Criticisms</p>
        <ul class="list-disc list-inside space-y-1">
          <li>Empirically supported but criticized for being too broad — can explain almost any behavior.</li>
          <li>Does not adequately address individual-level variation in who is influenced by criminal peers.</li>
        </ul>`
        },
        {
            id: 'social-bond',
            icon: 'fa-link',
            family: 'sociological',
            badge: 'Social Process',
            title: 'Social Control (Social Bond) Theory',
            teaser: "Hirschi asked not 'why do people commit crime?' but 'why do most people conform?' — the answer: four social bonds keep us in line.",
            body: `
        <p><strong class="text-parchment">Travis Hirschi</strong> (1935–2017), in <em>Causes of Delinquency</em> (1969), reframed the central criminological question. Rather than asking why people deviate, he assumed that offending is natural when controls are absent — the question is why people conform. His answer: four social bonds tie individuals to conventional society.</p>
        <div class="highlight-box mt-3 mb-3">
          <p class="text-xs font-semibold" style="color:var(--sociological);text-transform:uppercase;letter-spacing:0.08em;margin-bottom:0.25rem;">Core Assumption</p>
          <p>In the absence of strong bonds to conventional society, individuals are free to deviate. Crime results not from special motivation but from the <em>absence of social control</em>.</p>
        </div>
        <p class="font-semibold text-parchment mt-3 mb-1">The Four Social Bonds</p>
        <ul class="list-disc list-inside space-y-1">
          <li><strong>Attachment</strong> — emotional bonds to parents, teachers, and peers; caring about others' opinions makes deviance costly.</li>
          <li><strong>Commitment</strong> — investment in conventional activities (education, career, reputation); too much to lose by offending.</li>
          <li><strong>Involvement</strong> — time spent in conventional activities leaves less opportunity for delinquency ("idle hands").</li>
          <li><strong>Belief</strong> — acceptance of the legitimacy of laws and conventional moral norms.</li>
        </ul>
        <p class="font-semibold text-parchment mt-3 mb-1">Real-World Application</p>
        <p>School bonding programs, mentorship, extracurricular activities, and family strengthening initiatives all build social bonds. Hirschi's theory also underpins the importance of re-entry programs that help ex-offenders rebuild attachments and commitments.</p>
        <p class="font-semibold text-parchment mt-3 mb-1">Criticisms</p>
        <ul class="list-disc list-inside space-y-1">
          <li>Does not explain why bonds break down.</li>
          <li>Does not fully explain adult-onset crime in previously bonded individuals.</li>
          <li>Ignores the role of peer influence and criminal learning (Sutherland's critique is relevant here).</li>
        </ul>`
        },
        {
            id: 'labeling',
            icon: 'fa-tag',
            family: 'sociological',
            badge: 'Social Process',
            title: 'Labeling Theory',
            teaser: "Being officially labeled a 'criminal' can become a self-fulfilling prophecy — pushing individuals toward careers in crime.",
            body: `
        <p><strong class="text-parchment">Labeling Theory</strong> shifts attention from the act to the <em>societal reaction</em> to the act. Rooted in symbolic interactionism, it was developed notably by <strong class="text-parchment">Howard Becker</strong> (<em>Outsiders</em>, 1963) and <strong class="text-parchment">Edwin Lemert</strong> (<em>Social Pathology</em>, 1951).</p>
        <div class="highlight-box mt-3 mb-3">
          <p class="text-xs font-semibold" style="color:var(--sociological);text-transform:uppercase;letter-spacing:0.08em;margin-bottom:0.25rem;">Core Assumption</p>
          <p>Deviance is not an intrinsic quality of an act — it is created by the social reaction to the act. Once a person is officially labeled a criminal, they face social stigma that closes off legitimate opportunities and pushes them toward a criminal identity and career.</p>
        </div>
        <p class="font-semibold text-parchment mt-3 mb-1">Key Concepts</p>
        <ul class="list-disc list-inside space-y-1">
          <li><strong>Primary deviance</strong> (Lemert) — initial rule violation that has little effect on one's self-concept.</li>
          <li><strong>Secondary deviance</strong> — deviance that results from society's reaction to primary deviance; person internalizes the criminal label as their master status.</li>
          <li><strong>Moral entrepreneurs</strong> (Becker) — groups who define what is deviant and lobby for enforcement; deviance is a product of power, not objective harm.</li>
          <li><strong>Master status</strong> — the "criminal" label overrides all other social identities; employers, schools, and peers respond to the label, not the person.</li>
          <li><strong>Self-fulfilling prophecy</strong> — stigma → blocked opportunities → further offending → confirms the label.</li>
        </ul>
        <p class="font-semibold text-parchment mt-3 mb-1">Real-World Application</p>
        <p>Diversion programs, restorative justice, and expungement of criminal records all attempt to reduce the stigma of labeling. The argument against publishing juveniles' names in the media also draws from labeling theory.</p>
        <p class="font-semibold text-parchment mt-3 mb-1">Criticisms</p>
        <ul class="list-disc list-inside space-y-1">
          <li>Does not explain why people commit the initial (primary) deviant act.</li>
          <li>Overstates the deterministic power of labels; many labeled individuals do not go on to a criminal career.</li>
          <li>Ignores victim harm by focusing almost entirely on the offender's perspective.</li>
        </ul>`
        }
    ],
    conflict: [
        {
            id: 'conflict-theory',
            icon: 'fa-hand-fist',
            family: 'sociological',
            badge: 'Social Conflict',
            title: 'Conflict Theory',
            teaser: "Law and crime are not neutral — they reflect the interests of powerful groups who use the legal system to maintain their dominance over weaker ones.",
            body: `
        <p><strong class="text-parchment">Conflict Theory</strong> in criminology, developed by scholars like <strong class="text-parchment">George Vold</strong> (<em>Theoretical Criminology</em>, 1958) and drawing on the Marxist tradition, argues that criminal law is not a social consensus but a weapon used by dominant groups to protect their interests and criminalize the behavior of subordinate groups.</p>
        <div class="highlight-box mt-3 mb-3">
          <p class="text-xs font-semibold" style="color:var(--sociological);text-transform:uppercase;letter-spacing:0.08em;margin-bottom:0.25rem;">Core Assumption</p>
          <p>Society is characterized by fundamental conflict between groups with competing interests (economic, racial, political). Crime is defined and processed in ways that serve the interests of the powerful — not the community as a whole.</p>
        </div>
        <p class="font-semibold text-parchment mt-3 mb-1">Key Concepts</p>
        <ul class="list-disc list-inside space-y-1">
          <li><strong>Group conflict</strong> — crime is a by-product of groups competing over scarce resources and power; laws protect winners.</li>
          <li><strong>Criminalization</strong> — behaviors common among the poor are criminalized; harmful behaviors of the elite are decriminalized or handled administratively.</li>
          <li><strong>Ruling class interests</strong> — in Marxist versions (Austin Turk, William Chambliss), laws reflect the economic interests of the capitalist ruling class.</li>
          <li><strong>Selective enforcement</strong> — police, prosecutors, and courts apply law more punitively to lower classes and racial minorities.</li>
        </ul>
        <p class="font-semibold text-parchment mt-3 mb-1">Criticisms</p>
        <ul class="list-disc list-inside space-y-1">
          <li>Struggles to explain crimes like assault and homicide that victimize primarily lower-class and minority communities — not the powerful.</li>
          <li>Overly deterministic — many laws protect the poor (robbery, assault laws).</li>
          <li>Does not explain individual differences in offending within the same class position.</li>
        </ul>`
        },
        {
            id: 'radical-critical',
            icon: 'fa-fist-raised',
            family: 'sociological',
            badge: 'Social Conflict',
            title: 'Radical / Critical Criminology',
            teaser: "Capitalism's structural inequalities — not individual pathology — produce both crime and the biased systems that respond to it.",
            body: `
        <p><strong class="text-parchment">Radical Criminology</strong> (also called Critical Criminology or Marxist Criminology) treats crime as a product of capitalist social relations, not individual deviance. Emerging prominently in the 1970s through scholars like <strong class="text-parchment">Richard Quinney</strong> and the British National Deviance Conference, it calls for structural transformation rather than individual rehabilitation.</p>
        <div class="highlight-box mt-3 mb-3">
          <p class="text-xs font-semibold" style="color:var(--sociological);text-transform:uppercase;letter-spacing:0.08em;margin-bottom:0.25rem;">Core Assumption</p>
          <p>Crime is an inevitable consequence of a capitalist system that generates poverty, alienation, and inequality while criminalizing the survival strategies of the dispossessed. True crime reduction requires eliminating structural inequality — not building more prisons.</p>
        </div>
        <p class="font-semibold text-parchment mt-3 mb-1">Key Concepts</p>
        <ul class="list-disc list-inside space-y-1">
          <li><strong>Capitalism and alienation</strong> — workers are alienated from their labor, from each other, and from the products of their work; crime is one response to this alienation.</li>
          <li><strong>Criminalization of the poor</strong> — the legal system defines as criminal the behaviors most common among those left behind by capitalism.</li>
          <li><strong>Crimes of the powerful</strong> — corporate crime, state crime, and white-collar crime cause far more harm than street crime but receive far less enforcement.</li>
          <li><strong>Praxis</strong> — criminology should not just explain crime but actively work toward social justice and structural change.</li>
        </ul>
        <p class="font-semibold text-parchment mt-3 mb-1">Criticisms</p>
        <ul class="list-disc list-inside space-y-1">
          <li>Long on critique, short on practical policy proposals.</li>
          <li>Does not explain why crime persists in socialist/post-socialist societies.</li>
          <li>Empirically, most crime victims are from lower classes victimized by lower-class offenders — not a simple "rich oppressing poor" picture.</li>
        </ul>`
        },
        {
            id: 'feminist-criminology',
            icon: 'fa-venus',
            family: 'sociological',
            badge: 'Social Conflict',
            title: 'Feminist Criminology',
            teaser: "Mainstream criminology was built on male subjects by male researchers — gender must be centered to understand both offending and victimization.",
            body: `
        <p><strong class="text-parchment">Feminist Criminology</strong> emerged in the 1970s through scholars including <strong class="text-parchment">Freda Adler</strong> (<em>Sisters in Crime</em>, 1975) and <strong class="text-parchment">Rita Simon</strong>, and was further developed by feminist scholars like Kathleen Daly and Meda Chesney-Lind. It critiques the systematic neglect of women as subjects of criminological theory.</p>
        <div class="highlight-box mt-3 mb-3">
          <p class="text-xs font-semibold" style="color:var(--sociological);text-transform:uppercase;letter-spacing:0.08em;margin-bottom:0.25rem;">Core Assumption</p>
          <p>Gender is a central organizing factor in crime — both in patterns of offending (why women commit far less crime than men) and in victimization (why women are disproportionately victims of domestic violence and sexual assault). Existing theories, built on male subjects, fail to explain women's experiences.</p>
        </div>
        <p class="font-semibold text-parchment mt-3 mb-1">Key Concepts</p>
        <ul class="list-disc list-inside space-y-1">
          <li><strong>Gender gap in crime</strong> — men vastly outnumber women in official crime statistics; feminist criminology asks why.</li>
          <li><strong>Patriarchy and control</strong> — women's lower offending rates reflect patriarchal social controls (family surveillance, chivalry) and gendered socialization.</li>
          <li><strong>Liberation hypothesis</strong> (Adler) — as women gained social equality, female crime rates would rise; empirically not strongly supported.</li>
          <li><strong>Pathways perspective</strong> — women's routes into crime often involve victimization histories (childhood abuse, intimate partner violence) that are ignored in male-focused theories.</li>
          <li><strong>Intersectionality</strong> — race, class, and gender interact; a poor woman of color faces overlapping systems of disadvantage that shape her criminal justice experiences differently.</li>
        </ul>
        <p class="font-semibold text-parchment mt-3 mb-1">Criticisms</p>
        <ul class="list-disc list-inside space-y-1">
          <li>Early debate between liberal and radical feminist perspectives created fragmentation in the field.</li>
          <li>Liberation hypothesis has weak empirical support.</li>
          <li>Some argue it overcorrected by focusing almost exclusively on female offenders to the neglect of male victimization patterns.</li>
        </ul>`
        }
    ]
};

if (typeof module !== 'undefined') module.exports = sociologicalData;
