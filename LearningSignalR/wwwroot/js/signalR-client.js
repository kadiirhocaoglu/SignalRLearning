$(document).ready(function () {

    const broadcastMessageToAllClientHubMethodCall = "BroadcastMessageAllClient";
    const reveiveMessageAllClientMethodCall = "ReveiveMessageAllClient";
    const reveiveConnectedClientCount = "ReveiveConnectedClientCount";
    const boardcastMessageCallerClient = "BoardcastMessageCallerClient";
    const reveiveMessageCallerClientHubMethodCall = "ReceiveMessageCallerClient";
    const boardcastMessageOtherClient = "BoardcastMessageOtherClient";
    const receiveMessageOtherClientHubMethodCall = "ReceiveMessageOtherClient";

    const connection = new signalR.HubConnectionBuilder().withUrl("/exampletypesafehub").configureLogging(signalR.LogLevel.Information).build();
    function start() {
        connection.start().then(() => console.log("Bağlantı kuruldu"));
    }
    try {
        start();
    }
    catch {
        setTimeout(()=>start(), 5000)

    }

    var client = $("#slm");
    connection.on(reveiveConnectedClientCount, (message) => {
        console.log(message);
        client.text(message);
    })


    connection.on(reveiveMessageAllClientMethodCall, (count) => {
        console.log("connected client count", count);
    })
    connection.on(reveiveMessageCallerClientHubMethodCall, (message) => {
        console.log(message);
    })
    connection.on(receiveMessageOtherClientHubMethodCall, (message) => {
        console.log(message);
    })

    $("#btn-send-message-all-client").click(function () {
        const message = "Herkese giden mesaj";
        connection.invoke(broadcastMessageToAllClientHubMethodCall, message).catch( () => console.error("hata"));  
    })
    $("#caller-button").click(function () {
        const message = "Sadece çağırana bu mesaj";
        connection.invoke(boardcastMessageCallerClient, message).catch(() => console.error("caller hata"));
    })
    $("#others-button").click(function () {
        const message = " bu mesaj diğer clientlara";
        connection.invoke(boardcastMessageOtherClient, message).catch((() => console.error("caller hata")));
    })
})