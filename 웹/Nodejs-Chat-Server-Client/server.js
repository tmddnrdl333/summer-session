var app = require("express")();
var http = require("http").Server(app);
var io = require("socket.io")(http);

// client 최초 접속시 보이는 화면
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

// 서버 실행
http.listen(3000, function () {
  console.log("server listening on port :3000");
});

var userList = [];
var chatList = [];

io.on("connection", function (socket) {
  var joinedUser = false;
  var nickname;

  console.log(socket.id, "Connected");

  socket.emit("msg", `${socket.id} 연결 되었습니다.`);

  // 유저 입장
  socket.on("join", function (data) {
    // 구현해보자
    for (var log of chatList) {
      socket.emit("msg", log);
    }
  });

  // 메시지 전달
  socket.on("msg", function (data) {
    let chatLog = `${socket.id} : ${data}`;
    console.log(`${socket.id} : ${data}`); // server에
    chatList.push(chatLog);
    socket.emit("msg", `${socket.id} : ${data}`); // client에
  });

  // 접속 종료
  socket.on("disconnect", function (data) {
    // 구현해보자
  });
});
