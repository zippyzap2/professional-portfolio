# Local development runner for Windows PowerShell.
#
# Run from the project root:
#   npm run dev:local
#
# Or run this script directly:
#   powershell -NoProfile -ExecutionPolicy Bypass -File .\scripts\dev-local.ps1
#
# The script starts at port 4000 and skips Windows-reserved or busy ports.
# Press Ctrl+C to stop the server.
$ErrorActionPreference = "Stop"

$projectRoot = Split-Path -Parent $PSScriptRoot
Set-Location -LiteralPath $projectRoot

if (-not (Test-Path -LiteralPath ".\node_modules")) {
  Write-Host "Dependencies missing. Run npm install first." -ForegroundColor Yellow
  exit 1
}

$excludedRanges = @()
$excludedOutput = & netsh interface ipv4 show excludedportrange protocol=tcp 2>$null
foreach ($line in $excludedOutput) {
  $match = [regex]::Match($line, '^\s*(\d+)\s+(\d+)')
  if ($match.Success) {
    $excludedRanges += [pscustomobject]@{
      Start = [int]$match.Groups[1].Value
      End = [int]$match.Groups[2].Value
    }
  }
}

function Test-PortBlocked {
  param([int]$PortNumber)

  foreach ($range in $excludedRanges) {
    if ($PortNumber -ge $range.Start -and $PortNumber -le $range.End) {
      return $true
    }
  }

  if (Get-NetTCPConnection -LocalPort $PortNumber -State Listen -ErrorAction SilentlyContinue) {
    return $true
  }

  return $false
}

$port = 4000
while (Test-PortBlocked -PortNumber $port) {
  $port++
}

$url = "http://127.0.0.1:$port"

Write-Host "Starting the portfolio locally..." -ForegroundColor Cyan
Write-Host "Local URL: $url"
Write-Host "Press Ctrl+C to stop the server."
Write-Host ""

$browserJob = Start-Job -ScriptBlock {
  param($targetUrl)

  for ($attempt = 0; $attempt -lt 60; $attempt++) {
    try {
      $response = Invoke-WebRequest -Uri $targetUrl -UseBasicParsing -TimeoutSec 2
      if ($response.StatusCode -eq 200) {
        Start-Process $targetUrl
        return
      }
    } catch {
      Start-Sleep -Milliseconds 500
    }
  }
} -ArgumentList $url

try {
  npm run dev -- -H 127.0.0.1 -p $port
} finally {
  Remove-Job -Id $browserJob.Id -Force -ErrorAction SilentlyContinue
}