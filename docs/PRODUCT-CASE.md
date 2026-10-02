# Product case: enterprise AI coordination

## Problem and intended users

AI platform teams need to coordinate specialist workflows, inspect decisions, control tool permissions and measure quality/cost. The intended users are AI architects, engineering leads, data scientists, technical program managers and security reviewers. The prototype provides an inspectable portfolio surface; enterprise productivity gains have not been measured.

## Evidence available today

| Evidence | Result | Meaning and limit |
|---|---|---|
| Registered identities | 1,000 unique IDs | Logical simulated positions |
| Organization model | 100 titles / 10 departments / 10 teams each | Role taxonomy, not reasoning capability |
| Offline execution | 1,000 tasks completed in engine test | Scheduling correctness only |
| Peak workers | 32 at allocation of 1,000 | Request-local concurrency bound |
| Policy denial | 10/10 payment attempts blocked in test | Specific offline action, not broad safety coverage |
| TypeScript/build | Passed before portfolio release | Build correctness, not production readiness |
| LLM task quality | Not measured | No live models connected |

## Proposed outcomes and targets

| Outcome | Baseline to collect | Pilot target | Measurement |
|---|---|---|---|
| Faster analysis-to-review | Median elapsed time for comparable tasks | 25% reduction | Randomized matched task cohorts; include human review |
| Less coordination work | Human routing and status minutes per task | 30% reduction | Time logs and workflow event attribution |
| Better trace coverage | Share of runs with full required evidence | 95% | Mission, role, tool, model, policy and reviewer fields |
| Higher task acceptance | First-pass independent acceptance rate | At least 80%, with no degradation vs baseline | Held-out rubric; blinded reviewer |
| Controlled inference spend | Cost per independently accepted task | 20% reduction against single-model baseline | Tokens, retries, tools and human review cost |
| Recovery reliability | Lost/duplicate jobs under injected faults | Zero lost accepted jobs in test suite | Crash/restart and duplicate-delivery scenarios |

These figures are hypotheses and acceptance targets, not proven benefits or promises.

## Illustrative economic model

Assumptions: 50 users, 20 eligible tasks per user per month, 30 minutes baseline human effort per task, 25% reduction, $50 per hour loaded labor rate. Gross effort saving = 50 × 20 × 0.5 × 0.25 = 125 hours/month. Gross value = $6,250/month or $75,000/year.

Illustrative recurring costs: inference/tools $800/month + infrastructure/observability $300/month + maintenance and extra review $1,000/month = $2,100/month. Illustrative net capacity value = $4,150/month or $49,800/year. Against $30,000 one-time implementation cost, simple payback is approximately 7.2 months. Savings represent released capacity, not guaranteed payroll reduction; acquisition, compliance, taxes and training are excluded.

| Effort reduction | Saved hours/month | Gross value/month | Net value/month at $2,100 recurring cost |
|---|---:|---:|---:|
| 10% | 50 | $2,500 | $400 |
| 25% | 125 | $6,250 | $4,150 |
| 40% | 200 | $10,000 | $7,900 |

Break-even effort reduction = $2,100 / ($50 × 500 baseline hours) = 8.4%. Adoption, added review effort and quality failures can erase the modeled gain. Instrument those before asserting ROI.

## Validation plan

Collect two weeks of baseline tasks; classify task difficulty and sensitive-data constraints. Run a four-week pilot with 5–10 real roles and matched baseline tasks. Track median and p95 elapsed time, reviewer acceptance, corrections, per-task tokens/cost, unauthorized actions and human effort. Publish raw anonymized counts, formulas and uncertainty. Expand only after quality and security gates pass.

## Scope priorities

P0: real model adapter, tenant authorization, durable execution, tool permissions and independent evaluation. P1: budget controls, approvals, recovery, evidence/citations and searchable audit. P2: remote A2A and optional UCP merchant sandbox. Increasing the number of labels is not a product success metric.
