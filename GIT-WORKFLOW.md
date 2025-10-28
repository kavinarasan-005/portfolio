# 🔄 Git Workflow Guide

Your Chronicle portfolio is now synced with GitHub!

**Repository:** https://github.com/kavinarasan-005/portfolio

---

## 🚀 Quick Commands (3 Ways to Commit)

### Method 1: Simple Script (Recommended)
```bash
./git-push.sh "Your commit message here"
```

### Method 2: NPM Script
```bash
npm run git:push
# (Will prompt for commit message)
```

### Method 3: Manual Git Commands
```bash
git add .
git commit -m "Your commit message"
git push
```

---

## 📝 Making Changes & Committing

### **Every time you make changes:**

1. **Edit your files** (components, styles, etc.)
2. **Test locally** (`npm run dev` to verify)
3. **Commit & push:**

```bash
# Option A: Use helper script
./git-push.sh "✨ Added new feature"

# Option B: Manual
git add .
git commit -m "✨ Added new feature"
git push
```

---

## 🎯 Commit Message Best Practices

Use emojis and clear descriptions:

```bash
# Features
./git-push.sh "✨ Added contact form component"

# Bug fixes
./git-push.sh "🐛 Fixed mobile menu animation"

# Styling
./git-push.sh "💄 Updated hero section colors"

# Documentation
./git-push.sh "📝 Updated README with setup instructions"

# Performance
./git-push.sh "⚡ Optimized image loading"

# Refactoring
./git-push.sh "♻️ Refactored Header component"

# Configuration
./git-push.sh "🔧 Updated Tailwind config"
```

### Common Emojis:
- ✨ `:sparkles:` - New feature
- 🐛 `:bug:` - Bug fix
- 💄 `:lipstick:` - UI/styling
- 📝 `:memo:` - Documentation
- ⚡ `:zap:` - Performance
- ♻️ `:recycle:` - Refactoring
- 🔧 `:wrench:` - Configuration
- 🚀 `:rocket:` - Deployment
- 🎨 `:art:` - Design/structure

---

## 📊 Check Status

See what files have changed:
```bash
git status

# Or use npm script:
npm run git:status
```

---

## 🔍 View History

See all your commits:
```bash
git log --oneline --graph --decorate
```

---

## 🌿 Branching (Optional)

Create feature branches for major changes:

```bash
# Create and switch to new branch
git checkout -b feature/new-section

# Make changes and commit
git add .
git commit -m "✨ Added testimonials section"

# Push branch to GitHub
git push -u origin feature/new-section

# Switch back to main
git checkout main

# Merge feature branch
git merge feature/new-section

# Push merged changes
git push
```

---

## ⚠️ If You Make Mistakes

### Undo last commit (keep changes):
```bash
git reset --soft HEAD~1
```

### Discard all local changes:
```bash
git reset --hard HEAD
```

### Pull latest from GitHub:
```bash
git pull origin main
```

---

## 🔄 Daily Workflow Example

```bash
# Morning: Pull latest changes
git pull

# Make changes to components
# ... edit files ...

# Afternoon: Test locally
npm run dev

# Commit and push
./git-push.sh "💄 Updated hero gradient colors"

# Continue working
# ... more edits ...

# Evening: Final push
./git-push.sh "✨ Added newsletter subscription"
```

---

## 📦 Deployment Workflow

### Before deploying:
```bash
# 1. Test build
npm run build

# 2. Preview production build
npm run preview

# 3. Check for errors
npm run type-check

# 4. Commit and push
./git-push.sh "🚀 Ready for deployment"
```

---

## 🆘 Troubleshooting

### "Failed to push"
```bash
# Pull remote changes first
git pull origin main

# Then push again
git push
```

### "Merge conflicts"
```bash
# Edit conflicted files
# Look for <<<<<<< markers
# Choose which changes to keep
git add .
git commit -m "🔧 Resolved merge conflicts"
git push
```

### "Detached HEAD state"
```bash
git checkout main
```

---

## 🎯 Quick Reference Card

| Task | Command |
|------|---------|
| **Commit & Push** | `./git-push.sh "message"` |
| **Check Status** | `git status` |
| **View History** | `git log --oneline` |
| **Pull Updates** | `git pull` |
| **Undo Commit** | `git reset --soft HEAD~1` |
| **Discard Changes** | `git reset --hard HEAD` |
| **View Remote** | `git remote -v` |

---

## 🔗 Useful Links

- **Your Repository:** https://github.com/kavinarasan-005/portfolio
- **Commit History:** https://github.com/kavinarasan-005/portfolio/commits/main
- **Git Documentation:** https://git-scm.com/docs

---

## 💡 Pro Tips

1. **Commit often** - Small, frequent commits are better than large ones
2. **Write clear messages** - Future you will thank you
3. **Test before pushing** - Always run `npm run dev` to check
4. **Pull before pushing** - Avoid conflicts by pulling latest changes first
5. **Use branches** - For experimental features, create a branch

---

## 🎉 You're All Set!

Every change you make will now be tracked and backed up on GitHub!

**Happy coding! 🚀**

