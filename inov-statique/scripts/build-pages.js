const { spawnSync } = require('node:child_process')

const npmCmd = process.platform === 'win32' ? 'npm.cmd' : 'npm'

const result = spawnSync(npmCmd, ['run', 'build'], {
  stdio: 'inherit',
  env: {
    ...process.env,
    GITHUB_PAGES: 'true',
    GITHUB_PAGES_REPO: process.env.GITHUB_PAGES_REPO || 'NextJS-Bookworm-site',
  },
})

if (result.status !== 0) {
  process.exit(result.status ?? 1)
}