Write-Host "Installing dependencies..." -ForegroundColor Cyan
npm.cmd install
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }
Write-Host "Starting Next.js development server..." -ForegroundColor Green
npm.cmd run dev
