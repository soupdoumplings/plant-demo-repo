# Branch Strategy

## Naming Convention

```
feature/<developer-name>/<SCRUM-XXX>-<short-description>
```

### Examples
```
feature/ashwin/SCRUM-017-nextjs-scaffold
feature/alisha/SCRUM-030-navbar-component
feature/aman/SCRUM-028-database-seed
feature/prajina/SCRUM-019-nextjs-page-structure
```

## Workflow

1. Start from latest `main`
2. Create a feature branch per ticket
3. Complete the work
4. Commit with descriptive message
5. Push to remote
6. Move to next ticket

## Commit Messages

```
SCRUM-XXX: short description (max 7-8 words)
```

### Examples
```
SCRUM-017: setup next.js project scaffold
SCRUM-030: navbar html structure created
SCRUM-036: register page form and styling
```

## Rules

- One ticket = one branch
- Always branch from `main`
- Never stack tickets on one branch
- Push before starting next ticket
