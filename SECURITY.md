# Security policy

## Supported versions

The latest tagged release is supported.

## Reporting a vulnerability

Please do not open a public issue for a vulnerability that could expose local
files, credentials, session content or remote execution capability.

Use GitHub's **Report a vulnerability** flow in the repository Security tab.
Include the affected version, reproduction steps, impact, and any proposed fix.

Ordinary visual regressions and DSH compatibility bugs can use the public issue templates.

## Security boundary

Black Whale Lab is intended to be a browser-only presentation plugin. It must
not read session content, access credentials, make network requests, invoke a
model, or add Host-side behavior. A change crossing this boundary requires an
explicit security review and a major-version discussion.
