import React, { useState, useEffect } from "react";
import "./Login.css";

const User = {
  email: "test@gmail.com",
  pw: "test2323@@@!",
};

export default function Login() {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [emailValid, setemailValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);
  const [notAllow, setNotAllow] = useState(true);
  const handleEmail = (e) => {
    setEmail(e.target.value);
    const regex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (regex.test(email)) {
      setemailValid(true);
    } else {
      setemailValid(false);
    }
  };
  const handlePw = (e) => {
    setPw(e.target.value);
    const regex =
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
    if (regex.test(pw)) {
      setPwValid(true);
    } else {
      setPwValid(false);
    }
  };
  const onClickConfirmBtn = () => {
    if (email === User.email && pw === User.pw) {
      alert("로그인성공!");
    } else {
      alert("미등록 유저입니다.");
    }
  };
  useEffect(() => {
    if (emailValid && pwValid) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [emailValid, pwValid]);

  return (
    <div className="page">
      <div className="titleWrap">
        이메일과 비밀번호를 <br />
        입력해주세요
      </div>

      <div className="contentWrap">
        <div className="inputTitle">이메일 주소</div>
        <div className="inputWrap">
          <input
            value={email}
            className="input"
            placeholder="test@gmail.com"
            onChange={handleEmail}
          />
        </div>
        <div className="errorMessageWrap">
          {!emailValid && email.length > 0 && (
            <div> 올바른 이메일을 입력 해주세요.</div>
          )}
        </div>

        <div className="inputTitle">비밀번호</div>
        <div className="inputWrap">
          <input
            type="password"
            value={pw}
            onChange={handlePw}
            className="input"
            placeholder="영문,특수문자포함 8자 이상"
          />
        </div>
        <div className="errorMessageWrap">
          {!pwValid && pw.length > 0 && (
            <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
          )}
        </div>
      </div>
      <div>
        <button
          onClick={onClickConfirmBtn}
          className="bottomBtn"
          disabled={notAllow}
        >
          확인
        </button>
      </div>
    </div>
  );
}
