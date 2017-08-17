$port= new-Object System.IO.Ports.SerialPort COM3,38400,None,8,one
$port.open()
$timestamp = " "
while($true){
[string[]]$Output =$port.ReadLine() -split ";"
[string[]]$FlowRate =$Output[0] -split ":"  -split "L/min"
[string[]]$CurrentLiquidFlowing =$Output[1] -split ":" -split "mL/Sec"
[string[]]$OutputLiquidFlowing =$Output[2] -split ":" -split "mL"
[double]$macroRate =$FlowRate[1].Trim()
[int]$microRate =$CurrentLiquidFlowing[1].Trim()
[int]$quantity =$OutputLiquidFlowing[1].Trim()
$timestamp = [long] ((New-TimeSpan -Start (Get-Date -Date '1970-01-01') -End ((Get-Date).ToUniversalTime())).TotalSeconds * 1E9)
$deviceID='00000000e215b4a2'
$body = @{
    deviceID=$deviceID  
    microRate=$microRate
    macroRate=$macroRate
    quantity=$quantity
    timestamp=$timestamp
}
$json = $body | ConvertTo-Json
$response = Invoke-RestMethod 'http://h2o.iotcommons.com:3001/usage' -Method Post -Body $json -ContentType 'application/json'

}
