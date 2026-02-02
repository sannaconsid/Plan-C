using Microsoft.AspNetCore.SignalR;

namespace WebApplication1
{
    public class ChatHub: Hub
    {
        public async Task SendMessage(string user, string message, string channel)
        {
            Console.WriteLine(user);
            var ret_val = new
            {
                id = Guid.NewGuid(),
                timestamp = DateTime.Now,
                type = user,
                channel = channel,
                text = message
            };
            await Clients.All.SendAsync("ReceiveMessage", ret_val);
        }
    }
}
