import serial
import json
import requests
import time
current_time = lambda: int(round(time.time() *1000000000))
ser = serial.Serial('/dev/ttyUSB0',38400)
read_serial = " "
deviceID = "00000000e215b4a2"
url = "http://h20.iotcommons.com:3001/usage"
while True:
    read_serial=str(ser.readline(),'utf-8')
    Flowrate = read_serial.split(";")[0]
    Flowrate_parsed = Flowrate.replace("L/min","")
    Flowrate_parsed2 = Flowrate_parsed.replace("Flow rate:","")
  
    CurrentLiquidFlow = read_serial.split(";")[1]
    CurrentLiquidFlow_parsed = CurrentLiquidFlow.replace("mL/Sec","")
    CurrentLiquidFlow_parsed2 = CurrentLiquidFlow_parsed.replace("Current Liquid Flowing:","")
    
    
    OutputLiquidFlow = read_serial.split(";")[2]
    OutputLiquidFlow_parsed = OutputLiquidFlow.replace("mL","")
    OutputLiquidFlow_parsed2 = OutputLiquidFlow_parsed.replace("Output Liquid Quantity:","")
    data = {
          'deviceID' :  deviceID,
          'microRate' : CurrentLiquidFlow_parsed2.replace(" ", "" ),
          'macroRate' :  Flowrate_parsed2.replace(" ", "" ),
          'quantity' : OutputLiquidFlow_parsed2.replace(" ","" ),
          'timestamp' : current_time()
        }
    
    response = requests.post(url, json=data)
    print (Flowrate_parsed2.replace(" ", "" ))
    print (CurrentLiquidFlow_parsed2.replace(" ", "" ))
    print (OutputLiquidFlow_parsed2.replace(" ", ""))
    print (response)
