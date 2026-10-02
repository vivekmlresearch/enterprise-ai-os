# Sixteen-week delivery plan

Planning assumption: a dedicated team of one technical lead, two backend/ML engineers, one frontend engineer, one QA/evaluation engineer, and a half-time security/platform specialist. Schedules use relative weeks from kickoff. This is a proposed schedule; staffing, approvals and provider access are not confirmed. A solo implementation will take longer; re-estimate using actual velocity.

| Phase | Weeks | Owner | Deliverables | Dependencies | Exit criteria |
|---|---|---|---|---|---|
| Foundation baseline | Weeks 1–2 | Technical lead + PM | Scope, role contracts, threat model, baseline dataset, ADRs | Stakeholder access | Approved scope; 50 representative acceptance tasks; named risk owners |
| Real agent vertical slice | Weeks 3–4 | ML/backend lead | 5–10 model-backed roles, schemas, provider adapter, timeouts | Provider credentials and budget | Independent rubric runs; no template outputs reported as reasoning |
| Durable execution and data | Weeks 5–6 | Backend/platform lead | Task DAG, queue/workflow service, PostgreSQL events, retries, cancellation | Role contract, hosting decision | Crash recovery and duplicate-delivery tests; stable run IDs |
| Security and tool access | Weeks 7–8 | Security lead | OIDC, RBAC/ABAC, tenant isolation, official MCP SDK, tool sandbox, approvals | Identity provider, durable state | Cross-tenant negative tests; unauthorized writes denied; secret handling reviewed |
| Quality and cost controls | Weeks 9–10 | Evaluation lead | Grounding checks, adversarial suite, token budgets, traces, quality/cost dashboard | Live models and tools | Held-out acceptance threshold agreed; complete per-run spend records |
| Measured pilot | Weeks 11–12 | Product + program lead | Matched task study, feedback, accessibility fixes | Security and quality gates | Baseline comparison; 25% speed target assessed; no acceptance degradation |
| Scale and optional protocols | Weeks 13–14 | Platform lead | Multi-worker load tests, 1,000-role configuration test; A2A proof of concept; UCP sandbox if commerce is approved | Pilot gate, merchant sandbox | Load report with actual concurrency, latency, failures and costs; no unsupported scale claim |
| Release readiness | Weeks 15–16 | Program + SRE lead | Runbooks, backup restore, rollback, incident drills, documentation | Closure of critical risks | Recovery drill; acceptance sign-off; operating budget and ownership assigned |

Staffing availability is a schedule risk. Baseline delivery spans weeks 1–16; reserve weeks 17–18 for contingency.

## Critical path

Scope and credentials → real model role contracts → durable task state → identity/tool controls → evaluations → pilot → scale validation → release. A2A/UCP must not block the core AI/software pilot and can be deferred when commerce is outside scope.

## Governance and cadence

Weekly: milestone progress, dependency aging, budget burn, risk log and demo. Twice weekly: interface contract and integration review. At phase exit: evidence-based go/no-go. Track blocked days, reopened defects, task acceptance, actual vs planned effort and forecast completion. PM owns product outcomes; TPM owns dependencies/schedule; engineering owns technical acceptance; security owns security review.

## Risk register

| Risk | Likelihood / impact | Mitigation | Owner |
|---|---|---|---|
| Provider/identity credentials delayed | Medium / high | Start acquisition in week 1; keep deterministic tests | TPM |
| Poor model quality | High / high | Held-out evaluation, escalation to human reviewer | ML lead |
| Tool injection / data exposure | High / high | Restricted tools, explicit policy checks, adversarial tests | Security lead |
| Queue retries duplicate writes | Medium / high | Idempotency keys, leases, transactional state | Backend lead |
| Cost grows with loops | High / high | Token/task limits, termination rules, cost per accepted task | Platform lead |
| Scope creep toward 1,000 live processes | High / medium | Separate role count, workers and loaded models | Technical lead |
| Holiday capacity loss | High / medium | Reserve contingency; defer optional adapters | TPM |

## Budget and change control

Set a pilot spend ceiling before enabling paid inference. Forecast labor from actual assigned capacity, not registry size. A change needs impact on scope, critical path, security and operating cost, plus a revised milestone baseline. Release claims require a linked test report.

