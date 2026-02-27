# Host E-Khanij App on GitHub – Credentials & Push

Follow these steps to update your Git credentials and push this project to your GitHub account.

---

## Step 1: Set your Git identity (name & email)

These are used for every commit. Use the **name and email** tied to your GitHub account (or any you prefer).

Open **PowerShell** or **Command Prompt** and run:

```bash
git config --global user.name "Your Full Name"
git config --global user.email "your.email@example.com"
```

Replace with your real name and the email linked to your GitHub account.

To check current values:

```bash
git config --global user.name
git config --global user.email
```

---

## Step 2: Choose how GitHub will verify you

GitHub no longer accepts account passwords for Git. You use one of these:

### Option A: HTTPS with Personal Access Token (PAT) – simpler

1. On GitHub: **Settings** → **Developer settings** → **Personal access tokens** → **Tokens (classic)**.
2. **Generate new token (classic)**. Name it (e.g. `EKhanij-Apps`), set expiry, and enable scope **repo**.
3. Copy the token and **save it somewhere safe** (you won’t see it again).
4. When you run `git push` and Git asks for a password, **paste this token** instead of your GitHub password.

To avoid typing it every time, you can cache it (Git will ask once, then reuse):

```bash
git config --global credential.helper store
```

After the first successful push, your token is stored in plain text in your user folder. Only use this on your own machine.

### Option B: SSH key – no password each time after setup

1. **Create an SSH key** (if you don’t have one):

   ```bash
   ssh-keygen -t ed25519 -C "your.email@example.com"
   ```

   Press Enter to accept the default path. Optionally set a passphrase.

2. **Add the key to the ssh-agent**:

   ```bash
   Get-Service ssh-agent | Set-Service -StartupType Manual
   Start-Service ssh-agent
   ssh-add $env:USERPROFILE\.ssh\id_ed25519
   ```

3. **Copy the public key** (to paste in GitHub):

   ```bash
   Get-Content $env:USERPROFILE\.ssh\id_ed25519.pub
   ```

4. On GitHub: **Settings** → **SSH and GPG keys** → **New SSH key**. Paste the key and save.

5. **Use the SSH repo URL** when adding the remote (see Step 4 below), e.g.:

   `git@github.com:YOUR_USERNAME/REPO_NAME.git`

---

## Step 3: Initialize the repo and make the first commit

In PowerShell, from the project folder:

```bash
cd "c:\Users\user\Desktop\EKhanij Apps"

git init
git add .
git status
git commit -m "Initial commit: E-Khanij 2.0 Exploration & Resource (web + mobile)"
```

---

## Step 4: Create the repo on GitHub and push

1. **Create a new repository on GitHub**
   - Go to [github.com/new](https://github.com/new).
   - Repository name: e.g. `EKhanij-Apps` or `ekhanij-exploration`.
   - Leave “Add a README” **unchecked** (you already have files).
   - Create the repository.

2. **Add the remote and push**

   Replace `YOUR_USERNAME` and `REPO_NAME` with your GitHub username and repo name.

   **If using HTTPS:**

   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```

   When prompted for password, use your **Personal Access Token** (Option A).

   **If using SSH:**

   ```bash
   git remote add origin git@github.com:YOUR_USERNAME/REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```

---

## Step 5: Update credentials later

- **Change name/email for future commits:**
  ```bash
  git config --global user.name "New Name"
  git config --global user.email "new.email@example.com"
  ```

- **Change remote URL** (e.g. after renaming repo or switching to SSH):
  ```bash
  git remote set-url origin https://github.com/YOUR_USERNAME/REPO_NAME.git
  # or
  git remote set-url origin git@github.com:YOUR_USERNAME/REPO_NAME.git
  ```

- **View current remote:**
  ```bash
  git remote -v
  ```

---

## Quick reference

| What you want to do        | Command / action |
|----------------------------|------------------|
| Set name                   | `git config --global user.name "Your Name"` |
| Set email                  | `git config --global user.email "you@example.com"` |
| Use HTTPS + token          | Use PAT as password when pushing; optional: `credential.helper store` |
| Use SSH                    | Add SSH key in GitHub; use `git@github.com:...` as `origin` |
| First push                 | `git init` → `git add .` → `git commit -m "..."` → `git remote add origin <url>` → `git push -u origin main` |

If you tell me your preferred auth (HTTPS with PAT or SSH) and your GitHub username and repo name, I can give you the exact `git remote add origin ...` and `git push` commands to run.
