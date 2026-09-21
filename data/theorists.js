const theoristsData = [
    {
        id: 'beccaria',
        icon: 'fa-user-graduate',
        family: 'classical',
        badge: 'Classical',
        title: 'Cesare Beccaria',
        teaser: 'father of classical criminology',
        body: `
      <p><strong class="text-parchment font-semibold text-lg">Cesare Beccaria (1738–1794)</strong></p>
      <p class="mt-2 text-gold"><em>Key Work: On Crimes and Punishments (1764)</em></p>
      <p class="mt-3">An Italian jurist and philosopher whose work ignited the Classical School. He argued against the brutal, arbitrary justice systems of the time.</p>
      <ul class="mt-2 list-disc list-inside space-y-1">
        <li>Opposed torture and capital punishment.</li>
        <li>Argued that punishment must be certain, swift, and proportional to deter crime.</li>
        <li>His ideas heavily influenced the U.S. Constitution (due process, ban on cruel/unusual punishment).</li>
      </ul>`
    },
    {
        id: 'bentham',
        icon: 'fa-user-graduate',
        family: 'classical',
        badge: 'Classical',
        title: 'Jeremy Bentham',
        teaser: 'utilitarian philosopher',
        body: `
      <p><strong class="text-parchment font-semibold text-lg">Jeremy Bentham (1748–1832)</strong></p>
      <p class="mt-2 text-gold"><em>Key Concept: Hedonistic Calculus</em></p>
      <p class="mt-3">An English philosopher who founded Utilitarianism. He believed all human behavior is driven by the desire to maximize pleasure and minimize pain.</p>
      <ul class="mt-2 list-disc list-inside space-y-1">
        <li>Argued punishment should only be permitted if it prevents greater future pain (deterrence).</li>
        <li>Designed the <em>Panopticon</em> — a prison model emphasizing constant surveillance.</li>
      </ul>`
    },
    {
        id: 'lombroso',
        icon: 'fa-user-graduate',
        family: 'biological',
        badge: 'Biological',
        title: 'Cesare Lombroso',
        teaser: 'father of positivist criminology',
        body: `
      <p><strong class="text-parchment font-semibold text-lg">Cesare Lombroso (1835–1909)</strong></p>
      <p class="mt-2 text-gold"><em>Key Work: L'Uomo Delinquente (1876)</em></p>
      <p class="mt-3">An Italian physician who shifted criminology from philosophy to biological measurement. Though his specific theories are discredited, his empirical approach birthed the Positivist School.</p>
      <ul class="mt-2 list-disc list-inside space-y-1">
        <li>Proposed the concept of the "Born Criminal" — biological throwbacks (atavists).</li>
        <li>Mapped physical stigmata (jaw size, skull shape) to criminal behavior.</li>
      </ul>`
    },
    {
        id: 'freud',
        icon: 'fa-user-graduate',
        family: 'psychological',
        badge: 'Psychological',
        title: 'Sigmund Freud',
        teaser: 'founder of psychoanalysis',
        body: `
      <p><strong class="text-parchment font-semibold text-lg">Sigmund Freud (1856–1939)</strong></p>
      <p class="mt-2 text-gold"><em>Key Concept: Unconscious Conflict (Id/Ego/Superego)</em></p>
      <p class="mt-3">Though not a criminologist, Freud's theories dominated early psychological explanations of crime.</p>
      <ul class="mt-2 list-disc list-inside space-y-1">
        <li>Crime stems from an overactive <em>id</em> (urges) and an underdeveloped <em>superego</em> (conscience).</li>
        <li>Delinquency is seen as the outward manifestation of repressed unconscious trauma or guilt.</li>
      </ul>`
    },
    {
        id: 'merton',
        icon: 'fa-user-graduate',
        family: 'sociological',
        badge: 'Social Structure',
        title: 'Robert K. Merton',
        teaser: 'developed strain/anomie theory',
        body: `
      <p><strong class="text-parchment font-semibold text-lg">Robert K. Merton (1910–2003)</strong></p>
      <p class="mt-2 text-gold"><em>Key Work: Social Structure and Anomie (1938)</em></p>
      <p class="mt-3">One of the most influential American sociologists. He adapted Durkheim's concept of anomie to explain American crime rates.</p>
      <ul class="mt-2 list-disc list-inside space-y-1">
        <li>Identified the gap between cultural <em>goals</em> (wealth) and institutional <em>means</em>.</li>
        <li>Created the fived part typology of adaptation: Conformity, Innovation, Ritualism, Retreatism, Rebellion.</li>
      </ul>`
    },
    {
        id: 'sutherland',
        icon: 'fa-user-graduate',
        family: 'sociological',
        badge: 'Social Process',
        title: 'Edwin Sutherland',
        teaser: 'creator of differential association',
        body: `
      <p><strong class="text-parchment font-semibold text-lg">Edwin H. Sutherland (1883–1950)</strong></p>
      <p class="mt-2 text-gold"><em>Key Concept: Differential Association</em></p>
      <p class="mt-3">Considered the most important criminologist of the 20th century. He definitively shifted the field toward sociology and learning.</p>
      <ul class="mt-2 list-disc list-inside space-y-1">
        <li>Proposed that all crime is learned through intimate social interaction.</li>
        <li>Coined the term <em>white-collar crime</em> (1939), proving crime wasn't just a lower-class phenomenon.</li>
      </ul>`
    },
    {
        id: 'hirschi',
        icon: 'fa-user-graduate',
        family: 'sociological',
        badge: 'Social Process',
        title: 'Travis Hirschi',
        teaser: 'social bond & self-control theories',
        body: `
      <p><strong class="text-parchment font-semibold text-lg">Travis Hirschi (1935–2017)</strong></p>
      <p class="mt-2 text-gold"><em>Key Works: Causes of Delinquency (1969); A General Theory of Crime (1990)</em></p>
      <p class="mt-3">The dominant theorist of social control. He effectively asked "why do people obey rules?" rather than why they break them.</p>
      <ul class="mt-2 list-disc list-inside space-y-1">
        <li>Formulated the Four Social Bonds (Attachment, Commitment, Involvement, Belief).</li>
        <li>Later co-authored the General Theory of Crime (emphasizing low self-control) with Michael Gottfredson.</li>
      </ul>`
    },
    {
        id: 'becker',
        icon: 'fa-user-graduate',
        family: 'sociological',
        badge: 'Social Process',
        title: 'Howard S. Becker',
        teaser: 'key architect of labeling theory',
        body: `
      <p><strong class="text-parchment font-semibold text-lg">Howard S. Becker (1928–2023)</strong></p>
      <p class="mt-2 text-gold"><em>Key Work: Outsiders (1963)</em></p>
      <p class="mt-3">A central figure in labeling theory. He shifted focus from the actor to the audience that judges the actor.</p>
      <ul class="mt-2 list-disc list-inside space-y-1">
        <li>"Deviance is not a quality of the act... it is a consequence of the application by others of rules and sanctions."</li>
        <li>Studied jazz musicians and marijuana users to understand social margins.</li>
      </ul>`
    },
    {
        id: 'agnew',
        icon: 'fa-user-graduate',
        family: 'contemporary',
        badge: 'Contemporary',
        title: 'Robert Agnew',
        teaser: 'developed general strain theory',
        body: `
      <p><strong class="text-parchment font-semibold text-lg">Robert Agnew (born 1953)</strong></p>
      <p class="mt-2 text-gold"><em>Key Concept: General Strain Theory (1992)</em></p>
      <p class="mt-3">Revitalized strain theory by moving beyond Merton's purely economic focus.</p>
      <ul class="mt-2 list-disc list-inside space-y-1">
        <li>Argued that strain comes from negative relationships and loss of positive stimuli, not just blocked success.</li>
        <li>Placed central importance on negative emotions (like anger) as the bridge between strain and crime.</li>
      </ul>`
    },
    {
        id: 'akers',
        icon: 'fa-user-graduate',
        family: 'sociological',
        badge: 'Social Process',
        title: 'Ronald Akers',
        teaser: 'developed social learning theory',
        body: `
      <p><strong class="text-parchment font-semibold text-lg">Ronald Akers (1939–2019)</strong></p>
      <p class="mt-2 text-gold"><em>Key Concept: Differential Reinforcement</em></p>
      <p class="mt-3">Expanded on Sutherland by integrating behavioral psychology into sociology.</p>
      <ul class="mt-2 list-disc list-inside space-y-1">
        <li>Explained the specific mechanisms of learning: reinforcement, punishment, and imitation (modeling).</li>
      </ul>`
    },
    {
        id: 'moffitt',
        icon: 'fa-user-graduate',
        family: 'contemporary',
        badge: 'Contemporary',
        title: 'Terrie Moffitt',
        teaser: 'developmental/life-course taxonomy',
        body: `
      <p><strong class="text-parchment font-semibold text-lg">Terrie E. Moffitt (born 1955)</strong></p>
      <p class="mt-2 text-gold"><em>Key Concept: Dual Taxonomy of Offending (1993)</em></p>
      <p class="mt-3">A leading developmental psychologist and criminologist.</p>
      <ul class="mt-2 list-disc list-inside space-y-1">
        <li>Separated offenders into two groups: Adolescence-Limited (normative adolescent rebellion) and Life-Course-Persistent (early neurodevelopmental deficits).</li>
      </ul>`
    },
    {
        id: 'cohen-felson',
        icon: 'fa-user-graduate',
        family: 'contemporary',
        badge: 'Contemporary',
        title: 'Cohen & Felson',
        teaser: 'creators of routine activity theory',
        body: `
      <p><strong class="text-parchment font-semibold text-lg">Lawrence Cohen & Marcus Felson</strong></p>
      <p class="mt-2 text-gold"><em>Key Concept: Routine Activity Theory (1979)</em></p>
      <p class="mt-3">Shifted focus entirely to the crime event rather than offender motivation.</p>
      <ul class="mt-2 list-disc list-inside space-y-1">
        <li>Proposed the crime triangle: Motivated Offender, Suitable Target, Absence of Capable Guardian.</li>
      </ul>`
    },
    {
        id: 'sampson',
        icon: 'fa-user-graduate',
        family: 'contemporary',
        badge: 'Contemporary',
        title: 'Robert J. Sampson',
        teaser: 'collective efficacy & turning points',
        body: `
      <p><strong class="text-parchment font-semibold text-lg">Robert J. Sampson (born 1956)</strong></p>
      <p class="mt-2 text-gold"><em>Key Concepts: Collective Efficacy, Age-Graded Theory</em></p>
      <p class="mt-3">A dominant contemporary sociologist.</p>
      <ul class="mt-2 list-disc list-inside space-y-1">
        <li>Updated Social Disorganization by identifying "collective efficacy" (neighborhood trust + willingness to intervene).</li>
        <li>Co-authored (with John Laub) the Life-Course theory of "turning points" showing how marriage and jobs stop chronic offending.</li>
      </ul>`
    },
    {
        id: 'vold',
        icon: 'fa-user-graduate',
        family: 'sociological',
        badge: 'Social Conflict',
        title: 'George Vold',
        teaser: 'group conflict theory',
        body: `
      <p><strong class="text-parchment font-semibold text-lg">George Vold (1896–1967)</strong></p>
      <p class="mt-2 text-gold"><em>Key Work: Theoretical Criminology (1958)</em></p>
      <p class="mt-3">A pioneer of non-Marxist group conflict theory.</p>
      <ul class="mt-2 list-disc list-inside space-y-1">
        <li>Argued that groups naturally form to protect their interests, and law-making is a political process where winners criminalize behaviors of the losers.</li>
      </ul>`
    },
];

if (typeof module !== 'undefined') module.exports = theoristsData;
