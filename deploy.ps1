param(
    [switch]$All
)

$ErrorActionPreference = "Stop"

# Ensure local repo is up to date before publishing
$repoRoot = $PSScriptRoot
Write-Host "Updating local repository..."
& git -C $repoRoot fetch --all
$branch = (& git -C $repoRoot rev-parse --abbrev-ref HEAD).Trim()
Write-Host "Pulling latest from origin/$branch..."
& git -C $repoRoot pull --rebase origin $branch

Write-Host "Publishing Blazor project..."
# Publish the Blazor WebAssembly project to local publish folder
& dotnet publish "portfolio.main/portfolio.main.csproj" -c Release -o "publish"

$docsDir = Join-Path $PSScriptRoot "docs"
$publishWwwroot = Join-Path $PSScriptRoot "publish\wwwroot"

Write-Host "Cleaning docs folder..." 
if (Test-Path $docsDir) {
    Get-ChildItem -Path $docsDir -Force | Remove-Item -Recurse -Force
}
else {
    New-Item -ItemType Directory -Path $docsDir | Out-Null
}

Write-Host "Copying published files to docs..."
Copy-Item -Path (Join-Path $publishWwwroot "*") -Destination $docsDir -Recurse -Force

# Ensure .nojekyll exists
Write-Host "Creating .nojekyll flag..."
Set-Content -Path (Join-Path $docsDir ".nojekyll") -Value "" -Force

# Remove compressed assets (.br, .gz) under _framework only
$frameworkDir = Join-Path $docsDir "_framework"
if (Test-Path $frameworkDir) {
    Write-Host "Removing .br and .gz from _framework..."
    Get-ChildItem -Path $frameworkDir -Recurse -File -Include *.br, *.gz | Remove-Item -Force
}

Write-Host "Preparing to commit and push changes..."

# Stage changes: docs by default, all if -All specified
if ($All) {
    Write-Host "Staging all repository changes (All switch set)..."
    & git -C $repoRoot add -A
}
else {
    Write-Host "Staging docs folder changes..."
    & git -C $repoRoot add docs
}

# Commit only if there are staged changes
$staged = (& git -C $repoRoot diff --cached --name-only).Trim()
if (-not $staged) {
    Write-Host "No staged changes to commit. Skipping push." -ForegroundColor Yellow
    Write-Host "Deploy script complete (no updates)."
    return
}

$commitMessage = "Local deploy to docs folder [local-deploy]"
Write-Host "Committing changes..."
& git -C $repoRoot commit -m $commitMessage

Write-Host "Pushing to origin/$branch..."
& git -C $repoRoot push origin $branch

Write-Host "Deploy script complete (pushed)."
