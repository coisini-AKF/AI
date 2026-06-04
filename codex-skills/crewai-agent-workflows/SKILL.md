---
name: crewai-agent-workflows
description: Use when the user wants multi-agent planning, role-based task decomposition, CrewAI-style agent workflows, or a plan for building/running CrewAI crews locally or in the cloud. Helps decide when CrewAI is appropriate, design agents/tasks, and prepare implementation without exposing secrets.
---

# CrewAI Agent Workflows

Use this skill when a task benefits from multiple specialized agents with clear roles, shared context, and sequential or hierarchical task execution.

## When To Use

- The user asks for CrewAI, crews, agents, multi-agent workflow, role-based agents, or task orchestration.
- The task has separable roles such as researcher, planner, builder, reviewer, tester, publisher.
- The user wants a repeatable workflow for content pipelines, software delivery, research, marketing, or automation.

Do not force CrewAI for simple one-shot coding tasks. Use ordinary implementation when a single agent can complete the work faster.

## Safe Operating Rules

- Do not ask the user to paste API keys, passwords, tokens, or OAuth secrets into chat.
- If CrewAI needs provider keys, ask the user to set environment variables locally or through the provider dashboard.
- Before installing CrewAI or running downloaded installers, explain the command and get explicit user confirmation.
- Prefer dry-run plans and repo-local examples before touching paid APIs.

## Crew Design Pattern

For each CrewAI workflow, define:

1. Goal: the measurable outcome.
2. Inputs: files, URLs, repo paths, user constraints, credentials required outside chat.
3. Agents: 2-5 roles maximum for most workflows.
4. Tasks: ordered, verifiable steps with expected outputs.
5. Tools: local shell, browser, GitHub, web research, file readers, or APIs.
6. Validation: tests, screenshots, link checks, linting, or human review.
7. Handoff: what the user must approve, deploy, publish, or pay for.

## Useful Agent Roles

- Researcher: gathers source material and market/technical context.
- Strategist: chooses positioning, scope, and execution order.
- Builder: edits files, writes code, creates content, or configures tools.
- Reviewer: checks risks, correctness, policy, SEO, UX, or security.
- Publisher: prepares GitHub commits, deployment steps, release notes, and follow-up tasks.

## Local CrewAI Setup Guidance

Official CrewAI docs recommend installing with `uv` and then installing the CrewAI CLI. On Windows, verify Python, `uv`, and build tool availability before attempting setup.

Typical flow, after user approval:

```powershell
powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"
uv tool install crewai
crewai --version
```

If local installation is not appropriate, use CrewAI cloud or keep the workflow as a Codex-managed multi-agent plan.

## Output Format

When designing a workflow, return:

- Crew goal
- Agent roles
- Task sequence
- Required permissions/accounts
- Validation plan
- What can be automated now versus what needs user action
