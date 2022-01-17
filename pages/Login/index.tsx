import { useCallback, useState } from 'react';
import Router from 'next/router';
import Image from 'next/image';
import IOSAppDownloadImg from '/assets/images/4a5c9d62d51b.png';
import AndroidAppDownloadImg from '/assets/images/f155b664a93b.png';
import Slide01Img from '/assets/images/d6bf0c928b5a.jpg';
import Slide02Img from '/assets/images/6f03eb85463c.jpg';
import Slide03Img from '/assets/images/f0c687aa6ec2.jpg';
import Slide04Img from '/assets/images/842fe5699220.jpg';
import Slide05Img from '/assets/images/0a2d3016f375.jpg';
import FadeGallery from '../../components/FadeGallery';
import useInput from '../../hooks/useInput';

const Login = () => {
  const [email, handleChangeEmail] = useInput({
    type: 'string',
  });
  const [pwd, handleChangePwd] = useInput({
    type: 'string',
  });

  const [isPwdShow, setIsPwdShow] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');

  const handlePwdShow = () => {
    setIsPwdShow(!isPwdShow);
  };

  const handleSubmit = useCallback(
    (e: React.MouseEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (email !== 'insta_clone') {
        setErrorMsg('입력한 사용자 이름을 사용하는 계정을 찾을 수 없습니다. 사용자 이름을 확인하고 다시 시도하세요.');
      } else if (pwd !== '12345') {
        setErrorMsg('잘못된 비밀번호입니다. 다시 확인하세요.');
      } else if (email === 'insta_clone' && pwd === '12345') {
        Router.push('/Main');
      }
    },
    [email, pwd],
  );
  return (
    <>
      <main className="flex text-center bg-almost-white">
        <div className="flex justify-center w-full mx-auto xs:mt-8 max-w-[935px] pb-8">
          {/* left */}
          <div className="relative hidden md:block self-center basis-[454px]  h-[618px] bg-[url('../assets/images/phone.png')] mb-5 -ml-9 -mr-4">
            <div className="absolute top-[100px] right-[64px] w-[238px] h-[426px]">
              <div className="slider"></div>
              <FadeGallery duration={6}>
                <Image src={Slide01Img} width="238" height="426" alt="" />
                <Image src={Slide02Img} width="238" height="426" alt="" />
                <Image src={Slide03Img} width="238" height="426" alt="" />
                <Image src={Slide04Img} width="238" height="426" alt="" />
                <Image src={Slide05Img} width="238" height="426" alt="" />
              </FadeGallery>
            </div>
          </div>
          {/* Right */}
          <div className="justify-center w-[350px] xs:mt-8 bg-white">
            <div className="xs:box pt-2.5 border-0">
              <h1 className="overflow-hidden w-44 h-[51px] mt-5 mb-3 mx-auto bg-[url('../assets/images/32f0a4f27407.png')] bg-0&-130 bg-no-repeat">
                <span className="sr-only">instagram</span>
              </h1>
              <form onSubmit={handleSubmit} className="mx-10">
                <div className="relative mt-9 mb-1.5">
                  <input
                    id="id"
                    type="text"
                    name="email"
                    value={email}
                    onChange={handleChangeEmail}
                    autoComplete="false"
                    className="input pt-3 pb-0 text-xs"
                  />
                  <label
                    htmlFor="id"
                    className={`${email && 'active'}
                    pointer-events-none placeholder-scale absolute left-2 top-1/2 transform -translate-y-1/2 text-xs text-gray-400`}
                  >
                    전화번호, 사용자 이름 또는 이메일
                  </label>
                </div>

                <div className="relative">
                  <input
                    id="pwd"
                    name="password"
                    type={isPwdShow ? 'text' : 'password'}
                    value={pwd}
                    onChange={handleChangePwd}
                    className="input pt-3 pb-0 text-xs"
                  />
                  {pwd !== '' && (
                    <button
                      type="button"
                      className="absolute top-1/2 right-[1px] h-[35px] bg-white border border-transparent py-1 px-2 transform -translate-y-1/2 text-sm font-semibold"
                      onClick={handlePwdShow}
                    >
                      {isPwdShow ? '숨기기' : '비밀번호 표시'}
                    </button>
                  )}
                  <label
                    htmlFor="pwd"
                    className={`${pwd && 'active'}
                    pointer-events-none placeholder-scale absolute left-2 top-1/2 transform -translate-y-1/2 text-xs text-gray-400`}
                  >
                    비밀번호
                  </label>
                </div>
                <button
                  type="submit"
                  className={`w-full mt-4 py-1.5 text-white font-semibold text-sm rounded-[4px] 
                    ${pwd.length >= 5 ? 'bg-[rgb(0,149,246)]' : 'pointer-events-none bg-[rgba(0,149,246,.3)]'}
                  `}
                >
                  로그인
                </button>
                <div className="relative text-gray-500 text-[13px] font-semibold mt-4 before:content-[''] before:absolute before:block before:h-[0.5px] before:w-[38%] before:top-1/2 before:left-0 before:bg-gray-300 after:content-[''] after:absolute after:block after:h-[0.5px] after:w-[38%] after:top-1/2 after:right-0 after:bg-gray-300 ">
                  또는
                </div>
                <button
                  type="button"
                  className="mt-3 pt-3 pb-1 text-sm text-blue-900 font-semibold before-content-[''] before:relative before:t-[3px] before:inline-block before:w-4 before:h-4 before:bg-[url('../assets/images/32f0a4f27407.png')] before:-bg-414&-259 before:mr-2 before:align-text-bottom"
                >
                  Facebook으로 로그인
                </button>
                <p className="my-2 text-sm text-[rgb(237,73,86)]">{errorMsg}</p>
                <a href="" className="block text-xs mt-4 mb-5 text-center">
                  비밀번호를 잊으셨나요?
                </a>
              </form>
            </div>
            <div className="xs:box mt-2.5 py-2.5">
              <p className="text-sm m-2.5 text-center">
                계정이 없으신가요?
                <a href="" className="ml-1 text-sky-500 font-semibold text-sm">
                  가입하기
                </a>
              </p>
            </div>
            <p className="text-sm mt-5 mb-5 mx-5 text-center">앱을 다운로드하세요.</p>
            <div className="flex justify-center">
              <div className="mr-2">
                <Image src={IOSAppDownloadImg} width="136" height="40" alt="App Store에서 이용 가능" />
              </div>
              <div className="w-32 h-10">
                <Image src={AndroidAppDownloadImg} width="136" height="40" alt="Google Play에서 이용 가능" />
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="flex justify-center flex-col max-w-[710px] mx-auto mb-16">
        <ul className="flex justify-center flex-wrap mb-2">
          <li>
            <a href="" className="footer-text">
              Meta
            </a>
          </li>
          <li>
            <a href="" className="footer-text">
              소개
            </a>
          </li>
          <li>
            <a href="" className="footer-text">
              블로그
            </a>
          </li>
          <li>
            <a href="" className="footer-text">
              채용 정보
            </a>
          </li>
          <li>
            <a href="" className="footer-text">
              도움말
            </a>
          </li>
          <li>
            <a href="" className="footer-text">
              API
            </a>
          </li>
          <li>
            <a href="" className="footer-text">
              개인정보처리방침
            </a>
          </li>
          <li>
            <a href="" className="footer-text">
              약관
            </a>
          </li>
          <li>
            <a href="" className="footer-text">
              인기 계정
            </a>
          </li>
          <li>
            <a href="" className="footer-text">
              해시태그
            </a>
          </li>
          <li>
            <a href="" className="footer-text">
              위치
            </a>
          </li>
          <li>
            <a href="" className="footer-text">
              Instagram Lite
            </a>
          </li>
          <li>
            <a href="" className="footer-text">
              뷰티
            </a>
          </li>
          <li>
            <a href="" className="footer-text">
              댄스
            </a>
          </li>
          <li>
            <a href="" className="footer-text">
              피트니스
            </a>
          </li>
          <li>
            <a href="" className="footer-text">
              식음료
            </a>
          </li>
          <li>
            <a href="" className="footer-text">
              집 및 정원
            </a>
          </li>
          <li>
            <a href="" className="footer-text">
              음악
            </a>
          </li>
          <li>
            <a href="" className="footer-text">
              시각 예술
            </a>
          </li>
        </ul>
        <div className="flex justify-center mt-2">
          <div className="relative">
            <div className="flex text-[rgb(142,142,142)] text-xs">
              <span>한국어</span>
              <span className="flex items-center ml-1 rotate-180">
                <svg
                  aria-label="아래쪽 V자형 아이콘"
                  color="#8e8e8e"
                  fill="#8e8e8e"
                  height="12"
                  role="img"
                  viewBox="0 0 24 24"
                  width="12"
                >
                  <path d="M21 17.502a.997.997 0 01-.707-.293L12 8.913l-8.293 8.296a1 1 0 11-1.414-1.414l9-9.004a1.03 1.03 0 011.414 0l9 9.004A1 1 0 0121 17.502z"></path>
                </svg>
              </span>
            </div>
            <select
              className="absolute top-0 left-0 w-full h-full  opacity-0 text-[rgb(142,142,142)] cursor-pointer border-0"
              name=""
              id=""
            >
              <option value="ko">한국어</option>
              <option value="af">Afrikaans</option>
              <option value="cs">Čeština</option>
              <option value="da">Dansk</option>
              <option value="de">Deutsch</option>
              <option value="el">Ελληνικά</option>
              <option value="en">English</option>
              <option value="en-gb">English (UK)</option>
              <option value="es">Español (España)</option>
              <option value="es-la">Español</option>
              <option value="fi">Suomi</option>
              <option value="fr">Français</option>
              <option value="id">Bahasa Indonesia</option>
              <option value="it">Italiano</option>
              <option value="ja">日本語</option>
              <option value="ms">Bahasa Melayu</option>
              <option value="nb">Norsk</option>
              <option value="nl">Nederlands</option>
              <option value="pl">Polski</option>
              <option value="pt-br">Português (Brasil)</option>
              <option value="pt">Português (Portugal)</option>
              <option value="ru">Русский</option>
              <option value="sv">Svenska</option>
              <option value="th">ภาษาไทย</option>
              <option value="tl">Filipino</option>
              <option value="tr">Türkçe</option>
              <option value="zh-cn">中文(简体)</option>
              <option value="zh-tw">中文(台灣)</option>
              <option value="bn">বাংলা</option>
              <option value="gu">ગુજરાતી</option>
              <option value="hi">हिन्दी</option>
              <option value="hr">Hrvatski</option>
              <option value="hu">Magyar</option>
              <option value="kn">ಕನ್ನಡ</option>
              <option value="ml">മലയാളം</option>
              <option value="mr">मराठी</option>
              <option value="ne">नेपाली</option>
              <option value="pa">ਪੰਜਾਬੀ</option>
              <option value="si">සිංහල</option>
              <option value="sk">Slovenčina</option>
              <option value="ta">தமிழ்</option>
              <option value="te">తెలుగు</option>
              <option value="vi">Tiếng Việt</option>
              <option value="zh-hk">中文(香港)</option>
              <option value="bg">Български</option>
              <option value="fr-ca">Français (Canada)</option>
              <option value="ro">Română</option>
              <option value="sr">Српски</option>
              <option value="uk">Українська</option>
            </select>
          </div>
          <span className="inline-block ml-4 text-xs text-[rgb(142,142,142)]">© 2022 Instagram from Meta</span>
        </div>
      </footer>
    </>
  );
};

export default Login;
