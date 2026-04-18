---
name: flow-diagram-ai
description: "Generate, update, normalize, and validate VisioLogic dashboard snapshot JSON for architecture diagrams. Use when: creating architecture diagrams, visualizing system topology, generating flow diagrams, bootstrapping a diagram dashboard project, repairing snapshot JSON."
argument-hint: "Describe the architecture or paste existing JSON to diagram"
---

# Flow Diagram AI

Generate one valid dashboard snapshot JSON for the VisioLogic mock dashboard, or
materialize a ready local dashboard project from the bundled starter.

## Execution modes

Choose the mode from the user's request before doing any work.

### 1. JSON-only mode

Use this when the user asks only for a snapshot, schema repair,
normalization, or raw JSON output.

Expected result:

- one valid JSON object;
- optional validation report if requested.

### 2. Ready-project mode

Use this when the user asks for:

- a folder or path such as `flow-diagram`, `diagram/`, or `output/...`;
- a ready project, starter, app, or dashboard to open locally;
- something "funcional", "pronto para abrir", "pronto para rodar", or similar.

Expected result:

- generate the snapshot JSON;
- create the target folder from [starter/dashboard-frontend](./starter/dashboard-frontend);
- write the generated snapshot into the starter's canonical path
  (`src/components/mockups/arch-dashboard/infrastructure/mock/dashboard-snapshot.json`);
- keep a copy of the generated JSON at the project root for easy inspection.

## Workflow

1. Extract the architecture from the user input:
   - nodes/components
   - directed connections between nodes
   - endpoints owned by each node
   - top-level metadata for the diagram

2. Read [references/snapshot-spec.md](./references/snapshot-spec.md) for the exact schema,
   allowed enums, layout rules, ID conventions, and validation checklist.

3. When creating a new file from scratch, start from
   [assets/dashboard-snapshot.template.json](./assets/dashboard-snapshot.template.json).

4. In JSON-only mode, produce exactly one JSON object unless the user explicitly
   asks for explanation around it.

5. In ready-project mode:
   - Copy `starter/dashboard-frontend` to the target folder.
   - Write the snapshot JSON into `infrastructure/mock/dashboard-snapshot.json`.
   - Run `npm install` if the user explicitly asks.

6. Before finishing, validate:
   - Every node ID is unique.
   - Every connection ID is unique.
   - Every connection `from`/`to` points to an existing node.
   - Every node has an `endpointsByNode` entry (use `[]` when empty).
   - `analysis.stats` matches actual counts.

## Required output rules

- Keep `version` equal to `1`.
- Use only allowed node types and HTTP methods from the spec.
- Recalculate `analysis.stats` from the final JSON instead of guessing.
- If the snapshot is AI-generated, default `analysis.source` to `"ai"`.
- For a finished AI-generated import, default `meta.status` to `"analyzed"`.
- For an intentionally incomplete draft, use `meta.status` = `"draft"`.

## Layout rules

- Build the canvas left-to-right.
- Put entrypoints and clients on the left.
- Put services, queues, and workers in the middle.
- Put databases, caches, and external providers on the right.
- Keep enough spacing to avoid overlap.
- Prefer short connection labels: `HTTP`, `REST`, `gRPC`, `publish`, `consume`,
  `read`, `write`, `cache`, `sync`, `async`.

## Common tasks

- Create a new snapshot JSON from architecture text.
- Repair an invalid snapshot JSON so it imports correctly.
- Expand a minimal snapshot with endpoints, connections, and stats.
- Normalize naming, IDs, labels, and layout while keeping the same architecture.
- Bootstrap a ready-to-run dashboard starter from `starter/dashboard-frontend`.
