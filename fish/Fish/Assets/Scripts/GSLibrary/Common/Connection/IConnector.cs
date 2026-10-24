using System;
namespace GSLibrary.Common.Connection
{
    public interface IConnector
    {
        void OnConnectionClosed(GSConnectionErrorType type, GSGameState gameState);
    }
}

