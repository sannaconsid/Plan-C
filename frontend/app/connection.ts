import * as signalR from "@microsoft/signalr";

export const connection = new signalR.HubConnectionBuilder()
  .withUrl("https://localhost:7298/chatHub", {
    withCredentials: true
  })
  .withAutomaticReconnect()
  .configureLogging(signalR.LogLevel.Information)
  .build();