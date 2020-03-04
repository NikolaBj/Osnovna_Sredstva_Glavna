
namespace Osnovna_Sredstva_Glavna.Administration
{
    public interface IDirectoryService
    {
        DirectoryEntry Validate(string username, string password);
    }
}