package com.noti.demo.controller;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

@Controller
public class PushNotificationController {
	
	SimpMessagingTemplate simpMessagingTemplate;
	
	// mapped as /app/application
	@MessageMapping("/application")
	@SendTo("/public/messages")
	public PushNotification sendToAll(final PushNotification message) throws Exception
	{
		return message;
	}
	
	// mapped as /app/chat
	@MessageMapping("/chat")
	public void sendToSpecific(@Payload PushNotification message)
	{
		simpMessagingTemplate.convertAndSendToUser(message.getReceiver(), "/private", message);
	}
	

}
 