# Contributing

Discuss significant architecture changes in an issue before implementation. Keep simulated and real capabilities clearly distinguished. Include rationale, API/schema changes, relevant verification and privacy/cost implications in pull requests. Never commit keys, tokens, model weights or production records. Preserve stable agent IDs and backward-compatible trace readers.

Use Node 22.13+ and the package manager pinned in package.json. Run the engine test, TypeScript check and build before submitting code. New protocol integrations need official SDK interoperability tests. New real agents need independent task acceptance tests, not only prompt snapshots.
