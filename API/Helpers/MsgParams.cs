namespace API.Helpers
{
    public class MsgParams : PaginationsParams
    {
        public string Username { get; set; }
        public string Container { get; set; } = "Unread";
    }
}