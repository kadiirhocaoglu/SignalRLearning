using Microsoft.AspNetCore.SignalR;

namespace LearningSignalR.Hubs
{
    public class ExampleHub : Hub
    {
        public async Task BroadcastMessageAllClient ( string message)
        {
          await Clients.All.SendAsync ("ReveiveMessageAllClient", message);
        }
    }
}
