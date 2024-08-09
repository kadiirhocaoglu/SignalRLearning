namespace LearningSignalR.Hubs
{
    public interface IExampleTypeSafeHub
    {
        Task ReveiveMessageAllClient(string message);
        Task ReveiveConnectedClientCount(int connectedClient);
        Task ReceiveMessageCallerClient(string message);
        Task ReceiveMessageOtherClient(string message);
    }
}
