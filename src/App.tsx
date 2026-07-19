import type { ReactNode } from 'react';
import Deck from './deck/Deck';
import Slide from './deck/Slide';
import Build from './deck/Build';
import Reveal from './deck/Reveal';
import Cover from './components/Cover';
import Section from './components/Section';
import Agenda from './components/Agenda';
import Steps from './components/Steps';
import BigNumber from './components/BigNumber';
import StatGrid from './components/StatGrid';
import CountUp from './components/CountUp';
import Contrast from './components/Contrast';
import Timeline from './components/Timeline';
import { BarChart } from './components/Charts';

/* ══════════════════════════════════════════════════════════════════════
   Maritime Intent Probe — BC1 outcome, supporting analyses, and a
   four-month research program. The deck distinguishes:
     Level 0 · experimental identifiability (BC1)
     Level 1 · observed statistical structure
     Level 2 · representational decomposition under a crossed design
     Level 3 · computational utilization

   Crucially, the per-encoding-variant analysis is presented as a
   supporting sensitivity analysis, not as the amended BC1 hard-gate
   determination itself.
   © Katherine Ombrellaro 2026
   ══════════════════════════════════════════════════════════════════════ */


type ThreePaneStat = {
  value: ReactNode;
  label: string;
  caption: string;
};

function ThreePaneRow({ stats }: { stats: ThreePaneStat[] }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
        gap: '1rem',
        width: '100%',
      }}
    >
      {stats.map((stat, index) => (
        <div
          key={`${stat.label}-${index}`}
          style={{
            minWidth: 0,
            minHeight: '10.5rem',
            padding: '1.4rem 1.3rem',
            border: '1px solid rgba(255,255,255,0.14)',
            borderRadius: '1rem',
            background:
              'linear-gradient(145deg, rgba(255,255,255,0.075), rgba(255,255,255,0.035))',
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.035)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <div
            className="accent-text"
            style={{
              fontSize: '2.15rem',
              lineHeight: 1,
              fontWeight: 700,
              marginBottom: '0.9rem',
              fontVariantNumeric: 'tabular-nums',
            }}
          >
            {stat.value}
          </div>
          <div
            style={{
              fontSize: '1rem',
              lineHeight: 1.2,
              fontWeight: 650,
              marginBottom: '0.55rem',
            }}
          >
            {stat.label}
          </div>
          <div
            style={{
              fontSize: '0.82rem',
              lineHeight: 1.45,
              opacity: 0.58,
            }}
          >
            {stat.caption}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function App() {
  return (
    <Deck>
      {/* ── 1 · Cover ─────────────────────────────────────────────── */}
      <Cover
        kicker="Mechanistic interpretability · BC1 review"
        title={
          <>
            What the null established —{' '}
            <span className="accent-text">and what comes next.</span>
          </>
        }
        subtitle="BC1 outcome, supporting analyses, and a four-month program to characterize the observed geometry and build an identifiable follow-up design."
        foot="© Katherine Ombrellaro 2026 · Maritime Intent Probe · exploratory amendment"
        notes="This is a research-plan discussion anchored in the BC1 outcome. Keep three claims separate: BC1 blocks attribution to adversarial intent under the current design; supporting analyses characterize what remains measurable; the four-month plan develops the next estimands and designs."
      />

      {/* ── 2 · Thesis ───────────────────────────────────────────── */}
      <Slide center nav="Thesis" notes="Lead with the decision consequence, not the headline AUC. The current data remain useful, but only for narrower questions than the preregistered semantic claim.">
        <h2 className="headline" style={{ marginInline: 'auto' }}>
          The probe learned something.
          <br />
          BC1 shows we cannot attribute it to{' '}
          <span className="accent-text">adversarial intent.</span>
        </h2>
        <Build at={1}>
          <p className="lead" style={{ marginInline: 'auto' }}>
            Two prompt sets with no adversarial intent in either remain perfectly
            separable along the trained direction.
          </p>
        </Build>
        <Build at={2}>
          <p className="subhead" style={{ marginInline: 'auto' }}>
            Phase I therefore characterizes the resulting geometry; Phase II builds the
            crossed design required to separate the intended factor from its competitors.
          </p>
        </Build>
      </Slide>

      {/* ── 3 · Agenda ───────────────────────────────────────────── */}
      <Agenda
        kicker="Agenda"
        title="Outcome → explanation → research plan."
        nav="Agenda"
        items={[
          { title: 'What BC1 actually varies and holds fixed', hint: 'design' },
          { title: 'The Level-0 outcome and its licensed inference', hint: 'criterion' },
          { title: 'Which metrics support — but do not replace — BC1', hint: 'evidence' },
          { title: 'A four-month program organized by unresolved questions', hint: 'milestones' },
        ]}
        notes="The hierarchy remains useful, but it is now subordinate to the meeting objective: explain the BC1 result, show exactly what each supporting metric contributes, and agree on the next four months."
      />

      {/* ── 4 · Stimulus construction ────────────────────────────── */}
      <Steps
        kicker="The design"
        title="What the BC1 null compares."
        nav="Null construction"
        items={[
          {
            title: 'Neutral routing intent in both members',
            body: 'Neither member instantiates the target adversarial-routing outcome. The intended task variable is held fixed at neutral.',
          },
          {
            title: 'A changed stimulus family',
            body: 'One member uses adversarial phrasing of neutral maritime-routing concepts; the companion uses neutral operational language. Slot values are paired, but the non-slot template text is not propositionally identical.',
          },
          {
            title: 'The trained monitor is reused',
            body: 'The probe learned on the original adversarial-versus-legitimate contrast and is scored on this neutral-versus-neutral null.',
          },
          {
            title: 'BC1 asks whether the target was necessary',
            body: 'If the trained probe still separates the null labels beyond the pre-registered tolerance, the original score cannot be uniquely attributed to adversarial intent.',
          },
        ]}
        notes="Avoid ‘matched pairs’ as shorthand for full causal matching. The pair shares neutral routing intent and paired slots, but the template families differ in surface register and non-slot propositional content. State exactly what is fixed and what changes."
      />

      {/* ── 5 · Three objects ────────────────────────────────────── */}
      <Slide center nav="What BC1 measures" notes="This slide removes the overloaded word semantic. Distinguish the stimulus manipulation, the intended task variable, and the internal representation.">
        <p className="kicker" style={{ marginInline: 'auto' }}>The objects must stay separate</p>
        <h2 className="headline" style={{ marginInline: 'auto' }}>
          Stimulus changes. Target intent does not. Representation is measured.
        </h2>
        <div style={{ maxWidth: '58rem', marginInline: 'auto' }}>
          <ThreePaneRow
            stats={[
              { value: 'ΔX', label: 'Stimulus', caption: 'adversarial-register family vs neutral-register family' },
              { value: '0', label: 'Target contrast', caption: 'neutral routing intent in both classes' },
              { value: 'AUC', label: 'Representation readout', caption: 'can the trained direction distinguish the null labels?' },
            ]}
          />
        </div>
        <Build at={1}>
          <p className="lead" style={{ marginInline: 'auto' }}>
            A high null AUC means the target contrast was not required for discrimination.
          </p>
        </Build>
      </Slide>

      {/* ── 6 · Gateway ──────────────────────────────────────────── */}
      <Slide center nav="BC1 gateway" notes="BC1 is a binary tolerance criterion, not a variance estimator. It determines whether the evidence can support attribution to the intended quantity.">
        <p className="kicker" style={{ marginInline: 'auto' }}>Level 0 · experimental identifiability</p>
        <h2 className="headline" style={{ marginInline: 'auto' }}>
          BC1 is the gateway: <span className="accent-text">|AUC − 0.50| ≤ 0.03</span>
        </h2>
        <div style={{ maxWidth: '54rem', marginInline: 'auto' }}>
          <Contrast
            kicker="Pre-registered decision rule"
            title="What pass and fail license."
            left={{
              label: 'PASS',
              title: 'Null discrimination is within tolerance',
              points: [
                'The specified null does not reproduce probe discrimination',
                'Attribution is not established, but the design may proceed to stronger tests',
              ],
            }}
            right={{
              label: 'FAIL',
              title: 'Neutral-intent null remains discriminable',
              points: [
                'The target intent was unnecessary for the observed separation',
                'Interpretation in terms of adversarial intent is blocked under this design',
              ],
            }}
          />
        </div>
      </Slide>

      {/* ── 7 · Section: outcome ─────────────────────────────────── */}
      <Section
        n="01"
        kicker="BC1 outcome"
        title="The null reproduced the discrimination."
        nav="01 · Outcome"
        notes="The empirical conclusion is narrow and design-specific: the intended security quantity is not identifiable under these stimuli. Do not say that adversarial intent does not exist or that the model contains no relevant information."
      />

      {/* ── 8 · Verdict ──────────────────────────────────────────── */}
      <Slide center nav="BC1 fails" notes="AUC 0.000 and 1.000 are equally perfect discrimination after orientation; BC1 is evaluated by distance from chance. Keep the encoding panel explicitly labeled as supporting sensitivity evidence, not the amended hard-gate scope.">
        <p className="kicker" style={{ marginInline: 'auto' }}>Level 0 · criterion outcome</p>
        <h2 className="headline" style={{ marginInline: 'auto' }}>
          The neutral-intent null remained separable.
        </h2>
        <div style={{ maxWidth: '56rem', marginInline: 'auto' }}>
          <StatGrid
            stats={[
              { value: 'FAIL', label: 'BC1 decision', caption: 'null AUC exceeded the ±0.03 tolerance' },
              { value: '0.50', label: 'Distance from chance', caption: 'perfect discrimination after orientation' },
              { value: <CountUp to={7} suffix=" / 8" />, label: 'Encoding variants at AUC 1.000', caption: 'supporting sensitivity result at layer 25' },
              { value: 'neutral', label: 'Routing intent', caption: 'held fixed in both null classes' },
            ]}
          />
        </div>
        <Build at={1}>
          <p className="lead" style={{ marginInline: 'auto', fontSize: '94%' }}>
            Under this experimental design, the observed probe discrimination cannot be
            uniquely attributed to adversarial intent.
          </p>
        </Build>
        <Build at={2}>
          <p className="subhead" style={{ marginInline: 'auto', fontSize: '94%' }}>
            The per-encoding-variant results reinforce the sensitivity to stimulus form;
            they are descriptive support, not the amended hard-gate determination.
          </p>
        </Build>
      </Slide>

      {/* ── 9 · Layerwise support ────────────────────────────────── */}
      <Slide nav="Null by layer" notes="This is a supporting Level-1 measurement. It shows persistent discriminability of the encoding-null labels, not that a specific surface mechanism has already been identified.">
        <p className="kicker">Supporting analysis · layerwise null separability</p>
        <h2 className="headline">The encoding-null labels remain discriminable throughout the residual stream.</h2>
        <p className="subhead" style={{ maxWidth: '52rem' }}>
          Mean distance from chance <span style={{ whiteSpace: 'nowrap', fontVariantNumeric: 'tabular-nums' }}>|AUC − 0.5|</span> across
          eight encoding variants. The chart localizes persistence and depth; it does not
          identify which nuisance component owns the variance.
        </p>
        <div style={{ maxWidth: '64rem', width: '100%', fontSize: '100%' }}>
          <BarChart
            data={[
              { label: 'L4', value: 0.402 },
              { label: 'L9', value: 0.497 },
              { label: 'L15', value: 0.449 },
              { label: 'L20', value: 0.258 },
              { label: 'L25', value: 0.483 },
              { label: 'L31', value: 0.343 },
            ]}
            height={280}
          />
        </div>
      </Slide>

      {/* ── 10 · Metric roles ────────────────────────────────────── */}
      <Steps
        kicker="Supporting metrics"
        title="Each analysis answers a different question exposed by BC1."
        nav="Metric roles"
        items={[
          {
            title: 'Null AUC and deviation from chance · Level 0',
            body: 'Applies the binary criterion: did the trained probe discriminate two classes with neutral routing intent?',
          },
          {
            title: 'Layerwise AUC, Fisher, Mahalanobis, normalized distance · Level 1',
            body: 'Characterize where the null is separable and whether apparent growth reflects activation scale, within-class spread, or scale-invariant geometry.',
          },
          {
            title: 'Crossed mixed-effects variance components · Level 1',
            body: 'Estimate how much observed variation in margin, displacement, and norm is associated with template identity, encoding variant, and residual variation — with intervals.',
          },
          {
            title: 'Random-direction comparisons · consistency check',
            body: 'Test whether trained-direction separation exceeds ambient high-dimensional geometry on the original labeled contrasts. This supports direction specificity, not restored intent identification.',
          },
          {
            title: 'LayerNorm and activation patching · Level 3',
            body: 'Ask whether the observed component is transformed or causally used in downstream computation. These analyses cannot repair a failed Level 0.',
          },
        ]}
        notes="This slide is the central metric audit. The audience should leave knowing which metric supports BC1 directly, which metrics characterize the failure, and which metrics ask downstream computational questions."
      />

      {/* ── 11 · Read the existing numbers correctly ────────────── */}
      <Contrast
        kicker="Existing run"
        title="Performance numbers do not all answer the same question."
        nav="Numbers placed"
        left={{
          label: 'Tempting reading',
          title: 'A high-performing security detector',
          points: [
            'Best-cell AUC 0.9999',
            'Selection-adjusted AUC 0.89',
            'Mean-pooled AUC 0.994',
          ],
        }}
        right={{
          label: 'Licensed reading',
          title: 'Structure, specificity, and utilization',
          points: [
            'BC1 fail — no adversarial-intent attribution under this design',
            'Level 1 — strong, persistent discriminative geometry',
            'Level 3 — limited downstream effect under the tested patching intervention',
          ],
        }}
        notes="Keep ‘limited downstream effect’ rather than ‘inert.’ A 14% flip rate is not zero, and the intervention is one operationalization of causal use. The main point is that separability and utilization are different estimands."
      />

      {/* ── 12 · Patching result ─────────────────────────────────── */}
      <BigNumber
        kicker="Supporting analysis · Level 3"
        value={<CountUp to={14} suffix="%" />}
        caption="of tested pairs changed output under the reported probe-direction patching intervention."
        foot="56 / 400 flips · 95% CI 11–18% · a causal-effect estimate for this intervention, not an intent-identification result"
        nav="Patching"
        notes="Do not call the feature inert. Say the tested intervention produced a limited but nonzero downstream effect. Under failed BC1, the effect concerns the surface/content-associated geometry characterized by the current stimuli, not adversarial intent."
      />

      {/* ── 13 · What remains unresolved ─────────────────────────── */}
      <Slide center nav="Open questions" notes="Transition from results to plan. Every month should answer one unresolved question, not merely execute a list of analyses.">
        <p className="kicker" style={{ marginInline: 'auto' }}>What BC1 leaves us with</p>
        <h2 className="headline" style={{ marginInline: 'auto' }}>
          Four questions now organize the research program.
        </h2>
        <div style={{ maxWidth: '58rem', marginInline: 'auto' }}>
          <StatGrid
            stats={[
              { value: '1', label: 'Why is the null separable?', caption: 'scale, template, variant, ambient geometry?' },
              { value: '2', label: 'What owns the variation?', caption: 'formal variance components with uncertainty' },
              { value: '3', label: 'Does the model use it?', caption: 'LayerNorm effects and controlled interventions' },
              { value: '4', label: 'How do we identify policy?', caption: 'cross surface form × downstream policy' },
            ]}
          />
        </div>
      </Slide>

      {/* ── 14 · Compact hierarchy ───────────────────────────────── */}
      <Steps
        kicker="Evidence architecture"
        title="Four questions, four mathematical objects."
        nav="Hierarchy"
        items={[
          { title: 'Level 0 · Identifiability — BC1', body: 'Is the intended quantity distinguishable under the design? A binary tolerance criterion determines whether attribution may proceed.' },
          { title: 'Level 1 · Statistical characterization — mixed effects, VPCs, Fisher, Mahalanobis', body: 'What observable structure exists, and how much is associated with nuisance factors? Estimates and intervals characterize the current data without semantic attribution.' },
          { title: 'Level 2 · Representational decomposition — dPCA, LEACE, INLP', body: 'Under a crossed design, can surface form, downstream policy, and their interaction be demixed or selectively erased?' },
          { title: 'Level 3 · Computational utilization — LayerNorm tests, patching, interventions', body: 'Does the model use the identified component in producing downstream computation or behavior?' },
        ]}
        notes="BC1 does not compete with dPCA or erasure. It determines whether those tools have a well-posed target. Mixed effects can characterize nuisance variation in Phase I; dPCA requires the V2 crossed design."
      />

      {/* ── 15 · Four-month plan ─────────────────────────────────── */}
      <Slide nav="Four months" notes="The timeline is organized by scientific questions. Phase I stays within claims licensed by the current data; the final month specifies and pilots the crossed design needed for Level 2.">
        <p className="kicker">Four-month research arc</p>
        <h2 className="headline">
          Explain the failure. Quantify the nuisance structure. Test use.{' '}
          <span className="accent-text">Build identification.</span>
        </h2>
        <div style={{ maxWidth: '58rem' }}>
          <Timeline
            items={[
              {
                time: 'Month 1 · Why is the null separable?',
                title: 'Scale and transformation diagnostics',
                body: 'Complete E1 LayerNorm and E3 scale-controlled geometry; report normalized centroid distance, Fisher ratio, and Mahalanobis distance across depth. Deliverable: mechanism-comparison memo and reproducible figures.',
              },
              {
                time: 'Month 2 · What owns the variation?',
                title: 'Crossed mixed-effects nuisance accounting',
                body: 'Fit per-observation probe margin, displacement, and activation norm with crossed effects for template/frame and encoding variant; report variance-partition coefficients and uncertainty. Extend E5 continuous geometry in raw residual space, with SAE corroboration.',
              },
              {
                time: 'Month 3 · Is the component used?',
                title: 'Targeted closure and causal utilization',
                body: 'Complete E6 abbreviation endpoint analysis; conditional on compute, run E2 ambient baseline and E7 controlled patching with random-direction, random-layer, and pre/post-LayerNorm controls. Deliverable: least-committal utilization assessment.',
              },
              {
                time: 'Month 4 · How do we identify policy?',
                title: 'Crossed V2 pilot and next-stage preregistration',
                body: 'Specify and pilot surface form × downstream policy stimuli, add action-space readouts, predefine dPCA marginalizations and LEACE/INLP erasure tests, and lock V1 positive control plus V3 cross-architecture replication criteria.',
              },
            ]}
          />
        </div>
      </Slide>

      {/* ── 16 · Milestones ──────────────────────────────────────── */}
      <Slide center nav="Milestones" notes="Make the plan assessable. These milestones are outputs and decision points, not promises of a positive result.">
        <p className="kicker" style={{ marginInline: 'auto' }}>Completion criteria</p>
        <h2 className="headline" style={{ marginInline: 'auto' }}>
          Four months produce four decision-ready artifacts.
        </h2>
        <div style={{ maxWidth: '58rem', marginInline: 'auto' }}>
          <StatGrid
            stats={[
              { value: 'M1', label: 'Geometry report', caption: 'scale-controlled effects, LayerNorm response, uncertainty' },
              { value: 'M2', label: 'Variance report', caption: 'template / variant / residual VPCs with intervals' },
              { value: 'M3', label: 'Utilization report', caption: 'controlled patching and ambient baseline, compute permitting' },
              { value: 'M4', label: 'V2 protocol', caption: 'crossed pilot, estimands, preregistration-ready analysis plan' },
            ]}
          />
        </div>
        <Build at={1}>
          <p className="subhead" style={{ marginInline: 'auto' }}>
            Negative, null, or unresolved outcomes remain valid deliverables; the criterion is
            whether each question is answered at the level the design permits.
          </p>
        </Build>
      </Slide>

      {/* ── 17 · Closer ──────────────────────────────────────────── */}
      <Slide center nav="The result" notes="End with the scientific discipline demonstrated by the project: the null changed the claim and generated a sharper research program.">
        <Reveal>
          <h2 className="display" style={{ marginInline: 'auto' }}>
            BC1 blocked the intended attribution.
          </h2>
        </Reveal>
        <Build at={1}>
          <h2 className="display" style={{ marginInline: 'auto' }}>
            The remaining metrics explain the observed geometry —{' '}
            <span className="accent-text">not adversarial intent.</span>
          </h2>
        </Build>
        <Build at={2}>
          <h2 className="display" style={{ marginInline: 'auto' }}>
            The next four months turn that failure into an identifiable experiment.
          </h2>
        </Build>
        <p
          className="kicker"
          style={{ marginInline: 'auto', marginTop: '2.75rem', opacity: 0.55 }}
        >
          © Katherine Ombrellaro 2026
        </p>
      </Slide>
    </Deck>
  );
}
