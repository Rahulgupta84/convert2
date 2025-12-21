# Branch Protection Rules for Default Branch

These settings must be configured manually in GitHub repository settings.

> **Note:** Your default branch is `master`. You may want to rename it to `main`:
> ```bash
> git branch -m master main
> git push -u origin main
> # Then set main as default in GitHub Settings > Branches
> ```

## How to Configure

1. Go to your repository on GitHub
2. Click **Settings** > **Branches**
3. Click **Add branch protection rule**
4. Enter `master` (or `main` if renamed) as the branch name pattern
5. Configure the following settings:

## Required Settings

### Protect matching branches

- [x] **Require a pull request before merging**
  - [x] Require approvals: `1`
  - [x] Dismiss stale pull request approvals when new commits are pushed
  - [x] Require review from Code Owners
  - [x] Require approval of the most recent reviewable push

- [x] **Require status checks to pass before merging**
  - [x] Require branches to be up to date before merging
  - Required status checks:
    - `Lint`
    - `Unit Tests`
    - `E2E Tests`
    - `Build`

- [x] **Require conversation resolution before merging**

- [x] **Do not allow bypassing the above settings**

### Rules applied to everyone including administrators

- [x] **Restrict who can push to matching branches**
  - Only allow merges via pull requests

### Optional (Recommended)

- [x] **Require signed commits** (if you use GPG signing)
- [x] **Require linear history** (prevents merge commits, enforces rebase/squash)
- [ ] **Allow force pushes** - Keep DISABLED
- [ ] **Allow deletions** - Keep DISABLED

## Repository Settings

Also configure these in **Settings** > **General**:

### Pull Requests
- [x] Allow squash merging
- [x] Default to pull request title for squash merge commits
- [ ] Allow merge commits (disable for cleaner history)
- [ ] Allow rebase merging (optional)
- [x] Always suggest updating pull request branches
- [x] Automatically delete head branches

## Quick Setup via GitHub CLI

If you have the GitHub CLI installed, you can run:

```bash
# Enable branch protection (basic)
gh api repos/{owner}/{repo}/branches/main/protection \
  -X PUT \
  -H "Accept: application/vnd.github+json" \
  -f required_status_checks='{"strict":true,"contexts":["Lint","Unit Tests","E2E Tests","Build"]}' \
  -f enforce_admins=true \
  -f required_pull_request_reviews='{"dismiss_stale_reviews":true,"require_code_owner_reviews":true,"required_approving_review_count":1}' \
  -f restrictions=null
```

Replace `{owner}` and `{repo}` with your GitHub username and repository name.
