let nameToggle = false;

const Chat = (function () {
  let myName = "";
  //작성자 결정 토글링 (Q or A)
  $(document).on("mousedown", ".chat-toggle", function () {
    console.log("챗토글");
    const chatToggle = $(".chat-toggle");

    console.log(chatToggle.text());

    if (chatToggle.text() == "Q") {
      chatToggle.text("A");
    } else if (chatToggle.text() == "A") {
      chatToggle.text("Q");
    }
  });

  // init 함수
  function init() {
    // enter 키 이벤트
    $(document).on("keydown", "div.input-div textarea", function (e) {
      if (e.keyCode == 13 && !e.shiftKey) {
        e.preventDefault();
        !nameToggle;
        const message = $(this).val();
        // 메시지 전송
        sendMessage(message);
        // 입력창 clear
        clearTextarea();
      }
    });
  }

  // 메세지 태그 생성
  function createMessageTag(LR_className, senderName, message) {
    // 형식 가져오기
    let chatLi = $("div.chat.format ul li").clone();

    // 값 채우기
    chatLi.addClass(LR_className);
    chatLi.find(".sender span").text(senderName);
    chatLi.find(".message span").text(message);

    return chatLi;
  }

  // 메세지 태그 append
  function appendMessageTag(LR_className, senderName, message) {
    const chatLi = createMessageTag(LR_className, senderName, message);

    $("div.chat:not(.format) ul").append(chatLi);

    // 스크롤바 아래 고정
    $("div.chat").scrollTop($("div.chat").prop("scrollHeight"));
  }

  // 메세지 전송
  function sendMessage(message) {
    // 서버에 전송하는 코드로 후에 대체
    let data = {
      senderName: "blue",
      message: message,
    };

    // 통신하는 기능이 없으므로 여기서 receive
    resive(data);
  }

  // 메세지 입력박스 내용 지우기
  function clearTextarea() {
    $("div.input-div textarea").val("");
  }

  // 메세지 수신
  function resive(data) {
    if (nameToggle) {
      myName = "blue";
      nameToggle = false;
      console.log("here");
    } else {
      myName = "red";
      nameToggle = true;
    }

    const LR = data.senderName != myName ? "left" : "right";
    if (LR == "left") {
      data.senderName = "Q";
    } else {
      data.senderName = "A";
    }
    appendMessageTag(LR, data.senderName, data.message);
  }

  return {
    init: init,
  };
})();

$(function () {
  Chat.init();
});
