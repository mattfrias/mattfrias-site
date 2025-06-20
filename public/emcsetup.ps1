# Ensure script is run as Administrator
if (-not ([Security.Principal.WindowsPrincipal] [Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltinRole]::Administrator)) {
    Write-Host "Please run this script as Administrator." -ForegroundColor Red
    exit 1
}

# Check if winget is available
if (-not (Get-Command "winget" -ErrorAction SilentlyContinue)) {
    Write-Host "winget is not available. Please update your system or install App Installer from Microsoft Store." -ForegroundColor Red
    exit 1
}

# Install Google Chrome
Write-Host " "
Write-Host "------------------------------------------------------------------------------------------------------------"
Write-Host " "
Write-Host "Installing Google Chrome..."
winget install --id Google.Chrome --exact --silent --accept-package-agreements --accept-source-agreements

# Install Microsoft Teams (Machine-wide)
Write-Host " "
Write-Host "------------------------------------------------------------------------------------------------------------"
Write-Host " "
Write-Host "Installing Microsoft Teams..."
winget install --id Microsoft.Teams --exact --silent --accept-package-agreements --accept-source-agreements

# Install Microsoft 365 (Office)
Write-Host " "
Write-Host "------------------------------------------------------------------------------------------------------------"
Write-Host " "
Write-Host "Installing Microsoft Office (Microsoft 365)..."
winget install --id Microsoft.Office --exact --silent --accept-package-agreements --accept-source-agreements

# Install Adobe Acrobat Reader DC
Write-Host " "
Write-Host "------------------------------------------------------------------------------------------------------------"
Write-Host " "
Write-Host "Installing Adobe Reader..."
winget install --id Adobe.Acrobat.Reader.64-bit --exact --silent --accept-package-agreements --accept-source-agreements

# Set sleep settings to never (when plugged in)
Write-Host " "
Write-Host "------------------------------------------------------------------------------------------------------------"
Write-Host " "
Write-Host "Configuring power settings..."
powercfg /change standby-timeout-ac 0
powercfg /change hibernate-timeout-ac 0

# Set 'emcadmin' password to never expire
Write-Host " "
Write-Host "------------------------------------------------------------------------------------------------------------"
Write-Host " "
Write-Host "Setting 'emcadmin' password to never expire..."
try {
    Get-LocalUser -Name "emcadmin" | Set-LocalUser -PasswordNeverExpires $true
    Write-Host "'emcadmin' account configured."
} catch {
    Write-Host "Error: Could not set password policy for 'emcadmin'. Make sure the account exists." -ForegroundColor Yellow
}

Write-Host " "
Write-Host "------------------------------------------------------------------------------------------------------------"
Write-Host " "
Write-Host "All tasks completed successfully!" -ForegroundColor Green
