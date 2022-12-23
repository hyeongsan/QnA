<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="/css/style.css">
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
    <script src="/js/main.js"></script>
</head>
<body>
    <div class="chat_wrap">
        <div class="header">
            CHAT
        </div>
        <div class="chat">
            <ul>
                <!-- 동적 생성 -->
            </ul>
        </div>
  
        <div class="input-div">
          
            <span class="chat-toggle">Q</span>
            <textarea placeholder="Press Enter for send message."></textarea>
        </div>
     
        <!-- format -->
     
        <div class="chat format">
            <ul>
                <li>
                    <div class="sender">
                        <span></span>
                    </div>
                    <div class="message">
                        <span></span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    
</body>
</html>