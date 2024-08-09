using Microsoft.AspNetCore.SignalR;

namespace LearningSignalR.Hubs
{
    public class ExampleTypeSafeHub : Hub<IExampleTypeSafeHub>
    {
        private static int connectedCount = 0;
        public async Task BroadcastMessageAllClient(string message)
        {
           await Clients.All.ReveiveMessageAllClient(message);
        }
        public async Task BoardcastMessageCallerClient(string message)
        {
            await Clients.Caller.ReceiveMessageCallerClient(message);
        }
        public async Task BoardcastMessageOtherClient(string message)
        {
            await Clients.Others.ReceiveMessageOtherClient(message);
        }

        public override async Task OnConnectedAsync()
        {
            connectedCount++;
            await Clients.All.ReveiveConnectedClientCount(connectedCount);
            await base.OnConnectedAsync();
        }
        public override async Task OnDisconnectedAsync(Exception? exception)
        {
            connectedCount--;
            await Clients.All.ReveiveConnectedClientCount(connectedCount);
            await base.OnDisconnectedAsync(exception);
        }
    }
}
