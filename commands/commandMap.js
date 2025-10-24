module.exports = {
  "status device": "Get-ComputerInfo",
  "check cpu": "Get-CimInstance Win32_Processor",
  "check ram": "Get-CimInstance Win32_PhysicalMemory",
  "wifi status": "Get-NetAdapter | Where-Object {$_.Status -eq 'Up'}",
  "ping google": "Test-Connection google.ca",
  // Add more mappings here
};