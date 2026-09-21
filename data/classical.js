const classicalData = [
    {
        id: 'classical-theory',
        icon: 'fa-scale-balanced',
        family: 'classical',
        badge: 'Classical School',
        title: 'Classical Theory',
        teaser: 'Crime is a rational choice — offenders weigh pleasure against pain and choose to offend when benefits outweigh costs.',
        body: `
      <p><strong class="text-parchment">Classical Theory</strong> is the foundational school of criminological thought, originating in the Enlightenment era through the work of <strong class="text-parchment">Cesare Beccaria</strong> (1738–1794), particularly his landmark work <em>On Crimes and Punishments</em> (1764).</p>
      <div class="highlight-box mt-3 mb-3">
        <p class="text-xs font-semibold" style="color:var(--gold);text-transform:uppercase;letter-spacing:0.08em;margin-bottom:0.25rem;">Core Assumption</p>
        <p>Human beings are rational, free-willed agents who choose to commit crime after calculating whether the benefits outweigh the costs. Crime is not caused by fate, demonic possession, or biology — it is a deliberate decision.</p>
      </div>
      <p class="font-semibold text-parchment mt-3 mb-1">Key Concepts</p>
      <ul class="list-disc list-inside space-y-1">
        <li><strong>Free will</strong> — individuals consciously choose their actions.</li>
        <li><strong>Hedonistic calculus</strong> — people seek pleasure and avoid pain.</li>
        <li><strong>Certainty, swiftness, severity</strong> — effective punishment must be certain, swift, and proportional.</li>
        <li><strong>Proportionality</strong> — punishment should fit the crime; excessive punishment is unjust and counter-productive.</li>
        <li><strong>Social contract</strong> — citizens surrender some freedoms; the state exists to protect the remainder.</li>
      </ul>
      <p class="font-semibold text-parchment mt-3 mb-1">Real-World Application</p>
      <p>A person deciding whether to shoplift mentally weighs the value of the item against the likelihood of being caught and the severity of the penalty. If the store has visible security cameras and stiff penalties, the rational actor will be deterred. This logic underpins modern deterrence-based crime prevention policies.</p>
      <p class="font-semibold text-parchment mt-3 mb-1">Criticisms</p>
      <ul class="list-disc list-inside space-y-1">
        <li>Assumes perfectly rational actors — ignores impulsivity, addiction, mental illness.</li>
        <li>Does not account for why some people start with criminal values.</li>
        <li>Ignores social-structural factors (poverty, inequality).</li>
        <li>Punishment certainty is hard to achieve in practice.</li>
      </ul>`
    },
    {
        id: 'utilitarianism',
        icon: 'fa-scale-balanced',
        family: 'classical',
        badge: 'Classical School',
        title: 'Utilitarianism',
        teaser: 'Punishment is justified only when it produces the greatest happiness for the greatest number — no more, no less.',
        body: `
      <p><strong class="text-parchment">Utilitarianism</strong> was developed by philosopher <strong class="text-parchment">Jeremy Bentham</strong> (1748–1832) as an ethical and penological philosophy. Bentham argued that every action — including punishment — should be evaluated by whether it maximizes overall happiness and minimizes pain in society.</p>
      <div class="highlight-box mt-3 mb-3">
        <p class="text-xs font-semibold" style="color:var(--gold);text-transform:uppercase;letter-spacing:0.08em;margin-bottom:0.25rem;">Core Assumption</p>
        <p>The goal of punishment is not vengeance, but the prevention of future harm. Punishment that exceeds what is necessary to deter or reform is itself an evil (unnecessary pain), and therefore unjust.</p>
      </div>
      <p class="font-semibold text-parchment mt-3 mb-1">Key Concepts</p>
      <ul class="list-disc list-inside space-y-1">
        <li><strong>Hedonistic calculus</strong> — measuring pleasure and pain to determine the right course of action.</li>
        <li><strong>Greatest happiness principle</strong> — the morally correct act produces the most good for the most people.</li>
        <li><strong>Panopticon</strong> — Bentham's model prison design where inmates could be observed at any time; the perception of constant surveillance deters misbehavior.</li>
        <li><strong>Rehabilitation as utility</strong> — reforming offenders has social utility; long punitive sentences that do not reform have negative utility.</li>
      </ul>
      <p class="font-semibold text-parchment mt-3 mb-1">Real-World Application</p>
      <p>Utilitarian logic supports parole systems (releasing reformed offenders when continued imprisonment no longer adds social benefit), community service alternatives to imprisonment, and cost-benefit analysis of mandatory minimum sentencing policies.</p>
      <p class="font-semibold text-parchment mt-3 mb-1">Criticisms</p>
      <ul class="list-disc list-inside space-y-1">
        <li>Can theoretically justify punishing an innocent person if it produces enough social benefit (the "scapegoat problem").</li>
        <li>Measurements of "happiness" and "pain" are subjective and difficult to quantify.</li>
        <li>Ignores individual rights in favor of aggregate welfare.</li>
      </ul>`
    },
    {
        id: 'neoclassical',
        icon: 'fa-scale-balanced',
        family: 'classical',
        badge: 'Neo-Classical School',
        title: 'Neo-Classical Theory',
        teaser: 'A refinement of Classical Theory that allows age, mental capacity, and circumstances to modify pure free-will assumptions.',
        body: `
      <p><strong class="text-parchment">Neo-Classical Theory</strong> emerged in the late 18th and early 19th centuries as a practical refinement of strict Classical Theory. Legal practitioners and courts recognized that treating every offender as an equally rational free agent produced unjust results — children and severely mentally ill persons cannot make the same rational calculations as adults.</p>
      <div class="highlight-box mt-3 mb-3">
        <p class="text-xs font-semibold" style="color:var(--gold);text-transform:uppercase;letter-spacing:0.08em;margin-bottom:0.25rem;">Core Assumption</p>
        <p>Free will remains the foundation, but mitigating factors — age, mental state, circumstances of the offense — can reduce or modify culpability. The law should account for individual differences in capacity.</p>
      </div>
      <p class="font-semibold text-parchment mt-3 mb-1">Key Concepts</p>
      <ul class="list-disc list-inside space-y-1">
        <li><strong>Mitigating and aggravating circumstances</strong> — factors that reduce or increase the degree of punishment deserved.</li>
        <li><strong>Partial responsibility</strong> — recognition that some individuals have diminished capacity for rational choice.</li>
        <li><strong>Modern sentencing guidelines</strong> — structured systems that weigh offense severity and offender factors, reflecting neo-classical logic.</li>
        <li><strong>Expert testimony</strong> — allowing psychiatric and psychological evidence in court originated from neo-classical pragmatism.</li>
      </ul>
      <p class="font-semibold text-parchment mt-3 mb-1">Real-World Application</p>
      <p>A juvenile offender who commits a crime is treated differently from an adult — juvenile justice systems worldwide reflect neo-classical logic that age reduces full rational culpability. Similarly, an insanity defense acknowledges that severe mental illness can nullify free will.</p>
      <p class="font-semibold text-parchment mt-3 mb-1">Criticisms</p>
      <ul class="list-disc list-inside space-y-1">
        <li>Determining which circumstances "count" as mitigating is inherently subjective and can produce inconsistent outcomes.</li>
        <li>Still primarily reactive (focuses on post-crime punishment) rather than preventive.</li>
        <li>Does not address root causes of crime (poverty, social inequality).</li>
      </ul>`
    },
    {
        id: 'deterrence',
        icon: 'fa-shield-halved',
        family: 'classical',
        badge: 'Classical School',
        title: 'Deterrence Theory',
        teaser: 'Crime can be prevented through punishments that are certain, swift, and severe enough to outweigh criminal gain.',
        body: `
      <p><strong class="text-parchment">Deterrence Theory</strong> is an application and extension of Classical thinking, drawing directly from Beccaria and Bentham. It proposes that rational actors will choose not to offend when they believe the punishment is likely, rapid, and sufficiently unpleasant to outweigh the benefits of crime.</p>
      <div class="highlight-box mt-3 mb-3">
        <p class="text-xs font-semibold" style="color:var(--gold);text-transform:uppercase;letter-spacing:0.08em;margin-bottom:0.25rem;">Core Assumption</p>
        <p>Potential offenders calculate risk. Deterrence works by raising the perceived costs of crime through certainty (probability of being caught), celerity (speed of punishment), and severity (harshness of punishment).</p>
      </div>
      <p class="font-semibold text-parchment mt-3 mb-1">Key Concepts</p>
      <ul class="list-disc list-inside space-y-1">
        <li><strong>General deterrence</strong> — punishing one person publicly deters the broader population from committing the same crime.</li>
        <li><strong>Specific deterrence</strong> — punishing an individual deters that person from re-offending after experiencing the consequences.</li>
        <li><strong>Certainty &gt; Severity</strong> — research suggests certainty of detection deters more effectively than severity of punishment.</li>
        <li><strong>Perceptual deterrence</strong> — it is the offender's <em>perception</em> of risk, not the objective probability, that shapes behavior.</li>
      </ul>
      <p class="font-semibold text-parchment mt-3 mb-1">Real-World Application</p>
      <p>Mandatory minimum sentencing debates center on whether increasing severity (longer sentences) deters crime. Research consistently shows that increasing police presence (raising certainty) produces stronger deterrent effects than simply increasing sentence lengths.</p>
      <p class="font-semibold text-parchment mt-3 mb-1">Criticisms</p>
      <ul class="list-disc list-inside space-y-1">
        <li>Many crimes are impulsive — criminals do not always engage in rational calculation.</li>
        <li>Offenders systematically underestimate the probability of getting caught.</li>
        <li>Harsh mandatory minimums (severity) have shown diminishing returns in deterrence.</li>
        <li>Does not address non-rational motivations (addiction, mental illness, peer pressure).</li>
      </ul>`
    },
];

if (typeof module !== 'undefined') module.exports = classicalData;
