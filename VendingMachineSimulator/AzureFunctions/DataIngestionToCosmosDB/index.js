module.exports = function (context, IoTHubMessages) {
    context.log(`JavaScript eventhub trigger function called for message array: ${IoTHubMessages}`);

    var count = 0;
    var totalTemperature = 0.0;
    var totalHumidity = 0.0;
    var lattecount = 0.0;
    var espresscount = 0.0;
    var stocklevel = 0.0;
    var deviceId = "";

    IoTHubMessages.forEach(message => {
        context.log(`Processed message: ${message}`);
        count++;
        alert += message.Alert;
        eventDescription += message.EventDescription;
        status = message.Status;
        val = message.Val;
        eventType = message.EventType;
        machineid = message.MachineId;
    });

    var output = {
        "machineId": machineid,
        "eventType": eventType,
        "value": val,
        "status": status,
        "eventDescription": eventDescription,
        "alert":alert
    };

    context.log(`Output content: ${output}`);

    context.bindings.outputDocument = output;

    context.done();
};