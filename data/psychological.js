const psychologicalData = [
    {
        id: 'psychoanalytic',
        icon: 'fa-brain',
        family: 'psychological',
        badge: 'Psychological',
        title: 'Psychoanalytic Theory',
        teaser: 'Unconscious conflicts between the id, ego, and superego drive criminal behavior — especially when the superego fails to develop properly.',
        body: `
      <p><strong class="text-parchment">Psychoanalytic Theory</strong>, developed by <strong class="text-parchment">Sigmund Freud</strong> (1856–1939), posits that human behavior is driven largely by unconscious processes. Applied to criminology, it suggests that criminal behavior reflects failures in psychological development — particularly in the formation of the superego (conscience).</p>
      <div class="highlight-box mt-3 mb-3">
        <p class="text-xs font-semibold" style="color:var(--psychological);text-transform:uppercase;letter-spacing:0.08em;margin-bottom:0.25rem;">Core Assumption</p>
        <p>Crime results from unresolved unconscious conflicts, inadequate ego development, or a failure to internalize societal norms through a properly developed superego.</p>
      </div>
      <p class="font-semibold text-parchment mt-3 mb-1">Key Concepts</p>
      <ul class="list-disc list-inside space-y-1">
        <li><strong>Id</strong> — the primitive, pleasure-seeking drive (unconscious); wants immediate gratification with no moral constraints.</li>
        <li><strong>Ego</strong> — the rational mediator between the id and the external world; the "reality principle."</li>
        <li><strong>Superego</strong> — the internalized moral conscience, formed through parental influence; when underdeveloped, individuals lack guilt and empathy.</li>
        <li><strong>Unconscious conflict</strong> — unresolved trauma, guilt, or desire can manifest as self-destructive or antisocial behavior.</li>
        <li><strong>Fixation</strong> — arrest at an early developmental stage can produce impulsive, narcissistic, or aggressive adult behavior.</li>
      </ul>
      <p class="font-semibold text-parchment mt-3 mb-1">Real-World Application</p>
      <p>Psychoanalytic thinking underpins many therapeutic approaches used in correctional rehabilitation — the idea that understanding the root of an offender's early experiences and unconscious drives can address the cause rather than just the behavior. Therapeutic communities and psychodynamic counseling in prisons reflect this tradition.</p>
      <p class="font-semibold text-parchment mt-3 mb-1">Criticisms</p>
      <ul class="list-disc list-inside space-y-1">
        <li>Concepts like the "id" and "unconscious" are difficult to measure empirically.</li>
        <li>Psychoanalytic explanations can be constructed after the fact for any behavior (not falsifiable).</li>
        <li>Ignores social-structural factors entirely.</li>
        <li>Treatment approaches derived from it are difficult to evaluate for effectiveness.</li>
      </ul>`
    },
    {
        id: 'behavioral',
        icon: 'fa-arrow-right-arrow-left',
        family: 'psychological',
        badge: 'Psychological',
        title: 'Behavioral Theory',
        teaser: 'Crime is learned behavior, shaped by reinforcement and punishment — people repeat actions that are rewarded and avoid those that are punished.',
        body: `
      <p><strong class="text-parchment">Behavioral Theory</strong>, rooted in the work of <strong class="text-parchment">B.F. Skinner</strong> (1904–1990), applies operant conditioning principles to understand how criminal behavior is acquired, maintained, and eliminated. Skinner showed that behavior is shaped by its consequences — positive reinforcement (rewards) increase behavior, punishment decreases it.</p>
      <div class="highlight-box mt-3 mb-3">
        <p class="text-xs font-semibold" style="color:var(--psychological);text-transform:uppercase;letter-spacing:0.08em;margin-bottom:0.25rem;">Core Assumption</p>
        <p>Criminal behavior is not innate — it is learned through experience. If crime is consistently rewarded (profit, status, respect) and not punished, it will be repeated. If punishment is swift, certain, and significant enough, the behavior will be extinguished.</p>
      </div>
      <p class="font-semibold text-parchment mt-3 mb-1">Key Concepts</p>
      <ul class="list-disc list-inside space-y-1">
        <li><strong>Operant conditioning</strong> — behavior is shaped by rewards and punishment following the behavior.</li>
        <li><strong>Positive reinforcement</strong> — receiving something desirable after a behavior increases it (e.g., money from theft).</li>
        <li><strong>Negative reinforcement</strong> — removal of something unpleasant increases behavior (e.g., violence to escape bullying).</li>
        <li><strong>Punishment</strong> — aversive consequences reduce behavior; but timing and consistency are critical.</li>
        <li><strong>Extinction</strong> — removing reinforcement causes behavior to fade over time.</li>
      </ul>
      <p class="font-semibold text-parchment mt-3 mb-1">Real-World Application</p>
      <p>Behavioral principles underpin behavior modification programs in juvenile detention, token economies in psychiatric settings, and cognitive-behavioral therapy (CBT) programs — one of the most empirically supported interventions for reducing recidivism.</p>
      <p class="font-semibold text-parchment mt-3 mb-1">Criticisms</p>
      <ul class="list-disc list-inside space-y-1">
        <li>Treats humans as passive reactors to stimuli, ignoring cognitive processing, beliefs, and emotions.</li>
        <li>Does not explain why some people resist criminal rewards even in criminogenic environments.</li>
        <li>Ignores social and structural causes of crime.</li>
      </ul>`
    },
    {
        id: 'cognitive',
        icon: 'fa-lightbulb',
        family: 'psychological',
        badge: 'Psychological',
        title: 'Cognitive Theory',
        teaser: 'How people think — their moral reasoning, information processing, and cognitive distortions — shapes criminal decision-making.',
        body: `
      <p><strong class="text-parchment">Cognitive Theory</strong> focuses on how people perceive, interpret, and mentally process information. Applied to criminology, it examines moral development, cognitive distortions (thought patterns that justify offending), and problem-solving deficits. Key contributors include <strong class="text-parchment">Lawrence Kohlberg</strong> and Jean Piaget.</p>
      <div class="highlight-box mt-3 mb-3">
        <p class="text-xs font-semibold" style="color:var(--psychological);text-transform:uppercase;letter-spacing:0.08em;margin-bottom:0.25rem;">Core Assumption</p>
        <p>Criminal behavior is associated with deficient or arrested moral development, distorted thinking patterns, and poor social problem-solving skills. Offenders don't think differently <em>about</em> crime — they think differently <em>in general</em>, applying immature reasoning to moral situations.</p>
      </div>
      <p class="font-semibold text-parchment mt-3 mb-1">Key Concepts — Kohlberg's Moral Development Stages</p>
      <ul class="list-disc list-inside space-y-1">
        <li><strong>Pre-conventional</strong> — morality based on punishment/reward for oneself (typical of young children); most chronic offenders operate here.</li>
        <li><strong>Conventional</strong> — morality based on social rules and others' expectations; most adults operate here.</li>
        <li><strong>Post-conventional</strong> — morality based on abstract principles of justice and rights; rare, highest stage.</li>
        <li><strong>Cognitive distortions</strong> — thought patterns that neutralize guilt (e.g., "they had it coming," "everyone does it," "I need it more").</li>
        <li><strong>Information processing deficits</strong> — hostile attribution bias (interpreting ambiguous situations as threatening) linked to reactive aggression.</li>
      </ul>
      <p class="font-semibold text-parchment mt-3 mb-1">Real-World Application</p>
      <p>Cognitive-behavioral therapy (CBT) programs like Thinking for a Change (T4C) and Moral Reconation Therapy (MRT) — widely used in prisons and probation — are directly grounded in cognitive theory, targeting distorted thinking and poor moral reasoning.</p>
      <p class="font-semibold text-parchment mt-3 mb-1">Criticisms</p>
      <ul class="list-disc list-inside space-y-1">
        <li>Measuring moral reasoning stages is complex and culturally influenced.</li>
        <li>Not all offenders show cognitive deficits — some white-collar criminals reason at high moral levels but choose self-interest.</li>
        <li>Does not fully account for situational factors or structural inequality.</li>
      </ul>`
    },
    {
        id: 'personality',
        icon: 'fa-masks-theater',
        family: 'psychological',
        badge: 'Psychological',
        title: 'Personality Theory',
        teaser: 'Stable trait clusters — such as impulsivity, low self-control, and antisocial personality — predict persistent patterns of offending.',
        body: `
      <p><strong class="text-parchment">Personality Theory</strong> in criminology examines stable individual differences in traits that predispose some people to criminal behavior across time and situations. This approach bridges psychological and biosocial perspectives, and is most famously developed into a criminological theory by <strong class="text-parchment">Michael Gottfredson & Travis Hirschi</strong> (1990) in their General Theory of Crime.</p>
      <div class="highlight-box mt-3 mb-3">
        <p class="text-xs font-semibold" style="color:var(--psychological);text-transform:uppercase;letter-spacing:0.08em;margin-bottom:0.25rem;">Core Assumption</p>
        <p>Low self-control — established in early childhood through parenting deficits — is the single underlying trait responsible for a wide range of criminal and analogous behaviors across the life course.</p>
      </div>
      <p class="font-semibold text-parchment mt-3 mb-1">Key Concepts</p>
      <ul class="list-disc list-inside space-y-1">
        <li><strong>Low self-control</strong> — impulsiveness, insensitivity, risk-taking, short-sightedness, and preference for simple tasks over complex ones.</li>
        <li><strong>Antisocial Personality Disorder (ASPD)</strong> — pervasive pattern of disregard for others' rights, lack of empathy and remorse; overlaps significantly with persistent offending.</li>
        <li><strong>General Theory of Crime</strong> — Gottfredson & Hirschi argue self-control, formed by age 8–10 through parenting practices, remains relatively stable and explains all forms of crime and deviance.</li>
        <li><strong>Analogous behaviors</strong> — low self-control also predicts smoking, accidents, unemployment, and unstable relationships — not just crime.</li>
      </ul>
      <p class="font-semibold text-parchment mt-3 mb-1">Real-World Application</p>
      <p>Early intervention programs that improve parenting skills and child self-regulation (e.g., the Nurse-Family Partnership, the Good Behavior Game) are grounded in the logic that building self-control early prevents long-term criminality.</p>
      <p class="font-semibold text-parchment mt-3 mb-1">Criticisms</p>
      <ul class="list-disc list-inside space-y-1">
        <li>Tautological risk — "low self-control causes crime" but is partly defined by criminal-like behavior.</li>
        <li>Does not explain why self-control stabilizes or changes over the life course (Sampson & Laub's turning points challenge this).</li>
        <li>Ignores macro-level factors: two people with equal self-control face very different opportunity structures.</li>
      </ul>`
    },
    {
        id: 'attachment',
        icon: 'fa-heart',
        family: 'psychological',
        badge: 'Psychological',
        title: 'Attachment Theory',
        teaser: 'Failures in early caregiver bonding disrupt social and emotional development, increasing vulnerability to later antisocial behavior.',
        body: `
      <p><strong class="text-parchment">Attachment Theory</strong> was developed by British psychiatrist <strong class="text-parchment">John Bowlby</strong> (1907–1990), who proposed that infants are biologically pre-programmed to form close bonds with caregivers, and that the quality of this early attachment has profound effects on personality development, emotional regulation, and social functioning throughout life.</p>
      <div class="highlight-box mt-3 mb-3">
        <p class="text-xs font-semibold" style="color:var(--psychological);text-transform:uppercase;letter-spacing:0.08em;margin-bottom:0.25rem;">Core Assumption</p>
        <p>Children who experience insecure, disrupted, or absent early attachment relationships fail to develop adequate emotional regulation, empathy, and trust — forming an "internal working model" of relationships as hostile or unreliable, which can manifest as antisocial behavior.</p>
      </div>
      <p class="font-semibold text-parchment mt-3 mb-1">Key Concepts</p>
      <ul class="list-disc list-inside space-y-1">
        <li><strong>Secure attachment</strong> — responsive caregiving produces emotionally secure, pro-social children.</li>
        <li><strong>Insecure attachment styles</strong> — anxious-ambivalent, avoidant, or disorganized attachment correlate with behavioral problems and aggression.</li>
        <li><strong>Maternal deprivation hypothesis</strong> — Bowlby's early claim that prolonged maternal separation before age 5 inevitably causes permanent damage (later nuanced — quality of care matters more than maternal presence alone).</li>
        <li><strong>Internal working models</strong> — early attachment experiences form cognitive schemas about relationships used throughout life.</li>
      </ul>
      <p class="font-semibold text-parchment mt-3 mb-1">Real-World Application</p>
      <p>Attachment-informed interventions in child protective services, foster care training, and early childhood programs emphasize the importance of stable, responsive caregiving to prevent future antisocial development. It informs trauma-focused therapies for juvenile offenders.</p>
      <p class="font-semibold text-parchment mt-3 mb-1">Criticisms</p>
      <ul class="list-disc list-inside space-y-1">
        <li>Bowlby's original maternal deprivation hypothesis was overly deterministic and mother-centric.</li>
        <li>Many children with insecure attachment do not develop criminal behavior; individual resilience and subsequent positive relationships matter.</li>
        <li>Cultural variability in caregiving norms may affect attachment classifications.</li>
      </ul>`
    },
];

if (typeof module !== 'undefined') module.exports = psychologicalData;
