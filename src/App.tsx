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
   The next experiment begins there. · © Katherine Ombrellaro 2026
   ══════════════════════════════════════════════════════════════════════ */


type AnalyticalPane = {
  value: ReactNode;
  label: string;
  caption: string;
};

function AnalyticalPaneRow({
  stats,
  columns,
}: {
  stats: AnalyticalPane[];
  columns: 3 | 4;
}) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
        gap: '1rem',
        width: '100%',
      }}
    >
      {stats.map((stat, index) => (
        <div
          key={`${stat.label}-${index}`}
          style={{
            minWidth: 0,
            minHeight: columns === 4 ? '9.5rem' : '10.5rem',
            padding: columns === 4 ? '1.15rem 1rem' : '1.4rem 1.3rem',
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
              fontSize: columns === 4 ? '1.8rem' : '2.15rem',
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
              fontSize: columns === 4 ? '0.9rem' : '1rem',
              lineHeight: 1.2,
              fontWeight: 650,
              marginBottom: '0.55rem',
            }}
          >
            {stat.label}
          </div>
          <div
            style={{
              fontSize: columns === 4 ? '0.74rem' : '0.82rem',
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
        foot="© Katherine Ombrellaro 2026 · Maritime Intent Probe · post–Amendment 2 exploratory analyses"
        notes="This is a research-plan discussion anchored in the BC1 outcome. Keep three claims separate: BC1 blocks attribution to adversarial intent under the current design; supporting analyses characterize what remains measurable; the four-month plan develops the next estimands and designs."
      />

      {/* ── 2 · Thesis ───────────────────────────────────────────── */}
      <Slide center nav="Thesis" notes="Lead with the decision consequence, not the headline AUC. The current data remain useful, but only for narrower questions than the preregistered semantic claim.">
        <h2 className="headline" style={{ marginInline: 'auto', fontSize: '96%' }}>
          The probe learned something.
          <br />
          BC1 shows we cannot attribute it to{' '}
          <span className="accent-text">adversarial intent.</span>
        </h2>
        <Build at={1}>
          <p className="lead" style={{ marginInline: 'auto' }}>
            Two prompt sets with no adversarial intent in either remain separable well
            beyond the preregistered BC1 tolerance.
          </p>
        </Build>
        <Build at={2}>
          <p className="subhead" style={{ marginInline: 'auto' }}>
            Phase I therefore characterizes the resulting geometry; Phase II builds the
            crossed design required to separate the intended factor from its competitors.
          </p>
        </Build>
      </Slide>

      {/* ── 2.5 · Why this matters ───────────────────────────── */}
      <Slide center nav="Why BC1 matters" notes="Frame this as methodology, not apology. The order of operations — identifiability before interpretation — is the contribution the project defends regardless of the gate outcome. Do not preview the FAIL here; let the design slides earn it.">
        <p className="kicker" style={{ marginInline: 'auto' }}>Why this matters</p>
        <h2 className="headline" style={{ marginInline: 'auto', fontSize: '96%' }}>
          Experimental identification comes before mechanistic interpretation.
        </h2>
        <div style={{maxWidth:'56rem', marginInline:'auto'}}>
          <ul className="lead">
            <li><strong>Performance is not meaning.</strong></li>
            <li><strong>Meaning requires identification.</strong></li>
            <li><strong>BC1 tests identification before interpretation.</strong></li>
          </ul>
        </div>
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
            body: 'One member uses adversarial phrasing of neutral maritime-routing concepts; the companion uses neutral operational language. Turn counts are matched under the OSF Preregistration Amendment (Amendment 2, 2026-06-19). Fragmentation, semantic substitution, and priming comprise the three excl-encoding hard-gate null components. Template content and surprisal remain intentionally unmatched and are explicitly characterized rather than treated as controlled.',
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
        <h2 className="headline" style={{ marginInline: 'auto', fontSize: '96%' }}>
          Stimulus changes. Target intent does not. Representation is measured.
        </h2>
        <div style={{ maxWidth: '58rem', marginInline: 'auto' }}>
          <AnalyticalPaneRow
            columns={3}
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
        <h2 className="headline" style={{ marginInline: 'auto', fontSize: '96%' }}>
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
      <Slide center nav="BC1 fails" notes="AUC 0.000 and 1.000 are equally perfect discrimination after orientation; BC1 is evaluated by distance from chance. Keep the encoding panel explicitly labeled as supporting sensitivity evidence. The hard gate is the excl-encoding fragmentation/semantic/priming null. ">
        <p className="kicker" style={{ marginInline: 'auto' }}>Level 0 · criterion outcome · Pythia-6.9B</p>
        <h2 className="headline" style={{ marginInline: 'auto', fontSize: '96%' }}>
          The neutral-intent null remained separable.
        </h2>
        <div style={{ maxWidth: '56rem', marginInline: 'auto' }}>
          <AnalyticalPaneRow
            columns={4}
            stats={[
              { value: 'FAIL', label: 'BC1 hard gate', caption: 'excl-encoding null exceeded the ±0.03 tolerance' },
              { value: '0.347', label: 'Worst deviation', caption: 'worst hard-gate AUC was 0.8472' },
              { value: <CountUp to={8} suffix=" / 8" />, label: 'Encoding variants at AUC 1.000', caption: 'supporting sensitivity analysis; non-gating' },
              {
                value: (
                  <span style={{ fontSize: '1.05rem', lineHeight: 1.2, display: 'inline-block' }}>
                    OSF Preregistration Amendment
                  </span>
                ),
                label: 'Structural audit completed',
                caption: 'turn-count parity • source-family balance • source-class isolation · 2026-06-19',
              },
            ]}
          />
        </div>
        <Build at={1}>
          <p className="lead" style={{ marginInline: 'auto', fontSize: '94%' }}>
            Under this experimental design, the observed probe discrimination cannot be
            uniquely attributed to adversarial intent. The same qualitative BC1 outcome is
            observed in analyses of the 6.9B and 1.4B parameter models.
          </p>
        </Build>
        <Build at={2}>
          <p className="subhead" style={{ marginInline: 'auto', fontSize: '94%' }}>
            The encoding variants reinforce sensitivity to stimulus form, while the
            excl-encoding failure shows that the hard-gate result is not driven by encoding alone.
          </p>
        </Build>
      </Slide>

      {/* ── 9 · Layerwise support ────────────────────────────────── */}
      <Slide nav="Null by layer" notes="This is the encoding-class isolation diagnostic — a per-layer supporting scan, distinct from the pre-registered hard gate reported on the verdict slide (worst AUC 0.8472). Do not present these bars as the gate itself; the notebook validator explicitly warns against conflating the two.">
        <p className="kicker">Encoding-class isolation diagnostic · excl-encoding null by layer · Pythia-6.9B</p>
        <h2 className="headline" style={{ fontSize: '96%' }}>The excl-encoding neutral-intent null remains outside tolerance across depth.</h2>
        <p className="subhead" style={{ maxWidth: '52rem' }}>
          Distance from chance <span style={{ whiteSpace: 'nowrap', fontVariantNumeric: 'tabular-nums' }}>|AUC − 0.5|</span> for the
          fragmentation, semantic, and priming excl-encoding null — a supporting per-layer scan,
          reported alongside the hard gate. Every scanned layer exceeds
          the pre-registered 0.03 tolerance.
        </p>
        <p className="subhead" style={{ maxWidth: '52rem', fontSize: '88%', opacity: 0.7 }}>
          Two related but distinct numbers: the pre-registered hard-gate worst deviation is{' '}
          <span style={{ fontVariantNumeric: 'tabular-nums' }}>0.347</span>; this per-layer
          diagnostic peaks at <span style={{ fontVariantNumeric: 'tabular-nums' }}>0.3884</span>{' '}
          (L4). The scan characterizes depth structure; it is not the gate statistic.
        </p>
        <div style={{ maxWidth: '64rem', width: '100%', fontSize: '100%' }}>
          <BarChart
            data={[
              { label: 'L4', value: 0.3884 },
              { label: 'L9', value: 0.0944 },
              { label: 'L15', value: 0.0972 },
              { label: 'L20', value: 0.1272 },
              { label: 'L25', value: 0.1048 },
              { label: 'L31', value: 0.2124 },
            ]}
            height={280}
          />
        </div>
        <p className="subhead" style={{ maxWidth: '52rem', fontSize: '94%' }}>
          In the 1.4B model the excl-encoding null likewise exceeds tolerance at every reported
          scanned layer (hard-gate worst deviation 0.339), though the depth profile differs.
        </p>
      </Slide>

      {/* ── 10 · Metric roles ────────────────────────────────────── */}
      <Steps
        kicker="Supporting metrics"
        title="Each analysis answers a different question exposed by BC1."
        nav="Metric roles"
        items={[
          {
            title: 'BC1 · Can the probe distinguish the neutral null?',
            body: 'Applies the binary criterion: did the trained probe discriminate two classes with neutral routing intent?',
          },
          {
            title: 'Geometry · Where does the separation appear?',
            body: 'Characterize where the null is separable and whether separation survives length matching, normalization, and random-direction controls across model scales.',
          },
          {
            title: 'Variation · What explains the separation?',
            body: 'Estimate how much observed variation in margin, displacement, and norm is associated with template identity, encoding variant, and residual variation — with intervals.',
          },
          {
            title: 'Specificity · Is the learned direction special?',
            body: 'Test whether trained-direction separation exceeds ambient high-dimensional geometry on the original labeled contrasts. This supports direction specificity, not restored intent identification.',
          },
          {
            title: 'Use · Does the model use the representation?',
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
            'Excl-encoding worst AUC 0.8472',
            '8 / 8 encoding variants at AUC 1.000',
            'Surface-geometry AUC 0.76–1.00 across classes',
          ],
        }}
        right={{
          label: 'Licensed reading',
          title: 'Structure, specificity, and utilization',
          points: [
            'BC1 fail — consistent at 6.9B and 1.4B parameters',
            'Level 1 — persistent geometry',
            'Level 3 — limited downstream utilization',
          ],
        }}
        notes="Keep ‘limited downstream effect’ rather than ‘inert.’ A 14% flip rate is not zero, and the intervention is one operationalization of causal use. The main point is that separability and utilization are different estimands."
      />

      {/* ── 12 · Patching result ─────────────────────────────────── */}
      <BigNumber
        kicker="Supporting analysis · Level 3 · Pythia-6.9B"
        value={<CountUp to={14} suffix="%" />}
        caption="of tested pairs changed output under the reported probe-direction patching intervention."
        foot="56 / 400 flips · mean causal rate 14% · 6.9B model · a causal-effect estimate from a failed-gate diagnostic state, not an intent-identification result"
        nav="Patching"
        notes="Do not call the feature inert. Say the tested intervention produced a limited but nonzero downstream effect. Under failed BC1, the effect concerns the surface/content-associated geometry characterized by the current stimuli, not adversarial intent."
      />

      {/* ── 13 · What remains unresolved ─────────────────────────── */}
      <Slide center nav="Open questions" notes="Transition from results to plan. Every month should answer one unresolved question, not merely execute a list of analyses.">
        <p className="kicker" style={{ marginInline: 'auto' }}>What BC1 leaves us with</p>
        <h2 className="headline" style={{ marginInline: 'auto', fontSize: '96%' }}>
          Four questions now organize the research program.
        </h2>
        <div style={{ maxWidth: '58rem', marginInline: 'auto' }}>
          <AnalyticalPaneRow
            columns={4}
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
        title="Four questions. Four kinds of evidence. Only one permits attribution."
        nav="Hierarchy"
        items={[
          { title: 'Level 0 · Identifiability — BC1', body: 'Is the intended quantity distinguishable under the design? A binary tolerance criterion determines whether attribution may proceed.' },
          { title: 'Level 1 · Characterization', body: 'What observable structure is present? Statistical models quantify nuisance variation without supporting semantic attribution.' },
          { title: 'Level 2 · Separation', body: 'Under an identifiable crossed design, can surface form and downstream policy be separated?' },
          { title: 'Level 3 · Use', body: 'Does downstream computation depend on the identified representation?' },
        ]}
        notes="BC1 does not compete with dPCA or erasure. It determines whether those tools have a well-posed target. Mixed effects can characterize nuisance variation in Phase I; dPCA requires the V2 crossed design."
      />

      {/* ── 15 · Four-month plan ─────────────────────────────────── */}
      <Slide nav="Four months" notes="The timeline is organized by scientific questions. Phase I stays within claims licensed by the current data; the final month specifies and pilots the crossed design needed for Level 2.">
        <p className="kicker">Four-month research arc</p>
        <h2 className="headline" style={{ fontSize: '96%' }}>
          Explain the failure. Quantify the nuisance structure. Test use.{' '}
          <span className="accent-text">Build identification.</span>
        </h2>
        <div style={{ maxWidth: '58rem' }}>
          <Timeline
            items={[
              {
                time: 'Month 1 · Why is the null separable?',
                title: 'Why is the null separable?',
                body: 'Extend the completed structural audit with surprisal diagnostics and explicit unmatched-content limits. Then complete E1 LayerNorm and E3 scale-controlled geometry. Deliverable: construction-and-mechanism memo with reproducible figures.',
              },
              {
                time: 'Month 2 · What owns the variation?',
                title: 'What explains the observed variation?',
                body: 'Fit per-observation probe margin, displacement, and activation norm with crossed effects for template/frame and encoding variant; report variance-partition coefficients and uncertainty. Extend E5 continuous geometry in raw residual space, with SAE corroboration.',
              },
              {
                time: 'Month 3 · Is the component used?',
                title: 'Does the model use this representation?',
                body: 'Complete E6 abbreviation endpoint analysis; conditional on compute, run E2 ambient baseline and E7 controlled patching with random-direction, random-layer, and pre/post-LayerNorm controls. Deliverable: least-committal utilization assessment.',
              },
              {
                time: 'Month 4 · How do we identify policy?',
                title: 'Build an identifiable experiment',
                body: 'Specify and pilot surface form × downstream policy stimuli, add action-space readouts, predefine dPCA marginalizations and LEACE/INLP erasure tests, and lock V1 positive control plus V3 cross-architecture replication criteria.',
              },
            ]}
          />
        </div>
      </Slide>

      {/* ── 16 · Milestones ──────────────────────────────────────── */}
      <Slide center nav="Milestones" notes="Make the plan assessable. These milestones are outputs and decision points, not promises of a positive result.">
        <p className="kicker" style={{ marginInline: 'auto' }}>Completion criteria</p>
        <h2 className="headline" style={{ marginInline: 'auto', fontSize: '96%' }}>
          Four months produce four decision-ready artifacts.
        </h2>
        <div style={{ maxWidth: '58rem', marginInline: 'auto' }}>
          <AnalyticalPaneRow
            columns={4}
            stats={[
              { value: 'M1', label: 'Cross-scale geometry report', caption: '6.9B vs 1.4B depth-fraction-aligned comparison · LayerNorm response · uncertainty' },
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
      <Slide center nav="The result" notes="End with the scientific discipline demonstrated by the project: the null changed the claim and generated a sharper research program. Say ‘characterize’, not ‘explain’ — the M1/M2 deliverables are what would earn ‘explain’. The only cross-scale claim licensed today is that the gate outcome replicates; the depth profiles differ and the depth-fraction-aligned geometry comparison is pending (see backup B1).">
        <Reveal>
          <h2 className="display" style={{ marginInline: 'auto', maxWidth: '24ch', fontSize: 'clamp(2.25rem, 4.5vw, 3.8rem)', lineHeight: 1.02 }}>
            BC1 blocked the intended attribution.
          </h2>
        </Reveal>
        <Build at={1}>
          <h2 className="display" style={{ marginInline: 'auto', maxWidth: '24ch', fontSize: 'clamp(2.25rem, 4.5vw, 3.8rem)', lineHeight: 1.02 }}>
            The remaining analyses characterize{' '}
            <span className="accent-text">what the experiment measured</span>—
            not what it was intended to measure.
          </h2>
        </Build>
        <Build at={2}>
          <h2 className="display" style={{ marginInline: 'auto', maxWidth: '24ch', fontSize: 'clamp(2.25rem, 4.5vw, 3.8rem)', lineHeight: 1.02 }}>
            Experimental identification comes before mechanistic interpretation.
          </h2>
        </Build>
        <p
          className="kicker"
          style={{ marginInline: 'auto', marginTop: '1.5rem', opacity: 0.55 }}
        >
          © Katherine Ombrellaro 2026
        </p>
      </Slide>

      {/* ── B1 · Backup: 1.4B replication ────────────────────────── */}
      <Slide center nav="Backup · 1.4B" notes="Backup only — not canonical presentation values. The gate outcome replicates at 1.4B (FAIL, worst deviation 0.339 vs 0.347 at 6.9B), but the layerwise depth profile differs: 1.4B rises with depth; 6.9B peaks at the earliest scanned layer. Claim the outcome, not the profile. Layerwise chart pending the final two scan-layer values from the run log.">
        <p className="kicker" style={{ marginInline: 'auto' }}>
          Backup · Pythia-1.4B run · not canonical presentation values
        </p>
        <h2 className="headline" style={{ marginInline: 'auto', fontSize: '96%' }}>
          The BC1 outcome replicates at 1.4B; the depth profile does not.
        </h2>
        <div style={{ maxWidth: '58rem', marginInline: 'auto' }}>
          <AnalyticalPaneRow
            columns={4}
            stats={[
              { value: 'FAIL', label: 'BC1 hard gate', caption: 'excl-encoding worst AUC 0.8392 · deviation 0.339 (6.9B: 0.347)' },
              { value: '0.3500', label: 'Isolation diagnostic worst', caption: 'excl-encoding null AUC 0.8500 · supporting, non-gating' },
              { value: '0 / 300', label: 'Turn-count mismatches', caption: 'structural parity holds · n=100 per source class' },
              { value: 'differs', label: 'Depth profile', caption: 'rises with depth at 1.4B; 6.9B peaks at the earliest scanned layer' },
            ]}
          />
        </div>
        <Build at={1}>
          <p className="subhead" style={{ marginInline: 'auto', fontSize: '94%' }}>
            Every reported scanned layer exceeds the ±0.03 tolerance in both models. Cross-scale
            geometry comparison awaits the depth-fraction-aligned analysis; no geometry claim is
            made here.
          </p>
        </Build>
        {/*
          TODO(Katherine): 1.4B layerwise diagnostic chart — blocked on run-log values.
          Confirmed from screenshot (excl-encoding isolation diagnostic, null AUC per layer):
            blocks.3  → 0.6092  (deviation 0.1092)
            blocks.7  → 0.7448  (deviation 0.2448)
            blocks.11 → 0.8332  (deviation 0.3332)
            blocks.15 → 0.80…   (TRUNCATED in screenshot — confirm exact value)
            blocks.19 → ______  (pull from run log; depth-matched scan)
            blocks.23 → ______  (pull from run log; depth-matched scan)
          Note: diagnostic worst is 0.8500, which matches none of the four visible layers,
          so the worst layer is one of the truncated/missing entries. Do not chart until
          all six values are confirmed. Then mirror slide 9's BarChart with |AUC − 0.5|:

          <div style={{ maxWidth: '64rem', width: '100%' }}>
            <BarChart
              data={[
                { label: 'L3',  value: 0.1092 },
                { label: 'L7',  value: 0.2448 },
                { label: 'L11', value: 0.3332 },
                { label: 'L15', value: 0 },   // TODO
                { label: 'L19', value: 0 },   // TODO
                { label: 'L23', value: 0 },   // TODO
              ]}
              height={280}
            />
          </div>
        */}
      </Slide>

      {/* ── B2 · Backup: which generator leaks ───────────────────── */}
      <Slide center nav="Backup · Leak by class" notes="Backup only · Pythia-6.9B. Two distinct analyses on this slide — keep them separate when speaking. The AUC/deviation numbers are the hard gate decomposed by source class (BC1 null pairs). The length-attribution shares come from the separate NON-GATING Tier-1 decomposition of the adv_full vs adv_surface contrast in norm-controlled space; they characterize the leak route, not the gate itself. Fragmentation separates anti-oriented (AUC 0.2318, below chance before orientation). Separability survives length matching in all three classes, so length is a partial route for priming, not the whole story anywhere.">
        <p className="kicker" style={{ marginInline: 'auto' }}>
          Backup · Pythia-6.9B · hard gate by source class + leak route
        </p>
        <h2 className="headline" style={{ marginInline: 'auto', fontSize: '96%' }}>
          Which generator leaks — and by what route.
        </h2>
        <div style={{ maxWidth: '58rem', marginInline: 'auto' }}>
          <AnalyticalPaneRow
            columns={3}
            stats={[
              {
                value: '1.0000',
                label: 'Semantic · AUC (dev 0.5000)',
                caption: 'n=17 · 0% length-attributable in the non-gating decomposition · survives length matching',
              },
              {
                value: '0.9961',
                label: 'Priming · AUC (dev 0.4961)',
                caption: 'n=16 · 54–78% length-attributable, rising with depth · survives length matching',
              },
              {
                value: '0.2318',
                label: 'Fragmentation · AUC (dev 0.2682)',
                caption: 'n=17 · anti-oriented separation · 0% length-attributable · survives length matching',
              },
            ]}
          />
        </div>
        <Build at={1}>
          <p className="subhead" style={{ marginInline: 'auto', fontSize: '94%' }}>
            AUC and deviation decompose the pre-registered hard gate by source class. Length
            attribution comes from the separate non-gating adv_full vs adv_surface decomposition
            in norm-controlled space — a leak-route characterization, not a gate result. Different
            generators leak by different routes; this directly seeds Month 1.
          </p>
        </Build>
      </Slide>
    </Deck>
  );
}
